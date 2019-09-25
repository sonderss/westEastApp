<template class="template">
	<view class="cont">
		<view v-for="(item,i) in list" :key="i" class="item">
			<view class="shopName text-overflow_1-xzh"><text>{{item.shop_name}}</text></view>
			<view class="shopInfo uni-flex">
				<view class="shopInfo-img"><image lazy-load :src="item.img" mode="widthFix" class="is-response"></image></view>
				<view class="shopInfo-introduce uni-flex uni-column">
					<view class="detail">
						<view ><text class="text-overflow_2-xzh">{{item.title}}</text></view>
						<text v-for="(item2,j) in item.parameter" :key="j" class="detailColor">{{item2}}</text>
					</view>
					<view class="detail details">
						<view><text>￥{{item.price}}</text></view>
						<view><text>✖{{item.good_num}}</text></view>
					</view>		
					<view class="num_price"><text class="real_num">共{{item.good_num}}件  </text><text class="real_price">实付：￥{{item.real_paice}}</text></view>
				</view>
			</view>
			<view class="xian"></view>
			<view class="state_btn">
				<view :class="'state'+item.state">{{item.tips_txt}}</view>
				<view class="btn_list">
					<view class="btn" v-for="(item3,k) in item.btn_list" :key="k" @tap="link(item3)">{{item3}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pages:{
					address: "../address/address",
				},
				list:[
					{
						"shop_name":"店铺1",
						"img":"/static/img/list_img1.jpg",
						"goods_id":"1",
						"good_num":1,
						"name":"现代简约双人床",
						"title":"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
						"price":715,
						"real_paice":725,
						"parameter":{
							"颜色":"红色",
							"尺寸":"1.8米"
						},
						state:"1",
						"tips_txt":"退款成功",
						"btn_list":["查看详情"]
					},
					{
						"shop_name":"店铺2",
						"img":"/static/img/list_img2.jpg",
						"goods_id":"1",
						"good_num":2,
						"name":"现代简约双人床",
						"title":"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
						"price":715,
						"real_paice":725,
						"parameter":{
							"颜色":"红色",
							"尺寸":"1.8米"
						},
						state:"3",
						"tips_txt":"拒绝退货",
						"btn_list":["投诉","申请售后","查看详情"]
					},
					{
						"shop_name":"店铺2",
						"img":"/static/img/list_img2.jpg",
						"goods_id":"1",
						"good_num":2,
						"name":"现代简约双人床",
						"title":"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",
						"price":715,
						"real_paice":725,
						"parameter":{
							"颜色":"红色",
							"尺寸":"1.8米"
						},
						state:"2",
						"tips_txt":"待处理",
						"btn_list":["查看详情"]
					}
				]
			}
		},
		onLoad(){
			
			
		},
		methods:{
			link(evt){
				switch(evt){
					case '投诉':{
						console.log('1')
						break;
					}
					case '申请售后':{
						console.log('2')
						break;
					}
					case '查看详情':{
						uni.navigateTo({url:'/pages/myorder/refundDetail?orderId=3'});
						break;
					}
				}
				// uni.navigateTo({url:this.pages[uri]});
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
	@import './after_sale_list.scss'
</style>
