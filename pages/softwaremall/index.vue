<template>
<view>
    <view style="display:flex;over-flow:auto; border-bottom: #D2D2D2 1px solid;">
      
            <scroll-view scroll-x='true'  class="ui" ref='i' 	:scroll-into-view='itemid' :scroll-left='testleft'   v-if="isShowTop"  :show-scrollbar='false'>
                    <text    v-for="(i,n) in tArr" :key="n"  @tap='chioce(i.id,n)'  :id="'id-'+i.id" :class="result == i.id || result == `id-${i.id}` ? 'result123':''">{{i.name}}</text>
            </scroll-view> 
     
           <view  class="tset_title" v-if="!isShowTop">全部菜单</view>
           <!--   -->
         <view class="select_com">
             <slFilter @testClose1='testClose'  :themeColor="themeColor" @closeTop='closeTop' :guanbi="guanbi" :menuList="menuList" @result="result1" :independence='true'></slFilter>
        </view>
     </view>  
    
     <view class="main" v-if="isResult">
            <view class="card" v-for="(item,index) in list" :key="index" @tap='goGoodsInfo(item.id)'>
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
     <view class="quexing" v-if='!isResult'>
         <view class="test_quexing"> 
               
         </view>
         <text>暂无数据</text>
        
     </view>
     <!-- <button @tap='testTb'>测试淘宝搜索</button> -->
</view>
</template>

<script>
import slFilter from '../../components/sl-filter/sl-filter.vue'
import api from '../../apis/goods/goods'

export default {
    components:{slFilter},
    onReady(){
        this.itemid = 'id-'+this.gid-1
    },
    data(){
        return{
            list:[
                // {
                //     img:'https://i.loli.net/2019/11/19/TGloZr2qyOPcu8B.png',
                //     title:'实木床1.8米现代简约双人床',
                //     price:'￥1899',
                //     num:'12人付款',
                //     area:'广东广州'

                // }
            ],
            tArr:[],
            result:0,
            themeColor: '#EEEEEE',
            filterResult:"",
            guanbi:'',
            menuList:[  {
                        'title': '',
                        'detailTitle': '全部菜单',
                        'isSort':true,
                        'isMutiple': true,
                        'key': 'jobType',
                        'detailList': [
                            {
                                'title': '背景墙面装饰',
                                'value': '背景'
                            },
                            {
                                'title': '布艺',
                                'value': 'buyi'
                            },
                            {
                                'title': '皮艺',
                                'value': 'piyi'
                            },
                            {
                                'title': '工艺摆设',
                                'value': 'gongyi'
                            },
                              {
                                'title': '大件摆设品',
                                'value': 'dajian'
                            },
                              {
                                'title': '装饰画',
                                'value': 'zhuangshi'
                            },
                              {
                                'title': '灯',
                                'value': 'deng'
                            },
                             {
                                'title': '地板',
                                'value': 'diban'
                            },
                            {
                                'title': '花瓶',
                                'value': 'huaping'
                            }
                           
                        ]

                    }
            ],
            isShowTop:true,
            id:'',
            gid:'',
            isResult:true,
            itemid:'',
            testleft:0
        }
    },
    onLoad:function(option){
        // console.log(option.id)
        uni.showLoading({
            title:"加载中"
        })
        this.gid = option.gid
        this.$nextTick(()=>{
            this.result =  'id-'+option.gid
        })
        this.id = option.id
        uni.setNavigationBarTitle({
            title: option.title
        });
        this.$nextTick(()=>{
            this.itemid = 'id-'+this.gid
        })
    },
    onReady(){
        this.$nextTick(()=>{
            this.itemid = 'id-'+this.gid
        })
    },
    mounted(){
        var that = this
        let param ={
            shopid:this.id
        }
        this.$nextTick(()=>{
             this.itemid = 'id-'+ (this.gid*1-1)
             console.log(this.itemid)
        })
        
        
        api.getGoodsType(param).then(res=>{
            // console.log(res)
            this.tArr = res.data.data
            var arr = []
            var num = 0
            var index = 0
            // var abc = document.querySelector('.ui')
            // console.log(abc.offsetWidth)
            // var abc_width = abc.offsetWidth
            for(let i=0;i<this.tArr.length;i++){
                    var id = 'id-'+this.tArr[i].id
                    // console.log(id)
                    this.$nextTick(()=>{
                            var odom = document.querySelector('#id-'+this.tArr[i].id)
                            var odom1 = document.querySelector('.result123')
                            arr.push(odom.offsetWidth+14)  //所有元素宽度的数组
                        //    console.log(arr)
                            var id1 = odom1.id.split('id-')
                             var  n = id1[1]*1  //拿到天选之子的id对应的gid值来判断落脚位置
                              if(n == this.tArr[i].id){
                                // console.log(i)
                                  index = i  //拿到天选之子所对应的index  用来判断滑行的最终位置（也就是天选之子的位置）
                              }
                            // console.log(n)
                            // for(let j=0;j<n;j++){
                            //     console.log(arr[j])
                            //     num += arr[j]
                            //     // console.log(num)
                            // }
                            // // console.log(num)
                            // this.testleft = num
                            
                        //   console.log(odom.style)
                    })
                    
            }
            this.$nextTick(()=>{
                // console.log(index)
                for(let j=0;j<index;j++){
                    // console.log(arr[j])
                     num += arr[j]  //这里用索引值拿到子元素宽度总和，相加得到所需滑行长度
                    //  console.log(num)
                }
                // if(abc_width > num){
                //         console.log('可视区域大于滑动长度')
                // }
                // if(abc_width < num){
                //        console.log('可视区域小于滑动长度')
                      
                       
                // }
                    // console.log(num)
                    this.testleft = num //根据scroll-view 的 scroll-left 来动态修改初始位置

            })
            
        })
       
        //商品列表
         let params={
                    condition: this.gid,//查询条件
                    paratype: 3, //查询类型 1 按关键字查询 2 按品牌查询 3按商品类型查询 4 根据商品id 查询对应的相关商品
                    pageindex:1,
                    pagesize:20,
                    orderfield:'POPULAR',
                    ordertype:1
        }
        api.getGoodsList(params).then(res=>{
            // console.log(res.data.data.list)
            var a = res.data.data.list.length
            // console.log(a)
            if(a == 0){
                // console.log('wewq')
                  that.isResult = false
            }
            if(res.statusCode === 200){
                    if(res.data.status == 0){
                        // console.log(res.data.data.list)
                       that.list = res.data.data.list
                    //    console.log(this.list.length)
                       
                      
                    }else{
                        // console.log('暂无数据')
                        that.isResult = false
                    }
            }else{
                uni.showToast({
                    icon:"none",
                    title:'暂无数据，请刷新后重试',
                    duration:1500
                })
            }
        })
      this.$nextTick(()=>{
          this.itemid = 'id-'+this.gid
         
      })
        //   this.itemid = 'id-'+  this.gid
        //   console.log(this.itemid)
        uni.hideLoading()
    },
    onNavigationBarButtonTap (e){
        uni.navigateTo({
            url:'../softwaremall/searchshop'
        })
    },
    methods: {
        chioce(id,n){
             this.itemid = 'id-'+id
             if(id == this.gid){
                 this.gid = ''
             }
            
            this.result = id
            this.guanbi = false
            setTimeout(() => {
                this.guanbi = ''
            }, 100);
            // console.log(id)
             //商品列表
                let params={
                            condition: id,//查询条件
                            paratype: 3, //查询类型 1 按关键字查询 2 按品牌查询 3按商品类型查询 4 根据商品id 查询对应的相关商品
                            pageindex:1,
                            pagesize:20,
                            orderfield:'POPULAR',
                            ordertype:1
                }
                api.getGoodsList(params).then(res=>{
                    // console.log(res.data.data.list)
                      
                    if(res.statusCode === 200){
                            if(res.data.status == 0){
                                // console.log(res.data.data.list)
                          
                            var a = res.data.data.list.length
                                if(a>0){
                                    this.isResult  = true
                                      this.list = res.data.data.list
                                }else if(a == 0){
                                    this.isResult  = false
                                }
                            }else{
                                console.log('暂无数据')
                                this.isResult =false
                            }
                    }else{
                        uni.showToast({
                            icon:"none",
                            title:'暂无数据，请刷新后重试',
                            duration:1500
                        })
                    }
                })
                    
        },
        result1(val) {
                console.log('filter_result:' + JSON.stringify(val));
                this.filterResult = JSON.stringify(val, null, 2)
                this.isShowTop = !this.isShowTop
        },
        closeTop(a){
         
            this.isShowTop = !this.isShowTop
          
        },
        testClose(a){
           this.isShowTop = !this.isShowTop
        },
        goGoodsInfo(id){
            uni.navigateTo({
                url:'../../pages/detail/goodsinfo?itemid='+id
            })
        }
    
    },
}
</script>

<style lang="scss" scoped>
.ui{
    //   display: flex;
       width: 80%;
       height: 90upx;
        line-height: 75upx;
         color: #404040;
        font-size: 30upx;
        white-space: nowrap;

    text{
     
       margin: 0 15upx
    }
}
.test1{
         width: 70%;
        height: 90upx;
       
        
		background-color: #FFFFFF;
        color: #404040;
        font-size: 30upx;
        padding: 0 15upx;
        overflow: auto;
        white-space: nowrap;
        line-height: 75upx;
        display: flex;
       text{
            margin:  0 15upx
       }
        
}
.tset_title{
    width: 70%;
    height: 90upx;
    background-color: #FFFFFF;
    font-size:30upx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(64,64,64,1);
    line-height: 90upx;
    margin-left: 30upx
}
    .top_select{
        width: 70%;
        height: 90upx;
        border-bottom: #F7F7F7 1px solid;
		background-color: #FFFFFF;
        color: #404040;
        font-size: 30upx;
        padding: 0 15upx;
        display: flex;
        justify-content: space-around;
        align-items: center;
      
        .result{
            
             line-height:75upx;
            height: 90upx;
            text-align: center;
            color: #C17B7D;
           
        }
        .result:after{
            display: block;
            content: '';
            height:4upx;
            background:rgba(193,123,125,1);
            border-radius:2upx;
           
            
        }
        .result1{
             line-height:75upx;
           height:90upx;
            text-align: center;
        }
        .select{
            width: 1%;
            height: 50upx;
         
        }
    }
    .select_com{
         width:30%;
        
    }
    .main{
        width: 100%; 
        margin-top: 20upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
    .ui::-webkit-scrollbar {display:none}
        .result123{
            
    
         
            color: #C17B7D;
           
        }
        // .result123:after{
        //     display: block;
        //     content: '';
        //     height:4upx;
        //     background:rgba(193,123,125,1);

        // }
       .quexing{
           width: 100%;
           height: 500upx;
        
           display: flex;
           justify-content: flex-end;
           align-items: center;
           flex-direction: column;
           font-size: 20upx;
           .test_quexing{
               width: 200upx;
               height: 200upx;
               background-image: url('../../static/img/sendindex/notalk.png');
               background-repeat: no-repeat;
               background-size: contain;
           }
       }

</style>