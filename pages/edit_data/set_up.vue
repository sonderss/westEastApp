<template>
	<view class="uni-container">
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon">&#xe470;</text>
			</view>
		</view>
		<view class="btn"> 
			 <button style="background:none;height:80upx;color: #fff" @tap='btn'>退出账号</button>
		</view>
		
	</view>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
	export default {
		data() {
			return {
				navigateFlag: false,
				lists: [{
						name: "修改账户",
						url: "edit_user"
					},
					{
						name: "修改登录密码",
						url: "edit_login_pwd"
					},
					{
						name: "绑定手机",
						url: "phone"
					},
				],
				showToast:false
			};
		},
		onLoad(){
		
		},
		computed:{
			...mapState(['token'])
		},
		onReady() {},

		methods: {
			goDetailPage(path) {
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				uni.navigateTo({
					url: '/pages/set_up/' + path
				});
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			},
			btn(){
			
				var that = this
		
					if(that.$store.state.token){
								uni.showModal({
										title: '退出登录',
										content: '真的要退出登录吗？',
										success: (res)=> {
											if (res.confirm) {
												uni.removeStorage({
													key: 'token',
													success:(res)=>{
														console.log('success');
													}
												});
												//应该给出提示
												that.$store.dispatch('clear','token')
												
											}else if (res.cancel) {
												console.log('用户点击取消');
											}
										}
								});
						
					}else{
						uni.showToast({
							icon:'none',
							title: '请先登录',
							duration: 2000
						})
						setTimeout(() => {
							uni.navigateTo({
								url:'../../pages/auth/login/login1'
							})
						}, 1500);
					}
					

			}
		}
	}
</script>

<style>
	page {
		min-height: 100%;
		height: auto;
	}
	.uni-icon {
		font-family: uniicons;
		font-weight: normal;
	}

	.uni-container {
		/* padding: 15px 0 0 0; */
		background-color: #fff;
	}

	.uni-panel {
		height: 104upx;
		/* margin-bottom: 12px; */
	}

	.uni-panel-h {
		background-color: #ffffff;
		flex-direction: row;
		align-items: center;
		height: 100upx;
		padding: 0upx 25upx;
		border-bottom: 1px solid #dcdcdc;
		display: flex;
		justify-content: space-between;
	}

	.uni-panel-text {
		flex: 1;
		color: #000000;
		font-size: 14px;
		font-weight: normal;
	}

	.uni-panel-icon {
		margin-left: 15px;
		color: #999999;
		font-size: 14px;
		font-weight: normal;
		transform: rotate(0deg);
		transition-duration: 0s;
		transition-property: transform;
	}

	.uni-navigate-text {
		flex: 1;
		color: #000000;
		font-size: 14px;
		font-weight: normal;
	}

	.uni-navigate-icon {
		margin-left: 15px;
		color: #999999;
		font-size: 14px;
		font-weight: normal;
	}
	.btn{
		width:70%;
		height: 80upx;
		background: #ff5555;
		margin: 20upx auto;
		border-radius: 10upx;
		
	}
</style>
