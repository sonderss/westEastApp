<template>
    <view class="content">
        	<!-- <view class="isfix"> -->
        <sl-filter class="isfix" @list2="list2"  @list3='list3' :themeColor="themeColor" :menuList="menuList" @result="result" :independence='true'></sl-filter>

        	<!-- </view> -->
        <view class="main">
            <view class="main_item" style="margin:20upx" v-for="(item,index) in data" :key="index" @tap='goDeatil(2,item.id)'>
                 <view class="img_view">
                    <image style="" :src='item.pic' />
                </view>
                <view class="right_content">
                    <view class="title_content">
                        <text>{{item.title}}</text>
                        <view style="display:flex;margin-top:20upx;align-items: center;">
                            
                             <text style="font-size:20upx">服务区域：</text>
                            <view >
                                <text style="font-size:20upx;" v-for="(a,b) in item.pti" :key='b'  >{{a+`   &nbsp`}}</text>
                            </view>
                        </view>
                       
                        
                     </view>
                   
                     <view class="botm_content" >
                         
                         <text class="tag" v-for='(i,a) in item.tags' :key='a'>{{i}}</text>
                          
                     </view>
                </view>
                  <image style="width:38upx;height:38upx;margin-right:40upx;margin-top:8upx" src='../../static/img/cjq-about/yunshu/ph.jpg' />
            </view>
               
        </view>
        <!-- <view class="btm" v-if="!isNoN">
            已全部加载完毕啦
             
        </view> -->
           <view class="nonf" v-if="isNoN">
                <view  class="non">
                    <image style="width:100%;height:100%;display:block" src='../../static/img/cjq-about/mine_photo/wu.png' />
               </view>
               <text>暂时还没找到相关信息</text>
           </view>
              
       
    </view>
</template>

<script>
    import slFilter from '../../components/songlazy-sl-filter/sl-filter/sl-filter.vue'
    import api from '../../apis/transport/ctransport'
    export default {
        components: {
            slFilter
        },
        data() {
            return {
                data:[],
                isNoN:false,
                themeColor: '#EEEEEE',
                filterResult: '',
                menuList: [
                    {
                        'title': '广州市',
                        'key': 'single',
                        'isMutiple': false,
                        'detailTitle': '',
                        'detailList': [{
                                'title': '全部',
                                'value': ''
                            },
                            {
                                'title': '海珠区',
                                'value': 'test_1'
                            },
                            {
                                'title': '越秀区',
                                'value': 'test_2'
                            },
                            {
                                'title': '白云区',
                                'value': 'test_3'
                            },
                            {
                                'title': '荔湾区',
                                'value': 'test_4'
                            },
                            {
                                'title': '黄浦区',
                                'value': 'test_5'
                            },
                             {
                                'title': '番禺区',
                                'value': 'test_5'
                            },
                             {
                                'title': '天河区',
                                'value': 'test_5'
                            },
                             {
                                'title': '花都区',
                                'value': 'test_5'
                            },
                             {
                                'title': '南沙区',
                                'value': 'test_5'
                            },
                             {
                                'title': '从化',
                                'value': 'test_5'
                            },
                             {
                                'title': '增城',
                                'value': 'test_5'
                            }
                        ]
                    },
                    {
                        'title': '筛选',
                        'detailTitle': '服务类型',
                        'isSort':true,
                        'isMutiple': true,
                        'key': 'jobType',
                        'detailList': [
                            {
                                'title': '不限',
                                'value': 'uni-app'
                            },
                            {
                                'title': '货运',
                                'value': 'java'
                            },
                            {
                                'title': '搬家',
                                'value': 'web'
                            },
                            {
                                'title': '其他',
                                'value': 'Android'
                            }
                           
                        ]

                    },
                ]
            }
        },
        onLoad() {
            
        },
        mounted(){
          
            let param = {
                city:'广州市',
                servicearea:'',
                servicetype:'',
                cartype:'',
                pageindex:1,
                pagesize:20
            }
            api.getGoods(param).then(res=>{
                if(res.statusCode === 200){
                  console.log(res)
                    if(res.data.data === null){
                        this.isNoN = true
                        return false
                    }
                    if(res.data.data.list.length === 0){
                         this.isNoN = true
                        return false
                    }
                    this.isNoN = false
                    this.data = res.data.data.list
                    // console.log(this.data)\
                }else{
                    uni.showToast({
                        icon:'none',
                        title:'请检查您的网络信息',
                        duration: 2000
                    })
                }
            }).catch(err=>{
                    uni.showToast({
                        icon:'none',
                        title: err,
                        duration: 2000
                    });
            })

        },
        methods: {
            result(val) {
                // console.log('filter_result:' + JSON.stringify(val));
                var that = this
                that.filterResult = JSON.stringify(val, null, 2)
                // let param = {
                //     city:'广州',
                //     servicearea:that.filterResult,
                //     servicetype:'搬家',
                //     cartype:'小货车',
                //     pageindex:1,
                //     pagesize:20
                // }
                // api.getGoods(param).then(res=>{
                // if(res.statusCode === 200){
                // //    console.log(res.data.data.list)
                //    if(res.data.data.list.length === 0){
                //         that.isNoN = true
                //         return false
                //    }
                //    that.isNoN = false
                //    that.data = res.data.data.list
                // }
                // }).catch(err=>{
                //         uni.showToast({
                //             icon:'none',
                //             title: err,
                //             duration: 2000
                //         });
                // })
                    // console.log(that.filterResult)
            },
            goDeatil(index,id){
                // console.log(index)
                uni.navigateTo({
                    url:'../geomancy/business_details?id=' + id + '&type=' +  index
                })
            },
            list2(list2){
                this.data = []
                console.log(list2)
                if(list2 === false){
                      this.isNoN = true
                }
                if(list2.length > 0 && typeof(list2) === 'object'){
                        this.isNoN = false
                        this.data = list2
                }
            },
            list3(list3){
                 console.log(list3)
                this.data = []
                 if(list3 === false){
                      this.isNoN = true
                }
                if(list3.length > 0 && typeof(list3) === 'object'){
                        this.isNoN = false
                        this.data = list3
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.main{
    width: 100%;
    display: flex;
    justify-content: center;
flex-direction: column;
overflow: hidden;
margin-top: 100upx;
// position: absolute;
// top: 120upx;z-index: 500;

.main_item{
    width: 100%;
    height: 183upx;
  
   display: flex;

   
}
.img_view{
    width: 183upx;
    height: 183upx;
    float: left;
    image{
        width: 100%;
        height: 100%;
    }
}
.right_content{
    flex: 1;
     display: flex;
     
     flex-direction: column;
 justify-content: space-around;

    float: right;
  
    flex-direction: column;
    font-size:32upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(90,90,90,1);
    line-height:33upx;
   
    
    .botm_content{
        display: flex;
          margin-left:20upx ;
        .tag{
            width:127upx;
height:38upx;
background:rgba(255,241,241,1);
border-radius:10upx;
margin-right: 20upx;
text-align: center;
color: #B8696B;
font-size: 24upx;
line-height: 38upx
        }
    }
}
}    
.title_content{
    display: flex;
    flex-direction: column;
    margin-left:20upx 
}
.btm{
display: flex;
justify-content: center;
align-items: center;
height:30upx;
font-size:22upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(151,151,151,1);
margin-top: 50upx
}
.non{
    width:242upx;
    height:206upx;
}
.nonf{
    width: 100%;

    height: 100%;
   display: flex;

   margin-top: 30%;
   flex-direction: column;
   align-items: center;
   font-size: 20upx;
   text{
       margin-top: 20upx
   }
}
.isfix{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    
}
</style>