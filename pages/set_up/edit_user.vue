<template>
	<view class="ed-content">
		<view class="info-form">
			<view class="uni-flex info-text">
				<text class="ed-text">账号</text>
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
		<view class="ed-next-but">
			<button id='ed-next-but' @click="onNext">下一步</button>
		</view>
	</view>
</template>
<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup,
		},
		data() {
			return {
				phone: '',
				codeTxt: ''
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
				uni.navigateTo({
					url: '/pages/set_up/new_account'
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
