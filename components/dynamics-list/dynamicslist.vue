<template>
	<view class="content_list">
		<view class="content_dynamics" v-for="(item,index) in list" :key="item.id">
			<view class="user_time">
				<view @tap='goMine(item.name)'>
					<image :src="item.headimg" mode=""></image>
					<text>{{item.name}}</text>
				</view>
				<view>
					<text>{{item.time}}</text>
				</view>
			</view>
			<view class="user_content">
				<view>
					<text style="color:#0145AB;" @tap='goQuanzi(index)'>{{item.tip}}</text>
					<text @tap="toMaintext(item)">{{item.title}}</text>
				</view>
				<view @tap="toMaintext(item)">
					<view v-for="x in item.danamicsimg" :key="x">
						<image :src="x" mode=""></image>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view @tap="goDeatil(index)">
					<text>{{item.sign}}</text>
				</view>
				<view>
					<view @tap="toMaintext(item)">
						<image src="/static/img/sendindex/dynamics/pinglun.png" mode=""></image>
						<text>{{item.pinglun==0?'':'('+item.pinglun+')'}}</text>
					</view>
					<view style="margin: 0 50upx;" @tap="changeDianzan(index)">
						<image :src="item.dianzaned?'/static/img/sendindex/dynamics/dianzaned.png':'/static/img/sendindex/dynamics/dianzan.png'" mode=""></image>
						<text>{{item.dianzan==0?'':'('+item.dianzan+')'}}</text>
					</view>
					<view @tap="share(index)">
						<image src="/static/img/sendindex/dynamics/fenxiang.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["list"],
		data(){
			return{
				
			}
		},
		mounted() {
			// console.log(this.list)
		},
		methods:{
			goMine(name){
				var isMy = Math.floor(Math.random()*2-1)+1
				uni.navigateTo({
					url:'../../pages/cjq_testpages/mine?isMy='+isMy+'&name='+name
				})
			},
			changeDianzan(index){
				this.$emit('updateDianzan',index)
			},
			toMaintext(item){
				console.log(item)
				uni.navigateTo({
					url:"/pages/maintext/maintext?item="+JSON.stringify(item)
				})
			},
			goDeatil(index){
				var a = this.list[index].title
				console.log(a)
				uni.navigateTo({
					url: '../../pages/cjq_testpages/index'
				});
			},
			goQuanzi(index){				
				uni.navigateTo({
					url:'../../pages/cjq_testpages/index?key=0'
				})
			},
			share(index){
				this.$emit('isShow',index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.content_dynamics{
		margin:50upx 0
	}
	.content_list >view:nth-child(1){
		margin-top:32upx
	}
	.user_time{
		display: flex;
		justify-content: space-between;
		align-items: center;
		>view:nth-child(1){
			display: flex;
			align-items: center;
			color: #3E3E3E;
			font-size:26upx;
			image{			
				width: 89upx;
				height: 89upx;
				margin-right: 19upx;
			}
		}
		>view:nth-child(2){
			font-size: 20upx;
			color:#8C8C8C
		}
	}
	.user_content{
		>view:nth-child(1){
			margin-top: 23upx;
			color: #3E3E3E;
			font-size:30upx;
		}
		>view:nth-child(2){
			display: flex;
			justify-content: space-between;
			margin: 19upx 0 36upx 0;
			view{
				width: 220upx;
				height: 220upx;
				border-radius: 10upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.bottom{
		display: flex;
		justify-content: space-between;
		>view:nth-child(1){
			width: 216upx;
			height: 60upx;
			background: rgba(193, 123, 125, 0.3);
			border-radius: 20upx;
			color: #C17B7D;
			font-size:30upx;
			text-align: center;
			line-height: 60upx;
			>text:after{
				content: ">";
				margin-left: 4px;
			}
		}
		>view:nth-child(2){
			display: flex;
			view{
				display: flex;
				align-items: center;
				image{
					width: 34upx;
					height: 34upx;
				}
				text{
					margin-left: 3px;
					color: #C17B7D;
					font-size: 26upx;
				}
			}
		}
	}
</style>
