<template>
    <view>
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
				<view class="btn" @click="hidePop">取  消</view>
         </uniPopup>
    </view>
</template>

<script>
import uniPopup from '../../components/uni-popup/uni-popup'
export default {
    components:{uniPopup},
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        sharelist:{
            type:Object
        }
    },
    watch: {
        isShow:function(a,b){
            if(a){
                this.$refs.isShare.open()
            }
            
        },
        sharelist:function(a,b){
            this.list = a
            console.log(this.list)
        }
    },
    data(){
        return{
            list:{}
            // imageUrl: this.sharelist.imageUrl,
            // title: this.sharelist.title,
            // path:this.sharelist.path
        }
    },
    methods: {
        share_weixin(){
             var that = this
            // console.log(that.list.imageUrl)
            // console.log(that.list.title)
            // console.log(that.list.path)
                this.$refs.isShare.close();
                uni.showLoading({
                    title:'加载中'
                })
            	uni.share({
					provider: 'weixin',
					scene: "WXSceneSession",
					type: 5,//分享到小程序
					imageUrl: that.list.imageUrl,
					title: that.list.title,
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path: that.list.path,
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
                        uni.hideLoading();
						console.log(JSON.stringify(ret));
					},
					fail: err => {
                        // console.log(JSON.stringify(err))
                        uni.hideLoading();
                        uni.showToast({
                            icon:'none',
                            title:'请安装微信客户端，或检查最新版本',
                            duration:2000
                        })
					}
				});
        },
        share_pyquan(){
             var that = this
            this.$refs.isShare.close();
             uni.showLoading({
                 title:'加载中'
             })
                uni.share({
					provider: 'weixin',
					scene: "WXSenceTimeline",
					type: 5,//分享到小程序
					imageUrl: that.list.imageUrl,
					title: that.list.title,
					miniProgram: {
						id: 'gh_a052a07884ba',//gh_516f4b722cdd  wxf9a4b6e22b5929fc   c632d946366588be96dacabe55da6dc3   gh_81ab097eae6e
						path:  that.list.path,
						type: 2,//体验版
						webUrl: 'http://uniapp.dcloud.io'
					},
					success: ret => {
                        uni.hideLoading();
						console.log(JSON.stringify(ret));
					},
					fail: err => {
                        uni.hideLoading();
                        uni.showToast({
                            icon:'none',
                            title:'请安装微信客户端，或检查最新版本',
                            duration:2000
                        })
						console.log(JSON.stringify(err))
					}
				});
        },
        hidePop(){
            this.$refs.isShare.close()
        },
    },
}
</script>

<style lang="scss" scoped>
        .cont{display: flex;justify-content: space-around;height: 274upx;background: #fdfdfd;}
.cont image{width: 81upx;height: 81upx;}
.weixin{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.pengyou{width: 50%;font-size: 24upx;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.btn{height: 109upx;display: flex;justify-content: center;align-items: center;border-top: 1px solid #e1e1e1;color: #000;font-size: 35upx;}
</style>