<template>
	<view class="content ed-detail">
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view style="padding-bottom: 60px;" v-for="(outSize, index) in list" :key="index">
			<view class="orderDetailBox uni-flex" style="border-bottom:9upx solid #f2f2f2;align-items: center;justify-content: space-between;">
				<view class="uni-flex" style="align-items: center;">
					<image :src="imgStatus(status)" mode="widthFix"></image>
					<text v-if="status == '1'">交易完成</text>
					<text v-if="status == '2'">待付款</text>
					<text v-if="status == '3'">待发货</text>
					<text v-if="status == '4'">待收货</text>
					<text v-if="status == '5'">待评价</text>
					<text v-if="status == '6'">交易完成</text>
					<text v-if="status == '-1'">交易关闭</text>
				</view>
				<view v-if="status == '2'" style="font-size: 24upx;color: #878787;">剩余：{{downTime}}</view>

			</view>
			<view v-if="status == '1' || status == '4'" class="addDetail uni-flex">
				<image class="addIcon" src="/static/img/myorder/qianshou.png" mode="widthFix"></image>
				<view class="warp uni-flex uni-column">
					<view class="uni-flex" style="justify-content: space-between;">
						<text v-text="status == '1'? '您的订单已签收，期待再次为您服务': '您的订单已提交，等待发货' "></text>
						<text class="uni-panel-icon uni-icon">&#xe470;</text>
					</view>
					<text class="add">{{list.finishTime}}</text>
				</view>
			</view>
			<view class="addDetail uni-flex">
				<image class="addIcon" src="/static/img/myorder/address.png" mode="widthFix"></image>
				<view class="warp uni-flex uni-column">
					<view><text>{{recUseInfo.name}}</text><text class="phone">{{recUseInfo.phone}}</text></view>
					<text class="add">{{recUseInfo.address}}</text>
				</view>
			</view>
			<view class="orderInfor">
				<view class="title">商品信息</view>
				<view class="each-order-content" style="margin-top: 30upx;" v-for="(item, index) in goodsInfo" :key="index">
					<view class="shopInfo uni-flex">
						<view class="shopInfo-img">
							<image lazy-load :src="item.spuPic" style="width: 180upx; height: 180upx;" class="is-response"></image>
						</view>
						<view class="shopInfo-introduce uni-flex uni-column">
							<view class="detail">
								<view><text class="text-overflow_2-xzh">{{item.spuName}}</text></view>
								<view><text class="detailColor">{{item.specifiCations}}</text></view>
							</view>
							<view class="detail details">
								<view class="uni-flex" style="justify-content: space-between;margin-top: 20upx;font-size: 28upx;">
									<view>￥{{item.price}}</view>
									<view>x{{item.number}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="orderInfor">
				<view class="title">订单信息</view>
				<view class="ed-order">
					<view class="uni-flex js-box">
						<view>商品合计</view>
						<view>￥{{cost.goodSum}}</view>
					</view>
					<view class="uni-flex js-box">
						<view>安装费</view>
						<view>￥{{cost.serverCost}}</view>
					</view>
					<view class="uni-flex js-box">
						<view>运费</view>
						<view>￥{{cost.postCost}}</view>
					</view>
					<view class="uni-flex js-box">
						<view>优惠券</view>
						<view>￥{{cost.discount}}</view>
					</view>
				</view>
				<view class="ed-order">
					<view class="uni-flex js-box">
						<view>发票类型</view>
						<view>{{list.billType}}</view>
					</view>
					<view class="uni-flex js-box">
						<view>发票抬头</view>
						<view>{{list.title}}</view>
					</view>
					<view class="uni-flex js-box">
						<view>发票内容</view>
						<view>{{list.content}}</view>
					</view>
				</view>
				<view class="ed-order">
					<view class="uni-flex js-box">
						<view>订单编号</view>
						<view>{{list[0].orderNo}}</view>
						<button class="copy-txt" @click="copy(list.orderNo)">复制</button>
					</view>
					<view class="uni-flex js-box">
						<view>下单时间</view>
						<view>{{list[0].createTime}}</view>
					</view>
					<view v-if="status == '1' || status == '4' || status == '5'" class="uni-flex js-box">
						<view>支付方式</view>
						<view></view>
					</view>
					<view v-if="status == '1' || status == '3' || status == '4' || status == '5'">
						<view class="uni-flex js-box">
							<view>已付金额</view>
							<view>￥{{cost.sumAmount}}</view>
						</view>
						<view class="uni-flex js-box">
							<view>支付时间</view>
							<view>{{list[0].payTime}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="orderState" id="orderState">
				<text v-if="status == 2" @click="returngoods(outSize.orderNo,outSize.id)">取消订单</text>
				<text class="pink" v-if="status == 2" @click="rightOff(outSize.orderNo,outSize.id)">立即付款</text>
				<!-- <text v-if="status == 1" @click="returngoods(item.order_id,index)">申请退货</text> -->
				<!-- <text v-if="status == 5" @click="aftersale(item.order_id)">申请售后</text> -->
				<text v-if="status == 4" @click="see(outSize.orderNo,outSize.id)">查看物流</text>
				<text v-if="status == 4" @click="confirm(outSize.orderNo,outSize.id)">确认收货</text>
				<text v-if="status == 6" @click="evaluate(outSize.orderNo,outSize.id)">查看评价</text>
				<text v-if="status == 1 || status == 5" @click="evaluate(outSize.orderNo,outSize.id)">评价商品</text>
				<text v-if="status == -1" @click="del(outSize.orderNo,outSize.id)">删除订单</text>
				<text v-if="status == 3" @click="reminder(outSize.orderNo,outSize.id)">我要催单</text>
				<text class="pink" v-if="status == 1 || status == 3 || status == -1 || status == 6 || status == 5">加入购物车</text>
			</view>
		</view>
		<!-- 取消订单 -->
		<uni-popup ref="refund" type="bottom" :custom="false" :radius="true">
			<view class="pop_header">
				<text>取消订单</text>
				<image style="position:absolute;right:40upx;top:30upx;width:38upx;height:38upx" src="/static/img/close.png" @tap="close"></image>
			</view>
			<view class="title">取消订单后，本单享有的优惠可能会一并取消，是否继续？</view>
			<view class="title2">请选择取消订单的原因（必选）：</view>
			<view class="list_style">
				<view class="pop_content" v-for="(item, index) in items" :key="index">
					<radio-group style="margin-right: 20upx;" @change="radioChange">
						<radio @change="radioChange" :value="item.value" :checked="index === current" style="transform:scale(0.7)" color="#C17B7D" />
					</radio-group>
					<view>{{item.name}}</view>
				</view>
			</view>
			<view class="bottom">
				<view class="sure" @tap="subOrder">
					<text>确认</text>
				</view>
			</view>
		</uni-popup>

	</view>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import api from '../../apis/https/myApi.js'
	import util from '../../common/util'
	export default {
		components: {
			tuiSkeleton,
			uniPopup
		},
		data() {
			return {
				skeletonShow: true,
				timer: null,
				downTime: '',
				status: '',
				current: 0,
				closeTime: null,
				list: {},
				recUseInfo: {},
				goodsInfo: [],
				cost: {},
				items: [{
						value: '1',
						name: '地址信息有误'
					},
					{
						value: '2',
						name: '不想要了'
					},
					{
						value: '3',
						name: '商品信息填写有误'
					},
					{
						value: '4',
						name: '发票信息有误'
					},
					{
						value: '5',
						name: '其他'
					}
				],
			}
		},
		onLoad(res) {
			this.status = res.status
			this.getList(res)
		},
		destroyed() {
			if (this.timer) {
				clearInterval(this.timer);
			}
		},
		mounted() {
			if (this.status === '2') {
				this.getCountDown()
			}
		},
		methods: {
			getList(res){
				api.getOrderPageListDetail({
					id: res.id
				}).then((res) => {
					if(res.statusCode === 200){
						if(res.data.status === 0){
							setTimeout(() => {
								this.skeletonShow = false
							}, 500)
							this.list = [res.data.data]
							this.recUseInfo = res.data.data.recUseInfo
							this.goodsInfo = res.data.data.goodsList
							this.cost = res.data.data.cost
							if (this.status === '2') {
								this.closeTime = res.data.data.colseTimeTimeStamp
							}
						}
					}
				})
			},
			copy(txt) {
				uni.setClipboardData({
					data: txt,
					success: function() {
						console.log('success');
					}
				});
			},
			getCountDown() {
				this.timer = setInterval(() => {
					this.downTime = util.countDown(this.closeTime)
					if(util.countDown(this.downTime)<=0){
						this.downTime = '订单超时'
						clearInterval(this.timer);
						return false;
					}
				}, 1000)
			},
			imgStatus(status) {
				return status == '4' || status == '2' || status == '3' ? '/static/img/myorder/icon_wait.png' : status == '1' ?
					'/static/img/myorder/gou.png' : '/static/img/myorder/close.png'
			},
			rightOff(odd,id) {
				uni.navigateTo({
					url: '../pay_pages/postpay'
				})
			},
			see(odd,id) { //查看物流
				uni.navigateTo({
					url: '../ordertracking/index'
				})
			},
			confirm(odd,id) { //确认收货
				uni.showModal({
					content: '确认收货该笔订单吗？',
					cancelText: '取消',
					confirmText: '确定',
					confirmColor: '#f00',
					success: (res) => {
						if (res.confirm) {
							if (this.currentTab == 0) {
								let obj = this.orders[e.index];
								this.$set(obj, "paymentState", 3);
							} else if (this.currentTab == 2) { //确认收货成功之后
								this.receiptsItem.splice(e.index, 1);
							} else {
								this.returnsItem.splice(e.index, 1);
							}
						}
					}
				});
			},
			del(odd,id) { //删除订单
				uni.showModal({
					title: '删除订单',
					content: '确认要删除该笔订单吗？',
					cancelText: '暂不',
					confirmText: '确定',
					confirmColor: '#f00',
					success: (res) => {
						if (res.confirm) {
							console.log(order_id, index);
							this.list.splice(index, 1);
						}
					}
				});
			},
			reminder(odd,id) { //催单
				uni.showModal({
					content: '确认催单？',
					cancelText: '暂不',
					confirmText: '确定',
					confirmColor: '#f00',
					success: (res) => {
						if (res.confirm) {
							// console.log(order_id, index);
							// this.list.splice(index, 1);
						}
					}
				});
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			returngoods(odd,id) { //取消订单
				console.log(odd);
				console.log(id);
				// this.refundOrder_id = e.order_id;
				// this.refundIndex = e.index;
				this.$refs.refund.open();
			},
			close() {
				this.$refs.refund.close();
			},
			subOrder() {
				this.close();
			},
		}
	}
</script>

<style scoped>
	@import "../../static/css/myorder.css";

	uni-page-body {
		width: 100%;
		height: 100%;
		background: white;
	}
	.copy-txt {
		background: #C17B7D;
		color: #fff;
		text-align: center;
		border-radius: 10upx;
		font-size: 26upx;
		line-height: 50upx;
	}

	.uni-panel-icon {
		margin-left: 15px;
		color: #B0B0B0;
		font-size: 36upx;
		font-weight: 400;
		transform: rotate(0);
		transition-duration: 0s;
		transition-property: transform
	}

	.uni-icon {
		font-family: uniicons;
		font-weight: 400
	}

	#orderState {
		position: fixed;
		bottom: 0;
		width: 100%;
		/* height: 80upx; */
		background: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	#orderState text, #orderState .pink{
		margin-left: 0upx;
		margin-right: 34upx;
	}
</style>
