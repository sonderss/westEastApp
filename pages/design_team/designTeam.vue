<template>
<view>
 
    <view v-if='showPage'>
        <view class="Designer"  v-for="(item,index) in designData"  :key='index' ref='Designer'>
            <view class="Designer_card" @click="toAbout(item.id,index)">
                <image style="width:114upx;height:114upx" :src='item.headPic' />
                <view class="Designer_title">
                    <view class="title_top">
                        <text class="name">{{item.name}}</text>
                        <view class="jingyan">{{item.workYears}}</view>
                        
                    </view>
                    <view class="title_botm">
                        <text class="rank">{{item.position}}</text>
                        <text class="works">作品:{{item.caseShowPic.length}}</text>
                    </view>
                
                    
                </view>
                
            </view>
            
            <view class="Designer_works" @tap="imgView(item.id,index)" >
                <image   v-for="(item1,index1) in item.caseShowPic"  :key='index1' :src='item1'  />
                
            </view>
        </view>
        <!-- <view class="bottom">已经到底啦~</view> -->
    </view>
</view>
</template>
<script>
import json from '@/json'
import {mapState} from 'vuex'
export default {
     data() {
         return {
             designData:'',
             msgImgList:[],
             id:'',
             type:'',
             showPage:true
         }
     },
    computed:{
		...mapState(['designer_team'])
	},
     onLoad(option){
        //  console.log(JSON.parse(option.list))
        
         this.designData =this.$store.state.designer_team
         this.id = option.id
        //  console.log(this.designData)
         console.log(this.$store.state.designer_team)
        //  this.designData.forEach(element => {
        //      while(element.caseShowPic.length != 3){
        //           element.caseShowPic.push('../../static/img/cjq-about/none.jpg')
        //      }
        //  });
         this.type = option.type
     },
     mounted() {
        this.$nextTick(()=>{
            var ref = document.querySelectorAll(".Designer")
            // console.log(ref)
            ref[ref.length-1].style.border = 'none'

           
           this.showPage = true
           
            
        })
     },
     methods: {
         toAbout(uid,index){
            uni.navigateTo({
                url: "../../pages/design_team/designer_about?uid="+uid+'&id='+this.id+'&index='+index+'&type='+this.type
            });
           
         },
        imgView(uid,index){
			uni.navigateTo({
                url: "../../pages/design_team/designer_about?uid="+uid+'&id='+this.id+'&list='+'&index='+index+'&type='+this.type
            });
            // this.msgImgList.push(url)
            //     uni.previewImage({
            //         indicator:"none",
            //         current:url,
            //         urls: this.msgImgList
            // });
        }
         
     },
}
</script>
<style lang="scss" scoped>
uni-page-body,.content{width:100%;height:100%;background: #fff;}
.Designer{
    margin: 0 auto;
    width: 95%;
    height: auto;
    border-bottom: 1px solid rgba(238,238,238,1);
    margin-bottom: 40upx;
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
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        margin-bottom: 40upx;
        image{
            width:226upx;
            height:226upx;
            
        }
        image:nth-child(2){
             margin:0 20upx
        }
    }
}
.bottom{
    width: 100%;
    height:91upx;
    text-align: center;
    line-height: 91upx;
    background:rgba(238,238,238,1);
    font-size:20upx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(108,108,108,1);
    position: relative;
    bottom: 0
}
</style>