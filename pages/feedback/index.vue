<template>
    <view class="page">
        <!--头部选择类型view -->
    <view class="title" @tap="getPop">
        <text class="text">请选择反馈类型</text>
		<view class="test_value">
			<text style="margin-right: 10upx;">{{t_value}}</text>
			<image src='../../static/img/confirmation/addArrow.png' style="width:13upx;height:23upx;margin-right:25upx"/>
		</view>
        
    </view>
    <view class="text_input">
        <textarea style="width:708upx;height:100%;margin:0 auto;border:1px solid #dcdcdc;border-radius: 5px;padding-left:10px;padding-top:10upx " v-model="sendDate.content" placeholder='请填写您要反馈的内容，我们会认真听取您的意见，只能140字...'></textarea>
    </view>
    <input :maxlength=20 type="text" v-model='sendDate.phone' placeholder='请留下您的联系方式（电话号码或者QQ）' style="padding-left:10px;width:708upx;height:80upx;border:1px solid #dcdcdc;margin:0 auto; border-radius: 5px "/>
        <view class='feedback-title cjq_size'>
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
            <text style="color:#000">应用评分</text>
            <view class="feedback-star-view">
                <!-- <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.start ? 'active' : ''" @tap="chooseStar(value)"></text> -->
                <rate :size="16" :current="current" @change="changeRate" :quantity="5"></rate>
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
                        <radio color='#C17B7D' :value="item.value"  :checked="index === current"/>
                    </view>
                </label>
        </radio-group>
        <button class="btn" @tap='btn'>确定</button>
    </uni-popup>
    
    </view>
</template>

<script>
import UniPopup from "../../components/uni-popup/uni-popup"
import rate from '../../edith_components/rate/rate'
    export default {
        components: {UniPopup,rate},
        data() {
            return {
              
               items: [{
                    value: '0',
                    name: '商品问题'
                    },
                    {
                        value: '1',
                        name: '软件问题',
                    },
                    {
                        value: '2',
                        name: '商家服务问题'
                    },
                    {
                        value: '3',
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
                },
				t_value:""
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
           console.log(e.detail)
            this.current = parseInt(e.detail.value) //转为数字类型  与index必须完全匹配
           this.sendDate.value = e.detail.value
        },
        btn(){
            // console.log(this.current)
           if(this.sendDate.value){
               this.$refs.popup.close()
               this.t_value = this.items[this.current].name
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
                //console.log(this.imageList,this.sendDate.content,this.sendDate.phone,this.sendDate.start,this.sendDate.value)
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
            changeRate(e){
                this.current = e.index

            }
        }
    }
</script>

<style scoped lang='scss' >
@import './index.scss';
.cjq_size{
    font-size: 30upx
}
</style>
