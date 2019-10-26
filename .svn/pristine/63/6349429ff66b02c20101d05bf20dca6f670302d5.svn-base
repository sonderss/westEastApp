<template>
	<view class="content">
		<view class="ed-box">
			<view class="shopInfo uni-flex" v-for="(item, index) in list" :key="index">
				<view class="shopInfo-img">
					<image lazy-load :src="item.commodityImg" mode="widthFix" class="is-response"></image>
				</view>
				<view class="shopInfo-introduce uni-flex">
					<view class="detail">
						<view style="line-height: 60upx;"><text class="shopName">{{item.shopName}}</text></view>
						<view class="ed-stars">
							<view style="margin-right: 20upx">
								<text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.start ? 'active' : ''"></text>
							</view>
							<text style="color: #b0b0b0;">共{{item.installationCost}}条</text>
						</view>
						<view class="ed-grade-num">
							<block v-for="(ed, index) in item.grade" :key="'ed' + index">
								<text class="ed-grade">{{ed.name}} {{ed.num}}</text>
							</block>
						</view>
					</view>
				</view>
			</view>
			<view class="uni-panel" style="text-align: center">
				<view class="uni-panel-h" v-for="(item, index) in commentList.info" :key="index" @tap="toCompanydetail">
					<image class="ed-icon" :src="item.icon"></image>
					<text class="uni-panel-text" style="border-right: solid 1px">{{item.aboutUs}}</text>
					<text class="uni-panel-text">{{item.services}}</text>
					<text class="uni-panel-text">{{item.honor}}</text>
					<text class="uni-panel-icon uni-icon">&#xe470;</text>
				</view>
			</view>
			<view class="uni-panel" v-for="(item, index) in commentList.realtion" :key="'info2'+index">
				<view class="uni-panel-h">
					<image class="ed-icon" :src="item.icon"></image>
					<text class="uni-panel-text uni-panel-text2">{{item.name}}</text>
					<text class="uni-panel-icon uni-icon">&#xe470;</text>
				</view>
			</view>
		</view>
		<view class="body-view uni-flex uni-column">
			<scroll-view class="top-menu-view">
				<block v-for="(menuTab,index) in menuTabs" :key="index">
					<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
						<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
							<view class="menu-one-txt">{{menuTab.name}}</view>
							<view class="menu-one-bottom">
								<view class="menu-one-bottom-color"></view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
			<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						<view class="shopInfo ed-mpi">
							<view class="ed-h">{{commentList.title.server}}</view>
							<view class="uni-flex">
								<image v-for="(key, index) in commentList.server" @click="toPop(index)" :key="'key' + index" class="is-response" mode="widthFix"
								 lazy-load :src="key.img"></image>
							</view>
						</view>

						<view class="shopInfo ed-case">
							<view class="uni-panel-h" style="padding: 0;">
								<text class="uni-panel-text">{{commentList.title.case}}</text>
								<text class="uni-panel-icon uni-icon">查看全部 &#xe470;</text>
							</view>
							<view class="uni-flex" style="margin: 20upx 0;" v-for="(edCase, index) in commentList.case.list" :key="index">
								<image class="is-response" mode="widthFix" lazy-load :src="edCase.img"></image>
								<view class="is-response ed-case-style"
								 mode="widthFix">
									<view><text style="color: #ababab;">户型：</text> {{edCase.type}}</view>
									<view><text style="color: #ababab;">风格：</text> {{edCase.style}}</view>
									<view><text style="color: #ababab;">面积：</text> {{edCase.area}}</view>
								</view>
							</view>
							<view class="check-case">
								<text class="uni-panel-text" style="">{{commentList.case.check}}</text>
							</view>
						</view>

						<view class="shopInfo ed-uiTeam">
							<view class="uni-panel-h" style="padding: 0;">
								<text class="uni-panel-text ed-h">{{commentList.title.uiTeam}}</text>
								<text class="uni-panel-icon uni-icon" @click="todetail">查看全部 &#xe470;</text>
							</view>

							<view class="span_list_fitment">
								<view>
									<scroll-view class="show_scroll" scroll-x="true" show-scrollbar="false">
										<view v-for="(item, index) in commentList.team" :key="index" @click="toU(index)">
											<text>{{item.post}}</text>
											<text>{{item.name}}</text>
											<text>{{item.year}}</text>
											<image lazy-load mode="widthFix" :src="item.img"></image>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>

						<view class="shopInfo ed-execution">
							<view class="uni-panel-h" style="padding: 0;" @tap="tobuildTeam">
								<text class="uni-panel-text ed-h">{{commentList.title.execution}}</text>
								<text class="uni-panel-icon uni-icon">查看全部 &#xe470;</text>
							</view>

							<view class="span_list_fitment">
								<view>
									<scroll-view class="show_scroll2" scroll-x="true" show-scrollbar="false">
										<view v-for="(item, index) in commentList.execution" :key="index">
											<text>{{item.name}}</text>
											<text>{{item.year}}</text>
											<image lazy-load mode="widthFix" :src="item.img"></image>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>

						<view class="shopInfo ed-comment">
							<view class="uni-panel-h" style="padding: 0;">
								<text class="uni-panel-text" style="font-size: 35upx;">{{commentList.title.comment}}</text>
								<text style="font-size: 26upx;" class="uni-panel-icon uni-icon">查看全部 &#xe470;</text>
							</view>

							<view class="commentConet" v-if="commentList.list">
								<view class="commentList uni-flex uni-column" v-for="(item,index) in commentList.list" :key="index">
									<view class="shopInfo uni-flex">
										<view class="shopInfo-img">
											<image lazy-load :src="item.headImg" mode="widthFix" class="is-response"></image>
										</view>
										<view class="shopInfo-introduce uni-flex uni-column">
											<view class="detail">
												<view style="line-height: 60upx;"><text class="shopName">{{item.name}}</text></view>
												<view class="ed-stars">
													<view style="margin-right: 20upx">
														<text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.start ? 'active' : ''"></text>
													</view>
												</view>
												<view class="ed-grade-num">
													<block v-for="(ed, index) in item.grade" :key="'ed' + index">
														<text class="ed-grade">{{ed.name}} {{ed.num}}</text>
													</block>
												</view>
											</view>
										</view>
									</view>
									<view class="right-comment">
										<view class="user-conent"><text>{{item.content}}</text></view>
										<view class="user-conentImg uni-flex" v-if="item.saitu">
											<view v-for="(i,index) in item.saitu" :key="index" v-if="index<3">
												<image lazy-load mode="widthFix" :src="i"></image>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>

					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						2
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						3
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(currentTab)">
						4
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		    <appointment :show="showPop" ></appointment>
	</view>
</template>

<script>
	import orderList from '@/components/order-list/order-list.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import requestPayment from '@/components/request-payment/request-payment.vue'
	import appointment from '../../components/designer/appointment'
	export default {
		components: {
			orderList,
			uniPopup,
			requestPayment,
			appointment
		},
		data() {
			return {
				showPop:'',
				commentList: {
					list: [{
							"headImg": "/static/img/fitment/7@2x.png",
							"name": "黄晓明",
							"time": "2019-08-18",
							"content": "我是我们村第一个淘宝的人，这里大部分人都是不网购的，他们买东西价格一般不会超过五块，听说我在淘宝买东西整个村子都震惊了!",
							"saitu": ["/static/img/fitment/c1.png", "/static/img/fitment/c2.png",
								"/static/img/fitment/c3.png", "/static/img/fitment/c1.png"
							],
							grade: [{
									name: '设计：',
									num: '9.2'
								},
								{
									name: '服务：',
									num: '6.2'
								},
								{
									name: '施工：',
									num: '5.2'
								}
							],
						},
						{
							"headImg": "/static/img/fitment/7@2x.png",
							"name": "张三",
							"time": "2019-08-18",
							"content": "我是我们村第一个淘宝的人，这里大部分人都是不网购的，他们买东西价格一般不会超过五块，听说我在淘宝买东西整个村子都震惊了!",
							"saitu": ["/static/img/fitment/c1.png", "/static/img/fitment/c2.png",
								"/static/img/fitment/c3.png", "/static/img/fitment/c1.png"
							],
							grade: [{
									name: '设计：',
									num: '9.2'
								},
								{
									name: '服务：',
									num: '6.2'
								},
								{
									name: '施工：',
									num: '5.2'
								}
							],
						}
					],
					info: [{
						"aboutUs": "公司介绍",
						"services": "特色服务",
						"honor": "资质荣誉",
						"icon": "/static/img/fitment/gongsi-@2x.png"
					}],
					realtion: [{
							"name": "广州市白云区太和古镇北太路2号码头大厦",
							"icon": "/static/img/fitment/dizhi@2x.png"
						},
						{
							"name": "136526588882",
							"icon": "/static/img/fitment/dianhua@2x.png"
						}
					],
					server: [{
							img: '/static/img/fitment/3@2x.png'
						},
						{
							img: '/static/img/fitment/3@2x.png'
						},
						{
							img: '/static/img/fitment/3@2x.png'
						}
					],
					case: {
						list: [{
								img: '/static/img/fitment/1@21x.png',
								area: '150m²',
								type: '别墅豪宅',
								style: '美式经典'
							},
							{
								img: '/static/img/fitment/2@21x.png',
								area: '150m²',
								type: '别墅豪宅',
								style: '美式经典'
							},
						],
						check: '查看全部15个案例'
					},
					team: [{
							post: '设计总监',
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/4@2x.png'
						},
						{
							post: '设计总监',
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/5@2x.png'
						},
						{
							post: '设计总监',
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/6@2x.png'
						},
						{
							post: '设计总监',
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/7@2x.png'
						},
						{
							post: '设计总监',
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/4@2x.png'
						},
						{
							post: '设计总监',
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/4@2x.png'
						},
					],
					execution: [{
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/4@2x.png'
						},
						{
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/5@2x.png'
						},
						{
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/6@2x.png'
						},
						{
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/7@2x.png'
						},
						{
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/4@2x.png'
						},
						{
							name: '欧阳锋',
							year: '从业5年',
							img: '/static/img/fitment/4@2x.png'
						},
					],
					title: {
						server: '商户服务',
						case: '装修案例 (15)',
						uiTeam: '设计团队',
						execution: '施工团队',
						comment: '业主评价'
					},
				},
				menuTabs: [{
					name: "服务"
				}, {
					name: "案例"
				}, {
					name: "设计师"
				}, {
					name: "评价"
				}],
				current: 0,
				stars: [1, 2, 3, 4, 5],
				sendDate: {
					start: '4' 
				},
				currentTab: 0,
				list: [{
					shopName: "居众装饰",
					grade: [{
							name: '设计：',
							num: '9.2'
						},
						{
							name: '服务：',
							num: '6.2'
						},
						{
							name: '施工：',
							num: '5.2'
						}
					],
					installationCost: 100,
					commodityImg: "/static/img/fitment/1.png",
				}],
			}
		},
		onLoad() {

		},
		computed: {

		},
		methods: {
			swichMenu: async function(current) {
				console.log(this.currentTab);
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.currentTab = index;
			},
			loadMore: function(index) { //加载更多

			},
			todetail(){
				uni.navigateTo({
					url:'../design_team/designTeam'
				})
			},
			toU(index){
				uni.navigateTo({
					url:'../design_team/designer_about?uid='+index
				})
			},
			toPop(index){
				 this.showPop = index+''
				setTimeout(()=>{
					this.showPop = ''
				},100)
			},
			toCompanydetail(){
				uni.navigateTo({
					url:'/pages/company/company'
				})
			},
			tobuildTeam(){
				uni.navigateTo({
					url:'/pages/buildteam/buildteam'
				})
			}		
		}
	}
</script>

<style>
	@import "../../static/css/fitment.css";
</style>