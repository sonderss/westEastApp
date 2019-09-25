<template>
	<view class="content">
		<!-- <view class="header">
			
			<view class="menu">
				<view :class="tab_num==1?'active':''" @tap="tab_num=1">商城</view>
				<view :class="tab_num==2?'active':''" @tap="tab_num=2">装修</view>
				<view :class="tab_num==3?'active':''" @tap="tab_num=3">贷款</view>
				<view :class="tab_num==4?'active':''" @tap="tab_num=4">签约</view>
			</view>
		</view> -->
		<view class="cont">
			<view v-if="!show_result">
				<view class="cont1" v-if="history_list.length>0">
					<view class="h1">历史搜索</view>
					<image src="../../static/img/delete_ico.png" class="delete_ico" @tap="clear_history" ></image>
					<view class="history_list">
						<view v-for="(item,i) in history_list" :key="i" @tap="search_fun(item)">{{item}}</view>
					</view>
				</view>
				<view class="cont1" v-if="relevant_list.length>0">
					<view class="h1">相关推荐</view>
					<view class="relevant_list">
						<view class="img_cont" v-for="(item,i) in relevant_list" :key="i" @tap="search_fun(item.title)">
							<view class="img" :style="{'background':'url('+item.img+') center center/80% auto no-repeat'}"></view>
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<goods-list :list="result_list"></goods-list>
			</view>
		</view>
		
		<view class="search_guide" v-if="show_search_guide && search_txt!=''">
			<view class="list" v-for="(item,i) in association_list" :key="i" @tap="search_fun(search_txt+item)">
				<text class="keyword" v-text="search_txt"></text>
				<text class="association" v-text="item"></text>
			</view>
		</view>
		<view class="voice_btn" v-if="show_voice_btn">
			<image class="voice_btn_img" src="../../static/img/voice_btn.png" @tap="startRecognize"></image>
		</view>
		<uni-popup ref="popup" type="bottom" :custom="false" @change="change">
			<image src="/static/img/close_ico.png" @click="close" class="close_ico"></image>
			<view class="voice_title" :style="{'color':voice_content==no_distinguish_txt?'#ff0000':'#303030'}">{{voice_content?voice_content:voice_title}}</view>
			<view class="try_text" v-if="!voice_content || voice_content==no_distinguish_txt"><text>你可以试试这样说：</text>客厅天花吊顶、大屏冰箱</view>
			<view class="voice_tiao" v-if="voice_content!=no_distinguish_txt">
				<view class="voice_" v-for="(item,i) in voice_height_list" :key="i" :style="{'height':item}" ></view>
			</view>
			<view v-if="voice_content==no_distinguish_txt" class="voice_btn2_box">
				<image src="../../static/img/voice_btn2.png" class="voice_btn2" @tap="startRecognize"></image>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	import permision from "@/common/permission.js"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import goodsList from '@/components/goods-list/goods-list'
	
	export default {
		components: {
			uniPopup,
			goodsList
		},
		data() {
			return {
				show_result: false,
				tab_num:1,
				store_img_list:['../../static/img/home/store_img1.png','../../static/img/home/store_img2.png','../../static/img/home/store_img3.png','../../static/img/home/store_img4.png'],
				swiper_list:['../../static/img/home/swiper_img1.png','../../static/img/home/swiper_img1.png','../../static/img/home/swiper_img1.png'],
				suit_img_list:['../../static/img/home/suit_img1.png','../../static/img/home/suit_img2.png','../../static/img/home/suit_img3.png'],
				search_txt:'',
				association_list:['联想1','联想2','联想3','联想4','联想5'],
				show_search_guide: true,
				goodList: [],
				history_list_arr: this.help.load('history_list',true),
				history_list:[],
				relevant_list:[
					{
						"img":"../../static/img/home/store_img3.png",
						"title":"电视机"
					},
					{
						"img":"../../static/img/home/store_img4.png",
						"title":"洗衣机"
					},
					{
						"img":"../../static/img/home/store_img3.png",
						"title":"电视机"
					},
					{
						"img":"../../static/img/home/store_img4.png",
						"title":"洗衣机"
					},
					{
						"img":"../../static/img/home/store_img3.png",
						"title":"电视机"
					},
					{
						"img":"../../static/img/home/store_img4.png",
						"title":"洗衣机"
					},
					{
						"img":"../../static/img/home/store_img3.png",
						"title":"电视机"
					},
					{
						"img":"../../static/img/home/store_img4.png",
						"title":"洗衣机"
					}
				],
				say_voice: false,
				show_voice_btn: true,
				voice_title:'请说，我正在聆听',
				voice_content:'',
				interval1: null,
				voice_height_list:[],
				saying: false,
				no_distinguish_txt:'未能识别，请点击麦克风重试',
				currentWebview:null,
				result_list:[{
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
		onLoad() {
			console.log('onLoad')
			if(!this.is_empty(this.history_list_arr)){
				this.history_list=this.history_list_arr.split(',')
			}
			this.init_voice_height_list()
			// #ifdef APP-PLUS
			this.currentWebview = this.$mp.page.$getAppWebview();
			// #endif
		},
		onUnload(){
			clearInterval(this.interval1)
		},
		
		onNavigationBarSearchInputConfirmed (e){
			console.log(e)
			if(e.text){
				uni.hideKeyboard();
				this.search_fun(e.text)
			}
		},
		
		onNavigationBarSearchInputChanged(e) {
			// console.log(e.text)
			this.search_txt=e.text;
		},
		onNavigationBarButtonTap (e){
			if(this.search_txt && e.index==0){
				uni.hideKeyboard();
				this.search_fun(this.search_txt)
			}
		},
		onResize (e){
			if(Number(e.size.windowHeight)-Number(this.screen_height)<-200){
				//软键盘弹起
				this.show_search_guide=true
				this.show_result=false
			}
		},
		computed:{
			...mapState(['is_ios','userPoint','currentCity','screen_height'])
		},
		methods: {
			init_voice_height_list(){
				this.interval1=setInterval(()=>{
					for(let i=0;i<12;i++){
						// this.voice_height_list[i]=Math.floor(Math.random()*45)+'px'
						this.$set(this.voice_height_list,i,Math.floor(Math.random()*45)+'px')
					}
				},200)
				
			},
			change:function(e) {
				console.log(e.show)
				if(!e.show){
					this.show_voice_btn=true
					setTimeout(()=>{
						this.voice_content=''
					},500)
				}
			},
			close(){
				this.$refs.popup.close()
				setTimeout(()=>{
					this.voice_content=''
				},500)
			},
			async startRecognize () {
			    // #ifdef APP-PLUS
			    let status = await this.checkPermission();
			    if (status !== 1) {
			        return;
			    }
			    // #endif
				this.show_voice_btn=false
				this.$refs.popup.open();
			    // TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用语音，会弹出正在识别的toast
				var options = {
					userInterface:false
				};
				var that = this;
				options.engine = 'baidu';
				// this.value = "";
				this.voice_content=''
				this.saying=true
				let _timeout=null
				plus.speech.startRecognize(options,(s)=> {
					console.log(s);
					// this.value += s;
					this.voice_content += s;
					this.voice_content=this.voice_content.replace('。','')
					this.voice_content=this.voice_content.replace('？','')
					clearTimeout(_timeout)
					_timeout=setTimeout(()=>{
						plus.speech.stopRecognize();
						// this.search_fun(this.voice_content)
						this.show_search_guide=true
						this.search_txt=this.voice_content
						this.currentWebview.setTitleNViewSearchInputText(this.voice_content)  
						this.$refs.popup.close()
						setTimeout(()=>{
							this.voice_content=''
						},500)
					},1000)
					
				},  (e)=> {
					console.log("语音识别失败：" + e.message);
					this.voice_content=this.no_distinguish_txt
					
				});
			},
			async startRecognizeEnglish () {
			    // #ifdef APP-PLUS
			    let status = await this.checkPermission();
			    if (status !== 1) {
			        return;
			    }
			    // #endif
			
			    // TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用语音，会弹出正在识别的toast
				var options = {};
				var that = this;
				options.engine = 'baidu';
				options.lang = 'en-us';
				that.value = "";
				plus.speech.startRecognize(options, function (s) {
					console.log(s);
					that.value += s;
				}, function (e) {
					console.log("语音识别失败：" + e.message);
				});
			}
			// #ifdef APP-PLUS
			,
			async checkPermission() {
			    let status = permision.isIOS ? await permision.requestIOS('record') :
			        await permision.requestAndroid('android.permission.RECORD_AUDIO');
			    if (status === null || status === 1) {
			        status = 1;
			    } else if (status === 2) {
			        uni.showModal({
			            content: "系统麦克风已关闭",
			            confirmText: "设置",
			            success: function(res) {
			                if (res.confirm) {
			                    permision.gotoiOSSetting();
			                }
			            }
			        })
			    } else {
			        uni.showModal({
			            content: "需要麦克风权限",
			            confirmText: "设置",
			            success: function(res) {
			                if (res.confirm) {
			                    permision.gotoAppSetting();
			                }
			            }
			        })
			    }
			    return status;
			}
			// #endif
			,
			search_fun: function(str){
				// #ifdef APP-PLUS
				this.currentWebview.setTitleNViewSearchInputText(str)  
				// #endif
				this.show_result=true
				this.show_search_guide=false;
				let _history_list=this.help.load('history_list',true)
				let _arr=[]
				if(!this.is_empty(_history_list)){
					_arr=_history_list.split(',')
				}
				
				for(let i=0;i<_arr.length;i++){
					if(_arr[i]==str){
						return false
					}
				}
				_arr.unshift(str)
				if(_arr.length>10){
					_arr.pop()
				}
				console.log(_arr)
				this.history_list=_arr
				this.help.save('history_list' , _arr.toString(),true)
			},
			clear_history(){
				this.help.confirm('确定清空历史搜索？', ()=> {
					this.help.remove('history_list')
					this.history_list=[]
				})
			},
		}
	}
</script>
<style scoped lang="scss">
	@import 'search.scss'
</style>
