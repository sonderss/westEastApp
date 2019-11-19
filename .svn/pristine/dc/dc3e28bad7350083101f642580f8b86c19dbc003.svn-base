import request from './request'
const loginApi =  (data,that)=>{
    //设置请求参数
    let opts = {
        url:'/Login/Login',
        method:'get'
    }
    let param = data
    
    request.httpRequest(opts,param).then(res=>{
        // console.log(res.data);
      
        //请求成功回调
        if(res.data.status === 0){
           
            that.uniToast(res.data.msg)
            that.$store.dispatch('save', {'token':res.data.data.token});
            that.help.save('token',res.data.data.token)
            uni.setStorage({
               key: 'token',
               data: res.data.data.token,
               success: function () {
                   console.log('success login');
                  
               }
           });
           setTimeout(() => {
                uni.switchTab({
                    url:'../../index/index'
                });
            }, 1500);
        }
        //验证失败回调
        if(res.data.status === 2){
           
            that.uniToast(res.data.msg) //参数验证失败的信息提示
           
        }
        //系统抛出位置错误，现在当成未注册
        if(res.data.status === 3){
          
            that.uniToast('您还未注册，请先注册') //系统抛出异常的信息提示
           setTimeout(() => {
               uni.navigateTo({
                   url:'../register/register'
               })
           }, 1500);
           
            // that.uniToast('错误码:'+100011) //系统抛出异常的信息提示
        }
      
    },
    erro => {
    
        that.uniToast('网络连接失败，请检查您的网络')
    })
}
//获取图形验证码
const getCode = (that)=>{
    ///GetBase64StringVerifyCode
    let opts = {
        url:'/Login/GetBase64StringVerifyCode'
    }
    request.httpRequest(opts).then(res=>{
        that.yanzhengma = 'data:image/gif;base64,'+res.data.data.base64String
        // console.log(this.yanzhengma)
        uni.setStorage({
            key: 'codekey',
            data:  res.data.data.codeKey,
            success: function () {
              console.log('图形验证码获取成功');

            }
        });
    })
}
//获取短信验证码
const GetVerifyCodeMsg = (data,that)=>{
    let opts = {
        url:'/Login/GetVerifyCodeMsg'
    }
    request.httpRequest(opts,data).then(res=>{
        console.log(res.data)
        if(res.data.status === 0){
            // that.uniToast(res.data.msg)
            uni.showToast({
                icon:'none',
                title: res.data.msg,
                duration: 2000
            });
          
        }else if(res.data.status === 3){
            // that.uniToast(res.data.msg)
            uni.showToast({
                icon:'none',
                title: res.data.msg,
                duration: 2000
            });
             
        }else{
            uni.showToast({
                icon:'none',
                title: '网络错误，请检查后重试',
                duration: 2000
            });
        }
        // that.uniToast(res.data.msg)
       

    })
}

export default {
    loginApi,
    getCode,
    GetVerifyCodeMsg

}