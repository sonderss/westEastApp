<template>
    <view>
             <view class="code">
                    <view class="title">
                        请输入验证码
                    </view>
                    <view class="text_code">
                        <view class="code_num">
                             <input type="number"  v-model="num1" :focus="focus_num == 0? true :false"  maxlength='1' @input='one_num'/>
                        </view>
                        <view class="code_num"> 
                             <input type="number" v-model="num2" :focus="focus_num == 1? true :false" maxlength='1' @input='two_num'/>
                        </view>
                        <view class="code_num">
                             <input type="number" v-model="num3" :focus="focus_num == 2? true :false" maxlength='1' @input='three_num'/>
                        </view>
                        <view class="code_num">
                             <input type="number" v-model="num4" :focus="focus_num == 3? true :false" maxlength='1' @input='four_num'/>
                        </view>
                    </view>
                    <view class="btn" v-if="isSend" @tap='send'>重新发送</view>
                    <view class="isSend" v-if="!isSend">{{code_text}}</view>
             </view>
    </view>
</template>
<script>
import util from '../../../common/util'
import api from '../../../apis/login'
import wxapi from '../../../apis/user/user'
export default {
    data(){
        return {
            focus_num:0,
            code:'',
            num1:'',
            num2:'',
            num3:'',
            num4:'',
            isSend:true,
            code_text:'60s后重新发送',
            timer:null,
            num:60,
            testYzm1:true,
            phone:'',
            isSendIng:true,
            wxData:'',//这里是微信信息,
            isWx:'',//这里是微信绑定手机的标识
            isSetPsd:''//这里是设置密码的标识
        }
    },
    onLoad(option){
        this.phone = option.phone
        this.isSetPsd = option.isSetPsd
        this.isWx = option.isWx
        this.wxData =  option.wxData 
        // console.log( JSON.parse(option.wxData)  )
        // this.phone = 15836204369
        console.log(this.wxData)
    },
    mounted(){
        //这里拿到手机号直接调接口获取短信验证码
       let data = {
           phone:this.phone,
           type:2
       }
       var that   = this
        uni.showLoading({
            title: '加载中'
        });
        api.test(data).then(res=>{
            console.log(res)
            if(res.statusCode === 200){
                uni.hideLoading();
                    if(res.data.status === 0){
                        uni.showToast({
                            icon:'none',
                            title:res.data.msg,
                            duration:2000
                        })
                        if(this.isSendIng){
                                    that.timer = setInterval(()=>{
                                    if(that.num === 0){
                                            // console.log(that.num)
                                            that.isSend = true  //按钮显示
                                            clearInterval(that.timer) 
                                            that.code_text = 's后重新发送'
                                            that.num = 60
                                            this.isSendIng = true
                                    }else{
                                            // console.log(that.num)
                                            that.isSend = false //按钮隐藏
                                            that.num = that.num -1 
                                            that.code_text =  that.num+'s后重新发送'
                                            this.isSendIng = false
                                    }
                                },1000)
                        }
                    }
                    if(res.data.status === 3){
                        uni.showToast({
                             icon:'none',
                             title:res.data.msg,
                             duration:2000
                        })
                    }
                    if(res.data.status === 2){
                        uni,showToast({
                            icon:'none',
                            title:res.data.msg,
                            duration:2000
                        })
                    }
            }else{
                uni.hideLoading();
                uni.showToast({
                    icon:'none',
                    title:'网络错误,请检查后重新尝试',
                    duration:2000
                })
            }
        })
        
        // if(this.isSendIng){
        //              that.timer = setInterval(()=>{
		// 			if(that.num === 0){
        //                     // console.log(that.num)
		// 					that.isSend = true  //按钮显示
        //                     clearInterval(that.timer) 
        //                     that.code_text = 's后重新发送'
        //                     that.num = 60
        //                     this.isSendIng = true
		// 			}else{
        //                     // console.log(that.num)
        //                     that.isSend = false //按钮隐藏
		// 					that.num = that.num -1 
		// 					that.code_text =  that.num+'s后重新发送'
		// 					this.isSendIng = false
		// 			}
		//       	},1000)
        // }
           
								
            this.isSend = false
    },
    methods:{
            one_num(e){
                  var that = this
                  this.code = ''
                if(e.detail.value){
                    this.focus_num = 1
                    this.num1 = e.detail.value

                    if(this.num2 && this.num3 && this.num4 && this.num1){
                         this.code = this.num1+this.num2 + this.num3 + this.num4 
                          //找回密码时的操作
                        if(this.isSetPsd === '0'){
                                console.log('找回密码下一步')
                                 uni.navigateTo({
                                        url:'../login/seting?phone='+this.phone+'&code='+this.code
                                 })
                                return
                        }
                        //绑定微信时的操作
                        if(this.isWx === '1'){
                            console.log('微信绑定:'+this.wxData)
                            let param = {
                                Phone:this.phone,
                                OpenId:JSON.parse(this.wxData).openId,
                                HeadPic:JSON.parse(this.wxData).avatarUrl,
                                Password:'',
                                Code:this.code
                            }
                            wxapi.wx_phone(param,this)
                            uni.hideKeyboard()
                            return 
                        }
                         console.log('可以登录')
                        //  this.code = this.num1+this.num2 + this.num3 + this.num4 
                       uni.hideKeyboard()
                         let param ={
                           phone: that.phone,
                           verifycode:this.code,
                           password:''
                        }
                        api.loginApi(param,this)
                        
                    }
                }

            },
             two_num(e){
                var that = this
                  this.code = ''
                   if(e.detail.value.length == 0){
                    //   console.log(12321)
                    this.focus_num = 0
                  }
                if(e.detail.value){
                    this.focus_num = 2
                    this.num2 = e.detail.value
                     if(this.num2 && this.num3 && this.num4 && this.num1){
                          this.code = this.num1+this.num2 + this.num3 + this.num4 
                          //找回密码时的操作
                        if(this.isSetPsd === '0'){
                                console.log('找回密码下一步')
                                 uni.navigateTo({
                                        url:'../login/seting?phone='+this.phone+'&code='+this.code
                                 })
                                return
                        }
                        //绑定微信时的操作
                        if(this.isWx === '1'){
                            let param = {
                                Phone:this.phone,
                                OpenId:JSON.parse(this.wxData).openId,
                                HeadPic:JSON.parse(this.wxData).avatarUrl,
                                Password:'',
                                Code:this.code
                            }
                            wxapi.wx_phone(param,this)
                            uni.hideKeyboard()
                            return 
                        }
                         console.log('可以登录')
                        uni.hideKeyboard()
                         let param ={
                           phone: that.phone,
                           verifycode:this.code,
                           password:''
                        }
                        api.loginApi(param,this)
                    }
                }
                

            },
             three_num(e){
                var that = this
                  this.code = ''
                   if(e.detail.value.length == 0){
                    //   console.log(12321)
                    this.focus_num = 1
                  }
                if(e.detail.value){
                    this.focus_num = 3
                      this.num3 = e.detail.value
                       if(this.num2 && this.num3 && this.num4 && this.num1){
                         this.code = this.num1+this.num2 + this.num3 + this.num4 
                          //找回密码时的操作
                        if(this.isSetPsd === '0'){
                                console.log('找回密码下一步')
                                 uni.navigateTo({
                                        url:'../login/seting?phone='+this.phone+'&code='+this.code
                                 })
                                 
                                return
                        }
                        //绑定微信时的操作
                        if(this.isWx === '1'){
                            let param = {
                                Phone:this.phone,
                                OpenId:JSON.parse(this.wxData).openId,
                                HeadPic:JSON.parse(this.wxData).avatarUrl,
                                Password:'',
                                Code:this.code
                            }
                            wxapi.wx_phone(param,this)
                            uni.hideKeyboard()
                            return 
                        }
                         console.log('可以登录')
                        //  this.code = this.num1+this.num2 + this.num3 + this.num4 
                        uni.hideKeyboard()
                         let param ={
                           phone: that.phone,
                           verifycode:this.code,
                           password:''
                        }
                        api.loginApi(param,this)
                    }
                }
            },
             four_num(e){
                var that = this
                  this.code = ''
                  if(e.detail.value.length == 0){
                    //   console.log(12321)
                    this.focus_num = 2
                  }
                 if(e.detail.value){
                    // this.focus_num = ''
                     this.num4 = e.detail.value
                      if(this.num2 && this.num3 && this.num4 && this.num1){
                           this.code = this.num1+this.num2 + this.num3 + this.num4 
                          //找回密码时的操作
                        if(this.isSetPsd === '0'){
                                console.log('找回密码下一步')
                                 uni.navigateTo({
                                        url:'../login/seting?phone='+this.phone+'&code='+this.code
                                 })
                                return
                        }
                        //绑定微信时的操作
                        if(this.isWx === '1'){
                            let param = {
                                Phone:this.phone,
                                OpenId:JSON.parse(this.wxData).openId,
                                HeadPic:JSON.parse(this.wxData).avatarUrl,
                                Password:'',
                                Code:this.code
                            }
                            // console.log('send:'+param.Phone,param.OpenId)
                            console.log(param)
                            wxapi.wx_phone(param,this)
                            uni.hideKeyboard()
                            return 
                        }
                         console.log('可以登录')
                        //  this.code = this.num1+this.num2 + this.num3 + this.num4 
                        uni.hideKeyboard()
                         let param ={
                           phone: that.phone,
                           verifycode:this.code,
                           password:''
                        }
                        console.log(this.code)
                        api.loginApi(param,this)

                    }
                }
            },
            //这里定义一个方法,判断验证码是否完整,然后登录/其他
            onCome(){

            },
            //这里通过按钮再次获取验证码
            send(){
                //这里获取验证码  调获取验证码的接口  
                 let data = {
                    phone:this.phone,
                    type:2
                }
                var that   = this
                    uni.showLoading({
                        title: '加载中'
                    });
            api.test(data).then(res=>{
            console.log(res)
            if(res.statusCode === 200){
                uni.hideLoading();
                    if(res.data.status === 0){
                        uni.showToast({
                            icon:'none',
                            title:res.data.msg,
                            duration:2000
                        })
                        if(this.isSendIng){
                                    that.timer = setInterval(()=>{
                                    if(that.num === 0){
                                            // console.log(that.num)
                                            that.isSend = true  //按钮显示
                                            clearInterval(that.timer) 
                                            that.code_text = 's后重新发送'
                                            that.num = 60
                                            this.isSendIng = true
                                    }else{
                                            // console.log(that.num)
                                            that.isSend = false //按钮隐藏
                                            that.num = that.num -1 
                                            that.code_text =  that.num+'s后重新发送'
                                            this.isSendIng = false
                                    }
                                },1000)
                        }
                    }
                    if(res.data.status === 3){
                        uni.showToast({
                             icon:'none',
                             title:res.data.msg,
                             duration:2000
                        })
                    }
                    if(res.data.status === 2){
                        uni,showToast({
                            icon:'none',
                            title:res.data.msg,
                            duration:2000
                        })
                    }
            }else{
                uni.hideLoading();
                uni.showToast({
                    icon:'none',
                    title:'网络错误,请检查后重新尝试',
                    duration:2000
                })
            }

            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .code{
        width: 100%;
        height:600upx;
        // background: #f00;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center
    }
    .title{
        width: 466upx;
        height:28upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(66,66,66,1);
    }
    .text_code{
        width: 466upx;
        height: 96upx;
        // background: #ff0;
        margin: 40upx 0;
        display: flex;
        justify-content: space-between;
        .code_num{
            width:94upx;
            height:94upx;
            background:rgba(255,255,255,1);
            border:1px solid rgba(181,181,181,1);
            input{
                // background: #f00;
                display: block;
                width: 100%;
                height: 100%;
                text-align: center;
            }
        }

    }
    .btn{
        width:466upx;
        height:80upx;
        background:rgba(193,123,125,1);
        border-radius:20upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 80upx
    }
    .isSend{
        width:466upx;
        height:80upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(193,123,125,1);
        text-align: center;
    }
</style>