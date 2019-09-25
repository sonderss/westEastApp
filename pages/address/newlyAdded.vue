<template>
	<view class="content">
		<view class="newlyBox">
			<view class="uni-flex newly-date">
				<text>收件人:</text>
				<input type="text" v-model.trim="addressInfo.name" placeholder="请输入收货人真实姓名" />
			</view>
			<view class="uni-flex newly-date">
				<text>手机号码:</text>
				<input type="number" v-model.trim="addressInfo.phone" placeholder="请输入收货人手机号码" />
			</view>
			<view class="uni-flex newly-date" @click="address">
				<text>所在地区:</text>
				<input class="where" type="text" disabled v-model.trim="addressInfo.city" placeholder="所在地区" />
				<image src="/static/img/address/newlyAddIcon.png"></image>
			</view>
			<view class="uni-flex newly-date">
				<text>详细地址:</text>
				<input type="text" v-model.trim="addressInfo.addDetail" placeholder="请输入收货人详细地址" />
			</view>
			<view class="uni-flex newly-date default">
				<text>设置成默认地址</text>
				<view class="switch"><switch color="#00b600" @change="switchChange" :checked="addressInfo.default" /></view>
			</view>
			<view class="uni-flex newly-date default dele" v-if="deleteAdd">
				<text class="del" @click="delAdd">删除收货地址</text>
			</view>
			<button class="btn" @click="preservation">保存</button>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="addressInfo.address_code" @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import {mapState} from 'vuex'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				themeColor: '#007AFF',
				addressInfo:{
					city:'',
					default:false,
					name:'',
					phone:'',
					addDetail:'',
					address_code: [0,0,0],
				},
				address_id:-1,
				deleteAdd:false,
			}
		},
		onBackPress(e){
			if (e.from === 'navigateBack') {  
				return false;  
			}
			if(this.address_id == -1){
				if(this.exitsVal){
					uni.showModal({
					    title: '提示',
					    content: '是否保存本次编辑结果？',
						cancelText:'不保存',
						confirmText:'保存',
						confirmColor:'#f00',
					    success: (res)=> {
					        if (res.confirm) {
					            this.preservation();
					        } else if (res.cancel) {
					           uni.navigateBack();
					        }
					    }
					});
					return true;
				}else{
					uni.navigateBack();
					return true;
				}					
			}
					
		},
		onLoad(option) {
			if(option.type == "add"){
				uni.setNavigationBarTitle({
					title: '添加收货地址'
				});
				this.deleteAdd = false;
			}else if(option.type == "edit"){
				uni.setNavigationBarTitle({
					title: '修改收货地址'
				});
				this.deleteAdd = true;
				this.address_id = option.addressid;
				this.addressInfo = this.editAddress;				
			}
			
		},
		computed:{
			exitsVal:function(){
				return Boolean(this.addressInfo.city) || Boolean(this.addressInfo.phone) || Boolean(this.addressInfo.addDetail) || Boolean(this.addressInfo.name) || Boolean(this.addressInfo.isDefault);
			},
			...mapState(['editAddress'])
		},
		methods: {
			address:function(){
				uni.hideKeyboard();
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm:function(e){
				console.log(e);
				//console.log(e.value);
				this.addressInfo.city = e.label;	
				this.cityPickerValueDefault = e.value;
			},
			switchChange:function(e){ //选中是true,未选中是false				
				//console.log(e.target.value);
				this.addressInfo.isDefault = e.target.value;
			},
			preservation:function(){
				uni.hideKeyboard();
				if(!this.addressInfo.name){
					this.uniToast("收件人姓名不能为空");
					return false;
				}
				if(!this.addressInfo.phone){
					this.uniToast("收件人电话不能为空");
					return false;
				}
				let myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!myreg.test(this.addressInfo.phone)){
					this.uniToast("收件人电话不正确");
					return false;
				}
				if(!this.addressInfo.city){
					this.uniToast("收件人所在地区不能为空");
					return false;
				}
				if(!this.addressInfo.addDetail){
					this.uniToast("收件人详细地区地区不能为空");
					return false;
				}
				uni.showLoading({
				    title: '地址正在提交中...',
					mask:true
				});
				console.log(this.addressInfo);
				let date = this.addressInfo;
			},
			delAdd:function(){
				uni.showModal({
				    content: '确定要删除该地址吗？',
					cancelText:'取消',
					confirmText:'删除',
					confirmColor:'#f00',
				    success: (res)=> {
				        if (res.confirm) {
							console.log("删除");
				        } else if (res.cancel) {
				            console.log("取消");
				        }
				    }
				});
			},
			uniToast:function(title){
				uni.showToast({
					title: title,
					icon:'none',
					duration: 1000
				});
			}
		}
	}
</script>

<style>
	@import "../../static/css/address.css";
</style>
