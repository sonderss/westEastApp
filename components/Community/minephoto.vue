<template>
    <view>
         <view class="myPhoto" v-if="qwe">
             <view class="test" >
                    <view class="view_photo" @tap="view_p(index)" v-for="(item,index) in list" :key='index'>
                        <image style="width:'100%'" :src='item.url'/>
                    </view>
             </view>
         </view>
         <view class="isNullList" v-if="!qwe">
                <view class="bakImg"></view>
                <view class="toast_text">暂无图片数据</view>
         </view>
    </view>
</template>

<script>
import { type } from 'os'
// let list = require('../../common/json/mine_photo.json')
export default {
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            imgs:[]
        }
    },
    computed: {
        qwe(){
            let isList = Boolean
            if(this.list.length <= 0){
                 isList = false
            }else{
                isList = true
                this.list.forEach(item =>{
                    this.imgs.push(item.url)
                })
            }
            return isList
        }
    },
    methods:{
		view_p(index){
			 uni.previewImage({
					current:index,
			       urls:this.imgs
			       
			 });
		}
	}
}
</script>

<style lang="scss" scped>
    .myPhoto{
        width: 100%; 
       display: flex;
       justify-content: center;
        .view_photo{
            width: 240upx;
            height:240upx;
            float: left;

            image{
                width: 226upx;
                height: 226upx;
                margin: 10upx
              
            }
        }
    }
    .test{
       width: 96%;
       margin-top:20upx; 
    }
    .isNullList{
        width: 100%;
        height: 500upx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .bakImg{
             width: 179upx;
             height: 153upx;
            background-image: url('../../static/img/sendindex/notalk.png');
            background-size: cover;
        }
        .toast_text{
            font-size:26upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(193,123,125,1);
            margin-top: 20upx
        }
    }
</style>