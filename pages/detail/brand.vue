<template>
<view>  
    <view v-if="isNull" style="overflow: hidden;">
        <view class="pinpai" >
				
				<!-- 中间 -->
				<view class="_pinpai_mid"  >
				
						   <view style="width:142upx;height:142upx;margin-left:20upx">
						       <image :src='data.loginPic' style="width:100%;height:100%"/>
							</view>
							<!-- 中间说明 -->
							<view class='_pinpai_mid_pin'>
									<text style="font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(52,52,52,1);">{{data.name}}</text>
									<text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(103,103,103,1);margin:10upx 0;">{{data.special}}</text>
                                    <text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(175,175,175,1);">{{data.follow}}关注</text>
							</view>
							<!-- 右边 -->
							<view class="_pinpai_mid_pai">
								
								<view :class="guanzhu1 ? 'guan_btn1':'guan_btn'" @tap='guanzhu'>
									 {{guanzhu1 == false ? '+ 关注' : '已关注'}}
								</view>
								
							</view>
					
					  
				</view>
		</view>
        <view class="f_content_txt">
             <text class="content_txt">{{data.brandexplain}}</text>
        </view>
        <view class="about_goods"  >
            <text class="title_about">相关商品</text>
        </view>
        <view class="main" >
                <view class="card" v-for="(item,index) in list" :key="index" @tap='goDetail(index)'>
                    <view style="width:340upx;height:300upx">
                        <image mode='widthFix'  style="width:100%;height:100%" :src="item.img"/>
                    </view>
                    <view class="btm_content">
                        <text class="title">{{item.title}}</text>
                    <view class="desc_content">
                            <text style="color:#B86969;font-size:24upx">{{item.price}}</text>
                            <text style="font-size:20upx;color:#7E7E7E">{{item.num}}</text>
                            <text style="color:#333333;font-size:20upx">{{item.area}}</text>
                    </view>
                    </view>
            </view>
                
        </view>
    </view>
</view>
</template>

<script>
import gapi from '../../apis/goods/goods'
export default {
    data(){
        return{
            guanzhu1:Boolean,
            isNull:true,
            data:{},
            id:'',
            list:[
                {
                    img:'../../static/img/cjq-about/like4.jpg',
                    title:'实木床1.8米现代简约双人床',
                    price:'￥1899',
                    num:'12人付款',
                    area:'广东广州'

                },
                {
                    img:'../../static/img/cjq-about/like4.jpg',
                    title:'实木床1.8米现代简约双人床8米现代简约双人床',
                    price:'￥1899',
                    num:'12人付款',
                    area:'广东广州'

                }
            ]
        }
    },
    onLoad(res){
        this.id = res.id
      
    },
    mounted(){
        uni.showLoading({
            title: '加载中'
        });
        let param = {
            id:this.id
        }
        gapi.pinp_detail(param,this)
    },
    methods:{
        guanzhu(){
           this.guanzhu1 = !this.guanzhu1
        },
        goDetail(index){
             uni.navigateTo({
                 url:'../../pages/detail/goodsinfo?itemid='+index
             })
        }
    }
}
</script>
<style lang="scss" scoped>
.pinpai{
    width:100%;
    height: 200upx;
    background: #fff;
    border-bottom: 15upx solid #F1F1F1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
}
._pinpai_top{
font-size:30Upx;
font-family:PingFang SC;
font-weight:500;
color:rgba(73,73,73,1);
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20upx;
}
._pinpai_mid{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
._pinpai_mid_pin{
    display: flex;
    flex-direction: column;
    margin-left: -130upx;

}
._pinpai_mid_pai{
    display: flex;

font-size:30upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(73,73,73,1);
align-items: center;


}
.guan_btn{
    width:158upx;
height:60upx;
background:rgba(193,123,125,1);
border-radius:10upx;
text-align:center;
line-height: 60upx;
color: #fff;
margin-right: 30upx
}
.guan_btn1{
    width:158upx;
height:60upx;
background:rgba(183, 183, 183, 1);
border-radius:10upx;
text-align:center;
line-height: 60upx;
color: #fff;
margin-right: 30upx
}
.f_content_txt{
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 9upx solid #F1F1F1;
    overflow: hidden;
}
.content_txt{
    width:700upx;

font-size:26upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(54,54,54,1);
margin-top: 30upx;
margin-bottom: 20upx;

}
// 相关商品
.about_goods{
    width: 100%;
    margin-top: 40upx;
    overflow: hidden;
}
.title_about{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:30upx;
font-family:PingFang SC;
font-weight:500;
color:rgba(66,66,66,1);
}
  .main{
        width: 100%;
        margin-top:20upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      
        overflow: hidden;
        .card{
            width:340upx;
            height:406upx;
            background:rgba(253,253,253,1);
            box-shadow:-3upx 15upx 38upx 0upx rgba(221,221,221,0.58);
            border-radius:10upx;
            margin-bottom: 20upx;
            display: flex;
            flex-direction: column;
        }
        .btm_content{
            width: 100%;
            height: 106upx;
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .title{
                width:309upx;
                height:40upx;
                font-size:24upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(51,51,51,1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .desc_content{
                width: 309upx;
                height: 30upx;
             
                display: flex;
                justify-content: space-between;
                align-items: center;
                 margin-left: -5upx
            }
        }
    }
    .test::-webkit-scrollbar {display:none}
        .result123{
            
    
         
            color: #C17B7D;
           
        }
        .result123:after{
            display: block;
            content: '';
            height:4upx;
            background:rgba(193,123,125,1);

        }
       
</style>