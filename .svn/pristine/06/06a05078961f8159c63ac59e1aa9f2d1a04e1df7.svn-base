<template>
	<view class="content">
		<view class="refundDetailWarp">
			<view class="evaluateBox">
				<view class="shopeval uni-flex" v-for="(item,index) in evaluateArray" :key="index">
					<text>{{item.title}}</text>
					<view class="stars uni-flex">
						<evaluate-star :score="item.score" :index="index" @starNum="starsNum"></evaluate-star>
					</view>
				</view>
			</view>
			<view class="uni-textarea">
				<view class="uni-textarea-warp">
					<textarea maxlength="-1" v-model.trim="textareaTxt" placeholder="宝贝是否满足了您的期待？说说您的观点，分享给其他想购买的朋友吧" />
				</view>			
			</view>
			<view class="uploadImg">
				<view><text class="title">上传照片</text><text class="tip">(图片不能超过9张)</text></view>
				<view class="imgContent">
					<uni-upload-image :url="url" :file-list="fileList" :name="name" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove"></uni-upload-image>
				</view>			
			</view>
			<view class="uploadImg">
				<view><text class="title">上传视频</text><text class="tip">(视频不得超过60秒)</text></view>
				<view class="imgContent">
					<image class="upImg" src="/static/img/myorder/upload.png" @click="chooseVideo"></image>
				</view>			
			</view>
			<view class="anonymous uni-flex">
				<text>匿名评价</text>
				<view class="switch"><switch color="#00b600" @change="switchChange" :checked="isanonymous" /></view>
			</view>
			<view class="release uni-flex" @click="release"><text>发布</text></view>
		</view>
	</view>
</template>

<script>
	import evaluateStar from '@/components/evaluate-star/evaluate-star.vue'
	import uniUploadImage from '@/components/uni-upload-image/uni-upload-image.vue'
	export default {
		components:{
			evaluateStar,
			uniUploadImage
		},
		data() {
			return {
				order_id:0,
				evaluateArray:[{"title":"商品评价","score":0},{"title":"服务态度","score":0},{"title":"物流","score":0}],
				score:0,
				scores:0,
				scored:0,
				fileList: [],
				url: 'http://',
				name: 'file',
				isanonymous:true,
				textareaTxt:'',
			}
		},
		onLoad(option) {
			if (option.orderId) { //订单ID
				this.order_id = option.orderId;
			}else{
				uni.navigateBack();
			}
		},		
		methods: {
			starsNum:function(e){
				let obj = this.evaluateArray[e.index];
				this.$set(obj,"score",(parseInt(e.i+1)));
				if(e.index == 0){
					this.score = parseInt(e.i+1);
				}else if(e.index == 1){
					this.scores = parseInt(e.i+1);				
				}else if(e.index == 2){
					this.scored = parseInt(e.i+1);
				} 
			},
			onSuccess:function(res){
				if (res.code === 0) {
				  this.fileList.push(res.data.image_url)
				}
			},
			onError:function(){
				console.log(err)
			},
			onRemove:function(){
				this.fileList.splice(index, 1);
			},
			chooseVideo:function(){
				uni.hideKeyboard();
				 uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success:(res)=> {
						this.src = res.tempFilePath;
					}
				});
			},
			switchChange:function(e){
				uni.hideKeyboard();
				this.isanonymous = e.target.value;
			},
			release:function(){
				uni.hideKeyboard();
				if(this.score == 0){
					this.uniToast("请您对商品评分","");
					return false;
				}else if(this.scores == 0){
					this.uniToast("请您对服务态度评分","");
					return false;
				}else if(this.scored == 0){
					this.uniToast("请您对物流评分","");
					return false;
				}else if(this.textareaTxt == ''){
					this.uniToast("请您对该商品文字描述","");
					return false;
				}
				this.uniToast("提交评论成功","/static/img/myorder/anonymous.png");
				setTimeout(function(){uni.navigateBack();},2000);				
			},
			uniToast:function(title,img){
				uni.showToast({
					title: title,
					icon:"none",
					image:img,
					duration: 2000
				});
			}
		}
	}
</script>

<style scoped>
	@import "../../static/css/myorder.css";
	uni-page-body{width:100%;height:100%;background:white;}
</style>
