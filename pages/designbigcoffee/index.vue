<template>
<view>
       <view class="top_title">
            <view class="top_message" >
                <view class="imgview" @tap="toAbout(title)">
                    <image style="width:94upx;height:94upx" src='../../static/img/desindex/touxiang.png' />
                </view>
                <view class="top_name" @tap="toAbout(title)">
                     <text>{{title}}</text>
                     <text style="font-size:26upx;margin-top:18upx">广东 &nbsp 广州</text>
                </view>
               
                 <button :loading="isLoading" @tap="gz">{{guanzhu}}</button>
            </view>
            <view class="top_yuyue">
                 <view class="pf_text">
                     <text class="txt_1">200-600元/㎡</text>
                     <text class="txt_2">设计收费</text>
                 </view>
                 <view class="pf_text1">
                    <view class="pf_text pf_text2">
                        <text class="txt_1">250</text>
                        <text class="txt_2">预约</text>
                    </view>
                    <view class="pf_text pf_text2 pf_right" >
                     <text class="txt_1">140</text>
                     <text class="txt_2">关注</text>
                    </view>
                 </view>
            </view>
            <view class="btn">
                <button class="yuyue_btn" @tap='yuyue(title)'>在线预约</button>
            </view>
       </view>
       <!-- 案例 -->
       <view class="anli_title"><text>案例（30）</text></view>
       <view class="tedst">
            <vue-works  :isShow="isShow"></vue-works>
       </view>
       <view class="bottom">已经到底啦~</view>

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
import vueWorks from '../../components/designer/designer'
import uniPopup from '../../components/uni-popup/uni-popup'
export default {
    methods: {
        toAbout(title){
            uni.navigateTo({
                url:'./desiabout?name='+title
            })

        },
        yuyue(title){
             uni.navigateTo({
                url:'./desiyuyue?name='+title
            })
        },
        gz(){
          
            if(this.guanzhu === '+  关注'){
                    this.isLoading = true
                      this.guanzhu = ""
                    setTimeout(()=>{
                          this.isLoading = false
                         this.guanzhu = "已关注"
                    },1000)
                   
            }else{
                this.guanzhu = ''
                this.isLoading = true
                setTimeout(()=>{
                    this.isLoading = false
                    this.guanzhu = '+  关注'
                },1000)
            }
        },
        share_weixin(){
            	uni.share({
					provider: 'weixin',
					scene: "WXSceneSession",
					type: 5,//分享到小程序
					imageUrl: 'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
					title: '广州佳宇设计',
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path: 'pages/detail/goodsinfo?itemid=2',
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
						console.log(JSON.stringify(ret));
					},
					fail: err => {
						console.log(JSON.stringify(err))
					}
				});
        },
        share_pyquan(){
                uni.share({
					provider: 'weixin',
					scene: "WXSenceTimeline",
					type: 5,//分享到小程序
					imageUrl: 'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
					title: '广州佳宇设计',
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path: 'pages/detail/goodsinfo?itemid=2',
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
						console.log(JSON.stringify(ret));
					},
					fail: err => {
						console.log(JSON.stringify(err))
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
            isLoading:false
        }
    },
    onNavigationBarButtonTap (e){
       console.log('分享')
       this.$refs.isShare.open()
    },
    components:{vueWorks,uniPopup},
    onLoad:function(option){
         uni.setNavigationBarTitle({
        　　title:option.title
        })
        this.title = option.title
    }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/goodsinfo.css';
.top_title{
    width: 100%;
    height: 385upx;
    border-top: 1px solid #D2D2D2;
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
        button{
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
}
</style>