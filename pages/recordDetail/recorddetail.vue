<template>
	<view class="content">
		<view class="record_01">
			<view v-for="(value,key,index) in aftersaleDetail" :key="index">
				<text>{{key}}:&nbsp;{{value}}</text>
			</view>
		</view>
		<view class="record_02">
			<text>温馨提示：售后专员可能与您电话沟通，请保持手机畅通。 若有对售后服务有疑问，可联系在线客服。</text>
		</view>
		<view class="record_03">
			<view>问题描述</view>
			<text>拿来看也没看就洗了，发现有些不对劲，吊牌都没有，洗的
时候还有泡沫，细看领口有一处缝补的痕迹，虽然是特价买
的但是还是感觉很不爽</text>
		</view>
		<view class="record_04">
			<view>审核回复</view>
			<text>亲爱的客户，很抱歉您的商品出现这样的问题。请准备好商 品全套（商品、附件、发票原件、包装）按以下地址寄往东 装西购售后部，不支持到付及平邮。如收到商品后情况属实 我们会尽快为您办理。感谢您对的支持。（注：电子发票及 换货发票无需退回）。提示：为避免数据遗失或泄露，请您 提前做好数据备份，东装西购将不承担相应责任。</text>
			<view>
				<view v-for="(value,key,index) in business" :key="index">
					<text>{{key}}:&nbsp;{{value}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				aftersaleDetail:{
					"售后服务":'申请换货',
					'服务单号':198014266,
					'申请时间':'2017-05-01 16:00',
					'售后状态':'审核通过'
				},
				business:{
					'收货地址':'广东省广州市东装西购售后服务部',
					'联系姓名':'东装西购',
					'邮政编码':510000
				}
			}
		},
		onLoad(res) {
			this.axios.GetAfterSaleDetail({id:res.id}).then(res=>{
				console.log(res)
			})
			console.log()
		}
	}
</script>
<style>
	page{
		background: #f2f2f2;
	}
</style>
<style scoped lang="scss">	
	.record_01{
		padding:20upx 0;
		background: #ffffff;
		>view{
			// margin:10upx 0;
			padding: 10upx 0;
			margin-left: 29upx;
			color:#484848;
			font-size:26upx
		}
	}
	.record_02{
		margin-top: 10upx;
		background: #ffffff;
		color:#484848;
		font-size:26upx;
		padding: 30upx 29upx;
		line-height: 40upx;
		box-sizing: border-box;
	}
	.record_03{
		>view{
			font-size:30upx;
			margin-bottom: 10upx;
		}
		margin-top: 10upx;
		background: #ffffff;
		color:#484848;
		font-size:26upx;
		padding: 30upx 29upx;
		line-height: 40upx;
		box-sizing: border-box;
	}
	.record_04{
		>view{
			font-size:30upx;
			margin-bottom: 10upx;
			&:last-child{
				margin-top: 20upx;
				font-size: 26upx;
				line-height: 50upx;
			}
		}
		margin-top: 10upx;
		background: #ffffff;
		color:#484848;
		font-size:26upx;
		padding: 30upx 29upx;
		line-height: 40upx;
		box-sizing: border-box;
		
	}
</style>
