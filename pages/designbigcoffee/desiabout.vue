<template>
<view>
        <view class="top_bder">
            <view class="imgview">
                <image style="width:100%;height:100%" :src='list[index].logoPic' />
            </view>
            <view class="comname">
                <text>{{title}}</text>
            </view>
            <view class="comname1">
                <text>设计重塑日常</text>
            </view>
            <view class="worker">
                <text>设计师类型：{{list[index].designType?list[index].designType :'暂无'}}</text>
                 <text style=" margin-left: 46upx">经验：{{list[index].workYears?list[index].workYears:'暂无'}}</text>
            </view>
        </view>
        <!-- 擅长空间 -->
        <view class="scview" style="margin-top:20upx;margin-bottom:0" >
            <view class="scview_top">
                <view class="scview_top_imgview"><image style="width:100%;height:100%" src='../../static/img/cjq-about/xingbiao2x.png' /></view>
                <text>擅长空间</text>
            </view>
            <view class="scview_btm">
                <text>{{list[index].spaceType_Str?list[index].spaceType_Str:'暂无'}}</text>
            </view>
        </view>
         <view class="scview"  style="margin:10upx auto">
            <view class="scview_top">
                <view class="scview_top_imgview"><image style="width:100%;height:100%" src='../../static/img/cjq-about/xingbiao2x.png' /></view>
                <text>擅长风格</text>
            </view>
            <view class="scview_btm">
                <text>{{list[index].styleType_Str?list[index].styleType_Str:'暂无'}}</text>
            </view>
        </view>
        <!-- 自我介绍 -->
        <view class="scview1">
            <view class="scview_top">
                <view class="scview_top_imgview"><image style="width:100%;height:100%" src='../../static/img/cjq-about/zhengshu2x.png' /></view>
                <text>自我介绍</text>
            </view>
            <view class="scview_top_zj ">
                <text >点击取消,会调用方法,但不会产生取消隐藏效果,点击确认也一样,确认函数的确调用了,但w-picker就是不隐藏 watch监听的使用,在uniapp可能有一定局限性...
                    点击取消,会调用方法,但不会产生取消隐藏效果,点击确认也一样,确认函数的确调用了,但w-picker就是不隐藏 watch监听的使用,在uniapp可能有一定局限性...
                </text>
            </view>
        </view>
        <view class="scview1" >
            <view class="scview_top">
                <view class="scview_top_imgview"><image style="width:100%;height:100%" src='../../static/img/cjq-about/jinlingyingcaiwangtubiao1.png' /></view>
                <text>证书奖项</text>
            </view>
            <view class="scview_top_zj ">
                <text>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX</text>
            </view>
        </view>
</view>
</template>

<script>
let data = require('../designer/data.json')
export default {
    data(){
        return{
            title:'',
            index:'',
            list:[],//data.list
        }
    },
    onLoad:function(option){
         uni.setNavigationBarTitle({
        　　title:"关于"+option.name
        })
        this.title = option.name
        this.index = option.index
        // var data = JSON.parse(option.data) 
        this.list = JSON.parse(option.data) 
        if(this.list.length != 0){
            var spaceType_Str_ = this.list[this.index].spaceType_Str.replace(/,/g,'/')
            this.list[this.index].spaceType_Str = spaceType_Str_
            var styleType_Str_ = this.list[this.index].styleType_Str.replace(/,/g,'/')
            this.list[this.index].styleType_Str = styleType_Str_
            console.log(this.list)
        }else{
            uni.showToast({
                icon:'none',
                title:'数据加载失败',
                duration:2000
            })
            return
        }
        
       
    }
}
</script>

<style lang="scss" scoped>
 @import './desiabout.scss';
.scview1{
 margin-top: 20upx;
 .scview_top_zj{
        width:100%;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(149,149,149,1);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 10upx auto;
         line-height: 30upx;
       text{
           width: 595upx;
           margin-left: 50upx
       }
    }
.scview_top{
     display: flex;
        align-items: center;
        .scview_top_imgview{
            width:35upx;
            height:35upx;
            margin-left: 42upx;
           
        }
        text{
            font-size:30upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(46,46,46,1);
            margin-left: 27upx;
        }
}
}
  
</style>