<template>
<view>
    <view v-if="isNull">
       <view class="top_title">
            <view class="top_message" >
                <view class="imgview" @tap="toAbout(title)">
                    <image style="width:94upx;height:94upx" :src="imagesrc?imagesrc:'https://hellorfimg.zcool.cn/preview260/1037719192.jpg'" />
                </view>
                <view class="top_name" @tap="toAbout(title)">
                     <text>{{title?title:'暂无'}}</text>
                     <text style="font-size:26upx;margin-top:18upx">{{list[index].address?list[index].address:'暂无'}}</text>
                </view>
               
                 <button :loading="isLoading" @tap="gz" :class="isfollow ? 'button2':'button1'">{{ guanzhu}}</button>
            </view>
            <view class="top_yuyue">
                 <view class="pf_text">
                     <text class="txt_1">{{list[index].price?list[index].price:'暂无'}}</text>
                     <text class="txt_2">设计收费</text>
                 </view>
                 <view class="pf_text1">
                    <view class="pf_text pf_text2">
                        <text class="txt_1">{{list[index].appointmentCount?list[index].appointmentCount:"暂无"}}</text>
                        <text class="txt_2">预约</text>
                    </view>
                    <view class="pf_text pf_text2 pf_right" >
                     <text class="txt_1">{{list[index].followCount?list[index].followCount:'暂无'}}</text>
                     <text class="txt_2">关注</text>
                    </view>
                 </view>
            </view>
            <view class="btn">
                <button class="yuyue_btn" @tap='yuyue(title)'>在线预约</button>
            </view>
       </view>
       <!-- 案例 -->
       <view class="anli_title"><text>案例（{{datalist.length === 0?" ":datalist.length}}）</text></view>
       <view class="tedst" v-if="datalist.length === 0 ? false:true">
            <vue-works :isPages='0' :isShow="isShow" :datalist="datalist"></vue-works>
       </view>
       <!-- 数据查询失败 -->
		<view v-if="datalist.length === 0 ? true:false">
			  	<view  class="isDetail_none">
			      <view class="cen_bacg">
					   <view style="font-size:30upx;width:180upx;position:absolute;bottom:-40upx">暂无商品数据</view>
				  </view>
				</view>
		</view>
       <view class="bottom" >已经到底啦~</view>
    </view>
       <!-- 分享 -->
			<uni-popup ref='isShare' type="bottom" :custom="false">
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
				<view class="btn" @click="hidePop">取  消</view>
		</uni-popup>
</view>
</template>
<script>
let data = require('../designer/data.json');
import vueWorks from '../../components/designer/designer'
import uniPopup from '../../components/uni-popup/uni-popup'
import dapi from '../../apis/designer/designer'
import { parse } from 'path';
import util from '../../common/util'
export default {
     onShow(){
            if(this.isfollow){
                  this.guanzhu = "已关注"
            }else{
                this.guanzhu = "+  关注"
            }
            
     },  
    methods: {
        toAbout(title){
            uni.navigateTo({
                url:'./desiabout?name='+title+'&index='+this.index+'&data='+JSON.stringify(this.list) 
            })

        },
        yuyue(title){
            //  let abc = this.$v.$login();
            //  console.log(abc)
             let isLogin = util.getToken()
             console.log(isLogin)
             if(!isLogin){
                uni.showToast({
                    icon:"none",
                    title:'请先登录',
                    duration:2000
                })
                 let options = 'name='+title+'&index='+this.index+'&data='+JSON.stringify(this.list)
                 this.myobj = {url:`/pages/designbigcoffee/desiyuyue`,methods:this.yuyue,options:options,type:1}
                console.log(this.myobj)
               setTimeout(()=>{
                    uni.navigateTo({
                         url:'../../pages/auth/login/login1'
                    })
                },2000)
                return 
             }
             uni.navigateTo({
                url:'./desiyuyue?name='+title+'&index='+this.index+'&data='+JSON.stringify(this.list)
            })
        },
        gz(){
            this.isLoading = true
            this.guanzhu = ""
            if(!this.isfollow){
                //这里没有关注
               let param = {
                   'id':this.list[this.index].id
               }
               console.log('123')
               console.log(param)
               dapi.designGZ(param,this).then(res=>{
                    if(res.statusCode === 200){
                       if(res.data.status === 0){
                           
                            this.isLoading = false
                            this.guanzhu = "已关注"
                            this.isfollow = true //关注成功
                            // this.list[this.index].isFollow  = true
                            uni.showToast({
                                icon:'none',
                                title:'关注成功',
                                duration:2000
                            })
                       }else{
                           
                           this.isLoading = false
                           this.guanzhu = "+  关注"
                           this.isfollow = false //关注失败
                           uni.showToast({
                                icon:'none',
                                title:'关注失败',
                                duration:2000
                            })
                       }
                    }else if(res.statusCode === 401){
                                uni.hideLoading()
                                uni.showToast({
                                    icon:'none',
                                    title:'未登录或登录失效，请重新登录',
                                    duration:2000
                                })
                                this.isLoading = false
                                this.guanzhu = "+  关注"
                                let url = window.location.href.split('?')
                                console.log(url)
                                this.myobj = {url:url[1],methods:this.gz,options:{},type:0}
                                 console.log(this.myobj)
                                setTimeout(()=>{
                                    uni.navigateTo({
                                        url:'../../pages/auth/login/login1'
                                    })
                                },2000)
                                return
                    }else{
                        uni.showToast({
                            icon:'none',
                            title:'网络错误，请检查后再试',
                            duration:2000
                        })
                        this.isfollow = false //关注失败
                        setTimeout(()=>{
                            this.isLoading = false
                            this.guanzhu = "+  关注"
                        },1500)
                        return 
                    }
               }).catch(err=>{
                   console.log(err)
                        uni.showToast({
                            icon:'none',
                            title:'网络错误，请检查后再试',
                            duration:2000
                        })
                        this.isfollow = false //关注失败
                        setTimeout(()=>{
                            this.isLoading = false
                            this.guanzhu = "+  关注"
                        },1500)
                        return 
               })
            }else{
                //这里是已关注
               let param = {
                   id:this.list[this.index].id
               }
               console.log('321')
               dapi.designGZ(param,this).then(res=>{
                    if(res.statusCode === 200){
                       if(res.data.status === 0){
                            this.isLoading = false
                            this.guanzhu = "+  关注"
                            this.isfollow = false //取消关注成功
                            //  this.list[this.index].isFollow  = false
                            uni.showToast({
                                icon:'none',
                                title:'取消关注',
                                duration:2000
                            })
                       }else{
                           this.isLoading = false
                           this.guanzhu = "已关注"
                           this.isfollow = true //取消关注失败
                           uni.showToast({
                                icon:'none',
                                title:'取消关注失败',
                                duration:2000
                            })
                       }
                    }else if(res.statusCode === 401){
                                uni.hideLoading()
                                uni.showToast({
                                    icon:'none',
                                    title:'未登录或登录失效，请重新登录',
                                    duration:2000
                                })
                                 this.isLoading = false
                                this.guanzhu = "已关注"
                                 let url = window.location.href.split('?')
                                console.log(url)
                                 this.myobj = {url:url[1],methods:this.gz,options:{},type:0}
                                 console.log(this.myobj)
                                setTimeout(()=>{
                                    uni.navigateTo({
                                        url:'../../pages/auth/login/login1'
                                    })
                                },2000)
                                return
                    }else{
                        uni.showToast({
                            icon:'none',
                            title:'网络错误，请检查后再试',
                            duration:2000
                        })
                        this.isfollow = true //取消关注失败
                        setTimeout(()=>{
                            this.isLoading = false
                            this.guanzhu = "已关注"
                        },1500)
                        return 
                    }
               }).catch(err=>{
                   console.log(err)
                   uni.showToast({
                            icon:'none',
                            title:'网络错误，请检查后再试',
                            duration:2000
                        })
                        this.isfollow = true //取消关注失败
                        setTimeout(()=>{
                            this.isLoading = false
                            this.guanzhu = "已关注"
                        },1500)
                    return 
               })
            }
        //        this.guanzhu === '+  关注'
        //        if(this.guanzhu === '+  关注'){
        //             this.isLoading = true
        //               this.guanzhu = ""
        //             setTimeout(()=>{
        //                   this.isLoading = false
        //                  this.guanzhu = "已关注"
        //             },1000)
                   
        //         }else{
        //             this.guanzhu = ''
        //             this.isLoading = true
        //             setTimeout(()=>{
        //                 this.isLoading = false
        //                 this.guanzhu = '+  关注'
        //             },1000)
        //         }
        //    }else{ 
        //        this.guanzhu === '已关注'
        //        if(this.guanzhu === '+  关注'){
        //             this.isLoading = true
        //               this.guanzhu = ""
        //             setTimeout(()=>{
        //                   this.isLoading = false
        //                  this.guanzhu = "已关注"
        //             },1000)
                   
        //         }else{
        //             this.guanzhu = ''
        //             this.isLoading = true
        //             setTimeout(()=>{
        //                 this.isLoading = false
        //                 this.guanzhu = '+  关注'
        //             },1000)
        //         }
        //    }
            
        },
        share_weixin(){
                this.$refs.isShare.close()
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
                        uni.hideLoading()
					},
					fail: err => {
                        console.log(JSON.stringify(err))
                        this.$refs.isShare.close()
                        uni.hideLoading()
                       uni.showToast({
                           icon:"none",
                           title:'微信客户端未安装或更新版本',
                           duration:2000
                       })
                       return
					}
				});
        },
        share_pyquan(){
                this.$refs.isShare.close()
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
                        this.$refs.isShare.close()
                        uni.hideLoading()
                        uni.showToast({
                           icon:"none",
                           title:'微信客户端未安装或更新版本',
                           duration:2000
                       })
                       return
					}
				});
        },
        hidePop(){
            this.$refs.isShare.close()
        }
    },
    data() {
        return {
            isShow:1,
            title:'',
            guanzhu:'+  关注',
            isLoading:false,
            index:'',
            list:data.list,
            datalist:[],
            imagesrc:'',
            isfollow :false,
            isNull:true,
            myobj:'',
            Clist:''
            
        }
    },
    onNavigationBarButtonTap (e){
       console.log('分享')
        // return this.checkIsLogin()
       this.$refs.isShare.open()
    },
    components:{vueWorks,uniPopup},
    onLoad:function(option){
        uni.showLoading({
            title:'加载中'
        })
         uni.setNavigationBarTitle({
        　　title:option.title
        })
        this.title = option.title
        
        this.list = JSON.parse(option.data) 
        console.log(this.list)
        // console.log(data.list)
        // console.log(option.index)
        this.index = option.index
        // this.datalist = this.list[this.index].deatilimg
        this.imagesrc= this.list[this.index].logoPic
        //design_sign_set
        // let isLogin = util.getToken()
        // if(isLogin){
        //     let param ={
		// 			city: '广州市',
		// 			spacetype:'',
		// 			styletype:'',
		// 			designtype:0,
		// 			pageindex:1,
		// 			pagesize:20
		// 	}
        //     dapi.designerCMtoken(param,this)
        //     this.isfollow = this.Clist[this.index].isFollow
        // }else{
            this.isfollow = this.list[this.index].isFollow
        // }

       
        // console.log(this.imagesrc)
        // var data = JSON.parse(option.data) 
    },
    mounted(){
        uni.hideLoading()
        let param = {
            companyid:this.list[this.index].id,
            designerid:0,
            pageindex:1,
            pagesize:20
        }
        console.log(param)
        dapi.getDesignData(param,this)
    }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/goodsinfo.css';
.top_title{
    width: 100%;
    height: 385upx;
    
    .top_message{
        width: 100%;
        height:150upx;
        display: flex;
       align-items: center;
        .imgview{
            width: 150upx;
            height:150upx;
             float: left;
             display: flex;
             justify-content: center;
             align-items: center;
        }
        .top_name{
            float: left;
            font-size: 30upx;
            display: flex;
            flex-direction: column;
            width: 400upx
        }
        .button1{
            width:156upx;
            height:65upx;
            background:rgba(193,123,125,1);
            border-radius:10upx;
            text-align: center;
            line-height: 65upx;
            color: #fff;
            float: right;
            margin-right: 20upx;
            font-size: 30upx
        }
        .button2{
            width:156upx;
            height:65upx;
            background:#B7B7B7;
            border-radius:10upx;
            text-align: center;
            line-height: 65upx;
            color: #fff;
            float: right;
            margin-right: 20upx;
            font-size: 30upx
        }
    }
    .top_yuyue{
        width: 100%;
        height:123upx;
        .pf_text{
            width: 210upx;
            height: 123upx;
            float: left;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            .txt_1{
                height:26upx;
                font-size:26upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(58,58,58,1);
                line-height:13upx;
            }
            .txt_2{
                height:23upx;
                font-size:24upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(133,133,133,1);
                line-height:13upx;
                margin-top: -50upx
            }
        }
        
        .pf_text1{
            width: 246upx;
            height: 123upx;
            float: right;
             .pf_text2{
                width: 100upx;
                height: 123upx;
            }
            .pf_right{
               
            }
        }
    }
    .btn{
        width: 100%;
        height: 67upx;
        border:none;
        .yuyue_btn{
            width:702upx;
            height:65upx;
            background:rgba(193,123,125,1);
            border-radius:10upx;
            font-size:30upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:13upx;
            line-height: 65upx
        }
    }
}
 .anli_title{
        width: 100%;
        height: 30upx;
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(73,73,73,1);
        line-height:30upx;
        text{
           margin-left: 20upx
        }
    }
    .tedst{
        margin-top: -30upx
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
    position: absolute;
    bottom: 0;
    width: 100%;
}
/* 商品详情查询失败或无结果的显示 */
.isDetail_none{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.cen_bacg{
    width: 179upx;
    height: 153upx;
    background-image: url('../../static/img/sendindex/notalk.png');
    background-size:cover;
    background-repeat: no-repeat;
    margin: 45% auto;
    position: relative;
}
</style>