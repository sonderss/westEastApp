<template>
	<view class="main">
		<view class="main_01">
			<text>{{actDetail.title}}</text>
		</view>
		<view class="main_02">
			<view>
				<image src="/static/img/zixun/02.png" lazy-load></image>
				<text>{{actDetail.seenum}}</text>
			</view>
			<view>
				<image src="/static/img/zixun/03.png" lazy-load></image>
				<text>{{actDetail.time}}</text>
			</view>
		</view>
		<view class="main_03">
			{{actDetail.content}}
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				actDetail:{
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					seenum:123,
					time:'2019-2-15 12:00',
					content:'图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容图文内容'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.main{
		padding: 0 22upx;
		box-sizing: border-box;
		>view{
			margin-top: 33upx;
		}
	}
	.main_01{
		color: #393939;
		font-size: 30upx;
	}
	.main_02{
		color: #484848;
		font-size: 22upx;
		display: flex;
		>view{
			align-items: center;
			display: flex;
		}
		>view:nth-child(1){
			margin-right: 39upx;
			image{
				width: 26upx;
				height: 19upx;
				margin-right: 4upx;
			}
		}
		>view:nth-child(2){
			image{
				width: 21upx;
				height: 21upx;
				margin-right: 4upx;
			}
		}
	}
	.main_03{
		color: #747474;
		font-size: 30upx;
	}
</style>
