<template>
  <view>
    <view class="tab_message">
      <view class="tab_message2"></view>
      <view
        class="tab_message1"
        v-for="item in newsList"
        :key="item.pid"
        @tap="to_detail(item.pid)"
      >
        <view class="one">
          <image :src="item.img" style="margin-right:36upx;width:50upx;height:50upx" v-if="showImg" mode="widthFix"/>
          
          <text>{{item.title}}</text>
        </view>
        <view>{{item.date}}</view>
      </view>
    </view>
    <view class="show_404" v-if="show_404">
      <image src="../../../static/img/message/kong.png" mode="widthFix" style="width: 50px;height:50px"/>
      <text>数据没有呀</text>
      <button type="warn" size="mini" style="margin-top:15upx" @click="reDate(title)">重新加载</button>
    </view>
    <loading v-if="show_loading" backgroundColor="#fafafa"></loading>
  </view>
</template>

<script>
import loading from "../../../edith_components/tui-skeleton/tui-skeleton";
export default {
  components: { loading },
  onLoad: function(option) {
    this.title = option.title
    uni.setNavigationBarTitle({
      title: option.title
    });
    this.show_loading = true;
    if (option.title == "系统通知") {
      // uni.request({
      //   url: "http://122.152.214.15:3001/test",
      //   success: res => {
          
      //     this.newsList = res.data.list
      //      this.show_404 = false
      //     this.show_loading = false
          
      //   },
      //   fail: erro => {
      //      console.log("没有请求到系统通知的数据");
      //     this.show_404 = true
      //     this.show_loading = false
        
      //   },
      //   // complete:fail => {
      //   //   if(this.statusCode == 200){
      //   //     this.show_loading = false
      //   //   }else{
      //   //     this.show_loading = false
      //   //     this.show_404 = true
      //   //   }
      //   // }
      // });
        setTimeout(()=>{
            this.show_loading = false
            this.show_404 = true
        },4000)
    }
    if (option.title == "互动消息") {
          this.showImg = true;
          // uni.request({
          //   url: "https://www.baidu.com/api3",
          //   success: res => {
          //     console.log(res);
          //     this.newsList = res.data.list;
             
          //     this.show_loading = false;
          //   },
          //   fail: erro => {
          //     // console.log("没有请求到互动消息的数据");
          //     this.show_404 = true;
          //     this.show_loading = false;
          //   }
          // });
      setTimeout(()=>{
        this.show_loading = false
        this.newsList = [{
             "pid":'0',
             "img":'../../../static/img/message/toux.png',
             "title":'张三评论了您的留言',
             "date":'17:00',
			       "hic_head":"../../../static/img/cjq-about/09.png"
           },
           {
             "pid":'1',
             "img":'../../../static/img/message/touxiang.png',
             "title":'李四点赞了你的评论',
             "date":'昨天',
			       "hic_head":"../../../static/img/cjq-about/09.png"
           },
             {
             "pid":'2',
             "img":'../../../static/img/message/toux.png',
             "title":'王二评论了你的评论',
             "date":'14:20',
			       "hic_head":"../../../static/img/cjq-about/09.png"
           }
           ];
      },2000)
           
      
    }
    if (option.title == "客服小白") {
      setTimeout(() => {
        this.show_loading = false;
      }, 2000);
    }
  },
  data() {
    return {
      newsList: "",
      showImg: false,
      show_404: false,
      // show_loading:true
      show_loading: false,
      title:'',
     
    };
  },
  methods: {
    to_detail(id) {
      //这里的id是新闻资讯的标识，用于请求详情该资讯的详情
      console.log("查看了标识为" + id + "的新闻详情");
    },
    reDate(title){
        uni.redirectTo({
          url:'/pages/message/systemMessage/index?title='+title
        })
    }
  }
};
</script>

<style scoped lang="scss">
@import "../index.scss";
.one {
  display: flex;
  align-items: center;
}
.show_404 {
  width: 100%;
  height: 400upx;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30upx;
}
</style>