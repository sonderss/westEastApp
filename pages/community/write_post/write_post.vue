<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="ed-textare-box">
				<textarea class="ed-textare" :value="this.textareaTxt" @blur="blurTxt($event)" placeholder="快来和大家分享故事吧!" />
				</view>
				<view class="ed-topic-box">
					<view class="uni-panel">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
						<view class="uni-panel-h">
							<view>
								<text class="uni-panel-text">参与话题</text>
							</view>
							<navigator url="../topics/all_topic" hover-class="other-navigator-hover">
								<text style="font-size: 24upx;color: #A8A8A8;">{{topic}}</text>
								<text class="uni-panel-icon uni-icon">&#xe470;</text>
							</navigator>
						</view>
					</view>
					<view class="uni-panel">
						<view class="uni-panel-h">
							<view>
								<text class="uni-panel-text">选择圈子</text>
							</view>
							<navigator url="../cricle/select_cricle" hover-class="other-navigator-hover">
								<text style="font-size: 24upx;color: #A8A8A8;">{{cricle}}</text>
								<text class="uni-panel-icon uni-icon">&#xe470;</text>
							</navigator>
						</view>
					</view>
				</view>
				<view class="ed-upload-box">
					<view class="upload-text">上传图片</view>
					<view class="uni-uploader-body">
					    <view class="uni-uploader__files">
					        <block v-for="(image,index) in imageList" :key="index">
					            <view class="uni-uploader__file" style="position: relative;margin-right: 50upx;">
									<i class="ed-i" @tap="onDelete(index)"></i>
					                <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage" mode="aspectFill"></image>
					            </view>
					        </block>
					        <view style="border-radius: 10upx;" class="uni-uploader__input-box">
					            <view class="uni-uploader__input" @tap="chooseImage"></view>
					        </view>
					    </view>
					</view>
				</view>
		</form>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	var sourceType = [
	    ['camera'],
	    ['album'],
	    ['camera', 'album']
	]
	var sizeType = [
	    ['compressed'],
	    ['original'],
	    ['compressed', 'original']
	]
	export default{
		computed: {
			// ...mapState(['sendPost']),
			...mapGetters(['topic','cricle','textareaTxt'])
		},
		data(){
			return{
				imageList: [],
				title: 'choose/previewImage',
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				// list:{
				// 	topic: '加话题，提升被发现概率',
				// 	cricle: '加圈子，获得更多点赞与评论'
				// },
				value:''
			}
		},
		onNavigationBarButtonTap (e){
			this.$store.commit('community', this.textareaTx, this.cricle, this.topic)
			if(e.index === 0){
				const data = {
					textareaTxt: this.textareaTxt,
					cricle: this.cricle,
					topic: this.topic
				}
				console.log(data);
				setTimeout(()=>{
					uni.switchTab({
					    url: "../../send/send",
					},3000);
				})
			}else{
				uni.switchTab({
				    url: "../../send/send",
				});
			}
		},
		onLoad(res) {
			this.imageList.concat(res.photo)
		},
		onUnload() {
		    this.imageList = [],
		    this.sourceTypeIndex = 2,
		    this.sourceType = ['拍照', '相册', '拍照或相册'],
		    this.sizeTypeIndex = 2,
		    this.sizeType = ['压缩', '原图', '压缩或原图'],
		    this.countIndex = 8;
		},
		methods:{
			onDelete:function(index){
				 this.imageList.splice(index,1)
			},
			blurTxt:function(e){
				this.$store.state.sendPost.textareaTxt = e.detail.value
			},
			chooseImage: async function() {
			    // #ifdef APP-PLUS
			    // TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
			    if (this.sourceTypeIndex !== 2) {
			        let status = await this.checkPermission();
			        if (status !== 1) {
			            return;
			        }
			    }
			    // #endif
			
			    if (this.imageList.length === 9) {
			        let isContinue = await this.isFullImg();
			        console.log("是否继续?", isContinue);
			        if (!isContinue) {
			            return;
			        }
			    }
			    uni.chooseImage({
			        sourceType: sourceType[this.sourceTypeIndex],
			        sizeType: sizeType[this.sizeTypeIndex],
			        count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length :
			            this.count[this.countIndex],
			        success: (res) => {
						console.log(res);
			            this.imageList = this.imageList.concat(res.tempFilePaths);
						console.log(this.imageList);
			        },
			        fail: (err) => {
			            // #ifdef APP-PLUS
			            if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
			                this.checkPermission(err.code);
			            }
			            // #endif
			        }
			    })
			},
			isFullImg: function() {
			    return new Promise((res) => {
			        uni.showModal({
			            content: "已经有9张图片了,是否清空现有图片？",
			            success: (e) => {
			                if (e.confirm) {
			                    this.imageList = [];
			                    res(true);
			                } else {
			                    res(false)
			                }
			            },
			            fail: () => {
			                res(false)
			            }
			        })
			    })
			},
			previewImage: function(e) {
			    var current = e.target.dataset.src
			    uni.previewImage({
			        current: current,
			        urls: this.imageList
			    })
			},
			async checkPermission(code) {
			    let type = code ? code - 1 : this.sourceTypeIndex;
			    let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
			        await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
			            'android.permission.READ_EXTERNAL_STORAGE');
			
			    if (status === null || status === 1) {
			        status = 1;
			    } else {
			        uni.showModal({
			            content: "没有开启权限",
			            confirmText: "设置",
			            success: function(res) {
			                if (res.confirm) {
			                    permision.gotoAppSetting();
			                }
			            }
			        })
			    }
			
			    return status;
			}
		}
	}
</script>

<style scoped>
	.ed-i{display:block;width:40upx;height:40upx;background:#c17b7d;border-radius:50%;position:absolute;right:-20upx;top:-20upx;z-index:2}
	.ed-i:before{width:10px;height:1px;content:" ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;background:#fff}
	.ed-textare-box{border-bottom:1px solid #eee}
	.ed-textare{font-size:26upx;margin:30upx 0 0 30upx}
	.uni-icon{font-family:uniicons;font-weight:400}
	.uni-panel{height:104upx}
	.uni-panel-h{background-color:#fff;flex-direction:row;align-items:center;height:100upx;margin:0upx 25upx;border-bottom:1px solid #dcdcdc;display:flex;justify-content:space-between}
	.uni-panel-text{flex:1;color:#000;font-size:14px;font-weight:400}
	.uni-panel-icon{margin-left:15px;color:#000;font-size:14px;font-weight:400;transform:rotate(0);transition-duration:0s;transition-property:transform}
	.ed-upload-box{margin-top:40upx;padding:0 20upx}
	.upload-text{font-size:30upx}
	.uni-uploader-body{margin-top:20upx;overflow:inherit}
	.uni-uploader__input-box{border-radius:10upx;border-color:#c17b7d}
	.uni-uploader__input-box:before{width:4px;height:20px}
	.uni-uploader__input-box:after{width:20px;height:4px}
	.uni-uploader__input-box:after,.uni-uploader__input-box:before{background:#c17b7d;border-radius:10upx}
</style>
