<template>
  <view>
             <view class="code">
                    <view class="title">
                        找回密码
                    </view>
                    <view class="text_code">
                           	<!-- <image class="psdImg" src="/static/img/auth/pass.png"></image> -->
				            <input  type="number" class="uni-input" style="color:#000" maxlength='11' @input='isInput'  v-model="phone"  placeholder="请输入手机号" />
                    </view>
                    <view  :class="isClass ? 'btn' :'btn_no'" @tap='setPsd'>下一步</view>
                   
             </view>
    </view>
</template>
<script>
import uti from '../../../common/util'
import wxapi from '../../../apis/user/user'
export default {
    data(){
        return{
            phone:'',
            isClass:false
        }
    },
    onLoad(option){
      
    },
    methods:{
        isInput(e){
             console.log(e.detail.value)
             if(e.detail.value.length>0){
                 this.isClass = true
             }else{
                 this.isClass = false
             }
        },
        setPsd(){
            var isPhone  =  uti.is_phone(this.phone)
            console.log(isPhone)
            if(this.phone.length === 0){
                return 
            }
            if(!isPhone){
                uni.showToast({
                    icon:'none',
                    title:'请收入正确的手机号',
                    duration:2000
                })
            }else{
                let param = {
                    Phone:this.phone
                }
                wxapi.is_Phone_reg(param,this)
               
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
          background-image: url('../../../static/img/auth/pass.png');
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
</style>