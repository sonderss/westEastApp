<template>
	<view class="content">
		<view class="myselfBox">
			<view class="muselfInfo">
				<view class="setUp uni-flex">
					<view class="uni-flex">
						<image data-uri="msg" @click="submenu($event)" src="/static/img/myself/3.png" mode="widthFix" style="margin-right: 40upx;"></image>
						<image data-uri="set_up" @click="submenu($event)" src="/static/img/myself/setUp.png" mode="widthFix"></image>
					</view>
				</view>
				<view v-if="loginStatus" class="info uni-flex">
					<image :src="info.headPic || loginImg" data-uri="set_up" @click="submenu($event)"></image>
					<view class="information uni-flex uni-column" data-uri="set_up" @click="submenu($event)">
						<view class="uni-flex mation"><text class="name">{{info.userName}}</text></view>
					</view>
					<view @tap='toMy' class="uni-panel-icon uni-icon">个人主页 &#xe470;</view>
				</view>
				<view v-else class="info uni-flex">
					<image src="/static/img/myself/18.png" data-uri="set_up" @click="submenu($event)"></image>
					<view class="information uni-flex uni-column"  @click="submenu($event)">
						<view class="uni-flex mation"><text class="name">未登录</text></view>
						<view class="uni-flex mation"><text style="font-size: 24upx;color: #fff;">点击头像登录/注册</text></view>
					</view>
					<view data-uri="myIssue" class="uni-panel-icon uni-icon" @click="submenu($event)">个人主页&#xe470;</view>
				</view>
				<view class="category uni-flex">
					<view class="uni-flex">
						<view class="detail uni-flex uni-column" data-uri="gzperson" @tap="submenu($event,0)">
							<text>12</text>
							<text>关注</text>
						</view>
						<view class="detail uni-flex uni-column" data-uri="gzperson" @tap="submenu($event,1)">
							<text>12</text>
							<text>粉丝</text>
						</view>
						<view class="detail uni-flex uni-column">
							<text>12</text>
							<text>获赞</text>
						</view>
					</view>
				</view>
			</view>
			<view class="submenu">
				<view class="nav uni-flex">
					<text>我的订单</text>
					<text data-uri="myorder" @click="submenu($event, 0, '')" style="font-size: 24upx;color: #6C6C6C;" class="uni-panel-icon uni-icon">查看全部&#xe470;</text>
				</view>
				<view class="myorder-img uni-flex">
					<view style="position: relative;" v-for="(item, index) in navList" :key="index" @click="submenu($event,item.type,item.status)"
					 :data-uri="item.url">
						<image :src="item.icon"></image>
						<text style="line-height: 60upx;">{{item.name}}</text>
						<text class="ed-i" v-if="loginStatus && item.value">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="submenu">
				<view class="nav uni-flex">
					<text>我的服务</text>
				</view>
				<view class="myorder-img uni-flex" style="flex-wrap: wrap;justify-content: space-between;align-items: center; text-align: center;">
					<view style="line-height: 60upx;" v-for="(item, index) in serviceList" v-if="index < 5" :key="index" @click="submenu($event,index)"
					 :data-uri="item.url">
						<image :src="item.icon"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
				<view class="myorder-img uni-flex" style="flex-wrap: wrap;justify-content: space-between;align-items: center; text-align: center;">
					<view style="line-height: 60upx;" v-for="(item, index) in serviceList" v-if="index >= 5" :key="index" @click="submenu($event,index)"
					 :data-uri="item.url">
						<image :src="item.icon"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		checkLogin
	} from '@/config/mixins.js'
	import api from '../../apis/https/myApi.js'
	export default {
		computed: {},
		mixins: [checkLogin],
		data() {
			return {
				loginStatus: false,
				info: {},
				url1: '',
				loginImg: '/static/img/myself/19.png',
				pages: {
					address: "/pages/address/address",
					myorder: "/pages/myorder/myorder",
					mystore: '/pages/mystore/mystore',
					aftersalelist: "/pages/after_sale/after_sale_list",
					collect: "/pages/collect/collect",
					edit_data: "/pages/edit_data/edit_data",
					set_up: "/pages/cjq_minemsg/setMine",
					my_comment: "/pages/my_comment/my_comment",
					concern: '/pages/concern/concern',
					feed_back: "/pages/feedback/index",
					myteam: "/pages/myteam/myteam",
					circle: "/pages/community/cricle/cricle",
					myIssue: "/pages/cjq_testpages/mine?isMy=1",
					chat: "/pages/chat/chat",
					likeCase: "/pages/like_case/like_case",
					gzperson: "/pages/cjq_minemsg/gzindex",
					msg: '/pages/message/message',
					login: '/pages/auth/login/login1',
				},
				navList: [{
						name: '待付款',
						value: '',
						icon: '/static/img/myself/5.png',
						type: 1,
						status: 2,
						url: 'myorder'
					},
					{
						name: '待分享',
						value: '',
						icon: '/static/img/myself/6.png',
						type: null,
						url: ''
					},
					{
						name: '待收货',
						value: '',
						icon: '/static/img/myself/7.png',
						type: 2,
						status: 3,
						url: 'myorder'
					},
					{
						name: '待评价',
						value: '',
						icon: '/static/img/myself/8.png',
						type: null,
						url: 'my_comment'
					},
					{
						name: '退货售后',
						value: '',
						icon: '/static/img/myself/9.png',
						type: null,
						url: 'aftersalelist'
					},
				],
				serviceList: [{
						name: '商品收藏',
						icon: '/static/img/myself/10.png',
						url: 'collect'
					},
					{
						name: '案例收藏',
						icon: '/static/img/myself/11.png',
						url: 'likeCase'
					},
					{
						name: '加入圈子',
						icon: '/static/img/myself/12.png',
						url: 'circle'
					},
					{
						name: '关注话题',
						icon: '/static/img/myself/13.png',
						url: 'gzperson'
					},
					{
						name: '我的发布',
						icon: '/static/img/myself/14.png',
						url: 'myIssue'
					},
					{
						name: '地址管理',
						icon: '/static/img/myself/15.png',
						url: 'address'
					},
					{
						name: '官方客服',
						icon: '/static/img/myself/16.png',
						url: 'chat'
					},
					{
						name: '意见反馈',
						icon: '/static/img/myself/17.png',
						url: 'feed_back'
					},
					{
						name: '',
						icon: '',
						url: ''
					},
					{
						name: '',
						icon: '',
						url: ''
					},
				]
			}
		},
		mounted() {
		},
		onShow() {
			this.initData()
		},
		onLoad() {},
		methods: {
			submenu(evt, index, status) {
				console.log(evt);
				if (this.$db.get('token')) {
					this.url1 = evt.currentTarget.dataset.uri
					uni.navigateTo({
						url: this.pages[this.url1] + '?navNum=' + index + '&status=' + status
					});	
				} else {
					console.log(this.pages[evt.currentTarget.dataset.uri]);
					this.myobj = {url:this.pages[evt.currentTarget.dataset.uri], options: 'navNum=' + index + '&status=' + status , type: 2}
					if (!this.loginStatus) {
						return this.checkIsLogin()
					}
				}
			},
			getUserInfo() {
				api.getUserInfo().then(res => {
					if (res.statusCode === 401) {
						this.$db.del('token')
						uni.showToast({
							title: '登录已过期!',
							icon: 'none',
							duration: 800,
							success: (res) => {
								this.loginStatus = false
							}
						});
					}
					if (res.statusCode === 200) {
						if (res.data.status === 0) {
							this.info = res.data.data
							this.$store.commit("getUserMsg", res.data.data)
							this.$db.set('userInfo', res.data.data)
							this.navList.forEach((item, key) => {
								if(item.name === '待付款'){
									item.value = res.data.data.order.payCount
								}
								if(item.name === '待收货'){
									item.value = res.data.data.order.receiptCount
								}
								if(item.name === '待评价'){
									item.value = res.data.data.order.commentCount
								}
							})
						}
					}
				})
			},
			initData() {
				if (this.$db.get('token')) {
					this.loginStatus = true
					this.getUserInfo()
				} else {
					this.loginStatus = false
				}
			},
			toMy() {
				uni.navigateTo({
					url: "/pages/cjq_testpages/mine?id="+this.$store.state.userMsg.id+'&way='+0
				})
			}
		}
	}
</script>

<style scoped>
	uni-page-body {
		background: #fff;
		width: 100%;
		height: 100%
	}

	.content,
	.myselfBox {
		width: 100%
	}

	.muselfInfo {
		background: url(http://192.168.1.174:5005/file/fapi/setUserInfo/98e371cacc5c41938fc75cf130cdb4b0.png) repeat;
		background-size: 100% 100%;
		padding: 0 20upx;
		margin-bottom: 190upx
	}

	.setUp {
		align-items: center;
		justify-content: flex-end
	}

	.setUp view {
		margin-top: 40upx;
		height: 150upx;
		align-items: center;
		justify-content: center
	}

	.setUp view image {
		width: 38upx;
		height: 38upx;
		display: block
	}

	.info {
		align-items: center;
		margin: 0 40upx
	}

	.info image {
		width: 129upx;
		height: 129upx;
		border-radius: 50%;
		overflow: hidden
	}

	.information {
		flex: 1;
		margin-left: 28upx;
		line-height: 50upx
	}

	.information .mation {
		align-items: center
	}

	.information .mation text.name {
		color: #fefefe;
		font-size: 30upx
	}

	.information .mation text.type {
		font-size: 20upx;
		color: #fefefe;
		height: 40upx;
		line-height: 40upx;
		padding: 0 15upx;
		background: #ff7200;
		border-radius: 20upx;
		display: inline-block;
		margin-left: 21upx
	}

	.detail text,
	.information .phone {
		font-size: 32upx;
		color: #c17b7d
	}

	.category {
		align-items: center;
		justify-content: center;
		background: url(http://192.168.1.174:5005/file/fapi/setUserInfo/de2fb0e9faa44be69234e21fba6455fc.png) repeat center center;
		background-size: 100% 100%;
		border-radius: 10upx;
		margin: 0upx 40upx 0upx 40upx;
		z-index: 1;
		height: 150upx;
		position: relative;
		top: 25upx
	}

	.detail {
		padding: 0 18upx;
		align-items: center;
		width: 200upx
	}

	.detail text {
		margin-top: 10upx
	}

	.submenu {
		padding: 20upx 40upx;
		margin-top: -180upx;
		background: #fff;
		height: auto;
		border-bottom: 9upx solid #f3f3f3
	}

	.submenu:last-child {
		margin-top: 0;
		border-bottom: none
	}

	.submenu .nav {
		height: 88upx;
		align-items: center;
		justify-content: space-between
	}

	.submenu .nav:last-child {
		border-bottom: 0
	}

	.submenu .nav text {
		color: #424242;
		font-size: 32upx
	}

	.submenu .myorder-img {
		margin-top: 20upx;
		justify-content: space-between;
		font-size: 24upx;
		color: #292929;
		text-align: center
	}

	.submenu .myorder-img view {
		width: 100upx
	}

	.submenu .myorder-img image {
		width: 50upx;
		height: 50upx;
		margin: 0 auto
	}

	.uni-panel-icon {
		margin-left: 15px;
		color: #fff;
		font-size: 24upx;
		font-weight: 400;
		transform: rotate(0);
		transition-duration: 0s;
		transition-property: transform
	}

	.uni-icon {
		font-family: uniicons;
		font-weight: 400
	}

	.ed-i {
		font-size: 20upx;
		color: #fff;
		vertical-align: middle;
		background: #ce0000;
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		display: block;
		position: absolute;
		top: -8upx;
		right: 18upx;
		border-radius: 50%
	}
</style>
