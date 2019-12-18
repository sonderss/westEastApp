
/* Function Info
 * Description: 操作判断登录处理
 */

export const checkLogin = {
	methods: {
		checkIsLogin() {
			uni.showToast({
				title: '请先登录!',
				icon: 'none',
				duration: 800,
				success: function(res) {
					// #ifdef H5 || APP-PLUS
					setTimeout(() => {
						uni.hideToast()
						uni.navigateTo({
							url: '/pages/auth/login/login1'
						})
					}, 800)
					// #endif
				}
			})
		}
	}
}

