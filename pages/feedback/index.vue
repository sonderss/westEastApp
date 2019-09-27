<template>
    <view class="page">
        <!--头部选择类型view -->
    <view class="title" @tap="getPop">
        <text class="text">请选择反馈类型</text>
        <image src='../../static/img/confirmation/addArrow.png' style="width:13upx;height:23upx;margin-right:25upx"/>
    </view>
    <view class="text_input">
        <textarea style="width:100%;height:100%;" v-model="sendDate.content" placeholder='请填写您要反馈的内容，我们会认真听取您的意见，只能140字...'></textarea>
    </view>
    <input :maxlength=20 type="text" v-model='sendDate.phone' placeholder='请留下您的联系方式（电话号码或者QQ）' style="padding-left:10px;width:708upx;height:80upx;border:1px solid #dcdcdc;margin:0 auto; border-radius: 5px "/>
 




    
        <view class='feedback-title'>
            <text>上传图片(图片不超过8张)</text>
        </view>
        <view class="feedback-body feedback-uploader">
            <view class="uni-uploader">
                <view class="uni-uploader-head">
                    <view class="uni-uploader-title">点击预览图片</view>
                    <view class="uni-uploader-info">{{imageList.length}}/8</view>
                </view>
                <view class="uni-uploader-body">
                    <view class="uni-uploader__files">
                        <block v-for="(image,index) in imageList" :key="index">
                            <view class="uni-uploader__file" style="position: relative;">
                                <image class="uni-uploader__img" :src="image" @tap="previewImage"></image>
                                <view class="close-view" @click="close(index)">x</view>
                            </view>
                        </block>
                        <view class="uni-uploader__input-box" v-show="imageList.length < 8">
                        	<view class="uni-uploader__input" @tap="chooseImg"></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class='feedback-title feedback-star-view'>
            <text>应用评分</text>
            <view class="feedback-star-view">
                <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.start ? 'active' : ''" @tap="chooseStar(value)"></text>
            </view>
        </view>
        <button @click='up_set' class=" btn">提交</button>

        <uni-popup ref="popup" type="bottom" :custom="false" :radius="true">
        <view class="typeChoice_head">
           <image class="img_close" @tap='close1' src="/static/img/confirmation/paymentClose.png"></image>
            
            <text class="text_type">请选择反馈类型</text>
        </view>
       <radio-group @change="radioChange" class="parent">
                <label class="uni-list-cell uni-list-cell-pd list-a" v-for="(item, index) in items" :key="index">
                     <view>{{item.name}}</view>
                    <view>
                        <radio :value="item.value"  />
                    </view>
                </label>
        </radio-group>
        <button class="btn" @tap='btn'>确定</button>
    </uni-popup>
    
    </view>
</template>

<script>
import UniPopup from "../../components/uni-popup/uni-popup"
    export default {
        components: {UniPopup},
        data() {
            return {
              
               items: [{
                    value: 'goods',
                    name: '商品问题'
                    },
                    {
                        value: 'app',
                        name: '软件问题',
                    },
                    {
                        value: 'server',
                        name: '商家服务问题'
                    },
                    {
                        value: 'others',
                        name: '其他'
                    },
                ],
                current: 0,
                stars: [1, 2, 3, 4, 5],
                imageList: [], //图片
                sendDate: {
                    value: '', //选择的问题类型
                    content: "",  //问题描述
                    phone: "",   // 联系方式
                    start:'' //评分
                }
            }
        },
        methods: {
             getPop(){
            this.$refs.popup.open();
        },
        close1(){
             
              this.$refs.popup.close();
        },
         radioChange: function(e) {
         // console.log(e.detail)
           this.sendDate.value = e.detail.value
        },
        btn(){
           if(this.sendDate.value){
               this.$refs.popup.close()
           }else{
             this.$refs.popup.close()
             uni.showModal({
                  title: '',
                    content: '请选择一项问题类型',
                    success: res=> {
                        if (res.confirm) {
                             this.$refs.popup.open()
                        } else if (res.cancel) {
                             this.$refs.popup.close()
                        }
                    }
             })
           }
            
           
        },
         up_set(){
            //alert('正在核实信息...')  提交
            // console.log(this.sendDate.content,this.sendDate.phone,this.sendDate.start,this.sendDate.value)
            // console.log(this.imageList.length)
            if(this.imageList.length != 0  && this.sendDate.content && this.sendDate.phone && this.sendDate.start && this.sendDate.value){
                   uni.showToast({
                       title:'提交成功...',
                       icon:'success',
                       duration: 2000,
                       success:()=>{
                           setTimeout(() => {
                                uni.switchTab({
                                    url:'../myself/myself'
                                })
                           }, 1000);
                           
                       }
                   })
                   
                    
            }else{
                uni.showToast({
                       title:'请把信息补充完整...',
                       icon:'none',
                       duration: 2000,
                })
            }
        },
            close(e){
                this.imageList.splice(e,1);
            },
            chooseImg() { //选择图片
                uni.chooseImage({
                    sourceType: ["camera", "album"],
                    count: 8 - this.imageList.length,
                    success: (res) => {
                        this.imageList = this.imageList.concat(res.tempFilePaths);
                    }
                })
            },
            chooseStar(e) { //点击评星
                this.sendDate.start = e;
              
            },
            previewImage() { //预览图片
                uni.previewImage({
                    urls: this.imageList
                });
            },
            
        }
    }
</script>

<style scoped lang='scss' >
.title{
    border-top: 1px solid #dcdcdc;
    height:106upx;
    font-size: 30upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 7px solid #f1f1f1;
    .text{
        margin-left: 24upx
    }
}
.typeChoice_head{
    width: 100%;
    height: 72upx;
    font-size: 24upx;
    line-height: 72upx;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .img_close{
        width:27upx;
        height:27upx;
       position: absolute;
       left: 20upx;
    }
    
}
.list-a{
    height: 108upx;
    border-bottom: 1px solid #dcdcdc;
    font-size: 24upx
}
.parent:last-child{
    background: red
}
.btn{
    width: 700upx;
    height: 75upx;
    background: #ff0000;
    color: #fff;
    margin-bottom: 40upx;
    margin-top: 16upx;
    border-radius:20px;
    line-height: 75upx;
}
.text_input{
    width: 708upx;
    height: 200upx;
    border:1px solid #dcdcdc;
    margin: 21upx auto;
    border-radius: 5px;
    padding:0 10px;
}

.show_img{
    display: flex
}
.set_up{
    margin-top: 100px
}
    @font-face {
    	font-family: uniicons;
    	font-weight: normal;
    	font-style: normal;
    	src: url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf') format('truetype');
    }
    page {
        background-color: #fff;
    }
    view{
        font-size: 28upx;
    }
    .input-view {
        font-size: 28upx;
    }
    .close-view{
        text-align: center;line-height:14px;height: 16px;width: 16px;border-radius: 50%;background: #FF5053;color: #FFFFFF;position: absolute;top: -6upx;right: -4px;font-size: 12px;
    }
    .uni-uploader-head {
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    }
    .uni-uploader-info {
    	color: #B2B2B2;
    }
    .uni-uploader-body {
    	margin-top: 16upx;
    }
    .uni-uploader__files {
    	display: flex;
    	flex-direction: row;
    	flex-wrap: wrap;
    }
    .uni-uploader__file {
    	margin: 10upx;
    	width: 210upx;
    	height: 210upx;
    }
    .uni-uploader__img {
    	display: block;
    	width: 210upx;
    	height: 210upx;
    }
    .uni-uploader__input-box {
    	position: relative;
    	margin:10upx;
    	width: 208upx;
    	height: 208upx;
    	border: 2upx solid #D9D9D9;
    }
    .uni-uploader__input-box:before,
    .uni-uploader__input-box:after {
    	content: " ";
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	-webkit-transform: translate(-50%, -50%);
    	transform: translate(-50%, -50%);
    	background-color: #D9D9D9;
    }
    .uni-uploader__input-box:before {
    	width: 4upx;
    	height: 79upx;
    }
    .uni-uploader__input-box:after {
    	width: 79upx;
    	height: 4upx;
    }
    .uni-uploader__input-box:active {
    	border-color: #999999;
    }
    .uni-uploader__input-box:active:before,
    .uni-uploader__input-box:active:after {
    	background-color: #999999;
    }
    .uni-uploader__input {
    	position: absolute;
    	z-index: 1;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	opacity: 0;
    }
    
    /*问题反馈*/
    .feedback-title {
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	align-items: center;
    	padding: 20upx;
    	color: #8f8f94;
    	font-size: 28upx;
    }
    .feedback-star-view.feedback-title {
    	justify-content: flex-start;
    	margin: 0;
    }
    .feedback-quick {
    	position: relative;
    	padding-right: 40upx;
    }
    .feedback-quick:after {
    	font-family: uniicons;
    	font-size: 40upx;
    	content: '\e581';
    	position: absolute;
    	right: 0;
    	top: 50%;
    	color: #bbb;
    	-webkit-transform: translateY(-50%);
    	transform: translateY(-50%);
    }
    .feedback-body {
    	background: #fff;
    }
    .feedback-textare {
    	height: 200upx;
    	font-size: 34upx;
    	line-height: 50upx;
    	width: 100%;
    	box-sizing: border-box;
    	padding: 20upx 30upx 0;
    }
    .feedback-star {
    	font-family: uniicons;
    	font-size: 40upx;
    	margin-left: 6upx;
    }
    .feedback-star-view {
    	margin-left: 20upx;
    }
    .feedback-star:after {
    	content: '\e408';
    }
    .feedback-star.active {
    	color: #FFB400;
    }
    .feedback-star.active:after {
    	content: '\e438';
    }
</style>
