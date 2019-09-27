<template>
	<view class="ed-content">
		<view class="info-form">
			<view class="uni-flex info-text">
				<text class="ed-text">新账号</text>
				<input v-model="phone" @blur="judge" type="number" placeholder="请输入手机号" />
			</view>
		</view>
		<view class="info-form">
			<view class="uni-flex info-text">
				<text class="ed-text">验证码</text>
				<input v-model="codeTxt" type="number" placeholder="请输入验证码" />
				<text class="huocode" @click="onCode">获取验证码</text>
			</view>
		</view>
		<view class="info-form">
			<view class="uni-flex info-text">
				<text class="ed-text">设置密码</text>
				<input v-model="user_pwd" @blur="judge" type="text" placeholder="请设置账户密码" />
			</view>
		</view>
		<view class="info-form">
			<view class="uni-flex info-text">
				<text class="ed-text">确认密码</text>
				<input class="" v-model="user_pwd" @blur="judge" type="text" placeholder="请确认账户密码" />
			</view>
		</view>
		<view class="ed-next-but">
			<button id='ed-next-but' @click="onNext">确定</button>
		</view>
	</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				phone: '',
				codeTxt: '',
				user_pwd: ''
			}
		},
		methods: {
			onCode() {
				if (!this.phone) {
					this.uniToast('手机号不能为空');
				}
			},
			onNext() {
				this.judge();
				if (!this.phone) {
					this.uniToast('手机号不能为空');
					return false;
				}
				if (!this.codeTxt) {
					this.uniToast('验证码不能为空');
					return false;
				}
				if (!this.user_pwd) {
					this.uniToast('账户密码不能为空');
					return false;
				}
				this.cancel()

			},
			cancel: function(order_id, index) {
				uni.showModal({
					title: '提示',
					content: '修改账号成功,请重新登录',
					confirmText: '确定',
					confirmColor: '#f00',
					showCancel: false
				});
			},
			judge: function() {
				let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if (!this.phone) {
					this.uniToast('手机号不能为空');
					return false;
				}
				if (!myreg.test(this.phone)) {
					this.uniToast('手机号不正确');
					return false;
				}
			},
			uniToast: function(title) {
				uni.showToast({
					title: title,
					icon: 'none',
					duration: 1000
				});
			}
		}
	}
</script>
<style>
	@import url("../../static/css/edit_data");

	.huocode {
		color: red;
		font-size: 25upx;
		background: #fff;
		height: 70upx;
		line-height: 70upx;
		padding: 0 26upx;
		border-radius: 8upx;
		border: 1px solid red;
	}

	.ed-next-but {
		padding: 0 20upx;
	}

	button {
		border-radius: 50upx;
		background: red;
		font-size: 34upx;
		color: #fff;
		margin-top: 80upx;
	}

</style>
