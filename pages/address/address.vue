<template>
	<view class="content">
		<view class="addressBox">
			<view v-if="address.length<=0 ? false : true">
				<block v-for="(item,index) in address" :key="index">
					<view class="addressContent">
						<view class="addressInfo" @tap='goBack(index)'><text>{{item.name}}</text><text class="phone">{{item.phone}}</text></view>
						<view class="addressDetail" @tap='goBack(index)'><text class="default" v-if="item.isDefault"  style="color:#C17B7D">默认</text><text>{{item.area+item.address}}</text></view>
						<view class="edit uni-flex" @click="edit(index)"><text>编辑</text></view>
					</view>
				</block>
			</view>
			<view v-if="address.length<=0 ? true : false" class="null_data">
				<text class="null_text">暂时没有收货地址~</text>
			</view>
			<button class="btn addAddress"  @click="addAddress">添加地址</button>
		</view>
	</view>
</template>

<script>
	// import {mapState} from 'vuex'
	import uapi from '../../apis/user/user'
	export default {
		data() {
			return {
				address:[],
				isBuyInfo:''//提交订单页标识
			}
		},
		computed:{
			// ...mapState(['editAddress'])
		},
		onLoad(option){
			this.isBuyInfo = option.isBuyInfo
			uni.showLoading({
				title:'加载中'
			})
		},
		mounted(){
			//获取用户地址
			uapi.getReceivAddress(this)
		},
		methods: {
			       	
			goBack(index){
					if(this.isBuyInfo === '0'){
							let pages = getCurrentPages();
							let nowPage = pages[ pages.length - 1]; 
							let prevPage = pages[ pages.length - 2 ];  
							prevPage.$vm.myAdress = index; 
							uni.navigateBack({  
								delta: 1
							});
					}
 					
			},
			addAddress:function(){
				uni.navigateTo({
				    url: 'newlyAdded?type=add'
				});
			},
			edit:function(index){
				// this.$store.dispatch("save",{'editAddress':address});
				uni.navigateTo({
				    url: 'newlyAdded?type=edit&index='+index+'&data='+JSON.stringify(this.address)
				});
			}
		}
	}
</script>

<style>
	@import "../../static/css/address.css";
	uni-page-body,.content{background:#f1f1f1;width:100%;height:100%;overflow: auto}
	.null_data{
		width: 100%;
		height: 600upx;
		background-image: url('../../static/img/sendindex/notalk.png');
		background-repeat:no-repeat; 
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.null_text{
		margin-top: 400upx
	}
</style>
