<template>
	<view class="container content" id="content">
		<tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
		<view>
			<!-- 公司信息	start -->
			<view class="ed-box">
				<view class="shopInfo uni-flex" style="margin-bottom: 20upx;">
					<view>
						<image style="width: 150upx;height: auto;" lazy-load :src="headList.loginPic" mode="widthFix"></image>
					</view>
					<view class="shopInfo-introduce uni-flex" style="margin-left: 10upx;">
						<view class="detail">
							<view style="line-height: 40upx;"><text class="shopName">{{headList.shopName}}</text></view>
							<view class="ed-stars">
								<view class="tui-rate-container uni-flex" style="align-items: center;">
									<tui-rate :current="pice.sumSorce" :size="16" :quantity="5"></tui-rate>
									<text style="margin-left: 20upx;">共{{pice.commentCount}}条</text>
								</view>
							</view>
							<view class="ed-grade-num">
								<text class="ed-grade">设计：{{pice.designSorce}}</text>
								<text class="ed-grade">服务：{{pice.serverSorce}}</text>
								<text class="ed-grade">施工：{{pice.buildSorce}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="uni-panel">
					<view class="uni-panel-h" v-for="(item, index) in info" :key="index" @tap="toCompanydetail(type, typeId)">
						<image class="ed-icon" :src="item.icon"></image>
						<text class="uni-panel-text" style="border-right: solid 1px">{{item.aboutUs}}</text>
						<text class="uni-panel-text" style="border-right: solid 1px">{{item.services}}</text>
						<text class="uni-panel-text">{{item.honor}}</text>
						<text class="uni-panel-icon uni-icon">&#xe470;</text>
					</view>
				</view>
				<view class="uni-panel">
					<view class="uni-panel-h" @tap="toPlayPhone(0,testcommentList.address)">
						<image class="ed-icon" src="/static/img/fitment/dizhi2x.png"></image>
						<text class="uni-panel-text">{{testcommentList.address}}</text>
						<text class="uni-panel-icon uni-icon">&#xe470;</text>
					</view>
				</view>
				<view class="uni-panel" @tap="toPlayPhone(1,testcommentList.phone)">
					<view class="uni-panel-h">
						<image class="ed-icon" src="/static/img/fitment/dianhua2x.png"></image>
						<text class="uni-panel-text">{{testcommentList.phone}}</text>
						<text class="uni-panel-icon uni-icon">&#xe470;</text>
					</view>
				</view>
			</view>
			<!-- 公司信息	end -->
			<tui-sticky :scrollTop="scrollTop" stickyHeight="71upx">
				<template v-slot:header>
					<tui-tabs :tabs="menuTabs" :isFixed="scrollTop>=one_top" itemWidth="25%" :padding="0" :sliderHeight="5" :currentTab="currentTab" @change="swichMenu"></tui-tabs>
				</template>
				<template v-slot:content>
					<!--内容 start-->
					<view class="list-view">
						<view class="swiper-box-list">
							<view style="height: 100%;" duration="300" @change="swiperChange">
								<view>
									<view class="swiper-one-list" scroll-y="true">
										<view class="shopInfo ed-mpi" id="one">
											<view class="ed-h">商户服务</view>
											<view class="uni-flex">
												<image v-for="(key, index) in server" @tap="toPop(index)" :key="'key' + index" class="is-response" mode="widthFix"
												 lazy-load :src="key.img"></image>
											</view>
										</view>
										<view class="shopInfo ed-case" id="two">
											<view class="uni-panel-h" style="padding: 0;">
												<text>装修案例({{testcommentList.caseCount}})</text>
												<text class="uni-panel-icon uni-icon" @tap='goMoreWorks'>查看全部 &#xe470;</text>
											</view>
											<view class="uni-flex" @tap="showCase()" style="margin-bottom: 20upx" v-for="(edCase, index) in testcommentList.listCase"
											 :key="index">
												<image style="width: 40%; border-radius: 15upx 0 0 15upx;" class="is-response" mode="widthFix" lazy-load :src="edCase.showPic"></image>
												<view style="width: 60%;" class="is-response ed-case-style" mode="widthFix">
													<view><text style="font-size: 26upx;" v-text="type == 0? '户型：' :  '名称：'"></text><text style="color: #000000;font-size: 26upx;"
														 v-text="type == 0?edCase.houseType: edCase.title"></text></view>
													<view><text style="font-size: 26upx;" v-text="type == 0? '风格：' :  '类型：'"></text><text style="color: #000000;font-size: 26upx;"
														 v-text="type == 0?edCase.styleType: edCase.buildType"></text></view>
													<view><text style="font-size: 26upx;">面积：</text> {{edCase.area}}m²</view>
												</view>
											</view>
											<view class="check-case">
												<text @tap='goMoreWorks' class="uni-panel-text">查看全部{{testcommentList.caseCount}}个案例</text>
											</view>
										</view>
										<view id="three">
											<view class="shopInfo ed-uiTeam">
												<view class="uni-panel-h" style="padding: 0;">
													<text class="ed-h">设计团队</text>
													<text class="uni-panel-icon uni-icon" @click="todetail">查看全部 &#xe470;</text>
												</view>
												<view class="span_list_fitment">
													<view>
														<scroll-view class="show_scroll" scroll-x="true" show-scrollbar="false">
															<view v-for="(item, index) in testcommentList.designTeam" :key="index" @click="toU(item.id,index)">
																<text>{{item.position}}</text>
																<text>{{item.name}}</text>
																<text>{{item.workYears}}</text>
																<image lazy-load mode="widthFix" style="width: 120upx;height: 120upx;margin: 0 auto;" :src="item.headPic"></image>
															</view>
														</scroll-view>
													</view>
												</view>
											</view>
											<view class="shopInfo ed-execution">
												<view class="uni-panel-h" style="padding: 0;" @tap="tobuildTeam">
													<text class="ed-h">施工团队</text>
													<text class="uni-panel-icon uni-icon">查看全部 &#xe470;</text>
												</view>
			
												<view class="span_list_fitment">
													<view>
														<scroll-view class="show_scroll2" scroll-x="true" show-scrollbar="false">
															<view v-for="(item, index) in testcommentList.buildTeam" :key="index" @tap="team_detail">
																<text>{{item.name}}</text>
																<text>{{item.workYears}}</text>
																<image lazy-load mode="widthFix" :src="item.headPic"></image>
															</view>
														</scroll-view>
													</view>
												</view>
											</view>
										</view>
										<view class="shopInfo ed-comment" id="last-div">
											<view class="uni-panel-h" style="padding: 0;">
												<text class="ed-h">业主评价</text>
												<text style="font-size: 26upx;" class="uni-panel-icon uni-icon">查看全部 &#xe470;</text>
											</view>
											<view class="commentConet">
												<view class="commentList uni-flex uni-column" v-for="(item,index) in testcommentList.listUserEvaluation"
												 :key="index">
													<view class="uni-flex">
														<view class="shopInfo-img" style="width: 130upx;">
															<image lazy-load :src="item.headPic" mode="widthFix" class="is-response"></image>
														</view>
														<view class="shopInfo-introduce uni-flex uni-column">
															<view class="detail">
																<view class="uni-flex" style="line-height: 35upx;justify-content: space-between;">
																	<text style="font-size: 32upx;">{{item.userName}}</text>
																	<text style="font-size: 24upx;color: #3E3E3E;">{{item.createDate}}</text>
																</view>
																<view class="ed-stars">
																	<view class="tui-rate-container uni-flex" style="align-items: center;">
																		<tui-rate :current="pice.sumSorce" :size="16" :quantity="5"></tui-rate>
																	</view>
																</view>
																<view class="ed-grade-num">
																	<text class="ed-grade">设计：{{item.calProperty.designSorce}}</text>
																	<text class="ed-grade">服务：{{item.calProperty.serverSorce}}</text>
																	<text class="ed-grade">施工：{{item.calProperty.buildSorce}}</text>
																</view>
															</view>
														</view>
													</view>
													<view class="right-comment">
														<view class="user-conent"><text>{{item.content}}</text></view>
														<view class="user-conentImg uni-flex" v-if="item.arrayPic">
															<view v-for="(i,index) in item.arrayPic" :key="index" v-if="index<3">
																<image style="width: 230upx;height: 230upx;" lazy-load :src="i"></image>
															</view>
														</view>
													</view>
												</view>
											</view>
											<view class="check-case">
												<text class="uni-panel-text" style="">查看全部{{testcommentList.evalCount}}个评价</text>
											</view>
										</view>
										<!-- <server-model :commentList="commentList" @toPop="toPop" :stars:="stars" :sendDate="sendDate"></server-model> -->
									</view>
								</view>
							</view>
						</view>
					</view>
					<!--内容 end-->
				</template>
			</tui-sticky>
		</view>
		<appointment :show="showPop" :comId='typeId' @cancelCity="cancelCity" :isBaoJia="isBaoJia" :cjq_city="cjq_city"></appointment>
		<btmbtn :phone_bm="phone" :comId='typeId' :isShowPhone='isShowPhone' :cjq_city="cjq_city" @shoucang="shoucang"
		 :left_name="left_name" :left_icon="left_icon" :btn_name="btn_name" :isBaoJia="isBaoJia"></btmbtn>
	</view>
</template>

<script>
	import tuiSkeleton from "@/edith_components/tui-skeleton/tui-skeleton"
	import json from './json'
	import api from '../../apis/https/myApi'
	import appointment from '../../components/designer/appointment'
	import btmbtn from '../../components/designer/btmbtn'
	import tuiSticky from "@/edith_components/sticky/sticky"
	import tuiRate from "@/edith_components/rate/rate"
	import tuiTabs from "@/edith_components/tui-tabs/tui-tabs"
	export default {
		components: {
			appointment,
			btmbtn,
			tuiSticky,
			tuiRate,
			tuiSkeleton,
			tuiTabs
		},
		data() {
			return {
				skeletonShow: true,
				scrollTop: 0,
				isShowPhone: '',
				showPop: '',
				commentList: [],
				testcommentList: [],
				headList: {},
				buildList: [],
				menuTabs: [{
					name: "服务"
				}, {
					name: "案例"
				}, {
					name: "设计师"
				}, {
					name: "评价"
				}],
				info: [{
					"aboutUs": "公司介绍",
					"services": "特色服务",
					"honor": "资质荣誉",
					"icon": "/static/img/fitment/gongsi-@2x.png"
				}],
				server: [],
				// current: 0,
				// currentTab: 0,
				latitude: 0,
				longitude: 0,
				left_name: '电话客服',
				left_icon: "",
				btn_name: '',
				isBaoJia: '',
				cjq_city: '',
				currentTab: 0,
				one_top: 0,
				ptd_top: 0,
				pinglun_top: 0,
				about_top: 0,
				pice: {},
				phone: '',
				designTeam: [],
				type: null,
				typeId: null,
			}
		},
		onLoad: function(res) {
			this.getData(res)
		},
		mounted() {
				this.getHeight()
		},
		methods: {
			getHeight(){
				uni.createSelectorQuery().select("#one").boundingClientRect((data) => {
					this.one_top = this.scrollTop + data.top
				}).exec();
				uni.createSelectorQuery().select("#two").boundingClientRect((data) => {
					this.ptd_top = this.scrollTop + data.top
				}).exec();
				uni.createSelectorQuery().select("#three").boundingClientRect((data) => {
					this.pinglun_top = this.scrollTop + data.top
				}).exec();
				uni.createSelectorQuery().select("#last-div").boundingClientRect((data) => {
					this.about_top = this.scrollTop + data.top
				}).exec();
			},
			getData(res) {
				if (res.type === 'jianzhu') {
					uni.setNavigationBarTitle({
						title: '建筑公司'
					})
					this.type = 1;
					this.typeId = res.id
					api.getBuildCompanyDetail({
						companyid: res.id
					}).then((res) => {
						this.designTeam = res.data.data.designTeam
						setTimeout(() => {
							this.skeletonShow = false
						}, 500)
						this.headList = res.data.data.headList
						this.testcommentList = res.data.data
						// this.commentList.headList = res.data.data.headList
						this.pice = res.data.data.headList.calProperty
						this.phone = res.data.data.phone
					})
					this.server = json.buildList[0].server
					this.left_name = '收藏'
					this.left_icon = '../../static/img/designTeam/jzcompon/kongxin.png'
					this.btn_name = '免费预约服务'
					this.isBaoJia = 'isYuYue'
				} else {
					uni.setNavigationBarTitle({
						title: '装修公司'
					})
					this.type = 0;
					this.typeId = res.id
					api.getTrimCompanyDetail({
						companyid: res.id
					}).then((res) => {
						this.designTeam = res.data.data.designTeam
						setTimeout(() => {
							this.skeletonShow = false
						}, 500)
						this.headList = res.data.data.headList
						this.testcommentList = res.data.data
						this.commentList.headList = res.data.data.headList
						this.pice = res.data.data.headList.calProperty
						this.phone = res.data.data.phone
					})
					this.server = json.commentList[0].server
					this.left_name = '电话客服'
					this.left_icon = '../../static/img/designTeam/jieshao/phone.png'
					this.btn_name = '免费为我报价'
					this.isBaoJia = 'isBaoJia'
				}
			},
			swichMenu(e) {
				if (this.currentTab == e.index) {
					return false;
				} else {
					this.currentTab = e.index;
					if (this.currentTab === 0) {
						uni.createSelectorQuery().select("#one").boundingClientRect((data) => {
							uni.pageScrollTo({
								duration: 0,
								scrollTop: this.scrollTop + data.top - 40
							})
						}).exec();
						return false;
					}
					if (this.currentTab === 1) {
						uni.createSelectorQuery().select("#two").boundingClientRect((data) => {
							uni.pageScrollTo({
								duration: 0,
								scrollTop: this.scrollTop + data.top - 40
							})
						}).exec();
						return false;
					}
					if (this.currentTab === 2) {
						uni.createSelectorQuery().select("#three").boundingClientRect((data) => {
							uni.pageScrollTo({
								duration: 0,
								scrollTop: this.scrollTop + data.top - 40,
							})
						}).exec();
						return false;
					}
					if (this.currentTab === 3) {
						uni.createSelectorQuery().select("#last-div").boundingClientRect((data) => {
							uni.pageScrollTo({
								duration: 0,
								scrollTop: this.scrollTop + data.top - 40
							})
						}).exec();
						return false;
					}
				}

			},
			shoucang(src) {
				if (src) {
					this.left_icon = '../../static/img/designTeam/jzcompon/shixin.png'

				}
				if (!src) {
					this.left_icon = '../../static/img/designTeam/jzcompon/kongxin.png'
				}
			},
			swiperChange(e) {
				let index = e.target.current;
				this.currentTab = index;
			},
			loadMore(index) { //加载更多

			},
			todetail() {
				this.$store.commit('cjq_set', this.designTeam)
				uni.navigateTo({
					url: '../design_team/designTeam?' + '&id=' + this.typeId + '&type=' + this.type
				})
			},
			toU(uid, index) {
				this.$store.commit('cjq_set', this.designTeam)
				uni.navigateTo({
					url: '../design_team/designer_about?uid=' + uid + '&index=' + index + '&id=' + this.typeId + '&type=' + this.type
				})
			},
			toPop(index) {
				//这里接收子组件传过来的值
				this.showPop = index + ''
				setTimeout(() => {
					this.showPop = ''
				}, 100)
			},
			toCompanydetail(type, id) {
				uni.navigateTo({
					url: '/pages/company/company?id=' + id + '&' + 'type=' + type
				})
			},
			toPlayPhone(index, shopName) {
				if (index === 1) {
					this.isShowPhone = 'isShowPhone'
					setTimeout(() => {
						this.isShowPhone = ''
					}, 100)
				}
				if (index === 0) {
					//这里的keyword应该是自身数据上的位置名称
					//或者 该数据中带有自身位置信息   暂时是选择第一种
					// uni.chooseLocation({
					// 		keyword:'广州市白云区太和古镇北太路2号码头大厦',
					// 		success: function (res) {
					// 			console.log('位置名称：' + res.name);
					// 			console.log('详细地址：' + res.address);
					// 			console.log('纬度：' + res.latitude);
					// 			console.log('经度：' + res.longitude);
					// 		}
					// });
					// uni.navigateTo({
					// 	url:  '../../pages/fitment/viewmap?shopName=' +shopName
					// })

					uni.getLocation({
						type: 'gcj02', //返回可以用于uni.openLocation的经纬度
						success: function(res) {
							const latitude = res.latitude;
							const longitude = res.longitude;
							uni.openLocation({
								name: shopName,
								latitude: 23.28636,
								longitude: 113.3517,
								success: function() {
									console.log('success');
								}
							});
						}
					});
				}
				return

			},
			tobuildTeam() {
				uni.navigateTo({
					url: '/pages/buildteam/buildteam'
				})
			},
			showCase() {
				uni.navigateTo({
					url: '/pages/fitment/case/decoration?path=' + 1
				})
			},
			cancelCity() {
				this.cjq_city = ''
			},
			goMoreWorks() {
				uni.navigateTo({
					url: '../../pages/fitment/works?id=' + this.typeId + '&type=' + this.type
				})
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
			if (e.scrollTop < this.one_top) {
				this.currentTab = 0;
			}
			if (e.scrollTop >= this.ptd_top ) {
				this.currentTab = 1;
			}
			if (e.scrollTop >= this.pinglun_top) {
				this.currentTab = 2;
			}
			if (e.scrollTop >= this.about_top) {
				this.currentTab = 3;
			}
		}
	}
</script>

<style scoped>
	@import "../../static/css/fitment.css";

	.o {
		margin-top: -400upx;
		margin-bottom: 100upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	/* sticky 容器 start */
	.sticky-item {
		width: 100%;
		height: 71upx;
		/* padding: 20rpx 30rpx; */
		background: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}
</style>
