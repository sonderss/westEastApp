<template>
	<view class="content">
		<view class="invoiceBox">
			<view class="invoiceType">
				<view class="title"><text>发票类型</text></view>
				<view class="internet uni-flex">
					<block v-for="(item,index) in invoiceType" :key="index">
						<text :class="[currentTab==index ? 'curr' : '']" @click="check(index)">{{item.txt}}</text>
					</block>
				</view>
			</view>
			<view class="invoiceInfo" v-if="isinvoice">
				<view class="invoiceType invoiceInfoBox">
					<view class="title"><text>发票信息</text></view>
					<view class="invoiceCategory">
						<block v-for="(item,index) in invoiceCategory" :key="index">
							<radio-group @change="radioChange"><label class="radio"><radio :value="item.type" :checked="index === current" style="transform:scale(0.7)" color="#C17B7D" />{{item.txt}}</label></radio-group>
						</block>					
					</view>
					<view class="infoInput">
						<view class="info uni-flex">
							<text>发票抬头</text>
							<input type="text" v-model.trim="rise" placeholder="请输入抬头名称" />
						</view>
						<view class="info uni-flex">
							<text>手机号码</text>
							<input type="number" v-model.trim="phone" placeholder="请输入手机号码" />
						</view>
						<view class="info uni-flex" v-if="InvoiceInformation">
							<text>识别号</text>
							<input type="text" v-model.trim="identification" placeholder="请输入纳税人识别号或统一社会信用代码" />
						</view>
						<view class="info uni-flex">
							<text>邮箱</text>
							<input type="text" v-model.trim="mail" placeholder="用于接收电子发票" />
						</view>
					</view>
				</view>
				<view class="InvoiceCapacity">
					<view class="capacity uni-flex">
						<text>发票内容</text>
						<view class="tip uni-flex" @click="tip"><image src="/static/img/invoice/tipIcon.png"></image></view>
						<view class="detailed uni-flex" @click="billType">
							<text>{{billTypx}}</text>
							<image class="more" src="/static/img/goods/more.png"></image>
						</view>
					</view>
					<!-- <view class="orderUserInfo uni-flex">
						<image src="/static/img/invoice/orderAdd.png"></image>
						<view class="userInfo uni-flex uni-column">
							<view class="userInfo-name">张三 <text>13000004569</text></view>
							<text class="add">广东省广州市番禺区天安科技园</text>
						</view>
					</view> -->
				</view>
				<view class="invoiceSure"><text class="sure" :class="[exitsVal ? '':'placing']" >确定</text></view>
			</view>
			<view class="noinvoice" v-else>
				<text class="sure" @click="sure">确定</text>
			</view>
			<!-- 发票弹出层 -->
			<uni-popup ref="popup" type="bottom" :custom="false" :radius="true">
				<view class="bill-type" v-if="contentInfo">
					<view class="uni-flex" @click="shopDetail"><text>商品明细</text></view>
					<view class="uni-flex" @click="shopType"><text>商品类别</text></view>
					<view class="cancel uni-flex" @click="cancel"><text>取 消</text></view>
				</view>
				<view class="bill-content" v-if="!contentInfo">
					<view class="tipClose uni-flex" @click="cancel"><image src="/static/img/invoice/tipClose.png"></image></view>
					<view class="tipContent">
						<text>发票内容可以选择明细则发票内容为商品名选择商品类别则发票内容展示为商品类别，如：材料</text>
						<text>开票金额为实际支付金额</text>
						<text>如已开具发票，发生退款时，需要扣除税款</text>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				isinvoice:false,
				invoiceType:[{"txt":"电子发票","type":"1"},{"txt":"不开发票","type":"2"}],
				invoiceCategory:[{"txt":"个人","type":"1"},{"txt":"公司","type":"2"}],
				currentTab:1,
				current:0,
				rise:'',
				phone:'',
				identification:'',
				mail:'',
				InvoiceInformation:false,
				billTypx:'商品明细',
				contentInfo:false,
				buyGoods:'',//提交订单标识
			}
		},
		computed:{
		    exitsVal:function(){
				return Boolean(this.rise) && Boolean(this.phone) && Boolean(this.identification) && Boolean(this.mail);
		    }
		},
		onLoad(option) {
			this.buyGoods  = option.buyGoods
		},
		methods: {
			check:function(current){
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.isinvoice = !this.isinvoice;
				}
			},
			radioChange:function(evt){
				for (let i = 0; i < this.invoiceCategory.length; i++) {
					if (this.invoiceCategory[i].type === evt.target.value) {
						this.current = i;
						this.InvoiceInformation = !this.InvoiceInformation;
						break;
					}
				}
			},
			billType:function(){
				this.contentInfo = true;
				this.$refs.popup.open();
			},
			shopDetail:function(){
				this.billTypx = "商品明细";
				this.cancel();
			},
			shopType:function(){
				this.billTypx = "商品种类";
				this.cancel();
			},
			cancel:function(){
				this.$refs.popup.close();
			},
			tip:function(){
				this.contentInfo = false;
				this.$refs.popup.open();
			},
			sure:function(){
			console.log(this.currentTab ) 
					//提交订单的场景
					var  isbi = null
					if(this.currentTab === 0){
						isbi = true
					}else{
							isbi = ''
					}
				if(this.buyGoods === '0'){
					let pages = getCurrentPages();
					let nowPage = pages[ pages.length - 1]; 
					let prevPage = pages[ pages.length - 2 ];  
					prevPage.$vm.isbill = isbi;   	
					uni.navigateBack({  
						delta: 1
					});
					return;
				}
					uni.navigateBack();
			},
			uniToast:function(title){
				uni.showToast({
					title: title,
					icon:'none',
					duration: 1000
				});
			}
		}
	}
</script>

<style>
	/* uni-page-body{background:#f1f1f1;width:100%;height:100%;} */
	.content,.invoiceBox{width:100%;}
	.invoiceBox{border-top:4upx solid #f1f1f1;}
	.invoiceType{height:197upx;background:#fff;padding:0 46upx 0 28upx;}
	.invoiceType .title,.capacity text{font-size:26upx;color:#4e4e4e;padding:38upx 0;}
	.internet{width:100%;align-items: center;justify-content: space-between;}
	.internet text{color:#4e4e4e;font-size:24upx;width:294upx;height:54upx;text-align:center;line-height:54upx;border:1px solid #4e4e4e;border-radius:5upx;}
	.internet text.curr{color:#C17B7D;border:1px solid #C17B7D;}
	.noinvoice{padding:0 13upx;margin-top:56upx;}
	.sure{width:100%;height:74upx;line-height:74upx;color:#fff;font-size:28upx;text-align:center;background:#C17B7D;display:block;border-radius:37upx;}
	.invoiceCategory label{font-size:24upx;color:#4e4e4e;display:table;}
	radio-group{display:inline-block;margin-right:165upx;}
	radio-group:last-child{margin-right:0;}
	.infoInput{padding-bottom:20upx;}
	.infoInput .info{margin-top:20upx;align-items:center;font-size:24upx;color:#4e4e4e;height:64upx;}
	.infoInput .info text{width:142upx;height:64upx;line-height:64upx;display:inline-block;}
	.infoInput .info input{flex:1;font-size:24upx;color:#4e4e4e;height:64upx;line-height:64upx;}
	.invoiceInfoBox{height:auto;border-top:9upx solid #f1f1f1;border-bottom:9upx solid #f1f1f1;}
	.InvoiceCapacity{padding:0 13upx 0 28upx;}
	.capacity{width:100%;align-items:center;}
	.tip{padding:20upx;}
	.tip image{width:25upx;height:25upx;}
	.detailed{flex:1;align-items:center;}
	.detailed text{flex:1;text-align:right;margin-right:15upx;}
	.detailed .more{width:14upx;height:27upx;}
	.orderUserInfo{padding-left:7upx;}
	.orderUserInfo image{width:57upx;height:59upx;margin-right:28upx;}
	.userInfo{flex:1;}
	.userInfo .userInfo-name,.userInfo .add{color:#4e4e4e;font-size:24upx;}
	.userInfo .add{font-size:22upx;margin-top:5upx;}
	.userInfo .userInfo-name text{color:#b2b2b2;font-size:20upx;}
	.invoiceSure{padding:0 24upx;margin-top:70upx;}
	.placing{background:#b5b5b5;}
	.bill-type{width:100%;height:auto;padding:4upx 0;}
	.bill-type view{height:140upx;width:100%;border-bottom:1px solid #e1e1e1;align-items:center;justify-content: center;color:#4e4e4e;font-size:30upx;}
	.bill-type view:last-child{border-bottom:0;}
	.bill-type view.cancel{color:#C17B7D;font-size:36upx;}
	.bill-content{padding:0 28upx;height:auto;padding-bottom:84upx;}
	.tipClose{width:100%;padding:25upx 0;align-items:center;justify-content: flex-end;}
	.tipClose image{width:33upx;height:33upx;}
	.tipContent{width:100%;color:#4e4e4e;font-size:24upx;line-height:40upx;}
	.tipContent text{margin-top:84upx;display:block;}
	.tipContent text:first-child{margin-top:59upx;}
</style>
