<template>
	<view class="content">
		<view class="confirmation-order">
			<scroll-view class='scroll-view-left' scroll-y='true' :style="{'height':scrollHeight+'px'}">
				<view class="order-add uni-flex">
					<view style="width:43upx;height:53upx">
						<image style="width:100%;height:100%;display:block" class="addIcon" src="../../static/img/cjq-about/addre.png"></image>
					</view>
					<view class="addDetail">
						<view class="warp uni-flex uni-column" v-if="address.length>0" @click="receiving ">
							<view><text>{{address[myAdress].name}}</text><text class="phone">{{address[myAdress].phone}}</text></view>
							<text class="add">{{address[myAdress].address}}{{address[myAdress].area}}</text>
						</view>
						<view class="warp uni-flex uni-column" v-else @click="addto"><text>添加收货地址</text></view>
					</view>
					<image class="addArrow" src="/static/img/confirmation/addArrow.png"></image>
				</view>
				<view class="each-order">
					<view class="each-order-content"   v-if="userCart?userCart:false" >
						 <view class="shopName text-overflow_1-xzh" ><text>商品信息</text></view>
						<view class="shopInfo uni-flex" v-for="(item,index) in userCart.goodsList" :key='index'>
							<view  class="shopInfo-img"><image lazy-load :src="item.spuPic" mode="widthFix" class="is-response"></image></view>
							<view class="shopInfo-introduce uni-flex uni-column">
								<view class="detail">
									<view><text class="text-overflow_2-xzh">{{item.spuName}}</text></view>
									<view><text class="detailColor">{{item.specifiCations}}</text></view>
								</view>
								
								<view class="goods_test"  style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(51,51,51,1);">
									<view ><text>￥{{item.price}}</text></view>
									<view><text><text style="font-size:12upx;margin-right:10upx">X</text> {{item.number}}</text></view>
								</view>							
							</view>
						</view>
					</view>
					
					<!-- <view class="each-order-content" v-for="(item,i) in userCart" :key="i" >
						
						<view class="shopInfo uni-flex" v-for="(item2,j) in item.goodsList" :key="j">
							<view  v-if="item2.checked" class="shopInfo-img"><image lazy-load :src="item2.img" mode="widthFix" class="is-response"></image></view>
							<view class="shopInfo-introduce uni-flex uni-column">
								<view class="detail">
									<view><text class="text-overflow_2-xzh">{{item2.title}}</text></view>
									<view><text class="detailColor" v-for="(item3,k) in item2.parameter" :key="k">{{k}}:{{item3}}</text></view>
								</view>
								
								<view class="goods_test"  style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(51,51,51,1);">
									<view ><text>￥{{item2.price}}</text></view>
									<view><text><text style="font-size:12upx;margin-right:10upx">X</text> {{item2.good_num}}</text></view>
								</view>							
							</view>
						</view>
					</view> -->
					<!-- 这里根据有没有购买的商品显示 -->
					<view >
							<!-- 优惠券信息 暂时没有数据-->
							<view class="gods_test" >
									<text  style="font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(78,78,78,1);margin-left:20upx">优惠券</text>
									<view class="gods_test1">
											<text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(148,148,148,1);margin-right:10upx">0张可用</text>
											<image src='../../static/img/goods/more.png' style="width:14upx;height:27upx;margin-right:10upx"/>
									</view>
									
							</view>
							<!-- 该商品内容 -->
							<view class="gods_cont">
									<view class="gods_cont_item" v-for="(item,index) in gods_cont_data" :key="index">
										<text style="margin-left:20upx;font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(78,78,78,1);"> {{item.name}}</text>
										<view style="margin-right:20upx;font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(148,148,148,1);">
											<text>￥</text><text>{{item.price}}</text>
										</view>
									</view>
							</view>
							<!-- 发票 -->
							<view class="gods_test" @tap='goFapiao'>
									<text  style="font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(78,78,78,1);margin-left:20upx">发票</text>
									<view class="gods_test1">
											<text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(148,148,148,1);margin-right:10upx">{{isbill == 0?'不开发票':(isbill == 1?'个人发票':'公司发票')}}</text>
											<image src='../../static/img/goods/more.png' style="width:14upx;height:27upx;margin-right:10upx"/>
									</view>
									
							</view>
					</view>
					
				</view>
			</scroll-view>
			<view class="submission-order" id="orderSubmit">
				<view class="total">合计：<text>￥{{view_price}}</text></view>
				<view class="subOrder" @click="submitOrder">提交订单</view>
			</view>
			<!-- 支付弹框 -->
			<uni-popup ref="popup" type="bottom" :custom="false" @change="change" :radius="true">
				<view class="paymentBox">
					<view class="title uni-flex">
						<view class="paymentClose" @click="close"><image src="/static/img/confirmation/paymentClose.png"></image></view>
						<text>确认订单</text>
					</view>
					<view class="money uni-flex"><text>￥{{view_price}}</text></view>
					<view class="method">
						<view class="choice"><text>选择支付方式</text></view>
						<view class="types uni-flex">
							<view class="means uni-flex uni-column" @click="alipay">
								<image src="/static/img/confirmation/zhifu.png"></image>
								<text>支付宝</text>
							</view>
							<view class="means uni-flex uni-column" @click="wxpay">
								<image class="wechat" src="/static/img/confirmation/wechat.png"></image>
								<text>微信</text>
							</view>
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
		<request-payment ref="requestpayment" :price="view_price"></request-payment>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import requestPayment from '@/components/request-payment/request-payment.vue'
	import papi from '../../apis/goods/goods'
	import uapi from '../../apis/user/user'
	export default {
		components: {
			uniPopup,
			requestPayment
		},
		data() {
			return {
				scrollHeight:0,
				login:true,
				payment:true,
				userCart:{},
				buy_now: false,
				view_price:0,
				gods_cont_data:[
					{name:'商品合计',price:0},
					{name:'服务费用',price:0.00},
					// {name:'运费',price:0.00},
					{name:'优惠券',price:0.00}
				],
				isShhowCont:false,
				address:[],//地址ID
				myAdress:0,
				isbill:'',//是否开发票
				goodsId:'',//订单ID
			}
		},
		onReady() {
			let that = this;
			setTimeout(function() {
			  that.calculateScrollViewHeight()
			}, 100)
		},
		onShow(){
		
				
		},
		onLoad(e) {
			if(e.buy_now){
				this.buy_now=e.buy_now
			}
			// console.log(this.$store.state.goods_info_buy)
			var arr = []
			this.userCart =  this.$store.state.goods_info_buy
			console.log(this.userCart)
			uapi.getReceivAddress(this)
			// console.log(this.address)
		},
		onHide(){
			this.$store.dispatch('save',{'buy_now_obj':{}})
		},
		mounted(){

				//  console.log(this.buy_now_obj)
				//  console.log(this.buy_now_obj[0].goods_list)
				// this.gods_cont_data[0].price = this.buy_now_obj[0].goods_list[0].price  价格
				//  this.gods_cont_data[2].price = this.buy_now_obj[0].freight*1   //运费
				// for(let i=0;i<this.buy_now_obj.length;i++){
					//   for(let j=0;j<this.buy_now_obj[i].goods_list.length;j++){
							// this.view_price =  (this.userCart.price * this.userCart.good_num) + (this.userCart.otherSer[0]*1)
							// console.log(this.view_price )
							// this.gods_cont_data[0].price += this.userCart.price *this.userCart.good_num // 商品合计
									console.log(this.userCart.cost.GoodSum)
									this.gods_cont_data[0].price = this.userCart.cost.goodSum
									this.gods_cont_data[1].price = this.userCart.cost.serverCost
									this.gods_cont_data[2].price = this.userCart.cost.discount
									this.view_price = this.userCart.cost.sumAmount
									this.goodsId =  this.userCart.id
									console.log(this.gods_cont_data[0])
							
							
					//   }
					//    this.gods_cont_data[2].price += this.buy_now_obj[i].freight*1   //快递费用
					//    if(this.buy_now_obj[i].goods_list.length > 1){
					// 	   	this.view_price -= this.buy_now_obj[i].freight*(this.buy_now_obj[i].goods_list.length-1)  //去掉同商家同商品重复快递费用
					//    }
				// }
		

				// for(let i = 0;i<this.buy_now_obj[0].goods_list.length;i++){
				// //   console.log(this.buy_now_obj[0].goods_list[i])
				// 	//计算所有商品的总价格   this.view_price +=
				// 	// var allPay = 0
				// 	this.view_price += (this.buy_now_obj[0].goods_list[i].price * this.buy_now_obj[0].goods_list[i].good_num) + this.buy_now_obj[0].freight*1 
				// 	this.gods_cont_data[0].price += this.buy_now_obj[0].goods_list[i].price * this.buy_now_obj[0].goods_list[i].good_num // 商品合计
				// }
				// if(this.buy_now_obj[0].goods_list.length  == 1){
				//      return false 
				// }
				// this.view_price -= this.buy_now_obj[0].freight*(this.buy_now_obj[0].goods_list.length-1)  //去掉
				// this.gods_cont_data[2].price = this.buy_now_obj[0].freight*1   //快递费用
				
			
		},
		computed :{
		},
		methods: {
			alipay(){
				this.$refs.requestpayment.pay_func('支付宝')
			},
			wxpay(){
				this.$refs.requestpayment.pay_func('微信')
			},
			calculateScrollViewHeight:function(){
				let that = this;
				let query = uni.createSelectorQuery().in(this)
				//根据节点id查询节点部分的高度（px单位）
				query.select('#orderSubmit').boundingClientRect();
				query.exec((res) => {
					let orderSubmitHeight = res[0].height;
					//console.log(orderSubmitHeight);
					// 然后窗口高度（wx.getSystemInfoSync().windowHeight）减去其他不滑动界面的高度
					let scrollViewHeight = uni.getSystemInfoSync().windowHeight - orderSubmitHeight;
				    //console.log(scrollViewHeight)
					this.scrollHeight = scrollViewHeight;
				})
			},
			submitOrder:function(){
				uni.showLoading({
					title:'订单提交中'
				})
				let param = {
					id:this.goodsId,
					addid:this.address[this.myAdress].id,
					isbill:0,
					disids:''
				}
				console.log(param)
				papi.postGods(param).then(res=>{
					console.log(res)
					if(res.statusCode === 200){
						uni.hideLoading()
						if(res.data.status === 0){
							uni.showToast({
								icon:'none',
								title:res.data.msg,
								duration:800
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'../pay_pages/postpay?money_pay='+this.view_price 
								})
							},800)
							return
						}else if(res.data.status === 3){
							uni.showToast({
								icon:'none',
								title:res.data.msg,
								duration:800
							})
							return
						}
							uni.showToast({
								icon:'none',
								title:'系统异常，请稍后重试',
								duration:800
							})
						return
					}else if(res.statusCode === 401){
						uni.hideLoading()
						uni.showToast({
							icon:'none',
							title:'暂未登录或已过期，请重新登录',
							duration:800
						})
						setTimeout(()=>{
							uni.navigateTo({
								url:'../auth/login/login1'
							})
						},800)
						return
					}
					uni.hideLoading()
					uni.showToast({
						icon:'none',
						title:'系统异常，请稍后重试',
						duration:800
					})
					return
				}).catch(err=>{
					uni.hideLoading()
					uni.showToast({
						icon:'none',
						title:'系统异常，请稍后重试',
						duration:800
					})
					return
				})
				// if(this.is_empty(this.login)){ //未登录
				// 	uni.navigateTo({
				// 		url: '/pages/auth/login/login'
				// 	})
				// }else{ //已登陆
				// 	//提交后台，有后台返回提交商品价格，再显示支付方式，payment:true执行支付，payment:false为提交失败
				// 	uni.showToast({
				// 	    title: '订单正在提交中，请稍等...',
				// 		icon:'none',
				// 	    duration: 1000,
				// 	});
				// 	if(this.is_empty(this.payment)){
				// 		uni.hideToast();
				// 		uni.showToast({
				// 		    title: '订单提交失败，请重新提交',
				// 			icon:'none',
				// 		    duration: 1000,
				// 		});
				// 	}else{
				// 		this.pay();
				// 	}
				// }
			},
			pay:function(){
				this.$refs.popup.open();
			},
			change:function(e) {
				//console.log(e.show)
			},
			close:function(){
				this.$refs.popup.close();
			},
			receiving:function(){
				uni.navigateTo({
					url:'../address/address?isBuyInfo=0'
				})
			},
			addto:function(){
				uni.navigateTo({
				    url: '../address/newlyAdded?type=add'
				});
			},
			goFapiao(){
				 uni.navigateTo({
					 url:'../../pages/invoice/invoice1'
				 })
			}
		}
	}
</script>

<style scoped>	
	uni-page-body{background:#f1f1f1;width:100%;height:100%;}
	.content,.confirmation-order{width:100%;}
	.scroll-view-left{background:#f1f1f1;}
	.order-add{background:#fff;border-radius:10upx;overflow:hidden;align-items:center;padding:32upx 18upx;margin:22upx 25upx 0;}
	.addIcon{width:43upx;height:53upx;}
	.addArrow{width:14upx;height:27upx;}
	.addDetail{flex:1;margin:0 28upx;}
	.addDetail .warp{width:100%;font-size:26upx;color:#4e4e4e;}
	.addDetail .warp view .phone{color:#b2b2b2;font-size:24upx;margin-left:12upx;}
	.addDetail .warp .add{font-size:24upx;margin-top:5upx;}
	.submission-order{width:100%;height:172upx;background:#fff;}
	.total{color:#333;font-size:26upx;text-align:center;height:82upx;line-height:82upx;}
	.total text{color:#C58688;font-weight:600;}
	.subOrder{height:76upx;width:93%;background:#C17B7D;font-size:28upx;color:#fff;margin:0 auto;border-radius:38upx;text-align:center;line-height:76upx;}
	.each-order{margin:29upx 25upx 0;border-radius:10upx;overflow:hidden;}
	.each-order:last-child{margin-bottom:29upx;}
	.each-order-content{padding:0 18upx; margin-bottom: 20upx; background:#fff;padding-bottom: 20upx;border-radius: 15upx;}
	.each-order-content .shopName{font-size:26upx;color:#4e4e4e;width:100%;padding:36upx 0;}
	.shopInfo{align-items:center;width:100%;margin-bottom:30upx;}
	.shopInfo-img{width:180upx;height:auto;border-radius:20upx;overflow:hidden;margin-right:14upx;}
	.is-response{width:100%;height:auto;max-width:100%;display:block;}
	.shopInfo-introduce{justify-content:space-between;width:70%;}
	.detail{font-size:24upx;color:#333;flex:1;}
	.detail text{line-height:36upx;width:100%;}
	.detail text.detailColor{color:#797979; margin-right:20upx;}
	.details view{text-align:right;}
	.shopDetail{margin-left:38upx;}
	.delivery{font-size:24upx;color:#333;margin-bottom:48upx;}
	.delivery text{display:block;}
	.delivery text.mode{margin:0 24upx;flex:1;color:#bfbfbf;}
	.remarks{font-size:24upx;color:#333;flex:1;margin:0 24upx;}
	.delivery .piece{flex:1;text-align:right;}
	.delivery:last-child{margin-bottom:32upx;}
	.paymentBox{height:537upx;width:100%;border-radius: ;}
	.paymentBox .title{height:124upx;border-bottom:1px solid #e9e9e9;align-items:center;padding-right:28upx;}
	.paymentBox .title .paymentClose{padding:28upx;align-items:center;justify-content:center;}
	.paymentBox .title .paymentClose image{width:27upx;height:27upx;}
	.paymentBox .title text{font-size:26upx;color:#000;width:calc(100% - 28upx);text-align:center;}
	.paymentBox .money{width:100%;height:198upx;align-items:center;font-size:40upx;color:#000;justify-content: center;}
	.paymentBox .method,.paymentBox .choice{width:100%;}
	.paymentBox .choice{position:relative;width:100%;height:1px;background:#e9e9e9;}
	.paymentBox .choice text{width:164upx;height:40upx;color:#979797;font-size:20upx;position:absolute;left:50%;top:50%;margin:-20upx 0 0 -82upx;background:#fff;text-align:center;line-height:40upx;}
	.paymentBox .types{width:70%;margin:0 15%;align-items:center;justify-content:center;height:210upx;}
	.paymentBox .types .means{width:50%;align-items:center;justify-content:center;}
	.paymentBox .types .means image{width:62upx;height:62upx;}
	.paymentBox .types .means text{color:#454545;font-size:20upx;line-height:50upx;}
	.paymentBox .types .means image.wechat{width:65upx;height:66upx;}
	.goods_test{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10upx
	}
	.gods_test{
		height: 110upx;
		width:100%;
		padding:36upx 0;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.gods_test1{
		display: flex;
		align-items: center;
	}
	.gods_cont{
		
		width:100%;
		padding:36upx 0;
		background: #fff;
		margin: 20upx 0;
		
		 padding: 0
	}
	.gods_cont_item{
		width: 100%;
		height: 100upx;
	
		display: flex;
		justify-content: space-between;
		align-items: center
	}
</style>
