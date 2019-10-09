<template>
	<view class="content">
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
					<scroll-view class="swiper-one-list"  scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<team-list :list="zhitui"></team-list>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper_item">
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<team-list></team-list>
					</scroll-view>
				</swiper-item>
			</swiper>			
		</view>
		
	</view>
</template>

<script>
	import teamList from "components/team-list/team-list.vue"
	export default {
		data(){
			return{
				currentTab:0,
				menuTabs: [{
					name: "直推(15)"
				}, {
					name: "间推(0)"
				}],
				zhitui:[{
					img:'/static/img/myself/myselfHeadImg.png',
					name:'昵称',
					data:'2019-08-21',
					time:'15:12:10'
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
				
			}
		},
		components:{
			teamList
		}
	}
</script>

<style scoped lang="scss">
	.Tab{
		display: flex;	
		padding:34upx 0;
		font-size:26upx;		
		view{
			flex:1;
			text-align: center
		}
	}
	.active{
		color:#ff0000;
		padding-bottom:19upx;
		border-bottom:2px solid #ff0000
	}
	.swiper-box-list 
	{
		width:100%;
		height:1142upx;
	}
	.swiper-one-list 
	{
		height:100%;
		width:100%;
	}
</style>
