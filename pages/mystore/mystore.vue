<template>
	<view class="content">
		<view class="myInfo">
			<view>
				<image style="width: 100%;height: 100%;" src="../../static/img/mystore/me.png"></image>
			</view>
			<view>
				<view class="store_name">
					<text>店铺名字</text>
				</view>				
				<view class="grade">
					<text>评分</text>
					<view v-for="(x,index) in startList" :key="index">
						<view style="width: 28upx;height: 28upx;background: url(../../static/img/mystore/start.png) no-repeat;margin: 0 7upx;"></view>
					</view>
					<text style="color:red;margin-left: 31upx;">{{score}}</text>
				</view>
				<view class="address">
					<text>地址:</text>
					<text style="margin-left: 15upx;">广州市番禺区节能科技园</text>
					<view class="icon">
						<view>
							<image src="../../static/img/mystore/dingwei.png" mode=""></image>
						</view>
						<view>
							<image src="../../static/img/mystore/dianhua.png" mode=""></image>
						</view>
						
					</view>
				</view>
				<view>
					<text>经营范围：家电、电器、五金</text>
				</view>
			</view>
		</view>
		<view class="myManager">
			<view>
				<view v-for="(x,index) in typeList"  :key="index"  :class="{'typestyle':true,'clickstyle':index==clickstyle?true:false}" @tap="changeStyle(index)">{{x}}</view>
			</view>
			<view>
				<view>
					<view v-for="(num,index) in 8" :key='index'>
						<view class="item">
							<view class="item_img">
								<image src="../../static/img/mystore/shop.png" ></image>
							</view>
							
							<view class="item_content">
								<text style="font-size:24upx;color: #525252">广州全铝定制家具信誉保证</text>
								<view>
									<text style="font-size:28upx;color:#ff0000;margin-bottom: 18upx;">￥1999-8999</text>
									<text style="font-size:22upx;color:#939393;">销量：&nbsp;15343</text>
								</view>							
							</view>
						</view>
						
					</view>
				</view>
			</view>			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				clickstyle:0,
				startList:4,
				typeList:['五金','家具','电器','材料']				
			}
		},
		methods:{
			changeStyle (x) {
				this.clickstyle=x;
			} 
		},
		computed:{
			score () {
				return this.startList+".0"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body, uni-page-body{
		background: #f1f1f1;
		box-sizing: border-box;
		padding-top: 2upx;
		height: 100%;
	}
	.icon{	
		display:flex;
		justify-content:flex-start;
		view:nth-child(1){
			padding-left: 44upx;
			padding-right: 27upx;
			margin-right: 27upx;
			border-right: 1px solid #a6a6a6;
		}
		view{
			
			image{
				width: 32upx;
				height: 32upx;
			}
		}
	}
	.address{
		display:flex;
		justify-content:flex-start;
	}
	.myInfo{
		width: 750upx;
		height: 253upx;
		background-color:#fff;
		overflow:hidden;
		display:flex;
		justify-content:flex-start;
		>view:nth-child(1){
			width: 171upx;
			height: 171upx;
			margin:32upx 36upx 0 12upx
		};
		>view:nth-child(2){
			font-size:25upx;
			color: #525252;
			>view{
				padding:10upx 0
			}
		}
		    
	}
	.myManager{
		background-color:#fff;
		border-top: 8upx solid #f1f1f1;
		display:flex;
		justify-content:flex-start;
		>view:nth-child(1){
			width:135upx;
		};
		>view:nth-child(2){
			overflow: auto;
			>view{
				width:616upx;				
				height:970upx;
			}
		}
	}
	.content{
		height: 100%;
		background: #fff;
	}
	.store_name{
		margin-top:28upx;
	}
	.grade{
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.typestyle{
		font-size: 24upx;
		color: #525252;
		padding:35upx 10upx 35upx 37upx
	}
	.clickstyle{
		color:#ff0000
	}
	.item{
		display:flex;
		justify-content:flex-start;
		padding: 20upx;
	}
	.item_img{
		width: 155upx;
		height: 155upx;
		margin-right:18upx;
		image{
			width: 155upx;
			height: 155upx;
		}
	}
	.item_content{
		margin-top: -14upx;
		view{
			display: flex;
			margin-top: 28upx;
			flex-direction:column
		}
	}
</style>
