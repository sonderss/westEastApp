import request from '../request'

//获取商品规格
const getGoods = function (param) {
    let opts  = {
        url:'/fapi/GoodManager/GetGoodsSkuBySpecifications',
        method:'get'
    }
    request.httpRequest(opts,param).then(res=>{
        console.log(res)
    })
}
export default {
    getGoods
}