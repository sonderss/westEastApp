import request from './request'
export default function register(data,that){
       	//注册接口
        let opts = {
            url:'/Login/RegisterUser',
            method:'post'
        }
        let param = data 
        request.httpRequest(opts,param).then(res=>{
            // console.log(res)
            if(res.statusCode === 200){
                if(res.data.status === 0){
                    that.uniToast(res.data.msg) //注册成功
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'../login/login'
                        })
                    },1500)
                   
                   
                }
                if(res.data.status === 2){
                    that.uniToast(res.data.msg) //验证码错误/该手机号已注册
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'../login/login'
                        })
                    },1500)
                }
              
            }else{
                uni.showToast({
                    icon:'none',
                    title: '网络错误，请检查网络后重试',
                    duration: 2000
                });
            }
        },
        erro => {
            that.uniToast('网络连接失败，请检查您的网络')
        })
}