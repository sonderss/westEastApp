<template>
   <view>
             <view class="code">
                    <view class="title">
                        请输入绑定手机号
                    </view>
                    <view class="text_code">
                           	<!-- <image class="psdImg" src="/static/img/auth/pass.png"></image> -->
				            <input  type="number" style="color:#000" maxlength="11" v-model="phone"  placeholder="请输入手机号" />
                           
                    </view>
                    <view  class= 'btn'  @tap='isSet'>获取验证码</view>
                   
             </view>
    </view>
</template>

<script>
import uti from '../../../common/util'
export default {
    onLoad(option){
        // console.log(option.data)
        this.data = option.data
        // console.log('微信信息'+JSON.stringify(this.data) )
        console.log(this.data)
    },
    data(){
        return{
            phone:'',
            data:''
        }
    },
    methods:{
        isSet(){
            var isphone = uti.is_phone(this.phone)
            if(!isphone){
                uni.showToast({
                    icon:'none',
                    title:'请输入正确的手机号',
                    duration:2000
                })
            }else{
                uni.navigateTo({
                    url:'./send?wxData='+this.data+'&isWx='+1+'&phone='+this.phone
                })
            }
           
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
        height: 70upx;
        // background: #ff0;
        margin: 40upx 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1upx solid #DEDBDB;
        align-items: center;
        .psdImg{
            width: 31upx;
            height: 34upx;
            display: block;
            
        }
        input{
        //   background: #f00;
          width: 100%;
          height: 100%;
          background-image: url('../../../static/img/auth/phono.png');
          background-size: 31upx 34upx;
          background-repeat: no-repeat;
          background-position:0  50%;
          padding-left: 60upx;
          font-size:26upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(158,158,158,1);
        }
        // .code_num{
        //     width:94upx;
        //     height:94upx;
        //     background:rgba(255,255,255,1);
        //     border:1px solid rgba(181,181,181,1);
        //     input{
        //         // background: #f00;
        //         display: block;
        //         width: 100%;
        //         height: 100%;
        //         text-align: center;
        //     }
        // }

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
    .btn_no{
         width:466upx;
        height:80upx;
        background:#B7B7B7;
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
    .ispass{width:30upx;height:12upx;}
.ispass1{width:37upx;height:22upx;}
</style>