<template>
<view class="content">
	  <!-- 头部 物流信息 -->
	  <view class="top_view">
		  <view class="one">
			   <text>配送企业：</text>
			   <text>{{msg.name}}</text>
		  </view>
		  <view class="one">
		  		<text>快递单号：</text>
				<text>{{msg.num}}</text>
		  </view>
		  <view class="one">
		  		<text>联系电话：</text>
				<text>{{msg.phone}}</text>
		  </view>
	  </view>
	  <!-- 物流动态 -->
	  <view class="mid_view">
		 <view class="item_view">
			<setps :options="event_" direction="row" :active="1" active-color='#C17B7D'></setps>
		</view>
	  </view>
	 <!-- 物流签收信息 -->
	 <view class="btm_view">
		 <text class="title_">物流信息</text>
		<view class="item_view">
		  <setps :options="event_clom"    :active="0" direction="column" active-color='#C17B7D'></setps>
		</view>
	 </view>

</view>
</template>

<script>
import setps from '../../components/steps/steps.vue'
export default{
		components:{setps},
		data(){
			return{
				event_:[{title:'已发货'},{title:'运输中'},{title:'派件中'},{title:'已签收'}],
				event_clom:[{title:'您的订单已签收，期待再次为您服务',desc:'2017-04-01 12:00:00'},{title:'到达目的地网点广东广州公司，快件将很快进行派送',desc:'2017-04-01 12:00:00'},{title:'订单付款成功',desc:'2017-04-01 12:00:00'}],
				msg:{name:'顺丰快递',num:'56546531364152332',phone:'12345687'}
			}
		},
		methods:{
		}
}
</script>
<style lang="scss" scoped>
.content{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.top_view{
	width: 100%;
	height: 205upx;
	font-size: 30upx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;

}
.mid_view{
	width: 100%;
	height: 205upx;
	// // background: #F0AD4E;
	border-top:10upx solid #E5E5E5;
	border-bottom: 10upx solid #E5E5E5;
		display: flex;
		justify-content: center;
		align-items: center;
	.item_view{
		width: 96%;

	}

}
.btm_view{
	width: 100%;
    height: auto;

	display: flex;
	justify-content: center;
	flex-direction: column;
	
}
	
.item_view{
	width: 95%;
   height:auto;
   margin-left: 50upx;
}
	
.left_view{
	width: 25upx;
	height: 140upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: cenetr;
}
.cilr_{
	width: 25upx;
	height: 25upx;
	border-radius: 50%;
	background: #0f0;
}
	
.line_{
	width: 3upx;
	height: 100upx;
	background: #007AFF;
	margin:0 auto
}
	
.title_{
	width: 100%;
	display: block;
	padding-left: 20upx;
	margin: 20upx 0;
}
	
.one{
		margin-left:30upx;
}
</style>