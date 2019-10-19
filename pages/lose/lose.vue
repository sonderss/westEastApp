<template>
	<view class="lose">
		<view class="content">
			<image src="../../static/img/lose.png" ></image>
			<view>
				<text>暂无内容</text>
			</view>
		</view>
	</view>	
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	.lose{
		display: flex;
		justify-content: center
	}
	.content{
		width: 374upx;
		margin-top: 250upx;
		image{
			width: 100%;
			height: 288upx;
		}
		view{
			text-align: center;
			color: #6d6262;
		}
	}
</style>
