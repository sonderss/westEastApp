<template>
<view class="content">
		 <view class="login-form">
			<image class="logo" src="/static/logo.png"></image>
		 	<view class="form-item from-items">
		 		<image class="icon" src="/static/img/auth/phono.png"></image>
				<input class="uni-input" type="number" @blur="judge" v-model="account" placeholder="请输入手机号" /><!-- focus -->
		 	</view>
			<view >
				<view class="form-item">
					<image class="icon icon2" src="/static/img/auth/pass.png"></image>
					<input class="uni-input" :password="isSettPass" type="text" v-model="settPass" placeholder="请设置密码" />
					<view @click="setSee">
						<image class="ispass" src="/static/img/auth/seeing.png" v-if="isSettPass"></image>
						<image class="ispass1" src="/static/img/auth/noseeing.png" v-else></image>
					</view>
				</view>
				<view class="form-item">
					<image class="icon icon2" src="/static/img/auth/pass.png"></image>
					<input class="uni-input"  type="text" v-model="againPass" placeholder="再次确认密码" />
					
				</view>
			</view>
		 	<view class="form-item" >
		 		<image class="icon icon1" src="/static/img/auth/code.png"></image>
				<input class="uni-input" type="number" v-model="code" placeholder="请输入验证码" />
				<text class="huocode" @click="obtain">{{veriTxt}}</text>
				<view class="showCloseYzmTxt" v-if="showCloseYzmTxt"></view>
		 	</view>
			
			
		 	
			<view class="item-submit" >
				<button id='submitBtn' @click="submission">注册</button>
			</view>
		
		 </view>
		 <view class="quick">
			 <image src="/static/img/auth/wxlogin.png"  @click="wxlogin"></image>
			 <text>微信登录</text>
		 </view>
	</view>
</template>

<script>

import { setInterval } from 'timers';
import api from '../../../apis/login'
import utils from '../../../common/util'
import register from '../../../apis/register'
	export default {
		data() {
			return {
				account: '',//手机号
				code: '',//验证码
				settPass:'',//设置密码
				againPass:'',//确认密码
				isRegister:false,
				veriTxt:"获取验证码",
				status : false,
				nextTime:60,
				password:'',
				isType:true,
				isSettPass:true,
				isAgainPass:true,
				translator:true, //为true是验证码登录，为false是密码登录
				num:Number, //计数值
				timer:'', //计时器
				testYzm1:true, //判断是否开启计时器
				showCloseYzmTxt:false,
				yanzhengma:'',
				codekey:'',
				nextTime:3,
				curr:true,
				isPhone:Boolean//判断手机号是否正确
			}
		},
		mounted() {
            //获取图形验证码
			// api.getCode(this)
		},
		methods: {
			reg:function(){
				uni.hideKeyboard();
				this.translator = false;
				
				// uni.navigateTo({
				// 	 url: '../reg/reg'
				// });
			},
			phoneCode:function(){
				uni.hideKeyboard();
				this.translator = true;
				
			},
			pwd:function(){
				uni.hideKeyboard();
				uni.navigateTo({
					url: '../pwd/pwd'
				});
			},
			judge:function(){
				let myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!this.account){
					this.uniToast('手机号不能为空');
					return false;
				}
				if(!myreg.test(this.account)){
					this.uniToast('手机号不正确');
					// this.isPhone = false
					return false;
				}
				//请求数据
			
				//注册false //未注册是true
				// this.isRegister = false;
			},
			obtain:function(){
				uni.hideKeyboard();
				
				
				
					//验证手机号真伪
					var is_phone = utils.is_phone(this.account) 
					if(!is_phone){
						this.uniToast('请输入正确格式的手机号')
						return false
					}
					let data={
						phone:this.account,
						type:1 // 注册
					}
					//获取短信验证码
					api.GetVerifyCodeMsg(data,this)
					api.test(data).then(res=>{
						if(res.statusCode === 200){
						   	if(res.data.status === 0){
								    uni.showToast({
										icon:'none',
										title: res.data.msg,
										duration: 2000
									});
								   	this.num = 60 
									if(this.testYzm1){
											this.timer = setInterval(()=>{
												if(this.num === 0){
													this.veriTxt = '获取验证码'
													this.showCloseYzmTxt = false 
													clearInterval(this.timer) 
													this.testYzm1 = false  
												}else{
														this.num = this.num -1 
														this.veriTxt = '重新获取'+'('+ this.num +')' 
														this.showCloseYzmTxt = true 
													}
											},1000)
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
			wxlogin:function(){
				uni.hideKeyboard();
				var self = this;
				uni.login({
					provider: "weixin",
					success: (res) => {
						uni.getUserInfo({
							provider: 'weixin',
							success: function (infoRes) {
								console.log(JSON.stringify(infoRes.userInfo));
								let formdata={
									nickName:infoRes.userInfo.nickName,
									gender:infoRes.userInfo.gender,
									openId:infoRes.userInfo.openId,
									unionId:infoRes.userInfo.unionId,
									avatarUrl:infoRes.userInfo.avatarUrl
								};
								//self.$go.post("/wxlogin",formdata).then(res=>{});
							}
						})
					},
					fail: (err) => {
						console.log(err)
					}
				});
			},
			seeing:function(){
				this.isType = !this.isType;
			},
			setSee:function(){
				this.isSettPass = !this.isSettPass;
			},
			againSee:function(){
				this.isAgainPass = !this.isAgainPass;
			},
			submission:function(){
                uni.hideKeyboard();
                var that = this
				var regu = "^[0-9a-zA-Z]{6,12}$";
				var re = new RegExp(regu); 
				if(!this.account){
					this.uniToast('手机号不能为空');
					return false;
				}
				if(!this.settPass){
					this.uniToast('设置密码不能为空');
					return false;
				}
				if(!this.againPass){
					this.uniToast('重新输入密码不能为空');
					return false;
				}
				if(!this.code){
					this.uniToast('验证码不能为空');
					return false;
				}
				if(!re.test(this.settPass) || !re.test(this.againPass)){
					this.uniToast('密码由6-12位数字和字母组成');
					return false;
				}
				if(this.settPass !== this.againPass){
					this.uniToast('两次密码输入不一致');
					return false;
                }
                //验证手机号真伪
					var is_phone = utils.is_phone(this.account) 
					if(!is_phone){
						this.uniToast('请输入正确格式的手机号')
						return false
					}
					//注册接口所需参数
					let param = {
						phone:that.account, //手机号
						password:that.settPass, //密码
						code:that.code, //验证码
					}
					register(param,this)
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

<style lang="scss" scoped>
	@import '../../../static/css/login.css';
	.showCloseYzmTxt{
		width: 220upx;
		height: 54upx;
		background: #fff;
		position: absolute;
		right: 0;
		padding:0 26upx;
		border-radius:27upx;
		opacity: 0.1;
	}
	.test{
		margin-bottom: 20upx;
		margin-left:20upx
	}
</style>