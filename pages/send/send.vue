<template>
	<view>
		<view class="span_list_fitment">
			<view>
				<scroll-view class="show_scroll" :scroll-x="true" show-scrollbar="false">
					<view v-for="(item, index) in topSlist" :key="item" @tap="onTag(index)">
						<image :src="item"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="banner">
			<swiper style="width: 100%;height: 281upx" class="swiper-box-list" duration="300" @change="changedot">
				<swiper-item class="swiper_item" v-for="(item,index) in imglist" :key="index">
					<view>
						<image style="width: 100%;" :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
			<swiper-dot class="swiperdot" :current="currentdot" :list="imglist"></swiper-dot>
		</view>
		<view class="hottalk">
			<view class="top">
				<text>热门话题</text>
				<text class="uni-panel-icon uni-icon" @tap="checkALL">查看全部 &#xe470;</text>
			</view>
			<view class="content">
				<scroll-view class="hot_scroll" :scroll-x="true" show-scrollbar="false">
					<hot-talk :list="hottalk" @checkALL="checkALL"></hot-talk>
				</scroll-view>
			</view>
		</view>
		<view class="dynamics">
			<view>
				<text>动态</text>
			</view>
			<dynamics-list :list="danamicsList" @updateDianzan="updateDianzan" @isShow="isShow"></dynamics-list>
		</view>
		<view @tap="jumpWritePost" class="writeArt" :class="{writeArth5:writeArth5}">
			<image src="/static/img/sendindex/jia.png" mode=""></image>
		</view>
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
	import swiperDot from '@/components/fixdot/swiperDot.vue';
	import hotTalk from '@/components/hot-talk/hottalk.vue';
	import dynamicsList from '@/components/dynamics-list/dynamicslist.vue';
	import uniPopup from '../../components/uni-popup/uni-popup'
	export default {
		data() {
			return {
				currentdot: 0,
				writeArth5: false,
				imglist: ['/static/img/sendindex/banner/01.png', '/static/img/sendindex/banner/02.png'],
				topSlist: ["/static/img/sendindex/TopScroll/01.png", "/static/img/sendindex/TopScroll/02.png",
					"/static/img/sendindex/TopScroll/03.png", "/static/img/sendindex/TopScroll/04.png",
					"/static/img/sendindex/TopScroll/05.png", "/static/img/sendindex/TopScroll/06.png",
					"/static/img/sendindex/TopScroll/07.png"
				],
				hottalk: [{
						id: '1',
						num: '1356',
						title: "#你家的书柜是开放式还是封闭式",
						hotimg: ["/static/img/sendindex/hottalk/01.png", "/static/img/sendindex/hottalk/02.png",
							"/static/img/sendindex/hottalk/03.png", "/static/img/sendindex/hottalk/04.png"
						]
					},
					{
						id: '2',
						num: '1356',
						title: "#你家的书柜是开放式还是封闭式",
						hotimg: ["/static/img/sendindex/hottalk/01.png", "/static/img/sendindex/hottalk/02.png",
							"/static/img/sendindex/hottalk/03.png", "/static/img/sendindex/hottalk/04.png"
						]
					},
					{
						id: '3',
						num: '1356',
						title: "#你家的书柜是开放式还是封闭式",
						hotimg: ["/static/img/sendindex/hottalk/01.png", "/static/img/sendindex/hottalk/02.png",
							"/static/img/sendindex/hottalk/03.png", "/static/img/sendindex/hottalk/04.png"
						]
					},
					{
						id: '4',
						num: '1356',
						title: "#你家的书柜是开放式还是封闭式",
						hotimg: ["/static/img/sendindex/hottalk/01.png", "/static/img/sendindex/hottalk/02.png",
							"/static/img/sendindex/hottalk/03.png", "/static/img/sendindex/hottalk/04.png"
						]
					}
				],
				danamicsList: [{
						id: '1',
						name: '李白',
						headimg: '/static/img/sendindex/dynamics/header.png',
						time: '2019年10月22日',
						tip: '',
						title: "看看我们家里环境布置,大家有没有更好的建议,麻烦大家说说看哈!",
						danamicsimg: ["/static/img/sendindex/dynamics/01.png", "/static/img/sendindex/dynamics/02.png",
							"/static/img/sendindex/dynamics/03.png"
						],
						sign: '晒晒你的家',
						dianzan: '0',
						pinglun: '0',
						dianzaned: false,
						bigimgList:["/static/img/sendindex/banner.png","/static/img/sendindex/banner.png","/static/img/sendindex/banner.png"]
					},
					{
						id: '2',
						name: '花木兰',
						headimg: '/static/img/sendindex/dynamics/header.png',
						time: '2019年10月21日',
						tip: '#让选材没有秘密#',
						title: "看看我们家里环境布置,大家有没有更好的建议,麻烦大家说说看哈!",
						danamicsimg: ["/static/img/sendindex/dynamics/01.png", "/static/img/sendindex/dynamics/02.png",
							"/static/img/sendindex/dynamics/03.png"
						],
						sign: '晒晒你的家',
						dianzan: '463',
						pinglun: '1235',
						dianzaned: false,
						bigimgList:["/static/img/sendindex/banner.png","/static/img/sendindex/banner.png","/static/img/sendindex/banner.png"]
					},
					{
						id: '3',
						name: '韩信',
						headimg: '/static/img/sendindex/dynamics/header.png',
						time: '2019年10月20日',
						tip: '#让选材没有秘密#',
						title: "看看我们家里环境布置,大家有没有更好的建议,麻烦大家说说看哈!",
						danamicsimg: ["/static/img/sendindex/dynamics/01.png", "/static/img/sendindex/dynamics/02.png",
							"/static/img/sendindex/dynamics/03.png"
						],
						sign: '晒晒你的家',
						dianzan: '463',
						pinglun: '1235',
						dianzaned: false,
						bigimgList:["/static/img/sendindex/banner.png","/static/img/sendindex/banner.png","/static/img/sendindex/banner.png"]
					}
				]
			}
		},
		onLoad() {
			// #ifdef H5
			this.writeArth5 = true
			// #endif
		},
		onNavigationBarButtonTap(e) {
			if(this.$db.get('token')){
				this.jumpWritePost()
			}else{
				uni.navigateTo({
				    url: '/pages/auth/login/login1'
				})
			}					
		},
		methods: {
			jumpWritePost(){
				if(this.$db.get('token')){
					uni.navigateTo({
						url:'../community/write_post/write_post'
					})
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}						
			},
			onTag(index) {
				if (index === 0) {
					uni.navigateTo({
						url: '../community/cricle/cricle?uid=' + index + '&' + 'status=' + 1,
					});
				}
			},
			checkALL(){
				uni.navigateTo({
					url: '../community/topics/all_topic'
				});
			},
			changedot(e) {
				this.currentdot = e.detail.current;
			},
			updateDianzan(index) {
				if(this.$db.get('token')){
					if (!this.danamicsList[index].dianzaned) {
						this.danamicsList[index].dianzan++;
						this.danamicsList[index].dianzaned = true;
					} else {
						this.danamicsList[index].dianzan--;
						this.danamicsList[index].dianzaned = false;
					}
				}else{
					uni.navigateTo({
					    url: '/pages/auth/login/login1'
					})
				}					
			},
			isShow() {
				this.$refs.isShare.open();
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
			}
		},
		components: {
			swiperDot,
			hotTalk,
			dynamicsList,
			uniPopup
		},
		mounted(){
			console.log()
		}
	}
</script>

<style scoped lang="scss">
	.writeArth5 {
		bottom: 140upx !important;
	}

	.span_list_fitment {
		box-sizing: border-box;
		padding: 0 22upx;
	}

	.writeArt {
		width: 89upx;
		height: 89upx;
		position: fixed;
		bottom: 30upx;
		right: 30upx;

		image {
			width: 100%;
			height: 100%
		}
	}

	.show_scroll {
		white-space: nowrap;

		view {
			display: inline-block;
			margin-right: 31upx;
			width: 145upx;
			height: 145upx;

			image {
				width: 145upx;
				height: 145upx;
			}
		}
	}

	.hot_scroll {
		white-space: nowrap;
	}

	.banner {
		width: 750upx;
		position: relative;
		margin-top: 42upx;
	}

	.swiperdot {
		position: absolute;
		left: 50%;
		bottom: 20upx;
		transform: translate(-50%, -50%);
	}

	.swiper_item {
		height: 100%;
		box-sizing: border-box;
		padding: 0 22upx;

		view {
			height: 100%;
			border-radius: 10upx;
			overflow: hidden;
		}
	}

	.hottalk {
		width: 100%;
		// box-sizing: border-box;
		// padding: 0 22upx;
	}

	.top {
		display: flex;
		justify-content: space-between;
		padding: 0 22upx;
		margin-top: 45upx;
		box-sizing: border-box;
		align-items: center;

		text:nth-child(1) {
			font-size: 32upx;
			color: #000000;
			letter-spacing: 1px;
		}

		text:nth-child(2) {
			font-size: 24upx;
			color: #747373;
			// letter-spacing: 1px;
		}
	}

	.dynamics {
		padding: 0 22upx;
		box-sizing: border-box;

		text:nth-child(1) {
			font-size: 32upx;
			color: #000000;
			letter-spacing: 2px;
		}
	}
	.uni-icon{font-family:uniicons;font-weight:400}
	.cont{display: flex;justify-content: space-around;height: 274upx;background: #fdfdfd;}
	.cont image{width: 81upx;height: 81upx;}
	.weixin{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.pengyou{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.btn{height: 109upx;display: flex;justify-content: center;align-items: center;border-top: 1px solid #e1e1e1;color: #000;font-size: 35upx;}
</style>
