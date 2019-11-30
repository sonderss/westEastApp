import request from '../request'
//获取用户信息
const getUserInfo = ()=>{
    let opts = {
        url:'/fapi/UserManage/GetUserInfo',
        method:'get'
    }
    request.httpTokenRequest(opts).then(res=>{
        console.log(res)
       
    })
}
//通过微信登录/api/Login/WxLogin
const wxlogin_ = (data,that)=>{
    let opts = {
        url:'/identity/Login/WxLogin',
        method:'get'
    }
    // console.log(that)
    let test = {
        openid:JSON.parse(data).openId
    }
    // console.log(JSON.parse(data))
    uni.showLoading({
        title: '加载中...'
    });
     request.httpRequest(opts,test).then(res=>{
    //  console.log(res)
    //  console.log(that)
         if(res.statusCode === 200){
            // console.log(1232321313313)
            // console.log(that)
            uni.hideLoading();
            if(res.data.status === 10002){
                uni.showToast({
                     icon:'none',
                     title:res.data.msg,
                     duration:1500
                 })
                setTimeout(()=>{
                    uni.navigateTo({
                        url:'/pages/auth/login/wxphone?data='+data
                    })
                },1500)
            }else if(res.data.status === 0){
                // console.log(1232321313313)
                    uni.showToast({
                        icon:'loading',
                        title:res.data.msg,
                        duration:1500
                    })
                    // console.log(1232321313313)
                    // console.log(that)
                    that.$store.dispatch('save', {'token':res.data.data.token});
                    that.help.save('token',res.data.data.token)
                    // console.log(1232321313313)
                    uni.setStorage({
                    key: 'token',
                    data: res.data.data.token,
                    success: ()=>{
                        console.log('success login');
                        
                    }
                    
                });
                uni.hideKeyboard();
                
                    setTimeout(() => {
                        uni.switchTab({
                            url:'../../index/index'
                        });
                    }, 1500);
                  
              
            }else{
                uni.hideLoading();
                uni.showToast({
                    icon:'none',
                    title:'系统繁忙,请稍后重试',
                    duration:2000
                })
            }

         }else{
             uni.showToast({
                 icon:'none',
                 title:'网络错误,请检查网络后重试',
                 duration:2000
             })
         }
         
     })
}
//绑定微信手机号
const wx_phone = (data,that)=>{
    // //api/Login/RegisterUser
    let opts ={
        url:'/identity/Login/RegisterUser',
        method:"post"
    }
    uni.showLoading({
        title: '加载中'
    });
    request.httpRequest(opts,data).then(res=>{
        console.log(res)
        if(res.statusCode === 200){
            uni.hideLoading();
            if(res.data.status === 0){
                uni.showToast({
                    icon:'none',
                    title:res.data.msg,
                    duration:1500
                })
                that.$store.dispatch('save', {'token':res.data.data.token});
                that.help.save('token',res.data.data.token)
                uni.setStorage({
                key: 'token',
                data: res.data.data.token,
                success: function () {
                    console.log('success login');
                        
                    }
                });
                uni.hideKeyboard();
                that.focus_num = ''
                setTimeout(() => {
                    uni.switchTab({
                        url:'../../index/index'
                    });
                }, 1500);
            }
            if(res.data.status === 2){
                    uni.showToast({
                        icon:'none',
                        title:res.data.msg,
                        duration:1500
                    })
                    that.num1 = ''

                    that.num2 = ''
                    that.num3 = ''
                    that.num4 = ''

                    // setTimeout(()=>{
                    //     uni.navigateTo({
                    //         url:'/pages/auth/login/wxphone?data='+data
                    //     })
                    // },1500)
            }
            if(res.data.status === 3){
                     uni.showToast({
                         icon:'none',
                         title:res.data.msg,
                         duration:2000
                     })
                     
            }
        }else{
            uni.showToast({
                icon:'none',
                title:'网络错误,请检查后再试',
                duration:2000
            })
        }
    })
}

// 判断手机号是否注册
const is_Phone_reg = (data,that)=>{
    let opts = {
        url:'/identity/Login/ExsisPhone',
        method:'get'
    }
    uni.showLoading({
        title: '加载中'
    });
    request.httpRequest(opts,data).then(res=>{
        uni.hideLoading()
        if(res.statusCode === 200){
            if(res.data.status === 10001){
                uni.showToast({
                    icon:'none',
                    title:res.data.msg,
                    duration:2000
                })
                uni.hideKeyboard();
                setTimeout(()=>{
                    uni.navigateTo({
                        url:'../login/login1'
                    })
                },2000)
                
            }else if(res.data.status === 0){
                uni.showToast({
                    icon:'loading',
                    title:'加载中',
                    duration:1500
                })
                setTimeout(()=>{
                    uni.navigateTo({
                        url:'../login/send?phone='+that.phone+'&isSetPsd='+0
                   })
                },1500)
               
            }


        }else{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:'网络错误,请检查网络后重试'
            })
        }
    })
}
export default {
    getUserInfo,
    wxlogin_,
    wx_phone,
    is_Phone_reg
}