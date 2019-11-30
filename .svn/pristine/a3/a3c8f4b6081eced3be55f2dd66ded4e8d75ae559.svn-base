<template>
  <view>
             <view class="code">
                    <view class="title">
                        设置新密码
                    </view>
                    <view class="text_code">
                           	<!-- <image class="psdImg" src="/static/img/auth/pass.png"></image> -->
				            <input  type="text" style="color:#000"  v-model="psd" :password='isType'  placeholder="请输入新密码" />
                            <view @tap='seeing'>
                            <image class="ispass" src="/static/img/auth/seeing.png" v-if="isType"></image>
                            <image class="ispass1" src="/static/img/auth/noseeing.png" v-else></image>
					</view>
                    </view>
                    <view  class= 'btn'  @tap='isSet'>确定</view>
                   
             </view>
    </view>
</template>
<script>
import uti from '../../../common/util'
import  api from '../../../apis/login'
export default {
    onLoad(option){
        this.code = option.code
        this.phone = option.phone
    },
    data(){
        return{
            isType:true,
            psd:'',
            code:'',//验证码
            phone:''
        }
    },
    methods:{
        seeing(){
            this.isType = !this.isType
        },
        isSet(){
            var isImpty = uti.is_empty(this.psd)
            if(isImpty){
                    uni.showToast({
                        icon:'none',
                        title:'请输入您的新密码',
                        duration:1500
                    })
            }else if(this.psd.length < 6){
                uni.showToast({
                    icon:'none',
                    title:'请输入不小于6位的密码',
                    duration:1500
                })
            }else{
                console.log(this.psd)
                console.log(this.phone)
                console.log(this.code)
                let params={
                     Phone:this.phone,
                     Password:this.psd,
                     Code:this.code
                }
                api.setPsd(params,this)
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
          background-image: url('/static/img/auth/pass.png');
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