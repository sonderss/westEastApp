<template>
	<view>
		<view class="header">
			<view>
				<view class="title"><text>定位城市</text></view>
				<view class="contents icon">					
					<view>
						<text class="current" @tap="choosecity(currentcity)">
							{{currentcity}}
						</text>
					</view>
				</view>
			</view>
			<view>
				<view class="title">
					<text>热门城市</text>
				</view>
				<view class="contents">				
					<view v-for="item in hotcity" :key='item' @tap="choosecity(item)">
						<text>
							{{item}}
						</text>
					</view>
				</view>
			</view>		
		</view>
		<uni-collapse>
		    <uni-collapse-item v-for="(key,index) in listData" :key="index" :title="index">
		        <view class="contents">
					<view v-for="(x,indexs) in key.citylist" :key="indexs" @tap="choosecity(x)">
						<text>{{x}}</text>
					</view>
				</view>
		    </uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script> 	
	import uniCollapse from '@/components/collapse/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/collapse/uni-collapse-item/uni-collapse-item.vue'
	import city from '../../common/city.js'
	import province from '../../common/province.js'
	export default{
		data(){
			return{
				listData: {},
				hotcity:['全部','上海市','北京市','深圳市','南京市','天津市','福州市','成都市','武汉市','安徽市','昆明市','西安市'],
				currentcity:this.$store.state.fixCity,
				flag:false,
				title:'广州'
			}
		},
		onLoad(option){
			
			this.flag=option.ischangecity
			for(var i=0;i<province.length;i++){
				let arr=[];
				city[i].forEach(items=>{
					arr.push(items.label)
				})
				province[i]['citylist']=arr
			}
			let obj={}
			province.forEach(x=>{
				obj[x['label']]=x
			})
			this.listData=this.objKeySort(obj);
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})	
			},
			objKeySort(obj){		
				var newkey = Object.keys(obj).sort();
				var newObj = {};
				for (var i = 0; i < newkey.length; i++) {
					newObj[newkey[i]] = obj[newkey[i]];
				}
				return newObj;//返回排好序的新对象
			},
			choosecity(res){
				// console.log(res)
				if(this.flag){
					this.$store.dispatch("save",{'currentCity': res})
				}else{
					let pages = getCurrentPages();
					let nowPage = pages[ pages.length - 1]; 
					let prevPage = pages[ pages.length - 2 ]; 
					console.log(prevPage)
					prevPage.$vm.cjq_city = res;   			
					// console.log(res)
				}   
				uni.navigateBack({  
					delta: 1
				});
			}
		},
		components:{
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/iconfont/font.scss";
	.current:before{
		content:'\e611' ;
	}
	.status{
		height: 60upx;
	}
	.top{
		position: relative;
		height: 88upx;
		padding: 0upx 22upx;
		line-height: 88upx;
		text-align: center;
		font-size: 16px
	}
	.back_btn{
		width: 40upx;
		height: 40upx;
		background: url(../../static/img/company/back02.png) no-repeat;
		background-size: 20upx 40upx;
		position: absolute;
		left: 22upx;
		top: 20upx;
	}
	.title{
		font-size: 26upx;
		color:#3A3A3A;
		margin: 28upx 22upx;
	}
	.contents{
		width: 100%;
		height: 100%;
		padding-left:22upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		>view{
			width: 220upx !important;
			font-size: 24upx !important;
			color:#3A3A3A;
			margin:10upx 0;
			background: #EEEEEE;
			display: flex;
			align-items: center;
			justify-content: center;
			padding:10upx 0;
			border-radius: 3px;
			margin-right: 22upx;
			>text{
				white-space: nowrap;
				text-align: center;
				width: 192upx;
				overflow: hidden;
			}
		}
		// >view:hover{
		// 	background:  #FFF1F1;
		// 	color:#C17B7D
		// }
		margin-bottom:20upx
	}
	
</style>
