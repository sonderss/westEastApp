<template>
	<view>
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view>
			<view class="ed-banner">
				<image style="width: 100%;height: 300upx;" :src="list.bannerImg" mode="widthFix"></image>
			</view>
			<view class="ed-tab uni-flex">
				<view v-for="(item, index) in tabList" :key="index" @tap="jumpTab(item.name, index)">
					<image style="width: 50upx;height: 50upx;" :src="item.src" mode="widthFix"></image>
					<text class="ed-tab-txt" :style="'color:' +  item.color">{{item.name}}</text>
				</view>
			</view>
			<eyes-list @jumpPost="jumpPost" :list="list"></eyes-list>
			<view class="footer" v-show="loading">
				<text>已全部加载完毕</text>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import api from '../../apis/https/myApi'
	import eyesList from '../../components/geomancy/eyes'
	export default {
		components: {
			tuiSkeleton,
			eyesList
		},
		onLoad() {
			api.getFengShuiHome().then(res => {
				setTimeout(() => {
					this.skeletonShow = false
					this.loading = true
					this.list.contentList = res.data.data.list
				}, 1000)
			})
		},
		mounted() {
			
		},
		data() {
			return {
				skeletonShow: true,
				loading: false,
				list: {
					bannerImg: '/static/img/geomancy/6.png',
					contentList: [],
				},
				tabList: [{
						name: '住宅',
						src: '/static/img/geomancy/fangzi.png',
						color: '#6B9396',
						url: '/pages/geomancy/nav_list'
					},
					{
						name: '办公',
						src: '/static/img/geomancy/bangong.png',
						color: '#DDB98A'
					},
					{
						name: '商铺',
						src: '/static/img/geomancy/shangpu.png',
						color: '#A56249'
					},
					{
						name: '个人',
						src: '/static/img/geomancy/geren.png',
						color: '#B88866'
					},
				]
			}
		},
		methods: {
			jumpTab(name, index) {
				uni.navigateTo({
					url: '/pages/geomancy/nav_list?id=' + (index + 1) + '&name=' + name,
				});
			},
			jumpPost(arr) {
				api.getDataDateils({
					id: arr[1]
				}).then(res => {
					uni.navigateTo({
						url: '/pages/geomancy/post_details?content=' + res.data.data.post + '&name=' + arr[0],
					});
				})
			}
		}
	}
</script>

<style scoped>
	.ed-banner {
		height: 310upx;
		padding: 0 20upx
	}

	.ed-content {
		padding: 30upx 20upx
	}

	.ed-left-box {
		margin-right: 30upx
	}

	.ed-right-box {
		width: 100%;
		position: relative
	}

	.ed-right-title {
		font-size: 29upx
	}

	.ed-eyes {
		position: absolute;
		bottom: 0;
		right: 0upx;
		align-items: center;
		justify-content: flex-end;
		color: #5a5a5a
	}

	.ed-padding {
		padding-bottom: 30upx
	}

	.footer {
		text-align: center;
		font-size: 22upx;
		color: #979797;
		padding-bottom: 30upx
	}

	.ed-tab {
		padding: 20upx 20upx 0 20upx;
		align-items: center;
		justify-content: space-around;
	}

	.ed-tab-txt {
		font-size: 26upx;
		color: #6B9396;
	}
</style>
