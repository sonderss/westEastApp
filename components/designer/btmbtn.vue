<template>
    <view>
           <view class="btn">
               <view class="server">
                    <view class="phone" @click="phone">
                        <image style="width:47upx;height:39upx;" :src='left_icon'/>
                        <text class="txt">{{left_name}}</text>
                    </view>
                    <view class="zixun" @click="zixun">
                        <image style="width:47upx;height:39upx;" src='../../static/img/designTeam/jieshao/kefu.png'/>
                        <text class="txt">在线咨询</text>
                    </view>
               </view>
                <view class="baojia" @click="baojia">{{btn_name}}</view>
           </view>
           <appointment :comId="comId" :test_city="test_city" :cjq_city="cjq_city" :show="showPop" :isBaoJia="isBaoJia"></appointment>
           <unipop ref='pop' type="bottom" :custom="false" :radius="true" >
                    <view class="playPhone" @click="playphone" style=" position: relative;">
                        <image src='../../static/img/designTeam/iconfontdianhua.png' style="width:34upx;height:34upx"/>
                        <text style="margin-left:15upx">呼叫 {{phone_bm}}</text>
                    </view>
                    <view class="btm" @click="cancel">取消</view>
                    <view class="left_pop"></view>
           </unipop>
    </view>
</template>
<script>
import appointment from './appointment'
import unipop from '../../components/uni-popup/uni-popup'
import dapi from '../../apis/designer/designer'
export default {
    components:{appointment,unipop},
    props:{
        isShowPhone:{
            type:String,
            default:''
        },
        left_name:{
            type:String,//左边底部文本
            default:''
        },
        left_icon:{
            type:String,//左边上部图标
            default:''
        },
        btn_name:{
            type:String,//右侧按钮文本
            default:''
        },
        isBaoJia:{
            type:String,//决定弹出框的内容
            default:''
        },
        cjq_city:{
            type:String,
            default:''
        },
        phone_bm:{
            type:String,
            default:'13854648513'
        },
        comId:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            showPop:'', //报价
            isIcon:false,
            btn_city:'',
            test_city:'',
            sc_flag:true
        }
    },
    watch: {
        isShowPhone(a,b){
           if(a === 'isShowPhone'){
               this.$refs.pop.open()
           }
        }
    },  
    methods: {
        baojia(){
            if(this.btn_name === '免费为我报价'){
                this.showPop = '3'
                setTimeout(()=>{
                    this.showPop = ''
                },100)
            }
            if(this.btn_name === '免费预约服务'){
               this.showPop = '4'
               if(this.cjq_city.length !== 0){
                   this.cjq_city = ''
               }
               setTimeout(()=>{
                    this.showPop = ''
                },100)
            }
        },
        phone(){
            if(this.left_name === '电话客服'){
                 this.$refs.pop.open()
            }
            if(this.left_name === '收藏'){
                var that = this
                if(that.sc_flag){
                    uni.showLoading({
                        title:'加载中'
                    })
                    let param = {
                        companyid:that.comId
                    }
                    dapi.collectionSetData(param,that).then(res=>{
                        console.log(res)
                        if(res.statusCode === 200){
                            uni.hideLoading()
                            if(res.data.status === 0){
                                that.isIcon = !that.isIcon
                                that.$emit('shoucang',that.isIcon)
                                that.sc_flag = false
                                uni.showToast({
                                    icon:"none",
                                    title:res.data.msg,
                                    duration:2000
                                })
                            }else{
                                uni.showToast({
                                    icon:"none",
                                    title:"操作失败，请稍后重试",
                                    duration:2000
                                })
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
                                icon:"none",
                                title:"网络错误，请检查网络后再试",
                                duration:2000
                            })
                            return
                        }
                        }).catch(err=>{
                            uni.showToast({
                                icon:"none",
                                title:"网络错误，请检查网络后再试",
                                duration:2000
                            })
                            return
                    })
                }else{
                    that.sc_flag = false
                     uni.showToast({
                         icon:'none',
                         title:'请勿频繁操作',
                         duration:2000
                     })
                     setTimeout(()=>{
                         that.sc_flag = true
                     },5000)
                     return
                }
            }
        },
        cancel(){
            this.$refs.pop.close()
        },
        playphone(){
            // console.log(this.phone_bm)
            uni.makePhoneCall({
                phoneNumber: this.phone_bm
            });
        },
        zixun(){
           uni.navigateTo({
               url:'../../pages/chat/chat?title=客服小白'
           })
        },
        showpop(){
          
        }
       
    },
}
</script>

<style lang="scss" scoped>

    .btn{
        width: 100%;
        height: 90upx;
        border-top: 1px solid #EEEEEE;
        justify-content: space-between;
        display: flex;
        position: fixed;
        bottom: 0;
        background: #fff;
        z-index: 9999;
        .server{
           display: flex;
           justify-content: space-between
        }
        .phone{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin: 10upx 50upx 0 41upx
        }
        .zixun{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin-top: 10upx
        }
        .baojia{
            width: 447upx;
            height: 90upx;
            background: #C17B7D;
            font-size:32upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:13px;
            text-align: center;
            line-height: 90upx
        }
        .txt{
            font-size:20upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(193,123,125,1);
            line-height:13px;
        }
        
    }
    .playPhone{
        width: 100%;
        height: 155upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(84,84,84,1);
        border-bottom: 1px solid #C5C5C5;
        text-align: center;
        line-height: 155upx;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }
    .btm{
        width: 100%;
        height: 100upx;
        text-align: center;
        line-height: 100upx;
        font-size:34upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(193,123,125,1);
    }
    // .left_pop{
    //     width: 19upx;
    //     height:15upx;
    //     background: #f00;
    //     position: absolute;
    //     top:0;
    //     left: 0;
    //     border-radius: 10upx 0 0 0
    // }
</style>