<template>
	<view class="content">
		<view class="body-view uni-flex uni-column">
			<scroll-view class="top-menu-view">
				<block v-for="(menuTab,index) in menuTabs" :key="index">
					<view class="menu-one-view" @click="swichMenu(index)">
						<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
							<view class="menu-one-txt">{{menuTab.name}}</view>
							<view class="menu-one-bottom">
								<view class="menu-one-bottom-color"></view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view v-for="(item, index) in myAddList" :key="index" class="uni-flex ed-box">
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
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view v-for="(item, index) in foundCList" :key="index" class="uni-flex ed-box" style="justify-content: space-between;">
							<view class="uni-flex">
								<view class="ed-img">
									<image style="width: 120upx;" :src="item.src" mode="widthFix"></image>
								</view>
								<view class="ed-text">
									<view>{{item.title}}</view>
									<view>{{item.content}}</view>
								</view>
							</view>
							<view v-show="item.status === 0" class="add">
								<text>我加入的圈子</text>
							</view>
							<view v-show="item.status === 1" class="add2 uni-flex" @tap="onAdd(item)">
								<image style="width: 25upx;" src="/static/img/community/cricle/2.png" mode="widthFix"></image>
								<text>加入</text>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuTabs: [{
					name: '我加入的'
				}, {
					name: '发现圈子'
				}],
				currentTab: 0,
				myAddList: [{
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
				foundCList: [{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
						status: 0

					},
					{
						src: '/static/img/community/cricle/3.png',
						title: '装修日志',
						content: '123456住友入住',
						status: 1
					},
					{
						src: '/static/img/community/cricle/1.png',
						title: '装修日志',
						content: '123456住友入住',
						status: 1
					},
					{
						src: '/static/img/community/cricle/3.png',
						title: '装修日志',
						content: '123456住友入住',
						status: 1
					},
					{
						src: '/static/img/community/cricle/3.png',
						title: '装修日志',
						content: '123456住友入住',
						status: 1
					},
					{
						src: '/static/img/community/cricle/3.png',
						title: '装修日志',
						content: '123456住友入住',
						status: 1
					}
				],
			}
		},
		onLoad() {

		},
		computed: {

		},
		methods: {
			swichMenu: async function(current) {
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.currentTab = index;
			},
			onAdd:function(item){
				item.status = 0
				uni.showToast({
					title: '欢迎加入我们，成为圈子住友第123457位加入',
					icon: 'none',
					duration: 2000
				});
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%
	}

	page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		background: #fff
	}

	.body-view {
		flex: 1;
		overflow: hidden;
		height: 100%;
		width: 100%;
		align-items: flex-start;
		justify-content: center
	}

	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		height: 75upx;
		margin-bottom: 14upx;
		text-align: center
	}

	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		margin: 0 80upx
	}

	.top-menu-view .menu-one-view .menu-one {
		margin: 0 15upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 70upx;
		font-size: 30upx;
		font-weight: 400;
		color: #333;
		line-height: 70upx
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%
	}

	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 100%;
		height: 5upx
	}

	.top-menu-view .menu-one-view .menu-one-act {
		margin: 0 15upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 70upx;
		font-size: 30upx;
		font-weight: 400;
		color: #c17b7d;
		line-height: 70upx
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center
	}

	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 100%;
		height: 5upx;
		background: #c17b7d
	}

	.swiper-box-list {
		flex: 1;
		width: 100%;
		height: auto;
		padding-top: 30upx
	}

	.swiper-one-list {
		height: 100%;
		width: 100%
	}

	.add {
		font-size: 24upx;
		color: #b8b8b8
	}

	.add2 {
		border-radius: 10upx;
		background: #c17b7d;
		color: #fff;
		font-size: 24upx;
		padding: 10upx 25upx;
		align-items: center
	}

	.add2 image {
		margin-right: 10upx
	}

	.ed-box {
		align-items: center;
		padding: 0 0 30upx 0;
		margin: 0 20upx
	}

	.ed-img {
		margin-right: 20upx
	}

	.ed-text view {
		height: 60upx;
		line-height: 60upx
	}

	.ed-text view:first-child {
		font-size: 28upx
	}

	.ed-text view:last-child {
		font-size: 24upx;
		color: #b8b8b8
	}
</style>
