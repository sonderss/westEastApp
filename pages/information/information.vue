<template>
	<view>	
		<view class="isFixed" style="padding-left: 22upx;">
			<scroll-view id="nav-bar" class="nav-bar" show-scrollbar="false" scroll-x scroll-with-animation :scroll-left="scrollLeft">
				<view
					v-for="(item, index) in tabBars"
					:key="item.id"
					class="nav-item"
					:class="{ current: index === tabCurrentIndex }"
					:id="'tab' + index"
					@tap="changeTab(index, $event)"
				>
					{{ item.name }}
				</view>
			</scroll-view>
		</view>
		<view style="margin-top: 90upx;">
			<view class="typestyle">
				<view
					v-for="(item, index) in typelist" :key="item.id" class="nav-item" :class="{ currenttype: index === typeCurrentIndex }" @tap="change(index)">
					{{ item.name }}
				</view>
			</view>			
		</view>
		<zixun-list :shoplist='shoplist'></zixun-list>
	</view>
</template>

<script>
import {mapState} from 'vuex'
import zixunList from '@/components/zixunList/zixun.vue'
let scrollTimer = false,
	tabBar;
export default {
	data() {
		return {
			currentdot: 0,
			scrollLeft: 0,
			tabCurrentIndex: 0,
			typeCurrentIndex: 0,
			shoplist:[                           
				{
					imageurl:'/static/img/zixun/01.png',
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					state: 1,
					seenum:123
				},
				{
					imageurl:'/static/img/zixun/01.png',
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					state: 5,
					seenum:123
				},
				{
					imageurl:'/static/img/zixun/01.png',
					title: '关于选择家具品牌，大家一定要了解清楚的信息',
					state: 3,
					seenum:123
				},
				{
					imageurl:'/static/img/zixun/01.png',
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					state: 2,
					seenum:123
				},
				{
					imageurl:'/static/img/zixun/01.png',
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					state: 2,
					seenum:123
				},{
					imageurl:'/static/img/zixun/01.png',
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					state: 2,
					seenum:123
				},{
					imageurl:'/static/img/zixun/01.png',
					title:'关于选择家具品牌，大家一定要了解清楚的信息',
					state: 2,
					seenum:123
				}
			],
			tabBars: [
				{
					name: '品牌故事',
					id: '1',
				}, {
					name: '设计大咖',
					id: '2'
				}, {
					name: '宠物屋',
					id: '3'
				}, {
					name: '植物园',
					id: '4'
				}, {
					name: '东装直播',
					id: '5'
				}, {
					name: '西购直播',
					id: '6'
				}, {
					name: '生活馆',
					id: '7'
				}, {
					name: '发现美',
					id: '8'
				}, {
					name: '谈天说地',
					id: '9'
				},{
					name: '智能家居',
					id: '10'
			}],
			typelist: [
				{
					name: '全部',
					id: '0',
				}, {
					name: '分类1',
					id: '1'
				}, {
					name: '分类2',
					id: '2'
				}, {
					name: '分类3',
					id: '3'
				}, {
					name: '分类4',
					id: '4'
				}, {
					name: '分类5',
					id: '5'
				}, {
					name: '分类6',
					id: '6'
				}, {
					name: '分类7',
					id: '7'
				}]
		}
	},
	components:{
		zixunList
	},
	computed:{
		...mapState(['screen_width','screen_height'])
	},
	methods:{
		
		//tab切换
		async changeTab(e,event) {
			if (scrollTimer) {
				//多次切换只执行最后一次
				clearTimeout(scrollTimer);
				scrollTimer = false;
			}
			let index = e;
			// e=number为点击切换，e=object为swiper滑动切换
			if (typeof e === 'object') {
				index = e.detail.current;
			}
			if (typeof tabBar !== 'object') {
				tabBar = await this.getElSize('nav-bar');
			}
			// 计算宽度相关
			let tabBarScrollLeft = tabBar.scrollLeft;
			let width = 0;
			let nowWidth = 0;
			//获取可滑动总宽度
			for (let i = 0; i <= index; i++) {
				let result = await this.getElSize('tab' + i);
				width += result.width;
				if (i === index) {
					nowWidth = result.width;
				}
			}
			if (typeof e === 'number') {
				//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
				this.tabCurrentIndex = index;
			}
			//延迟300ms,等待swiper动画结束再修改tabbar
			scrollTimer = setTimeout(() => {
				if (width - nowWidth / 2 > this.screen_width / 2) {
					//如果当前项越过中心点，将其放在屏幕中心
					this.scrollLeft = width - nowWidth / 2 - this.screen_width / 2;
				} else {
					this.scrollLeft = 0;
				}
				if (typeof e === 'object') {
					this.tabCurrentIndex = index;
				}
				this.tabCurrentIndex = index;
			}, 0)
			uni.showLoading({
				title:'加载中',
				mask:true
			})
			setTimeout(()=>{
				uni.hideLoading()
			}, 1000);
		},
		//获得元素的size
		getElSize(id) {
			return new Promise((res, rej) => {
				let el = uni.createSelectorQuery().select('#' + id);
				el.fields(
					{
						size: true,
						scrollOffset: true,
						rect: true
					},
					data => {
						res(data);
					}
				).exec();
			});
		},
		change(index){
			this.typeCurrentIndex=index
		}
	}
};
</script>
<style scoped lang="scss">
	/* 顶部tabbar */
	.nav-bar{
		height: 90upx;
		white-space: nowrap;
		.nav-item{
			display: inline-block;
			padding-right: 20upx;
			height: 80upx;
			text-align: center;
			line-height: 80upx;
			font-size: 30upx;
			position: relative;
			font-size:30upx;
			&:after{
				content: '';
				width: 0;
				height: 0;
				border-bottom: 4upx solid #C17B7D;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-58%);
				transition: .3s;
			}
		}
		.current{
			color: #C17B7D;
			&:after{
				width: 90%;
			}
		}
	}
	.typestyle{
		>view{
			margin-left: 22upx;
			text-align: center;
			line-height: 60upx;
			margin-top: 20upx;
			border-radius: 10upx;
			display: inline-block;
			background:#EEEEEE ;
			width: 160upx;
			height: 60upx;
			color: #484848;
			font-size: 24upx;
		};
	}
	.currenttype{
		background:#FFF1F1 !important;
		color: #C17B7D !important;
	}
	.isFixed{
		width: 750upx;
		position: fixed;
		left:0;
		/* #ifdef APP-PLUS */
		top:0;
		/* #endif */
		/* #ifdef H5 */
		top:88upx;
		/* #endif */
		z-index: 998;
		background: #ffffff;
	}
	
</style>
