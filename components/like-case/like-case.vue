<template>
	<view>
		<uni-swipe-action v-for="(item, index) in list" :key="index" :options="options2" @click="bindClick(index)">
			<view class="uni-flex ed-box" @click="jumpCase(item.id,index)">
				<view class="ed-img">
					<image style="width: 150upx; height: 150upx; border-radius: 20upx;" :src="item.src"></image>
				</view>
				<view class="ed-text" style="line-height: 80upx;">
					<view>{{item.title}}</view>
					<view class="uni-flex" style="align-items: center;">
						<image style="width: 50upx; height: 50upx; margin-right: 20upx;" :src="item.headImg"></image>
						<text>{{item.content}}</text>
					</view>
				</view>
			</view>
		</uni-swipe-action>
		
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		props:['list'],
		components:{uniSwipeAction},
		data() {
			return {
				options2: [{
					text: '取消收藏',
					style: {
						backgroundColor: '#C17B7D'
					}
				}],
			}
		},
		methods: {
			bindClick(value) {
				uni.showToast({
					title: `取消收藏成功`,
					icon: 'none'
				})
				this.list.splice(value, 1)
			},
			jumpCase(id,index){
				this.$emit('jumpCases', {id,index})
			}
		}
	}
</script>

<style scoped>
	@import "./like-case.css";
</style>
