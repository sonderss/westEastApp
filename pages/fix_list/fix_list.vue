<template>
	<view>
		<view class="banner">
			<swiper style="width: 100%;height: 236upx" class="swiper-box-list" duration="300" @change="changedot">
				<swiper-item class="swiper_item" v-for="(item,index) in imglist" :key="index">
					<view>
						<image style="width: 100%;" :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>				
			</swiper>
			<swiper-dot class="swiperdot" :current="currentdot" :list="imglist"></swiper-dot>
		</view>
		<view>
			<n-list  :themeColor="themeColor"  :menuList="menuList" @result="result" ></n-list>
		</view>
		<view class="content">
			<view class="item" v-for="(item,index) in Clist" :key="index" @click="edFitment">
				<view style="width: 183upx;" class="content_left">
					<image :src="item.image" style="width: 100%;" mode="widthFix"></image>
				</view>
				<view class="content_right">
					<view>
						<text>{{item.title}}</text>
						<text>13.2km</text>
					</view>
					<view>
						<view v-for="(x,index) in item.start" :key="index+'-lable'" class="started">
						</view>
						<view v-for="(z,num) in (5-item.start)" :key="num+'+lable'" class="start">
						</view>
						<view style="font-size: 20upx;color: #808080;">
							<text>共{{item.total}}条</text>
						</view>
					</view>
					<view>
						<text>设计{{item.design}}</text>
						<text>服务{{item.server}}</text>
						<text>施工{{item.build}}</text>
					</view>
					<view>
						<view v-for="(items,index) in item.prefer" :key="index">{{items}}</view>
					</view>
				</view>				
			</view>
		</view>
	</view>
	
</template>

<script>
	import swiperDot from '@/components/fixdot/swiperDot.vue';
	import nList from '../../components/filter/sl-filter.vue';
	let data = require('./data.json');
	export default{
		data(){
			return{
				imglist:['/static/img/myfix/banner.png','/static/img/myfix/banner.png'],
				currentdot:0,
				Clist:data.list,
				themeColor: '#EFEFEF',
				filterResult: '',
				menuList: [{
						'title': '广州',
						'isMutiple': false,
						'defaultSelectedIndex':0,
						'key': 'city',
						'detailList': [{
								'title': '全城',
								'value': '全城'
							},
							{
								'title': '海珠区',
								'value': '海珠区'
							},
							{
								'title': '越秀区',
								'value': '越秀区'
							},
							{
								'title': '荔湾区',
								'value': '荔湾区'
							},
							{
								'title': '天河区',
								'value': '天河区'
							},
							{
								'title': '白云区',
								'value': '白云区'
							},
							{
								'title': '番禺区',
								'value': '番禺区'
							},
							{
								'title': '黄浦区',
								'value': '黄浦区'
							},
							{
								'title': '花都区',
								'value': '花都区'
							},
							{
								'title': '南沙区',
								'value': '南沙区'
							},
							{
								'title': '萝岗区',
								'value': '萝岗区'
							},
							{
								'title': '从化',
								'value': '从化'
							},
							{
								'title': '增城',
								'value': '增城'
							}
						]

					},
					{
						'title': '综合排序',
						'isMutiple': false,
						'key': 'sort',
						'defaultSelectedIndex':0,
						'detailList': [{
								'title': '综合优先',
								'value': '综合优先'
							},
							{
								'title': '口碑优先',
								'value': '口碑优先'
							},
							{
								'title': '人气优先',
								'value': '人气优先'
							},
							{
								'title': '距离优先',
								'value': '距离优先'
							}
						]
				
					},
					{
						'title': '筛选',
						'isMutiple': false,
						'isSort': true,
						'key': 'hometype',
						'defaultSelectedIndex':0,
						'detailList': [
									{
										'title': '全部',
										'value': '全部'
									},
									{
										'title': '小户型/一房',
										'value': '小户型/一房'
									},
									{
										'title': '两房',
										'value': '两房'
									},
									{
										'title': '三房',
										'value': '三房'
									},
									{
										'title': 'LOFT',
										'value': 'LOFT'
									},
									{
										'title': '复式',
										'value': '复式'
									},
									{
										'title': '别墅',
										'value': '别墅'
									},
									{
										'title': '大平层',
										'value': '大平层'
									},
									{
										'title': '商品装修',
										'value': '商品装修'
									},{
										'title': '办公空间',
										'value': '办公空间'
									}
							]						
					},
					{
						'title': '风格',
						'isMutiple': false,
						'isSort': true,
						'key': 'style',
						'defaultSelectedIndex':0,
						'detailList': [
									{
										'title': '全部',
										'value': '全部'
									},
									{
										'title': '现代',
										'value': '现代'
									},
									{
										'title': '美式',
										'value': '美式'
									},
									{
										'title': '欧式',
										'value': '欧式'
									},
									{
										'title': '中式',
										'value': '中式'
									},
									{
										'title': '北欧',
										'value': '北欧'
									},
									{
										'title': '混搭',
										'value': '混搭'
									},
									{
										'title': '新古典',
										'value': '新古典'
									},
									{
										'title': '简欧',
										'value': '简欧'
									},{
										'title': '工业',
										'value': '工业'
									},{
										'title': '后现代',
										'value': '后现代'
									}
							]								
					}
				]
			}
		},
		components:{
			nList,
			swiperDot
		},
		
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'../search/company'
			})
		},
		methods:{
			
			result(val) 
			{
				// console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
				console.log(this.filterResult)
			},
			changedot(e) {
				this.currentdot = e.detail.current;
			},
			edFitment(){
				uni.navigateTo({
					url: '../fitment/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.banner{
		position: relative;
		width: 750upx;
		// padding:10upx 22upx;
		// box-sizing: border-box;
	}
	.swiper-box-list{
		// padding:10upx 22upx;
	}
	.swiperdot{
		position: absolute;
		left: 50%;
		bottom:20upx;
		transform: translate(-50%,-50%);
	}
	.swiper_item{
		width: 100%;
		box-sizing: border-box;
		padding: 0 22upx;
		view{
			border-radius: 10upx;
			overflow: hidden;
		}
	}
	.content{
		background: #EEEEEE;
	}
	.item{
		width: 100%;
		padding: 30upx 22upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		background: #FFFFFF;
		margin-bottom:6upx;
	}
	.content_left{
		margin-right: 22upx;
	}
	.content_right{
		flex: 1;	
		>view:nth-child(1){
			font-size: 32upx;
			color:#3E3E3E;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			text:nth-child(1){
				letter-spacing: 1px;		
			}
			text:nth-child(2){
				font-size: 24upx;			
			}
		}
		>view:nth-child(2){
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 15upx 0;
		}
		>view:nth-child(3){
			color: #3E3E3E;
			margin-bottom: 12upx;
			font-size: 20upx;
			letter-spacing: 2upx;
			>text:nth-child(2){
				padding: 0 14upx;
				border-left: 1px solid #3E3E3E;
				border-right: 1px solid #3E3E3E;
				margin: 0 14upx;
			}			
		}
		>view:nth-child(4){
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 24upx;
			view{
				background: #FFF1F1;
				color: #B8696B;
				letter-spacing: 2upx;
				padding:8upx 13upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
	.started{
		width: 24upx;
		height: 24upx;
		background: url(../../static/img/myfix/started.png) no-repeat ;
		background-size:cover;
		margin-right: 12upx;
	}
	.start{
		width: 24upx;
		height: 24upx;
		background: url(../../static/img/myfix/start.png) no-repeat ;
		background-size:cover;
		margin-right: 12upx;
	}
</style>
