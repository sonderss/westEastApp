<template>
<view>
        <view class="top-btn">
                <view style="width:19upx;height:34upx;margin-left:20upx" @tap='goBack'>
                    <image style="width:100%;height:100%" src='../../static/img/cjq-about/left_icon_cjq.png' />
                </view>
                <text class='title'>订单支付</text>
        </view>
        <view class="main">
                 <view class="img_view">
                     <view style="width:141upx;height:136upx;margin-top:85upx;margin-bottom:40upx">
                         <image style="width:100%;height:100%" src='../../static/img/cjq-about/postpay.png'/>
                     </view>
                        <text style="height:28upx;font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(69,69,69,1);">订单提交成功</text>
                        <text style="font-size:24upx;font-family:PingFang SC;font-weight:400;color:rgba(107,107,107,1);margin:30upx 0 21upx 0">请在{{times}}内完成支付</text>
                        <text style="font-size:24upx;font-family:PingFang SC;font-weight:400;color:rgba(107,107,107,1);">支付金额 ¥{{money_pay}}</text>
                 </view>
                 
        </view>
        <view class="mid">
                <text>支付方式</text>
        </view>
         <radio-group @change="radioChange">
        <view class="pay_methods">
            <view class="_left">
                <view style="width:38upx;height:38upx;margin:0 20upx">
                    <image style="width:100%;height:100%" src='../../static/img/cjq-about/weixin.png'/>
                </view>
                <text>微信支付</text>
            </view>
             
            <view class="_right">
               
                     <radio color='#C17B7D' value="微信"  checked='true'/>
                
            </view>
        </view>
         <view class="pay_methods">
            <view class="_left">
                <view style="width:38upx;height:38upx;margin:0 20upx">
                    <image style="width:100%;height:100%" src='../../static/img/cjq-about/alipay.png'/>
                </view>
                <text>支付宝支付</text>
            </view>
            <view class="_right">
                
                <radio value="支付宝"  color='#C17B7D'  />
                
            </view>
        </view>
         </radio-group>
         <view class="submit" @tap='submit'> 
             {{pay_methods}}支付  {{money_pay}}
         </view>
         <view class="test" v-if="isShowModal">
              <view class="modl">
                     <view class="main">
                          <text style="font-size:30upx;font-family:PingFang SC;font-weight:500;color:rgba(46,46,46,1);">确认要离开订单</text>
                          <text style='text-align:center;width:367upx;;font-size:26upx;font-family:PingFang SC;font-weight:500;color:rgba(115,115,115,1);'>超过支付时效时订单将被取消 请尽快完成支付。</text>
                     </view>
                     <view class="btn">
                         <view class="_left" @tap='sure'>
                            确定
                         </view>
                         <view class="_right" @tap='cancel'>
                            取消
                         </view>
                     </view>
               </view>
         </view>
          
</view>
</template>
<script>
export default {
    onBackPress(event){
        console.log(event)
      
    },
    data(){
        return{
            times:'00小时59分59秒',
            money_pay:258,
            items: [{
                 value :'wx',

             },
             {
                 value:'ali'
            }],
            pay_methods:'微信',
            isShowModal:false,
           
        }
    },
    methods:{
        radioChange: function(evt) {
           
             this.pay_methods = evt.detail.value
        },
        goBack(){
            this.isShowModal = true
        },
        sure(){
           uni.navigateBack({
                delta: 1
            });
        },
        cancel(){
            this.isShowModal = false
        },
        submit(){
            if(this.pay_methods === '微信'){
                //这里代表使用微信支付
               //支付成功后跳转到支付成功页面  payend
               console.log('选择微信支付methods:'+0)
            }
            if(this.pay_methods === '支付宝'){
                //同上
                 console.log('选择支付宝支付methods:'+1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .img_view{
        width: 100%;
        height: 480upx;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 12upx solid #F1F1F1;
    }
    .mid{
        height: 95upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(58,58,58,1);
        line-height: 95upx;
        border-bottom: 1px solid #e5e5e5;
        padding-left: 25upx;
    }
    .pay_methods{
        width: 100%;
        height: 129upx;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        ._left{
            width: 50%;
            height: 100%;
          
            font-size:30upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(58,58,58,1);
            display: flex;
            align-items: center;
        }
        ._right{
            width: 50%;
            height: 100%;
           
            line-height: 129upx;
            text-align: right;
        }
    }
    .submit{
        width:698upx;
        height:83upx;
        background:rgba(193,123,125,1);
        border-radius:38upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 83upx;
        margin: 0upx auto;
        margin-top: 150upx
    }
    .top-btn{
        width: 100%;
        height: 80upx;
        border-bottom: 1upx solid #e5e5e5;
        display: flex;
        align-items: center;
        font-size:36upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        .title{
            width: 160upx;
            height: 80upx;
           
            margin:0 auto;
            text-align: center;
            line-height: 80upx
        }
    }
    .test{
       
        position: fixed;  
        top: 0;  
        left: 0;  
        width: 100%;  
        height: 100%;  
        background: rgba(0,0,0,0.5);  
        // opacity: 0.5;  
        z-index: 9999;  
        display: flex;
        justify-content: center;
        align-items: center;
    
        .modl{
            width: 572upx;
            height:364upx;
               background: #fff;
            z-index: 9999;
            .main{
                width: 100%;
                height: 240upx;
                background: #fff;
                border-bottom: 1upx solid #e5e5e5;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
            }
            .btn{
                width: 100%;
                height: 124upx;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(159,159,159,1);
                ._left{
                    width: 50%;
                    height: 110upx;
                    
                    text-align: center;
                    line-height: 110upx;
                    border-right:1upx solid #e5e5e5;
                }
                ._right{
                    width: 50%;
                    height: 110upx;
                   
                     text-align: center;
                    line-height: 110upx
                }
            }
         
        }
        
    }
</style>