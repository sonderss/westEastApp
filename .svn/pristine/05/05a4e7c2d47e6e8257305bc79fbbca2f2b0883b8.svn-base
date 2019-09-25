<template>
	<view></view>
</template>

<script>
	export default {
		data() {
			return {
				barcode:null,
				currentWebview:null
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			var appid = plus.runtime.appid;
			console.log('应用的 appid 为：' + appid);
			this.currentWebview = this.$mp.page.$getAppWebview();
			// this.createBarcode()
			// #endif
			
		},
		onShow: function() {
			// console.log('App Show1111')
			this.createBarcode()
		},
		onHide: function() {
			this.barcode=null
			this.currentWebview=null
			// console.log('App Hide')
		},
		methods: {
			onmarked(type, result) {
				let text = '未知: ';
				switch(type){
					case plus.barcode.QR:
					text = 'QR: ';
					break;
					case plus.barcode.EAN13:
					text = 'EAN13: ';
					break;
					case plus.barcode.EAN8:
					text = 'EAN8: ';
					break;
				}
				console.log( text+result );
				// uni.navigateTo({
				// 	url:result
				// })
				plus.runtime.openWeb(result)
			},
			createBarcode() {
				if(!this.barcode){
					this.barcode = plus.barcode.create('barcode', [plus.barcode.QR], {
						top:'0',
						left:'0px',
						width: '100%',
						height: '100%',
						position: 'static'
					});
					this.barcode.onmarked = this.onmarked;
					this.currentWebview.append(this.barcode);
				}
				this.barcode.start();
			},
		}
	}
</script>

<style>
</style>
