<template>
<view class="content">
        <view class="main" v-if="!showPage"> 
                <view class="main_left">
                    <view  v-for="(item,index) in data" :key='index'  @tap="chioce(index)" :class="isActive === index ? 'list_title_active' : 'list_title'">
                        <text>{{item.name}}</text>
                    </view>
                </view>
                <view class="main_right">
                     <view class="main_right_topview" @tap="toView">
                            <text>{{name}} ></text>
                     </view>
                     <view class="main_rivght_mianview"  >
                           <view class="mian_conetent" v-for="(item,index) in content_data" :key='index' @tap='goIndex(item.id)'>
                                <view class="img_view">
                                    <image style="width:100%;height:100%" :src="item.extendField.length == 0 ? 'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png' : item.extendField " />
                                </view>
                                <text>{{item.name}}</text>
                           </view>
                     </view>
                </view>
        </view>
</view>
</template>

<script>
import api from '../../apis/goods/goods'
export default {
    data(){
        return{
            isActive:0,
            name:'软装商城',
            data:[],
            content_data:[],
            showPage:true
        }
    },
    onLoad(){
        uni.showLoading({
            title:'加载中'
        })
    },
    mounted(){
        api.getShopType().then(res=>{
            
            if(res.statusCode === 200){
                
                if(res.data.status === 0){
                     console.log(res.data.data)
                     this.data = res.data.data
                     this.content_data = res.data.data[0].extendField
                     setTimeout(()=>{
                          uni.hideLoading()
                          this.showPage = false
                     },500)
                }else{
                    uni.hideLoading()
                    this.showPage = true
                    unis.showToast({
                         icon:'none',
                        title:'系统繁忙，请稍后刷新重试',
                        duration:2000
                    })
                }
               
            }
            if(res.statusCode !== 200){
                 uni.hideLoading()
                this.showPage = true
                unis.showToast({
                    icon:'none',
                    title:'请检查网络后重试',
                    duration:2000
                })
            }
        }).catch(err=>{
            uni.hideLoading()
            this.showPage = true
            uni.showToast({
                icon:'none',
                title:'网络未连接，请连接网络',
                duration:2000
            })
            return
        })
        //获取商品类型
        // let param ={
        //     shopid : 1
        // }
        // api.getGoodsType(param).then(res=>{
          
        //     if(res.data.status === 0){
        //           console.log(res.data.data)
        //           this.content_data = res.data.data
        //     }else{
        //         uni.showToast({
        //             icon:'none',
        //             title:'请求超时，请稍后重试',
        //             duration:1500
        //         })
        //          this.content_data = [{extendField:'',name:'暂无'}]
        //     }

        // })
    },
    onNavigationBarButtonTap (e){
        uni.navigateTo({
            url:'../softwaremall/searchshop'
        })
    },
    methods: {
        chioce(n){
            uni.showLoading({
                title:'加载中'
            })
            this.isActive = n 
            this.name = this.data[n].name
            this.content_data = this.data[n].extendField
            setTimeout(()=>{
                uni.hideLoading()
            },200)
        },
        toView(){
            // console.log(this.isActive)
            //这里根据索引值进入对应的页面
            var num = this.isActive
            var tit = this.data[num].name
            var id = this.data[num].id
            var gid = this.data[num].extendField[0].id
                uni.navigateTo({
                    url:'../softwaremall/index?title='+tit+'&id='+id+'&gid='+gid
                })
            
        },
        goIndex(gid){
            // console.log(gid)
             var num = this.isActive
            var tit = this.data[num].name
            var id = this.data[num].id
            uni.navigateTo({
                url:'../softwaremall/index?title='+tit+'&id='+id+'&gid='+gid
            })
            
        }

    },
}
</script>

<style lang="scss" scoped>
.body, uni-page-body{
		background: #fff;
		box-sizing: border-box;
		height: 100%;
	}

.content{
    height: 100%;
}
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background: #fff;
        position: relative;
        .main_left{
            width: 25%;
            height:100%;    
            position: fixed;
            left: 0;
            .list_title{
                width:178upx;
                height:88upx;
                text-align: center;
                line-height: 88upx;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:500;
                color:#2E2E2E;
            }
            .list_title_active{
                width:177upx;
                height:88upx;
                background:#E2B5B6;
                text-align: center;
                line-height: 88upx;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(255,255,255,1);
            }
        }
        .main_right{
            // flex: 1;
            width: 75%;
            position: absolute;
            right: 0;
            .main_right_topview{
                width: 100%;
                height:120upx;
                position: absolute;
                right: 0;
                font-size:30upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(73,73,73,1);
                text-align: center;
                line-height: 120upx
            }
            .main_rivght_mianview{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                margin-top: 100upx;
               .mian_conetent{
                   width: 150upx;
                   height: 190upx;
                   font-size:25upx;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(73,73,73,1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    margin: 10upx 0;
                   .img_view{
                       width: 150upx;
                       height: 147upx;
                   }
                   text{
                       width: 150upx;
                       white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-align: center;
                   }
               }
              
            }
        }
    }

</style>