<template>
<view>
        
        <view class="main">
            <view style="width：125upx;height:125upx" class="view_img"></view>
            <view class="main_content">
                    <text style="font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(69,69,69,1);">订单支付成功</text>
                    <text style="font-size:24upx;font-family:PingFang SC;font-weight:400;color:rgba(107,107,107,1);">支付方式: {{pay_methods}}</text>
                    <text style="font-size:24upx;font-family:PingFang SC;font-weight:400;color:rgba(107,107,107,1);">支付金额: ￥{{pay_money}}</text>
            </view>
            <view class="btn">
                <view class="btn_pays" @tap='orderDeatil'>查看订单</view>
                <view class="btn_index" @tap='goIndex'>回到首页</view>
            </view>
        </view>
</view>

</template>
<script>
export default {
    onLoad(option){
        this.pay_money = option.pay_money
        if(this.method === '0'){
            this.pay_methods = '微信'
        }else{
            this.pay_methods = '支付宝'
        }
        
    },
    data(){
        return{
            pay_methods:'微信支付',
            pay_money: 256
        }
    },
    methods:{
        goIndex(){
            uni.switchTab({
                url: '../index/index'
            });
        },
        //订单详情
        orderDeatil(){
            uni.navigateTo({
                url:'../myorder/orderDetail'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    width: 100%;
    height: 600upx;
  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    .main_content{
        width: 100%;
        height: 150upx;
      
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center
    }
    .btn{
        width: 100%;
        height: 80upx;
     
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        // color:rgba(255,255,255,1);
        display: flex;
        justify-content: space-around;
        .btn_pays{
            width: 286upx;
            height: 80upx;
            border-radius:38upx;
            text-align: center;
            border:1px solid rgba(193,123,125,1);
            line-height: 80upx;
            color: #C17B7D

        }.btn_index{
            width: 286upx;
            height: 80upx;
            background: #fff;
            border-radius:38upx;
            text-align: center;
            line-height: 80upx;
            color: #fff;
            border:1px solid rgba(193,123,125,1);
            background: #C17B7D;

        }
       

    }
}
    .view_img{
        background-image: url('../../static/img/cjq-about/payend.png');
        background-size:contain ;
        background-repeat: no-repeat;
        background-position:center 
    }
</style>