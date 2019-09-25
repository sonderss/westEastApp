<template>
	<view class="content">
		<view class="refundDetailWarp">
			<view class="successful successfulOne">
				<view class="txt"><text>退款成功</text></view>
				<view class="txt"><text>2019-08-16  16:51</text></view>
			</view>
			<view class="successful successfulTwo uni-flex">
				<view class="txt"><text>退款总金额：</text></view>
				<view class="txt"><text class="icon">￥</text><text>900.00</text></view>
			</view>
			<view class="successful">
				<view class="txt"><text>退款商品</text></view>
				<view class="uni-flex shopInfoWarp">
					<view class="shopImg"><image lazy-load mode="widthFix" class="is-response" src="/static/img/myorder/img.png"></image></view>
					<view class="shopContent uni-flex uni-column">
						<view>
							<view class="title text-overflow_2-xzh"><text>床 现代简约双人床 实木北欧小户型榻榻米床1.8</text></view>
							<view class="tet"><text>红色，S码</text></view>
						</view>
						<view class="tet"><text>订单编号：56596553655693265</text></view>
					</view>
				</view>
			</view>
			<view class="successful successfulThree">
				<view class="txt"><text>售后类型：退货</text></view>
				<view class="txt"><text>退款原因：其他</text></view>
				<view class="txt"><text>退款金额：￥900.00</text></view>
				<view class="txt"><text>申请时间：2019-08-16  17:07</text></view>
				<view class="txt"><text>退款编号：5312348531532132</text></view>
			</view>
			<view class="contact uni-flex">
				<view class="divide uni-flex">
					<image class="news" src="/static/img/myorder/news.png"></image>
					<text>联系卖家</text>
				</view>
				<view class="divide uni-flex" @click="phoneCall">
					<image class="news" src="/static/img/myorder/phone.png"></image>
					<text>拨打电话</text>
				</view>
				<view class="divide uni-flex">
					<image class="news" src="/static/img/myorder/news.png"></image>
					<text>平台客服</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:'13049365984'
			}
		},
		methods: {
			phoneCall:function(){
				uni.showModal({
				    content: '拨打'+this.phoneNumber,
				    success: (res)=> {
				        if (res.confirm) {
				            uni.makePhoneCall({
				                phoneNumber: this.phoneNumber 
				            });
				        } else if (res.cancel) {
				            //console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style>
	@import "../../static/css/myorder.css";
	uni-page-body{width:100%;height:100%;background:#fff;}
</style>
