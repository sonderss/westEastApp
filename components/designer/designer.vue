<template>
<view style="overflow: auto;" class="app">
     <!-- 个人简介 -->
     <view class="main" v-if="isShow === 2 ? true :false">
         <view class="top">
             <text class="title">个人简介</text>
             <view class="content txt">{{content}}</view>
         </view>
         <view class="bottom">
             <text class="title">设计理念</text>
             <view class="content txt">{{design}}</view>
         </view>
        
     </view>
     <!-- 作品 -->
     <view class="main" v-if="isShow === 1 ? true :false">
         <view class="works" @tap="goDetail(item.workId)" v-for="(item,index) in datalist" :key="index">
             <image style="width:702upx;height:334upx;border-radius:15upx 15upx 0 0 "  :src="item.img" />
             <text class="title1">{{item.desc}}</text>
             <text class="title2">{{item.desc1}}</text>
         </view>
         <!-- <view class="works" @tap="goDetail()">
             <image style="width:702upx;height:334upx" @tap.stop='imgView("../../static/img/designTeam/anli/03.png")' src='../../static/img/designTeam/anli/03.png' />
             <text class="title1">130㎡轻奢美式，邂逅美好的浪漫生活</text>
             <text class="title2">130㎡  |  二居  |  现代简约</text>
         </view>
         <view class="works teshu" @tap="goDetail()">
             <image style="width:702upx;height:334upx" @tap.stop='imgView("../../static/img/designTeam/anli/01.png")' src='../../static/img/designTeam/anli/01.png' />
             <text class="title1">130㎡轻奢美式，邂逅美好的浪漫生活</text>
             <text class="title2">130㎡  |  二居  |  现代简约</text>
         </view> -->
        
     </view>
     
</view>
</template>
<script>

export default {
    props:{
        isShow:{
            type:Number,
            default:1,
        },
        content:{
            type:String,
            default(){
                return '毕业于广州工商学院美术分院，从业6年以上经验，深圳市室内装饰行业协会常务理事，中国建筑协会会员，曾获得中国国际空间环境艺术设计大赛 优秀奖，居众优秀设计师。'
            }
        },
        design:{
            type:String,
            default(){
                return '人可以改变环境，环境可以影响人，而设计则可以改变人和环境 。'
            }
        },
        datalist:{
            type:Array
        },
        isPages:{
            type:Number,
            default:0
        }
    },
    mounted() {
    //    console.log(this.datalist)
    },
    data() {
        return {
				msgImgList:[]
            
        }
    },
    methods: {
        imgView(url){
            this.msgImgList.push(url)
            uni.previewImage({
					indicator:"none",
					current:url,
					urls: this.msgImgList
			});
        },
        goDetail(id){
            console.log('传的是案例id')
            //设计页面的跳转
            if(this.isPages === 0){
                uni.navigateTo({
                    url:'../../pages/fitment/case/stylist?id='+id
                })
                return
            }
            //装修以及建筑
            if(this.isPages === 1){
                uni.navigateTo({
                    url:'../../pages/fitment/case/decoration?id='+id+'&path=1'
                })
                return
            }
        }
    },
    beforeMount() {
        var a = uni.getSystemInfoSync().windowHeight;
        // console.log(a)
        if(a == 768){
            console.log(123)
                 this.$nextTick(()=>{
                    var dom = document.querySelectorAll('.main')[0]
                    console.log(dom)
                    dom.style.height = '1200upx'
                })
        }
       
        
    },
    onLoad(){
        
    }
}
</script>
<style lang="scss" scoped>
    .main{
        // margin-top: 358upx;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 120upx;
        .works{
            height: 485upx;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 45upx;
            .title1{
                align-self: flex-start;     
                height:33upx;
                font-size:32upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(75,75,75,1);
                margin: 20upx 0 18upx 0
            }
            .title2{
                 align-self: flex-start;     
                height:27upx;
                font-size:26upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(108,108,108,1);
                // margin-bottom: 57upx
            }
        }
      
        .title{
            font-size:34upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(99,99,99,1);
           
        }
        .txt{
            font-size:30upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(118,118,118,1);
            line-height:45px;
            line-height: 45upx;
            margin-top: 30upx
        }
        .top{
            width: 90%;
           margin: 63upx 0 71upx 0;
            
        }
        .bottom{
             width: 90%;
           
        }
    }
    .teshu{
         margin-bottom: 120upx
    }
</style>