<template>
	<view class="content">
		<view class="commentBox" v-if="commentLists">
			<view class="commentWarp" v-if="commentList.category">
				<block v-for="(item,index) in commentList.category" :key="index">
					<view @click="check(index)" :class="[currentTab==index ? 'select' : '']"><text>{{item.title}}</text><text v-text="item.number == ''?'':'('+item.number+')'"></text></view>
				</block>			
			</view>
			<view class="commentConet" v-if="commentList.list">
				<view class="commentList uni-flex uni-column" v-for="(item,index) in commentList.list" :key="index" >
					<view class="user-comment uni-flex" v-if="isPic === 0 ? true : item.isImg">
						<image class="left-header" style="width:60upx;height:60upx;" :src="!item.userHeadPic?'../../static/img/myself/18.png':item.userHeadPic"></image>
						<view class="user-info uni-flex uni-column">
							<text class="name text-overflow_1-xzh" style="font-size:30upx">{{item.userName}}<text style="margin-left:10upx;font-size:27upx">{{item.createDate}}</text></text>
							<view class="time text-overflow_1-xzh" style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(122,122,122,1);">
							
									<text >{{item.skuInfo}}</text>
									<!-- <text>规格：{{item.guige}}</text> -->
							</view>
							
						</view>
					</view>
					<view class="right-comment"  v-if="isPic === 0 ? true : item.isImg">
						<view class="user-conent" style="font-size:30upx"><text>{{item.content}}</text></view>
						<view class="user-conentImg " v-if="item.arrayPic">
							<view v-for="(i,index) in item.arrayPic" :key="index" >
								<image lazy-load mode="widthFix" :src="i"></image>
							</view>
						</view>
						<!-- <view class="user-reveiw uni-flex">
							<view class="browse"><text>浏览&nbsp;&nbsp;&nbsp;{{item.browse}}次</text></view>
							<view class="uni-flex">
								<view class="give uni-flex">
									<image src="/static/img/comment/pin.png"></image>								
									<text v-text="item.pin == 0?'评论':item.pin"></text>
								</view>
								<view class="dian uni-flex" @click="zan(index,item.ifZan,item.zan)">
									<image v-if="!item.ifZan" src="/static/img/comment/dian.png"></image>
									<image v-else src="/static/img/comment/zan.png"></image>
									<text v-text="item.zan == 0?'点赞':item.zan"></text>
								</view>
							</view>
						</view> -->
					</view>
				</view>
			</view>
			<!-- 分享 -->
			<share :sharelist="sharelist" :isShow='isShow'></share>
			<!--加载更多使用组件 -->
			<uni-load-more v-if="is_loadingType"  :loadingType="loadingType" :contentText="contentText" ></uni-load-more>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import gapi from '../../apis/goods/goods'
	import share from '../../components/share/share'
	var _self,page = 1,timer = null;// 定义全局参数,控制数据加载
	export default {
		components: {
			uniLoadMore,
			share
		},
		data() {
			return {
				sharelist:{},//分享组件所需参数
				isShow:false,
				commentLists:false,
				currentTab: 0,
				itemid:'',
				list:[],
				isPic:0,
				num:0,
				//2019-10-15  颜色：棕色  尺寸：786*468*125mm/不安装
				commentList:{
					list:[
					],
					category:[
						{"title":"全部","number":''},
						{"title":"有图","number":0}
					]
				},				
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了',
				},
				is_loadingType:false,
			}
		},
		onNavigationBarButtonTap (e){
			this.isShow = true
			this.sharelist = {
					imageUrl:'http://192.168.1.140:5005/file/fapi/pic/goods/goods_02.jpg',
					title:'用户评论',
					path:'pages/comment/comment',
			}
			setTimeout(()=>{
				this.isShow = false
			},100)
		},
		mounted(){	
			let param ={
				id:3,
				pageindex:1,
				pagesize:20
			}
			gapi.goodsPL(param,this)
		},
		onLoad: function(e){
			if (e.itemid) { //商品ID
				this.itemid = e.itemid;
				this.commentLists = true;
				_self = this;
				//页面一加载时请求一次数据
				this.getnewsList();
			} else {
				this.onBack();
			} 
		},
		onPullDownRefresh: function() {
			//下拉刷新的时候请求一次数据
			this.getnewsList();
		},
		onReachBottom: function() {
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
			if (timer != null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				_self.getmorenews();
			}, 200);
		},
		methods: {
			onBack:function(){
				uni.navigateBack();
			},
			getnewsList:function(){ //第一次请求数据，每次请求后台返回10条数据，给后台的数据	currentTab，告诉后台我选择的那一个类别	
				page = 1;
				this.loadingType = 0;
				uni.showNavigationBarLoading(); //显示导航条加载动画
				//请求数据，如果返回有数据commentLists:true,如果没有commentLists:false
				this.commentLists = true;
				// if(res.data.length < 10){ //判断返回数据
				// 	this.is_loadingType = false;
				// }else{
				// 	this.is_loadingType = true;
				// }
				page++;//得到数据之后page+1
				_self.commentList = _self.commentList;
				uni.hideNavigationBarLoading(); //隐藏导航条加载动画
				uni.stopPullDownRefresh();//得到数据后停止下拉刷新
			},
			getmorenews:function(){ //请求更多数据
				if (_self.loadingType !== 0) {//loadingType!=0;直接返回
					return false;
				}
				_self.loadingType = 1;
				uni.showNavigationBarLoading();//显示加载动画
				//请求数据
				// if(res.data.length == 0){//没有数据
				// 	_self.loadingType = 2;
				// 	uni.hideNavigationBarLoading();//关闭加载动画
				// 	return;
				// }
				page++;//每触底一次 page +1
				_self.commentList = _self.commentList.concat(res.data);//将数据拼接在一起
				_self.loadingType = 0;//将loadingType归0重置
				uni.hideNavigationBarLoading();//关闭加载动画
			},
			check:function(current){
				this.currentTab = current
				if(current === 0){
					// console.log('全部')
					this.isPic = 0
				}
				if(current === 1){
					// console.log('有图')
					this.isPic = 1
				}
			},
			zan:function(index,iszan,num){			
				var obj = this.commentList.list[index];				
				//向后台返回数据
				if(iszan){ //已点赞
					num--;
					this.$set(obj,"ifZan",false);
					this.$set(obj,"zan",num);
				}else{ //未点赞
					num++;
					this.$set(obj,"ifZan",true);
					this.$set(obj,"zan",num);
				}
			},
			// commDetail:function(){
			// 	uni.navigateTo({
			// 	    url: 'commentDetail?itemid='+this.itemid
			// 	});
			// }
		}
	}
</script>

<style>
	image{display:block;}
	.content{width:100%;background:#fff;}
	.commentBox{width:100%;}
	.commentWarp,.commentConet{padding:0 21upx 0 26upx;}
	.commentWarp view{font-size:22upx;color:#404040;line-height:48upx;height:48upx;padding:0 20upx;border:1px solid #737373;border-radius:20upx;margin:20upx 18upx 0 0;display:inline-block;}
	.commentWarp view{font-size:22upx;color:#404040;line-height:48upx;height:48upx;padding:0 20upx;border-radius:20upx;margin:20upx 18upx 0 0;display:inline-block;}
	
	.commentWarp view.select{background:#fff1f1;color:#C17B7D;border: none}
	.commentConet{margin-top:13upx;}
	.commentList{width:100%;margin-top:22upx;}
	.user-comment{align-items:center;}
	.left-header{width:61upx;height:61upx;border-radius:50%;overflow:hidden;margin-right:12upx;}
	.user-info{width:80%;}
	.user-info text.name{color:#525252;font-size:22upx;margin-bottom:3upx;}
	.user-info text.time{color:#7a7a7a;font-size:20upx;}
	.right-comment{margin-left:73upx;}
	.right-comment .user-conent{color:#000;font-size:22upx;line-height:36upx;margin:24upx 0;}
	.user-conentImg{justify-content:space-between;display: flex;flex-wrap: wrap;}
	.user-conentImg view{width:198upx;height:auto;border-radius:20upx;overflow:hidden;margin-bottom: 20upx}
	.user-conentImg view image{width:100%;max-width:100%;height:auto;display:block;}
	.user-reveiw{align-items:center;justify-content: space-between;margin-top:26upx;}
	.user-reveiw text,.user-reveiw .browse{font-size:22upx;color:#7a7a7a;}
	.user-reveiw image{width:18upx;height:17upx;margin-right:10upx;}
	.give,.dian{align-items:center;margin-right:40upx;}
	.dian{margin-right:10upx;}
	.user-reveiw image.dian{width:16upx;height:18upx;}
</style>
