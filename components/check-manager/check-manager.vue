<template>
	<view>
		<view v-for="item in list" :key="item.id" class="item" >
			<view class="content_01" @tap="toDetail(item.id)">
				<image :src="item.pic" ></image>
			</view>
			<view class="content_right" @tap="toDetail(item.id)">
				<view>
					<text>{{item.title}}</text>
				</view>
				<view style="margin:16px 0">
					<text style="margin-right: 4px;">服务区域&nbsp;:</text>
					<text v-for="(x,index) in item.serverArea" :key="x">
						{{index==2?x:x+'、'}}
					</text>
				</view>
				<view>
					<view  v-for="(items,index) in item.tags" :key="index">{{items}}</view>
				</view>
			</view>
			<view class="content_03" @tap="playphone(item.phone)">				
				<image src="/static/img/home/dianhua.png" ></image>
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
			playphone(number){
				this.$emit("phone",number)
				// uni.showModal({
				// 	title: '拨打电话',
				// 	content: number,
				// 	confirmColor:'#B16A6B',
				// 	success(res) {
				// 		if (res.confirm) {
				// 			uni.makePhoneCall({
				// 			    phoneNumber: number 
				// 			});
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消');
				// 		}
				// 	}
				// })
			},
			toDetail(id){
				this.$emit("jumpDetail",id)
			}
		}
	}
</script>

<style scoped lang="scss">
	.content_01{
		margin-right: 22upx;
		width: 183upx;
		height: 183upx;
		image{
			width: 183upx;
			height: 183upx;
		}
	}
	.content_03{
		width: 37upx;
		height: 37upx;
		image{
			width: 37upx;
			height: 37upx;
		}
	}
	.item{
		display: flex;
		justify-content: space-between;
		// align-items: top;
		padding:22upx;
		box-sizing: border-box;
		border-bottom:1px solid #dcdcdc
	}
	.content_right{
		// width: 430upx;
		flex: 1;
		>view:nth-child(1){
			font-size: 32upx;
			letter-spacing: 2px;
			color:#5A5A5A;
		}
		>view:nth-child(2){
			font-size: 20upx;
			color:#3E3E3E;
			margin:10upx 0 14upx 0
		}
		>view:nth-child(3){
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 24upx;
			view{
				height:38upx;
				padding: 0 13upx;
				background: #FFF1F1;
				color: #B8696B;
				line-height: 38upx;
				text-align: center;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
</style>
