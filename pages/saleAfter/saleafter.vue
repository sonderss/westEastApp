<template>
	<view>
		<view class="header">
			<view class="shopInfo" @tap="toshopDeatail(item.spuId)">
				<view class="shopInfo-img"><image lazy-load :src="item.pic"  class="is-response"></image></view>
				<view class="shopInfo-introduce">
					<view class="detail">
						<view ><text class="text-overflow_2-xzh">{{item.name}}</text></view>
						<text class="detailColor">{{item.specifiCations}}</text>
						<view class="details"><text>￥{{item.price}}</text><text>×{{item.num}}</text></view>
					</view>	
				</view>
			</view>
			<view class="shopInfo_02">
				<text>申请数量</text>
				<view>
					<view @tap="reduce">
						<image src="/static/img/jian.png" mode=""></image>
					</view>
					<view>
						{{shopnumber}}
					</view>
					<view @tap="add">
						<image src="/static/img/jia.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="shopInfo_03" @tap="choosesaleAfter">
			<text>售后类型</text>
			<view>
				<text class="icon">{{saletype}}</text>
			</view>
		</view>
		<view class="shopInfo_04" @tap="chooseapply">
			<text>申请原因</text>
			<view>
				<text class="icon">{{applytype}}</text>
			</view>
		</view>
		<view class="shopInfo_05">
			<view class="title">
				<text>问题描述</text>
			</view>
			<view class="textarea_content" >
				<textarea class="textarea_init" @input="change"  :maxlength="500"  placeholder-style='color: #dedede' placeholder="请填写申请售后服务的具体描述" v-model="convalue"></textarea>
			</view>
			<view class="number">
				<text>{{wordcount}}/500</text>
			</view>
		</view>
		<view class="shopInfo_06">
			<view class="title">
				<text>上传凭证(最多3张)</text>
			</view>
			<view class="imglist">				
				<view class="imgcontent" v-for="(x,index) in imglist" :key='index'>
					<image @tap="seeimage" :data-src="x" :src="x" mode="aspectFill"></image>
					<view class="ed-i" @tap="detailimg(index)"></view>
				</view>
				<view class="addimg" v-if="imglist.length==3?false:true">
					<image src="/static/img/addImg.jpg"  @tap="chooseimg"></image>
				</view>
			</view>
		</view>
		<view class="shopInfo_07">
			<view class="title">
				<text>联系方式</text>
			</view>
			<view class="contact">
				<view>
					<text>联系人</text>
					<input v-model="linkpeople" confirm-type='done' class="uni-input uni-popel" type="text" placeholder="请输入联系人" placeholder-style="color:#959595" />					
				</view>
				<view>
					<text>联系电话</text>
					<input v-model="linkphone" class="uni-input" type="text" placeholder="请输入联系电话" placeholder-style="color:#959595"/>				
				</view>
			</view>
		</view>
		<view class="submit">
			<view class="submit_btn" @tap="submit">
				<text>提交</text>
			</view>
			<view class="warning">
				<text>*提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</text>
			</view>
		</view>
		<uni-pop ref="pop" type="bottom">
			<view v-if="isshow">
				<view class="pop_header">
					<text>选择售后类型</text>
					<image src="/static/img/close.png" @tap="close"></image>
				</view>
				<view class="list_style">
					<radio-group @change="radioChange">
					    <label class="pop_content" v-for="(itema, index) in salelist" :key="itema.id">
							<view>
								<radio :value="itema.id" :checked="index === current" color="#C17B7D"/>
							</view>
							<view>{{itema.name}}</view>
					    </label>
					</radio-group>
				</view>
				<view class="bottom">
					<view class="sure" @tap="sure(current)">
						<text>确认</text>
					</view>
				</view>			
			</view>
			<view v-else>
				<view class="pop_header">
					<text>选择售后原因</text>
					<image src="/static/img/close.png" @tap="close"></image>
				</view>
				<view class="list_style">
					<radio-group @change="radioChange">
					    <label class="pop_content" v-for="(itema, index) in items" :key="itema.id">
							<view>
								<radio :value="itema.id.toString()" :checked="index === currents" color="#C17B7D"/>
							</view>
							<view>{{itema.name}}</view>
					    </label>
					</radio-group>
				</view>
				<view class="bottom">
					<view class="sure" @tap="sure(currents)">
						<text>确认</text>
					</view>
				</view>			
			</view>
		</uni-pop>
	</view>
</template>

<script>
	import uniPop from '@/components/uni-popup/uni-popup'
	export default{
		data(){
			return{
				flag:false,
				shopnumber:1,
				isshow:true,
				current: 0,
				currents: 0,
				linkphone:'',
				linkpeople:'',
				imglist:[],
				wordcount:0,
				convalue:'',
				saletype:'请选择售后类型',
				applytype:'请选择申请原因',
				saletypeid:1,
				applytypeid:1,
				item:{},
				items: [],
				salelist: []			
			}
		},
		onLoad(res){
			this.item=JSON.parse(decodeURIComponent(res.shopinfo))
			console.log(this.item)
			this.axios.GetSaleAfterApplyCause().then(res=>{
				if(res.statusCode === 200){
					this.items=res.data.data
				}
			})
			this.axios.GetSaleAfterType().then(res=>{
				if(res.statusCode === 200){
					for(let x in res.data.data){
						let obj = {}
						obj.name=res.data.data[x]
						obj.id=x
						this.salelist.push(obj)
					}
				}
				
			})
			
		},
		onShow() {
			if(this.flag){
				uni.redirectTo({
					url:'/pages/after_sale/after_sale_list'
				})
			}		
		},
		components:{
			uniPop
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:'/pages/chat/chat?title=客服小白'
			})
		},
		methods:{
			toshopDeatail(res){
				uni.navigateTo({
					url: '../detail/goodsinfo?itemid=' + res
				})
			},
			reduce(){			
				if(this.shopnumber<=1){
					this.shopnumber=1
					this.toastTip("亲，不能再少了")
				}else{
					this.shopnumber--;
				}
			},
			add(){
				if(this.shopnumber>=this.item.num){
					this.shopnumber=this.item.num
					this.toastTip("已经到顶了")
				}else{
					this.shopnumber++
				}
			},
			toastTip(res){
				uni.showToast({
				    title: res,
				    duration: 500,
					icon:'none'
				});
			},
			choosesaleAfter(){				
				this.isshow=true
				this.$refs.pop.open()
			},
			chooseapply(){
				this.isshow=false
				this.$refs.pop.open()				
			},
			change(e){
				this.wordcount=e.detail.cursor
			},
			chooseimg(){
				let that=this
				uni.chooseImage({
				    count: 3,
				    success(res) {
						console.log(res)
						res.tempFilePaths.forEach(item=>{
							that.imglist.unshift(item)
						})
				    }
				});
			},
			detailimg(num){
				this.imglist.splice(num,1)
			},
			submit(){
				// let obj ={
				// 	savefile:'test'
				// 	isserver:false
				// 	form:that.imglist
				// }
				// this.axios.FileManager(obj).then(res=>{
				// 	console.log(res)
				// })
				if(this.saletype=='请选择售后类型'){
					this.message('请选择售后类型')
					return false
				}
				if(this.applytype=='请选择申请原因'){
					this.message('请选择申请原因')
					return false
				}
				if(this.convalue==''){
					this.message('请填写问题描述')
					return false
				}
				if(this.linkpeople==''){
					this.message('联系人不能为空')
					return false
				}
				const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
				if(!reg.test(this.linkphone)){
					this.message('请输入正确的手机号')
					return false
				}
				//提交售后申请的表单
				let obj={
					ordertailId: this.item.ordertailId,
					saleType: this.saletypeid,
					num: this.shopnumber,
					applyCauseId: this.applytypeid,
					problem: this.convalue,
					contacts:  this.linkpeople,
					phone: this.linkphone,
					pics: this.imglist
				}
				
				this.axios.CommitSaleAfterGoods(obj).then(res=>{
					if(res.statusCode==200){
						uni.navigateTo({
							url:'/pages/submitSuccess/subsuccess',
							// ?goodsinfo=+encodeURIComponent(JSON.stringify(res.data.data))
						})
					}else{
						
					}
					console.log(res)
				})
				
			},
			sure(res){
				if(this.isshow){
					this.saletype=this.salelist[res].name
					this.saletypeid=res
					this.$refs.pop.close()				
				}else{
					this.applytype=this.items[res].name	
					this.applytypeid=res
					this.$refs.pop.close()
				}			
			},
			close(){
				this.$refs.pop.close()
			},
			radioChange(evt){
				console.log(evt)
				if(this.isshow){
					for (let i = 0; i < this.salelist.length; i++) {
						if (this.salelist[i].id == evt.target.value) {
							this.current = i;
							break;
						}
					}
				}else{
					for (let i = 0; i < this.items.length; i++) {
						if (this.items[i].id == evt.target.value) {
							this.currents = i;
							break;
						}
					}
				}
				
			},
			seeimage(e){
				var current = e.target.dataset.src
				uni.previewImage({
				    current: current,
					indicator:'number',
				    urls: this.imglist
				})
			},
			message(res){
				uni.showToast({
					icon:'none',
					title:res,
					duration:1000
				})
			}
		}
	}
</script>
<style>
	page{
		background: #f2f2f2;
	}
	.checkedradio .uni-radio-input{
		background: red !important;
		/* ,.uni-radio-input-checked{
			background: red !important;
		} */
	}
</style>
<style scoped lang="scss">
	.ed-i{display:block;width:40upx;height:40upx;background:#c17b7d;border-radius:50%;position:absolute;right:-15upx;top:-15upx;z-index:2}
	.ed-i:before{width:20upx;height:1px;content:" ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;background:#fff}
	.pop_header{
		border-bottom: 1px solid #dedede;
		text-align: center;
		height: 100upx;
		justify-content: center;
		position: relative;
		display: flex;
		align-items: center;
		>text{
			font-size: 30upx;
			color: #272727;
		}
		image{
			position: absolute;
			right: 40upx;
			top: 30upx;
			width: 38upx;
			height: 38upx;
		}
	}
	.header,.shopInfo_03,.shopInfo_04,.shopInfo_05,.shopInfo_06,.shopInfo_07{
		box-sizing: border-box;
		padding:30upx 22upx 30upx 22upx;
		background: #ffffff;
	}
	.shopInfo{padding-bottom:20upx;width:100%;border-bottom: 1px solid #dedede;display: flex;}
	.shopInfo-img{width:162upx;height:162upx;margin-right: 20upx;}
	.is-response{width:162upx;height:162upx;border-radius: 20upx;}
	.shopInfo-introduce{width:100%;}
	.detail{font-size:24upx;color:#333;}
	.text-overflow_2-xzh{color: #333333;font-size: 26upx;margin: 8upx 0;}
	.detail .detailColor{color:#707070;font-size: 24upx;}
	.details{display: flex;justify-content: space-between;margin-top: 40upx;color: #333333;font-size: 26upx;}
	.shopInfo_02{
		padding-top: 20upx;
		color: #333333;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		>view{
			display: flex;
			align-items: center;
			image{
				width: 34upx;
				height: 34upx;
			}
			>view{
				margin:0 10upx
			}
		}
	}
	.shopInfo_03,.shopInfo_04{
		margin-top:10upx;
		color: #333333;
		font-size: 26upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		>view{			
			>text{			
				color: #9e9d9d !important;
				font-size: 26upx !important;
				&:after{
					margin-left: 10upx;
					content: '\e637';
				}
			}
		}
	}
	.shopInfo_04{
		margin-top: 1px;
	}
	.shopInfo_05{
		margin-top: 10upx;
		padding-bottom: 0;
	}
	.number{
		position: absolute;
		bottom: 10upx;
		color: #9e9d9d;
		right: 30upx;
	}
	.textarea_content{
		margin-top: 24upx;
		width: 100%;
		border: 1px solid #BFBFBF;
		border-radius: 10upx;
		color: #333333;		
	}
	.textarea_init{
		font-size: 28upx;
		padding: 10upx 0;
		padding-left: 20upx;
		padding-bottom: 40upx;
		// text-indent: 1em;
		width: 100%;
		color:#3C3C3C
	}
	.shopInfo_06,.shopInfo_07,.shopInfo_05{
		color: #333333;
		font-size: 26upx;
		position: relative;
	}
	.shopInfo_06{
		padding-bottom: 0;
	}
	.shopInfo_07{
		padding-bottom: 10upx;
	}
	.imgcontent{
		width: 181upx;
		height: 181upx;
		position: relative;
		margin-right: 20upx;
		>image{
			border-radius: 10upx;
			width: 100%;
			height: 100%;
		}
	}
	.addimg{
		width: 181upx;
		height: 181upx;
		image{
			border-radius: 10upx;
			width: 100%;
			height: 100%;
		}
	}
	.imglist{
		margin-top: 25upx;
		display: flex;
	}
	.uni-input{
		// background: red;	
		line-height:80upx;
		font-size: 26upx;
		width: 500upx;
		// background: red;
	}
	.uni-popel{
		padding-left: 24upx;
	}
	.contact{
		>view{
			margin:20upx 0;
			border: 1px solid #BFBFBF;
			border-radius: 10upx;
			display:flex;
			align-items: center;
			text-indent: 20px;
		}
	}
	.bottom{
		padding: 20upx 22upx;
		box-sizing: border-box;
	}
	.submit{		
		width: 100%;	
		padding: 0 22upx;
		padding-bottom: 40upx;
		background: #ffffff;
		box-sizing: border-box;
	}
	.sure{
		font-size: 30upx;
		letter-spacing: 10upx;
		border-radius: 10upx;		
		background: #C17B7D;
		height: 88upx;
		text-align: center;
		line-height: 88upx;
		color: #ffffff;
	}
	.submit_btn{
		height: 88upx;
		text-align: center;
		line-height: 88upx;
		color: #ffffff;
		font-size: 30upx;
		letter-spacing: 16upx;
		border-radius: 10upx;		
		background: #C17B7D;
	}
	.btn{
		width: 44upx;
		height: 44upx;
		border-radius: 50%;
		border: 1px solid #d1d1d1;
		display: flex;
		justify-content: center;
		align-items: center;
		// background: #C17B7D;
	}
	.ch_btn{
		background: #C17B7D;
		border: 1px solid #C17B7D;
	}
	.warning{
		color: #959595;
		font-size: 22upx;
		text-align: center;
		margin-top: 30upx;
	}
	.list_style{
		padding-left: 55upx;
	}
	.pop_content{
		display: flex;
		align-items: center;
		margin:30upx 0;
		font-size: 26upx;
		color: #272727;
	}
	@import 'static/iconfont/font.scss';
</style>
