<template>
	<view class="content">
		<view class="bg">
			<image class="bgimg" :src="companyname.bg" mode=""></image>
			<view class="back_btn" @tap="back"></view>
			<view>
				<image :src="companyname.imgurl"></image>
				<text>{{companyname.title}}</text>
			</view>
		</view>
		<view class="Tab">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view>
					<text :data-index="index" :class="[currentTab==index ? 'active' : '']" @tap="btn_change($event)">
						{{menuTab.name}}
					</text>
				</view>
			</block>
		</view>
		<view>
			<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<swiper-item class="swiper_item">
						<view class="company_detail">
							<view v-for="(item,index) in companydetail" :key="index">
								<text>{{item.sub}}</text>
								<text>{{item.sub2}}</text>
							</view>
						</view>
				</swiper-item>
				<swiper-item class="swiper_item">
						<honour-list :list="content_list"></honour-list>
				</swiper-item>
				<swiper-item class="swiper_item">
						<view class="company_regit">
							<view v-for="(item,index) in businesslist" :key="index">
								<text>{{item.sub}}</text>
								<text>{{item.sub2}}</text>
							</view>
						</view>
				</swiper-item>
			</swiper>			
		</view>
		
	</view>
</template>

<script>
	import honourList from "./win.vue"
	export default {
		props:{
			content_list:{
				type:Array,
				default(){
					return []
				}
			},
			companydetail:{
				type:Array,
				default(){
					return []
				}
			},
			businesslist:{
				type:Array,
				default(){
					return []
				}
			},
			companyname:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				currentTab:0,
				menuTabs: [{
					name: "公司介绍"
				}, {
					name: "资质荣誉"
				},{
					name: "工商注册"
				}]
			}
		},
		methods:{
			btn_change(e){
				this.currentTab=e.currentTarget.dataset.index
			},
			swiperChange(e){
				this.currentTab=e.detail.current
			},
			loadMore(){
				
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		components:{
			honourList
		}
	}
</script>

<style scoped lang="scss">
	.bg{
		height: 388upx;
		// background: url(../../static/img/comment/pin.png) no-repeat;
		// background-size: cover;
		position: relative;
		margin-bottom: 50upx;
		>view:nth-child(3){
			width: 677upx;
			background: #ffffff;
			height: 121upx;
			border-radius:10upx;
			position: absolute;
			z-index: 10;
			bottom: -30upx;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;
			line-height: 190upx;
			image{
				width: 126upx;
				height: 126upx;
				position: absolute;
				left: 50%;
				transform: translate(-50%,-50%);
			}
			text{
				font-size: 36upx;
				color: #3D3D3D
			}
		}
	}
	.bgimg{
		width: 100%;
		height: 388upx;
		position:absolute;
		left: 0;
		top:0;
	}
	.back_btn{
		width: 50upx;
		height:60upx;
		background: url(../../static/img/company/back.png) no-repeat center center;
		background-size: 20upx 38upx;
		position: absolute;
		left: 30upx;
		z-index: 12;
		top: 50upx;
	}
	.Tab{ 
		display: flex;	
		padding:22upx 0;
		font-size:26upx;
		color: #525252;
		view{
			flex:1;
			text-align: center
		}
		border-bottom: 1px solid #D2D2D2;
	}
	.active{
		color:#C17B7D;
		padding-bottom:19upx;
		border-bottom:2px solid #C17B7D
	}
	.swiper-box-list 
	{
		width:100%;
		height:1000upx;
	}
	.company_detail{	
		padding:0 73upx;
		>view{
			display: flex;
			margin:28upx 0;
			>text:nth-child(1){
				font-size: 26upx;
				color:#949494;
				align-items: flex-start;
				margin-right: 64upx;
				white-space: nowrap;
			}
			>text:nth-child(2){
				font-size: 26upx;
				color:#525252;
				width: 440upx;
				word-wrap:break-word
			}
		}
	}
	.company_regit{	
		>view{
			display: flex;
			padding:0 60upx;
			align-items: center;
			// justify-content: space-between;
			// margin-left: 73upx;
			margin:28upx 0;
			>text:nth-child(1){
				font-size: 26upx;
				color:#949494;
				width: 104upx;
				margin-right: 88upx;
				white-space: nowrap;		
			}
			>text:nth-child(2){
				flex: 1;
				font-size: 26upx;
				color:#525252;
				width: 440upx;
				word-wrap:break-word
			}
		}
	}
	.company_regit >view:nth-of-type(even){
		background:#EFEFEF ;
		height: 80upx;
	}
</style>
