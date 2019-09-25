<template>
	<view class="upload">
		<view class="list uni-flex">
			<view class="item interval uni-flex" v-for="(item,index) in fileList" :key="index">
				<image lazy-load mode="widthFix" class="is-response" :src="item" v-if="item"></image>
			    <view class="icon-close uni-flex"  @click.stop="handleRemove(index)">
					<image src="/static/img/confirmation/paymentClose.png"></image>
			    </view>
			</view>
			<view class="item" @click="chooseImage" v-if="fileList.length<limit">
			    <image class="upImg" src="/static/img/myorder/upload.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			limit: {
				type: Number,
				default: 9
			},
			url: {
				type: String,
				required: true
			},
			name: {
				type: String,
				default: 'file'
			},
			formData: {
				type: Object,
				default () {
				  return {}
				}
			},
			header: {
				type: Object,
				default () {
				  return {}
				}
			},
			fileList: {
				type: Array,
				default () {
				  return []
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			chooseImage:function(){
				uni.hideKeyboard();
				uni.chooseImage({
					count: 9, //默认9
					sizeType:['original','compressed'],
					sourceType:['album','camera '], 
					success: (chooseImageRes) => {
						const uploadTask = uni.uploadFile({ 
							url: this.url,
							name: this.name,
							filePath: chooseImageRes.tempFilePaths[0],
							formData: this.formData,
							header: this.header,
							success: (uploadFileRes) => {
								this.$emit('on-success', JSON.parse(uploadFileRes.data))
							},
						})
					},
					fail: (err) => {
					  this.$emit('on-error', err)
					}					
				})
			},
			handleRemove(index) {
			  this.$emit('on-remove', index)
			}
		}
	}
</script>
	
<style scoped>
	.upload{width:100%;}
	.upload .list{flex-wrap:wrap;}
	.upload .list .item {position:relative;align-items:center;justify-content:center;width:155upx;height:155upx;border-radius:20upx;margin:20upx 0;overflow:hidden;} 
	.upload .list .item.interval {margin-right:16upx;}
	.icon-close{position:absolute;top:15upx;right:10upx;width:41upx;height:41upx;align-items:center;justify-content:center;}
	.icon-close image{width:27upx;height:27upx;}
	.is-response{display:block;width:100%;max-width:100%;height:auto;}
	.upImg{width:100%;height:100%;}
</style>
