<template>
	<view class="span_list_fitment">
		<view class="item" v-for="item in list" :key="item.title">
			<text class="tip">{{item.title}}</text>
			<scroll-view class="show_scroll" :scroll-x="true" show-scrollbar="false">
				<view v-for="x in item.list" :key="x" @tap="previewimg(item.list)">
					<image :src="x"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			previewimg(res){
				uni.previewImage({
				urls: res,
				current : 0,
				indicator: "number",
				success() {
					
				},
				fail() {
					
				}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.tip{
		display: block;
		font-size: 30upx;
		color:#292929;
		margin: 40upx 0 30upx 25upx;
	}
	.span_list_fitment{
		width: 100%;
	}
	.show_scroll{
		 white-space: nowrap;
		 view{
			 width: 220upx;
			 height: 152upx;
			 margin:0 22upx;
			 display:inline-block;
			 position:relative;
			 image{
				 width: 100%;
				 height: 148upx;
			 }
		 }
	}
	.item{
		border-bottom:7upx solid #EEEEEE;
		padding:0 22upx 30upx 22upx;
	}
</style>
