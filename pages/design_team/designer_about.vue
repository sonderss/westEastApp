<template>
<view class="ui">
    <view v-if="!showPage">
        <view class="card">
               <!-- <image mode='widthFix' :src="list.touxiang" style="width:120upx;height:120upx;"/> -->
               <view class="image1">
                  <image mode='widthFix' :src="list.headPic" style="width:100%;height:100%" @tap="txView(list.headPic)"/>
               </view>
                <text class="name">{{list.name}}</text>
                <view style="margin-top:30upx">
                    <text class="rank">{{list.position}}</text>
                    <text class="rank" style="margin-left:60upx">{{list.workYears}}</text>
                </view>

                <view class="db_chioce">
                    <text class="one" :class="{'textColor':showBorder == true}" @click="works">作品（{{list.caseShowPic.length}}）</text>
                    <view v-if="showBorder" class="border_one"></view>
                    <text class="two" :class="{'textColor':showBorder == false}" @click="jieshao">个人介绍</text>
                    <view v-if="!showBorder" class="border_two"></view>
                </view>
        </view>
        <view class="mid" >
              <designer :datalist="datalist" :content='content' :design='design' :isShow="isShow"></designer>
        </view>
        <view class="test"></view>
       <!-- <btmbtn :cjq_city="cjq_city" left_name="电话客服" @shoucang="shoucang"  :left_icon="left_icon" btn_name="免费为我报价" isBaoJia="isYuYue"></btmbtn> -->
    </view>
</view>
</template>
<script>
import json from '@/json'
import designer from '../../components/designer/designer'
import btmbtn from '../../components/designer/btmbtn'
import dapi from '../../apis/https/myApi'
export default {
    components:{designer,btmbtn},
    data() {
        return {
            // uid:'',
            showBorder:true,
            list:[],
            isShow:1,
            a:'',
            msgImgList:[],
            // left_icon:'../../static/img/designTeam/jieshao/phone.png',
            // cjq_city:'',
            datalist:[],
            content:'',
            design:'',
            showPage:true
        }
    },
    onLoad(option) { 
            uni.showLoading({
                title:'加载中'
            })
            // this.list = json.designData[option.uid]
            // console.log(this.list )
            // this.worksData = json.worksData
            // console.log(option.id,option.uid)
            // console.log(JSON.parse(option.list))
            this.list =this.$store.state.designer_team[option.index]
            console.log(this.list)
            if(option.type === '0'){
                console.log('装修')
                let param = {
                    companyid:option.id,
                    designerid:option.uid,
                    pageindex:1,
                    pagesize:20
                }
                dapi.getTrimCasePageList(param,this)
            }else{
                console.log('建筑')
                let param = {
                    companyid:option.id,
                    designerid:option.uid,
                    pageindex:1,
                    pagesize:20
                }
                dapi.getArchitectureWorks(param,this)
            }
            
    },
    methods: {
        shoucang(src){
            if(src){
                this.left_icon = '../../static/img/designTeam/jzcompon/shixin.png'
                
            }
            if(!src){
                this.left_icon = '../../static/img/designTeam/jzcompon/kongxin.png'
            }
          
        },
        works(){
           this.showBorder=true
           this.isShow = 1
        },
        jieshao(){
            this.showBorder=false
             this.isShow = 2
             this.content = this.list.selfIntroduction
             this.design = this.list.designConcept
        },
        txView(url){
            this.msgImgList.push(url)
                uni.previewImage({
                    indicator:"none",
                    current:url,
                    urls: this.msgImgList
                });
        }
    },
    mounted() {
        // uni.hideLoading()
       
    },
}
</script>
<style lang="scss" scoped>

.mid{
      flex: 1;
      overflow: auto;
}
.ui{
    display: flex;
    flex-direction: column;
   
}
    .card{
        width: 100%;
        height: 358upx;
        border-bottom: 1px solid #EEEEEE;
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;
        // position: fixed;
        z-index: 999;
        background: #fff;
      
      
        .name{
            margin-top: 30upx;
            font-size:30upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(60,60,60,1);
        }
        .rank{
            font-size:26upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(75,75,75,1);
        }
        .db_chioce{
            width: 100%;
            height: 56upx;
            margin-top: 50upx;
            display: flex;
            justify-content: space-around;
            position: relative;
            .one{
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(58,58,58,1);
                line-height:13px;
                  text-align: center;
            }
            .two{
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(58,58,58,1);
                line-height:13px;
                  text-align: center;
            }
            .border_one{
                width: 90upx;
                height: 4upx;
                background: #C17B7D;
                position: absolute;
                left: 140upx;
                bottom: 0;
                
            }
            .border_two{
                 width: 90upx;
                height: 4upx;
                background: #C17B7D;
                position: absolute;
                right: 135upx;
                bottom: 0;
            }
            .textColor{
                color: #C17B7D
            }
        }
    }
    .image1{
        width: 114upx;
        height: 114upx;
    }
</style>