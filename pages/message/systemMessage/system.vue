<template>
<view style="overflow:hidden;">
	 <view v-if="!isShowLoading">
		 <view class="main uni-flex uni-column" v-for="(item,index) in list " :key="index">
			  <view class="title_top uni-flex">
				  <text class="title">{{item.title}}</text>
				  <text class="date">{{item.date}}</text>
			  </view>
			  <view class="con_tent">
				  <text>{{item.content}}</text>
			  </view>
			  
		 </view>
	 </view>
	 <view class="show_404" v-if="show_404">
	   <image src="../../../static/img/message/kong.png" mode="widthFix" style="width: 50px;height:50px"/>
	   <text>数据没有呀</text>
	   <button type="warn" size="mini" style="margin-top:15upx">重新加载</button>
	 </view>
	 <loading v-if="isShowLoading" backgroundColor="#fafafa"></loading>
</view>
</template>

<script>
	import loading from "../../../edith_components/tui-skeleton/tui-skeleton";
	export default{
		components:{loading},
		data(){
			return{
				isShowLoading:false,
				show_404:null,
				list:[
					{
						title:'整装优惠活动暂时下线公告',
						date:'2019/10/15 12:00',
						content:'尊敬的用户，为了给您带来更好的体验,整装优惠活动业务将于2019年12月26日22:00-2019年12月27日09:00期间进行系统升级，升级期间整装优惠活动入口将暂时下线。给您带来的不便，敬请谅解。感谢您一如既往的支持。'
					},
					{
						title:'整装优惠活动暂时下线公告',
						date:'2019/10/15 12:00',
						content:'尊敬的用户，为了给您带来更好的体验,整装优惠活动业务将于2019年12月26日22:00-2019年12月27日09:00期间进行系统升级。'
					}
				]
			}
		},
		onLoad() {
			this.isShowLoading = true
		},
		mounted() {
			setTimeout(()=>{
				if(this.list.length != 0){
					this.isShowLoading = false
					this.show_404 = false
				}else{
					this.isShowLoading = false
					this.show_404 = true
				}
			},1500)
		}
	}
</script>

<style lang="scss" scoped>
.main{
	width: 100%;
	height: auto;
	border-bottom:6upx solid #EEEEEE;
	padding: 20upx 0 40upx 0;
	overflow: hidden;
	.title_top{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		.title{
			font-size:30upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(42,42,42,1);
		}
		.date{
			font-size:24upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(42,42,42,1);
			opacity:0.5;
			line-height:90upx;
			padding-right:  40upx;
		}
	}
	.con_tent{
		width: 100%;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(42,42,42,1);
		line-height:46upx;
		opacity:0.7;
		display: flex;
		justify-content: center;
		text{
			width: 98%;
			margin: 0 auto;
		}
	}
}
.show_404 {
  width: 100%;
  height: 400upx;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30upx;
}
</style>
