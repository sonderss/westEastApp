<template>
<view>
     	<view class="main_view" @tap="setMineInfo">
     		  <view class="left_view1">
     			   <!-- <view class="img_view" :style="" > -->
					<view  class="img_view123"  :style="{backgroundImage: 'url(' + (imgSrc ? imgSrc : '../../static/img/myself/18.png' ) + ')' }"> 
						<!-- <image mode="widthFix" style="width:100%;height:100%"  :src="data.headPic?data.headPic : '../../static/img/xi2x.png' "/> -->
					</view>
					<text class="text_">修改个人资料</text>
     		  </view>
     		  <view class="right_view">
     			   <view class="right_jian">
     				   <image style="width:100%;height:100%" src="../../static/img/confirmation/addArrow.png" />
     			   </view>
     		  </view>
     	</view>
		<view class="main_view" @tap="setPwd">
			<view class="left_view">
			     
			      <text class="text_">修改登录密码</text>
			</view>
			<view class="right_view">
			     	<view class="right_jian">
			     		<image style="width:100%;height:100%" src="../../static/img/confirmation/addArrow.png" />
			     	</view>
			</view>
		</view>
		<view class="main_view" @tap='clearCach'>
			 
			<view class="left_view">
			     
			      <text class="text_">清除缓存</text>
				  
			</view>
			<view class="txt_">{{cachSize1}}</view>
			<view class="right_view" >
				   
			     	<view class="right_jian">
			     		<image style="width:100%;height:100%" src="../../static/img/confirmation/addArrow.png" />
			     	</view>
			</view>
		</view>
     	<view class="main_view">
     		<view class="left_view">
     		     
     		      <text class="text_">当前版本</text>
     			  
     		</view>
     		 <view class="txt_" style="">V1.0.0</view>
			 <view class="right_view" > 
			     <view class="right_jian"></view>
			 </view>
     	</view>
        <view class="quit" @tap='quit'>退出登录</view>
		<img :src='test'>
</view>
</template>

<script>
export default {
	data(){
		return{
			data:'',
			imgSrc:'',
			cachSize1:'0KB'
		}
	},
	onBackPress(e){
		uni.switchTab({
				url: '/pages/myself/myself'
			});
			return true
	},
	
	mounted(){
		this.data = this.$store.state.userMsg
		this.imgSrc = this.data.headPic
		// console.log(this.data)
		// uni.getStorageInfo({
		// 	success: function (res) {
		// 		console.log(res.keys);
		// 		console.log(res.currentSize);
		// 		console.log(res.limitSize);
		// 	}
		// });
		var that = this
		// #ifdef  APP-PLUS
			plus.cache.calculate( function ( size ) {
				 if(size<1024){
					 that.cachSize1=size+'B'; 
				 }  
				 else if(size/1024>=1 && size/1024/1024<1){
					  that.cachSize1= Math.floor(size/1024*100)/100+'KB';
				 }
				else if(size/1024/1024>=1){
		             that.cachSize1=Math.floor(size/1024/1024*100)/100+'M';
				}
		 	})
		// #endif
	},
	onShow(){
		this.getUesrInfo()
	
	},
	computed:{
		getCatchSize(){
			let cachSize = '0KB'
			 return cachSize
		},
		test(){
			
			if(this.$store.state.userMsg.headPic){
				// a = this.$store.state.userMsg.headPic
				this.imgSrc = this.$store.state.userMsg.headPic
			}
			// return a 
		}
		
	},
	// onLoad(){
	// 	this.data = this.$store.state.userMsg
	// 	this.imgSrc = this.data.headPic
	// },
    methods:{
		setMineInfo(){
			uni.navigateTo({
				url:'./index'
			})
		},
		setPwd(){
			uni.navigateTo({
				url: '../set_up/edit_login_pwd'
			})
		},
		quit(){
			var that = this
			var tokenIs = ''
			uni.getStorage({
				key: 'token',
				success: function (res) {
					// console.log(res.data);
					tokenIs = res.data
				}
			});
			if(tokenIs){
					uni.showModal({
							title: '退出登录',
							content: '真的要退出登录吗？',
							success: (res)=> {
									if (res.confirm) {
										uni.removeStorage({
											key: 'token',
												success:(res)=>{
														console.log('success');
												}
										});
												//应该给出提示
											that.$store.dispatch('clear','token')
											uni.removeStorage({
												key: 'expire',
												success: function (res) {
													console.log('expire success');
												}
											});
											uni.showLoading({
												title:'退出中...'
											})
											setTimeout(()=>{
												uni.hideLoading()
												uni.showToast({
													icon:'none',
													title:'退出成功',
													duration:2000
												})
											},1500)
											setTimeout(()=>{
												uni.switchTab({
													url:'../myself/myself'
												});
												
											},2100)
										}else if (res.cancel) {
												console.log('用户点击取消');
										}
							}
					});
						
					}else{
						uni.showToast({
							icon:'none',
							title: '请先登录',
							duration: 2000
						})
						setTimeout(() => {
							uni.navigateTo({
								url:'../../pages/auth/login/login1'
							})
						}, 1500);
					}
		},
		getUesrInfo(){
			this.data = this.$store.state.userMsg
			this.imgSrc = this.data.headPic
			// console.log('监听状态变化：：：',this.data)
		},
		clearCach(){
			var that = this
				//  //可以询问用户是否删除
             	  uni.showModal({
             	  	title:'提示',
             	  	content:'确定清除缓存吗?',
             	  	success(res) {
             	  	   // 用户确定要删除
						if(res.confirm){
						   //使用plus.cache.clear 清除应用中的缓存数据 
						    // #ifdef  APP-PLUS
							plus.cache.clear( function () {
								plus.cache.calculate( function ( size ) {
												if(size*1 > 0){
													uni.showToast({
														icon:'none',
														title:'清除失败',
														duration:800
													})
													if(size<1024){
														that.cachSize1=size+'B'; 
													}  
													else if(size/1024>=1 && size/1024/1024<1){
														that.cachSize1= Math.floor(size/1024*100)/100+'KB';
													}
													else if(size/1024/1024>=1){
														that.cachSize1=Math.floor(size/1024/1024*100)/100+'M';
													}
												}else{
													uni.showToast({
														icon:'none',
														title:'清除成功',
														duration:800
													})
													that.cachSize1=size+'KB';
												}
								})
										
							});
							// #endif
						}
             	  	}
             	  })
		}
	}
}
</script>
<style lang="scss" scoped>
  @import 'index.scss';
  .setPasswprd{
	  width: 100%;
	  height: 120upx;
	  border-bottom: 1upx solid #D2D2D2;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  .set_left{
		  flex: 1;
		  margin-left:40upx;
		  font-size: 30upx;
	  }
	  .op{
		  margin-right: 50upx;
	  }
  }
  .quit{
	  width:624upx;
	  height:89upx;
	  background:rgba(193,123,125,1);
	  border-radius:10upx;
	  margin: 50upx auto;
	  color: #fff;
	  text-align: center;
	  line-height: 89upx;
	  font-size:30upx;
	  font-family:PingFang SC;
	  font-weight:500;
	  color:rgba(255,255,255,1);
  }
  .img_view123{
	  width:93upx;
	  height: 93upx;
	
	  background-repeat: no-repeat;
	  background-size: cover;
	  border-radius: 50%;

  }
</style>