<template>
<view class="content">
   
    <view v-if="isType">
                <view class="main" > 
                    <input  type="text" class="input_search" v-model="keys"  @input='isKeys'  :placeholder="plac" />
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
            <!-- 圈子搜索 -->
            <view v-if="huatiType">
                <view class="main" > 
                        <input  type="text" class="input_search" @input='isHuati'  v-model="huati"  placeholder="搜索想要了解的话题，如装修"/>
                        <text class="btn" @tap='cancelValue'>取消</text>
                </view>
                <view v-if="isRhut">
                    <view class="view_huati" v-for="(item,index) in lastArr" :key='index'  >
                        <view  class="huati" style="height:88upx" @tap="goHuati(index)">
                            <image style="width:40upx;height:35upx;" src='../../static/img/search/shequ.png' />
                          
                             <rich-text :nodes="item" style="margin-left:20upx;font-size:25upx"></rich-text>
                            <!-- v-html="item" -->
                        </view>
                    </view>
                </view>
                <view class="que1" v-if="huatiQue">
                        <image style="margin:0 auto;width:350upx;height:299upx;" src='../../static/img/xi2x.png'/>
                        <text style="font-size:26upx;font-family:PingFang SC;font-weight:400;color:rgba(193,123,125,1);padding-top:15upx">暂未找到相关搜索结果</text>
                </view>
            </view>
    </view>
</template>
<script>
import json from '@/json'
import  { mapState, mapMutations, mapActions }  from 'vuex'
export default {
    onLoad:function(option){
        // console.log(option.type)
        if(option.type === '1'){
            this.isType = false
            this.huatiType = true
            // this.searchHuati = json.huati
        }else{
            this.isType = true
            this.huatiType = false
        }
       
    },
    props:{
        plac:{
            type:String,
            default:'装修公司名称，如居众，华为，飞友'
        },
        icon:{
            type:String,
            default:'../../static/img/search/h.png'
        },
        // isType:{
        //     type:Boolean,
        //     default:true
        // }
       
    },
    data(){
        return {
            searchList:json.searchList,
            isResult:true,
            keys:'',
            list:[],
            history:[],
            showHistory:true,
            isQue:false,
            isHis:true,
             isType:true,
             huati:'',
             huatiQue:false,
             huatiType:false,
             isRhut:false,
             searchHuati: [],
              huatilist:[],
              lastArr:[]
             
           
        }
    },
    mounted() {
       
        this.history = this.$store.state.searchKeys
        this.searchHuati = json.huati
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
                url:'../fitment/index?id=1&type=zhuangxiu'
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
            // console.log(keys.detail.value)
            
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
          var a = this.search(key)
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
                //  console.log(abc)
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
            // console.log(a)
            var i = this.search(a)
            // console.log(i)
            if(i.length>0){
                this.list = i 
                this.showHistory = false
            }
        },
        //话题
        isHuati(huati){
             var flag 
            // console.log(huati.detail.value)
            var key = huati.detail.value
            var arr = this.searchHuati1(key)
          
            if(arr.length<=0){
                this.huatiQue = true
                this.isRhut = false
              return 
            }
         
            if(key.length == ''){
                this.huatiQue =false
                this.isRhut = false
                return 
            }
            if(arr.length > 0){
                this.isRhut = true
                this.huatiQue = false
            }
             
            //  this.huatilist = arr
           if( this.lastArr.length > 0 ){
                this.lastArr.length = []
                flag = true
           }else if(this.lastArr.length <= 0 ){
                flag = true
           }
            if(flag){
                this.huatilist = arr
                // console.log(this.huatilist)
                        for(let i=0;i<arr.length;i++){
                            //  console.log(this.huatilist[i].name)
                            var str = arr[i].name
                            //  console.log(str)
                            var op =  str.split('')
                            var keys = key.split('')
                            // console.log(keys)
                            for(let j=0;j<op.length;j++){
                                for(let q=0;q<keys.length;q++){
                                    if(op[j] === key[q]){
                                        op[j] = `<span style='color:red'>${op[j]}</span>`
                                    }
                                }
                               
                            }
                            op = op.join('')
                            // console.log(op)
                        
                            //  this.searchHuati = []
                            //   this.huatilist = op
                            //  this.huatilist = []
                            this.lastArr.push(op)
                            
                            
                        }
          
            
                // console.log(this.huatilist)
            }
        },
        searchHuati1(huati){
            return this.searchHuati.filter(item=>{
                if(item.name.includes(huati)){
                    return item
                }
            })
        },
        goHuati(index){
            console.log(index)
            uni.navigateTo({
                url:'../../pages/cjq_testpages/index?isP='+1+'&title='+this.huatilist[index].name
            })
        },
        cancelValue(){
            console.log(123)
            uni.navigateBack({
                delta: 1
            });
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
    background-image: url('../../static/img/home/search_icon1.png');
    background-repeat: no-repeat;
    background-size: 50upx;
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
.view_huati{
    width: 100%;
    display: flex;
    justify-content: center
}
.huati{
    width: 95%;
    height:88upx;
    display:flex;
    font-size:24upx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,1);
    border-bottom: 1px solid #ccc;
    align-items: center;
    text{
        margin-left: 30upx
    }
}
.que1{
     display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 200upx
}
</style>