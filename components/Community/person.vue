<template>
<view>
        <view v-if="dataNull">
            <view class="person_view" v-for="(item,index) in list" :key='index'>
                <!-- 个人基本信息 -->
                <view class="top-person" >
                    <view style="   display: flex;  justify-content: space-between;align-items: center;" @tap='goMine'>
                        <view style="width:88upx;height:88upx;" > 
                            <image :src='item.userLogo' style="width:100%;height:100%;margin-left:25upx"/>
                        </view>
                        <view class="mine_" >
                                <text class="nickname" >{{item.userName}}</text>
                                <text v-if="isMy" class="mine_time">{{item.createSpace}}</text>
                        </view>
                    </view>
                
                    <view class="right_sing">
                        <text v-if="isMy" @tap='showPop(index)' class="iconfont " style="color:#B9B9B9;font-size:50upx">&#xe619;</text>
                        <text v-if="!isMy">{{item.createSpace}}</text>
                    </view>
                </view>
                <!-- 文字描述 -->
                <view class="top-text"  @tap='goZhengwen' >
                    <text>{{item.content}}</text>
                </view>
                <!-- 图片 -->
                <view  @tap='goZhengwen' >
                    <view class="mid_photo">
                        <view class="photo"  v-for="(i,index) in item.pics"  :key="index">
                                <image style="width:100%;height:100%" :src='i' />
                                
                        
                            
                            <!-- <image style="width:220upx;height:220upx" src='../../static/img/cjq-about/index_cjq/two.png'/>
                            <image style="width:220upx;height:220upx" src='../../static/img/cjq-about/index_cjq/three.png'/> -->
                        </view>
                    </view>
                </view>
            
                <!-- 底部 -->
                <view class="btm">
                    <view>
                        <view class="btn"><text style="margin-right:15upx">{{item.circleName}}</text><text class="iconfont ico">&#xe60f;</text></view>
                        
                    </view>
                    
                    <view class="btm_right" >
                        
                            <image style="width:35upx;height:33upx" @tap='goZhengwen' src='../../static/img/cjq-about/icons/pinglun.png'/>
                            <text >({{item.commentCount}})</text>
                            <image style="width:35upx;height:33upx" @tap.stop="dianzan(index,$event)" ref='isZan1' :src="item.isFollow ? '../../static/img/cjq-about/icons/shixin_zan.png' : '../../static/img/cjq-about/icons/kongxin_zan.png'"/>
                            <text >({{item.giveCount}})</text>
                            <image style="width:35upx;height:33upx" src="../../static/img/cjq-about/icons/share.png"/>
                            <text></text>
                    </view>
                </view>
                
            </view>
        </view>
        <!-- 暂无数据 -->
        <view class="isNullList" v-if="!dataNull">
                <view class="bakImg"></view>
                <view class="toast_text">暂无动态数据</view>
         </view>
        <unipop ref='bianji'  type="bottom" class="opo" :custom="false">
                    <view class="pop_main">
                        <view class="one" @tap='bianji(index)'>编辑</view>
                        <view class="one mid" @tap='del(index)'>删除</view>
                        <view class="one acti" @tap='close(index)'>取消</view>
                    </view>
        </unipop>
       
</view>
</template>

<script>
import { mapState } from 'vuex';
import unipop from '../../components/uni-popup/uni-popup'
export default {
    components:{unipop},
    props:{
        isMy:{
            type:Boolean
        },
        list:{
            type:Array
        },
        name:{
            type:String,
            default:'用户123'
        }
    },
    data(){
        return{
             list_data:[],
            //  num1:Math.floor(Math.random()*100-1)+1,
            //  num2:Math.floor(Math.random()*100-1)+1,
            dianzanIcon: "../../static/img/cjq-about/icons/kongxin_zan.png",
             isZan:true,
              dianzanIcon1: "../../static/img/cjq-about/icons/shixin_zan.png",
              index:Number,
              noPic:true
        }
       
    },
    onShow(){
        
    },  
    mounted() {

    },
    computed: {
        dataNull(){
            let isnull= false
             if(this.list.length>0){
               isnull = true
            }else{
               isnull= false
            }
            return isnull
        }
    },
    watch: {
        list:function(a,b){
            
            a.forEach((el,index) => {
                 el.pics.forEach((item,n)=>{
                     if(!item || item.length == 0){
                          el.pics.splice(n,1)
                     }
                 })
            });
            //  console.log( a[1].pics)
            this.list_data = a
        },
    },
    methods: {
        dianzan(index){
            this.$emit('dianzan',index)
        },
        goZhengwen(){
            var data = {
                    id: '2',
                    name: this.name,
                    headimg: '/static/img/sendindex/dynamics/header.png',
                    time: '2019年10月21日',
                    tip: '#让选材没有秘密#',
                    title: "看看我们家里环境布置,大家有没有更好的建议,麻烦大家说说看哈!",
                    danamicsimg: ["/static/img/sendindex/dynamics/01.png", "/static/img/sendindex/dynamics/02.png",
                    "/static/img/sendindex/dynamics/03.png"
                    ],
                    sign: '晒晒你的家',
                    dianzan: '463',
                    pinglun: '1235',
                    dianzaned: false,
                    bigimgList:["/static/img/sendindex/banner.png","/static/img/sendindex/banner.png","/static/img/sendindex/banner.png"]
                }
           uni.navigateTo({
               url:'../../pages/maintext/maintext?item='+JSON.stringify(data) 
           })
        },
        goMine(){
            
            this.$emit('isGoMine',0)
        },
        showPop(index){
            this.index =index
             this.$refs.bianji.open()
        },
        bianji(index){
            // console.log('编辑'+index)
            //这里跳转编辑发表页面
			this.$store.state.sendPost.textareaTxt = this.list[index].text
            uni.navigateTo({
                // url:'/pages/community/write_post/write_post'
                url:'../../pages/community/write_post/write_post?value='+this.list[index].text+'&photo='+this.list[index].photo
            })
            console.log(index)
            console.log(this.list[index].photo)
            this.$refs.bianji.close()
        },
        del(index){
            // console.log('删除'+index)
            // console.log(this.list)
            this.list.splice(index,1)
            uni.showToast({
                title: '删除成功',
                duration: 2000
            });
            this.$refs.bianji.close()
        },
        close(index){
            // console.log('取消'+index)
            this.$refs.bianji.close()
        }
    },
}
</script>

<style lang="scss" scoped>
 @font-face {
     font-family: test1-icon;
     src: url('../../static/iconfont/designfontindex.ttf');
 }
    .iconfont {
        font-family: test1-icon;
        font-size: 30upx;
        color: #C17B7D;
        font-weight: 600
    }
    .person_view{
        width: 100%;
        // height: 570upx;
        margin-top: 20upx;
        .top-person{
            width: 100%;
            height: 150upx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nickname{
                height:28upx;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(62,62,62,1);
                line-height:13upx;
                margin-left: 35upx;

            }
            .right_sing{
               
                height:20upx;
                font-size:20upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(62,62,62,1);
                line-height:13upx;
                margin-right: 20upx;
            }
        }
        .top-text{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text{
                width: 90%;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(62,62,62,1);
                line-height:38upx;
               padding: 10upx 0;
            }
        }
        .mid_photo{
            width: 95%;
            // height: 222upx;
            margin: 0 auto;
           display: flex;
           justify-content: space-between;
           flex-wrap: wrap;
            .photo{
                width:220upx;
                height:220upx;
               
            }
        }
        .btm{
            width: 100%;
            height: 97upx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .btn{
                width:216upx;
                height:60upx;
                background:#f3e5e5;
                text-align: center;
              
                border-radius:20upx;
                line-height: 60upx;
                margin-left: 27upx;
               
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:400;
                color:#C17B7D;
                line-height:60upx;
                position: relative;
               
               .ico{
               position: absolute;
               right: 10upx;
               top: 5upx
               }
               
            }
            
            .btm_right{
               
                display: flex;
                justify-content: space-around;
                align-items: center;
                 margin-right: 37upx;
                image{
                    margin: 0 5upx;
                     margin-left: 30upx
                }
                text{
                    font-size:26upx;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(193,123,125,1);
                    line-height:38upx;
                }
            }
        }
    }
    .mine_time{
         font-size:20upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(62,62,62,1);
                line-height:13upx;
            margin-left: 33upx;
            margin-top: 10upx
    }
    .mine_{
        display: flex;
        flex-direction: column;
       

    }
    .pop_main{
        width: 100%;
        .one{
            width: 100%;
            height: 120upx;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size:32upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(62,62,62,1);
            line-height:13upx;
        }
        .mid{
            border-top: 1upx solid #e5e5e5;
            border-bottom: 1upx solid #e5e5e5;
        }
        .acti{
            color: #C17B7D
        }
    }
     .isNullList{
        width: 100%;
        height: 500upx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .bakImg{
             width: 179upx;
             height: 153upx;
            background-image: url('../../static/img/sendindex/notalk.png');
            background-size: cover;
        }
        .toast_text{
            font-size:26upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(193,123,125,1);
            margin-top: 20upx
        }
    }
</style>