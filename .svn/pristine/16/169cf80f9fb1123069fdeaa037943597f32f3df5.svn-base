<template>
	<view class="ed-content">
		<view class="uni-flex ed-padding" v-for="(item, index) in list.contentList" :key="index">
			<view class="ed-left-box">
				<image style="width: 150upx;" :src="item.src" mode="widthFix"></image>
			</view>
			<navigator url="./post_details" class="ed-right-box">
				<view class="ed-right-title">
					{{item.title}}
				</view>
				<view class="uni-flex ed-eyes">
					<image style="width: 30upx;" src="/static/img/geomancy/3.png" mode="widthFix"></image>
					<text style="font-size: 20upx;">{{item.eyes}}</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		props:['list']
	}
</script>

<style scoped>
	.ed-banner{padding:0 20upx}
	.ed-content{padding:30upx 20upx}
	.ed-left-box{margin-right:30upx}
	.ed-right-box{width:100%;position:relative}
	.ed-right-title{font-size:29upx}
	.ed-eyes{position:absolute;bottom:0;right:0upx;align-items:center;justify-content:flex-end;color:#5a5a5a}
	.ed-padding{padding-bottom:30upx}
	.footer{text-align:center;font-size:16upx;color:#979797;padding-bottom:30upx}
	.ed-tab{padding: 20upx 20upx 0 20upx; align-items: center;justify-content: space-around;}
	.ed-tab-txt{font-size: 26upx; color: #6B9396;}
</style>
