<template>
	<view>
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view class="ed-title">
			<text>{{list.title}}</text>
		</view>
		<view class="ed-info">
			<view v-if="type == '0'||type == '1' || type == '2'">
				<text class="text1">商家地址</text>
				<text class="text2">{{list.address}}</text>
			</view>
			<view v-if="type == '2'">
				<text class="text1">联系车型</text>
				<text class="text2">{{list.cardType}}</text>
			</view>
			<view v-if="type == '2'">
				<text class="text1">服务类型</text>
				<text class="text2">{{list.serviceType}}</text>
			</view>
			<view v-if="type == '0' || type == '1' || type == '2'">
				<text class="text1">服务区域</text>
				<text class="text2" v-text="type == 2? list.pti : list.serverAreaStr">{{list.pti}}</text>
			</view>
			<view v-if="type == '0' || type == '1' || type == '2'" class="uni-flex" style="align-items: center;justify-content: space-between;">
				<view>
					<text class="text1">联系商家</text>
					<text class=" text2">{{list.contacts}}</text>
				</view>
				<image style="width: 35upx;" @tap='toPlayPhone' src="/static/img/geomancy/1.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="ed-dateils">
			<view class="dateils">
				服务详情
			</view>
			<view>
				<text class="text1">{{list.serverDetails}}</text></text>
			</view>
		</view>
		<view class="ed-dateils" style="margin-bottom: 80upx;">
			<view class="dateils">
				服务照片
			</view>
			<scroll-view class="ed-scroll" scroll-x="true" @scroll="scroll" scroll-left="0">
				<image v-for="(item, index) in lists.serviceImg" :key="index" style="width: 400upx;" class="ed-scroll-view" :src="item.src"
				 mode="widthFix"></image>
			</scroll-view>
		</view>
		<view class="uni-flex call" @tap='toPlayPhone'>
			<image style="width: 40upx; margin-right: 20upx;" src="/static/img/geomancy/2.png" mode="widthFix"></image>
			<text>拨打电话</text>
		</view>
		<!-- 拨打电话弹出框 -->
		<unipop ref='phone' type="bottom" :custom="false" :radius="true">
			<view class="playPhone" @tap='phonePlay' style=" position: relative;">
				<image src='../../static/img/designTeam/iconfontdianhua.png' style="width:34upx;height:34upx" />
				<text style="margin-left:15upx">呼叫 {{phone_bm}}</text>
			</view>
			<view class="btm" @click="cancel">取 消</view>
		</unipop>
	</view>
</template>

<script>
	import api from '../../apis/transport/ctransport'
	import unipop from '../../components/uni-popup/uni-popup'
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	export default {
		components: {
			unipop,
			tuiSkeleton
		},
		onLoad: function(res) {
			this.type = res.type
			this.detailid = res.id
		},
		mounted() {
			const parame = {
				id: this.detailid
			}
			this.getList(parame)
		},
		data() {
			return {
				skeletonShow: true,
				type: '',
				detailid: 0,
				scrollTop: 0,
				phone_bm: '',
				old: {
					scrollTop: 0
				},
				list: [],
				lists: {
					serviceImg: [{
							src: '/static/img/geomancy/4.png'
						},
						{
							src: '/static/img/geomancy/4.png'
						},
						{
							src: '/static/img/geomancy/4.png'
						},
					]
				}
			}
		},
		methods: {
			getList(parame) {
				if (this.type == 0) {
					api.getYSDataDateils(parame).then((res => {
						if(res.statusCode === 200 && res.data.status === 0){
							setTimeout(()=>{
								this.skeletonShow = false
							},1000)
							this.list = res.data.data
							this.list.cardType = this.list.cardType.join()
							this.list.serviceType = this.list.serviceType.join()
						}
					}))
				}
				if (this.type == 1) {
					api.getQJDataDateils(parame).then((res => {
						if(res.statusCode === 200 && res.data.status === 0){
							setTimeout(()=>{
								this.skeletonShow = false
							},1000)
							this.list = res.data.data
							this.list.cardType = this.list.cardType.join()
							this.list.serviceType = this.list.serviceType.join()
						}
					}))
				}
				if (this.type == 2) {
					api.getGsDetail(parame).then(res => {
						if(res.statusCode === 200 && res.data.status === 0){
							setTimeout(()=>{
								this.skeletonShow = false
							},1000)
							this.list = res.data.data
							this.list.cardType = this.list.cardType.join()
							this.list.serviceType = this.list.serviceType.join()
						}
					})
				}
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			//弹出拨打电话对话框
			toPlayPhone() {
				console.log('拨打电话')
				this.$refs.phone.open()
			},
			//拨打电话
			phonePlay() {
				uni.makePhoneCall({
					phoneNumber: this.phone_bm
				});
			}
		},

	}
</script>

<style scoped>
	.ed-title {
		font-size: 30upx;
		color: #525151;
		padding: 20upx 30upx;
		border-bottom: 3px solid #eee
	}

	.ed-info {
		padding: 20upx 30upx;
		font-size: 28upx;
		border-bottom: 3px solid #eee
	}

	.ed-dateils {
		padding: 20upx 30upx;
		font-size: 28upx
	}

	.dateils {
		height: 70upx;
		line-height: 70upx
	}

	.ed-info view {
		height: 70upx;
		line-height: 70upx
	}

	.text1 {
		color: #adadad;
		margin-right: 30upx
	}

	.text2 {
		color: #525151
	}

	.ed-scroll-view {
		display: inline-block;
		width: 100%;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx
	}

	.scroll-Y {
		height: 300upx
	}

	.ed-scroll {
		white-space: nowrap;
		width: 100%
	}

	.ed-scroll image {
		margin-right: 40upx
	}

	.call {
		width: 100%;
		bottom: 0;
		position: fixed;
		justify-content: center;
		align-items: center;
		background: #c17b7d;
		color: #fff;
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx
	}

	/* 电话组件 */
	.playPhone {
		width: 100%;
		height: 155upx;
		font-size: 30upx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(84, 84, 84, 1);
		border-bottom: 1px solid #C5C5C5;
		text-align: center;
		line-height: 155upx;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.btm {
		width: 100%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		font-size: 34upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(193, 123, 125, 1);
	}
</style>
