import request from '../request'
//验收监理/api/CheckAccep/GetListData
const getCheckData = (params)=>{
    let opts = {
        url:'/fapi/CheckAccep/GetListData',
        method:'get'
    }
   
    return request.httpRequest(opts,params)
}

const FileManager = (params)=>{
    let opts = {
        url:'/api/FileManager/form',
        method:'post'
    }
    return request.httpRequest(opts,params)
}

///api/CleanRepair/GetListData  获取清洁维修列表
const getCleanData = (params)=>{
    let opts = {
        url:'/fapi/CleanRepair/GetListData',
        method:'get'
    }
    return request.httpRequest(opts,params)
}
//装修公司首页
const GetCompanyTrimPageList = (params)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetCompanyTrimPageList',
        method:'get'
    }
    return request.httpRequest(opts,params)
}
//建筑公司首页
const GetCompanyBuildPageList = (params)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetCompanyBuildPageList',
        method:'get'
    }
    return request.httpRequest(opts,params)
}
//获取房型类型
const GetHouseType = ()=>{
    let opts = {
        url:'/fapi/CompanyManager/GetHouseType',
        method:'get'
    }
    return request.httpRequest(opts)
}
//获取风格类型
const GetStyleType = ()=>{
    let opts = {
        url:'/fapi/CompanyManager/GetStyleType',
        method:'get'
    }
    return request.httpRequest(opts)
}
//获取建筑类型
const GetBuildType = ()=>{
    let opts = {
        url:'/fapi/CompanyManager/GetBuildType',
        method:'get'
    }
    return request.httpRequest(opts)
}
//获取装修公司介绍
const GetTrimCompanyIntroduce = (params)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetTrimCompanyIntroduce',
        method:'get'
    }
    return request.httpRequest(opts,params)
}
//获取建筑公司介绍
const GetBuildCompanyIntroduce = (params)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetBuildCompanyIntroduce',
        method:'get'
    }
    return request.httpRequest(opts,params)
}
//未申请售后订单
const GetUserNoSaleAfterGoods = (params)=>{
    let opts = {
        url:'/fapi/GoodSaleAfter/GetUserNoSaleAfterGoods',
        method:'get'
    }   
    return request.httpTokenRequest(opts,params)
}
//已申请售后订单
const GetUserCommentGoods = (params)=>{
    let opts = {
        url:'/fapi/GoodSaleAfter/GetUserCommentGoods',
        method:'get'
    }   
    return request.httpTokenRequest(opts,params)
}

//获取售后记录详情
const GetAfterSaleDetail = (params)=>{
    let opts = {
        url:'/fapi/GoodSaleAfter/GetAfterSaleDetail',
        method:'get'
    }   
    return request.httpTokenRequest(opts,params)
}
//售后原因
const GetSaleAfterApplyCause = ()=>{
    let opts = {
        url:'/fapi/GoodSaleAfter/GetSaleAfterApplyCause',
        method:'get'
    }   
    return request.httpTokenRequest(opts)
}
//售后类型
const GetSaleAfterType = ()=>{
    let opts = {
        url:'/fapi/GoodSaleAfter/GetSaleAfterType',
        method:'get'
    }   
    return request.httpTokenRequest(opts)
}
//提交售后申请
const CommitSaleAfterGoods = (params)=>{
    let opts = {
        url:'/fapi/GoodSaleAfter/CommitSaleAfterGoods',
        method:'post'
    }   
    return request.httpTokenRequest(opts,params)
}
export default { 	
  getCheckData,
  getCleanData,
  GetCompanyTrimPageList,
  GetCompanyBuildPageList,
  GetHouseType,
  GetStyleType,
  GetBuildType,
  GetTrimCompanyIntroduce,
  GetBuildCompanyIntroduce,
  GetUserNoSaleAfterGoods,
  GetUserCommentGoods,
  GetAfterSaleDetail,
  GetSaleAfterApplyCause,
  GetSaleAfterType,
  CommitSaleAfterGoods
}