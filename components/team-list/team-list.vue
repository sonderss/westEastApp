<template>
	<view class="content">
		<block v-for='x in 10' :key="x">
			<view class="items" v-for="(item,index) in list" :key="index">
				<view class="item_left">
					<image style="width: 85upx;height: 85upx;" :src="item.img"></image>
					<text>{{item.name}}</text>
				</view>
				<view>
					{{item.data}}&nbsp;&nbsp;{{item.time}}
				</view>
			</view>
		</block>	
	</view>
</template>

<script>
	export default{
		props:["list"],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		padding: 20upx 33upx;
	}
	.items{
		display:flex;
		justify-content:space-between;
		align-items:center;
		font-size: 26upx;
		padding: 16upx 0;
	}
	.item_left{
		display:flex;
		justify-content:flex-start;
		align-items:center;
		text{
			font-size: 26upx;
			text-indent: 23upx;
		}
	}
</style>
