<template>
<view style="overflow:hidden">
	 <view v-if="!isShowLoading">
		 <view class="main_hudong uni-flex" v-for="(item,index) in list " :key="index">
			  <view class="left_main_view uni-flex">
					<view  style="width:74upx;height: 74upx;">
					  <image style="width: 100%;height: 100%;" :src='item.head_pic'/>
					</view>
					<view class="right_view uni-flex uni-column">
						<text class="name">{{item.name}}</text>
						<text class="name">{{item.set}}了您的作品</text>
						<text class="time">{{item.time}}</text>
					</view>
			  </view>
			  <view class="right_main_view">
				  <image style="width:100%;height: 100%;" :src='item.img'/> 
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
				isShowLoading:true,
				show_404:null,
				list:[{
					img:'../../../static/img/cjq-about/pcik.png',
					head_pic:'../../../static/img/cjq-about/06.png',
					name:'张三',
					set:'评论',
					time:'15:29'
				},
				{
					img:'../../../static/img/cjq-about/pcik.png',
					head_pic:'../../../static/img/cjq-about/02.png',
					name:'李三',
					set:'点赞',
					time:'15:29'
				},
				{
					img:'../../../static/img/cjq-about/pcik.png',
					head_pic:'../../../static/img/cjq-about/05.png',
					name:'王三',
					set:'转发',
					time:'15:29'
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
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
.main_hudong{
	width: 100%;
	height: 180upx;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1upx solid #e8e8e8;
	.left_main_view{
		width: auto;
		height: 142upx;
		margin-left: 40upx;
		.right_view{
			margin-left: 20upx;
			justify-content: space-between;
			.name{
				font-size:30upx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(42,42,42,1);
			}
			.time{
				font-size:24upx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(42,42,42,1);
				opacity:0.5;
			}
		}
	}
	.right_main_view{
		width: 142upx;
		height: 142upx;
		margin-right: 40upx;
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
