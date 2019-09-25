<template>
	<view class="content">
		 <view class="login-form">
			<image class="logo" src="/static/img/auth/logo.png"></image>
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
					<input class="uni-input" :password="isType" type="text" v-model="password" placeholder="请输入验证码" />
					<view class="readCode"></view>
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
			}
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
					return false;
				}
				//请求数据
				//注册false //未注册是true
				this.isRegister = false;								
			},
			obtain:function(){
				uni.hideKeyboard();
				if(this.isRegister){ //获取验证码
					if(this.status) return false;
					this.status = true;
					this.veriTxt = '发送中';
					if(this.curr){ //成功
						var currentTime = Date.parse(new Date()) / 1000;
						var time = currentTime - currentTime;
						this.countDown(time);
					}else{
						this.veriTxt = '获取验证码';
						this.status = false;
					}
				}
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
				}else{
					if(!this.account){
						this.uniToast('手机号不能为空');
						return false;
					}
					if(!this.password){
						this.uniToast('密码不能为空');
						return false;
					}
				}
				this.$store.dispatch('save', {'token':'dkdfdjflkdjfkldjfkjdfkljd'});
				this.help.save('token','dkdfdjflkdjfkldjfkjdfkljd')
				uni.navigateBack();
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
			}
		}
	}
</script>

<style scoped>
	@import "../../../static/css/login.css";
	uni-page-body,.content{width:100%;height:100%;color:#686869;}
</style>
