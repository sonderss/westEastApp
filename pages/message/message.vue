<template>
  <view>
    <view class="tab_message">
      <view class="tab_message2"></view>
      <view class="tab_message1" @tap="to1('系统通知')">
        <view >
          <!-- iconfont icon-lingdang self -->
          <text class=""  ></text>
          <image src="../../static/img/message/lingdang.png" style="margin-right:30upx;width:30upx;height:30upx;	display: inline-block;" />
          <text>系统通知</text>
        </view>
        <view class="right_msg">
          <text class="num_msg">1</text>
          <image src="../../static/img/confirmation/addArrow.png"  style="width:10px;height:13px" />
        </view>
      </view>
      <view class="tab_message1" @tap="to2('互动消息')">
        <view>
          <!-- iconfont icon-62 self -->
          <text class=""  style="font-weight:bold"></text>
          <image src="../../static/img/message/xinxi.png" style="margin-right:30upx;width:30upx;height:30upx;display: inline-block;" />
          <text>互动消息</text>
        </view>
        <view class="right_msg">
          <!-- <text class="num_msg">213132</text> -->
          <image src="../../static/img/confirmation/addArrow.png" style="width:10px;height:13px" />
        </view>
      </view>
      <view class="tab_message3 " @tap="to3('客服小白')">
        <view>
          <!-- iconfont icon-kefu1 self -->
          <text class=""  style="font-weight:500"></text>
          <image src="../../static/img/message/erji.png" style="margin-right:30upx;width:30upx;height:30upx;display: inline-block;" />
          <text>东装西购客服-小白</text>
        </view>
         <view class="right_msg">
          <!-- <text class="num_msg">213132</text> -->
          <image src="../../static/img/confirmation/addArrow.png" style="width:10px;height:13px" />
        </view>
      </view>
    </view>
    <view class="newsUser">
        <view class="msg_view" v-for="(item,index) in list"  @tap="goKeF(item.id)"  :key="index">
            <view class="img_nes_view">
              <image style="width:100%;height:100%" :src='item.img'/>
            </view>
            <view class="right_view uni-flex uni-flex   uni-column">
                  <view class="top_view uni-flex">
                      <text style="font-size:30upx;font-family:PingFang SC;font-weight:500;color:rgba(0,0,0,1);margin-top:10upx">{{item.name}}</text>
                      <text class="desc">{{item.desc}}</text>
                  </view>
                  <view class="content_ri">{{item.content}}</view>
            </view>
        </view>
    </view>
	<!-- <button @tap="cePhpApi">测试</button> -->
  </view>
</template>

<script>
import '../../static/css/iconfont.css'
export default {
  data() {
    return {
      list:[{
         img:'../../static/img/cjq-about/07.png',
         name:"李四",
         content:'你好，我是广州居众装饰公司的客服小李，请问有你好，我是广州居众装饰公司的客服小李，请问有你好，我是广州居众装饰公司的客服小李，请问有你好，我是广州居众装饰公司的客服小李，请问有',
         desc:'居众装饰',
         id:123
      },
      {
         img:'../../static/img/cjq-about/08.png',
         name:"李四",
         content:'你好，我是广州居众装饰公司的客服小李，请问有',
         desc:'天化建筑公司',
         id:1234
      }
      ]
    };
  },
  methods: {
    to1(title) {
      // uni.navigateTo({
      //   url: "./systemMessage/index?title=" + title
      // });
	  uni.navigateTo({
	    url: "./systemMessage/system"
	  });
    },
    to2(){
      // uni.navigateTo({
      //   url:'../chat/chat?title='+title
      // })
	  uni.navigateTo({
	    url:'./systemMessage/userPick'
	  })
    },
    to3(title){
        uni.navigateTo({
          url:'../chat/chat?title='+title
        })
    },
    goKeF(id){
      uni.navigateTo({
        url:'../chat/chat?id='+id
      })
    },
		// cePhpApi(){
		// 	uni.request({
		// 		url:'http://localhost/text.php',
		// 		success:res=>{
		// 			console.log(res)
		// 		}
		// 	})
		// }
	}
  
}
</script>

<style scoped lang="scss">
@import "index.scss";
.self{
  color: red;
  margin-right:30upx;
  font-size:35upx;
}
.newsUser{
  width: 100%;
  height: 140upx;
  border-top: 10upx solid #EEEEEE;
 
  .msg_view{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .img_nes_view{
      width: 85upx;
      height: 85upx;
      margin-left: 20upx
    }
  }
  
}
.desc{
  border: 1upx solid #C17B7D;
  font-size:20upx;
  height: 40upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(193,123,125,1);
text-align: center;
line-height: 40upx;

border-radius:10upx;
padding-left:10upx;
padding-right:10upx;
margin: 10upx 10upx;
margin-bottom: 0;
}
.right_view{
  margin-left: 20upx;
  flex: 1; 
  width:100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.content_ri{
   font-size:26upx;
   font-family:PingFang SC;
   font-weight:400;color:rgba(0,0,0,1);
   opacity:0.7;
   margin-top:10upx;
   width:100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}
.right_msg{
  display: flex;
  align-items: center
}
.num_msg{
  margin-right:10upx;
  display: block;
  width: 33upx;
  height: 33upx;
  background:rgba(193,123,125,1);
border-radius:50%;
color: #fff;
text-align: center;
font-size:24upx;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
}
</style>
