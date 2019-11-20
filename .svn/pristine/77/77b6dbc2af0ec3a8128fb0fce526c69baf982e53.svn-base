<template>
<view class="content">
        <view class="main"> 
                <view class="main_left">
                    <view  v-for="(item,index) in data" :key='index'  @tap="chioce(index)" :class="isActive === index ? 'list_title_active' : 'list_title'">
                        <text>{{item.title}}</text>
                    </view>
                </view>
                 <view class="main_right">
                     <view class="main_right_topview" @tap="toView">
                            <text>{{title}} ></text>
                     </view>
                     <view class="main_rivght_mianview"  >
                           <view class="mian_conetent" v-for="(item,index) in content_data" :key='index'>
                                <view class="img_view">
                                    <image style="width:100%;height:100%" :src='item.img' />
                                </view>
                                <text>{{item.name}}</text>
                           </view>
                     </view>
                 </view>
        </view>
</view>
</template>

<script>
export default {
    data(){
        return{
            isActive:0,
            title:'软件商城',
            data:[
                {
                    title:'软装商城',
                    content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ],
                   
                },
                {
                    title:'硬件商城',
                    content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        }
                       
                    ],
                },
                {
                    title:'家居摆件',
                    content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
                {
                    title:'家装电器',
                    content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
                {
                    title:'五金工具',
                     content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
                {
                    title:'附材水电',
                     content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
                 {
                    title:'户外建材',
                     content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
                 {
                    title:'智能家居',
                     content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
                 {
                    title:'进口建材',
                     content:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    ]
                },
              

            ],
            content_data:[
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'白起'
                        },
                        {
                            img:'https://i.loli.net/2019/11/20/HlqQIDRmBdU9Jzr.png',
                            name:'背景墙面装饰'
                        }
                    
                    ]
        }
    },
    onNavigationBarButtonTap (e){
        uni.navigateTo({
            url:'../softwaremall/searchshop'
        })
    },
    methods: {
        chioce(n){
            this.isActive = n 
            this.title = this.data[n].title
            this.content_data = this.data[n].content
        },
        toView(){
            console.log(this.isActive)
            //这里根据索引值进入对应的页面
            var num = this.isActive
            var tit = this.data[num].title
            if(num === 0){
                uni.navigateTo({
                    url:'../softwaremall/index?title='+tit
                })
            }
           
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
        .main_left{
            width: 177upx;
            height:100%;
            border-right: 1upx solid #cecece;
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
            flex: 1;
            .main_right_topview{
                width: 100%;
                height:120upx;
              
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
               }
              
            }
        }
    }

</style>