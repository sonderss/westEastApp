<template>
    <view>
		
    </view>
</template>
<script>
    export default {
        data() {
            return {
                title: 'request-payment',
                loading: false,
                // price: 1,
                providerList: []
            }
        },
		props:{
			price:{
				type: Number,
				default(){
					return 0
				}
			}
		},
		created: function(){
			console.log('获取')
			// #ifdef APP-PLUS
			uni.getProvider({
			    service: "payment",
			    success: (e) => {
			        console.log("payment success:" + JSON.stringify(e));
			        let providerList = [];
			        e.provider.map((value) => {
			            switch (value) {
			                case 'alipay':
			                    providerList.push({
			                        name: '支付宝',
			                        id: value,
			                        loading: false
			                    });
			                    break;
			                case 'wxpay':
			                    providerList.push({
			                        name: '微信',
			                        id: value,
			                        loading: false
			                    });
			                    break;
			                default:
			                    break;
			            }
			        })
			        this.providerList = providerList;
			    },
			    fail: (e) => {
			        console.log("获取支付通道失败：", e);
			    }
			});
			// #endif
		},
        
        methods: {
			pay_func(name){
				// console.log(name)
				for(let i in this.providerList){
					if(name==this.providerList[i].name){
						this.requestPayment(this.providerList[i],i)
					}
				}
			},
            weixinPay() {
                console.log("发起支付");
                this.loading = true;
                uni.login({
                    success: (e) => {
                        console.log("login success", e);
                        uni.request({
                            url: `https://unidemo.dcloud.net.cn/payment/wx/mp?code=${e.code}&amount=${this.price}`,
                            success: (res) => {
                                console.log("pay request success", res);
                                if (res.statusCode !== 200) {
                                    uni.showModal({
                                        content: "支付失败，请重试！",
                                        showCancel: false
                                    });
                                    return;
                                }
                                if (res.data.ret === 0) {
                                    console.log("得到接口prepay_id", res.data.payment);
                                    let paymentData = res.data.payment;
                                    uni.requestPayment({
                                        timeStamp: paymentData.timeStamp,
                                        nonceStr: paymentData.nonceStr,
                                        package: paymentData.package,
                                        signType: 'MD5',
                                        paySign: paymentData.paySign,
                                        success: (res) => {
                                            uni.showToast({
                                                title: "支付成功"
                                            })
                                        },
                                        fail: (res) => {
                                            uni.showModal({
                                                content: "支付失败,原因为: " + res
                                                    .errMsg,
                                                showCancel: false
                                            })
                                        },
                                        complete: () => {
                                            this.loading = false;
                                        }
                                    })
                                } else {
                                    uni.showModal({
                                        content: res.data.desc,
                                        showCancel: false
                                    })
                                }
                            },
                            fail: (e) => {
                                console.log("fail", e);
                                this.loading = false;
                                uni.showModal({
                                    content: "支付失败,原因为: " + e.errMsg,
                                    showCancel: false
                                })
                            }
                        })
                    },
                    fail: (e) => {
                        console.log("fail", e);
                        this.loading = false;
                        uni.showModal({
                            content: "支付失败,原因为: " + e.errMsg,
                            showCancel: false
                        })
                    }
                })
            },
            async requestPayment(e, index) {
                this.providerList[index].loading = true;
                let orderInfo = await this.getOrderInfo(e.id);
                console.log("得到订单信息", orderInfo);
                if (orderInfo.statusCode !== 200) {
                    console.log("获得订单信息失败", orderInfo);
                    uni.showModal({
                        content: "获得订单信息失败",
                        showCancel: false
                    })
                    return;
                }
                uni.requestPayment({
                    provider: e.id,
                    orderInfo: orderInfo.data,
                    success: (e) => {
                        console.log("success", e);
                        uni.showToast({
                            title: "支付成功"
                        })
                    },
                    fail: (e) => {
                        console.log("fail", e);
                        uni.showModal({
                            content: "支付失败,原因为: " + e.errMsg,
                            showCancel: false
                        })
                    },
                    complete: () => {
                        this.providerList[index].loading = false;
                    }
                })
            },
            getOrderInfo(e) {
                let appid = "";
                // #ifdef APP-PLUS
                appid = plus.runtime.appid;
                // #endif
                let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=' + this.price;
                return new Promise((res) => {
                    uni.request({
                        url: url,
                        success: (result) => {
                            res(result);
                        },
                        fail: (e) => {
                            res(e);
                        }
                    })
                })
            },
            priceChange(e) {
                console.log(e.detail.value)
                this.price = e.detail.value;
            }
        }
    }
</script>

<style scoped>
    .rmbLogo {
        font-size: 40upx;
    }

    button {
        background-color: #007aff;
        color: #ffffff;
    }

    .uni-h1.uni-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
    }

    .price {
        border-bottom: 1px solid #eee;
        width: 200upx;
        height: 80upx;
        padding-bottom: 4upx;
    }

    .ipaPayBtn {
        margin-top: 30upx;
    }
</style>
