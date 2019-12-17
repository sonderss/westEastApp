<template>
<view style="overflow:hidden">
       
                <!-- 背景图 -->
            <view class="top_view" style="background-image:url('../../static/img/cjq-about/top_view.jpg')">
                <view class="title_">
                    免费量房 快速报价
                </view>
                <view class="title_desc">
                    已有1596人预约量房、报价
                </view>
            </view>
            <!-- 表单 -->
            <view class="form_title">
                <text>——</text>  <text >精选1-3家装企为您提供服务</text> <text>——</text>
            </view>
            <view class="form_content uni-flex  uni-column" >
                <view class="name"> 
                    <text style="left:40upx;">称呼</text>
                    <input type="text" placeholder="请输入您的称呼"/>
                </view>
                <view class="name"> 
                    <text style="left:33upx;">手机号</text>
                    <input type="text" placeholder="请输入您的手机号"/>
                </view>
                <view class="name"> 
                    <text style="left:40upx;">房屋城市</text>
                         <input  type="text" @tap='goChiceCity' disabled class="teshu_"/>
                         <text class="teshu_txt" @tap='goChiceCity'  >{{cjq_city}}</text>
                </view>
            </view>
            <view class="btn">立即预约</view>
             <view class="now_yy">
                <image style="width:25upx;height:25upx;margin-top:5upx;margin-right:10upx" src="../../static/img/designTeam/gouxuan.png" />
                <text>我已阅读并同意</text>
                <text style="color:#C17B7D" @tap="xuzhi">《服务须知》</text>
            </view>
          <!-- <button @tap='upLoad'>上传文件</button> -->
      
        

</view>
</template>

<script>
export default {
    data(){
        return{
            cjq_city:this.$store.state.currentCity.replace(/市/g,'')
        }
    },
    methods:{
         xuzhi(){
          uni.navigateTo({
              url:'../../pages/designbigcoffee/notice'
          })
        },
        goChiceCity(){
            uni.navigateTo({
                url:'../choosecity/choosecity'
            })
        }
      
       
    }
}
</script>

<style lang="scss" scoped>
.top_view{
    width: 100%;
    height: 480upx;
    // background-image: url('../../static/img/cjq-about/top_view.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
.title_{
    width: 100%;
    text-align: center;
font-size:50upx;
font-family:Source Han Sans CN;
font-weight:500;
color:rgba(255,255,255,1);
line-height:69upx;
margin: 10upx auto;
margin-top: 100upx
}
.title_desc{
width:329upx;
border:1px solid rgba(255,255,255,1);
border-radius:10upx;
font-size:24upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:69upx;
margin: 30upx auto;
text-align: center
}
.form_title{
    width:100%;
font-size:30upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(43,43,43,1);
line-height:69upx;
margin: 0 auto;
margin-top: 30upx;
margin-bottom: 30upx;
display: flex;
justify-content: center;
text{
    padding-left: 20upx;
    padding-right: 20upx
}
}
.form_content{
    line-height: 80upx;
    width: 100%;
   

    font-size:30upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(52,52,52,1);


    

}
.name{
       width:610upx;
        height:80upx;
    display: flex;
    position: relative;
    margin: 20upx auto;
    text{
        position: absolute;
    }
    .teshu_{
         background:rgba(238,238,238,1);
        background-image: url('../../static/img/confirmation/addArrow.png');
        background-size: 20upx 30upx;
        background-position: 560upx 28upx;
        background-repeat: no-repeat
    }
    .teshu_txt{
        position: absolute;
        left: 50%
    }
    input{
        width:610upx;
        height:80upx;
        background:rgba(238,238,238,1);
        border-radius:10upx;
        padding-left: 200upx;
        margin-bottom: 22upx
    }
}
.btn{
    width:610upx;
height:80upx;
background:rgba(193,123,125,1);
border-radius:10upx;
font-size:30upx;
font-family:PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height:80upx;
margin:0 auto;
margin-top: 30upx;
margin-bottom: 19upx;
text-align: center
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
</style>