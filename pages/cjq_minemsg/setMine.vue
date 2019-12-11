<template>
<view>
     	<view class="main_view" @tap="setMineInfo">
     		  <view class="left_view">
     			   <!-- <view class="img_view" :style="[{'background-image':'url('+ image +')' }]" > -->
     			    <view  class="img_view">
     				  <image mode="widthFix" style="width:100%;height:100%"  src='http://192.168.1.140:5005/file/fapi/pic/ico/yh_05.png'/>
     			   </view>
     			   <text class="text_">修改个人资料</text>
     		  </view>
     		  <view class="right_view">
     			   <view class="right_jian">
     				   <image style="width:100%;height:100%" src="../../static/img/confirmation/addArrow.png" />
     			   </view>
     		  </view>
     	</view>
		<view class="main_view">
			<view class="left_view">
			     
			      <text class="text_">修改登录密码</text>
			</view>
			<view class="right_view">
			     	<view class="right_jian">
			     		<image style="width:100%;height:100%" src="../../static/img/confirmation/addArrow.png" />
			     	</view>
			</view>
		</view>
		<view class="main_view">
			 
			<view class="left_view">
			     
			      <text class="text_">清除缓存</text>
				  
			</view>
			<view class="txt_">22.20M</view>
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
        <view class="quit">退出登录</view>
</view>
</template>

<script>
export default {
    methods:{
		setMineInfo(){
			uni.navigateTo({
				url:'./index'
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
</style>