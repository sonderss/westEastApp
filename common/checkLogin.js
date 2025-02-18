 const $login = function() {
     let isLogin = null
    uni.getStorage({
        key: 'token',
        success: function (res) {
            console.log('找到token::',res)
               uni.getStorage({
                    key: 'expire',
                    success:function(res){
                        console.log(res)
                        var timestamp2 = res.data ;
                        var nowTime = Math.floor(new Date().getTime()/1000);
                        console.log(timestamp2,nowTime)
                        if(timestamp2 > nowTime){
                            console.log('未过期')
                        }else{
                            uni.navigateTo({
                                url: '/pages/auth/login/login1'
                            })
                        }
                    }
               })
             
            isLogin = true
        },
        fail:function (err) {
            console.log('未找到token：：', err)
            if(err.data === ''){
                uni.showToast({
                    icon:'none',
                    title:'未登录，请先登录',
                    duration:800
                })
               
                isLogin = false

            }
        }
    });
    if(!isLogin){
        setTimeout(() => {
            uni.hideToast()
            uni.navigateTo({
                url: '/pages/auth/login/login1'
            })
        }, 800)
        return
    }
    
}
export  default {
    $login
}
