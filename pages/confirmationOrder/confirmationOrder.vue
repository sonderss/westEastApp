<template>
	<view class="content">
		<view class="confirmation-order">
			<scroll-view class='scroll-view-left' scroll-y='true' :style="{'height':scrollHeight+'px'}">
				<view class="order-add uni-flex">
					<image class="addIcon" src="/static/img/confirmation/addicon.png"></image>
					<view class="addDetail">
						<view class="warp uni-flex uni-column" v-if="address" @click="receiving ">
							<view><text>张三</text><text class="phone">18896636555</text></view>
							<text class="add">广东省广州市番禺区天安科技园</text>
						</view>
						<view class="warp uni-flex uni-column" v-else @click="addto"><text>添加收货地址</text></view>
					</view>
					<image class="addArrow" src="/static/img/confirmation/addArrow.png"></image>
				</view>
				<view class="each-order">
					<view class="each-order-content" v-for="(item,i) in userCart" :key="i" v-if="item.haschecked">
						<view class="shopName text-overflow_1-xzh"><text>{{item.shopname}}</text></view>
						<view class="shopInfo uni-flex" v-for="(item2,j) in item.goods_list" :key="j" v-if="item2.checked">
							<view class="shopInfo-img"><image lazy-load :src="item2.img" mode="widthFix" class="is-response"></image></view>
							<view class="shopInfo-introduce uni-flex uni-column">
								<view class="detail">
									<view><text class="text-overflow_2-xzh">{{item2.title}}</text></view>
									<view><text class="detailColor" v-for="(item3,k) in item2.parameter" :key="k">{{k}}:{{item3}}</text></view>
								</view>
								<view class="detail details">
									<view><text>￥{{item2.price}}</text></view>
									<view><text>✖{{item2.good_num}}</text></view>
								</view>							
							</view>
						</view>
						<view class="shopDetail">
							<view class="delivery uni-flex">
								<text>配送方式</text>
								<text class="mode">普通配送</text>
								<text>上门安装</text>
							</view>
							<view class="delivery uni-flex" @click="invoice">
								<text>开具发票</text>
								<text class="piece">不开具发票></text>
							</view>
							<view class="delivery uni-flex">
								<text>订单备注</text>
								<input class="remarks" placeholder="请先与商家协商一致,填选" />
							</view>
							<view class="delivery uni-flex">
								<text>上门安装费：100</text>
								<text class="piece">共1件&nbsp;&nbsp;&nbsp;&nbsp;小计：￥{{shop_total_price[i]}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="submission-order" id="orderSubmit">
				<view class="total">合计：<text>￥{{all_total_price}}</text></view>
				<view class="subOrder" @click="submitOrder">提交订单</view>
			</view>
			<!-- 支付弹框 -->
			<uni-popup ref="popup" type="bottom" :custom="false" @change="change" :radius="true">
				<view class="paymentBox">
					<view class="title uni-flex">
						<view class="paymentClose" @click="close"><image src="/static/img/confirmation/paymentClose.png"></image></view>
						<text>确认订单</text>
					</view>
					<view class="money uni-flex"><text>￥{{all_total_price}}</text></view>
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
		<request-payment ref="requestpayment" :price="all_total_price"></request-payment>
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
				address:false,
				userCart:{},
				buy_now: false
			}
		},
		onReady() {
			let that = this;
			setTimeout(function() {
			  that.calculateScrollViewHeight()
			}, 100)
		},
		onLoad(e) {
			if(e.buy_now){
				this.buy_now=e.buy_now
			}
			this.userCart=this.help.load('userCart')
		},
		onHide(){
			this.$store.dispatch('save',{'buy_now_obj':{}})
		},
		mounted(){
			if(this.buy_now){
				this.userCart=this.buy_now_obj
			}
		},
		computed :{
			...mapState(['buy_now_obj']),
			shop_total_price(){
				let _arr=[]
				for(let i=0;i<this.userCart.length;i++){
					let _price=0
					for(let j=0;j<this.userCart[i].goods_list.length;j++){
						if( this.userCart[i].goods_list[j].checked){
							_price+=Number(this.userCart[i].goods_list[j].price)*Number(this.userCart[i].goods_list[j].good_num)
						}
					}
					if(_price>0){
						_price+=Number(this.userCart[i].freight)+100
					}
					_arr.push(_price)
				}
				return _arr
			},
			all_total_price(){
				var _total_price=0
				for(let i=0;i<this.shop_total_price.length;i++){
					_total_price+=this.shop_total_price[i]
				}
				return _total_price
			},
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
				if(this.is_empty(this.login)){ //未登录
					uni.navigateTo({
						url: '/pages/auth/login/login'
					})
				}else{ //已登陆
					//提交后台，有后台返回提交商品价格，再显示支付方式，payment:true执行支付，payment:false为提交失败
					uni.showToast({
					    title: '订单正在提交中，请稍等...',
						icon:'none',
					    duration: 1000,
					});
					if(this.is_empty(this.payment)){
						uni.hideToast();
						uni.showToast({
						    title: '订单提交失败，请重新提交',
							icon:'none',
						    duration: 1000,
						});
					}else{
						this.pay();
					}
				}
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
			invoice:function(){
				uni.navigateTo({
				    url: '../invoice/invoice'
				});
			},
			receiving:function(){
				
			},
			addto:function(){
				uni.navigateTo({
				    url: '../address/newlyAdded?type=add'
				});
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
	.total text{color:#f00;font-weight:600;}
	.subOrder{height:76upx;width:93%;background:#f00;font-size:28upx;color:#fff;margin:0 auto;border-radius:38upx;text-align:center;line-height:76upx;}
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
</style>
