<template>
	<view class="ed-content">
		<view class="info-data">
			<view class="info uni-flex" @click="togglePopup('bottom', 'share')">
				<image :src="headSrc"></image>
			</view>
			<view class="text uni-flex">
				<text @click="togglePopup('bottom', 'share')">更换头像</text>
			</view>
		</view>
		<view class="info-form">
			<view class="uni-flex info-text">
				<text>昵称</text>
				<input type="text" placeholder="请设置昵称" />
			</view>
			<view class="uni-flex info-text">
				<text>性别</text>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<text>{{array[index]}}</text>
					</picker>
				</view>
			</view>
		</view>
		<!-- 更换头像弹窗 -->
		<uni-popup ref="share" :type="type" :custom="true">
			<view class="uni-share">
				<view class="uni-share-btn" @click="cancel('share')">拍照</view>
				<view class="uni-share-btn" @click="selectPhoto('share')">从相册选择</view>
				<view class="uni-share-btn" @click="cancel('share')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			uniPopup,
		},
		data() {
			return {
				array: ['男', '女'],
				show: false,
				type: '',
				index: 0,
				headSrc: '/static/img/myself/myselfHeadImg.png'
			}
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			selectPhoto(type) {
				this.cancel(type)
				uni.chooseImage({
					count: 1, //可以选择图片的张数;
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择  默认是两个都有
					success: ((res) => {
						this.headSrc = res.tempFilePaths[0]
					})
				});
				// uni.previewImage(OBJECT)
			},
			togglePopup(type, open) {
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
		}
	}
</script>
<style>
	@import url("../../static/css/edit_data");
</style>
