<template>
	<view class="content">
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view class="body-view uni-flex uni-column">
			<!-- tab -->
			<tui-tabs :tabs="menuTabs" :isFixed="scrollTop>=0" :padding="0" :sliderHeight="5" :currentTab="currentTab" @change="swichMenu"></tui-tabs>
			<!-- 滚动内容 -->
			<swiper :class="{'tui-order-list':scrollTop>=0}" :current="currentTab" class="swiper-box-list" duration="0">
				<!-- 全部订单 -->
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list v-if="orders.length > 0" :list="orders" @payments="rightOff" @confirms="confirm" @returngood="returngoods"
						 @logistics="logistic" @jumpUri="jump" @reminder="reminder" @addCart="addCart"></order-list>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 待付款 -->
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list :list="orders" @payments="rightOff" @jumpUri="jump" @returngood="returngoods" @addCart="addCart"></order-list>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 代收货 -->
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list :list="orders" @returngood="returngoods" @logistics="logistic" @confirms="confirm" @jumpUri="jump"
						 @reminder="reminder" @addCart="addCart"></order-list>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 已完成 -->
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list :list="orders" @logistics="logistic" @confirms="confirm" @jumpUri="jump" @addCart="addCart"></order-list>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 已取消 -->
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<order-list :list="orders" @logistics="logistic" @evaluates="evaluate" @jumpUri="jump" @addCart="addCart"></order-list>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<view class="example-body" style="margin: 0 auto;" v-if="orders">
				<uni-load-more :status="status" />
			</view>
			<!-- 支付弹框 -->
			<uni-popup ref="popup" type="bottom" :custom="false" :radius="true">
				<view class="paymentBox">
					<view class="title uni-flex">
						<view class="paymentClose" @click="close">
							<image style="position:absolute;right:40upx;top:30upx;width:38upx;height:38upx" src="/static/img/confirmation/paymentClose.png"></image>
						</view>
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
			<!-- 取消订单 -->
			<uni-popup ref="refund" type="bottom" :custom="false" :radius="true">
				<view class="pop_header">
					<text>取消订单</text>
					<image style="position:absolute;right:40upx;top:30upx;width:38upx;height:38upx" src="/static/img/close.png" @tap="close"></image>
				</view>
				<view class="title">取消订单后，本单享有的优惠可能会一并取消，是否继续？</view>
				<view class="title2">请选择取消订单的原因（必选）：</view>
				<view class="list_style">
					<view class="pop_content" v-for="(item, index) in items" :key="index">
						<radio-group style="margin-right: 20upx;" @change="radioChange(item.id)" v-model="item.id">
							<radio @change="radioChange(item.id)" :checked="index === current" style="transform:scale(0.7)" color="#C17B7D" />
						</radio-group>
						<view>{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="sure" @tap="subOrder">
						<text>确认</text>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import orderList from '@/components/order-list/order-list.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import requestPayment from '@/components/request-payment/request-payment.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import api from '../../apis/https/myApi.js'
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import tuiTabs from "@/edith_components/tui-tabs/tui-tabs"
	export default {
		components: {
			orderList,
			uniPopup,
			requestPayment,
			uniLoadMore,
			tuiSkeleton,
			tuiTabs
		},
		data() {
			return {
				scrollTop: 0,
				skeletonShow: true,
				status: 'more',
				getStatus: null,
				tabStatus: '',
				menuTabs: [{
					name: "全部",
					status: ''
				}, {
					name: "待付款",
					status: '2'
				}, {
					name: "待收货",
					status: '3'
				}, {
					name: "已完成",
					status: '5'
				}, {
					name: "已取消",
					status: '-1'
				}],
				current: 0,
				currentTab: 0,
				noneTxt: false,
				pageindex: 1,
				items:[],
				orders: [],
				temp:{
					id: null,
					causeid: 6
				}
			}
		},
		onLoad(res) {
			this.currentTab = Number(res.navNum)
			this.getStatus = res.status
		},
		mounted() {
			this.getOrderList()
		},
		methods: {
			getOrderList(flag) {
				if (this.currentTab === 0) {
					this.currentTab = null
				}
				const data = {
					status: this.getStatus,
					pageindex: this.pageindex,
					pagesize: 20
				}
				api.getOrderPageList(data).then((res) => {
					if (res.statusCode === 200 && res.data.status === 0) {
						setTimeout(() => {
							this.skeletonShow = false
						}, 1000)
						this.status = 'noMore'
						this.orders = this.orders.concat(res.data.data.list);
						if (this.orders.length === 0) {
							setTimeout(() => {
								this.skeletonShow = false
							}, 1000)
							this.noneTxt = true
						}
					}else{
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 2000
						})
						this.skeletonShow = false
					}
				})
			},
			getOrderList2() {
				const data = {
					status: this.tabStatus,
					pageindex: 1,
					pagesize: 20
				}
				api.getOrderPageList(data).then((res) => {
					if (res.statusCode === 200 && res.data.status === 0) {
						setTimeout(() => {
							this.skeletonShow = false
						}, 1000)
						this.orders = res.data.data.list
						this.noneTxt = false
						this.status = 'noMore'
						if (this.orders.length === 0) {
							setTimeout(() => {
								this.skeletonShow = false
							}, 1000)
							this.noneTxt = true
						}
					}else{
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 2000
						})
						this.skeletonShow = false
					}
				})
			},
			//确认收货接口
			postConfirm(id) {
				api.postConfirmReceipt({
					id: id
				}).then((res) => {
					if (res.statusCode === 200) {
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						});
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						});
					}
				})
			},
			onNavigationBarButtonTap() {
				uni.navigateTo({
					url: '../invoice/invoice'
				})
			},
			swichMenu(e){
				if (this.currentTab == e.index) {
						return false;
					} else {
						this.currentTab = e.index;
						this.tabStatus = e.item.status
						this.getOrderList2()
					}
			},
			rightOff(e) {
				uni.navigateTo({
					url: '../pay_pages/postpay'
				})
			},
			returngoods(e) {
				this.temp.id = e.id
				api.getSaleAfterApplyCause({type:2}).then((res)=>{
					if(res.statusCode === 200 && res.data.status === 0){
						this.items = res.data.data
					}else{
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						})
					}
				})
				this.$refs.refund.open();
			},
			radioChange(id) {
				this.temp.causeid = id
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].id === id) {
						this.current = i;
						break;
					}
				}
			},
			subOrder(){ //确认取消订单提交
				api.colseOrder(this.temp).then((res)=>{
					if(res.statusCode === 200 && res.data.status === 0){
						uni.showToast({
							title: res.data.msg
						})
					}else{
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						})
					}
					console.log(res);
				})
			},
			logistic() { //查看物流
				uni.navigateTo({
					url: '../ordertracking/index'
				})
			},
			confirm(e) { //确认收货
				uni.showModal({
					content: '确认收货该笔订单吗？',
					cancelText: '取消',
					confirmText: '确定',
					confirmColor: '#f00',
					success: (res) => {
						if (res.confirm) {
							if (this.postConfirm(e.id)) {
								this.orders.splice(e.id, 1)
							}
						}
					}
				});
			},
			reminder(e) { // 我要催单
				uni.showModal({
					content: '您购买的商品目前处于发货时效内，确认要提醒商家发货？',
					cancelText: '暂不',
					confirmText: '确定',
					confirmColor: '#f00',
					success: (res) => {
						if (res.confirm) {
							api.postRemindercount({
								id: e.id
							}).then((res) => {
								if (res.statusCode === 200) {
									uni.showToast({
										icon: 'none',
										title: res.data.msg,
										duration: 2000
									});
									this.orders.splice(e.id, 1)
								} else {
									uni.showToast({
										icon: 'none',
										title: '网络原因,请稍后重试!',
										duration: 2000
									});
								}
							})
						}
					}
				});
			},
			addCart(id) { //加入购物车
				api.addMyOrderCart({
					id: id
				}).then((res) => {
					if (res.statusCode === 200) {
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						})
					}
				})
			},
			evaluate(e) { //评价
				uni.navigateTo({
					url: 'evaluate?orderId=' + e,
				});
			},
			loadMore(index) { //加载更多
				this.pageindex++
				this.status = 'loading'
				setTimeout(() => {
					this.getOrderList()
				}, 500)
			},
			refundClose() {
				this.$refs.refund.close();
			},
			logisticlose() {
				this.$refs.logistics.close();
			},
			jump(item) {
				uni.navigateTo({
					url: 'orderDetail?status=' + item.status + '&' + 'id=' + item.id,
				});
			},
			close() {
				this.$refs.refund.close();
			},
		}
	}
</script>

<style scoped>
	@import "../../static/css/myorder.css";

	.none-img {
		text-align: center;
		font-size: 26upx;
		height: 80upx;
		line-height: 80upx;
		color: #C17B7D;
	}

	.none-img image {
		margin: 0 auto;
		width: 400upx;
		margin-top: 100upx;
	}
	
	.tui-order-list {
		margin-top: 90upx;
	}
</style>
