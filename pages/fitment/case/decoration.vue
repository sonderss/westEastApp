<template>
	<view>
		<view>
			<dec-model :caseLists="caseLists" :path="pathTypes"></dec-model>
			<view class="ed-foot">
				<p>{{caseLists.declare.time}}</p>
				<p>{{caseLists.declare.state}}</p>
			</view>
		</view>
		<view class="ed-check-more">
			<p>查看该公司更多案例</p>
		</view>
	</view>
	
</template>

<script>
	import decModel from '../../../components/fitment/case.vue'
	export default {
		components: {
			decModel
		},
		onLoad(res) {
			this.pathTypes = res.path
		},
		data() {
			return {
				pathTypes: null,
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
				}
			}
		},
	}
</script>

<style>
	
	.ed-check-more {
		padding: 0 60upx;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		color: #d09c9d;
		margin: 50upx 0
	}

	.ed-check-more p {
		border-radius: 30upx;
		border: 1px solid #d09c9d
	}
	.ed-foot{text-align:right;font-size:28upx;color:#b7b7b7;padding:0 20upx}

	
</style>
