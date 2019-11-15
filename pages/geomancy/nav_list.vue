<template>
	<view>
		<tab-list :tabList="tabList" @edOnTab="onTab" :isActive="isActive"></tab-list>
		<eyes-list :list="list"></eyes-list>
	</view>
</template>

<script>
	import tabList from '../../components/geomancy/tab.vue'
	import eyesList from '../../components/geomancy/eyes'
	import data from "./data.js"
	export default{
		components:{tabList, eyesList},
		data(){
			return{
				isActive:0,
				tabList:[],
				list: {
					bannerImg: '/static/img/geomancy/6.png',
					contentList: [
						{src: '/static/img/geomancy/9.png', title: '家居风水：大门颜色该如何选择？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
						{src: '/static/img/geomancy/9.png', title: '家居风水：卧室家具摆放的6大风水知识？', eyes: '1234'},
					],
				},
			}
		},
		onLoad(res) {
			uni.setNavigationBarTitle({
			　　title: res.name
			})
			if (res.name === '住宅') {
				this.tabList = data.houseList
			}else if(res.name === '办公'){
				this.tabList = data.officeList
			}else if(res.name === '商铺'){
				this.tabList = data.shopList
			}else{
				this.tabList = data.myselfList
			}
		},
		methods:{
			onTab(index){
				this.isActive = index
			}
		}
	}
</script>
