<template>
	<view class="container">
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view class="body-view uni-flex uni-column">
			<tui-tabs :tabs="menuTabs" :isFixed="scrollTop>=0" :sliderHeight="5" itemWidth="50%" :currentTab="currentTab"
			 @change="swichMenu"></tui-tabs>
			<swiper :class="{'tui-order-list':scrollTop>=0}" :current="currentTab" class="swiper-box-list" duration="300">
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view v-for="(item, index) in list" :key="index" class="uni-flex ed-box" @click="jumpCricleIndex(item)">
							<view class="ed-img">
								<image style="width: 120upx;height: 120upx;" :src="item.logoPic" mode="widthFix"></image>
							</view>
							<view class="ed-text">
								<view>{{item.name}}</view>
								<view>{{item.number}}住友加入</view>
							</view>
						</view>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item @touchmove.stop>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view v-for="(item, index) in list" :key="index" class="uni-flex ed-box" style="justify-content: space-between;">
							<view class="uni-flex" @click="jumpCricleIndex(item)">
								<view class="ed-img">
									<image style="width: 120upx;height: 120upx;" :src="item.logoPic" mode="widthFix"></image>
								</view>
								<view class="ed-text">
									<view>{{item.name}}</view>
									<view>{{item.number}}住友加入</view>
								</view>
							</view>
							<view v-show="item.isJoin === true" class="add">
								<text>我加入的圈子</text>
							</view>
							<view v-show="item.isJoin === false" class="add2 uni-flex" @tap="onAdd(item)">
								<image style="width: 25upx;height: 25upx;" src="/static/img/community/cricle/2.png"></image>
								<text>加入</text>
							</view>
						</view>
						<view class="none-img" v-show="noneTxt">
							<image src="/static/img/xi2x.png" mode="widthFix"></image>
							<text>暂无相关订单记录</text>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import tuiTabs from "@/edith_components/tui-tabs/tui-tabs"
	import { checkLogin } from '@/config/mixins.js'
	import api from '@/apis/https/myApi.js'
	export default {
		components: {
			tuiSkeleton,
			tuiTabs
		},
		mixins: [checkLogin],
		data() {
			return {
				skeletonShow: true,
				scrollTop: 0,
				noneTxt: false,
				menuTabs: [{
					name: '我加入的',
					flag: true
				}, {
					name: '发现圈子',
					flag: false
				}],
				currentTab: 0,
				isJoin: false,
				list:[]
			}
		},
		onLoad(res) {
			if (res.status == 1) {
				this.isJoin = false
				this.currentTab = Number(res.status)
			} else {
				this.currentTab = 0
				this.isJoin = true
			}
			this.myobj = {url:'/pages/community/cricle/cricle', options: '', type: 2}
			this.getData()
		},
		computed: {

		},
		methods: {
			getData(isJoin){
				const data = {
					pageindex: 1,
					pagesize: 20,
					isjoin: this.isJoin
				}
				api.getCirclePageList(data).then((res)=>{
					if(res.statusCode === 200 && res.data.status === 0){
						setTimeout(() => {
							this.skeletonShow = false
						}, 1000)
						this.list = res.data.data.list
						if(this.list.length === 0){
							this.noneTxt = true
						}else{
							this.noneTxt = false
						}
					}else{
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 2000
						})
						this.skeletonShow = false
					}
				})
			},
			swichMenu(e) {
				this.isJoin = e.item.flag
				if (this.currentTab == e.index) {
					return false;
				} else {
					if(!this.$db.get('token')){
						return this.checkIsLogin()
					}
					this.getData()
					this.currentTab = e.index;
					if(e.item.name === '我加入的'){
						if(!this.$db.get('token')){
							return this.checkIsLogin()
						}
					}
				}
			},
			swiperChange(e) {
				let index = e.target.current;
				this.currentTab = index;
			},
			onAdd(item) {
				if(!this.$db.get('token')){
					return this.checkIsLogin()
				}
				const data = {
					id: item.id,
					isjoin: true
				}
				api.joinOrCancelCircle(data).then((res)=>{
					if(res.statusCode === 200 && res.data.status === 0){
						item.isJoin = true
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 2000
						});
					}else{
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 2000
						});
					}
				})
			},
			loadMore(index) {

			},
			jumpCricleIndex(item){
			    console.log(item)
				let obj = {}
				obj['id'] = item['id']
				obj['isJoin'] = item['isJoin']
				obj['number'] = item['number']
				obj['name'] = item['name']
				console.log(obj)
				uni.navigateTo({
					url: '/pages/cjq_testpages/index?item=' + JSON.stringify(obj)
				})
			}
		}
	}
</script>

<style scoped>
	page{width:100%;height:100%;background:#fff}
	.container{width:100%;height:100%;padding-bottom:env(safe-area-inset-bottom)}
	.body-view{flex:1;overflow:hidden;height:100%;width:100%;align-items:flex-start;justify-content:center}
	.top-menu-view{width:100%;height:75upx;margin:0upx 0 10upx 0;text-align:center;background:#fff;border-top:1px solid #eee;position:fixed}
	.swiper-box-list{flex:1;width:100%;height:auto}
	.swiper-one-list{height:100%;width:100%}
	.add{font-size:24upx;color:#b8b8b8}
	.add2{border-radius:10upx;background:#c17b7d;color:#fff;font-size:24upx;padding:10upx 25upx;align-items:center}
	.add2 image{margin-right:10upx}
	.ed-box{align-items:center;padding:0 0 30upx 0;margin:0 20upx}
	.ed-img{margin-right:20upx}
	.ed-text view{height:60upx;line-height:60upx}
	.ed-text view:first-child{font-size:28upx}
	.ed-text view:last-child{font-size:24upx;color:#b8b8b8}
	.tui-order-list{margin-top:90upx}
	.none-img {text-align: center;font-size: 26upx;height: 80upx;line-height: 80upx;color: #C17B7D;}
	.none-img image {margin: 0 auto;width: 400upx;margin-top: 100upx;}
</style>
