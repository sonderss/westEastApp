<!-- <template>
	<view>
		<!-- <view class="nav">
			{{commentList.navName}}
			<image @click="back()" src="/static/img/company/back02.png" mode=""></image>
		</view> -->
		<view class="ed-box" id="ed-box">
			<view class="shopInfo uni-flex" v-for="(item, index) in commentList.headList" :key="index">
				<view class="shopInfo-img">
					<image lazy-load :src="item.commodityImg" mode="widthFix" class="is-response"></image>
				</view>
				<view class="shopInfo-introduce uni-flex">
					<view class="detail">
						<view style="line-height: 60upx;"><text class="shopName">{{item.shopName}}</text></view>
						<view class="ed-stars">
							<view>
								<text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.start ? 'active' : ''"></text>
								<text style="margin-left: 20upx;">共{{item.installationCost}}条</text>
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
			<view class="uni-panel" style="text-align: center">
				<view class="uni-panel-h" v-for="(item, index) in commentList.info" :key="index" @tap="toCompanydetail">
					<image class="ed-icon" :src="item.icon"></image>
					<text class="uni-panel-text" style="border-right: solid 1px">{{item.aboutUs}}</text>
					<text class="uni-panel-text">{{item.services}}</text>
					<text class="uni-panel-text">{{item.honor}}</text>
					<text class="uni-panel-icon uni-icon">&#xe470;</text>
				</view>
			</view>
			<view class="uni-panel" v-for="(item, index) in commentList.realtion" :key="index+1" @tap="toPlayPhone(index,commentList.realtion[0].name)">
				<view class="uni-panel-h">
					<image class="ed-icon" :src="item.icon"></image>
					<text class="uni-panel-text uni-panel-text2">{{item.name}}</text>
					<text class="uni-panel-icon uni-icon">&#xe470;</text>
				</view>
			</view>
		</view>
		<view :class="{'isFix' : isFix}" id="ed_nav" class="uni-flex uni-column">
			<view class="top-menu-view">
				<block v-for="(menuTab,index) in menuTabs" :key="index">
					<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
						<view :class="[currentTab == index ? 'menu-one-act' : 'menu-one']" class="menu-one-txt">{{menuTab.name}}</view>
					</view>
				</block>
			</view>
		</view>
		<view class="swiper-box-list">
			<view style="height: 100%;" duration="300" @change="swiperChange">
				<view>
					<view class="swiper-one-list" scroll-y="true">
						<view class="shopInfo ed-mpi" id="one">
							<view class="ed-h">{{commentList.title.server}}</view>
							<view class="uni-flex">
								<image v-for="(key, index) in commentList.server" @tap="toPop(index)" :key="'key' + index" class="is-response"
								 mode="widthFix" lazy-load :src="key.img"></image>
							</view>
						</view>

						<view class="shopInfo ed-case" id="two">
							<view class="uni-panel-h" style="padding: 0;">
								<text class="uni-panel-text">{{commentList.title.case}}</text>
								<text class="uni-panel-icon uni-icon">查看全部 &#xe470;</text>
							</view>
							<view class="uni-flex" @tap="showCase()" style="margin: 20upx 0;" v-for="(edCase, index) in commentList.case.list"
							 :key="index">
								<image class="is-response" mode="widthFix" lazy-load :src="edCase.img"></image>
								<view class="is-response ed-case-style" mode="widthFix">
									<view><text style="color: #ababab;">户型：</text> {{edCase.type}}</view>
									<view><text style="color: #ababab;">风格：</text> {{edCase.style}}</view>
									<view><text style="color: #ababab;">面积：</text> {{edCase.area}}</view>
								</view>
							</view>
							<view class="check-case">
								<text class="uni-panel-text" style="">{{commentList.case.check}}</text>
							</view>
						</view>

						<view id="three">
							<view class="shopInfo ed-uiTeam">
								<view class="uni-panel-h" style="padding: 0;">
									<text class="uni-panel-text ed-h">{{commentList.title.uiTeam}}</text>
									<text class="uni-panel-icon uni-icon" @click="todetail">查看全部 &#xe470;</text>
								</view>

								<view class="span_list_fitment" id="four">
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
											<view v-for="(item, index) in commentList.execution" :key="index" @tap="team_detail">
												<text>{{item.name}}</text>
												<text>{{item.year}}</text>
												<image lazy-load mode="widthFix" :src="item.img"></image>
											</view>
										</scroll-view>
									</view>
								</view>
							</view>

						</view>

						<view class="shopInfo ed-comment" id="four">
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

							<view class="check-case">
								<text class="uni-panel-text" style="">{{commentList.case.checkComment}}</text>
							</view>
						</view>
						<!-- <server-model :commentList="commentList" @toPop="toPop" :stars:="stars" :sendDate="sendDate"></server-model> -->
					</view>
				</view>
			</view>
		</view>

	</view>
</template>
 -->
<!-- <script>
	export default {
		props: ['stars', 'commentList', 'menuTabs', 'isFix', 'sendDate', 'ed-box'],
		data() {
			return {
				one_top:Number,
				ptd_top: Number,
				pinglun_top: Number,
				about_top: Number,
				scrollTop: Number,
				currentTab: 0
			}
		},
		methods: {
			toCompanydetail: function() {
				this.$emit('edToCompanydetail');
			},
			toPlayPhone: function(index, shopName) {
				this.$emit('edToPlayPhone', index, shopName);
			},
			toPop: function(index) {
				this.$emit('edToPop', index + '')
			},
			showCase: function() {
				this.$emit('edShowCase');
			},
			toU: function(index) {
				this.$emit('edToU', index);
			},
			todetail: function() {
				this.$emit('edTodetail');
			},
			tobuildTeam: function() {
				this.$emit('edTobuildTeam');
			},
			team_detail() {
				uni.navigateTo({
					url: '/pages/team_detail/teamdetail',
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>
 -->
<!-- <style>
	@import "../../static/css/fitment.css";

	.isFix {
		position: fixed;
		top: 0;
		z-index: 9999;
		width: 100%;
		background: #fff;
	}

	.nav {
		text-align: center;
		line-height: 100upx;
		font-size: 35upx;
		font-weight: bold;
		position: fixed;
		z-index: 9999;
		height: 100upx;
		top: 0;
		right: 0;
		width: 100%;
		background: #fff;
	}

	.nav image {
		position: absolute;
		top: 30upx;
		left: 30upx;
		width: 18upx;
		height: 35upx;
	}
</style>
 -->