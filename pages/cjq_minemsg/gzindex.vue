<template>
<view>
	<!-- 关注的人 -->
	<view v-if="isShowPerson">
		<view class="main" v-for="(item,index) in list" :key="index" >
				 <view class="left_view" @tap='goPerson(item.name)'>
					 <view class="img_view">
					 	 <image style="width: 100%;height:100%;" :src='item.img'/>
					 </view>
					 <view class="left_view_name">
						 <text>{{item.name}}</text>
						 <text class="num_txt">{{item.num}}粉丝</text>
					 </view>
				 </view>
				 <view class="right_view">
					 {{item.gz?"已关注":""}}
				 </view>
		</view>
	</view>
    <!-- 关注话题 -->
    <view v-if="isHuace">
        <view class='main1' v-for="(item,index) in data" :key="index">
            <view class='mid_content uni-flex   uni-column' @tap='goHuaT(item.title,item.num)'>
                <text class="title_">{{item.title}}</text>
                <view class='desc_ uni-flex'>
                    <text>{{item.num}}人围观</text>
                    <text>{{item.hot}}编内容</text>
                </view>
            </view>
        </view>
    </view>
	 <!-- 粉丝 -->
	 <view v-if="isFance">
		<view class="main" v-for="(item,index) in list1" :key="index">
				<view class="left_view">
					 <view class="img_view">
					 	 <image style="width: 100%;height:100%;" :src='item.img'/>
					 </view>
					 <view class="left_view_name">
						 <text>{{item.name}}</text>
						 <text class="num_txt">{{item.num}}粉丝</text>
					 </view>
				 </view>
		</view>
	 </view>
</view>

</template>
<script>
export default {
	onLoad(option){
        if(option.navNum === '0'){
            uni.setNavigationBarTitle({
		     title: '关注的人'
            });
            this.isShowPerson = true
			this.isFance = false
			this.isHuace = false
        }
		if(option.navNum === '1'){
			uni.setNavigationBarTitle({
		     	title: '粉丝'
			});
			this.isShowPerson = false
			this.isFance = true
			this.isHuace = false
		}
        if(option.navNum === '3'){
            uni.setNavigationBarTitle({
		       title: '关注话题'
            });
            this.isHuace = true
			this.isFance = false
			this.isShowPerson = false
        }
	},
    data(){
		return{
			isFance:false,
			isHuace:false,
			isShowPerson:false,
			list:[
                {
                    img:'../../static/img/cjq-about/01.png',
                    name:'放羊的星星',
                    num:1234,
                    gz:true
                },
                {
                    img:'../../static/img/cjq-about/02.png',
                    name:'齐齐蛙窕',
                    num:1573,
                    gz:true
                },
                {
                    img:'../../static/img/cjq-about/03.png',
                    name:'巴拉巴拉',
                    num:1630,
                    gz:true
                }
			],
			list1:[
                {
                    img:'../../static/img/cjq-about/04.png',
                    name:'放羊的星星',
                    num:1234,
                    gz:true
                },
                {
                    img:'../../static/img/cjq-about/05.png',
                    name:'齐齐蛙窕',
                    num:1573,
                    gz:true
                },
                {
                    img:'../../static/img/cjq-about/06.png',
                    name:'巴拉巴拉',
                    num:1630,
                    gz:true
                }
            ],
            data:[
                {
                    title:'# 烟花计划有奖征集',
                    num:123,
                    hot:12344
                },
                 {
                    title:'# 东装西购幸运转盘',
                    num:123,
                    hot:12344
                },
                 {
                    title:'# 林平之悲惨之人',
                    num:123,
                    hot:12344
                }
            ]
		}
	},
	methods:{
		goHuaT(t,n){
			uni.navigateTo({
				url:'../cjq_testpages/index?title='+t + '&ptitle='+n
			})
		},
		goPerson(name){
			uni.navigateTo({
				// url:'/pages/cjq_testpages/mine?isMy=1&name=李白'
				url:'../cjq_testpages/mine?isMy=0&name='+name
			})
		}
	}
	
}
</script>
<style lang="scss" scoped>
    .main{
		width: 100%;
		height: 140upx;
		border-bottom:1upx solid #D2D2D2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left_view{
				flex: 1;
				display: flex;
				margin-left: 40upx;
				.left_view_name{
					display: flex;
					flex-direction: column;
					margin-left: 20upx;
					font-size:30upx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(52,52,52,1);
					height: 93upx;
					justify-content: space-between;
					
					.num_txt{
						font-size:26upx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(52,52,52,1);
						opacity:0.5;
					}
				}
				.img_view{
					width: 93upx;
					height: 93upx;
				}
		}
		.right_view{
			width: 100upx;
			height: 100%;
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(52,52,52,1);
			line-height: 140upx;
			margin-right: 20upx;
		}
		
    }
    // 关注话题
    .main1{
        width:100%;
        height:140upx;
        border-bottom:1upx solid #D2D2D2;
        display:flex;
		justify-content: center;
		flex-direction: column;
		.mid_content{
			margin-left: 50upx;
			.title_{
				font-size:30upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(2,2,2,1);
				margin-bottom: 20upx
			}
			.desc_{
				font-size:26upx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(139,139,139,1);
			}
		}
    }
</style>