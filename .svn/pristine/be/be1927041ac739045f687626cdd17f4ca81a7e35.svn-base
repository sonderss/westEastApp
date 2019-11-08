<template>
	<view class="ui">
		<view class="uni-flex head">
			<view>
				共30篇案例
			</view>
			<view class="changes">
				<text v-for="(item,index) in colorList" :key="index" :class="[colorBtn === index? 'color-btn' : '']" @click="onColor(index)">{{item.name}}</text>
			</view>
		</view>
		<view class="mid">
			<view class="main" v-if="isShow === 1 ? true :false">
				<view class="works">
					<image style="width:702upx;height:334upx" @tap.stop='imgView("/static/img/designTeam/anli/02.png")' src='/static/img/designTeam/anli/02.png' />
					<text class="title1">130㎡轻奢美式，邂逅美好的浪漫生活</text>
					<text class="title2">130㎡ | 二居 | 现代简约</text>
				</view>
				<view class="works">
					<image style="width:702upx;height:334upx" @tap.stop='imgView("/static/img/designTeam/anli/03.png")' src='/static/img/designTeam/anli/03.png' />
					<text class="title1">130㎡轻奢美式，邂逅美好的浪漫生活</text>
					<text class="title2">130㎡ | 二居 | 现代简约</text>
				</view>
				<view class="works teshu">
					<image style="width:702upx;height:334upx" @tap.stop='imgView("/static/img/designTeam/anli/01.png")' src='/static/img/designTeam/anli/01.png' />
					<text class="title1">130㎡轻奢美式，邂逅美好的浪漫生活</text>
					<text class="title2">130㎡ | 二居 | 现代简约</text>
				</view>

			</view>
		</view>
	</view>
</template>
<script>
	import json from '../json'

	export default {
		components: {},
		data() {
			return {
				list: [],
				isShow: 1,
				colorList: [{
						name: '按热度'
					},
					{
						name: '按时间'
					},
				],
				msgImgList: [],
				colorBtn: 0

			}
		},
		onLoad: function(option) {
			this.list = json.designData
		},
		methods: {
			onColor(index) {
				this.colorBtn = index
			},
			imgView(url) {
				this.msgImgList.push(url)
				uni.previewImage({
					indicator: "none",
					current: url,
					urls: this.msgImgList
				});
			},
		},
		mounted() {

		},
	}
</script>
<style lang="scss" scoped>
	.mid {
		flex: 1;
		overflow: auto;
	}

	.ui {
		display: flex;
		flex-direction: column;

		.head {
			padding: 20upx 0 0 20upx;
			font-size: 32upx;
			font-family: PingFang SC;
			justify-content: space-between
		}

		.changes text {
			padding: 0 20upx;
		}

		.changes text:first-child {
			padding: 0 20upx;
			border-right: 1px solid #bfbfbf;
		}
	}

	.color-btn {
		color: #c17b7d;
	}

	.main {
		// margin-top: 358upx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.works {
			height: 485upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			// margin-top: 45upx;
			.title1 {
				align-self: flex-start;
				height: 33upx;
				font-size: 32upx;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(75, 75, 75, 1);
				margin: 20upx 0 18upx 0
			}

			.title2 {
				align-self: flex-start;
				height: 27upx;
				font-size: 26upx;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(108, 108, 108, 1);
				// margin-bottom: 57upx
			}
		}
	}

	.teshu {
		margin-bottom: 120upx
	}
</style>
