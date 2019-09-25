<template>
	<view class="">
		<view class="list_box">
			<view class="list" v-for="(item,i) in list" :key="i" @tap="link_goods_detail(item.goods_id)">
				<view class="img" :style="{'background':'url('+item.url+') center center/cover no-repeat'}"></view>
				<view class="title">{{item.title}}</view>
				<view class="parameter" >
					<view style="display: flex;align-items: center;">
						<text class="price">￥{{item.price}}</text>
						<text class="buy_num">{{item.buy_num}}人付款</text>
					</view>
					<view style="display: flex;align-items: center;">
						<text class="address">{{item.address}}</text>
						<text class="from">{{item.from}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data (){
			return{
				
			}
		},
		props: {
			list:{
				default(){
					return []
				}
			}
		},
		created(){
			
		},
		methods:{
			link_goods_detail(id){
				uni.navigateTo({
					url: '/pages/detail/goodsinfo?itemid='+id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './goods-list.scss'
</style>
