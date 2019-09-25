<template>
	<view>
		<view class="each-order" v-for="(item, index) in list" :key="index" >
			<view class="orderCode uni-flex"><text>订单编号：{{item.orderCode}}</text><text>{{paymentStates(item.paymentState)}}</text></view>
			<view class="each-order-content">
				<view @click="jump(item)">
					<view class="shopName text-overflow_1-xzh"><text>{{item.shopName}}</text></view>
					<view class="shopInfo uni-flex">
						<view class="shopInfo-img"><image lazy-load :src="item.commodityImg" mode="widthFix" class="is-response"></image></view>
						<view class="shopInfo-introduce uni-flex uni-column">
							<view class="detail">
								<view><text class="text-overflow_2-xzh">{{item.commoditytitle}}</text></view>
								<view><text class="detailColor">{{item.commodityAttr}}</text></view>
							</view>
							<view class="detail details">
								<view><text>￥{{item.commodityPrice}}</text></view>
								<view><text>✖{{item.commodityNum}}</text></view>
							</view>							
						</view>
					</view>
					<view class="shopDetail">
						<view class="delivery uni-flex">
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
						</view>
						<view class="delivery uni-flex">
							<text>上门安装费：{{item.installationCost}}</text>
							<text class="piece">共{{item.total}}件&nbsp;&nbsp;&nbsp;&nbsp;小计：￥{{item.money}}</text>
						</view>
					</view>
				</view>
				<view class="orderState uni-flex">				
					<text v-if="item.paymentState == 0" @click="cancel(item.order_id,index)">取消订单</text>
					<text v-if="item.paymentState == 0" @click="payment(item.order_id,index)">立即付款</text>
					<text v-if="item.paymentState == 1" @click="returngoods(item.order_id,index)">申请退货</text>
					<text v-if="item.paymentState == 3" @click="aftersale(item.order_id)">申请售后</text>
					<text v-if="item.paymentState != 0" @click="see(item.order_id)">查看物流</text>
					<text v-if="item.paymentState == 1 || item.paymentState == 2" @click="confirm(item.order_id,index)">确认收货</text>
					<text v-if="item.paymentState == 3" @click="evaluate(item.order_id)">评价</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		data() {
			return {
				
			};
		},
		methods:{
			paymentStates: function(index) {
				let state;
				switch(index) {
				    case 0:
				        state = "待付款";
				        break;
				    case 1:
				        state = "待发货";
				        break;
					case 2:
					    state = "待收货";
					    break;
				    case 3:
				        state = "待评价";
				}
				return state;				
			},
			cancel:function(order_id,index){ //取消订单
				uni.showModal({
				    title: '取消订单',
				    content: '确认要取消该笔订单吗？',
					cancelText:'暂不取消',
					confirmText:'确定取消',
					confirmColor:'#f00',
				    success: (res)=> {
				        if (res.confirm) {
				            console.log(order_id,index);
							this.list.splice(index, 1); 
				        }
				    }
				});
			},
			payment:function(order_id,index){ //立即支付
				this.$emit('payments',{order_id,index});				
			},
			returngoods:function(order_id,index){ //申请退货
				this.$emit('returngood',{order_id,index});
			},
			aftersale:function(order_id){ //申请售后
				
			},
			see:function(order_id){ //查看物流
				this.$emit('logistics',order_id);
			},
			confirm:function(order_id,index){ //确认收货
				this.$emit('confirms',{order_id,index});
			},
			evaluate:function(order_id){ //评价
				this.$emit('evaluates',order_id);
			},
			jump:function(item){
				this.$emit('jumpUri');
			}
		}
	}
</script>

<style>
	@import "../../static/css/myorder.css";
</style>
