<template>
<view>
         <view class="main" style="overflow:hidden">
              <view class="main_top">
                  <input type='text'  @confirm='testGo' class="searchInput" v-model="value" placeholder="例如简约，压缩，单人床"/>
                  <view class="close_search_title" @tap='close'></view>
                  <text @tap='goBack'>  取消</text>
              </view>
              <!-- 未搜索到 -->
              <view class="none_result" v-if='!isResult'>
                  <image style="margin:0 auto;width:350upx;height:299upx;"  src='../../static/img/xi2x.png'/>
                    <text>暂未搜索到结果</text>
              </view>
                <!-- 搜索结果 -->
              <!-- <view class="result" v-if="isResult1"> -->
                  <!-- 历史搜索 -->
                     <!-- <view class="hot_search" style="">
                        <text class="hot_title" >历史搜索</text>
                          <view class="hot_result_view">
                                 <view class="hot_result" v-for="(item,index) in history_result" :key="index">
                                <text>{{item.title}}</text>
                            </view>
                          </view>
                         
                        
                        
                    </view> -->
                    <!-- 热门搜索 -->
                    <!-- <view class="hot_search">
                        <text class="hot_title" >热门搜索</text>
                          <view class="hot_result_view">
                                 <view class="hot_result" v-for="(item,index) in hot_result" :key="index">
                                <text>{{item}}</text>
                            </view>
                          </view>
                         
                        
                        
                    </view> -->
              <!-- </view> -->
              <!-- 如果搜索到结果-》渲染 -->
              <view class="result_view" v-if="isResult3">
                    <view class="result_view_top1" >
                        <view @tap='changeNum(index)' :class="isChaneNum === index ? 'result_view_top1_text_active' : 'result_view_top1_text' "  v-for="(item,index) in sortData" :key="index">
                            <text>{{item.name}}</text>
                        </view>
                       
                        <view  style="display:flex; align-items: center"  @tap='sortImg(3)' :class="isChaneNum !=3  ? 'result_view_top1_text':'result_view_top1_text_active'">
                                <text>价格</text>
                                <image style="width:40upx;height:40upx;margin-top:7upx" :src="sorticon?'../../static/img/cjq-about/up.png':'../../static/img/cjq-about/down.png'"/>
                                
                        </view>
                    </view>
                    <!-- 搜索到的结果列表 -->
                    <view class="main">
                                <view class="card" v-for="(item,index) in result" :key="index" @tap="goDetail(item.id)">
                                    <view style="width:340upx;height:300upx">
                                        <image mode='widthFix'  style="width:100%;height:100%" :src="item.pic"/>
                                    </view>
                                    <view class="btm_content">
                                        <text class="title">{{item.title}}</text>
                                    <view class="desc_content">
                                            <text style="color:#B86969;font-size:24upx">￥{{item.price}}</text>
                                            <text style="font-size:20upx;color:#7E7E7E">{{item.sales}}人付款</text>
                                            <text style="color:#333333;font-size:20upx">{{item.city}}</text>
                                    </view>
                                    </view>
                                
                                    
                                </view>
                    
                    </view>
              </view>
              <!-- 猜你喜欢 -->
                <view v-if="isResult2">
                    <view class="mine">
                    
                            <text class="mine_like_title" >猜你喜欢</text>
                        
                            
                    </view>
                    <view class="main1">
                                <view class="card" v-for="(item,index) in data" :key="index" @tap="goDetail(item.id)">
                                    <view style="width:340upx;height:300upx">
                                        <image mode='widthFix'  style="width:100%;height:100%" :src="item.pic"/>
                                    </view>
                                    <view class="btm_content">
                                        <text class="title">{{item.title}}</text>
                                    <view class="desc_content">
                                            <text style="color:#B86969;font-size:24upx">￥{{item.price}}</text>
                                            <text style="font-size:20upx;color:#7E7E7E">{{item.sales}}人付款</text>
                                            <text style="color:#333333;font-size:20upx">{{item.city}}</text>
                                    </view>
                                    </view>
                                
                                    
                                </view>
                    
                    </view>
                </view>
         </view>
</view>
</template>

<script>
import util from '../../common/util'
import  api from '../../apis/goods/goods'
export default {
    data(){
        return{
            list:[
                // {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'实木床1.8米现代简约双人床',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
                // {
                //     img:'https://i.loli.net/2019/11/20/ns8M1iDVATyF4BK.png',
                //     title:'完美家居 床  面对疾风吧',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
                // {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'实木床1.8米现代简约双人床',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
                // {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'实木床1.8米现代单人床',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
                //  {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'实木床1.8米现代单人床',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
                //  {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'实木床1.8米现代单人床',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
                //  {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'压缩',
                //     price:'￥1899',
                //     sales:'12人付款',
                //     city:'广东广州'

                // },
            ],
            data:[{
                city: "广州",
                collection: 0,
                id: 5,
                pic: "http://192.168.1.140:5005/file/fapi/pic/goods/goods_01.jpg",
                price: "200.00",
                sales: 6,
                title: "席梦思床垫",
                visitcount: 86,
            },
            {
                city: "苏州",
                collection: 0,
                id: 4,
                pic: "http://192.168.1.140:5005/file/fapi/pic/goods/goods_02.jpg",
                price: "200.00",
                sales: 10,
                title: "席梦思床垫",
                visitcount: 86,
            },
            {
                city: "加州",
                collection: 0,
                id: 3,
                pic: "http://192.168.1.140:5005/file/fapi/pic/goods/goods_03.jpg",
                price: "200.00",
                sales: 6,
                title: "席梦思床垫",
                visitcount: 86,
            },
            {
                city: "杭州",
                collection: 0,
                id: 1,
                pic: "http://192.168.1.140:5005/file/fapi/pic/goods/goods_04.jpg",
                price: "200.00",
                sales: 20,
                title: "席梦思床垫",
                visitcount: 86,
            }
            ],
            result:[],
            value:'',
            hot_result:[
                // {title:'豪华大床'},
                //  {title:'刀具'},
                //   {title:'风扇'},
                //    {title:'洗碗机'},
                //    {title:'马桶盖'}
            ],
            history_result:[
                {title:'情侣酒店'},
                 {title:'汽车宾馆'},
                  {title:'学校旅馆'}
                 
            ],
            isResult:true,
            isResult1:true,
            isResult2:true,
            isResult3:false,
            sorticon:true,
            sortData:[
                {name:'热门'}, 
                {name:'销量'}
            ],
            isChaneNum:0,
            a:[]
        }
    },
    onLoad(option){
        this.value = option.key
    },
    methods: {
        testGo(){
            this.input(this.value)
        },
        input(e){
            // console.log(e.detail.value)
            // this.value = e.detail.value
            this.value = e

            var that = this
           
              var a = this.search(this.value)
             console.log(a)
           // 这里要检查输入框是否为空，然后做下一步操作
           var isImpty = util.is_empty( this.value)
            if(isImpty){
                 this.isResult = true //缺省页隐藏
                this.isResult1 = true  //结果页显示
                this.isResult2 = true //猜你喜欢显示
                this.isResult3 = false 
                return false
            }
           //为空时
            if(a.length<=0){
                this.isResult = false
                this.isResult1 = false
                this.isResult2 = true
                 this.isResult3 = false 
                return false
            }
            //有结果时
            if(a.length >= 1){
                 this.isResult3 = true
                this.isResult = true
                this.isResult1 = false 
                this.isResult2 = false 
                this.result = a

            }
            
        },
        goBack(){
            uni.navigateBack({
                delta: 1
            });
        },
        close(){
            this.value = ''
        },
        sortImg(b){
            this.sorticon = !this.sorticon
            this.isChaneNum = b
        },
        changeNum(n){
            this.isChaneNum = n
           
        },
        search(key){
            return this.list.filter(item=>{
                if(item.title.includes(key)){
                    console.log(item.title)
                    return item
                }
            })
        },
        goDetail(id){
            uni.navigateTo({
                 url:'../../pages/detail/goodsinfo?itemid='+id
            })
        }
    },
    mounted(){
        // api.getHotKeys().then(res=>{
        //     // console.log(res.data.data)
        //     this.hot_result = res.data.data
        // })
         //获取商品列表
            let param={
                    condition: this.value,//查询条件
                    paratype: 1, //查询类型 1 按关键字查询 2 按品牌查询 3按商品类型查询 4 根据商品id 查询对应的相关商品
                    pageindex:1,
                    pagesize:20,
                    orderfield:'POPULAR',
                    ordertype:1
            }
            api.getGoodsList(param).then(res=>{
                console.log(res.data.data.list)
                 this.list = res.data.data.list
                this.input(this.value)
            })

    }
}
</script>

<style lang="scss" scoped>

    .main_top{
        width: 100%;
   
        height: 100upx;
   
        display: flex;
        justify-content: space-around;
        align-items: center;
         overflow: hidden;
         z-index: 9999;
         margin: 0 auto; 
         margin-left: 30upx;
        margin-top: 40upx;
        .searchInput{
            width:588upx;
            height:70upx;
            padding-left: 70upx;
            background:rgba(239,239,239,1);
            border-radius:20upx;
            background-image: url('../../static/img/home/search_icon1.png');
             background-image: url('../../static/img/home/search_icon1.png');
                background-repeat: no-repeat;
                background-size: 50upx;
                background-position:20upx;
                font-size: 20upx;
        }
        text{
            width: 100upx;
            height: 70upx;
            display: block;
            font-size:30upx;
            font-family:PingFang SC;
            line-height: 70upx;
            font-weight:500;
            color:rgba(193,123,125,1);
        }

    }
    .result{
        width: 100%;
        border-bottom: 1upx solid #C5C5C5;
        // margin-top: 30upx;
        .hot_search{
            width: 100%;
            padding: 30upx;
            display: flex;
            flex-direction: column;
            
            .hot_title{
                width: 100%;
                font-size:24upx;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(110,110,110,1);
               
            }
            .hot_result_view{
                display: flex;
                flex-wrap: wrap;
                .hot_result{
                    width:144upx;
                    height:57upx;
                    background:rgba(255,255,255,1);
                    border:1upx solid rgba(193,123,125,1);
                    border-radius:10upx;
                    font-size:26upx;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(193,123,125,1);
                    text-align: center;
                    line-height: 55upx;
                    margin-top: 20upx;
                    margin-left: 20upx;
                    
                    
                }
            }
           
        }
    }
    // 猜你喜欢
    .mine{
        width: 100%;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        height: 50upx;
        overflow: hidden;
        text-align: center;
        .mine_like_title{
            width:103upx;
            height:30upx;
            font-size:26upx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(66,66,66,1);
            text-align: center;
            // margin-top: 25upx;
            
        }
    }
    .main1{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
         .card{
            width:340upx;
            height:406upx;
            background:rgba(253,253,253,1);
            box-shadow:-3upx 5upx 38upx 0upx rgba(221,221,221,0.58);
            border-radius:10upx;
            margin-bottom: 20upx;
            display: flex;
            flex-direction: column;
            margin-left: 15upx;
            margin-right: 15upx;
            margin-top: 20upx
        }
    }
    .main{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // margin-top: 10upx;
        .card{
            width:340upx;
            height:406upx;
            background:rgba(253,253,253,1);
            box-shadow:-3upx 5upx 38upx 0upx rgba(221,221,221,0.58);
            border-radius:10upx;
            margin-bottom: 20upx;
            display: flex;
            flex-direction: column;
            margin-left: 15upx;
            margin-right: 15upx;
            margin-top: 20upx
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
    .close_search_title{
            width:30upx;
            height:30upx;
            position: absolute;
               right: 150upx;
                top: 80upx;
                background-image: url('../../static/img/goods/close.png');
                background-size: 30upx 30upx;
                background-position: center;
            
    }
    .none_result{
        width:100%;
        height: 400upx;
        border-bottom: 1upx solid #C5C5C5;
        font-size:26upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(193,123,125,1);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text{
               padding-top:10upx
            }
    }
    //搜索到结果的渲染
    .result_view{
        width:100%;
        //top
        .result_view_top1{
            width: 100%;
            height: 80upx;
            border-top:1upx solid #cecece;
            border-bottom:1upx solid #cecece;
            font-size:30upx;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(64,64,64,1);
            display: flex;
            justify-content: space-around;
            align-items: center;
             
           
        }
        .result_view_top1_text{
              color:rgba(64,64,64,1);
        }
         .result_view_top1_text_active{
               color:#C17B7D;
        }
        // .result_view_top1_active{
        //     width: 100%;
        //     height: 80upx;
        //     border-top:1upx solid #cecece;
        //     border-bottom:1upx solid #cecece;
        //     font-size:30upx;
        //     font-family:PingFang SC;
        //     font-weight:400;
        //     color:#C17B7D;
        //     display: flex;
        //     justify-content: space-around;
        //     align-items: center;
           
        // }
    }
</style>