 const $login = function() {
    uni.getStorage({
        key: 'token',
        success: function (res) {
            console.log(res)
            return true
        },
        fail:function (err) {
            console.log(err)
            if(err.data === ''){
                uni.showToast({
                    icon:'none',
                    title:'未登录，请先登录',
                    duration:800
                })
                setTimeout(() => {
                    uni.hideToast()
                    uni.navigateTo({
                        url: '/pages/auth/login/login1'
                    })
                }, 800)
                return false;
            }
        }
    });
}
export  default {
    $login
}
