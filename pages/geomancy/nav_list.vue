<template>
	<view>
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view>
			<tab-list :tabList="tabList" @edOnTab="onTab" :isActive="isActive"></tab-list>
			<eyes-list :list="list" @jumpPost="jumpPost"></eyes-list>
			<view v-show="nullPost" style="text-align: center;font-size: 24upx;">暂无文章</view>
		</view>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import api from '../../apis/https/myApi'
	import tabList from '../../components/geomancy/tab.vue'
	import eyesList from '../../components/geomancy/eyes'
	import data from "./data.js"
	export default {
		components: {
			tuiSkeleton,
			tabList,
			eyesList
		},
		data() {
			return {
				skeletonShow: true,
				isActive: 0,
				tabList: [],
				myId: 0,
				tabId: null,
				typeId: null,
				nullPost: false,
				list: {
					bannerImg: '/static/img/geomancy/6.png',
					contentList: [],
				},
			}
		},
		onLoad(res) {
			this.myId = res.id
			uni.setNavigationBarTitle({
				title: res.name
			})
		},
		mounted() {
			api.getArticleType({
				id: this.myId
			}).then(res => {
				this.tabList = res.data.data
				this.getTypePost(this.tabList[0].id)
			})
		},
		methods: {
			onTab(myobject) {
				this.isActive = myobject.index
				this.getTypePost(myobject.id)
			},
			getTypePost(id) {
				api.getByArticleIdListData({
					articleid: id
				}).then(res => {
					if(res.statusCode === 200){
						if(res.data.status === 0){
							if(res.data.data.list.length !== 0){
								setTimeout(() => {
									this.skeletonShow = false
									this.list.contentList = res.data.data.list
									this.nullPost = false
								}, 1000)
							}else{
								setTimeout(() => {
									this.skeletonShow = false
									this.list.contentList = []
									this.nullPost = true
								}, 1000)
							}
						}
					}else{
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000
						});
					}
				})
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
