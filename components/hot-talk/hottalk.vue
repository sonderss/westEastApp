<template>
	<view>
		<view class="item" v-for="(item,index) in list" :key="item.id" @tap='goHuati(index)'>
			<view class="content_01">
				<image src="/static/img/sendindex/hottalk/fire.png" mode=""></image>
				<text class="tip">热门</text>
				<text>{{item.num}}人围观</text>
			</view>
			<view class="content_02">
				<text>{{item.title}}</text>
			</view>
			<view class="content_03">
				<view v-for="x in item.hotimg" :key="x">
					<image :src="x"></image>
				</view>
			</view>
		</view>
		<view class="last">
			<view>
				<view>查看</view>
				<view>更多</view>
			</view>			
		</view>
	</view>
</template>

<script>
	export default{
		props:["list"],
		data(){
			return{
				
			}
		},
		methods:{
			goHuati(index){
				console.log(this.list[index].title)
				uni.navigateTo({
					url:'../../pages/cjq_testpages/index?title='+this.list[index].title+'&ptitle=100人围观'
				})
			}
		}
	}
	
</script>

<style scoped lang="scss">
	.item{
		display: inline-block;
		width: 407upx;
		height: 233upx;
		margin:22upx 40upx 22upx 22upx;
		box-shadow: 0 0 10px 1px #dedede;
		padding: 8upx;
		border-radius: 10upx;
	}
	.tip{
		color: #FF9801;
		font-size: 26upx;
		margin:0 18upx 0 7upx;
	}
	.content_01{
		display: flex;
		align-items: flex-end;
		>image{
			width: 24upx;
			height:32upx;
		}
		>text:nth-child(3){
			color: #828282;
			font-size: 26upx;
		}
	}
	.content_02{
		font-size: 26upx;
		color:#5D5D5D;
		width: 338upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 32upx 0 26upx 0;
	}
	.content_03{
		display: flex;
		justify-content: space-between;
		>view{
			width: 87upx;
			height: 87upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.last{
		display: inline-block;
		width:100upx;
		height: 233upx;
		font-size:28upx;
		color:#747373;
		vertical-align: top;
		margin-top: 22upx;
		text-align: center;
		box-shadow: 0 0 10px 1px #dedede;
		>view{
			margin-top: 70upx;
			letter-spacing: 1px;
		}
	}
</style>
