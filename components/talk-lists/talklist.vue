<template>
	<view class="content_list">
		<view class="content_dynamics" v-for="(item,index) in list" :key="item.id">
			<view class="user_time">
				<view @tap="toMain(item.name)">
					<image :src="item.headimg" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="user_content">
				<view @tap="repaybozhu(index,item.name)">
					<text>{{item.saycontent}}</text>
				</view>
			</view>
			<view class="bottom">
				<view @tap="repaybozhu(index,item.name)">
					<text style="margin-right: 40upx;">{{item.data}}</text>
					<text>{{item.replylist.length?item.replylist.length+'条回复':'回复'}}</text>
				</view>
				<view>
					<view  @tap="changeDianzan(index)">
						<image :src="item.dianzaned?'/static/img/sendindex/dynamics/dianzaned.png':'/static/img/sendindex/dynamics/dianzan.png'" mode=""></image>
						<text>{{item.dianzan==0?'':'('+item.dianzan+')'}}</text>
					</view>
				</view>
			</view>
			<view class="replay" v-if="item.replylist.length">
				<view class="replay_item" v-for="(x,indexs) in item.replylist" :key="indexs">
					<view>
						<text v-if="x.replayname">{{x.anothername+'回复'}}<text style="color: #bfbaba;">{{x.replayname}}</text></text>
						<text v-else>{{x.anothername}}</text>
					</view>
					<view @tap="repaybozhu(index,x.anothername)">
						<text>{{x.replycontent}}</text>
					</view>
					<view>
						<view @tap="repaybozhu(index,x.anothername)">
							<text>{{x.time}}</text>
						</view>
						<view @tap="changereplayzan(index,indexs)">
							<image :src="x.zaned?'/static/img/sendindex/dynamics/dianzaned.png':'/static/img/sendindex/dynamics/dianzan.png'" mode=""></image>
							<text>{{x.zan==0?'':'('+x.zan+')'}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['list'],
		data(){		
			return{
				
			}
		},
		onLoad() {
			
		},
		methods:{
			changeDianzan(index){
				this.$emit('updateDianzan',index)						
			},
			changereplayzan(index,indexs){
				this.$emit('updatereplyzan',[index,indexs])				
			},
			repaybozhu(index,name){
				this.$emit('replaybozhu',obj)			
			},
			toMain(res){
				console.log(133)
				this.$emit('tomian',res)
			}
		}
	}
</script>

<style scoped lang="scss">
	.replay{
		>view:nth-child(1){
			margin-top: 20upx;
		}	
	}
	.replay_item{
		margin-top: 48upx;
		>view:nth-child(1){
			color:#272727;
			font-size: 26upx;
			letter-spacing: 1px;
		}
		>view:nth-child(2){
			color:#343434;
			font-size: 26upx;
			margin: 20upx 0;
		}
		>view:nth-child(3){
			color:#343434;
			font-size: 26upx;
			height: 36upx;
			display: flex;
			justify-content: space-between;
			>view:nth-child(1){
				color: #7C7C7C;
				font-size: 22upx;
				letter-spacing: 1px;
			}
			>view:nth-child(2){
				display: flex;
				align-items: center;
				text{
					color: #C17B7D;
					font-size: 26upx;
				}
				image{
					width: 32upx;
					height: 32upx;
				}
			}
		}
	}
	.replay{
		margin-top: 25upx;
		padding: 22upx;
		background: #F1F1F1;
		box-sizing: border-box;
		border-radius: 10upx;
	}
	.content_list >view:nth-child(1){
		margin-top:39upx
	}
	.content_dynamics{
		margin: 78upx 0;
	}
	.user_time{	
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
	}
	.user_content{
		font-size: 26upx;
		color:#343434;
		letter-spacing: 0.5px;
		margin:24upx 0 35upx 0
	}
	.bottom{
		display: flex;
		height: 36upx;
		justify-content: space-between;
		>view:nth-child(1){		
			color: #7C7C7C;
			font-size:22upx;
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
