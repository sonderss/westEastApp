<template>
	<view>
		<view class="banner" id="header">
			<swiper style="width: 100%;height: 240upx;" class="swiper-box-list" duration="300" @change="changedot">
				<swiper-item class="swiper_item" v-for="(item,index) in imglist" :key="index">
					<view>
						<image style="width: 100%;" :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>				
			</swiper>
			<swiper-dot class="swiperdot" :current="currentdot" :list="imglist"></swiper-dot>
		</view>
		<view :class="{isfix:isfix}" v-if="fix_show">
			<n-list  :themeColor="themeColor"  :menuList="menuList" @result="result" ></n-list>
		</view>
		<view style="height:100upx;" v-show="isfix"></view>
		<view class="content">
			<view class="item" v-for="(item,index) in Clist" :key="index" @click="edFitment('zhuangxiu', item.id)" v-if="Clist.length">
				<view style="width: 183upx;height: 183upx;" class="content_left">
					<image :src="item.logoPic" style="width: 100%;height: 100%;" ></image>
				</view>
				<view class="content_right">
					<view>
						<text>{{item.name}}</text>
						<text v-if="$store.state.currentCity==$store.state.fixCity?false:true">{{item.distance}}km</text>
					</view>
					<view>
						<view v-for="(x,index) in item.calProperty.sumSorce" :key="index+'-lable'" class="started">
						</view>
						<view v-for="(z,num) in (5-item.calProperty.sumSorce)" :key="num+'+lable'" class="start">
						</view>
						<view style="font-size: 20upx;color: #808080;">
							<text>共{{item.calProperty.commentCount}}条</text>
						</view>
					</view>
					<view>
						<text>设计{{item.calProperty.designSorce}}</text>
						<text>服务{{item.calProperty.serverSorce}}</text>
						<text>施工{{item.calProperty.buildSorce}}</text>
					</view>
					<view>
						<view v-for="(items,index) in item.tages" :key="index">{{items}}</view>
					</view>
				</view>				
			</view>
			<view  v-if="!Clist.length">
				<view class="lose">
					<image src="../../static/img/xi2x.png" mode=""></image>
					<text>暂无数据</text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import { mapState } from 'vuex';
	import swiperDot from '@/components/fixdot/swiperDot.vue';
	import nList from '../../components/filter/sl-filter.vue';
	let data = require('./data.json');
	export default{
		data(){
			return{
				fix_show:true,
				isrefer:false,
				flag:true,
				city:this.$store.state.currentCity||'广州市',
				serverarea:'',
				housetype:'',
				styletype:'',
				orderfield:'P',
				pageindex:0,				
				Clist:[],
				isfix:false,
				imglist:['/static/img/myfix/banner03.png','/static/img/myfix/banner.png'],
				currentdot:0,				
				themeColor: '#EFEFEF',
				userpoint:this.$store.state.userPoint,			
				menuList: [{
						'title': this.$store.state.currentCity||'广州市',
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
						'ishook':2,
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
		onPullDownRefresh() {
			//防止多次刷新
			if(this.flag){
				//是否是最后一页
				if(this.isrefer){
					uni.showToast({
						title:'已经到底了',
						duration:1000
					})
				}else{
					//触底刷新
					this.loadData()
				}			
			}
			
		},
		onPageScroll(e) {
			if(e.scrollTop>=118){
				this.isfix=true
			}else{
				this.isfix=false
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url:'../search/company'
			})
		},
		onLoad() {
			this.axios.GetHouseType().then(res=>{
				if(res.statusCode==200){
					res.data.data.forEach(item=>{
						this.menuList[2].detailList.push(item)
					})
				}
			})
			this.axios.GetStyleType().then(res=>{
				if(res.statusCode==200){
					res.data.data.forEach(item=>{
						this.menuList[3].detailList.push(item)
					})
				}
			})
		},
		computed: {			
			...mapState(['currentCity'])
		},
		watch:{
			currentCity:{				
				handler(newVal, oldVal) {
					if(newVal.length>6){
						newVal=newVal.slice(0,6)+'...'
					}
					this.menuList[0].title=newVal||'广州市'
					this.fix_show=false;
					this.$nextTick(()=>{
						this.fix_show=true
						this.$nextTick(()=>{
							this.city=newVal||'广州市'
							this.reset()
							this.loadData()
						})						
					})
				}
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
			    title:this.$store.state.currentCity||'广州市' +'装修公司'
			});
		},
		created() {
			//初次进入请求数据
			if(this.$store.state.currentCity.length>6){
				this.menuList[0].title=this.$store.state.currentCity.slice(0,6)+'...'
			}		
			this.loadData()
		},
		mounted() {

		},
		methods:{
			reset(){
				this.isrefer=false,
				this.flag=true,
				this.serverarea='',
				this.housetype='',
				this.styletype='',
				this.orderfield='P',
				this.pageindex=0,
				this.Clist=[]
			},
			result(val) {
				console.log(val)
				//切换再请求数据
				this.isrefer=false,
				this.flag=true,				
				this.pageindex=0;
				this.serverarea=val.city=="全城"?'':val.city,
				this.housetype=val.hometype=="全部"?'':val.housetype,
				this.styletype=val.hometype=="全部"?'':val.hometype,
				this.orderfield='P'//sort
				this.loadData()
			},
			loadData(){
				//请求数据之后马上关闭待成功之后在次打开
				this.flag=false;
				let objs={
					city:this.city,
					serverarea:this.serverarea,
					housetype:this.housetype,
					styletype:this.styletype,
					userXY:'22.985493,113.376345',
					orderfield:this.orderfield,
					wordkey:'',
					pageindex:++this.pageindex,
					pagesize:5
				}
				this.axios.GetCompanyTrimPageList(objs).then(res=>{
					console.log(res)
					if(res.statusCode==200&&res.data.status==0){
						if(res.data.data.list.length>0){
							this.Clist=this.Clist.concat(res.data.data.list)
						}else{
							this.Clist=[];
						}					
						this.flag=true
						if(res.data.data.isendpage){
							this.isrefer=true
						}
					}else{
						this.Clist=[];
						// uni.showToast({
						// 	title:'服务器繁忙',
						// 	duration:1000
						// })
					}
				})
			},
			changedot(e) {
				this.currentdot = e.detail.current;
			},
			edFitment(txt, id){
				uni.navigateTo({
					url: '../fitment/index?id=' + id + '&' +'type=' + txt
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
			font-size: 28upx;
			color:#3E3E3E;
			display: flex;
			justify-content: space-between;
			align-items: top;
			text:nth-child(1){
				letter-spacing: 1px;
				width: 364upx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;		
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
	.isfix{
		width: 100%;
		position:fixed;
		left: 0;
		top:0;
		z-index: 1000;
	}
	.lose{
		position: fixed;
		text-align: center;
		color: #676262;
		width: 355upx;
		height: 299upx;
		left: 50%;
		top:50%;
		transform: translate(-50%,-50%);
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
