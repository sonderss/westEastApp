
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

// ---------------------------------装修公司--------------------------------

// 装修公司详情
const getTrimCompanyDetail = (param)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetTrimCompanyDetail',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

// 建筑公司详情
const getBuildCompanyDetail = (param)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetBuildCompanyDetail',
        method:'get'
    }
    return request.httpRequest(opts,param)
}

const getTrimCompanyIntroduce = (param)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetTrimCompanyIntroduce',
        method:'get'
    }
    return request.httpRequest(opts,param)
}
///api/CompanyManager/GetBuildCasePageList 获取建筑公司案例分页数据
const getArchitectureWorks = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetBuildCasePageList',
        method:'get'
    }
    
    request.httpRequest(opts,param).then(res=>{
    
        if(res.statusCode === 200){
            console.log(res)
            if(res.data.status === 0){
                // that.datalist = res.data.data.list
                if(res.data.data.list.length != 0){
                    var desc = ''
                    var desc1 = ''
                    var img = ''
                    var workId = ''
                    var obj = {}
                    res.data.data.list.forEach(item=>{
                        obj={
                            desc :item.area+'㎡'+' '+item.title,
                            desc1 : item.area+'㎡'+' '+item.buildType,
                            img : item.showPic,
                            workId:item.id
                        }
                        that.datalist.push(obj)
                         setTimeout(() => {
                             // console.log('0101')
                            uni.hideLoading()
                            that.showPage = false
                         }, 500);
                            
                       
                    })
                }else{
                    uni.hideLoading()
                    that.showPage =true
                    uni.showToast({
                        icon:'none',
                        title:'暂无案例数据',
                        duration:2000
                    })
                    return
                }
                
            }else{
                uni.hideLoading()
                that.showPage =true
                uni.showToast({
                    icon:'none',
                    title:'数据加载失败，请稍后重试',
                    duration:2000
                })
                return
            }
        }else{
            uni.hideLoading()
            that.showPage =true
            uni.showLoading({
                title:'系统繁忙'
            })
            // uni.hideLoading()
            // uni.showToast({
            //     icon:'none',
            //     title:"系统繁忙，请稍后再试",
            //     duration:2000
            // })
            return
        }
    }).catch(err=>{
        uni.hideLoading()
        that.showPage =true
        uni.showLoading({
            title:'加载中'
        })
        setTimeout(()=>{
            uni.hideLoading()
            uni.showToast({
                icon:"您的网络未连接，请先连接",
                duration:2000
            })
            return
        },1500)
    })
}
// /api/CompanyManager/GetTrimCasePageList  获取装修公司案例分页数据
const getTrimCasePageList=(param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetTrimCasePageList',
        method:'get'
    }
    request.httpRequest(opts,param).then(res=>{
        // console.log(res)
        if(res.statusCode === 200){
            // console.log(res)
            
            if(res.data.status === 0){

                // that.datalist = res.data.data.list
                if(res.data.data.list.length != 0){
                    var desc = ''
                    var desc1 = ''
                    var img = ''
                    var workId = ''
                    var obj = {}
                    res.data.data.list.forEach(item=>{
                        console.log(1)
                        obj={
                            desc :item.area+'㎡'+' '+item.title,
                            desc1 : item.area+'㎡'+' '+item.houseType+' '+item.styleType,
                            img : item.showPic,
                            workId:item.id
                        }
                        that.datalist.push(obj)
                        setTimeout(() => {
                            uni.hideLoading()
                            that.showPage = false
                        }, 500);
                    })
                }else{
                    uni.hideLoading()
                    that.showPage =true
                    uni.showToast({
                        icon:'none',
                        title:'暂无案例数据',
                        duration:2000
                    })
                }
               
            }else{
                uni.hideLoading()
                that.showPage =true
                uni.showToast({
                    icon:'none',
                    title:'数据加载失败，请稍后重试',
                    duration:2000
                })
                return
            }
        }else{
            uni.hideLoading()
            that.showPage =true
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:"网络失败，请检查网络后再试",
                duration:2000
            })
            return
        }
    })
}
export default {
    getFengShuiHome,
	getByArticleIdListData,
	getFengShuiType,
	getArticleType,
	getDataDateils,
	getTrimCompanyDetail,
	getBuildCompanyDetail,
    getTrimCompanyIntroduce,
    getArchitectureWorks,
    getTrimCasePageList
}