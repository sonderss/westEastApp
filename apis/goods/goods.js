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
export default {
    getHotKeys,
    getGoodsList,
    getGoodsDeatil,
    getShopType,
    getGoodsType
}