import request from '../request'

//获取货物运输列表
const getGoods = (param)=>{
   let opts ={
       url:'/fapi/Transport/GetListData',
       method:'get'
   }
   
  return  request.httpRequest(opts,param)
}

// /api/Transport/GetDataDateils 获取货物运输详情 
const getGsDetail = (param)=>{
    let opts = {
        url:'/fapi/Transport/GetDataDateils',
        method:'get'
    }
    return request.httpRequest(opts,param)
}
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
export default {
    getGoods,
	getCheckData,
    getGsDetail,
    getCleanData
}