<template>
	<view class="container">
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view class="body-view uni-flex uni-column">
			<tui-tabs :tabs="menuTabs" :isFixed="scrollTop>=0" :sliderHeight="5" itemWidth="50%" :currentTab="currentTab" @change="swichMenu"></tui-tabs>
			<swiper :class="{'tui-order-list':scrollTop>=0}" :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<swiper-item class="swiper_item">
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view v-for="(item, index) in waitComment" :key="index" class="uni-flex ed-box">
							<view class="ed-img">
								<image :src="item.src" mode="widthFix"></image>
							</view>
							<view class="ed-text">
								<view>{{item.title}}</view>
								<view class="uni-flex" style="justify-content: space-between;align-items: center;">
									<text>{{item.content}}</text>
									<text @tap="onSend(item.id)" class="issue">发布评价</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view v-for="(item, index) in commentList" :key="index" class="uni-flex ed-box">
							<view class="ed-img">
								<image :src="item.src" mode="widthFix"></image>
							</view>
							<view class="ed-text">
								<view style="height: 50upx;">{{item.title}}</view>
								<view style="height: 50upx;" class="feedback-star-view">
									<text style="margin-right: 10upx;">评分</text>
									<tui-rate :current="item.start" :size="16" :quantity="5"></tui-rate>
								</view>
								<view>{{item.content}}</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import tuiRate from "@/edith_components/rate/rate"
	import tuiTabs from "@/edith_components/tui-tabs/tui-tabs"
	export default {
		components: {
			tuiSkeleton,
			tuiRate,
			tuiTabs
		},
		data() {
			return {
				skeletonShow: true,
				scrollTop: 0,
				menuTabs: [{
					name: '待评价'
				}, {
					name: '已评价'
				}],
				currentTab: 0,
				commentList: [{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '很不错，下次会再买！很不错，下次会再买！ 很不错，下次会再买！下次会...',
						start: 4
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '很不错，下次会再买！很不错，下次会再买！ 很不错，下次会再买！下次会...',
						start: 5
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '很不错，下次会再买！很不错，下次会再买！ 很不错，下次会再买！下次会...',
						start: 3
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '很不错，下次会再买！很不错，下次会再买！ 很不错，下次会再买！下次会...',
						start: 2
					},
				],
				waitComment: [{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 1
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 2
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 3
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 4
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 5
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 6
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 7
					}, {
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 8
					},
					{
						src: '/static/img/goods/detail.jpg',
						title: '北欧风格布艺转角沙发',
						content: '评论可获得10积分',
						id: 9
					},

				],
			}
		},
		onLoad() {
			setTimeout(() => {
				this.skeletonShow = false
			}, 1000)
		},
		computed: {

		},
		methods: {
			swichMenu: async function(e) {
				if (this.currentTab == e.index) {
					return false;
				} else {
					this.currentTab = e.index;
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.currentTab = index;
			},
			onAdd: function(item) {
				item.status = 0
				uni.showToast({
					title: '欢迎加入我们，成为圈子住友第123457位加入',
					icon: 'none',
					duration: 2000
				});
			},
			onSend: function(id) {
				uni.navigateTo({
					url: './send_comment?id=' + id
				})
			},
			loadMore: function(index) {

			},
		}
	}
</script>

<style scoped>
	page{width:100%;height:100%;background:#f2f2f2}
	.body-view{flex:1;overflow:hidden;height:100%;width:100%;align-items:flex-start;justify-content:center;background:#f2f2f2}
	.swiper-box-list{flex:1;width:100%;height:auto}
	.swiper-one-list{height:100%;width:100%}
	.ed-box{align-items:center;margin:0 20upx 20upx 20upx;background:#fff;padding:20upx 20upx;border-radius:10upx}
	.ed-img{margin-right:20upx}
	.ed-img image{width:170upx;height:170upx;border-radius:20upx}
	.ed-text{width:100%}
	.ed-text view{overflow:hidden}
	.ed-text view:first-child{font-size:28upx}
	.ed-text view:last-child{font-size:24upx;color:#b8b8b8}
	.feedback-star-view{margin-left:0;font-size:26upx}
	.issue{border:1px solid #4c4c4c;padding:10upx;color:#4c4c4c;border-radius:10upx}
	.tui-order-list{margin-top:90upx}
	.container{width:100%;height:100%;padding-bottom:env(safe-area-inset-bottom)}
</style>
