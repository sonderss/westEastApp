<template>
<view style=" position: relative;">
    <view class="maps"  style="width:100%;height:100%">
         <map  style="width:100%;height:40rem" :latitude="latitude" :longitude="longitude" :markers="covers">
          </map> 
    </view>
    <view class="btmview">
        <view class="txt">
            <text style="">{{title}}</text>
        </view>
        
        <view class="dh" @tap="toGD">导航</view>
    </view>
        
</view>
</template>
<script>
export default {
    onLoad: function(option){
            this.title = option.shopName
        uni.setNavigationBarTitle({
        　　title:option.shopName
        
        })
    },
     data() {
        return {
            mylatitude:116,
            mylongitude:23,
            title: '',
             latitude: 23.28636,
                longitude: 113.3517,
            covers: [{
                latitude: 23.28636,
                longitude: 113.3517,
                iconPath: '../../static/img/designTeam/position.png',
                width:35

            }, {
                 latitude: 23.28636,
                longitude: 113.3517,
                iconPath: '../../static/img/designTeam/position.png',
                width:35
            }]
        }
    },
    onNavigationBarButtonTap (e){
        //  uni.getLocation({
        //             type: 'gcj02', //返回可以用于uni.openLocation的经纬度
        //             success: function (res) {
        //                 const latitude = res.latitude;
        //                 const longitude = res.longitude;
        //                 uni.openLocation({
        //                     latitude: latitude,
        //                     longitude: longitude,
        //                     success: function () {
        //                         console.log('success');
        //                     }
        //                 });
        //             }
        // });
    },
    methods: {
        toGD(){
           
            // uni.openLocation({
            //     latitude: 113.3517,
            //     longitude: 23.28636,
            //     success: function () {
            //             console.log('success');
            //     }
            // });
            
        }
    },  

}
</script>

<style lang="scss" scoped>
    .maps{
        width: 100%;
        height:100%;
    }
    .btmview{
        width: 100%;
        height: 4rem;
        background: #fff;
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 9999;
        .txt{
                width: 70%
        }
    }
    .dh{
        width: 80upx;
        height:80upx;
        background: blue;
        border-radius: 50%;
        text-align: center;
        line-height: 80upx;
        font-size: 25upx;
        color: #fff;
        margin-right: 20upx
    }
</style>