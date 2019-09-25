<template>
	<view>
		<!-- <view class="header" :class="is_h5?'top88':''">
			<view class="menu">
				<view :class="tab_num==1?'active':''" @tap="tab_num=1">商城</view>
				<view :class="tab_num==2?'active':''" @tap="tab_num=2">装修</view>
				<view :class="tab_num==3?'active':''" @tap="tab_num=3">贷款</view>
				<view :class="tab_num==4?'active':''" @tap="tab_num=4">签约</view>
			</view>
		</view> -->
		<view class="tag_box">
			<view v-for="(item,i) in tag_list" :key="i" class="tag_box_class" >
				<view class="title">{{item.title}}：</view>
				<view class="list">
					<text v-for="(item2,j) in item.list" :key="j">{{item2}}</text>
				</view>
			</view>
		</view>
		<goods-list :list="goods_list"></goods-list>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	
	import goodsList from '@/components/goods-list/goods-list'
	
	export default {
		components:{
			goodsList
		},
		data () {
			return {
				is_h5:false,
				tab_num:1,
				tag_list:[{
					'title':'家具',
					'list':['个性化定制','床','柜子','沙发','椅子','吧台','电脑台','梳妆台','床垫','屏风','茶几','餐桌']
				},
				{
					'title':'摆件',
					'list':['座地装饰柱','工艺摆件','收藏摆件','装饰画','全部']
				}],
				goods_list:[{
					url:'/static/img/list_img1.jpg',
					goods_id:"1",
					title:'实木床1.8米现代简约双人床',
					price:1899,
					buy_num:9,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				},
				{
					url:'/static/img/list_img2.jpg',
					goods_id:"2",
					title:'书架书柜简易时代白色',
					price:799,
					buy_num:12,
					address:'广州',
					from:'供应商'
				}]
			}
		},
		
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数  
			// console.log(option.title); //打印出上个页面传递的参数。  
			// #ifdef H5
			this.is_h5=true
			
			// #endif
			uni.setNavigationBarTitle({
			    title: option.title,
			});  
			
		} ,
		onNavigationBarButtonTap (e){
			if(e.index==0){
				uni.navigateTo({
					url: '../search/search',
					animationType: 'slide-in-bottom',
					animationDuration: 250,
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	@import './goods_list.scss'
</style>
