<template>
	<view>
		<view>
			<case-model :caseLists="caseLists" @follow="follow"></case-model>
		</view>
		<view class="ed-check-more" @tap="stylist">
			<view class="uni-flex" style="margin-top: 50upx;">
				<image style="height: 150upx; width: 150upx;" lazy-load mode="widthFix" src="/static/img/fitment/1.png"></image>
			</view>
			<view class="uni-flex">
				<text>{{caseLists.designTeam.name}}</text>
			</view>
			<view class="uni-flex">
				<text>{{caseLists.designTeam.money}}</text>
			</view>
			<view class="uni-flex but">
				<view>查看主页</view>
				<view>在线预约</view>
			</view>
		</view>
		<view class="ed-icon uni-flex">
			<view class="uni-flex">
				<image @tap="isIcon('stars')" mode="widthFix" :src="edIcon? '/static/img/fitment/xingxing.png' : '/static/img/fitment/xingxing1.png'"></image>
				<text>15</text>
			</view>
			<view class="uni-flex">
				<image @tap="isIcon('zan')" mode="widthFix" :src="edIcon2? '/static/img/fitment/zans.png' : '/static/img/fitment/zank.png'"></image>
				<text>15</text>
			</view>
		</view>
	</view>

</template>

<script>
	import caseModel from '../../../components/fitment/case.vue'
	export default {
		components: {
			caseModel,
		},
		data() {
			return {
				edIcon: true,
				edIcon2: true,
				caseLists: {
					product: {
						title: '130m²轻奢美式，邂逅美好的浪漫生活',
						name: '居众装饰',
						img: '/static/img/fitment/1.png',
						offer: '本案例为服务的装修公司提供',
						details: [{
								name: '130m²'
							},
							{
								name: '二居'
							},
							{
								name: '现代简约'
							},
						]
					},
					declare: {
						time: '发布于2019年05月11日',
						state: '声明：上述内容由装修公司自行上传'
					},
					explainList: [{
							text: '整体空间以高雅内敛的灰色调为主，用沉着的静谧蓝与活跃的橘色作为点缀，给空间带来灵动的气息却不过分抢眼。柔软的沙发、清新的绿植，天然的石材更添加了空间中的舒适感与品质感。',
							img: '/static/img/fitment/case4.png',
						},
						{
							text: '拥有挑高布局与朗阔院景的客厅空间，采用简单纯粹的线条勾勒空间比例，并赋予材料新的意义地坪石材切割重组，相近石材的碰撞，电视背景型塑如同泼墨画般的视觉效果。金属的天花线条扶手、墙布与石材、以现代手法与语汇、以及细腻的细部介入空间，赋予风格鲜明的时代感。',
							img: '/static/img/fitment/case3.png',
						},
						{
							text: '拥有挑高布局与朗阔院景的客厅空间，采用简单纯粹的线条勾勒空间比例，并赋予材料新的意义地坪石材切割重组，相近石材的碰撞，电视背景型塑如同泼墨画般的视觉效果。金属的天花线条扶手、墙布与石材、以现代手法与语汇、以及细腻的细部介入空间，赋予风格鲜明的时代感。',
							img: '/static/img/fitment/case5.png',
						},
					],
					designTeam:{
						name: '广州佳宇设计',
						money: '设计费用：200-600元/m'
					}
				}
			}
		},
		methods:{
			isIcon(type){
				if(type === 'stars'){
					this.edIcon = !this.edIcon
				}else{
					this.edIcon2 = !this.edIcon2
				}
			},
			follow(e){ // 关注按钮
				console.log(e); 
			},
			stylist(){
				uni.navigateTo({
					url: '/pages/fitment/case/offceCase'
				})
			}
		}
	}
</script>

<style>
	.ed-check-more{margin:0 20upx;text-align:center;height:500upx;line-height:100upx;border:1px solid #d09c9d;border-radius:30upx}
	.ed-check-more view:first-child,.ed-check-more view:nth-child(2){justify-content:center;font-size:36upx}
	.ed-check-more view:nth-child(3){font-size:26upx;justify-content:center;color:#9b9b9b;line-height:14upx}
	.ed-check-more view:nth-child(4){justify-content:center;color:#d09c9d}
	.ed-foot{text-align:right;font-size:28upx;color:#b7b7b7;padding:0 20upx}
	.but{margin-top:30upx;}
	.but view:first-child{margin-right:60upx}
	.but view{height:80upx;line-height:80upx;padding:0 40upx;border-radius:10upx;border:1px solid #d09c9d}
	.but view:last-child{color:#fff;background:#c17b7d}
	.ed-icon{padding:50upx 20upx;float:right}
	.ed-icon view{font-size:26upx;line-height:50upx;margin-right:40upx;color:#666}
	.ed-icon image{width:50upx;height:50upx;margin-right:10upx}
</style>
