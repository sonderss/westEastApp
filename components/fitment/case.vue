<template>
	<view>
		<view>
			<image style="width: 100%;" src="/static/img/fitment/case2.png" mode="widthFix" lazy-load alt=""></image>
		</view>
		<view class="ed-hard-text">
			<view class="ed-one">
				<text>{{caseLists.product.title}}</text>
			</view>
			<view class="details">
				<text v-for="(key,index) in caseLists.product.details" :key="index">{{key.name}}</text>
			</view>
			<view v-if="path === '1'" class="uni-flex" style="align-items:center">
					<image style="width: 120upx; width: 120upx;" :src="caseLists.product.img" mode="widthFix" lazy-load></image>
					<text>{{caseLists.product.name}}</text>
				<text class="uni-panel-icon uni-icon">&#xe470;</text>
			</view>
			<view v-else class="uni-flex" style="align-items:center">
					<image style="width: 150upx; height: 150upx;" :src="caseLists.product.img" mode="widthFix" lazy-load></image>
					<view class="uni-flex" style="flex-wrap:wrap;margin-left: 30upx;">
						<text>广州佳宇设计的案例</text>
						<text style="color: #9B9B9B; font-size: 26upx;">设计费用：200-600元/㎡</text>
					</view>
					<text class="follow" @tap="onFollow" :class="[follow === true ? 'click': '']" v-text="follow === true? '已关注': '关注'"></text>
			</view>
			<view class="ed-text-tip">
				{{caseLists.product.offer}}
			</view>
		</view>
		<view class="ed-explain">
			<view class="ed-e-title">
				方案说明
			</view>
			<view class="ed-content" v-for="(item,index) in caseLists.explainList" :key="index">
				<view>
					{{item.text}}
				</view>
				<view>
					<image style="width: 100%;" :src="item.img" mode="widthFix" lazy-load></image>
				</view>
			</view>
		<!-- 	<view class="ed-foot">
				<p>{{caseLists.declare.time}}</p>
				<p>{{caseLists.declare.state}}</p>
			</view> -->
		</view>
		<view class="ed-consult">
			<view>
				<text style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">免费 <br /> 咨询</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['caseLists', 'path'],
		data(){
			return{
				follow: false,
			}
		},
		onLoad(res) {
			console.log(res);
		},
		methods:{
			onFollow(){
				this.follow = !this.follow
				this.$emit('follow', this.follow)
			}
		}
	}
</script>

<style>
	uni-page-body,uni-page-refresh{display:inline-block}
	.uni-panel-icon{margin-left:15px;color:#999;font-size:40upx;font-weight:400;transform:rotate(0);transition-duration:0s;transition-property:transform}
	.uni-icon{font-family:uniicons;font-weight:400}
	page{background-image:linear-gradient(#fff,#eee,#fff)}
	.ed-explain,.ed-hard-text{padding:0 20upx}
	.ed-one{font-size:36upx;height:90upx;line-height:110upx}
	.ed-hard-text view:nth-child(2){font-size:30upx;color:#6c6c6c}
	.ed-hard-text view:nth-child(3){background:#fff;border-radius:10upx;justify-content:space-between;padding:20upx 30upx;height:160upx; line-height: 50upx; margin-bottom:10upx}
	.ed-hard-text .details{height: 60upx;}
	.ed-hard-text .details:nth-child(2) text{border-right:1px solid #6c6c6c;padding:0 20upx}
	.ed-hard-text view:nth-child(2) text:first-child{padding-left:0}
	.ed-hard-text view:nth-child(2) text:last-child{border:none}
	.ed-hard-text .follow{font-size: 26upx;width: 200upx;border: 1px solid #C17B7D; color: #C17B7D;height: 60upx;line-height: 60upx;text-align: center;border-radius: 10upx;}
	.ed-hard-text .follow.click{background: #C17B7D; color: #fff;}
	.ed-case-tip text{margin-left:50upx;font-size:36upx;align-items:center}
	.ed-text-tip{font-size:26upx;color:#c7c7c7}
	.ed-explain .ed-e-title{height:100upx;line-height:100upx;font-weight:700;font-size:40upx}
	.ed-explain .ed-content{color:#8b8b8b;font-size:32upx;line-height:50upx}
	.ed-explain .ed-content image{padding:25upx 0}
	.ed-foot{text-align:right;font-size:28upx;color:#b7b7b7}
	.ed-check-more{padding:0 60upx;text-align:center;height:100upx;line-height:100upx;color:#d09c9d;margin:50upx 0}
	.ed-check-more p{border-radius:30upx;border:1px solid #d09c9d}
	.ed-consult view{text-align:center;position:fixed;height:120upx;width:120upx;right:50upx;bottom:5%;background:#c17b7d;color:#fff;font-size:24upx;border-radius:50%;border:10upx solid rgba(218,176,177,.6);background-clip:padding-box}

</style>
