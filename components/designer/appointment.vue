<template>
    <view>
        <UniPopup  ref='dom' type="bottom" :custom="false" >
            <view v-if="isPop">
                <view class="popTop">
                    {{list.title}}
                    <image @click="close" style="width:40upx;height:40upx" src='../../static/img/designTeam/guanbi.png' />
                </view>
                <view class="txt">
                    <text class="txt_1">{{list.title1}}</text>
                    <text class="txt_2">{{list.context}}</text>
                    <text class="txt_3">{{list.context1}}</text>
                    <input  type="number" maxlength="11" v-model="myphone" placeholder="请输入您的手机号"/>
                    <button @click="yuyue">立即预约</button>
                </view>
                <view class="now_yy">
                    <image style="width:25upx;height:25upx;margin-top:5upx;margin-right:10upx" src="../../static/img/designTeam/gouxuan.png" />
                        <text>我已阅读并同意</text>
                        <text style="color:#C17B7D" @tap="xuzhi">《服务须知》</text>
                    </view>
            </view>
            <view  v-if="!isPop">
                  <view class="popTop1">
                      <view class="top-icon" @click="close">
                          <image style=" margin-right: 45upx;display:block;width:46upx;height:46upx;opacity:0.5;" src='../../static/img/designTeam/guanbi.png' />
                      </view>
                      <view class="top_title">{{list.jianzhu}}</view>
                      <view class="mid_title">{{list.title1}}</view>
                      <view class="content">
                        <view class="content_input">
                            <view class="left_txt"><text >昵称</text></view>
                            <input type="text" v-model="name" placeholder="请输入您称呼" />
                        </view>
                        <view class="content_input">
                            <view class="left_txt"><text >手机号</text></view>
                            <input type="number" maxlength="11" v-model="phone" placeholder="请输入手机号，接收预约服务"/>
                        </view>
                         <view class="content_input" style="position:relative">
                            <view class="left_txt"><text >验证码</text></view>
                            <input type="number" maxlength="4" v-model="yzm" placeholder="请输入验证码"/>
                            <text class="getYzm" @tap='getYzm'>{{getYzmTxt}}</text>
                            <view class="closeYzmTxt" v-if="showCloseYzmTxt"></view>
                        </view>
                         <view class="content_input">
                            <view class="left_txt"><text >所在城市</text></view>
                            <input type="text" class="chiocecity" @tap="getCity" :disabled='true' v-model="cjq_city" placeholder="请选择城市"/>
                        </view>
                        <view class="content_btn">
                            <button  @click="content_btn">立即预约</button>
                        </view>
                             <view class="now_yy">
                                <image style="width:25upx;height:25upx;margin-top:5upx;margin-right:10upx" src="../../static/img/designTeam/gouxuan.png" />
                                <text>我已阅读并同意</text>
                                <text style="color:#C17B7D" @tap="xuzhi">《服务须知》</text>
                            </view>
                      </view>
                  </view>
            </view>
        </UniPopup>
    </view>
</template>
<script>
let data = require('./data.json');
import UniPopup from '../uni-popup/uni-popup'
import util from '../../common/util'
import { setInterval } from 'timers';
import api from '../../apis/login'
import dapi from '../../apis/designer/designer'
export default {
    name:'tets',
    props:{
        show:{
            type:String,
            default:0
        },
        isBaoJia:{
            type:String,
            default:''
        },
        cjq_city:{
            type:String,
            default:''
        },
        test_city:{
            type:String,
            default:''
        },
        comId:{
            type:String,
            default:''
        }
       
    },
    data(){
        return{
            isshow:'',
            list:{},
            isPop:Boolean,
            name:'',
            yzm:'',
            phone:'',
            myphone:'',
            getYzmTxt:'获取验证码',
            num:60,
            timer:'',
            showCloseYzmTxt:false,
            testYzm1:true,
            postType:'',//用于装修公司表单提交的类型
            postJanType:''//用户建筑公司表单提交的类型
        }
    },
    components:{UniPopup},
    watch: {
        show:function(a,b){
            this.isshow = a+''
            // console.log(a)
            this.$refs.dom.open()
                if(this.isshow === '3'){
                    // console.log(3)
                this.list = data[a]
                    this.postType = 3
                }
                if(this.isshow === '0'){
                        // console.log(0)
                        this.list = data[a]
                        this.postType = 2
                        this.postJanType = 1 //建筑公司，类型 测量
                }
                if(this.isshow === '2'){
                    // console.log(2)
                    this.list = data[a]
                    this.postType = 1
                    this.postJanType = 3 //建筑公司，类型  报价
                }
                if(this.isshow === '1'){
                    // console.log(1)
                    this.list = data[a]
                    this.postType = 3
                    this.postJanType = 2 //建筑公司，类型 方案
                }
                if(this.isshow === '4'){
                    // console.log(4)
                    this.list = data[a]
                    this.postJanType = 3 //建筑公司，类型 报价  
                }
             
            
        },
        num:function(a,b){
            if(a === 0){
               console.log('结束')
            }
        }
    },
    mounted() {
            if(this.isBaoJia === 'isBaoJia'){
                this.isPop = true
            }
            if(this.isBaoJia === 'isYuYue'){
                this.isPop = false
               
            }
    },
   methods: {
        isnull(val) {
            var str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;
                if (str == '' || str == undefined || str == null) {
                
                return true;      
                    
                } else {
                    
                return false;
                        
            }
        },
       content_btn(){
              //立即预约
               var name =  this.isnull(this.name)
               var yzm = this.isnull(this.yzm)
               var phone =  this.isnull(this.phone)
               var  cjq_city =  this.isnull(this.cjq_city)
               
               clearInterval(this.timer)
                this.$refs.dom.close()
                uni.showLoading({
                    title:"加载中"
                })
               if(!name &&  !yzm  &&  !phone  &&  !cjq_city){
                    var phone = util.is_phone(this.phone)
                    if(!phone || !this.comId){
                        uni.hideLoading()
                        uni.showToast({
                            icon:'none',
                            title:'请检查所需参数',
                            duration:2000
                        })
                        setTimeout(()=>{
                            this.$refs.dom.open()
                        },1500)
                        return
                    }
                        let param = {
                                companyid:this.comId,
                                type: this.postJanType,//预约服务类型 1 量房服务 2 设计服务 3报价服务
                                phone:this.phone,
                                name:this.name,
                                city:this.cjq_city,
                                code:this.yzm
                        }
                        console.log(param)
                        //这里是带token请求
                        dapi.architecturePost(param,this).then(res=>{
                            // console.log(res)
                            if(res.statusCode === 200){
                                 if(res.data.status === 0){
                                        uni.hideLoading()
                                        uni.showToast({
                                            icon:'none',
                                            title:res.data.msg,
                                            duration:2000
                                        })
                                 }else{
                                    uni.hideLoading()
                                    uni.showToast({
                                        icon:'none',
                                        title:res.data.msg,
                                        duration:2000
                                    })
                                    setTimeout(()=>{
                                        this.$refs.dom.open()
                                    },1500)
                                    return
                                 }
                            }else if(res.statusCode === 401){
                                uni.hideLoading()
                                uni.showToast({
                                    icon:'none',
                                    title:'未登录或登录失效，请重新登录',
                                    duration:2000
                                })
                                setTimeout(()=>{
                                    uni.navigateTo({
                                        url:'../../pages/auth/login/login1'
                                    })
                                },2000)
                                return
                            }else{
                                uni.hideLoading()
                                uni.showToast({
                                    icon:'none',
                                    title:'请求失败，请稍后再试',
                                    duration:2000
                                })
                                return
                            }
                            
                        }).catch(err=>{
                            uni.showToast({
                                icon:'none',
                                title:'网络错误，请检查网络',
                                duration:2000
                            })
                            return
                        })
               }else{
                    uni.showToast({
                        icon:"none",
                        title: '请补充完整...',
                        duration: 2000,
                    });
                    setTimeout(()=>{
                        this.$refs.dom.open()
                    },1500)
               }
       },
       close(){
           this.$refs.dom.close()
       },
       getCity(){
            uni.navigateTo({
                url:'../../pages/choosecity/choosecity'
            })
           
       },
       yuyue(){
            // 装修公司表单提交
            var isPhone = util.is_phone(this.myphone)
            if(!isPhone){
                uni.showToast({
                    icon:'none',
                    title:'请输入正确的手机号',
                    duration:2000
                })
                this.$refs.dom.close()
                setTimeout(()=>{
                     this.$refs.dom.open()
                },1000)
                return
            }
            if(this.comId.length<=0){
                uni.showToast({
                    icon:'none',
                    title:'您的公司参数有误',
                    duration:2000
                })
                this.$refs.dom.close()
                return
            }
            uni.showLoading({
                title: '预约中...'
            });
            this.$refs.dom.close()
            let param = {
                companyid:this.comId,
                type:this.postType,//预约服务类型 1 量房服务 2 设计服务 3报价服务
                phone:this.myphone,
                name:this.myphone,
            }
            console.log(param)
             dapi.renovationPost(param,this).then(res=>{
                 console.log(res)
                 if(res.statusCode === 200){
                       uni.hideLoading();
                       if(res.data.status === 0){
                           uni.showToast({
                               icon:'none',
                               title:res.data.msg,
                               duration:2000
                           })
                       }else{
                           uni.showToast({
                               icon:'none',
                               title:'系统繁忙，请稍后再试',
                               duration:2000
                           })
                       }
                 }else if(res.statusCode === 401){
                                uni.hideLoading()
                                uni.showToast({
                                    icon:'none',
                                    title:'未登录或登录失效，请重新登录',
                                    duration:2000
                                })
                                setTimeout(()=>{
                                    uni.navigateTo({
                                        url:'../../pages/auth/login/login1'
                                    })
                                },2000)
                                return
                }else{
                        uni.hideLoading();
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
                     title:'网络未连接',
                     duration:2000
                 })
                 return
             })
            // uni.showLoading({
            //     title: '预约中...'
            // });
            // this.$refs.dom.close()
            // var myphone = util.is_phone(this.myphone)
            // if(myphone){
            //     setTimeout(function () {
            //         uni.hideLoading();
            //         uni.showToast({
            //             title: '预约成功',
            //             duration: 1000
            //             //这里需要跳转预约成功的页面
            //         });
            //     }, 2000);
            // }else{
            //     setTimeout(function () {
            //         uni.hideLoading();
            //         uni.showToast({
            //             icon:'none',
            //             title: '请检查手机号码',
            //             duration: 1000
            //         });
            //     }, 2000);
            // }
           
       },
       xuzhi(){
          uni.navigateTo({
              url:'../../pages/designbigcoffee/notice'
          })
       },
       getYzm:function(){
                  var myphone = util.is_phone(this.phone)
                  if(myphone){
                        let that = this;
                            let data={
                                phone:that.phone,
                                type:2
                            }
                         api.test(data,this).then(res=>{
                             console.log(res)
                             this.$refs.dom.close()
                            if(res.statusCode === 200){
                                 if(res.data.status === 0){
                                    uni.showToast({
                                         icon:'none',
                                         title:res.data.msg,
                                         duration:2000
                                    })
                                    setTimeout(()=>{
                                        this.$refs.dom.open()
                                    },2000)
                                 }else{
                                    uni.showToast({
                                         icon:'none',
                                         title:res.data.msg,
                                         duration:2000
                                    })
                                 }
                            }else{
                                uni.showToast({
                                    icon:'none',
                                    title:'网络错误，请检查网络连接',
                                    duration:2000
                                })
                            }
                         })
                    
                        that.num = 60
                        clearInterval(that.timer)
                        if(this.testYzm1){
                            that.timer =  setInterval(that.testYzm,1000)
                        }
                  }else{
                      uni.showToast({
                          icon:'none',
                          title:'请检查您的手机号',
                          duration:2000
                      })
                       this.$refs.dom.close()
                       setTimeout(()=>{
                           this.$refs.dom.open()
                       },1500)
                      return 
                  }
                   
               
       },
       testYzm(){
            let that = this;
            if(that.num === 0){
                that.getYzmTxt = '获取验证码'
                that.showCloseYzmTxt = false //验证码倒计时结束允许点击
                clearInterval(that.timer)
                 this.testYzm1 = false
            }else{
                that.num = that.num -1
                that.getYzmTxt = '重新获取'+ '('+that.num+')'
                that.showCloseYzmTxt = true  //验证码倒计时未结束不允许点击
            }
       }
   },
}
</script>
<style lang="scss" scoped>
.popTop{
    width: 100%;
    height: 105upx;
    border-bottom: 1px solid #ccc;
    font-size:36upx;
    font-family:PingFang SC;
    font-weight:600;
    color:rgba(26,26,26,1);
    text-align: center;
    position: relative;
    line-height: 105upx;
    image{
        float: right;
        position: absolute;
        right: 24upx;
        top: 35upx;
        bottom: 30upx;
    }
}
.txt{
    height: 500upx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .txt_1{
            width: 646upx;
            height: 31upx;
            font-size:32upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(84,84,84,1);
    }
     .txt_2{
         width: 646upx;
         height: 65upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(100,100,100,1);
        line-height:20px;
    }
     .txt_3{
         width: 640upx;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(140,140,140,1);
        line-height:20px;
				margin-top: 10upx;
    }
    input{
        width:636upx;
        height:80upx;
				font-size: 26upx;
        background:rgba(238,238,238,1);
        border-radius:20upx;
        padding-left: 33upx
    }
    button{
        width:636upx;
        height:80upx;
        background:rgba(193,123,125,1);
        border-radius:20upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
    }
}
.now_yy{
    width: 100%;
    height: 63upx;
    font-size:24upx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(108,108,108,1);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
}
.popTop1{
    width: 100%;
    height: 797upx;
    background: #fff;
    display: flex;
    flex-direction: column;
    .top-icon{
        width: 100%;
        height: 80upx;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .top_title{
        width: 100%;
        height: 68upx;
        font-size:36upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(26,26,26,1);
        padding-left: 45upx
    }
    .mid_title{
        width:100%;
        height: 68upx;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(140,140,140,1);
        display: flex;
        padding-left: 45upx
    }
    .content{
        width: 100%;
        height: 572upx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .content_input{
            width: 666upx;
            height: 79upx;
            display: flex;
            background: #EEEEEE;
           border-radius:20upx;
            .left_txt{
                width: 173upx;
                height: 79upx;
                line-height: 70upx;
                text{
                    font-size:30upx;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(85,85,85,1);
                    line-height:13upx;
                   margin-left:30upx;
                }
            }
            input{
                width: 493upx;
                height: 79upx;
                font-size: 30upx
            }
        }
        .content_btn{
            width: 100%;
            height: 80upx;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width:666upx;
                height:80upx;
                background:rgba(193,123,125,1);
                border-radius:20upx;
                color: #fff;
            }
        }
    }
}
.getYzm{
    width: 200upx;
    height: 79upx;
    font-size: 26upx;
    text-align: center;
    font-size:30upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(193,123,125,1);
    line-height:79upx;
    position: absolute;
    right: 23upx;
    z-index: 9998;
    
}
.closeYzmTxt{
       width: 200upx;
    height: 79upx;
    position: absolute;
    right: 23upx;
    background: #ff0;
    opacity: 0;
    z-index: 9999;

}
.chiocecity{
    background-image: url('../../static/img/confirmation/addArrow.png');
    background-repeat: no-repeat;
    background-position: 450upx 30upx;
    background-size: 15upx 27upx;
    
}
</style>