<template>
	<view>
		<view class="tipContent">
			<view class="top">
				<view class="top_01">
					<image src="/static/img/success.png" mode=""></image>
				</view>
				
				<view class="top_02">
					<text>售后服务提交成功</text>
				</view>				
				<view class="top_03">
					<text @tap="seeRecord">查看记录</text>			
					<text @tap="toIndex">回到首页</text>			
				</view>
			</view>
		</view>
		<view class="bottom">
			<view>温馨提示：</view>
			<view>
				• 商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。 
			</view>
			<view>
				• 提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。
			</view>
			<view>
				• 退货处理成功后退款余额将原路返回到您的支持账号中。
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			seeRecord(){
				uni.redirectTo({
					url:'/pages/recordDetail/recorddetail'
				})
			},
			toIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		},
		onNavigationBarButtonTap() {
			uni.redirectTo({
				url:'/pages/after_sale/after_sale_list'
			})
		}
	}
</script>

<style scoped lang="scss">
	.tipContent{
		background: #ffffff;
	}
	.top_01,.top_02,.top_03{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top_01{
		padding: 84upx 0 39upx 0;
	}
	.top{
		image{
			width: 125upx;
			height: 125upx;
		}		
		>view:nth-child(2){
			font-size: 26upx;
			color:#C17B7D ;
		}
		>view:nth-child(3){
			padding: 58upx 0 88upx 0;
			font-size: 26upx;
			color: #B5B5B5;
			>text{
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 25upx;
				width: 186upx;
				height: 74upx;
				padding: 28upx 43upx;
				box-sizing: border-box;
				border:1px solid #B5B5B5;
				white-space: nowrap;		
				border-radius: 74upx;
			}
			>text:nth-child(2){
				color: #C17B7D;
				border-color:#C17B7D;
			}
		}
	}
	.bottom{
		font-size: 22upx;
		color: #A5A5A5;
		padding: 28upx 30upx 0 30upx;
		box-sizing: border-box;
	}
</style>
<style>
	page{
		background:#f2f2f2
	}
</style>