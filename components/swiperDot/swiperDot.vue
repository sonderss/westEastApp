<template>
	<view style="width: 100%;">
		<view class="dot-main">
			<view class="item" style="border-radius: 4px;transition:width 0.2s;"  :class="['dot-item',current==index?'active':'']" v-for="(item,index) in 2" :key="index"></view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:["list","current"],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.dot-main{
		display: flex;
		width:100%;
		justify-content: center;
		align-items: center
	}
	.dot-item{
		background: #d2d2d2;
		width:20upx;
		height: 5upx
	}
	.active{
		background:#fb7e7e;
		width:20upx
	}
</style>
