import request from '../request'
//获取风格类型
const designerType = (that)=>{
    let opts = {
        url:"/fapi/CompanyManager/GetStyleType",
        method:'get'
    }
    request.httpRequest(opts).then(res=>{
        if(res.statusCode === 200){
            if(res.data.status != 0){
               uni.showToast({
                   icon:'none',
                   title:'获取风格类型数据失败',
                   duration:1000
               })
            }else{
                res.data.data.unshift({title:'全部',value:'全部'})
                that.menuList[3].detailList = res.data.data
            }
        }else{
            uni.showToast({
                icon:'none',
                title:'网络连接错误，请检查后再试',
                duration:2000
            })
            return
        }
    })
}
//获取空间类型/api/CompanyManager/GetSpaceType
const designerKType = (that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetSpaceType',
        method:'get'
    }
    request.httpRequest(opts).then(res=>{
        if(res.statusCode === 200){
            if(res.data.status != 0){
               
            }else{
                res.data.data.unshift({title:'全部',value:'全部'})
                that.menuList[1].detailList = res.data.data
            }
        }else{
            return
        }

    })
}
//获取设计公司数据/api/CompanyManager/GetCompanyDesignPageList
const designerCM = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetCompanyDesignPageList',
        method:'get'
    }
    uni.showLoading({
        title:"加载中"
    })
    request.httpRequest(opts,param).then(res=>{
        console.log(res)
        if(res.statusCode === 200){
            uni.hideLoading()
            if(res.data.status === 0 && res.data.data.list.length != 0){
                    //渲染列表数据
            }else{
                uni.showToast({
                    icon:'none',
                    title:'数据查询失败,请稍后再试',
                    duration:2000
                })
                //这里显示数据缺失页
                that.isResult = false
            }
        }else{
            uni.hideLoading()
            that.isResult = false
            return
        }
    })
}
//保存设计公司预约记录
const  designPT = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/SaveDesignAppointment',
        method:'post'
    }
    request.httpRequest(opts,param).then(res=>{
        console.log(res)
    })
}
export default {
    designerType,
    designerKType,
    designerCM,
    designPT
}