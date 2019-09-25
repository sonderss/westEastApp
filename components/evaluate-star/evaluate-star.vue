<template>
	<view>
		<view class="stars uni-flex">
			<image v-for="(item,i) in starArrs" :key="i" @click="onRate(i,index)" :src="item"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'evaluateStar',
		props: {
			score:{type: [Number, String], default: '0'},
			index:{type: [Number, String], default: '0'}
		},
		data() {
			return {
				scores:0,
			}
		},
		computed:{
			starArrs(){
				let starArr=[]; 
				//全星星的个数
				let onstar = parseInt(this.scores);
				//有多少个灰色的星星
				for (var i=0;i<onstar;i++) {
				  starArr.push('/static/img/myorder/redStars.png')         
				}
				while(starArr.length < 5){
				  starArr.push('/static/img/myorder/stars.png') 
				}
				return starArr;				
			}
		},
		onLoad() {
			this.scores = this.score;
		},
		methods: {
			onRate:function(i,index){
				uni.hideKeyboard();
				this.scores = i+1;
				this.$emit('starNum',{i,index});
			}
		}
	}
</script>

<style>
	.stars{align-items:center;}
	.stars image{width:30upx;height:28upx;margin-left:35upx;}
</style>
