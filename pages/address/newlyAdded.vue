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
				<input class="where" type="text" disabled v-model.trim="addressInfo.area" placeholder="所在地区" />
				<image src="/static/img/address/newlyAddIcon.png"></image>
			</view>
			<view class="uni-flex newly-date">
				<text>详细地址:</text>
				<input type="text" v-model.trim="addressInfo.address" placeholder="请输入收货人详细地址" />
			</view>
			<view class="uni-flex newly-date default">
				<text>设置成默认地址</text>
				<view class="switch"><switch color="#00b600" @change="switchChange" :checked="addressInfo.isDefault" /></view>
			</view>
			<view class="uni-flex newly-date default dele" v-if="deleteAdd">
				<text class="del" @click="delAdd">删除收货地址</text>
			</view>
			<button class="btn" v-if="set" @click="preservation">保存</button>
			<button class="btn" v-if="!set"  @click="postAdd">提交</button>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker"  @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import {mapState} from 'vuex'
	import uapi from '../../apis/user/user'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				themeColor: '#007AFF',
				addressInfo:{
					area:'',
					isDefault:false,
					name:'',
					phone:'',
					address:'',
					id:''
				},
				address_id:-1,
				deleteAdd:false,
				set:true
			}
		},
		onBackPress(e){
			
					
		},
		onLoad(option) {
			if(option.type == "add"){
				uni.setNavigationBarTitle({
					title: '添加收货地址'
				});
				this.deleteAdd = false;
				this.set = false
			}else if(option.type == "edit"){
				// console.log(JSON.parse(option.data)[option.index])
				uni.setNavigationBarTitle({
					title: '修改收货地址'
				});
				this.deleteAdd = true;
				this.set = true
				this.address_id = option.addressid;
				this.addressInfo = JSON.parse(option.data)[option.index]
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
				this.addressInfo.area = e.label;	
				this.cityPickerValueDefault = e.value;
			},
			switchChange:function(e){ //选中是true,未选中是false				
				// console.log(e.target.value);
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
				if(!this.addressInfo.area){
					this.uniToast("收件人所在地区不能为空");
					return false;
				}
				if(!this.addressInfo.address){
					this.uniToast("收件人详细地区地区不能为空");
					return false;
				}
				// uni.showLoading({
				//     title: '地址正在提交中...',
				// 	mask:true
				// });
				let param = {
					Id:this.addressInfo.id,
					Name:this.addressInfo.name,
					Area:this.addressInfo.area,
					Address:this.addressInfo.address,
					Phone:this.addressInfo.phone,
					IsDefault:this.addressInfo.isDefault
				}
				//这里是修改该收获地址信息
				// console.log(param)
				uapi.saveReceivAddress(param,this)
				// console.log(this.addressInfo);
				// let date = this.addressInfo;
			},
			delAdd(){
				var that = this
				uni.showModal({
				    content: '确定要删除该地址吗？',
					cancelText:'取消',
					confirmText:'删除',
					confirmColor:'#f00',
				    success: (res)=> {
				        if (res.confirm) {
							console.log("删除");
							// console.log(that.addressInfo.id)
							let param = {
								id:that.addressInfo.id
							}
							//删除该收获地址
							uapi.deleteReceivAddress(param,that)
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
			},
			postAdd(){
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
				if(!this.addressInfo.area){
					this.uniToast("收件人所在地区不能为空");
					return false;
				}
				if(!this.addressInfo.address){
					this.uniToast("收件人详细地区地区不能为空");
					return false;
				}
				let param = {
					Name:this.addressInfo.name,
					Area:this.addressInfo.area,
					Address:this.addressInfo.address,
					Phone:this.addressInfo.phone,
					IsDefault:this.addressInfo.isDefault
				}
				//这里是添加新的地址
				// console.log(param)
				uapi.saveReceivAddress(param,this)
			}
		}
	}
</script>

<style>
	@import "../../static/css/address.css";
</style>
