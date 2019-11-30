
import request from '../request'

// ---------------------------------家居风水--------------------------------

//获取所有类型风水家居文章
const getFengShuiHome = (param)=>{
    let opts = {
        url:'/fapi/FengShuiHome/GetAllTypeListData',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

// 按文章类型获取风水家居文章
const getByArticleIdListData = (param)=>{
    let opts = {
        url:'/fapi/FengShuiHome/GetByArticleIdListData',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

// 获取家居类型
const getFengShuiType = (param)=>{
    let opts = {
        url:'/fapi/FengShuiHome/GetFengShuiType',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

// 获取文章类型
const getArticleType = (param)=>{
    let opts = {
        url:'/fapi/FengShuiHome/GetArticleType',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

// 获取风水家居文章详情

const getDataDateils = (param)=>{
    let opts = {
        url:'/fapi/FengShuiHome/GetDataDateils',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

export default {
    getFengShuiHome,
	getByArticleIdListData,
	getFengShuiType,
	getArticleType,
	getDataDateils
}