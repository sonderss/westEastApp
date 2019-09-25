<template>
	<view class="content">
		<view class="detailContent" v-if="detail">
			 <scroll-view class='scroll-view-left' scroll-y='true' :style="{'height':scrollHeight+'px'}">
				<view class="detailBox">
					<view class="detail-user uni-flex">
						<image src="/static/img/comment/comment-header.png"></image>
						<view class="detail-user-info uni-flex uni-column">
							<text>张三</text>
							<text>2019-12-12</text>
						</view>
					</view>
					<view class="detail-content"><text>根据需求定做的柜子和榻榻米，最大限度利用了空间，9平米的房间做出了超大空间感。必须好评! </text></view>
					<view class="detail-img-list">
						<image lazy-load src="/static/img/comment/comment-img.jpg" mode="widthFix" class="is-response"></image>
						<image lazy-load src="/static/img/comment/comment-img.jpg" mode="widthFix" class="is-response"></image>
						<image lazy-load src="/static/img/comment/comment-img.jpg" mode="widthFix" class="is-response"></image>
					</view>
					<view class="detail-shop uni-flex">
						<image lazy-load src="/static/img/comment/comment-img.jpg" mode="widthFix" class="is-response"></image>
						<view class="detail-shop-content">
							<view class="uni-flex uni-column">
								<text>床 现代简约双人床 实木北欧小户型榻榻米床1.8米</text>
								<text class="money">￥799.00</text>
							</view>
						</view>
					</view>
				</view>
				<view class="detail-comment">
					<view class="title"><text>全部评论</text></view>
					<view class="detail-comment-content">
						<view class="detail-user uni-flex">
							<image src="/static/img/comment/comment-header.png"></image>
							<view class="detail-user-info uni-flex uni-column content-user-info">
								<text>张三</text>
								<text>2019-12-12</text>
							</view>
							<view class="zan uni-flex">
								<image src="/static/img/comment/dian.png"></image>
								<text>点赞</text>
							</view>
						</view>
						<view class="commentWarp">
							<view class="commentWarpOne uni-flex"><text>质量怎么样，颜色有色差吗？</text><text>回复</text></view>
							<view class="commentWarpTwo">
								<view class="other uni-flex">
									<image src="/static/img/comment/comment-small.png"></image>
									<view class="otherRight uni-flex uni-column">
										<text>李四</text>
										<text>2019-12-12</text>
									</view>
								</view>
								<view class="commentWarpOne uni-flex other-content"><text>质量挺好的，不错，没有色差</text><text>回复</text></view>
							</view>
							<view class="commentWarpTwo">
								<view class="other uni-flex">
									<image src="/static/img/comment/comment-small.png"></image>
									<view class="otherRight uni-flex uni-column">
										<text>张三</text>
										<text>2019-12-12</text>
									</view>
								</view>
								<view class="commentWarpOne uni-flex other-content"><text>回复李四：质量挺好的，不错，没有色差</text><text>回复</text></view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="mask uni-flex" id="masks">
				<view class="left uni-flex">
					<image src="/static/img/comment/lun.png"></image>
					<text>评论</text>
				</view>
				<view class="division"></view>
				<view class="left uni-flex">
					<image v-if="!commemtDetail.isZan" class="fabulous" src="/static/img/comment/fabulous.png"></image>
					<image v-else class="fabulous" src="/static/img/comment/yifabulous.png"></image>
					<text :class="commemtDetail.isZan?'crr':''">点赞</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:false,
				itemid:'',
				scrollHeight:0,
				commemtDetail:{
					isZan:true,
				}
			}
		},
		onReady() {
			let that = this;
			setTimeout(function() {
			  that.calculateScrollViewHeight()
			}, 100)
		},
		onLoad(e) {
			if(e.itemid){
				this.itemid = e.itemid;
				this.detail = true;
			}else{
				uni.navigateBack();
			}
		},
		methods: {
			calculateScrollViewHeight:function(){
				let that = this;
				//console.log(systemInfo)
				let query = uni.createSelectorQuery().in(this)
				//根据节点id查询节点部分的高度（px单位）
				query.select('#masks').boundingClientRect();
				query.exec((res) => {
					let masksHeight = res[0].height;
					//console.log(masksHeight);
					// 然后窗口高度（uni.getSystemInfoSync().windowHeight）减去其他不滑动界面的高度
					let scrollViewHeight = uni.getSystemInfoSync().windowHeight - masksHeight;
				    //console.log(scrollViewHeight)
					this.scrollHeight = scrollViewHeight;
				})
			}
		}
	}
</script>

<style scoped>
	image{display:block;}
	.content{width:100%;background:#fff;}
	.detailContent,.detail-comment{width:100%;}
	.detailBox{padding:29upx 29upx 0;margin-bottom:80upx;}
	.detail-user{width:100%;align-items:center;}
	.detail-user image{width:61upx;height:61upx;border-radius:50%;overflow:hidden;}
	.detail-user-info,.otherRight{font-size:22upx;color:#525252;margin-left:12upx;}
	.detail-user-info text:last-child,.otherRight text:last-child{color:#7a7a7a;}
	.detail-content{font-size:22upx;color:#000;margin-top:20upx;line-height:36upx;}
	.detail-img-list{width:100%;margin-top:15upx;}
	.detail-img-list image{margin-bottom:40upx;}
	.is-response{width:100%;height:auto;max-width:100%;display:block;}
	.detail-shop{width:100%;background:#f1f1f1;border-radius:10upx;overflow:hidden;}
	.detail-shop image{width:198upx;height:auto;border-radius:10upx;}
	.detail-shop-content{flex:1;margin:30upx 0 18upx 22upx;}
	.detail-shop-content view{font-size:24upx;color:#333;justify-content:space-between;height:100%;margin-right:30upx;}
	.detail-shop-content view text.money{color:#f00;}
	.detail-comment .title{padding:30upx 20upx;border-bottom:1px solid #ececec;font-size:26upx;color:#3d3d3d;}
	.detail-comment-content{padding:28upx 29upx;border-bottom:4px solid #f1f1f1;}
	.detail-comment-content:last-child{border-bottom:0;}
	.content-user-info{flex:1;}
	.zan{align-items:center;}
	.zan image{width:16upx;height:18upx;margin-right:12upx;}
	.zan text{font-size:20upx;color:#7a7a7a;}
	.commentWarp{margin:15upx 0 0 73upx;}
	.commentWarpOne{font-size:24upx;color:#000;}
	.commentWarpOne text:first-child{flex:1;}
	.commentWarpTwo,.other{width:100%;}
	.other{align-content:center;margin:15upx 0;}
	.other image{width:45upx;height:45upx;border-radius:50%;overflow:hidden;}
	.other-content{margin-left:57upx;}
	.mask{position:fixed;width:100%;height:108upx;left:0;bottom:0;border-top:1px solid #d9d9d9;background:#fff;align-items:center;}
	.mask .left{align-items:center;width:49%;justify-content:center;}
	.mask .left image{width:37upx;height:34upx;margin-right:12upx;}
	.fabulous{width:30upx;height:32upx;}
	.mask .left text{color:#3d3d3d;font-size:30upx;}
	.mask .left text.crr{color:#f00;}
	.division{width:3px;background:#ececec;height:100%;}
</style>
