<template>
	<view class="ed-tab-list">
		<text v-for="(item, index) in tabList" :key="index" @tap="onTab(index, item.id)" :class="[index === isActive ?'active':'' ]">{{item.name}}</text>
	</view>
</template>

<script>
	export default {
		props: ['tabList', 'isActive'],
		methods: {
			onTab(index, id) {
				const arr = {
					index: index,
					id: id
				}
				this.$emit('edOnTab', arr);
			},
		},
	}
</script>


<style scoped>
	.ed-tab-list {
		height: 80upx;
		line-height: 80upx
	}

	.ed-tab-list text {
		font-size: 32upx;
		padding: 0 20upx
	}

	.active {
		font-weight: 700
	}
</style>
