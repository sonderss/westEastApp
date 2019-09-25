<template>
	<view class="content">
		<view class="body-view uni-flex uni-column">
			<scroll-view class="top-menu-view">
				<block v-for="(menuTab,index) in menuTabs" :key="index">
					<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
						<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
							<view class="menu-one-txt">{{menuTab.name}}</view>
							<view class="menu-one-bottom">
								<view class="menu-one-bottom-color"></view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list v-if="orders.length > 0" :list="orders" @payments="rightOff" @returngood="returngoods" @logistics="logistic" @jumpUri="jump"></order-list>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list v-if="paymentsItem.length > 0" :list="paymentsItem" @payments="rightOff"></order-list>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list v-if="receiptsItem.length > 0" :list="receiptsItem" @returngood="returngoods" @logistics="logistic" @confirms="confirm"></order-list>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list v-if="returnsItem.length > 0" :list="returnsItem" @logistics="logistic" @confirms="confirm"></order-list>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list v-if="completesItem.length > 0" :list="completesItem" @logistics="logistic" @evaluates="evaluate"></order-list>
					</scroll-view>
				</swiper-item>
			</swiper>
			<!-- 支付弹框 -->
			<uni-popup ref="popup" type="bottom" :custom="false" :radius="true">
				<view class="paymentBox">
					<view class="title uni-flex">
						<view class="paymentClose" @click="close"><image src="/static/img/confirmation/paymentClose.png"></image></view>
						<text>确认订单</text>
					</view>
					<view class="money uni-flex"><text>￥799.00</text></view>
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
			<!-- 退款原因 -->
			<uni-popup ref="refund" type="bottom" :custom="false" :radius="true">
				<view class="refundBox">
					<view class="title uni-flex">
						<view class="closeImg" @clicl="refundClose"><image src="/static/img/confirmation/paymentClose.png"></image></view>
						<text>退货原因</text>
					</view>
					<view class="reasonlist">
						<view class="reason uni-flex" v-for="(item,index) in reasonlist" :key="index">
							<text>{{item.txt}}</text>
							<radio-group @change="radioChange"><radio :value="item.type" :checked="index === current" style="transform:scale(0.7)" color="#f00" @change="radioChange" /></radio-group>
						</view>
					</view>
					<button class="btn" @click="subOrder">提交订单</button>
				</view>
			</uni-popup>
			<!-- 查看物流 -->
			<uni-popup ref="logistics" type="center" :custom="false" :radius="true">
				<view class="logisticsBox">
					<view class="track"><text>物流追踪</text></view>
					<view class="scollContent">
						<scroll-view scroll-y="true" class="scroll-Y">
							<view class="message uni-flex">
								<view class="icon"></view>
								<text>2019-8-20 13:00:00</text>
								<text>已签收</text>
							</view>														
						</scroll-view>
					</view>
					<view class="track trackClose" @click="logisticlose"><text>关闭</text></view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import orderList from '@/components/order-list/order-list.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import requestPayment from '@/components/request-payment/request-payment.vue'
	export default {
		components: {
			orderList,
			uniPopup,
			requestPayment
		},
		data() {
			return {
				menuTabs: [{
					name: "全部"
				}, {
					name: "待付款"
				},{
					name: "待发货"
				},{
					name: "待收货"
				},{
					name: "待评价"
				}],
				current:0,
				refundOrder_id:0,
				refundIndex:0,
				reasonlist:[{"txt":"买错了","type":"1"},{"txt":"不想要了","type":"2"},{"txt":"先不买","type":"3"},{"txt":"其他","type":"4"}],
				currentTab:0,
				orders:[{
					order_id:0,
					orderCode:"123456796354",
					paymentState:0,
					shopName:"店铺名称",
					commodityImg:"/static/img/comment/comment-img.jpg",
					commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
					commodityAttr:"红色，S码",
					commodityPrice:799.00,
					commodityNum:1,
					distributionMode:"上门安装",
					invoice:"商品明细",
					remarks:"无",
					installationCost:"100",
					total:1,
					money:899
				},{
					order_id:1,
					orderCode:"123456796354",
					paymentState:1,
					shopName:"店铺名称",
					commodityImg:"/static/img/comment/comment-img.jpg",
					commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
					commodityAttr:"红色，S码",
					commodityPrice:799.00,
					commodityNum:1,
					distributionMode:"上门安装",
					invoice:"商品明细",
					remarks:"无",
					installationCost:"100",
					total:1,
					money:899
				}],
				paymentsItem:[{
					order_id:2,
					orderCode:"123456796354",
					paymentState:0,
					shopName:"店铺名称",
					commodityImg:"/static/img/comment/comment-img.jpg",
					commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
					commodityAttr:"红色，S码",
					commodityPrice:799.00,
					commodityNum:1,
					distributionMode:"上门安装",
					invoice:"商品明细",
					remarks:"无",
					installationCost:"100",
					total:1,
					money:899
				}],
				receiptsItem:[{
					order_id:3,
					orderCode:"123456796354",
					paymentState:1,
					shopName:"店铺名称",
					commodityImg:"/static/img/comment/comment-img.jpg",
					commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
					commodityAttr:"红色，S码",
					commodityPrice:799.00,
					commodityNum:1,
					distributionMode:"上门安装",
					invoice:"商品明细",
					remarks:"无",
					installationCost:"100",
					total:1,
					money:899
				}],
				returnsItem:[{
					order_id:4,
					orderCode:"123456796354",
					paymentState:2,
					shopName:"店铺名称",
					commodityImg:"/static/img/comment/comment-img.jpg",
					commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
					commodityAttr:"红色，S码",
					commodityPrice:799.00,
					commodityNum:1,
					distributionMode:"上门安装",
					invoice:"商品明细",
					remarks:"无",
					installationCost:"100",
					total:1,
					money:899
				}],
				completesItem:[{
					order_id:5,
					orderCode:"123456796354",
					paymentState:3,
					shopName:"店铺名称",
					commodityImg:"/static/img/comment/comment-img.jpg",
					commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
					commodityAttr:"红色，S码",
					commodityPrice:799.00,
					commodityNum:1,
					distributionMode:"上门安装",
					invoice:"商品明细",
					remarks:"无",
					installationCost:"100",
					total:1,
					money:899
				}],
			}
		},
		onLoad() {
			
		},
		computed:{

		},
		methods: {
			onNavigationBarButtonTap(){
				uni.navigateTo({
					url:'../invoice/invoice'
				})
			},
			swichMenu: async function(current) { //点击其中一个 menu
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.currentTab = index; 
			},
			rightOff:function(e){
				this.$refs.popup.open();
				if(this.currentTab == 0){ //支付成功之后
					let obj = this.orders[e.index];
					this.$set(obj,"paymentState",1);
					//this.orders.splice(e.index, 1);
				}else{
					this.paymentsItem.splice(e.index, 1);
				}
				
			},
			returngoods:function(e){ //申请退货
				this.refundOrder_id = e.order_id;
				this.refundIndex = e.index;
				this.$refs.refund.open();
			},
			radioChange:function(evt){
				for (let i = 0; i < this.reasonlist.length; i++) {
					if (this.reasonlist[i].type === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			subOrder:function(){
				//退款订单id this.refundOrder_id ,跳转提交成功页面
				if(this.currentTab == 0){ //退款成功之后			
					this.orders.splice(this.refundIndex, 1);
				}else{
					this.receiptsItem.splice(this.refundIndex, 1);
				}
				this.refundClose();
				uni.navigateTo({
					url:'refundSuccess?orderId='+this.refundOrder_id,
				});
			},
			logistic:function(){ //查看物流
				this.$refs.logistics.open();			
			},
			confirm:function(e){	//确认收货
				uni.showModal({
				    content: '确认收货该笔订单吗？',
					cancelText:'取消',
					confirmText:'确定',
					confirmColor:'#f00',
				    success: (res)=> {
				        if (res.confirm) {
							if(this.currentTab == 0){
								let obj = this.orders[e.index];
								this.$set(obj,"paymentState",3);
							}else if(this.currentTab == 2){ //确认收货成功之后
				            	this.receiptsItem.splice(e.index, 1);
				            }else{
				            	this.returnsItem.splice(e.index, 1);
				            }
				        }
				    }
				});			
			},
			evaluate:function(e){ //评价
				uni.navigateTo({
					url:'evaluate?orderId='+e,
				});
			},
			loadMore:function(index){ //加载更多
				
			},
			close:function(){
				this.$refs.popup.close();
			},
			refundClose:function(){
				this.$refs.refund.close();
			},
			logisticlose:function(){
				this.$refs.logistics.close();
			},
			jump:function(){
				uni.navigateTo({
					url:'orderDetail',
				});
			}
		}
	}
</script>

<style>
	@import "../../static/css/myorder.css";
</style>
