<template>
<view>
        <view class="top_back">
            <view class="top_titleIcon">
                 <text @tap="back" class="iconfont  icon-zuojiantou">&#xe67c;</text>
                  <text class="iconfont icon-zhuanfa" @tap='share'>&#xe613;</text>
            </view>
            <view class="top_main">
                <view class="top_mian_left">
                    <text class="top_main_title">{{data.name}}</text>
                     <text class="top_main_ptitle">{{data.number}}人围观</text>
                </view>
                <!-- <view :class="{'jian':add === false}" @tap.stop='addUs'>
                    <text :class="{'txt':add === false}" >{{addTxt}}</text>
                </view>  -->
                 <view :class="data.isJoin? 'add1 ': 'add jian'"  @tap.stop='addUs'>
                    <text :class="data.isJoin ? 'txt1' : 'txt' ">{{addTxt}}</text>
                </view> 
            </view>
        </view>
        <view class="cir_key" v-if="isShowKey">
            <text>见到设计成果后的入住感想；是精打细算的预算清单和用心挑 选的好物... 有家有故事，邀你一起分享#真实人家#！</text>
        </view>

        <view class="btn_chioce">
             <view class="btn_left" @tap='chioce_new'>
                 <text class="btn_left_text" :class="{'active' : isActive == true}" >最新</text>
             </view>
             <view class="border_mid"></view>
             <view class="btn_right" @tap='chioce_jx'>
                  <text class="btn_right_text" :class="{'active' : isActive == false}" >精选</text>
             </view>
        </view>
         <!-- 分享 -->
			<uni-popup ref='isShare' type="bottom" :custom="false">
				<view class="cont">
					<view class="weixin">
					
						<image @click="share_weixin" src='https://i.loli.net/2019/10/15/TUuka4rKxyYC1Lb.jpg'/>
							<text style="padding-top:15upx">微信好友</text>
					</view>
					<view class="pengyou">
						
						<image @click="share_pyquan" src='https://i.loli.net/2019/10/15/AoOa9qEk5rKGeXR.jpg'/>
						<text  style="padding-top:15upx">朋友圈</text>
					</view>
				</view>
				<view class="btn" @click="hidePop">取  消</view>
		</uni-popup>
</view>
</template>

<script>
import uniPopup from '../../components/uni-popup/uni-popup'
import { parse } from 'path'
export default {
    components:{uniPopup},
    props:{
        list:{
            type:String
        },
        title:{
            type:String,
            default:''
        },
        ptitle:{
            type:String,
            default:''
        },
        isShowKey:{
            type:Boolean
        }
    },
    mounted() {
        this.data = JSON.parse(this.list)
        console.log(this.data)
        this.add = this.data.isJoin
        if(this.data.isJoin){
            this.addTxt = '已加入'
        }else{
           
            this.addTxt = '加入'
        }
       
    },
    data(){
        return{
            isActive:true,
            addTxt:'',
            add:Boolean,
            data:{}
        }
    },
    methods: {
        chioce_new(){
            this.isActive = true
            this.$emit('newData',0)
        },
         chioce_jx(){
            this.isActive = false
            this.$emit('newData',1)
        },
        addUs(){
            
            var that = this
            var num =Math.floor(Math.random()*100-1)+1 
            var falg = false
            if(that.addTxt === '已加入'){
                falg = true
            }
            if(that.addTxt === '加入'){
                    falg = false
            }
           if(falg){
              
                uni.showModal({
                    title: '真的要离开我们吗',
                    content: '想好再说',
                    cancelText:'容我想想',
                    confirmText:'狠心离开',
                    cancelColor:'#C17B7D',
                    confirmColor:'#C17B7D',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                            that.addTxt = '加入'
                            that.data.isJoin = false
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                            that.addTxt ='已加入'
                        }
                    }
                });
           }
           if(!falg){
            //   uni.showModal({
            //       title:'欢迎加入',
            //       content:`你是第${num}位加入我们的`,
            //       showCancel:false
            //   })
                uni.showToast({
                    icon:'none',
                    title: `您是第${num}位加入我们的`,
                    duration: 2000
                });
                // // setTimeout(()=>{
                //    uni.hideToast();
                // },1500)
                // alert( `您是第${num}位加入我们的`)
                that.addTxt = '已加入'
               that.data.isJoin = true
           }
        //    console.log(that.addTxt)
        },
        share(){
             this.$refs.isShare.open()
        },
        share_weixin(){
                this.$refs.isShare.close()
                uni.showLoading({
                    title:'启动中'
                })
                //   #ifdef  APP-PLUS
            	uni.share({
					provider: 'weixin',
					scene: "WXSceneSession",
					type: 5,//分享到小程序
					imageUrl: 'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
					title: '广州佳宇设计',
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path: 'pages/index/index',
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
                        console.log(JSON.stringify(ret));
                        uni.hideLoading()
					},
					fail: err => {
                        console.log(JSON.stringify(err))
                        uni.hideLoading()
                        uni.showToast({
                            icon:'none',
                            title:"客户端未安装或版本太低",
                            duration:2000
                        })
                        return
					}
                });
                // #endif 
                
            setTimeout(()=>{
                uni.hideLoading();
                uni.showToast({
                    icon:"none",
                    title:"此设备不支持小程序分享",
                    duration:2000
                })
            },800)
        },
        share_pyquan(){
            this.$refs.isShare.close()
                uni.showLoading({
                    title:'启动中'
                })
                //   #ifdef  APP-PLUS
                uni.share({
					provider: 'weixin',
					scene: "WXSenceTimeline",
					type: 5,//分享到小程序
					imageUrl: 'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
					title: '广州佳宇设计',
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path: 'pages/index/index',
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
                        console.log(JSON.stringify(ret));
                        uni.hideLoading()
                        
					},
					fail: err => {
                        console.log(JSON.stringify(err))
                        uni.hideLoading()
                        uni.showToast({
                            icon:'none',
                            title:"客户端未安装或版本太低",
                            duration:2000
                        })
                        return
					}
                });
                 // #endif 
                setTimeout(()=>{
                uni.hideLoading();
                uni.showToast({
                    icon:"none",
                    title:"此设备不支持小程序分享",
                    duration:2000
                    })
                },800)
        },
        hidePop(){
            this.$refs.isShare.close()
        },
        back(){
            // 在C页面内 navigateBack，将返回A页面
            uni.navigateBack({
                delta: 1
            });

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
        font-size: 40upx;
        color: #fff
    }
    .top_back{
        width: 100%;
        height: 316upx;
        background: url('../../static/img/cjq-about/mine_photo/bac.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        .top_titleIcon{
            width: 100%;
            height: 40upx;
            margin-top: 50upx;
           display: flex;
           justify-content: space-between;
           .icon-zuojiantou{
               margin-left: 20upx;
               
           }
           .icon-zhuanfa{
               margin-right: 25upx
           }
        }
        .top_main{
            width: 100%;
            height: 154upx;
           
            .top_mian_left{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                height: 100%;
                margin-left: 34upx;
                float: left;
            }
            .top_main_title{
                height:38upx;
                font-size:40upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(255,255,255,1);
                margin-bottom: 20upx;

            }
            .top_main_ptitle{
                height:29upx;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(255,255,255,1);
                margin: 10upx 0;
            }
        }
        .add{
            width:128upx;
            height:55upx;
            background:rgba(193,123,125,1);
            border:1upx solid rgba(193,123,125,1);
            border-radius:10upx;
           float: right;
           margin-top:120upx;
           margin-right: 45upx;
            font-size:26upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height: 55upx;
           
        }
        .add1{
             width:128upx;
            height:55upx;
            background: rgba(191, 191, 191, 1);
            border:1upx solid rgba(191, 191, 191, 1);
            border-radius:10upx;
           float: right;
           margin-top:120upx;
           margin-right: 45upx;
            font-size:26upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height: 55upx;
        }
        .jian{
             background-image:url('../../static/img/cjq-about/jia.png');
            background-repeat: no-repeat;
            background-size: 23upx 23upx;
            background-position: 15upx 18upx 
        }
        .txt{
            margin-left:25upx;
			width: 100upx;
        }
    }
    .cir_key{
        height: 163upx;
        width: 100%;
        border-top: 18upx solid #F1F1F1;
          border-bottom: 18upx solid #F1F1F1;
          display: flex;
          justify-content: center;
          align-items: center;
          text{
              width:687upx;
                height:72upx;
                font-size:26upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(73,73,73,1);
          }
    }
    .btn_chioce{
        width: 100%;
        height: 90upx;
        display: flex;
    align-items: flex-end;
        .btn_left{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
           
            .btn_left_text{
                width: 63upx;
                height: 42upx;
                font-size: 30upx;
                color: #343434;
            }
        }
         .btn_right{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
             .btn_right_text{
                width: 63upx;
                height: 42upx;
                font-size: 30upx;
                color: #343434;
            }
        }
    }
    .active{
          border-bottom: 3upx solid #C17B7D;
          border-radius: 2upx;
          color: #C17B7D !important;
    }
    .border_mid{
      
        height:40upx;
        border:1upx solid rgba(0,0,0,1);
        opacity:0.1;
        
    }
.cont{display: flex;justify-content: space-around;height: 274upx;background: #fdfdfd;}
.cont image{width: 81upx;height: 81upx;}
.weixin{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.pengyou{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.btn{height: 109upx;display: flex;justify-content: center;align-items: center;border-top: 1px solid #e1e1e1;color: #ff0000;font-size: 35upx;}
</style>