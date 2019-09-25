<template>
	<view class="content">
		<view class="header" :style="{ transform: 'translateY(' + small_header_Y + 'px)' }">
			<view class="add_search_scan" :class="small_header_Y < 0 ? 'home_circle_high' : 'home_circle_show'">
				<view class="address">
					<view class="city">{{ currentDistrict }}</view>
					<view class="wundu">{{ wendu }}°</view>
				</view>
				<view class="search_box" @tap="link_search">
					<image src="/static/img/home/search_ico.png" class="search_ico"></image>
					<image src="/static/img/home/camera_ico.png" class="camera_ico"></image>
					<!-- <input type="text" class="search_input" confirm-type="search"> -->
				</view>
				<view class="scan" @tap="link_scan"><image src="/static/img/home/scan_ico.png" class="scan_ico"></image></view>
			</view>
			<view class="menu">
				<view :class="tab_num == 1 ? 'active' : ''" @tap="tab_num = 1">商城</view>
				<view :class="tab_num == 2 ? 'active' : ''" @tap="tab_num = 2">装修</view>
				<view :class="tab_num == 3 ? 'active' : ''" @tap="tab_num = 3">贷款</view>
				<view :class="tab_num == 4 ? 'active' : ''" @tap="tab_num = 4">签约</view>
			</view>
		</view>		
		<view class="home_banner">
			<view style="width: 100%;height: 100%;overflow: hidden;border-radius: 7px;">
				<swiper
					style="width: 100%;height: 100%;"
					class=""
					circular="true"
					:autoplay="autoplay"
					:interval="interval"
					:indicator-dots="indicatorDots"
					:duration="duration"
					indicator-active-color="#de0303"
					indicator-color="#fff"
				>
					<swiper-item style="width: 100%;height: 100%;" v-for="(item, i) in home_banner_list" :key="i">
						<image :src="item" style="width: 100%;height: 100%"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="home_circle" :class="opacity == 0 ? 'home_circle_high' : 'home_circle_show'">
			<view class="leftTop_btn" @tap="my_fix('我要装修')">
				<view class="width290 background1 left0 top0" ></view>
				<view class="height290 background1 left0 top0" ></view>
				<view class="txt1">
					<text class="txt_p">我要</text>
					<text class="txt_p" >装修</text>
				</view>
			</view>
			<view class="rightTop_btn">
				<view class="width290 background2 right0 top0"></view>
				<view class="height290 background2 right0 top0"></view>
				<view class="txt2">
					<text class="txt_p">软装</text>
					<text class="txt_p">商城</text>
				</view>
			</view>
			<view class="leftBottom_btn">
				<view class="width290 background1 left0 bottom0"></view>
				<view class="height290 background1 left0 bottom0"></view>
				<view class="txt3">
					<text class="txt_p">我懂</text>
					<text class="txt_p">装修</text>
				</view>
			</view>
			<view class="rightBottom_btn">
				<view class="width290 background2 right0 bottom0"></view>
				<view class="height290 background2 right0 bottom0"></view>
				<view class="txt4">
					<text class="txt_p">硬装</text>
					<text class="txt_p">商城</text>
				</view>
			</view>

			<view class="btn_circle">
				<view class="btn_circle2">
					<view class="half_circle left0 fill_color1"></view>
					<view class="half_circle right0 fill_color2"></view>
					<view class="line_container">
						<view class="line1 line"></view>
						<view class="line2 line"></view>
						<view class="line3 line"></view>
						<view class="line4 line"></view>
						<view class="line5 line"></view>
						<view class="line6 line"></view>
					</view>
					<view class="txt_btn">
						<view class="btn1 btn" @tap="open_list('装修公司')">
							<text>装</text>
							<text>修</text>
							<text>公</text>
							<text>司</text>
						</view>
						<view class="btn2 btn" @tap="open_list('建筑公司')">
							<text>建</text>
							<text>筑</text>
							<text>公</text>
							<text>司</text>
						</view>
						<view class="btn3 btn" @tap="open_list('设计公司')">
							<text>设</text>
							<text>计</text>
							<text>公</text>
							<text>司</text>
						</view>
						<view class="btn4 btn" @tap="open_list('监理验收')">监理验收</view>
						<view class="btn5 btn" @tap="open_list('清洁维收')">清洁维收</view>
						<view class="btn6 btn" @tap="open_list('运输送货')">
							<text>运</text>
							<text>输</text>
							<text>送</text>
							<text>货</text>
						</view>
						<view class="btn7 btn" @tap="open_list('居家风水')">
							<text>居</text>
							<text>家</text>
							<text>风</text>
							<text>水</text>
						</view>
						<view class="btn8 btn" @tap="open_list('家具摆件')">
							<text>家</text>
							<text>具</text>
							<text>摆</text>
							<text>件</text>
						</view>
						<view class="btn9 btn" @tap="open_list('家装电器')">
							<text>家</text>
							<text>装</text>
							<text>电</text>
							<text>器</text>
						</view>
						<view class="btn10 btn" @tap="open_list('五金工具')">
							<text>五</text>
							<text>金</text>
							<text>工</text>
							<text>具</text>
						</view>
						<view class="btn11 btn" @tap="open_list('辅材水电')">辅材水电</view>
						<view class="btn12 btn" @tap="open_list('户外建材')">户外建材</view>
						<view class="btn13 btn" @tap="open_list('智能家居')">
							<text>智</text>
							<text>能</text>
							<text>家</text>
							<text>居</text>
						</view>
						<view class="btn14 btn" @tap="open_list('进口建材')">
							<text>进</text>
							<text>口</text>
							<text>建</text>
							<text>材</text>
						</view>
					</view>
				</view>
			</view>
			<text class="left_txt">东装</text>
			<text class="right_txt">西购</text>
		</view>
		<view class="span_list">
			<view class="span_list_fitment">
				<text class="s_txt">装修建议</text>
				<view>
					<view class="box_list_01">
						<view>
							<image style="width: 100%;" src="/static/img/home/spantitle/01.png" mode="widthFix"></image>
							<view class="top_txt">
								<text>装修攻略</text>
								<br />
								<text>教你实用技巧</text>
							</view>
						</view>
						<view>
							<image style="width: 100%;" src="/static/img/home/spantitle/02.png" mode="widthFix"></image>
							<view class="top_txt">
								<text>选材重点</text>
								<br />
								<text>性价比高的材料</text>
							</view>
						</view>
					</view>
					<view class="box_list_01" style="margin-top: 24upx;">
						<view>
							<image style="width:100%" src="/static/img/home/spantitle/03.png" mode="widthFix"></image>
							<view class="top_txt">
								<text>签约避坑</text>
								<br />
								<text>防坑秘籍</text>
							</view>
						</view>
						<view>
							<image style="width:100%" src="/static/img/home/spantitle/04.png" mode="widthFix"></image>
							<view class="top_txt">
								<text>验收指南</text>
								<br />
								<text>一步步教你如何验收</text>
							</view>
						</view>
					</view>
					<!-- 148 277 -->
				</view>
			</view>
			<view class="span_list_fitment">
				<text class="s_txt">推荐精品</text>
				<view class="recom_list">
					<view>
						<image style="width:100%" src="/static/img/home/recom/1.png" mode="widthFix"></image>
						<view class="recom_top_txt">
							<text>生活馆</text>
							<br />
							<text>生活处处有精彩，只要用心感受</text>
						</view>
					</view>
					<view>
						<image style="width:100%" src="/static/img/home/recom/2.png" mode="widthFix"></image>
						<view class="recom_top_txt">
							<text>收藏馆</text>
							<br />
							<text>收藏就是收起来藏起来</text>
						</view>
					</view>
					<view>
						<image style="width:100%" src="/static/img/home/recom/3.png" mode="widthFix"></image>
						<view class="recom_top_txt">
							<text>功能区产品</text>
							<br />
							<text>多功能实现便捷温馨的家</text>
						</view>
					</view>
					<view>
						<image style="width:100%" src="/static/img/home/recom/4.png" mode="widthFix"></image>
						<view class="recom_top_txt">
							<text>改造设计</text>
							<br />
							<text>升级改造换一个家</text>
						</view>
					</view>
				</view>
			</view>
			<view class="span_list_fitment">
				<text class="s_txt">东装show</text>
				<view>
					<scroll-view class="show_scroll" scroll-x="true" show-scrollbar="false">
						<view>
							<text>装修前后</text>
							<image src="/static/img/home/eastshow/01.png"></image>
						</view>
						<view>
							<text>装修前后</text>
							<image src="/static/img/home/eastshow/01.png"></image>
						</view>
						<view>
							<text>装修前后</text>
							<image src="/static/img/home/eastshow/01.png"></image>
						</view>
						<view style="margin-right: 0;">
							<text>装修前后</text>
							<image src="/static/img/home/eastshow/01.png"></image>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="span_list_fitment">
				<text class="s_txt">说空间</text>
				<view class="home_banner_space">
					<view style="width: 100%;height: 100%;overflow: hidden;border-radius: 7px;position: relative">
						<swiper @change="changedot" style="width: 100%;height: 100%;" circular="true" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item style="width: 100%;height: 100%;position: relative;" v-for="(item, i) in home_banner_space" :key="i">
								<image :src="item" style="width: 100%;height: 100%"></image>
								<view class="space_txt">
									<text>装修前应该了解的东西!&nbsp;以防被坑</text>
									<br />
									<text>作为一名工程师，这里就告诉大家一下装修前应该要懂的东西....</text>
								</view>
							</swiper-item>
						</swiper>
						<swiper-dot class="swiperdot" :current="currentdot" :list="home_banner_space"></swiper-dot>
					</view>
				</view>
			</view>
			<view class="span_list">
				<view class="lazy_load">
					<view class="lazy_load_left">
						<view v-for="(x, index) in lazy_load_left" :key="index">
							<image :src="x" style="width: 347upx;" mode="widthFix"></image>
							<view>
								<text class="title">客厅墙面硅藻泥</text>
								<view class="lazy_txzt">
									<text>￥1899-3599</text>
									<text class="shop">广州&nbsp;供应商</text>
								</view>
							</view>
						</view>
					</view>
					<view class="lazy_load_right">
						<view v-for="(x, index) in lazy_load_right" :key="index">
							<image :src="x" style="width: 100%;" mode="widthFix"></image>
							<view>
								<text class="title">客厅墙面硅藻泥</text>
								<view class="lazy_txzt">
									<text>￥1899-3599</text>
									<text class="shop">广州&nbsp;供应商</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="ad">
				<view>
					<image src="/static/img/home/ad.png" mode="widthFix"></image>
					<text>改造设计，听听大师们怎么说</text>
				</view>
			</view>
			<view class="span_list">
				<view class="lazy_load">
					<view class="lazy_load_left">
						<view v-for="(x, index) in lazy_load_left" :key="index">
							<image :src="x" style="width: 347upx;" mode="widthFix"></image>
							<view>
								<text class="title">客厅墙面硅藻泥</text>
								<view class="lazy_txzt">
									<text>￥1899-3599</text>
									<text class="shop">广州&nbsp;供应商</text>
								</view>
							</view>
						</view>
					</view>
					<view class="lazy_load_right">
						<view v-for="(x, index) in lazy_load_right" :key="index">
							<image :src="x" style="width: 100%;" mode="widthFix"></image>
							<view>
								<text class="title">客厅墙面硅藻泥</text>
								<view class="lazy_txzt">
									<text>￥1899-3599</text>
									<text class="shop">广州&nbsp;供应商</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="home_animation" :style="{'transform':'translateY('+home_animation_top+'px)','height':temp_content_height+'px'}" :style="{'height':temp_content_height+'px'}" > -->
		<!-- <view class="home_animation">
			<view class="store_img">
				<view class="title">
					<view class="title1">家装商城</view>
					<view class="title_btn" @tap="link">
						<text class="btn1">品牌故事</text>
						<text class="btn2">全部></text>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper
								class="swiper_produce"
								skip-hidden-item-layout="true"
								circular="true"
								:autoplay="autoplay"
								:interval="2000"
								:duration="duration"
								:indicator-dots="indicatorDots"
								indicator-active-color="#de0303"
								indicator-color="#d8d8d8"
							>
								<swiper-item v-for="(item, i) in store_img_list" :key="i" @tap="jump(i)" class="swiper-item">
									<view v-for="(item2, j) in item" :key="j" style="width:20%;margin:-5% auto 0;height: 60%;box-shadow: 0 0 5px #dadada;border-radius: 7px;">
										<view class="img" style="height: 100%;" :style="{ background: 'url(' + item2 + ') center center/90% auto no-repeat' }"></view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
			<view class="design_img">
				<view class="title">
					<view class="title1">装修设计</view>
					<view class="title_btn">
						<text class="btn1">说空间</text>
						<text class="btn2">全部></text>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper
								class="swiper"
								circular="true"
								:autoplay="autoplay"
								:interval="interval"
								:indicator-dots="indicatorDots"
								:duration="duration"
								indicator-active-color="#de0303"
								indicator-color="#fff"
							>
								<swiper-item v-for="(item, i) in swiper_list" :key="i">
									<view class=""><image :src="item" style="width: 100%;"></image></view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>

			<view class="suit_img">
				<view class="title">
					<view class="title1">批量促销</view>
					<view class="title_btn"><text class="btn2">全部></text></view>
				</view>
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper
								class="swiper_batch"
								skip-hidden-item-layout="true"
								circular="true"
								:autoplay="autoplay"
								:interval="2500"
								:duration="duration"
								:indicator-dots="indicatorDots"
								indicator-active-color="#de0303"
								indicator-color="#d8d8d8"
							>
								<swiper-item v-for="(item, i) in suit_img_list" :key="i" class="swiper-item">
									<view v-for="(item2, j) in item" :key="j" style="width:30%;margin:-5% auto 0;height: 75%;box-shadow: 0 0 5px #dadada;border-radius: 7px;">
										<view class="img" style="height: 100%;" :style="{ background: 'url(' + item2 + ') center center/90% auto no-repeat' }"></view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>

			<view class="suit_img">
				<view class="title">
					<view class="title1">签约见礼</view>
					<view class="title_btn"><text class="btn2">全部></text></view>
				</view>
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper
								class="swiper_batch"
								skip-hidden-item-layout="true"
								circular="true"
								:autoplay="autoplay"
								:interval="2500"
								:duration="duration"
								:indicator-dots="indicatorDots"
								indicator-active-color="#de0303"
								indicator-color="#d8d8d8"
							>
								<swiper-item v-for="(item, i) in sign_img_list" :key="i" class="swiper-item">
									<view v-for="(item2, j) in item" :key="j" style="width:30%;margin:-5% auto 0;height: 70%;box-shadow: 0 0 5px #dadada;border-radius: 7px;">
										<view class="img" style="height: 100%;" :style="{ background: 'url(' + item2 + ') center center/90% auto no-repeat' }"></view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<view class="tips_login" v-if="!token" :class="total_box_margin ? 'margin100' : ''">
			<text>登录后获得更好的体验</text>
			<view class="login_btn" @tap="link_login">立即登录</view>
		</view>
		<view class="offer_search" :class="total_box_margin ? (token ? 'margin100' : 'margin200') : token ? '' : 'margin100'">
			<view v-if="show_search_btn" class="show_search_btn">
				<view class="btn_box">
					<view class="offer_btn">报价</view>
					<view class="search_btn" @tap="link_search">搜索</view>
				</view>
				<view @tap="show_search_btn = false">
					<image src="/static/img/up_tips.png" class="offer_search_up_tips"></image>
					<view class="hide_btn">收起</view>
				</view>
			</view>
			<view v-else class="offer_tips" @tap="show_search_btn = true">报价</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import city_id from './city_id.js';
import swiperDot from '@/components/swiperDot/swiperDot.vue';
export default {
	data() {
		return {
			currentdot: 0,
			tab_num: 1,
			autoplay: true,
			interval: 5000,
			duration: 300,
			indicatorDots: true,
			title: '首页',
			city_id: {},
			wendu: '',
			home_banner_list: ['/static/img/home/banner/1.png', '/static/img/home/banner/2.png', '/static/img/home/banner/3.png', '/static/img/home/banner/4.png'],
			lazy_load_left: ['/static/img/home/sayspace/1124.png', '/static/img/home/sayspace/1126.png', '/static/img/home/sayspace/1126.png'],
			lazy_load_right: ['/static/img/home/sayspace/1126.png', '/static/img/home/sayspace/1126.png', '/static/img/home/sayspace/1124.png'],
			home_banner_space: ['/static/img/home/sayspace/01.png', '/static/img/home/sayspace/01.png', '/static/img/home/sayspace/01.png', '/static/img/home/sayspace/01.png'],
			store_img_list: [
				['/static/img/home/store_img1.png', '/static/img/home/store_img2.png', '/static/img/home/store_img3.png', '/static/img/home/store_img4.png'],
				['/static/img/home/store_img1.png', '/static/img/home/store_img2.png', '/static/img/home/store_img3.png', '/static/img/home/store_img4.png'],
				['/static/img/home/store_img1.png', '/static/img/home/store_img2.png', '/static/img/home/store_img3.png', '/static/img/home/store_img4.png']
			],
			swiper_list: ['/static/img/home/swiper_img1.png', '/static/img/home/swiper_img1.png', '/static/img/home/swiper_img1.png'],
			suit_img_list: [
				['/static/img/home/suit_img1.png', '/static/img/home/suit_img2.png', '/static/img/home/suit_img3.png'],
				['/static/img/home/suit_img1.png', '/static/img/home/suit_img2.png', '/static/img/home/suit_img3.png'],
				['/static/img/home/suit_img1.png', '/static/img/home/suit_img2.png', '/static/img/home/suit_img3.png']
			],
			sign_img_list: [
				['/static/img/home/sign_img1.png', '/static/img/home/sign_img2.png', '/static/img/home/sign_img3.png'],
				['/static/img/home/sign_img1.png', '/static/img/home/sign_img2.png', '/static/img/home/sign_img3.png'],
				['/static/img/home/sign_img1.png', '/static/img/home/sign_img2.png', '/static/img/home/sign_img3.png']
			],
			headerTop: 0,
			opacity: 1,
			home_animation_top: 0,
			show_search_btn: false,
			total_box_margin: false,
			small_header: false,
			small_header_Y: 0,
			content_height: 0,
			temp_content_height: null
		};
	},
	components: {
		swiperDot
	},
	onLoad() {
		// this.help.remove('token')
		if (this.is_empty(this.help.load('token', true))) {
		} else {
			this.$store.dispatch('save', { token: this.help.load('token', true) });
		}

		// #ifdef H5
		this.total_box_margin = true;
		// #endif
	},
	mounted() {
		let view = uni.createSelectorQuery().select('.home_animation');
		view.boundingClientRect(data => {
			// console.log(JSON.stringify(data));
			this.content_height = data.height;
			this.temp_content_height = data.height;
		}).exec();
		this.get_wendu(
			city_id[
				String(this.currentDistrict)
					.replace('市', '')
					.replace('区', '')
			]
		);
	},
	onPageScroll: function(e) {
		// let _headerTop=0
		// let _scrollY=-50
		// _headerTop=e.scrollTop*_scrollY/240;
		// this.headerTop=_headerTop
		// if(this.headerTop<=_scrollY){
		// 	this.headerTop=_scrollY
		// }
		if (e.scrollTop > 100) {
			this.small_header_Y = -50;
		} else {
			this.small_header_Y = 0;
		}

		let _opacity = 1;
		_opacity = 1 - (e.scrollTop * 1) / 550;
		this.opacity = _opacity;
		if (this.opacity <= 0) {
			this.opacity = 0;
			this.home_animation_top = -130;
			this.temp_content_height = this.content_height - 130;
		} else {
			this.home_animation_top = 0;
			this.temp_content_height = this.content_height;
		}
	},
	watch: {
		currentCity: {
			handler(val, oldVal) {
				this.get_wendu(
					city_id[
						String(this.currentDistrict)
							.replace('市', '')
							.replace('区', '')
					]
				);
			},
			deep: true
		}
	},
	computed: {
		...mapState(['is_ios', 'userPoint', 'currentCity', 'currentDistrict', 'token'])
	},
	methods: {
		link_login() {
			uni.navigateTo({
				url: '/pages/auth/login/login',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		open_list(title) {
			uni.navigateTo({
				url: '../goods_list/goods_list?title=' + title,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		link_search() {
			uni.navigateTo({
				url: '../search/search',
				animationType: 'slide-in-bottom',
				animationDuration: 250,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		link_scan() {
			uni.navigateTo({
				url: '../scan/scan',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},

		get_wendu(city_name) {
			uni.request({
				url: 'http://t.weather.sojson.com/api/weather/city/' + city_name,
				type: 'GET',
				success: res => {
					console.log(res.data.data);
					// this.city_id=res.data
					this.wendu = res.data.data.wendu;
				},
				fail: xhr => {
					console.log('http_post_error:' + params.api);
					console.log(xhr);
				}
			});
		},
		jump(i) {
			uni.navigateTo({
				url: '../detail/goodsinfo?itemid=' + i
			});
		},
		changedot(e) {
			this.currentdot = e.detail.current;
		},
		my_fix(title) {
			//console.log(123);
			uni.navigateTo({
				url: '../myfix/myfix?title='+title
			});
		}
	}
};
</script>
<style scoped lang="scss">
@import 'index.scss';
</style>
