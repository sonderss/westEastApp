<template>
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				 v-for="(item,index) in categoryList">
					{{item}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view class="uni-flex nav-right-item" v-for="(item,index) in topicList" :key="index"  @tap="onTopic(item.name)">
					<view class="text">
						<view class="topic">{{item.name}}</view>
						<view><text>{{item.circusee}}</text> <text>{{item.content}}</text></view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				categoryList: ['热门话题', '晒家', '装修', '家居', '家电', '灯光', '风格', '配色', '好物', '收纳', '家常'],
				topicList:[
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#王思聪被限制高消费', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
					{name:'#麦当劳汉堡薯条10年不发霉', circusee:'1655人围观',content:'111篇内容'},
				],
				categoryActive: 0,
				scrollHeight: 0,
				height: 0,
				scrollTop: 0,
			}
		},
		onNavigationBarButtonTap (e){
            uni.navigateTo({
				url:'../../../pages/search/company?type=1'
			})
           
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
			},
			onTopic:function(item){
				this.$store.state.sendPost.topic = item
				uni.navigateTo({
				    url:'../write_post/write_post?topic='+ item
				})
				
			},
		},
		onLoad: function () {
			this.height = uni.getSystemInfoSync().windowHeight;
		}
	}
</script>

<style scoped>
	.page-body{display:flex}
	.nav-left{width:25%}
	.nav-left-item{height:80upx;font-size:30upx;display:flex;align-items:center;justify-content:center}
	.nav-right{width:75%;background:#f3f3f3}
	.nav-right-item{height:150upx;padding:11upx;font-size:28upx;border-bottom:solid 1px #e0e0e0;align-items:center;padding-left:40upx}
	.active{color:#fff;background:#e2b5b6}
	.topic{font-size: 30upx;margin-bottom: 10upx;color: #000000;}
	.text:last-child{font-size: 26upx;color: #8B8B8B;}
	.text:last-child text:first-child{margin-right: 40upx;}

</style>