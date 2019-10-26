<template>
    <view>
           <view class="btn">
               <view class="server">
                    <view class="phone" @click="phone">
                        <image style="width:47upx;height:39upx;" src='../../static/img/designTeam/jieshao/phone.png'/>
                        <text class="txt">电话客服</text>
                    </view>
                    <view class="zixun" @click="zixun">
                        <image style="width:47upx;height:39upx;" src='../../static/img/designTeam/jieshao/kefu.png'/>
                        <text class="txt">在线咨询</text>
                    </view>
               </view>
                <view class="baojia" @click="baojia">免费为我报价</view>
           </view>
           <appointment :show="showPop" ></appointment>
    </view>
</template>
<script>
import appointment from './appointment'
export default {
    components:{appointment},
    data(){
        return {
            showPop:'' //报价
        }
    },
    methods: {
        baojia(){
           this.showPop = '3'
           setTimeout(()=>{
               this.showPop = ''
           },100)
        },
        phone(){
            uni.makePhoneCall({
                phoneNumber: '15836204369' //仅为示例
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
</style>