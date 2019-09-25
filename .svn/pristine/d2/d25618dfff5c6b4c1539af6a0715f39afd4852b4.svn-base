<template>
	<view style="width: 100%;">
		<view class="dot-main">
			<view style="border-radius: 4px;transition:width 0.2s;" :class="['dot-item',current==index?'active':'']" v-for="(item,index) in list" :key="index"></view>
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

<style>
	.dot-main{
		display: flex;
		width:100%;
		justify-content: center;
		align-items: center
	}
	.dot-item{
		background: #d2d2d2;
		width:9upx;
		height: 4upx;
		margin: 0 6upx;
	}
	.active{
		background:#ff0000;
		width:16upx
	}
</style>
