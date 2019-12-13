<template>
	<view class="content">
		<view v-for="(item,index) in shoplist" :key="index" @tap="todetail">
			<view class="content_left">
				<image :src="item.imageurl" lazy-load></image>
			</view>
			<view class="content_right">
				<view>
					<text>{{item.title}}</text>
				</view>
				<view>
					<view>{{'分类'+item.state}}</view>
					<view>
						<image src="/static/img/zixun/02.png" lazy-load></image>
						<text>{{item.seenum}}</text>
					</view>
				</view>
			</view>
		</view>		
	</view>
</template>
<script>
	export default{
		props:{
			shoplist:{
				type:Array
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			todetail(){
				uni.navigateTo({
					url:'/pages/information_detail/information_detail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		padding: 0 22upx;
		box-sizing: border-box;
		>view{
			display: flex;
			justify-content: space-between;
			margin:43upx 0;
		}
	}
	.content_left{
		width: 183upx;
		height: 183upx;
		margin-right: 23upx;
		image{
			width: 183upx;
			height: 183upx;
		}
	}
	.content_right{
		flex: 1;
		display: flex;
		
		flex-wrap: wrap;
		// align-items: center;
		align-content: space-between;
		>view:nth-child(1){
			color: #3E3E3E;
			font-size: 30upx;
		}
		>view:nth-child(2){
			width: 100%;
			display: flex;
			justify-content: space-between;
			>view:nth-child(1){
				color: #C17B7D;
				font-size: 24upx;
			}
			>view:nth-child(2){				
				display: flex;
				align-items: center;
				color: #484848;
				font-size: 22upx;
			}
		}
		image{
			width: 26upx;
			height: 19upx;
		}
	}
</style>
