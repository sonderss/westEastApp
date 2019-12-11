import request from '../request'
//验收监理/api/CheckAccep/GetListData
const getCheckData = (area)=>{
    let opts = {
        url:'/fapi/CheckAccep/GetListData',
        method:'get'
    }
    let params = {
        city:'广州',
        servicearea:area,
        pageindex:1,
        pagesize:20
    }
    return request.httpRequest(opts,params)
}
///api/CleanRepair/GetListData  获取清洁维修列表
const getCleanData = (area)=>{
    let opts = {
        url:'/fapi/CleanRepair/GetListData',
        method:'get'
    }
    let params = {
        city:'广州',
        servicearea:area,
        pageindex:1,
        pagesize:20
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
export default { 	
  getCheckData,
  getCleanData,
  GetCompanyTrimPageList,
  GetCompanyBuildPageList,
  GetHouseType,
  GetStyleType,
  GetBuildType,
  GetTrimCompanyIntroduce,
  GetBuildCompanyIntroduce
}