<template>
    <view>
          <view class='add' @tap='add'></view>
        <cirl :list='item' :isShowKey='isShowKey' @newData='newData'></cirl>
        
        <person  :isMy='false' :list="isJ?bestData:test" @dianzan='isdianzan' @isGoMine='isGoMine'></person>
      
        <view class="btm_last"></view>
      
    </view>
</template>

<script>
let data1 = require('../../components/Community/data_cjq.json')
import cirl from '../../components/Community/circle'
import person from '../../components/Community/person'
import  uapi from '../../apis/user/user'
export default {
    components:{cirl,person},
    data(){
        return{
            test:[],
            // isP:Number,
            isShowKey:true,
            item:{},
            way:Number,
            id:'',
            bestData:[],
            isJ:false
        }
    },
    onLoad:function(option){
			// console.log(option);
        // console.log(option.txt)
        // this.isP = option.isP
        // console.log(option.title)
        /**
         * 该页面提供两种功能 -》 话题  -》 圈子  
         *  用key关键词对两种功能做区分 并且改变数据请求的方式参数  way
         */
        if(option.key == '0'){
            //话题 
            this.way = 2
            this.isShowKey = true
        }else{
            //圈子
             this.way = 1
             this.isShowKey =false
        }
        //头部数据
        this.item = option.item
        this.id = JSON.parse(option.item).id
        // this.title = option.title
        // this.ptitle = option.ptitle
        // this.isShowKey = option.isShowKey
        // console.log(this.title)
    },
    mounted() {
        // this.test = data1
         let param = {
            id:this.id,
            way:this.way,
            isbase:0,
            pageindex:1,
            pagesize:20
        }
        uapi.GetCircleArticlePageList(param).then(res=>{
            console.log(res)
            if(res.statusCode === 200){
                    uni.hideLoading()
                    if(res.data.status == 0){
                       this.test = res.data.data.list
                       this.test.forEach(element => {
                            element.createSpace = element.createSpace.split('-')
                            element.createSpace = element.createSpace[0]+ '年' + element.createSpace[1]+ '月'+element.createSpace[2]+'日'
                            // console.log(element.createSpace)
                       });
                    }
                    return
                }else if(res.statusCode == 401){
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"未登录或登录已过期",
                        duration:2000
                    })
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'../auth/login/login1'
                        })
                    },2000)
                    return
                }else{
                    uni.hideLoading()
                    uni.showToast({
                        icon:"none",
                        title:"系统错误，请稍后重试",
                        duration:2000
                    })
                    return
                }
            }).catch(err=>{
                uni.hideLoading()
                uni.showToast({
                    icon:"none",
                    title:"网络未连接",
                    duration:2000
                })
                return  
            })
        
    },
    watch: {
        // isP:function(a,b){
        //     a = parseInt(a)
        //     console.log(a)
        //    if(a === 1){
        //     //    this.title = '#烟花计划有奖征集#'
        //     //    this.ptitle = '12354 围观'
        //     //    this.isShowKey = true
        //    }
        // }
    },
    methods: {
        isdianzan(index){
            // console.log(index)
            // this.test[index].isFollow = ! this.test[index].isFollow 
            if(this.test[index].isFollow){
                this.test[index].giveCount --
                if(this.test[index].giveCount == 0){
                    this.test[index].giveCount = 0
                }
                this.test[index].isFollow = false
            }else{
                this.test[index].giveCount ++
                this.test[index].isFollow = true
            }
        },
        isGoMine(isGomine){
            if(isGomine === 0){
                var num = Math.floor(Math.random()*2-1)+1
                uni.navigateTo({
                        url: '../../pages/cjq_testpages/mine?name='+this.nickname+'&isMy='+num
                });
            }
        },
        add(){
            uni.navigateTo({
                url:'../../pages/community/write_post/write_post'
            })
        },
        newData(e){
            // console.log(e)
            if(e == 0){
                // console.log('最新')
                this.isJ = false
            }else{
                // console.log('精选')
                this.test.map((item,index)=>{
                    if(item.isBest){
                        this.bestData.push(item)
                    }
                })
                this.isJ = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .btm_last{
        width: 100%;
        height: 100upx;

    }
  .add{
        width: 89upx;
        height: 89upx;
        background: #C17B7D;
        border-radius: 50%;
        z-index: 9999;
        position: fixed;
        right: 30upx;
        bottom: 200upx;
        background-image: url('../../static/img/cjq-about/mine_photo/add.png');
        background-repeat: no-repeat;
        background-position: 24upx
        
    }
</style>