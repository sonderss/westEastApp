<template>
	<view>
		<view class="heade">
			<view>
				<view>
					<image src="../../static/img/company/buildteam.png"></image>
				</view>
				<view>
					<text>陈大明</text>
				</view>
				<view>
					<text>项目主管</text>
					<text>7年经验</text>
				</view>
			</view>		
		</view>
		<view class="content">
			<view>
				<text>个人简介</text>
			</view>
			<view>
				<text>
					毕业于广州工商学院美术分院，从业6年以上经验，深圳市室内装饰行业协会常务理事，中国建 筑协会会员，曾获得中国国际空间环境艺术设计 大赛 优秀奖，居众优秀设计师。
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	.heade{
		height: 388upx;
		background: #ffffff;
		border-bottom:7upx solid #EEEEEE ;
		display: flex;
		justify-content: center;
		>view{
			margin-top:130upx;
			text-align: center;
			>view:nth-child(1){
				width: 123upx;
				height: 123upx;
				image{
					width: 100%;
					height: 100%;
					margin-left: 50upx;
				}
			}
			>view:nth-child(2){
				font-size: 30upx;
				color:#3C3C3C;
				margin: 10upx 0;
			}
			>view:nth-child(3){
				width: 220upx;
				display: flex;
				justify-content: space-between;
				font-size: 26upx;
				color:#4B4B4B
			}
		}
		
	}
	.content{
		padding:0 40upx;
		>view:nth-child(1){
			font-size: 34upx;
			color:#4B4B4B;
			margin:38upx 0
		}
		>view:nth-child(2){
			font-size: 30upx;
			color:#767676
		}
	}
</style>
