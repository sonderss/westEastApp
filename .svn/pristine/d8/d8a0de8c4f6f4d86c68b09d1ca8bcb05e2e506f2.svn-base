<template>
<view class="content_main_view">
    <!-- 顶部选择 -->
    <view class="top_view">
        <text>开具发票</text>
        <switch @change="change"	 color='rgba(0, 182, 0, 1)' class="right_" checked />
    </view>
    <view v-if="isIncoice">
        <!-- 内容 -->
        <view class="content">
            <text class="chioce left">发票选项</text>
            <view class="btn left" v-for="item in incoi" :key="item">{{item}}</view>
            <text class="desc left">电子发票即电子增值税发票，是税局认可的有效凭证，其法律效力、基本用途 及使用规定同纸质发票。</text>
        </view>
        <!-- taitou -->
        <view class="invioce_tt">
            <text class="invioce_text left">发票抬头</text>
            <view class="chioce_btn left">
                <view :class="sigle ? 'btn1' :'btn2'"  @tap='sigle1()'>个人</view>
                <view :class="sigle ? 'btn2' :'btn1'"  @tap='sigle1()'>公司</view>
            </view>
        </view>
        <!-- dibu -->
        <view class="btm_view">
                <view class="invoiceType invoiceInfoBox">
                        <view class="title" style="font-size:30upx;font-family:PingFang SC;font-weight:400;color:rgba(57,57,57,1);"><text>发票信息</text></view>
                    
                        <view class="infoInput">
                            <view class="info uni-flex">
                                <text class="cjq_text" >发票抬头</text>
                                <input type="text" v-model.trim='rice' placeholder="请输入抬头名称" />
                            </view>
                            <view class="info uni-flex">
                                <text class="cjq_text" >发票内容</text>
                                <input type="text" v-model.trim='cont' placeholder="商品明细" />
                            </view>
                            <view class="info uni-flex">
                                <text class="cjq_text" >手机号码</text>
                                <input type="number" v-model.trim='phone'  placeholder="请输入手机号码" />
                            </view>
                            <view class="info uni-flex" v-if="sigle?false:true">
                                <text class="cjq_text">纳税人识别号</text>
                                <input type="text"  v-model.trim='code' placeholder="请输入纳税人识别号或统一社会信用代码" />
                            </view>
                            <view class="info uni-flex">
                                <!-- <view  class="cjq_text"> -->
                                    <text>邮&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp箱</text>
                                <!-- </view> -->
                                <input type="text"  v-model.trim='email'  placeholder="用于接收电子发票" />
                            </view>
                        </view>
                </view>
                <view class="desc_icc" >
                    <text >1、应国家税务总局要求，子2017年7月1日起，开具公司抬头的增值普通发票，需提交纳税人识别号或统一社会信用代码；</text>
                      <text>2、发票内容暂不支持更改 </text>
                                
                   
                </view>
    </view>
</view>
</view>
</template>

<script>
import util from '../../common/util'
export default {
    data(){
        return{
            rice:'',
            cont:'',
            email:'',
            phone:'',
            code:"",
            sigle:true,
            isIncoice:true,
            incoi:['电子普通发票'],
            obj:{}
        }
    },
    computed:{

    },
    onNavigationBarButtonTap (){
         if(!this.isIncoice){
                let pages = getCurrentPages();
					let nowPage = pages[ pages.length - 1]; 
					let prevPage = pages[ pages.length - 2 ];  
                    prevPage.$vm.isbill = 0; //不开发票
                    uni.navigateBack({  
                        delta: 1
                    });
             return
         }
         //个人  
         if(this.sigle){
                if( util.is_empty(this.rice) && util.is_empty(this.cont) && util.is_empty(this.email) && util.is_empty(this.phone)) {
                    uni.showToast({
                        icon:'none',
                        title:'内容不能为空',
                        duration:2000
                    })
                    return
                }else{
                    if( !util.is_phone(this.phone) ){
                        uni.showToast({
                            icon:'none',
                            title:'手机号码不正确',
                            duration:2000
                        })
                        return
                    }
                    if(!util.isEmail(this.email)){
                        uni.showToast({
                            icon:'none',
                            title:'邮箱格式不正确',
                            duration:2000
                        })
                        return
                    }
                     this.obj.rice = this.rice
                     this.obj.cont = this.cont
                     this.obj.email = this.email
                     this.obj.phone = this.phone
                     let pages = getCurrentPages();
					let nowPage = pages[ pages.length - 1]; 
					let prevPage = pages[ pages.length - 2 ];  
                    prevPage.$vm.isbill = 1; //个人发票
                    uni.navigateBack({  
                        delta: 1
                    });
                }
         }else{
                if( util.is_empty(this.rice) && util.is_empty(this.cont) && util.is_empty(this.email) && util.is_empty(this.phone) && util.is_empty(this.code)) {
                    uni.showToast({
                        icon:'none',
                        title:'内容不能为空',
                        duration:2000
                    })
                    return
                }else{
                    if( !util.is_phone(this.phone) ){
                        uni.showToast({
                            icon:'none',
                            title:'手机号码不正确',
                            duration:2000
                        })
                        return
                    }
                    if(!util.isEmail(this.email)){
                        uni.showToast({
                            icon:'none',
                            title:'邮箱格式不正确',
                            duration:2000
                        })
                        
                        return
                    }
                     this.obj.rice = this.rice
                     this.obj.cont = this.cont
                     this.obj.email = this.email
                     this.obj.phone = this.phone
                     this.obj.code = this.code
                    let pages = getCurrentPages();
					let nowPage = pages[ pages.length - 1]; 
					let prevPage = pages[ pages.length - 2 ];  
                    prevPage.$vm.isbill = 2; //公司发票
                    uni.navigateBack({  
                        delta: 1
                    });
                }
         }

    },
    methods:{
        change(e){
            if(e.detail.value){
                this.isIncoice = true
            }else{
                this.isIncoice = false
            }
        },
        sigle1(){
            this.sigle = !this.sigle
        }
    }
}
</script>
<style lang="scss" scoped>
.content_main_view{
    overflow: hidden;
}
.top_view{
    width:750upx;
    height:120upx;
    background:rgba(255,255,255,1);
    border-top: 5upx solid #F1F1F1;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    text{
        font-size:30upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-left: 40upx;
        margin-left: 30upx
    }
}
.right_{
transform:scale(0.6);
margin-right: 20upx
}
.content{
width:100%;
height:278upx;
background:rgba(255,255,255,1);
// background: #f00;
border-top: 10upx solid #F1F1F1;
border-bottom: 10upx solid #F1F1F1;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center
}
.btn{
    width:207upx;
height:61upx;
background:rgba(255,255,255,1);
border:1upx solid rgba(193,123,125,1);
border-radius:20upx;

font-size:26upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(193,123,125,1);
text-align: center;
line-height: 61upx
}
.chioce{
font-size:30upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(57,57,57,1);
margin-top: 20upx ;
margin-bottom: 20upx
}
.desc{

font-size:20upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(132,132,132,1);
line-height:30upx;
margin-top: 20upx;
padding-right: 20upx;
}
.left{
    margin-left: 30upx
}
.invioce_tt{
    width:100%;
height:200upx;
background:rgba(255,255,255,1);

border-bottom: 10upx solid #F1F1F1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around
}
.invioce_text{
font-size:30upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(57,57,57,1);
}
.chioce_btn{
width:280upx;
display: flex;
justify-content: space-between;
    .btn1{
        width:119upx;
    height:57upx;
    background:rgba(255,255,255,1);
    border:1upx solid rgba(193,123,125,1);
    border-radius:20upx;
    font-size:26upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(193,123,125,1);
    text-align: center;
    line-height: 57upx
    }
}
.btm_view{
    width: 100%;

}
.invoiceType{height:197upx;background:#fff;padding:0 46upx 0 28upx;}
.invoiceInfoBox{height:auto;}
	.infoInput{padding-bottom:20upx;}
	.infoInput .info{margin-top:20upx;align-items:center;font-size:24upx;color:#4e4e4e;height:64upx;}
	.infoInput .info text{width:142upx;height:64upx;line-height:64upx;display:inline-block;}
.infoInput .info input{flex:1;font-size:24upx;color:#4e4e4e;height:64upx;line-height:64upx;margin-left: 30upx}
.desc_icc{
width:100%;
font-size:20upx;
font-family:PingFang SC;
font-weight:400;
color:rgba(156,156,156,1);
padding-left: 28upx;
padding-right: 80upx;
line-height:35upx;
margin-bottom: 40upx;
display: flex;
flex-direction: column;
justify-content: flex-start;
}
.btn2{
      width:119upx;
    height:57upx;
    background:rgba(255,255,255,1);
    border:1upx solid rgba(98, 98, 98, 1);
    border-radius:20upx;
    font-size:26upx;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(98, 98, 98, 1);
    text-align: center;
    line-height: 57upx
}
</style>