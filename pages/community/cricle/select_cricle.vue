<template>
	<view class="content">
		<navigator class="uni-flex ed-box" url="../write_post/write_post">
			<view class="ed-img">
				<image style="width: 50upx;" src="/static/img/community/cricle/5.png" mode="widthFix"></image>
			</view>
			<view url="../write_post/write_post" style="font-size: 28upx;">不参加任何圈子</view>
		</navigator>
		<swiper class="swiper-box-list" duration="300">
			<swiper-item>
				<scroll-view class="swiper-one-list" scroll-y="true">
					<view v-for="(item, index) in list" @tap="onCricle(item.title)" :key="index" class="uni-flex ed-box">
						<view class="ed-img">
							<image style="width: 120upx;" :src="item.src" mode="widthFix"></image>
						</view>
						<view class="ed-text">
							<view>{{item.title}}</view>
							<view>{{item.content}}</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				list: [{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',

					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
					},

				],
			}
		},
		onLoad() {

		},
		computed: {

		},
		methods: {
			onAdd: function() {
				uni.showToast({
					title: '欢迎成为圈子住友第123457位加入',
					icon: 'none',
					duration: 2000
				});
			},
			onCricle: function(item) {
				this.$store.state.sendPost.cricle = item
				uni.navigateTo({
					url: '../write_post/write_post?cricle=' + item
				})
			}
		}
	}
</script>

<style scoped>
	page{width:100%;height:100%;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;background:#fff}
	.content{width:100%;height:100%}
	.body-view{flex:1;overflow:hidden;height:100%;width:100%;align-items:flex-start;justify-content:center}
	.swiper-box-list{flex:1;width:100%;height:100%;padding-top:20upx}
	.swiper-one-list{height:100%;width:100%}
	.ed-box{align-items:center;padding:0 0 30upx 0;margin:0 20upx}
	.ed-img{margin-right:20upx}
	.ed-text view{height:60upx;line-height:60upx}
	.ed-text view:first-child{font-size:28upx}
	.ed-text view:last-child{font-size:24upx;color:#b8b8b8}
</style>
