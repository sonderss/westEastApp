<template>
	<view class="content">
		<view class="successBox">
			<view class="successImg"><image src="/static/img/myorder/success.png"></image></view>
			<view class="successTxt"><text>申请退款提交成功</text></view>
			<view class="successTxt refundCode"><text>退款编号：465132486512465</text></view>
			<view class="successTxt"><text>提交时间：2019-08-16 16:34</text></view>
			<view class="successTxt refundCode seedetail" @click="seedetails"><text>查看详情</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_id:0
			}
		},
		onLoad(option) {
			if (option.orderId) { //订单ID
				this.order_id = option.orderId;
			}else{
				uni.navigateBack();
			}
		},
		methods: {
			seedetails:function(){
				uni.navigateTo({
					url:'refundDetail?orderId='+this.order_id,
				});
			}
		}
	}
</script>

<style>
	@import "../../static/css/myorder.css";
	uni-page-body{width:100%;height:100%;background:#fff;}
</style>

