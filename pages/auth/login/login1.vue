<template>
	<view class="content">
        
		 <view class="login-form">
			<image class="logo" src="../../../static/logo.png"></image>
		 	<view class="form-item from-items">
		 		<image class="icon" src="../../../static/img/auth/phono.png"></image>
				<input class="uni-input" type="number" v-model="phone" maxlength='11' placeholder="请输入手机号"  @input="input_phone" @blur='last_phone' /><!-- focus -->
		 	</view>
              <!-- 密码 -->
               <view class="form-item " v-if="isPassWord" >
					<image class="icon icon2" src="../../../static/img/auth/pass.png"></image>
					<input class="uni-input" :password="isType"  v-model="password" @input="input_password" type="text" placeholder="请输入密码" />
					<view @tap='seeing'>
						<image class="ispass" src="../../../static/img/auth/seeing.png" v-if="isType"></image>
						<image class="ispass1" src="../../../static/img/auth/noseeing.png" v-else></image>
					</view>
				</view>
                <!-- 按钮 -->
               <view class="btn_cjq" :class="isCheckValue?'btn_cjq_isPhone':'btn_cjq'" @tap='isPhoneHandle'>{{text_me}}</view>
               <view class="pasd_cjq">
                   <text style="" :class="isWangJ?'iswangji':'iswangji_ac'" @tap='setPsd'>{{desc}}</text>
                   <text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(193,123,125,1);line-height:25upx;" @tap='isPassd'>密码登录</text>
               </view>
		</view>
          
		 <view class="wx_login">
			 <image src="../../../static/img/confirmation/wechat.png" @tap='wxlogin' ></image>
			 <text>微信登录</text>
		 </view>
         <!-- 隐私政策 -->
        <view class="mine_msg" >
                登录即代表阅读并同意<text style="color:#C17B7D;margin:0 10upx;" @tap='go(0)'>  服务协议</text>和<text style="color:#C17B7D;margin-left:10upx" @tap='go(1)'>隐私政策</text>
        </view>
	</view>
</template>

<script>
import utils from '../../../common/util'
import api from '../../../apis/login'
import wxapi from '../../../apis/user/user'


	export default {
		data(){
            return{
                text_me:'获取验证码',
                isType:true,
                isPassWord:false,
                desc:'未注册手机验证后自动注册',
                isPhoneCheck:'',
                phone:'',
                password:'',
                isCheckValue:false,
                isWangJ:true
            }
        },
        methods:{
            seeing(){
                this.isType = !this.isType
            },
            isPassd(){
                this.isPassWord = ! this.isPassWord
                if(this.isPassWord){
                        this.text_me = '登录'
                        this.desc = '忘记密码'
                        this.isWangJ = false
                }else{
                    this.text_me = '获取验证码'
                    this.desc = '未注册手机验证后自动注册'
                    this.isWangJ = true
                }
                this.phone = ''
                this.isCheckValue = false
                this.password = ''
            },
            //输入框失去焦点时
            last_phone(e){
                // console.log(e.detail.value)
                // this.isPhoneCheck = utils.is_phone(e.detail.value) //检查是否是手机号
                // if(!this.isPhoneCheck){
                //     uni.showToast({
                //         icon:'none',
                //         title:'请检查手机号是否正确',
                //         duration:2000
                //     })
                // }
            },
            input_phone(e){
                // console.log(e.detail.value)
                this.isPhoneCheck = utils.is_phone(e.detail.value) //检查是否是手机号
                var is_psd = utils.is_empty(this.password)
                if(this.isPassWord){
                     if(!is_psd && e.detail.value.length>0){
                             this.isCheckValue = true
                     }else{
                         this.isCheckValue = false
                     }
                     
                }
               if(!this.isPassWord){
                    if(e.detail.value.length <=0){
                     this.isCheckValue = false
                    }else{
                        this.isCheckValue = true 
                    }
               }

                
                this.phone = e.detail.value 
            },
            //密码框
            input_password(e){
                this.password = e.detail.value
                var is_phone = utils.is_empty(this.phone)
                if(!is_phone && e.detail.value.length>0){
                     this.isCheckValue = true
                }else{
                    this.isCheckValue = false
                }
            },
            isPhoneHandle(){
                var that = this
                var is_impty_phone = utils.is_empty(this.phone)
                var is_impty_psd = utils.is_empty(this.password)
                if(that.isPassWord){
                    if(is_impty_phone || is_impty_psd){
                               return 
                    }
                }else{
                    if(is_impty_phone){
                            return
                    }
                }
                if(!this.isPhoneCheck){
                      console.log('不是手机号')
                      uni.showToast({
                          icon:'none',
                          title:'请检查手机号是否正确',
                          duration:2000
                      })
                      return 
                }
                //这里执行下一步
                
                if(that.isPassWord){
                        //这里是密码登录  直接获取手机号和密码进行登录
                        console.log('我是密码登录')
                       uni.showLoading({
                           title:'加载中'
                       })
                         //set_back_page 这里存储用户未登录状态下 所在页面及操作
                        let pages = getCurrentPages();	
                        let nowPage = pages[ pages.length - 1]; 
                        let prevPage = pages[ pages.length - 2 ];
                        console.log('密码登录+++',prevPage)
                        if(prevPage.myobj){
                            this.$store.commit('set_back_page',prevPage)
                            
                        }
                       let param ={
                           phone: that.phone,
                           verifycode:'',
                           password:that.password
                       }
                        api.loginApi(param,this,1)
                      
                }else{
                    //这里是验证码登录 跳到验证码登录页面
                    console.log('我是验证码登录')
                     //set_back_page 这里存储用户未登录状态下 所在页面及操作
                    let pages = getCurrentPages();	
                    let nowPage = pages[ pages.length - 1]; 
                    let prevPage = pages[ pages.length - 2 ];
                    console.log('验证码+++',prevPage)
                    if(prevPage.myobj){
                        this.$store.commit('set_back_page',prevPage)
                        
                    }
                    uni.navigateTo({
                        url:'../login/send?phone='+this.phone
                    })
                }
               
               
            },
            //找回密码入口
            setPsd(){
                if(this.desc === '忘记密码'){
                        //set_back_page 这里存储用户未登录状态下 所在页面及操作
                        let pages = getCurrentPages();	
                        let nowPage = pages[ pages.length - 1]; 
                        let prevPage = pages[ pages.length - 2 ];
                        console.log('忘记密码+++',prevPage)
                        if(prevPage.myobj){
                            this.$store.commit('set_back_page',prevPage)
                        }
                        uni.navigateTo({
                            url:'../login/setpsd'
                        })
                }
            },
            //用户协议
            go(a){
                uni.navigateTo({
                    url:'../login/userab?id='+a
                })
            },
            //微信登录
            wxlogin:function(){
                var that = this
				uni.hideKeyboard();
                var self = this;
                uni.showLoading({
                    title:'启动中'
                })
				uni.login({
					provider: "weixin",
					success: (res) => {
						uni.getUserInfo({
							provider: 'weixin',
							success: function (infoRes) {
                                // console.log(infoRes.userInfo);
                                let data = JSON.stringify(infoRes.userInfo)
                                // let data1 =  infoRes.userInfo.openId
                                setTimeout(()=>{
                                    uni.hideLoading()
                                },1000)
                                
                                console.log(data)
                                // console.log(data1)
                                // console.log(data.openId)
                               
								// let formdata={
                                //       data:JSON.stringify(infoRes.userInfo)
								// 	// nickName: JSON.stringify(infoRes.userInfo.nickName),
								// 	// gender:JSON.stringify(infoRes.userInfo.gender),
								// 	// openId:infoRes.userInfo.openId,
								// 	// unionId:infoRes.userInfo.unionId,
                                //     // avatarUrl:infoRes.userInfo.avatarUrl,
                                //     // city:infoRes.userInfo.city
								// };
                                //self.$go.post("/wxlogin",formdata).then(res=>{});
                                // let param = {
                                //     formdata:formdata
                                // }
                                wxapi.wxlogin_(data,that)
							}
						})
					},
					fail: (err) => {
                        console.log(err)
                         uni.hideLoading()
                        if(err.code === -8){
                            uni.showToast({
                                icon:'none',
                                title:'本设备未安装微信客户端或版本太低',
                                duration:2000
                            })
                            return
                        }
                    }
				});
			},
        }
		
	}
</script>

<style scoped  lang='scss'>
	@import "../../../static/css/login.css";
	uni-page-body,.content{width:100%;height:100%;color:#686869;}

    .btn_cjq{
        padding:0 12upx 0 17upx;
        height:80upx;
        background:rgba(183,183,183,1);
        border-radius:20upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 80upx;
        margin: 30upx 0;
        
    }
    .btn_cjq_isPhone{
        // width:522upx;
        height:80upx;
        background:#C17B7D;
        border-radius:20upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 80upx;
        margin: 30upx 0;
    }
    .pasd_cjq{
        height:25upx;
        padding:0 12upx 0 17upx;
       display: flex;
       justify-content: space-between;
    }
    .cjq_item{
        display: flex;
        margin: 30upx 0;
    }
    /* 微信登录 */
    .wx_login{
      image{width:93upx;height:93upx;display:block;margin:0 auto;};
     text{font-size:24upx;color:#686869;text-align:center;display:block;line-height:46upx;}
    }
    /* 隐私 */
    .mine_msg{
  
        height: 25upx;
        margin-top: 30upx;
        text-align: center;
font-size:20upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(129,129,129,1);
line-height:25upx;
    }
    .iswangji{
        font-size:20upx;font-family:PingFang SC;font-weight:400;color:rgba(148,148,148,1);line-height:25upx;
    }
    .iswangji_ac{
        font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(193,123,125,1);line-height:25upx;
    }
</style>
