<template>
	<view class="content">
		<view class="uni-flex box" style="margin-top:1rem">
			<image class="arrow" src="/static/img/auth/array.png" @click="noBack"></image>
			<text>找回密码</text>
		</view>
		<view class="login-form">
			<view class="tip uni-flex">
				<image src="/static/img/auth/tip.png"></image>
				<text>为确保是你本人操作，请完成验证</text>
			</view>
			<view class="form-item">
				<image class="icon" src="/static/img/auth/phono.png"></image>
				<input class="uni-input" type="number" focus v-model="account" placeholder="请输入手机号" />
			</view>
			<view class="form-item">
				<image class="icon icon1" src="/static/img/auth/code.png"></image>
				<input class="uni-input" type="number" v-model="code1" placeholder="请输入验证码" />
				<text class="huocode" @click="obtain">{{veriTxt}}</text>
			</view>
			<view class="form-item">
				<image class="icon icon2" src="/static/img/auth/pass.png"></image>
				<input class="uni-input" :password="newpass" type="text" v-model="newpassword" placeholder="请设置新密码" />
				<view @click="seeing">
					<image class="ispass" src="/static/img/auth/seeing.png" v-if="newpass"></image>
					<image class="ispass1" src="/static/img/auth/noseeing.png" v-else></image>
				</view>
			</view>
			<view class="form-item">
				<image class="icon icon2" src="/static/img/auth/pass.png"></image>
				<input class="uni-input" type="text" v-model="againpassword" placeholder="请重新设置密码" />
				<!-- <view @click="againsee">
					<image class="ispass" src="/static/img/auth/seeing.png" v-if="againpass"></image>
					<image class="ispass1" src="/static/img/auth/noseeing.png" v-else></image>
				</view> -->
			</view>
			<view class="item-submit">
				<button id='submitBtn' style="line-height:80upx" @click="submission">确定</button>
			</view>
		</view>
		<!-- <view class="quick">
			 <image src="/static/img/auth/wxlogin.png"  @click="wxlogin"></image>
			 <text>微信登录</text>
		</view> -->
	</view>
</template>

<script>
import api from '../../../apis/login'
import util from '../../../common/util'
	export default {
		data() {
			return {
				account:'',
				code1:'',
				newpassword:'',
				againpassword:'',
				veriTxt:"获取验证码",
				status : false,
				nextTime:60,
				curr:true,
				newpass:true,
				againpass:true,
			}
		},
		methods: {
			noBack(){
				uni.hideKeyboard();
				uni.navigateBack({
					delta: 1
				});
			},
			seeing:function(){
				this.newpass = !this.newpass;
			},
			againsee:function(){
				this.againpass = !this.againpass;
			},
			obtain:function(){
				let myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!this.account){
					this.uniToast('手机号不能为空');
					return false;
				}
				if(!myreg.test(this.account)){
					this.uniToast('手机号不正确');
					return false;
				}
				if(this.status) return false;
				this.status = true;
				let data ={
					phone:this.account,
					type:3 //忘记密码
				}
				// api.GetVerifyCodeMsg(data,this)
				api.test(data).then(res=>{
					 if(res.statusCode === 200){
						   	if(res.data.status === 0){
								    uni.showToast({
										icon:'none',
										title: res.data.msg,
										duration: 2000
									});
								    this.veriTxt = '发送中';
									if(this.curr){ //成功
										var currentTime = Date.parse(new Date()) / 1000;
										var time = currentTime - currentTime;
										this.countDown(time);
									}else{
										this.veriTxt = '获取验证码';
										this.status = false;
									}
							}else if(res.data.status === 3){
								// that.uniToast(res.data.msg)
								uni.showToast({
									icon:'none',
									title: res.data.msg,
									duration: 2000
								})
								
							}else{
								uni.showToast({
									icon:'none',
									title: '网络错误，请检查后重试',
									duration: 2000
								});
							}
					   }
					    if(res.statusCode === 500){
						    uni.showToast({
								icon:'none',
								title: '网络错误，请检查后重试',
								duration: 2000
							});
							return 
					   }
				})
				
				
			},
			countDown:function(time){
				time = time || this.nextTime;			
				this.clearTimer();
				var _this = this;
				this.timer = setInterval(function() {			
					if(time <= 0) {
						_this.veriTxt = "再次发送";
						_this.status = false;
						_this.clearTimer();
						return false;
					}					
					_this.veriTxt = time + 's';
					time--;			
				}, 1000);
			},
			clearTimer:function(){
				this.timer && clearInterval(this.timer);
			},
			submission:function(){
				if(!this.account){
					this.uniToast('手机号不能为空');
					return false;
				}
				if(!this.code1){
					this.uniToast('验证码不能为空');
					return false;
				}
				if(!this.newpassword){
					this.uniToast('设置新密码不能为空');
					return false;
				}
				if(!this.againpassword){
					this.uniToast('重新设置密码不能为空');
					return false;
				}
				// var regu = "^[0-9a-zA-Z]{6,12}$"
				// var re = new RegExp(regu); 
				// if(!re(this.newpassword) || !re(this.againpassword)){
				// 	this.uniToast('密码由6-12位数字和字母组成');
				// 	return false;
				// }
				// if(this.newpassword != this.againpassword){
				// 	this.uniToast('两次输入的密码不一致');
				// 	return false;
				// }
				var isphone = util.is_phone(this.account)
				console.log(isphone)
				if(!isphone){
					this.uniToast('请输入正确的手机号')
					return false
				}
				if(this.newpassword !== this.againpassword){
					this.uniToast('请确保两次密码一致')
					return false
				}
				//请求数据
				let data={
					Phone:this.account,
					Password:this.newpassword,
					Code:this.code1,
					type:2
				}
				api.setPassword(data,this)
			},
			uniToast:function(title){
				uni.showToast({
					title: title,
					icon:'none',
					duration: 1000
				});
			},
		}
	}
</script>

<style scoped>
	@import "../../../static/css/login.css";
	uni-page-body,.content{width:100%;height:100%;overflow:hidden;}
</style>
