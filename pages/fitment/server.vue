<!-- <template>
	<view>
		<view class="shopInfo ed-mpi" :id="one">
			<view class="ed-h">{{commentList.title.server}}</view>
			<view class="uni-flex">
				<image v-for="(key, index) in commentList.server" @tap="toPop(index)" :key="'key' + index" class="is-response" mode="widthFix"
				 lazy-load :src="key.img"></image>
			</view>
		</view>

		<view class="shopInfo ed-case" :id="two">
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

		<view class="shopInfo ed-uiTeam" :id="three">
			<view class="uni-panel-h" style="padding: 0;">
				<text class="uni-panel-text ed-h">{{commentList.title.uiTeam}}</text>
				<text class="uni-panel-icon uni-icon" @click="todetail">查看全部 &#xe470;</text>
			</view>

			<view class="span_list_fitment" :id="four">
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

			<view class="check-case">
				<text class="uni-panel-text" style="">{{commentList.case.checkComment}}</text>
			</view>
		</view>
		<!-- <appointment :show="showPop"></appointment> -->
	</view>
</template>

<script>
	// import appointment from '../../components/designer/appointment'
	export default {
		components: {},
		props: ['commentList', 'stars', 'sendDate', 'id'],
		data() {
			return {
				showPop: '',
				scrollTop: ''
			}
		},
		methods: {
			toPop(index) {
				this.$emit('toPop', index + '')
			},
			tobuildTeam() {
				uni.navigateTo({
					url: '/pages/buildteam/buildteam'
				})
			},
			toU(index) {
				uni.navigateTo({
					url: '../design_team/designer_about?uid=' + index
				})
			},
			todetail() {
				uni.navigateTo({
					url: '../design_team/designTeam'
				})
			},
			showCase(){
				uni.navigateTo({
					url: '/pages/fitment/case/decoration'
				})
			}
		}
	}
</script>

<style>
	@import "../../static/css/fitment.css";
</style>
 -->