<template>
	<view class="content">
		 <view class="login-form">
			<image class="logo" src="/static/logo.png"></image>
		 	<view class="form-item from-items">
		 		<image class="icon" src="/static/img/auth/phono.png"></image>
				<input class="uni-input" type="number" @blur="judge" v-model="account" placeholder="请输入手机号" /><!-- focus -->
		 	</view>
			<view v-if="isRegister">
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
					<input class="uni-input" :password="isAgainPass" type="text" v-model="againPass" placeholder="请重新输入密码" />
					<view @click="againSee">
						<image class="ispass" src="/static/img/auth/seeing.png" v-if="isAgainPass"></image>
						<image class="ispass1" src="/static/img/auth/noseeing.png" v-else></image>
					</view>
				</view>
			</view>
		 	<view class="form-item" v-if="translator">
		 		<image class="icon icon1" src="/static/img/auth/code.png"></image>
				<input class="uni-input" type="number" v-model="code" placeholder="请输入验证码" />
				<text class="huocode" @click="obtain">{{veriTxt}}</text>
				<view class="showCloseYzmTxt" v-if="showCloseYzmTxt"></view>
		 	</view>
			<view v-if="!translator">
				<view class="form-item">
					<image class="icon icon2" src="/static/img/auth/pass.png"></image>
					<input class="uni-input" :password="isType" type="text" v-model="password" placeholder="请输入密码" />
					<view @click="seeing">
						<image class="ispass" src="/static/img/auth/seeing.png" v-if="isType"></image>
						<image class="ispass1" src="/static/img/auth/noseeing.png" v-else></image>
					</view>
				</view>
				<view class="form-item">
					<image class="icon icon3" src="/static/img/auth/codeIcon.png"></image>
					<input class="uni-input"  type="text"  v-model="code" placeholder="不区分大小写" />
					<!-- <view class="readCode" @tap="getCaptcha"> -->
						<!-- <text style="font-size:12upx;color:#fff;">获取验证码</text> -->
						<image class="test" @tap='getCaptcha' style='width:180upx;height:80upx' :src='yanzhengma' alt='网络错误'/>
					<!-- </view> -->
				</view>
				<text class="forget" @click="pwd">忘记密码</text>
			</view>
		 	<view class="item-submit" v-if="!isRegister">
		 		<button id='submitBtn' @click="login">登录</button>
		 	</view>
			<view class="item-submit" v-if="isRegister">
				<button id='submitBtn' @click="submission">注册</button>
			</view>
			<text class="reg" @click="reg" v-if="translator">密码登录</text>
			<text class="reg" @click="phoneCode" v-else>手机验证码登录</text>
		 </view>
		 <view class="quick">
			 <image src="/static/img/auth/wxlogin.png"  @click="wxlogin"></image>
			 <text>微信登录</text>
		 </view>
	</view>
</template>

<script>
import { setInterval } from 'timers';
import request from '../../../apis/request'
import utils from '../../../common/util'
import api from '../../../apis/login'
	export default {
		data() {
			return {
				account: '',
				code: '',
				settPass:'',
				againPass:'',
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
				isPhone:Boolean//判断手机号是否正确
			}
		},
		mounted() {
			//初始化验证码
			api.getCode(this)
			//  uni.onNetworkStatusChange(function (res) {
			// 				console.log(res.isConnected);
			// 				console.log(res.networkType);
			// });
		},
		methods: {
			reg:function(){
				uni.hideKeyboard();
				this.translator = false;
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
			obtain: function(){
				uni.hideKeyboard();
				
				//这里是登录状态
				if(!this.isRegister){ //获取验证码
					//验证手机号真伪
					var is_phone = utils.is_phone(this.account) 
					if(!is_phone){
						this.uniToast('请输入正确格式的手机号')
						return false
					}
					 
					let data={
						phone:this.account,
						type:2 //2是登录
					}
					//获取短信验证码
					var that = this
					// api.GetVerifyCodeMsg(data,that)
				   api.test(data).then(res=>{
					   console.log(res)
					   if(res.statusCode === 200){
						   	if(res.data.status === 0){
								    uni.showToast({
										icon:'none',
										title: res.data.msg,
										duration: 2000
									});
								    that.num = 60 
									console.log(that.testYzm1)
									if(that.testYzm1){
											that.timer = setInterval(()=>{
												if(that.num === 0){
													that.veriTxt = '获取验证码'
													that.showCloseYzmTxt = false 
													clearInterval(that.timer) 
													that.testYzm1 = false  
												}else{
														that.num = that.num -1 
														that.veriTxt = '重新获取'+'('+ that.num +')' 
														that.showCloseYzmTxt = true 
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
					}).catch(()=>{
						uni.showToast({
								icon:'none',
								title: '网络错误，请检查后重试',
								duration: 2000
						});
						return
					})
					
				}
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
			login:function(){
				var that = this
				
				uni.hideKeyboard();
				if(this.translator){ //true是验证码登录，为false是密码登录
					if(!this.account){
						this.uniToast('手机号不能为空');
						return false;
					}
					if(!this.code){
						this.uniToast('验证码不能为空');
						return false;
					}
					//验证手机号真伪
					var is_phone = utils.is_phone(this.account) 
					if(!is_phone){
						this.uniToast('请输入正确格式的手机号')
						return false
					}
					let param = {
						phone:this.account,
						verifycode:this.code,
						codeKey:'',
						logtype:2,
						password:''
					}
					//短信验证码登录
					api.loginApi(param,this)
				}else{
					if(!this.account){
						this.uniToast('手机号不能为空');
						return false;
					}
					if(!this.password){
						this.uniToast('密码不能为空');
						return false;
					}
					if(!this.code){
						this.uniToast('验证码不能为空')
						return false
					}
					//验证手机号真伪
					var is_phone = utils.is_phone(this.account) 
					if(!is_phone){
						this.uniToast('请输入正确格式的手机号')
						return false
					}
					uni.getStorage({
						key: 'codekey',
						success: function (res) {
							that.codekey = res.data
						}
					});
				      
						let param = {
							phone:this.account,
							verifycode:this.code,
							codeKey:this.codekey,
							logtype:1,
							password:this.password
						}
					//登录
					api.loginApi(param,this)
					
				}
				//http://192.168.1.140:5000/api/Login/Login？phone=123&verifycode=abccc&logtype=1&password=123
				//调登录接口，判断是否存在该账号，若存在则登录，若不存在则给出未注册提示，并且isRegister为true   translator为false
				
				this.code = ''
				this.password = ''
				// this.$store.dispatch('save', {'token':'dkdfdjflkdjfkldjfkjdfkljd'});
				// this.help.save('token','dkdfdjflkdjfkldjfkjdfkljd')
				// uni.navigateBack();
			},
			submission:function(){
				uni.hideKeyboard();
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
				if(this.settPass != this.againPass){
					this.uniToast('两次密码输入不一致');
					return false;
				}
			},
			uniToast:function(title){
				uni.showToast({
					title: title,
					icon:'none',
					duration: 1000
				});
			},
			//获取验证码事件触发
			getCaptcha(){
				//获取验证码
				api.getCode(this)
				
			}
		}
	}
</script>

<style scoped>
	@import "../../../static/css/login.css";
	uni-page-body,.content{width:100%;height:100%;color:#686869;}
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
