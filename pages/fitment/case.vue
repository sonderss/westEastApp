<template>
	<view>
		<view>
			<image style="width: 100%;" src="/static/img/fitment/case2.png" mode="widthFix" lazy-load alt=""></image>
		</view>
		<view class="ed-hard-text">
			<view class="ed-one">
				<text>{{lists.product.title}}</text>
			</view>
			<view>
				<text v-for="(key,index) in lists.product.details" :key="index">{{key.name}}</text>
			</view>
			<view class="uni-flex" style="height: 160upx;">
				<view class="uni-flex ed-case-tip">
					<image style="width: 120upx; height: auto;" src="/static/img/fitment/1.png" mode="widthFix" lazy-load></image>
					<text>{{lists.product.name}}</text>
				</view>
				<text class="uni-panel-icon uni-icon">&#xe470;</text>
			</view>
			<view class="ed-text-tip">
				{{lists.product.offer}}
			</view>
		</view>
		<view class="ed-explain">
			<view class="ed-e-title">
				方案说明
			</view>
			<view class="ed-content" v-for="(item,index) in lists.explainList" :key="index">
				<view>
					{{item.text}}
				</view>
				<view>
					<image style="width: 100%;" :src="item.img" mode="widthFix" lazy-load></image>
				</view>
			</view>
			<view class="ed-foot">
				<p>{{lists.declare.time}}</p>
				<p>{{lists.declare.state}}</p>
			</view>
			<view class="ed-check-more">
				<p>查看该公司更多案例</p>
			</view>
		</view>
		<view class="ed-consult">
			<view>
				<text style="vertical-align: -webkit-baseline-middle;">免费 <br /> 咨询</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: {
					product: {
						title: '130m²轻奢美式，邂逅美好的浪漫生活',
						name: '居众装饰',
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
						time:'发布于2019年05月11日',
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
	uni-page-body,uni-page-refresh{display:inline-block}
	.uni-panel-icon{margin-left:15px;color:#999;font-size:40upx;font-weight:400;transform:rotate(0);transition-duration:0s;transition-property:transform}
	.uni-icon{font-family:uniicons;font-weight:400}
	page{background-image:linear-gradient(#fff,#eee,#fff)}
	.ed-explain,.ed-hard-text{padding:0 20upx}
	.ed-one{font-size:36upx;height:80upx;line-height:80upx}
	.ed-hard-text view:nth-child(2){font-size:30upx;height:60upx;line-height:60upx;margin-bottom:20upx;color:#6c6c6c}
	.ed-hard-text view:nth-child(3){line-height:120upx;background:#fff;border-radius:10upx;justify-content:space-between;padding:20upx 30upx;height:160upx;margin-bottom:10upx}
	.ed-hard-text view:nth-child(2) text{border-right:1px solid #6c6c6c;padding:0 20upx}
	.ed-hard-text view:nth-child(2) text:first-child{padding-left:0}
	.ed-hard-text view:nth-child(2) text:last-child{border:none}
	.ed-case-tip text{margin-left:50upx;font-size:36upx}
	.ed-text-tip{font-size:26upx;color:#c7c7c7}
	.ed-explain .ed-e-title{height:100upx;line-height:100upx;font-weight:700;font-size:40upx}
	.ed-explain .ed-content{color:#8b8b8b;font-size:32upx;line-height:50upx}
	.ed-explain .ed-content image{padding:25upx 0}
	.ed-foot{text-align:right;font-size:28upx;color:#b7b7b7}
	.ed-check-more{padding:0 60upx;text-align:center;height:100upx;line-height:100upx;color:#d09c9d;margin:50upx 0}
	.ed-check-more p{border-radius:30upx;border:1px solid #d09c9d}
	.ed-consult view{text-align:center;position:fixed;height:160upx;width:160upx;right:50upx;bottom:50%;background:#c17b7d;color:#fff;font-size:35upx;border-radius:50%;border:10upx solid rgba(218,176,177,.6);background-clip:padding-box}

</style>
