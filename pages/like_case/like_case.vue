<template>
	<view class="container">
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view class="body-view uni-flex uni-column">
			<tui-tabs :tabs="menuTabs" :isFixed="scrollTop>=0" :sliderHeight="5" itemWidth="33%" :currentTab="currentTab"
			 @change="swichMenu"></tui-tabs>
			<swiper :class="{'tui-order-list':scrollTop>=0}" :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<swiper-item @touchmove.stop class="swiper_item">
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<like-case @jumpCases="jumpCase" :list="adornList"></like-case>
					</scroll-view>
				</swiper-item>
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<like-case @jumpCases="jumpCase" :list="designList"></like-case>
					</scroll-view>
				</swiper-item>
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<like-case @jumpCases="jumpCase" :list="buildList"></like-case>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import likeCase from '@/components/like-case/like-case.vue'
	import tuiTabs from "@/edith_components/tui-tabs/tui-tabs"
	export default {
		components: {
			tuiSkeleton,
			likeCase,
			tuiTabs
		},
		data() {
			return {
				skeletonShow: true,
				scrollTop: 0,
				menuTabs: [{
					name: '装修公司'
				}, {
					name: '设计公司'
				}, {
					name: '建筑公司'
				}],
				currentTab: 0,
				adornList: [{
						src: '/static/img/like_case/1.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						content: '居众装饰',
						headImg: '/static/img/like_case/2.png',
						start: '4',
						id: 1,
					},
					{
						src: '/static/img/like_case/3.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						headImg: '/static/img/like_case/2.png',
						content: '居众装饰',
						start: '5',
						id: 2,
					},
					{
						src: '/static/img/like_case/4.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						headImg: '/static/img/like_case/2.png',
						content: '居众装饰',
						start: '3',
						id: 3
					},
				],
				designList: [{
						src: '/static/img/like_case/5.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						content: '居众装饰',
						headImg: '/static/img/like_case/2.png',
						start: '4',
						id: 4
					},
					{
						src: '/static/img/like_case/6.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						headImg: '/static/img/like_case/2.png',
						content: '居众装饰',
						start: '5',
						id: 5
					},
					{
						src: '/static/img/like_case/7.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						headImg: '/static/img/like_case/2.png',
						content: '居众装饰',
						start: '3',
						id: 6
					},
				],
				buildList: [{
						src: '/static/img/like_case/8.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						content: '居众装饰',
						headImg: '/static/img/like_case/2.png',
						start: '4',
						id: 7
					},
					{
						src: '/static/img/like_case/9.png',
						title: '130㎡轻奢美式，邂逅美好的浪漫生活',
						headImg: '/static/img/like_case/2.png',
						content: '居众装饰',
						start: '5',
						id: 8
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
			swichMenu(e) {
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
			bindClick(value) {
				uni.showToast({
					title: `点击了${value.text}按钮`,
					icon: 'none'
				})
			},
			onSend(id) {
				uni.navigateTo({
					url: './send_comment?id=' + id
				})
			},
			loadMore(index) {

			},
			jumpCase(e) {
				uni.navigateTo({
					url: '/pages/fitment/case/decoration?id=' + e.id
				})
			}
		}
	}
</script>
<style scoped>
	.container{width:100%;height:100%;padding-bottom:env(safe-area-inset-bottom)}
	.body-view{flex:1;overflow:hidden;height:100%;width:100%;align-items:flex-start;justify-content:center;background:#f2f2f2}
	.swiper-box-list{flex:1;width:100%;height:auto}
	.tui-order-list{margin-top:90upx}
</style>
