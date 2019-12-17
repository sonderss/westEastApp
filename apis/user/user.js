import request from '../request'

//获取用户信息
const getUserInfo = (that)=>{
    let opts = {
        url:'/fapi/UserManage/GetUserInfo',
        method:'get'
    }
    request.httpTokenRequest(opts).then(res=>{
        if(res.statusCode === 200){
            uni.hideLoading()
            // console.log(res)
            if(res.data.status === 0){
                // console.log(res.data.data)
								//  console.log('调用vuex')
									// console.log(res.data.data);
                  that.$store.commit("getUserMsg",res.data.data)
                // uni.setStorage({
                //     key: 'userInfo',
                //     data: res.data.data,
                //     success: function () {
                //         console.log('用户信息本地暂存');
                //     }
                // });
				// var a = that.$store.state.userMsg
				//  console.log(a)
				// if(res.data.data.head_pic.indexOf("http") === -1){
				// 	 that.image = "http://192.168.1.140:5005" + res.data.data.head_pic
				// 	 // that.test.backgroundImage = 'url(http://192.168.1.140:5005' + res.data.data.head_pic +')'
				// }else{
				// 	that.image = res.data.data.head_pic
				// 	 // that.test.backgroundImage = 'url('+ res.data.data.head_pic +')'
				// }
    //             console.log(that.image)
            }
        }else if(res.statusCode === 401){
            uni.showToast({
                icon:"none",
                title:'暂未登录或登录状态已注销，请重新登录',
                duration:2000
            })
            setTimeout(()=>{
                uni.navigateTo({
                    url:'../auth/login/login1'
                })
            },2000)
            return 
        }else{
            uni.hideLoading()
            uni.showToast({
                icon:"none",
                title:'服务器异常，请稍后重试',
                duration:2000
            })
            return 
        }
    }).catch(err=>{
        uni.hideLoading()
        uni.showToast({
            icon:'none',
            title:"您的网络未连接，请先连接网络",
            duration:2000
        })
        return
    })
}
//获取收货地址/api/UserManage/GetUserReceivAddress  查询用户的收货地址
const getReceivAddress = (that)=>{
    let opts = {
        url:'/fapi/UserManage/GetUserReceivAddress',
        method:'get'
    }
    request.httpTokenRequest(opts,{}).then(res=>{
        if(res.statusCode === 200){
        // console.log(res)
           uni.hideLoading()
                if(res.data.status === 0 && res.data.data.length != 0){
                    res.data.data.forEach((element,index) => {
                        if(element.isDefault){
                            // console.log(index)
                           var item = res.data.data[0]
                              res.data.data[0] =  res.data.data[index]
                              res.data.data[index] = item
                            // console.log(res.data.data)
                        }
                        that.address = res.data.data
                    });
                }else{
                    uni.showToast({
                        icon:'none',
                        title:'您的收获地址暂未查到',
                        duration:2000
                    })
                    return
                }
            
        }else if(res.statusCode === 401){
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:'未登录或登录已过期',
                duration:2000
            })
            setTimeout(()=>{
                uni.navigateTo({
                    url:'../auth/login/login1'
                })
            },2000)
            return
        }else{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:'获取失败',
                duration:2000
            })
            return
        }
    }).catch(err=>{
        uni.hideLoading()
        uni.showToast({
            icon:'none',
            title:'您的网络未连接，请连接网络',
            duration:2000
        })
        return
    })
}
//添加收获地址/api/UserManage/SaveReceivAddress 保存用户的收货地址
const saveReceivAddress =(param,that)=>{
    let opts = {
        url:'/fapi/UserManage/SaveReceivAddress',
        method:'post'
    }
    uni.showLoading({
        title:'保存中...'
    })
    request.httpTokenRequest(opts,param).then(res=>{
        console.log(res)
        if(res.statusCode === 200){
                if(res.data.status === 0){
                    uni.hideLoading()
                    uni.showToast({
                        icon:'none',
                        title:res.data.msg,
                        duration:2000
                    })
                    setTimeout(() => {
                        uni.navigateTo({
                            url:"./address"
                        })
                    }, 2000);
                }
        }else if(res.statusCode === 401){
                uni.hideLoading()
                uni.showToast({
                    icon:'none',
                    title:"未登录或登录已过期",
                    duration:2000
                })
                setTimeout(() => {
                    uni.navigateTo({
                        url:'../auth/login/login1'
                    })
                }, 2000);
                return
        }else{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:"系统错误，请稍后重试",
                duration:2000
            })
            return
        }
    }).catch(err=>{
        uni.hideLoading()
        uni.showToast({
            icon:'none',
            title:'网络连接已断开',
            duration:2000
        })
        return
    })
}
///api/UserManage/DeleteReceivAddress  删除用户收获地址
const deleteReceivAddress = (param,that)=>{
    let opts = {
        url:"/fapi/UserManage/DeleteReceivAddress",
        method:'post'
    }
    request.httpTokenRequest(opts,param).then(res=>{
        // console.log(res)
        if(res.statusCode === 200){
            if(res.data.status === 0){
                uni.showToast({
                    icon:"none",
                    title:res.data.msg,
                    duration:2000
                })
                setTimeout(() => {
                    uni.navigateTo({
                        url:'./address'
                    })
                }, 2000);
                return
            }else{
                uni.showToast({
                    icon:"none",
                    title:res.data.msg,
                    duration:2000
                })
                setTimeout(() => {
                    uni.navigateTo({
                        url:'./address'
                    })
                }, 2000);
                return
            }
        }else if(res.statusCode === 401){
                uni.showToast({
                    icon:'none',
                    title:'未登录或者登录已过期，请重新登录',
                    duration:2000
                })
                setTimeout(() => {
                    uni.navigateTo({
                        url:'../auth/login/login1'
                    })
                }, 2000);
                return
        }else{
            uni.showToast({
                icon:"none",
                title:'系统错误，请稍后重试',
                duration:2000
            })
            return
        }
    }).catch(err=>{
        console.log(err)
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
     console.log(JSON.parse(data))
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
// /api/UserManage/UpdateUserSignInfo  修改用户头像 标签 昵称 属性
const setUserInfo = (param,that) =>{
    let opts = {
        url:'/fapi/UserManage/UpdateUserSignInfo',
        method:'post'
    }
    request.httpTokenRequest(opts,param).then(res=>{
        console.log(res)
        if(res.statusCode ===  200){
                if(res.data.status === 0){
                    uni.showToast({
                        icon:'none',
                        title:res.data.msg,
                        duration:2000
                    })
                    // that.$store.commit("getUserMsg",res.data.data)
                   
                    
                }else{
                    uni.showToast({
                        icon:'none',
                        title:res.data.msg,
                        duration:2000
                    })
                    return
                }
        }else if(res.statusCode === 401){
            uni.showToast({
                icon:'none',
                title:'暂无权限',
                duration:2000
            })
            return
        }else{
            uni.showToast({
                icon:'none',
                title:'系统错误，请稍后再试',
                duration:2000
            })
            return 
        }
    }).catch(err=>{
        uni.showToast({
            icon:'none',
            title:'网络未连接，请连接网络',
            duration:2000
        })
        return
    })
}
// /api/FileManager/form Form表单 上传文件
// const upLoadFile = (param,that)=>{
//      let opts = {
//          url:'/identity/FileManager/form',
//          method:'post'
//      }
//      request.httpRequest(opts,param).then(res=>{
//             console.log(res)
//      }).catch(err=>{
//          uni.showToast({
//              icon:'none',
//              title:'上传失败，请检查网络',
//              duration:2000
//          })
//      })
// }
export default {
    getUserInfo,
    wxlogin_,
    wx_phone,
    is_Phone_reg,
    getReceivAddress,
    saveReceivAddress,
    deleteReceivAddress,
    setUserInfo
}