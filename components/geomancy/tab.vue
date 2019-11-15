<template>
	<view class="ed-tab-list">
		<text v-for="(item, index) in tabList" :key="index" @tap="onTab(index)" :class="[index === isActive ?'active':'' ]">{{item.name}}</text>
	</view>
</template>

<script>
	export default{
		props:['tabList', 'isActive'],
		methods:{
			onTab:function(index){
				this.$emit('edOnTab', index);
			},
		}
	}
</script>


<style scoped>
	.ed-tab-list{height:80upx;line-height:80upx}
	.ed-tab-list text{font-size:32upx;padding:0 20upx}
	.active{font-weight:700}
</style>
