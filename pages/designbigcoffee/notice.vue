<template>
<view>
        <!-- <view class="title">
            
        </view> -->
        <view class="content" >
           <rich-text :nodes="data"  ></rich-text>
        </view>
</view>
</template>

<script>
import dapi from '../../apis/designer/designer'
export default {
    data(){
        return{
            data:''
        }
    },
    mounted(){
        let param = {

        }
        dapi.getServerTxt(param,this)
    }
}
</script>
<style lang="scss" scoped>
.title{
    width: 100%;
    height: 100upx;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}
.content{
    width: 90%;
    height: auto;
    font-size: 30upx;
     margin: 0 auto
}
</style>