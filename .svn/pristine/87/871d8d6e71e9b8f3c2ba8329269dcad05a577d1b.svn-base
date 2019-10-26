<template>
	<view>
		<view class="content">
			<view v-for="x in list" :key="x">
				<view class="item" @tap="team_detail">
					<image src="../../static/img/company/buildteam.png" ></image>
					<view>
						<view class="p_name">
							<text>刘天明</text>
							<text>7年经验</text>
						</view>
						<view>项目经理</view>
					</view>
				</view>
			</view>	
		</view>
		<view class="bottomTip" v-show="flag">
			<text>已经到底啦~</text>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				flag:false,
				list:[1,2,3,4,5,6,7]
			}
		},
		onReachBottom(){
			this.flag=true
		},
		methods:{
			team_detail(){
				uni.navigateTo({
					url:'/pages/team_detail/teamdetail',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bottomTip{
		font-size: 20upx;
		background: #EEEEEE;
		height: 95upx;
		text-align: center;
		line-height: 95upx;
		color: #6C6C6C;
	}
	.item{
		display: flex;
		align-items: center;
		border-bottom: 1px solid #C5C5C5;
		padding:21upx 0;
		margin-top: 10upx;
		image{
			width: 123upx;
			height: 123upx;
		}
		>view{
			flex: 1;
			>view:nth-child(2){
				color: #4C4C4C;
				font-size: 26upx;
			}
		}
	}
	.content{
		padding:  22upx
	}
	.p_name{
		display: flex;
		justify-content: space-between;
		>text:nth-child(1){
			color:#424242;
			font-size: 30upx;
		}
		>text:nth-child(2){
			color:#C17B7D;
			font-size: 24upx;
			border: 1px solid #C17B7D;
			padding: 9upx 24upx;
			border-radius: 4px;
		}
	}
</style>
