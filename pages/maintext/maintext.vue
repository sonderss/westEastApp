<template>
	<view>
		<view class="content_dynamics">
			<view class="user_time">
				<view @tap="goMine(list.name)">
					<image :src="list.headimg" mode=""></image>
					<view>
						<view>
							<text>{{list.name}}</text>
						</view>
						<text>23小时前&nbsp;|&nbsp;浏览量48</text>
					</view>				
				</view>
				<view @tap='Guanzhu' :class="{guaned:isGuan}">
					<text>{{isGuan?'已关注':'+关注'}}</text>
				</view>
			</view>
			<view class="banner">
				<swiper :duration="200" @change="change">
					<swiper-item class="swiper-item" v-for="(x,index) in list.bigimgList" :key="index" @tap="previewimg(list.bigimgList)">
						<image :src="x" mode="widthFix"></image>
					</swiper-item>
				</swiper>
				<view class="tipNum">
					{{num}}/{{list.bigimgList.length}}
				</view>
			</view>
			<view class="user_content">
				<view>
					<text style="color:#0145AB;" @tap='goHuati()'>{{list.tip}}</text>
					<text>{{list.title}}</text>
				</view>
			</view>
			<view class="bottom">
				<view>
					<text @tap='goQuanzi'>{{list.sign}}</text>
				</view>		
			</view>
		</view>
		<view class="talk">
			<view>
				<text>全部评论&nbsp;({{list.pinglun}})</text>
			</view>
			<view>
				<view v-if="list.pinglun==0?false:true">
					<talk-list :list="talklist" @updateDianzan="updateDianzan" @updatereplyzan="updatereplyzan" @replaybozhu="replaybozhu" @tomian="goMine"></talk-list>
				</view>
				<view v-else>
					<view class="notalk">
						<image src="/static/img/sendindex/notalk.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="writecon">
			<view @tap='isShow'>
				我要写评论...
			</view>
			<view>
				<view @tap='isShow'>
					<image src="/static/img/sendindex/dynamics/pinglun.png" mode=""></image>
				</view>
				<view @tap="changebtn">
					<image :src="flag?'/static/img/sendindex/dynamics/dianzaned.png':'/static/img/sendindex/dynamics/dianzan.png'" mode=""></image>
				</view>
				<view @tap="share">
					<image src="/static/img/sendindex/dynamics/fenxiang.png" mode=""></image>
				</view>
			</view>
		</view>
		<write-comment ref="writecom" @fabu="publish"></write-comment>
		<!-- 分享 -->
		<uni-popup ref='isShare' type="bottom" :custom="false">
			<view class="cont">
				<view class="weixin">				
					<image @click="share_weixin" src='../../static/img/confirmation/wechat.png'/>
						<text style="padding-top:15upx">微信好友</text>
				</view>
				<view class="pengyou">				
					<image @click="share_pyquan" src='../../static/img/confirmation/pyq.png'/>
					<text  style="padding-top:15upx">朋友圈</text>
				</view>
			</view>
			<view class="btn" @click="hidePop">关  闭</view>
		</uni-popup>
	</view>
</template>

<script>
	import talkList from "@/components/talk-lists/talklist.vue"
	import writeComment from '@/components/write-comment/comment.vue'
	import uniPopup from '../../components/uni-popup/uni-popup'
	export default{
		data(){
			return{
				isGuan:false,
				list:{},
				num:1,
				obj:{},
				isReplay:false,
				flag:false,
				talklist:[
					{
						id: '1',
						name: '王吱吱',
						headimg: '/static/img/sendindex/dynamics/header.png',
						saycontent:'七八年的设计经验给我,小空间不要太大的砖哦,当然了大砖省钱哈!',
						data: '2019年10月21日',
						dianzan: '',
						replylist: [],
						dianzaned: false
					},
					{
						id: '2',
						name: '李啾啾',
						headimg: '/static/img/sendindex/dynamics/header.png',
						saycontent:'十几年的设计经验给我,小空间不要太大的砖哦,当然了大砖省钱哈!',
						data: '2019年10月21日',
						dianzan: '10',
						replylist: [
							{
								anothername:'王吱吱',
								replycontent:'不错挺好的哈哈哈哈哈哈!',
								time:'10分钟前',
								zan:'',
								zaned:false,
								replayname:'周涯涯'
							},
							{
								anothername:'周涯涯',
								replycontent:'为什么模棱两可的盗用我作品里面的照片呢?为什么模棱两可的盗用我作品里面的照片呢?',
								time:'10分钟前',
								zan:'',
								zaned:false,
								replayname:''
							}
						],
						dianzaned: false
					}
				]
			}
		},
		methods:{
			change(e){
				this.num=e.detail.current+1
			},
			updateDianzan(index) {
				if(this.$db.get('token')){
					if (!this.talklist[index].dianzaned) {
						this.talklist[index].dianzan++;
						this.talklist[index].dianzaned = true;
					} else {
						this.talklist[index].dianzan--;
						this.talklist[index].dianzaned = false;
					}
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}				
			},
			updatereplyzan(res){
				if(this.$db.get('token')){
					let aa=this.talklist[res[0]]
					if (!aa.replylist[res[1]].zaned) {
						aa.replylist[res[1]].zan++;
						aa.replylist[res[1]].zaned = true;
					} else {
						aa.replylist[res[1]].zan--;
						aa.replylist[res[1]].zaned = false;
					}
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}						
			},
			changebtn(){
				if(this.$db.get('token')){
					this.flag=!this.flag
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}			
			},
			publish(res) {
				if(this.isReplay){
					let obj={
						anothername:'我',
						replycontent:res,
						time:'刚刚',
						zan:'',
						zaned:false,
						replayname:this.obj.name
					}
					this.talklist[this.obj.num].replylist.unshift(obj)
					uni.showToast({
					    title: '回复成功',
					    duration: 700,
						icon:'none'
					})
				}else{
					let obj={
						id: '10',
						name: '我',
						headimg: '/static/img/sendindex/dynamics/header.png',
						saycontent: res,
						data: '2019年11月8日',
						dianzan: '',
						replylist: [],
						dianzaned: false
					}
					this.talklist.unshift(obj)
					let num=parseInt(this.list.pinglun)+1
					this.list.pinglun=num+'';
					uni.showToast({
					    title: '发布成功',
					    duration: 700,
						icon:'none'
					})
				}	
			},
			isShow(){
				if(this.$db.get('token')){
					this.isReplay=false
					this.$refs.writecom.Apper(true)
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}
			},
			replaybozhu(res){
				if(this.$db.get('token')){
					this.obj=res
					this.isReplay=true
					this.$refs.writecom.Givename(res.name)	
					this.$refs.writecom.Apper()
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}					
			},
			Guanzhu(){
				if(this.$db.get('token')){
					this.isGuan=!this.isGuan
					if(this.isGuan){
						uni.showToast({
						    title: '感谢您的关注',
						    duration: 700,
							icon:'none'
						});
					}		
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}			
			},
			goHuati(){
				uni.navigateTo({
					 url:'../../pages/cjq_testpages/index?isP='+1+'&title=#让选材没有秘密#&ptitle=12354 '
				})
			},
			goQuanzi(){
				uni.navigateTo({
					 url:'../../pages/cjq_testpages/index?isP='+1+'&title=装修日记&ptitle=126'
				})
			},
			//分享
			share_weixin(){
			    this.$refs.isShare.close()
				uni.showLoading({
					title:'启动中'
				})
				uni.share({
					provider: 'weixin',
					scene: "WXSceneSession",
					type: 5,//分享到小程序
					imageUrl: 'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
					title: '广州佳宇设计',
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path: 'pages/index/index',
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
						console.log(JSON.stringify(ret));
						uni.hideLoading()
					},
					fail: err => {
						console.log(JSON.stringify(err))
						this.$refs.isShare.close()
						uni.hideLoading()
						uni.showToast({
							icon:"none",
							title:"客户端未安装或版本太低",
							duration:2000
						})
						return
					}
				});
			},
			share_pyquan(){
			    	this.$refs.isShare.close()
					uni.showLoading({
						title:'启动中'
					})
			        uni.share({
						provider: 'weixin',
						scene: "WXSenceTimeline",
						type: 5,//分享到小程序
						imageUrl: 'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
						title: '广州佳宇设计',
						miniProgram: {
							id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
							path: 'pages/index/index',
							type: 2,//体验版
							webUrl: 'http://uniapp.dcloud.io'
						},
						success: ret => {
							console.log(JSON.stringify(ret));
							uni.hideLoading()
						},
						fail: err => {
							console.log(JSON.stringify(err))
			    			this.$refs.isShare.close()
							uni.hideLoading()
							uni.showToast({
								icon:"none",
								title:"客户端未安装或版本太低",
								duration:2000
							})
							return
						}
					});
			},
			hidePop(){
			    this.$refs.isShare.close()
			},
			share(){
				this.$refs.isShare.open()
			},
			previewimg(res){
				uni.previewImage({
				urls: res,
				current : 1,
				indicator: "default",
				success() {
					
				},
				fail() {
					
				}
				});
			},
			goMine(name){
				var isMy = Math.floor(Math.random()*2-1)+1
				uni.navigateTo({
					url:'../../pages/cjq_testpages/mine?isMy='+isMy+'&name='+name
				})
			}
		},
		onNavigationBarButtonTap (e){
		   this.$refs.isShare.open()
		},
		onLoad(option){
			this.list=JSON.parse(option.item);
			if(this.list.pinglun==0){
				this.talklist=[]
			}
		},
		components:{
			talkList,
			writeComment,
			uniPopup
		}
	}
</script>

<style scoped lang="scss">
	.writecon{
		width: 100%;
		position: fixed;
		padding: 0 22upx;
		box-sizing: border-box;
		height: 117upx;
		background:#FFFFFF;
		border-top: 1px solid #dedede;
		bottom: 0;
		display: flex;
		align-items: center;
		>view:nth-child(1){
			width: 345upx;
			height: 80upx;
			color:#5D5D5D;
			font-size: 26upx;
			text-indent: 29upx;
			line-height:80upx;
			background: #F1F1F1;
			border-radius: 18upx;
		}
		>view:nth-child(2){
			display: flex;
			>view{
				margin-left:60upx;
				width: 50upx;
				height: 50upx;
				image{
					width: 100%;
					height: 100%;
				}
			}		
		}
	}
	.talk{
		padding-bottom:118upx !important;
		margin-top:46upx;
		>view:nth-child(1){
			font-size: 30upx;
			color:#343434
		}
		>view:nth-child(2){
			width: 100%;
		}
	}
	.notalk{
		height: 400upx;
		display: flex;
		align-items: center;
		justify-content:center;
		image{
			width: 179upx;
			height: 153upx;
		}
	}
	.banner{
		margin-top:34upx;
		position: relative;
		swiper{
			width: 100%;
			height: 350upx;
			.swiper-item{
				width: 100%;
				padding: 0 22upx;
				box-sizing: border-box;
				height: 350upx;
				image{
					width: 100%
				}
			}
		}
	}
	.tipNum{
		color: #FFFFFF;
		font-size: 23upx;
		text-align: center;
		line-height: 50upx;
		width: 84upx;
		height: 50upx;
		background: rgba(0,0,0,0.5);
		border-radius: 25upx;
		position: absolute;
		right: 35upx;
		bottom:13upx
	}
	.user_content,.bottom,.user_time,.talk{
		width: 100%;
		box-sizing: border-box;
		padding:0 22upx
	}
	.user_content{
		>view:nth-child(1){
			margin-top: 23upx;
			color: #3E3E3E;
			font-size:30upx;
		}
	}
	.bottom{
		margin-top:20upx;
		>view:nth-child(1){
			width: 216upx;
			height: 60upx;
			background: rgba(193, 123, 125, 0.3);
			border-radius: 20upx;
			color: #C17B7D;
			font-size:30upx;
			text-align: center;
			line-height: 60upx;
			>text:after{
				content: ">";
				margin-left: 4px;
			}
		}
	}
	.user_time{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 23upx;
		>view:nth-child(1){
			display: flex;
			align-items: center;
			color: #3E3E3E;
			font-size:26upx;
			image{			
				width: 89upx;
				height: 89upx;
				margin-right: 19upx;
			}
			>view{
				line-height: 40upx;
				>text{
					color:#888888;
					font-size: 26upx;
				}
			}
		}
		>view:nth-child(2){
			width: 120upx;
			background: #C17B7D;
			border-radius: 10upx;
			font-size: 26upx;
			color:#ffffff;
			text-align: center;
			height: 55upx;
			line-height: 55upx;
			letter-spacing: 1px;
		}
	}
	.guaned{
		background: rgba(193,123,125,0.5) !important;
	}
	.cont{display: flex;justify-content: space-around;height: 274upx;background: #fdfdfd;}
.cont image{width: 81upx;height: 81upx;}
.weixin{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.pengyou{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.btn{height: 109upx;display: flex;justify-content: center;align-items: center;border-top: 1px solid #e1e1e1;color: #000;font-size: 35upx;}
</style>
