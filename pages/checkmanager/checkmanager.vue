<template>
	<view>
		<view v-if="Clist.length">
			<check-manager :list="Clist" @phone="playPhone" @jumpDetail="jumpDetail"></check-manager>
		</view>
		<view  v-if="!Clist.length">
			<view class="lose">
				<image src="../../static/img/xi2x.png" mode=""></image>
				<text>暂无数据</text>
			</view>
		</view>
		<unipop ref="refpop" type="top" :radius="true">
			<view class="content">
				<view class="item" :class="{lastitem:(index+1)%4==0?true:'',selected:current==index?true:false}" v-for="(item,index) in detailList" :key="item.value" @tap='choose(index)'>
					<text>{{item.title}}</text>
				</view>
			</view>		
		</unipop>
		<chunLei-modal v-model="value" :mData="mData" @onConfirm="onConfirm" @cancel="cancel" navMask>
		</chunLei-modal>
	</view>
</template>

<script>
	import unipop from '@/components/uni-popup/uni-popup.vue'
	import checkManager from '@/components/check-manager/check-manager.vue'
	export default{
		data(){
			return{
				pageindex:0,
				phonenum:'',
				area:'',
				mData:{title:'拨打电话',content:"phonenum",cancelText:'取消',confirmColor:'#B16A6B'},
				current:0,
				isrefer:false,
				flag:true,
				value:false,
				Clist:[],
				type: 0,
				detailList: [{
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
			}
		},
		created() {
			// #ifdef APP-PLUS
				var currentWebview = this.$mp.page.$getAppWebview();
				currentWebview.setTitleNViewButtonStyle(0, {  
					text: this.$store.state.currentCity||'广州市',   
				});
			// #endif		
			this.loadData()
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
		methods:{
			jumpDetail(id) {
				uni.navigateTo({
					url: '/pages/geomancy/business_details?id=' + id + '&type=' + this.type
				})
			},
			choose(res){
				this.pageindex=0,
				this.isrefer=false,
				this.flag= true,
				this.Clist=[]
				this.current=res;
				var currentWebview = this.$mp.page.$getAppWebview();  
				currentWebview.setTitleNViewButtonStyle(0, {  
					text: this.detailList[res].value,  
				});
				this.area=this.detailList[res].value=='全城'?'':this.detailList[res].value
				this.loadData()
				this.$refs.refpop.close()
			},
			playPhone(num){
				this.value=true,
				this.phonenum=num,
				this.$set(this.mData,"content",num);
			},
			onConfirm(){
				uni.makePhoneCall({
				    phoneNumber: this.phonenum 
				});
			},
			cancel(){
				
			},
			loadData(){
				//请求数据之后马上关闭待成功之后在次打开
				this.flag=false;
				let objs={
					city:this.$store.state.currentCity || '广州市',
					servicearea:this.area,
					pageindex:++this.pageindex,
					pagesize:10
				}
				this.axios.getCheckData(objs).then(res=>{
					console.log(res)
					if(res.statusCode === 200){
						 if(res.data.data.list.length > 0 ){
							 this.Clist=this.Clist.concat(res.data.data.list)							 
						 }else{
							this.Clist=[]
							console.log('数据为空')
						 }
						 this.flag=true
						 if(res.data.data.isendpage){
						 	this.isrefer=true
						 }
					}
				})
			}
			
		},
		onNavigationBarButtonTap(e) {
			this.$refs.refpop.open()
		},
		components:{
			checkManager,
			unipop
		}
	}
</script>

<style scoped lang="scss">
	.lose{
		position: fixed;
		text-align: center;
		color: #676262;
		width: 355upx;
		height: 299upx;
		left: 50%;
		top:40%;
		transform: translate(-50%,-50%);
		image{
			width: 100%;
			height: 100%;
		}
	}
	.content{
		padding:0 22upx;
		margin: 18upx 0 18upx 0;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.lastitem{
		margin-right:0 !important
	}
	.content .selected{
		background: #FFF1F1;
		color:#C17B7D
	}
	.item{
		margin: 12upx 20upx 12upx 0;
		width: 160upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background: #EEEEEE;
		color: #484848;
		font-size: 24upx;
		border-radius: 5px;
	}
</style>
