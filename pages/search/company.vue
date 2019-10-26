<template>
<view class="content">
    <view class="main"> 
        <input  type="text" class="input_search" v-model="keys"  @input='isKeys'  placeholder="装修公司名称，如居众，华为，飞友" />
        <text class="btn" @click="btn">取消</text>    
    </view>
    <view class="i" v-if="isResult">
        <view class="que" v-if="isQue">
               <image style="margin:0 auto;width:350upx;height:299upx;" src='../../static/img/xi2x.png'/>
            <text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(193,123,125,1);padding-top:15upx">暂未找到相关搜索结果</text>
        </view>
     
        <view  v-for="(item,index) in list" :key='index'  @click.stop='getDetail(index)'>
            <view class="result" ref='nickname'>
                <image style="width:97upx;height:97upx" :src='item.src' />
                <view class="right_main">
                    <view>
                        <text style="font-size:26upx;font-family:PingFang SC;font-weight:700;color:#444444FF">{{item.name}}</text>
                    </view>
                    <view class="test">
                        <text class="bor_lr1">设计{{item.desc}}</text>
                        <text class="bor_lr">服务{{item.server}}</text>
                        <text class="bor_lr2">施工{{item.shig}}</text>
                    </view>
                </view>
                <text style="font-size:24upx;font-family:PingFang SC;font-weight:400;color:rgba(62,62,62,1);padding-right:15upx" class="right_juli">{{item.juli}}</text>
            </view>
        </view>
       
    </view>
     
   <view v-if="showHistory" class="h" style="">
            <view class="showHistory" v-for='(item,index) in history1' :key='index' @click="historyD(index)">
                  
                   <image class="h" style="width:35upx;height:35upx;" src='../../static/img/search/h.png' />
                   <text>{{item}}</text>
                   <view class="t"  @click="clearIndex(index)">
                        <image class="x" style="width:30upx;height:30upx;" src='../../static/img/search/x.png' />
                   </view>
                   
            </view>

            <text class="clearHistory" @click="clearHistory" v-if="isHis">清空历史记录</text>
    </view>

   
</view>
</template>
<script>
import json from '@/json'
import  { mapState, mapMutations, mapActions }  from 'vuex'
export default {
    data(){
        return {
            searchList:json.searchList,
            isResult:true,
            keys:'',
            list:[],
            history:[],
            showHistory:true,
            isQue:false,
            isHis:true
        }
    },
    mounted() {
       
        this.history = this.$store.state.searchKeys
    },
  computed: {
      history1(){
          return this.$store.state.searchKeys
      }
  },
    methods:{
        //删除某条历史记录
        clearIndex(index){
            this.$store.state.searchKeys.splice(index,1)
            if(this.$store.state.searchKeys.length === 0){
                this.isHis = false
            }
        },
        //清空历史记录
        clearHistory(){
            this.$store.commit('clearHistory')
            this.isHis = false
        },
        getDetail(index){
            //进到装修公司详情页  并且保存搜索记录
            uni.navigateTo({
                url:'../fitment/index'
            })
            if(this.keys){
                    this.$store.commit('getKeys',this.keys);
            }
            
           //跳转后删除this.keys
        },
        isKeys(keys){
            // console.log(keys.detail.value)
            // var arr = arr.push(keys.detail.value)
            // ...mapActions(['getKeys',arr]) []
            console.log(keys.detail.value)
             var a = this.search(key)
            // console.log(this.$store.state.searchKeys)
            this.isResult = true
            var key = keys.detail.value
            if(key === '' ){
                this.list = false
                this.showHistory = true
                this.isQue = false
                this.isHis = true
                return
            }
         
          if(a.length === 0){
              this.list = false
              this.showHistory = false
              this.isQue = true
              this.isHis = false
              return 
          }
          this.list = a
          this.isQue = false
         
         
         this.showHistory = false
             this.$nextTick( ()=>{
                 var abc =  document.querySelectorAll(".result")
                 console.log(abc)
                 abc[abc.length-1].style.border = 'none'
               
             })
        },
        search(keys){
            return this.searchList.filter(item=>{
                if(item.name.includes(keys)){
                    return item
                }
            })
        },
        btn(){
            this.isResult = false
            this.keys = ''
            uni.navigateBack({
                delta: 2
            });
        },
        historyD(index){
            var a = this.history1[index]
            console.log(a)
            var i = this.search(a)
            console.log(i)
            if(i.length>0){
                this.list = i 
                this.showHistory = false
            }
        }

    }
}
</script>
<style scoped lang='scss'>
.content{
    width: 100%;
    overflow: hidden;
}
.main{
   padding-top: 40upx;
   padding-left: 20upx;
   padding-bottom: 38upx;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-top: 30upx
}
.input_search{
    width:45rem;
    height:2rem;
    font-size: 30upx;
    background:rgba(239,239,239,1);
    background-image: url('../../static/img/home/search_ico.png');
    background-repeat: no-repeat;
    background-size: 40upx;
    background-position:20upx;
    border-radius:20upx;
    padding-left: 82upx;
    // background-size: 40upx 40upx
    
}
.btn{
    width: 10rem;
    font-size: 30upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(193,123,125,1);
    // padding-right: 29upx
    text-align: center;
}
.result{
    display: flex;
   align-items: center;
   justify-content: space-between;
    height: 151upx;
    border-bottom: 1px solid #ccc;
    width: 95%;
    margin: 0 auto;
    image{
        border-radius: 50%;
        margin: 0 20upx
    }
    .right_main{
        display: flex;
        flex-direction: column;
       width: 500upx;
      .test{
        display: flex;
        font-size:20upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(62,62,62,1);
        margin-top: 10upx;
        text-align: center;
        line-height: 20upx;
        .bor_lr{
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            padding:0 10upx;
            height:20upx;
        }
        .bor_lr1{
             padding-right: 10upx
         }
        .bor_lr2{
             padding-left: 10upx
         }
      }
    }
}
.i{
  
    .que{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 100upx
    }
}
.showHistory{
    
    height: 88upx;
    font-size:26upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(68,68,68,1);
    line-height: 88upx;
    position: relative;
    border-bottom:2upx solid #cecece;
    .h{
       margin-left: 32upx;
       float: left;
       position: absolute;
       top: 50%;
       transform:translateY(-50%);
    }
    text{
         justify-self: flex-start;
         float: left;
         margin-left: 80upx
    }
    .x{
        margin-right: 20upx;
        float: right;
        position: absolute;
        right: 20upx;
        top: 25%;
       transform:translateY(50%);
    }
    
}
.h{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.clearHistory{
        width: 100%;
        font-size:26upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(193,123,125,1);
        text-align: center;
       margin-top: 15upx
       
}
.t{
    width: 2rem;
    height: 88upx;
      margin-right: 20upx;
        float: right;
}
</style>