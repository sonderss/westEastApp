<template>
    <view>
        <view class="top_back">
            <view class="top_titleIcon">
                 <text @tap="back" class="iconfont  icon-zuojiantou">&#xe67c;</text>
                  <text class="iconfont icon-zhuanfa" @tap='share'>&#xe613;</text>
            </view>
            <view class="img_touxiang">
                <image style="width:141upx;height:141upx" :src='userMsg.headPic' />
            </view>
            <!-- <button class="guanzhu_btn"></button> -->
            <!-- <view v-if="!isMy" class="guanzhu_btn" :class="{'jian':add === false}" @tap='addUs'>
				 <text :class="{'txt':add === false}">{{addTxt}}</text>
			</view> -->
        </view>
        <view class="mine_msg">
            <text style="font-size:30upx;font-family:PingFang SC;font-weight:500;color:rgba(57,57,57,1);line-height:13upx;margin-left:52upx">{{userMsg.userName}}</text>
            <text style="font-size:24upx;font-family:PingFang SC;font-weight:400;color:rgba(112,112,112,1);line-height:13upx;margin-left:52upx">{{userMsg.sign?userMsg.sign:'暂无签名'}}</text>
            <view class="txt">
                <text @tap='guanzhu_view'>{{community.follwCount}}关注</text>   
                <text>{{community.fansCount}}粉丝</text>
                <text>{{community.giveUpCount}}点赞</text>
            </view>
        </view>
          <view class="btn_chioce" :class="{'testFixed': isChange === true}">
             <view class="btn_left" @tap='chioce_new'>
                 <text class="btn_left_text" :class="{'active' : isActive == true}" >动态</text>
             </view>
             <view class="border_mid"></view>
             <view class="btn_right" @tap='chioce_jx'>
                  <text class="btn_right_text" :class="{'active' : isActive == false}" >图片</text>
             </view>
        </view>
        
        <person v-if="isActive" :isMy='isMy' :list='list_data' @dianzan='isdianzan' @isGoMine='isGoMine' :name='userMsg.userName'></person>
        <myPhoto v-if="!isActive" :list="userImg"></myPhoto>
         <view class="btm_last"></view>
         <uniPopup ref='isShare' type="bottom" :custom="false">
             <view class="cont">
					<view class="weixin">
					
						<image @click="share_weixin" src='../../static/img/confirmation/wechat.png'/>
							<text style="padding-top:15upx">微信好友</text>
					</view>
					<view class="pengyou">
						
						<image @click="share_pyquan" src='../../static/img/confirmation/pyq.png'/>
						<text  style="padding-top:15upx">朋友圈</text>
					</view>
				</view>
				<view class="btn" @click="hidePop">关  闭</view>
         </uniPopup>
    </view>
</template>


<script>
let data1 = require('../../components/Community/data_cjq.json')
import person from '../../components/Community/person'
import myPhoto from '../../components/Community/minephoto'
import uniPopup from '../../components/uni-popup/uni-popup'
import uapi from '../../apis/user/user'
export default {
    components:{person,myPhoto,uniPopup},
    data(){
        return{
             addTxt:'加入',
            add:false,
            isActive:true,
            list_data:[],
            isMy:false,
            isChange:false,
            // name:'王大大',
            userMsg:{},
            id:'',
            community:{},
            userImg:[],
            isNoPersonNull:true,
            way:Boolean
        }
    },
    onShow(){
        // var user = this.$store.state.userMsg
        // console.log(user)
        
        uni.getStorage({
            key: 'userInfo',
            success:  (res)=> {
                if(this.id == res.data.id){
                     //这里是登录者的个人中心
                     console.log('这是我的主页')
                    //  this.isMy = false
                    this.isMy = true
                }else{
                    //这里是其他人的个人中心
                    this.isMy = false
                    console.log('这是别人的主页')
                }
            }
        });
    },
    onLoad:function(option){
        // console.log(option.isMy)
        //这里判断是否是自己进入个人主页
        // if(option.isMy === '1'){
        //     this.isMy = true
        // }
        // this.name = option.name
        uni.showLoading({
            title:'加载中'
        })
        if(!option.id){
           
            uni.showToast({
                icon:'none',
                title:'请把个人中心ID传进来,此页面只需ID即可',
                duration:2000
            })
            return
        }
        this.id = option.id
        this.way = option.way
        if(!option.way){
            //通过文章ID
            this.way  = 1
        }
        // this.nickname = option.name
        //  this.userMsg = this.$store.state.userMsg
        // console.log(userMsg)
        let param = {
            id: this.id,
            way:false
        }
        let param1 = {
            usid: this.id ,
            pageindex:1,
            pagesize:20
        }
        let param2 = {
            id: ''+this.id ,
            way:3,
            isbase:0,
            pageindex:1,
            pagesize:20
        }
        this.getUserInfo(param)
        this.getInfoMsgImg(param1)
        this.GetCircleArticlePageList(param2)
      
    },
    onPageScroll: function(Object) {
        // console.log(Object.scrollTop);//实时获取到滚动的值
        if(Object.scrollTop >=  323){
            this.isChange = true
        }
        if(Object.scrollTop <=  323){
            this.isChange = false
        }
    },
    methods: {
        getUserInfo(param){
            //获取用户信息
            uapi.getInfoMsg(param).then(res=>{
                // console.log(res)
                if(res.statusCode === 200){
                    uni.hideLoading()
                    if(res.data.status == 0){
                        this.userMsg = res.data.data
                        this.community = this.userMsg.community 
                    }
                    return
                }else if(res.statusCode == 401){
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"未登录或登录已过期",
                        duration:2000
                    })
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'../auth/login/login1'
                        })
                    },2000)
                    return
                }else{
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"系统错误，请稍后重试",
                        duration:2000
                    })
                    return
                }
            }).catch(err=>{
                uni.hideLoading()
                uni.showToast({
                    icon:"none",
                    title:"网络未连接",
                    duration:2000
                })
                return
            })
        },
        getInfoMsgImg(param){
            //获取图片信息
            uapi.getInfoMsgImg(param).then(res=>{
                // console.log(res)
                if(res.statusCode === 200){
                    uni.hideLoading()
                    if(res.data.status == 0){
                       this.userImg = res.data.data.list
                    }
                   
                }else if(res.statusCode == 401){
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"未登录或登录已过期",
                        duration:2000
                    })
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'../auth/login/login1'
                        })
                    },2000)
                    return
                }else{
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"系统错误，请稍后重试",
                        duration:2000
                    })
                    return
                }
            }).catch(err=>{
                uni.hideLoading()
                uni.showToast({
                    icon:"none",
                    title:"网络未连接",
                    duration:2000
                })
                return
            })
        },
        GetCircleArticlePageList(param){
            uapi.GetCircleArticlePageList(param).then(res=>{
                // console.log('articl:',res)
                if(res.statusCode === 200){
                    uni.hideLoading()
                    if(res.data.status == 0){
                        // console.log(res.data.data.list)
                        this.list_data = res.data.data.list
                    }
                   
                }else if(res.statusCode == 401){
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"未登录或登录已过期",
                        duration:2000
                    })
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'../auth/login/login1'
                        })
                    },2000)
                    return
                }else{
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"系统错误，请稍后重试",
                        duration:2000
                    })
                    return
                }

            }).catch(err=>{
                uni.hideLoading()
                uni.showToast({
                    icon:"none",
                    title:"网络错误，请稍后重试",
                    duration:2000
                })
                return
            })
        },
        isGoMine(isGomine){
            if(isGomine === 0){
                //这里跳转到帖子详情
                
            }
        },
        isdianzan(index){
            // console.log(index)
            // this.list_data[index].isFollow = ! this.list_data[index].isFollow
            if(!this.list_data[index].isFollow){
                this.list_data[index].giveCount ++
                
                this.list_data[index].isFollow = true
                // console.log(this.list_data[index].giveCount)
                
            }else{
                this.list_data[index].giveCount --
                this.list_data[index].isFollow = false
                if(this.list_data[index].giveCount<=0){
                    this.list_data[index].giveCount = 0
                }
                // console.log(this.list_data[index].giveCount)
            }
        },
        back(){
            // 在C页面内 navigateBack，将返回A页面
            uni.navigateBack({
                delta: 1
            });

        },
         chioce_new(){
            this.isActive = true
            console.log('文章列表:',this.list_data)
        },
         chioce_jx(){
            this.isActive = false
        },
        share(){
            this.$refs.isShare.open()
        },
         addUs(){
            var that = this
            var num =Math.floor(Math.random()*100-1)+1 
           if(this.addTxt === '已加入'){
               
                uni.showModal({
                    title: '真的要离开我们吗',
                    content: 'are you sure',
                    cancelText:'容我想想',
                    confirmText:'狠心离开',
                    cancelColor:'#C17B7D',
                    confirmColor:'#C17B7D',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                            that.addTxt = '加入'
                            that.add = false
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                            that.addTxt ='已加入'
                        }
                    }
                });
           }
           if(this.addTxt === '加入'){
              uni.showModal({
                  title:'欢迎加入',
                  content:`你是第${num}位加入我们的`,
                  showCancel:false
              })
                setTimeout(()=>{
                   uni.hideToast();
                },1500)
                this.addTxt = '已加入'
                that.add = true
           }
          
        },
        share_weixin(){
                this.$refs.isShare.close()
                // #ifdef  APP-PLUS
                uni.showLoading({
                    title:'启动中'
                })
              
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
					},
					fail: err => {
                        console.log(JSON.stringify(err))
                        uni.hideLoading()
                        uni.showToast({
                            icon:"none",
                            title:"分享失败，请更新到最新版本",
                            duration:2000
                        })
                        return
					}
                });
                // #endif
                // uni.hideLoading()
                uni.showToast({
                    icon:"none",
                    title:"分享失败，请在移动端操作",
                    duration:2000
                })
        },
        share_pyquan(){
                this.$refs.isShare.close()
                // #ifdef  APP-PLUS
                uni.showLoading({
                    title:'启动中'
                })
                 
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
                            icon:"none",
                            title:"分享失败，请更新到最新版本",
                            duration:2000
                        })
                        return
					}
                });
                // #endif
                // uni.hideLoading()
                uni.showToast({
                    icon:"none",
                    title:"分享失败，请在移动端操作",
                    duration:2000
                })
        },
        hidePop(){
            this.$refs.isShare.close()
        },
        //跳转关注页
        guanzhu_view(){
            uni.navigateTo({
                url:'../cjq_minemsg/gzindex?navNum=0'
            })
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
    }
    .img_touxiang{
        width: 141upx;
        height: 141upx;
       position: absolute;
       top: 240upx;
       left: 37upx
    }
    .guanzhu_btn{
        width:130upx;
        height:60upx;
        background:rgba(193,123,125,1);
        border:1upx solid rgba(193,123,125,1);
        border-radius:10upx;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 55upx;
         position: absolute;
       top: 290upx;
       right: 73upx
    }
     .jian{
             background-image:url('../../static/img/cjq-about/jia.png');
            background-repeat: no-repeat;
            background-size: 23upx 23upx;
            background-position: 15upx 18upx 
        }
    .txt{
            margin-left:25upx
    }
    .mine_msg{
        width: 100%;
        height:210upx;
       
        margin-top: 62upx;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
         .txt{
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:13upx;
        margin-left:42upx;
        text{
            margin: 0 10upx
        }
    }
    }
    .btn_chioce{
        width: 100%;
        height: 90upx;
        display: flex;
        align-items: flex-end;
       background: #fff;
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
      .btm_last{
        width: 100%;
        height: 100upx;

    }
    .testFixed{
         position: fixed;
        top: 0;
        z-index: 9999;
    }
    .cont{display: flex;justify-content: space-around;height: 274upx;background: #fdfdfd;}
.cont image{width: 81upx;height: 81upx;}
.weixin{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.pengyou{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.btn{height: 109upx;display: flex;justify-content: center;align-items: center;border-top: 1px solid #e1e1e1;color: #000;font-size: 35upx;}
</style>