import request from '../request'
//获取商城类型
const getShopType = ()=>{
    let opts ={
        url:'/fapi/GoodManager/GetShopType'
    }
    return request.httpRequest(opts)
}
// //获取商品类型列表
const getGoodsType = (param)=>{
    let opts = {
        url:'/fapi/GoodManager/GetGoodsType'
    }
    return request.httpRequest(opts,param)
}
//获取热门关键词
const getHotKeys = ()=>{
    let opts ={
        url:'/fapi/GoodManager/GetPopularfind',
        method:'get'
    }
   return  request.httpRequest(opts)
}
//获取商品列表
const getGoodsList = (param)=>{
    let opts = {
        url:'/fapi/GoodManager/GetGoodsPageList',
        method:'get'
    }
    return request.httpRequest(opts,param)
}
//获取商品详情
const  getGoodsDeatil =(param)=>{
        let opts = {
            url:'/fapi/GoodManager/GetGoodsDetail',
            method:'get'
        }
        return request.httpRequest(opts,param)
}
//获取品牌详情
const pinp_detail = (param,that)=>{
    let opts = {
        url:'/fapi/GoodManager/GetGoodsBrandDetail',
        method:'get'
    }
    
    request.httpRequest(opts,param).then(res=>{
        console.log(res)
       if(res.statusCode === 200){
        uni.hideLoading();
           if(res.data.data === null){
                 uni.showToast({
                     icon:'loading',
                     title:'数据错误,请稍后再试',
                     duration:2000
                 })
                that.isNull = false
                return 
           }else if(res.data.status === 0){
                that.data = res.data.data
                that.guanzhu1 = that.data.isFollow
            }else{
                uni.showToast({
                    icon:'none',
                    title:'系统错误,请检查后再试',
                    duration:2000
                })
            }
       }else{
            uni.hideLoading();
            uni.showToast({
                icon:'none',
                title:'网络错误,请稍后再试',
                duration:2000
            })
       }
      
        
        
    })
}
export default {
    getHotKeys,
    getGoodsList,
    getGoodsDeatil,
    getShopType,
    getGoodsType,
    pinp_detail
}