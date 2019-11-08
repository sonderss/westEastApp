<template>
    <view>
         <view class="myPhoto">
             <view class="test" >
                    <view class="view_photo" @tap="view_p(index)" v-for="(item,index) in list1" :key='index'>
                        <image style="width:'100%'" :src='item'/>
                    </view>
             </view>
         </view>
    </view>
</template>

<script>
let list = require('../../common/json/mine_photo.json')
export default {
    data(){
        return{
            list1:list
        }
    },
    methods:{
		view_p(index){
			 uni.previewImage({
					current:index,
			       urls:list
			       
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
</style>