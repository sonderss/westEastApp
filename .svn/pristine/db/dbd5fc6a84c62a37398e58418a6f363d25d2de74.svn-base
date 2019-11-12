<template>
	<view>
		<view class="ed-title">
			<text>广州纵横物流运输车队专业提供各式货车及物流专线运输</text>
		</view>
		<view class="ed-info">
			<view>
				<text class="text1">商家地址</text> <text class="text2">番禺区天安科技园产业2座301</text>
			</view>
			<view>
				<text class="text1">服务区域</text> <text @click="showMulLinkageThreePicker" class=" text2">{{pickerText}}</text>
			</view>
			<view class="uni-flex" style="align-items: center;justify-content: space-between;">
				<view>
					<text class="text1">联系商家</text>
					<text class=" text2">陈先生</text>
				</view>
				<image style="width: 35upx;" src="/static/img/geomancy/1.png" mode="widthFix"></image>
			</view>
			<view>
				<text class="text1">服务类型</text> <text class=" text2">搬家、运输</text>
			</view>
			<view>
				<text class="text1">服务车型</text> <text class=" text2">小面包车</text>
			</view>
		</view>
		<view class="ed-dateils">
			<view class="dateils">
				服务详情
			</view>
			<view>
				<text class="text1">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text></text>
			</view>
		</view>
		<view class="ed-dateils">
			<view class="dateils">
				服务照片
			</view>
			<scroll-view class="ed-scroll" scroll-x="true" @scroll="scroll" scroll-left="0">
				<image style="width: 400upx;" class="ed-scroll-view" src="/static/img/geomancy/4.png" mode="widthFix"></image>
				<image style="width: 400upx;" class="ed-scroll-view" src="/static/img/geomancy/4.png" mode="widthFix"></image>
				<image style="width: 400upx;" class="ed-scroll-view" src="/static/img/geomancy/4.png" mode="widthFix"></image>
			</scroll-view>
		</view>
		<view class="uni-flex call">
			<image style="width: 40upx; margin-right: 20upx;" src="/static/img/geomancy/2.png" mode="widthFix"></image>
			<text>拨打电话</text>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../common/city.data.js';
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerText: '广东省-广州市-番禺区',
				cityPickerValueDefault: [18, 0, 6],
				pickerValueDefault: [0],
				pickerValueArray: [],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				console.log(e);
				this.pickerText = e.label
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style scoped>
	.ed-title {
		font-size: 30upx;
		color: #525151;
		padding: 20upx 30upx;
		border-bottom: 3px solid #eee;
	}

	.ed-info {
		padding: 20upx 30upx;
		font-size: 28upx;
		border-bottom: 3px solid #eee;
	}

	.ed-dateils {
		padding: 20upx 30upx;
		font-size: 28upx;
	}

	.dateils {
		height: 70upx;
		line-height: 70upx;
	}

	.ed-info view {
		height: 70upx;
		line-height: 70upx;
	}

	.text1 {
		color: #ADADAD;
		margin-right: 30upx;
	}

	.text2 {
		color: #525151;
	}
	.ed-scroll-view {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	.scroll-Y {
		height: 300upx;
	}
	
	.ed-scroll {
		white-space: nowrap;
		width: 100%;
	}
	.ed-scroll image{
		margin-right: 40upx;
	}
	.call{
		justify-content: center;
		align-items: center;
		background: #C17B7D;
		color: #fff;
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
	}
</style>
