<template>
<view>
 
 
    <view class="Designer" v-for="(item,index) in designData"  :key='index' ref='Designer'>
        <view class="Designer_card" @click="toAbout(index)">
            <image style="width:114upx;height:114upx" :src='item.touxiang' />
            <view class="Designer_title">
                <view class="title_top">
                     <text class="name">{{item.name}}</text>
                      <view class="jingyan">{{item.jingyan}}</view>
                      
                </view>
                <view class="title_botm">
                     <text class="rank">{{item.rank}}</text>
                     <text class="works">{{item.works}}</text>
                </view>
               
                
            </view>
            
        </view>
        
        <view class="Designer_works" >
            <image  :src='item.src1'/>
            <image  :src='item.src2'/>
            <image  :src='item.src3'/>
        </view>
    </view>
    <view class="bottom">已经到底啦~</view>
</view>
</template>
<script>
import json from '@/json'
export default {
     data() {
         return {
             designData:json.designData
         }
     },
     mounted() {
        this.$nextTick(()=>{
            var ref = document.querySelectorAll(".Designer")
            console.log(ref)
            ref[ref.length-1].style.border = 'none'
           
        })
     },
     methods: {
         toAbout(index){
            uni.navigateTo({
                url: "./designer_about?uid="+index
            });
         }
     },
}
</script>
<style lang="scss" scoped>

.Designer{
    margin: 0 auto;
    width: 95%;
    height: 446upx;
    border-bottom: 1px solid rgba(238,238,238,1);
    .Designer_card{
        height: 176upx;
        display: flex;
       align-items: center;
        .Designer_title{
           width: 80%;
            height: 176upx;
           margin-left: 40upx;
           .title_botm{
             height: 88upx;
             line-height: 60upx;
                    .rank{
                          font-size:26upx;
                            font-family:PingFang SC;
                            font-weight:400;
                            color:rgba(75,75,75,1);
                    }
                    .works{
                            font-size:26upx;
                            font-family:PingFang SC;
                            font-weight:400;
                            color:rgba(75,75,75,1);
                            margin-left: 40upx
                    }
           }
           
           .title_top{
               background: #fff;
               height: 88upx;
               display: flex;
               justify-content: space-between;
                .name{
                    float: left;
                    font-size:30upx;
                    font-family:PingFang SC;
                    font-weight:600;
                    color:rgb(60,60,60);
                    align-self: flex-end;
                    margin-bottom:5upx; 
                }
                .jingyan{
                    width:131upx;
                    height:42upx;
                    background:rgba(255,255,255,1);
                    text-align: center;
                    line-height: 38upx;
                    float: right;
                    border:2upx solid rgba(193,123,125,1);
                    border-radius:10upx;
                    font-size:24upx;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(193,123,125,1);
                    margin-top: 40upx;        
                }
            }
          
        }
    }
    .Designer_works{
        height: 226upx;
        display: flex;
        justify-content: space-between;
        image{
            width:226upx;
            height:226upx;
        }
    }
}
.bottom{
    height:91upx;
    text-align: center;
    line-height: 91upx;
    background:rgba(238,238,238,1);
    font-size:20upx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(108,108,108,1);
}
</style>