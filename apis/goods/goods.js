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
//获取商品评论列表
const goodsPL = (param,that)=>{
    let opts = {
        url:'/fapi/GoodManager/GetCommentPageList',
        method:'get'
    }
    uni.showLoading({
        title:'加载中...'
    })
    request.httpRequest(opts,param).then(res=>{
        console.log(res.data.status)
        if(res.statusCode === 200){
            uni.hideLoading();
            if(res.data.status === 0 ){
                that.commentList.list = res.data.data.list
                that.commentList.list.filter(item=>{
                     if(item.isImg){
                        console.log(item)
                        that.commentList.category[1].number++
                     }
                })
                console.log(that.commentList.list)
            }
        }else{
            uni.showToast({
                title:'请求失败，请稍后重试',
                icon:'none',
                duration:2000
            })
        }

    })
}
//获取商品规格
const getGoods = function (param) {
    let opts  = {
        url:'/fapi/GoodManager/GetGoodsSkuBySpecifications',
        method:'get'
    }
    return request.httpRequest(opts,param)
}
///api/ShppingCart/AddGoodsShoppingCart 添加商品进购物车

const addCart = function (param) {
    let opts = {
        url:'/fapi/ShppingCart/AddGoodsShoppingCart',
        method:'post'
    }
    return request.httpTokenRequest(opts,param)
}
// /api/OrdersManager/CommitOrders  提交订单
const postGods = (param) => {
    let opts = {
        url:'/fapi/OrdersManager/CommitOrders',
        method:'post'
    }
    return request.httpTokenRequest(opts,param)
}
///api/OrdersManager/EnterOrders 确认订单
const enterOrders = (param) =>{
    let opts = {
        url:'/fapi/OrdersManager/EnterOrders',
        method:'post'
    }
    return request.httpTokenRequest(opts,param);
}
// /api/ShppingCart/GetShppinCartList 获取购物车列表
const getMyCart = () =>{
    let opst = {
        url:'/fapi/ShppingCart/GetShppinCartList',
        method:'get'
    }
    return request.httpTokenRequest(opst)
}
// /api/ShppingCart/AddGoodsUserCollection 添加商品进入收藏夹
const addCollection= (param)=>{
    let opts = {
        url:'/fapi/ShppingCart/AddGoodsUserCollection',
        method:'post'
    }
    return request.httpTokenRequest(opts,param)
}
// /api/ShppingCart/DeleteGoods 删除购物车商品
const deletGoods = (param)=>{
    let opts = {
        url:"/fapi/ShppingCart/DeleteGoods",
        method:'post'
    }
    return request.httpTokenRequest(opts,param)
}

export default {
    getHotKeys,
    getGoodsList,
    getGoodsDeatil,
    getShopType,
    getGoodsType,
    pinp_detail,
    goodsPL,
    getGoods,
    addCart,
    postGods,
    enterOrders,
    getMyCart,
    addCollection,
    deletGoods
}