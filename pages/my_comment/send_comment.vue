<template>
	<view>
		<view class="send-box uni-flex">
			<view class="feedback-star-view">
				<text style="margin-right: 15upx;">商品评价</text>
				<tui-rate :current="temp.starts" :size="16" :quantity="5" @change="chooseStar"></tui-rate>
			</view>
			<view style="color: #8B8B8B;">请选择评分</view>
		</view>
		<view class="share-box">
			<view style="height: 80upx; line-height: 80upx;">分享内容</view>
			<view class="ed-textare">
				<textarea class="eee" v-model="temp.des" placeholder-style="font-size:26upx;" maxlength="500" @input="descInput"
				 :placeholder="content" />
				<view style="text-align: right;font-size:#8B8B8B;">{{val}}/500</view>
			</view>
		</view>
		<view class="ed-upload-box">
			<view class="upload-text">上传图片 (最多9张)</view>
			<view class="uni-uploader-body">
			    <view class="uni-uploader__files">
			        <block v-for="(image,index) in temp.imageList" :key="index">
			            <view class="uni-uploader__file" style="position: relative;margin-right: 50upx;">
							<i class="ed-i" @tap="onDelete(index)"></i>
			                <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
			            </view>
			        </block>
			        <view style="border-radius: 10upx;" class="uni-uploader__input-box">
			            <view class="uni-uploader__input" @tap="chooseImage"></view>
			        </view>
			    </view>
			</view>
		</view>
		<view @tap="onSubmit" class="ed-submit">提交</view>
	</view>
</template>

<script>
	import tuiRate from "@/edith_components/rate/rate"
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
	export default {
		components:{tuiRate},
		onLoad(e) {
			console.log(e);
		},
		data() {
			return {
				temp:{
					des: '',
					imageList: [],
					starts: 0,
				},
				val:0,
				content:'宝贝是否满足了你的期待？说说你的使用心得分享给其它想购买 的朋友吧。',
				stars: [1, 2, 3, 4, 5],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			}
		},
		methods: {
			onSubmit(){
				console.log(this.temp);
			},
			descInput(e){
				this.val = e.detail.value.length
			},
			chooseStar(e) {
				this.temp.starts = e.index;
			},
			onDelete:function(index){
				 this.temp.imageList.splice(index,1)
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
			
			    if (this.temp.imageList.length === 9) {
			        let isContinue = await this.isFullImg();
			        console.log("是否继续?", isContinue);
			        if (!isContinue) {
			            return;
			        }
			    }
			    uni.chooseImage({
			        sourceType: sourceType[this.sourceTypeIndex],
			        sizeType: sizeType[this.sizeTypeIndex],
			        count: this.temp.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length :this.count[this.countIndex],
			        success: (res) => {
									console.log(res);
			            this.temp.imageList = this.temp.imageList.concat(res.tempFilePaths);
									console.log(this.temp.imageList);
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
			                    this.temp.imageList = [];
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
		}
	}
</script>

<style scoped>
	page{width:100%;height:100%}
	.uni-textarea{font-size:26upx}
	.eee{width:100%;font-size:26upx}
	.send-box{font-size:26upx;height:110upx;line-height:100upx;background:#fff;border-top:1px solid #eee;padding:0 20upx;margin-bottom:15upx;border-bottom:15upx solid #f2f2f2}
	.share-box{font-size:26upx;background:#fff;padding:30upx 20upx}
	.ed-textare{border:1px solid #eee;border-radius:10upx}
	.feedback-star{font-size:28upx}
	.feedback-star-view{margin-left:0;margin-right:60upx;font-size:26upx}
	.ed-submit{text-align:center;margin:0 20upx;padding:20upx;background:#c17b7d;color:#fff;border-radius:10upx}
	.ed-i{display:block;width:40upx;height:40upx;background:#c17b7d;border-radius:50%;position:absolute;right:-20upx;top:-20upx;z-index:2}
	.ed-i:before{width:10px;height:1px;content:" ";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;background:#fff}
	.ed-upload-box{margin-top:20upx;padding:0 20upx;background:#fff;height:500upx;border-top:15upx solid #f2f2f2}
	.upload-text{font-size:26upx;height:80upx;line-height:80upx}
	.uni-uploader-body{margin-top:20upx;overflow:inherit}
	.uni-uploader__input-box{border-radius:10upx;border-color:#c17b7d}
	.uni-uploader__input-box:before{width:4px;height:20px}
	.uni-uploader__input-box:after{width:20px;height:4px}
	.uni-uploader__input-box:after,.uni-uploader__input-box:before{background:#c17b7d;border-radius:10upx}

</style>
