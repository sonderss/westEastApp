<template>
	<view class="goods_reco goods_qi" style="background:#F2F2F2">
		<view class="goods-info-title" style="text-align:center">猜你喜欢</view>
		<view class="like">
			<block v-for="(item,index) in content" :key="index" >
				<view class="likeShop shadow-xzh" @click="handleClick(item.good_id)">
					<view class="shopImg" style="width:340upx;height:307upx"><image lazy-load mode="widthFix" :src="item.img"></image></view>
					<text class="shopName text-overflow_1-xzh">{{item.title}}</text>
					<view class="shopDescribe uni-flex">
						<text class="shopPrice">￥{{item.price}}</text>
						<text class="shopPayment">{{item.payment}}人付款</text>
						<!-- <text class="shopAdd">{{item.add}} {{item.supply}}</text> -->
					</view>
				</view>
			</block>					
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GuessLike',
		props: ['content'],
		data() {
			return {
	
			}
		},
		methods:{
			handleClick:function(good_id){
				this.$emit('jump',good_id)
			},
		
		}
		
	}
</script>

<style>
	@import "../../static/css/goodsinfo.css";
</style>
