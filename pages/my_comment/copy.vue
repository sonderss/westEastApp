<template class="template">
	<view class="cont">
		<view v-for="(item,i) in list" :key="i" class="item">
			<view class="ed-date"><text>{{item.date}}</text></view>
			<view class="shopName text-overflow_1-xzh"><text>{{item.shop_name}}</text></view>
			<view class="state_btn">
				<view class="uni-flex ed-content-img">
					<image v-for="(imgList,index) in item.img_list" :key="index" lazy-load :src="imgList" mode="widthFix" class="is-response"></image>
				</view>
				<view class="btn_list">
					<view class="btn" v-for="(item3,k) in item.btn_list" :key="k">{{item3}}</view>
				</view>
			</view>
			<view class="xian"></view>
			<view class="shopInfo uni-flex">
				<view class="shopInfo-img">
					<image lazy-load :src="item.img" mode="widthFix" class="is-response"></image>
				</view>
				<view class="shopInfo-introduce uni-flex uni-column">
					<view class="detail">
						<view><text class="text-overflow_2-xzh">{{item.title}}</text></view>
						<text v-for="(item2,j) in item.parameter" :key="j" class="detailColor">{{item2}}</text>
						<view><text class="detailColor">订单编号:{{item.odd_number}}</text></view>
					</view>
					<view class="detail details">
						<view><text>￥{{item.price}}</text></view>
						<view><text>✖{{item.good_num}}</text></view>
					</view>
					<view class="num_price"><text class="real_num">共{{item.good_num}}件 </text><text class="real_price">实付：￥{{item.real_paice}}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pages: {
					address: "../address/address",
				},
				list: [{
						"date": "2019-9-27",
						"shop_name": "不错!挺好的!很苏胡",
						"img": "/static/img/comment/comment-img.jpg",
						"img_list": [
							"/static/img/comment/comment-img.jpg",
							"/static/img/comment/comment-img.jpg"
						],
						"goods_id": "1",
						"good_num": 1,
						"name": "现代简约双人床",
						"title": "床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
						"price": 715,
						"real_paice": 725,
						"parameter": {
							"颜色": "红色",
							"尺寸": "1.8米"
						},
						odd_number: "521514698416548",
						state: "1",
						"tips_txt": "退款成功",
						"btn_list": ["质量好", "服务好"]
					},
					{
						"date": "2019-9-27",
						"shop_name": "不错!挺好的!很苏胡",
						"img": "/static/img/comment/comment-img.jpg",
						"img_list": [
							"/static/img/comment/comment-img.jpg",
							"/static/img/comment/comment-img.jpg",
							"/static/img/comment/comment-img.jpg"
						],
						"goods_id": "1",
						"good_num": 2,
						"name": "现代简约双人床",
						"title": "床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
						"price": 715,
						"real_paice": 725,
						"parameter": {
							"颜色": "红色",
							"尺寸": "1.8米"
						},
						odd_number: "521514698416548",
						state: "3",
						"tips_txt": "拒绝退货",
						"btn_list": ["服务好"]
					},
					{
						"date": "2019-9-27",
						"shop_name": "不错!挺好的!很苏胡",
						"img": "/static/img/comment/comment-img.jpg",
						"img_list": [
							"/static/img/comment/comment-img.jpg"
						],
						"goods_id": "1",
						"good_num": 2,
						"name": "现代简约双人床",
						"title": "床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
						"price": 715,
						"real_paice": 725,
						"parameter": {
							"颜色": "红色",
							"尺寸": "1.8米"
						},
						odd_number: "521514698416548",
						state: "2",
						"tips_txt": "待处理",
						"btn_list": ["质量好"]
					}
				]
			}
		},
		onLoad() {


		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	@import './my_comment.scss'
</style>
