<template>
	<view>
		<view v-if="list" class="each-order" v-for="(item, index) in list" :key="index">
			<view class="orderCode uni-flex"><text>订单编号：{{item.orderNo}}</text><text>{{paymentStates(item.status)}}</text></view>
			<view class="each-order-content" style="margin-top: 20upx; ">
				<view @click="jump(item)">
					<view class="shopInfo uni-flex" v-for="(e, index) in item.goodsList" :key="index">
						<view class="shopInfo-img">
							<image lazy-load :src="e.spuPic" style="width: 180upx; height: 180upx;" class="is-response"></image>
						</view>
						<view class="shopInfo-introduce uni-flex uni-column">
							<view class="detail">
								<view><text class="text-overflow_2-xzh">{{e.spuName}}</text></view>
								<view><text class="detailColor">{{e.specifiCations}}</text></view>
							</view>
							<view class="detail details uni-flex">
								<view><text>￥{{e.price}}</text></view>
								<view><text>x {{e.number}}</text></view>
							</view>
						</view>
					</view>
					<view class="shopDetail">
						<!-- 	<view class="delivery uni-flex">
							<text>配送方式</text>
							<text class="mode">普通配送</text>
							<text>{{item.distributionMode}}</text>
						</view>
						<view class="delivery uni-flex" @click="invoice">
							<text>开具发票</text>
							<text class="piece">{{item.invoice}}</text>
						</view>
						<view class="delivery uni-flex">
							<text>订单备注</text>
							<text class="remarks">{{item.remarks}}</text>
						</view> -->
						<view class="delivery uni-flex">
							<text class="piece">共{{item.nCount}}件&nbsp;&nbsp;&nbsp;&nbsp;应付金额：￥{{item.payAmount}}</text>
						</view>
					</view>
				</view>
				<view class="orderState uni-flex">
					<text v-if="item.status == 2" @click="returngoods(item.orderNo,item.id)">取消订单</text>
					<text class="pink" v-if="item.status == 2" @click="payment(item.orderNo,item.id)">立即付款</text>
					<!-- <text v-if="item.status == 1" @click="returngoods(item.order_id,index)">申请退货</text> -->
					<!-- <text v-if="item.status == 5" @click="aftersale(item.order_id)">申请售后</text> -->
					<text v-if="item.status == 4" @click="see(item.orderNo,item.id)">查看物流</text>
					<text v-if="item.status == 4" @click="confirm(item.orderNo,item.id)">确认收货</text>
					<text v-if="item.status == 6" @click="evaluate(item.orderNo,item.id)">查看评价</text>
					<text v-if="item.status == 1 || item.status == 5" @click="evaluate(item.orderNo,item.id)">评价商品</text>
					<text v-if="item.status == -1" @click="del(item.orderNo,item.id)">删除订单</text>
					<text v-if="item.status == 3" @click="reminder(item.orderNo,item.id)">我要催单</text>
					<text class="pink" v-if="item.status == 1 || item.status == 3 || item.status == -1 || item.status == 6 || item.status == 5" @click="addCart(item.id)">加入购物车</text>
				</view>
			</view>
		</view>
		
		<view v-else>暂无数据</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		mounted() {
		},
		data() {
			return {

			};
		},
		methods: {
			paymentStates: function(index) {
				let state;
				switch (index) {
					case 1:
						state = "交易完成";
						break;
					case 2:
						state = "等待付款";
						break;
					case 3:
						state = "等待发货";
						break;
					case 4:
						state = "等待收货";
						break;
					case 5:
						state = "等待评价";
						break;
					case 6:
						state = "交易完成"; //完成订单已评价
						break;
					case -1:
						state = "交易关闭";
				}
				return state;
				// switch (index) {
				// 	case 0:
				// 		state = "等待付款";
				// 		break;
				// 	case 1:
				// 		state = "等待发货";
				// 		break;
				// 	case 2:
				// 		state = "等待收货";
				// 		break;
				// 	case 3:
				// 		state = "等待评价";
				// 		break;
				// 	case 4:
				// 		state = "交易成功";
				// 		break;
				// 	case 5:
				// 		state = "交易关闭";
				// 		break;
				// 	case 6:
				// 		state = "交易关闭";
				// }
				// return state;
			},
			del: function(order_id, index) { //删除订单
				uni.showModal({
					title: '删除订单',
					content: '确认要删除该笔订单吗？',
					cancelText: '暂不',
					confirmText: '确定',
					confirmColor: '#f00',
					success: (res) => {
						if (res.confirm) {
							this.list.splice(index, 1);
						}
					}
				});
			},
			reminder: function(order_id, id) { //催单
				this.$emit('reminder',{order_id, id})
			},
			
			payment: function(order_id, index) { //立即支付
				this.$emit('payments', {
					order_id,
					index
				});
			},
			returngoods: function(order_id, index) { //取消订单
				this.$emit('returngood', {
					order_id,
					index
				});
			},
			aftersale: function(order_id) { //申请售后

			},
			see: function(order_id) { //查看物流
				this.$emit('logistics', order_id);
			},
			confirm: function(order_id, id) { //确认收货
				this.$emit('confirms', {
					order_id,
					id
				});
			},
			evaluate: function(order_id) { //评价
				this.$emit('evaluates', order_id);
			},
			addCart:function(order_id){
				this.$emit('addCart',order_id);
			},
			jump: function(item) {
				this.$emit('jumpUri', item);
			}
		}
	}
</script>

<style>
	@import "../../static/css/myorder.css";
</style>
