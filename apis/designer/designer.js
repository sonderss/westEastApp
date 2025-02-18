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
                    that.isResult = true
                    // res.data.data.list.forEach(element => {
                    //     while(element.showPics.length != 2){
                    //         element.showPics.push('../../static/img/cjq-about/none.jpg')
                    //     }
                    // });
                    that.Clist = res.data.data.list
                    
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
    }).catch(err=>{
        that.isResult = false
        uni.showLoading({
            title:'网络错误'
        })
        setTimeout(()=>{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:'网络连接失败',
                duration:2000
            })
        },1500)
        
    })
}
//token获取设计公司数据/api/CompanyManager/GetCompanyDesignPageList
const designerCMtoken = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetCompanyDesignPageList',
        method:'get'
    }
    uni.showLoading({
        title:"加载中"
    })
    request.httpTokenRequest(opts,param).then(res=>{
        console.log('token:',res)
        if(res.statusCode === 200){
            uni.hideLoading()
            if(res.data.status === 0 && res.data.data.list.length != 0){
                    //渲染列表数据
                    that.isResult = true
                    // res.data.data.list.forEach(element => {
                    //     while(element.showPics.length != 2){
                    //         element.showPics.push('../../static/img/cjq-about/none.jpg')
                    //     }
                    // });
                    that.Clist = res.data.data.list
                    
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
    }).catch(err=>{
        that.isResult = false
        uni.showLoading({
            title:'网络错误'
        })
        setTimeout(()=>{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:'网络连接失败',
                duration:2000
            })
        },1500)
        
    })
}
////提交设计预约表单
const  designPT = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/SaveDesignAppointment',
        method:'post'
    }
    uni.showLoading({
        title:'正在提交'
    })
    request.httpTokenRequest(opts,param).then(res=>{
        if(res.statusCode === 200){
            uni.hideLoading()
            console.log(res)
            if(res.data.status === 0){
                uni.showToast({
                    icon:'none',
                    title:res.data.msg,
                    duration:2000
                })
        }else if(res.statusCode === 401){
                uni.hideLoading()
                uni.showToast({
                    icon:'none',
                    title:'未登录或登录失效，请重新登录',
                    duration:2000
                })
                setTimeout(()=>{
                    uni.navigateTo({
                        url:'../../pages/auth/login/login1'
                    })
                },2000)
                return
        }else{
                uni.showToast({
                    icon:'none',
                    title:'系统繁忙，请稍后再试',
                    duration:2000
                })
            }
        }else{
             uni.hideLoading()
             uni.showToast({
                icon:'none',
                title:'网络错误，请连接网络',
                duration:2000
            })
        }
    }).catch(err=>{
        uni.showToast({
            icon:'none',
            title:'您的网络已断开，请检查后重试',
            duration:2000
        })
        return
    })
}
//获取设计公司案例分页数据 /api/CompanyManager/GetDesignCasePageList
const getDesignData = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetDesignCasePageList',
        method:'get'
    }
    request.httpRequest(opts,param).then(res=>{
        if(res.statusCode === 200){
            console.log(res)
            uni.hideLoading()
            if(res.data.status === 0){
                // that.datalist = res.data.data.list
                var desc = ''
                var desc1 = ''
                var img = ''
                var workId = ''
                var obj = {}
                res.data.data.list.forEach(item=>{
                    obj={
                        desc :item.area+'㎡'+' '+item.title,
                        desc1 : item.area+'㎡'+' '+item.spaceType+' '+item.styleType,
                        img : item.showPic,
                        workId:item.id
                    }
                    that.datalist.push(obj)
                    console.log(that.datalist)
                })
            }else{
                uni.showToast({
                    icon:'none',
                    title:'数据加载失败，请稍后重试',
                    duration:2000
                })
                return
            }
        }else{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:"网络失败，请检查网络后再试",
                duration:2000
            })
            return
        }
    }).catch(err=>{
        that.isNull = false
        setTimeout(()=>{
            uni.hideLoading()
        },1500)
        setTimeout(()=>{
            uni.showToast({
                icon:'none',
                title:"网络失败，请检查网络后再试",
                duration:2000
            })
        },1600)
        return 
    })
}
///api/CompanyManager/SaveDesignCompanyFollwData 设计公司 关注 或者 取消关注
const designGZ = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/SaveDesignCompanyFollwData',
        method:'post'
    }
   return request.httpTokenRequest(opts,param)
}
///api/CompanyManager/GetServerInstruct  获取服务须知内容
const getServerTxt = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/GetServerInstruct',
        method:'get'
    }
    uni.showLoading({
        title:"加载中"
    })
    request.httpRequest(opts,param).then(res=>{
       
        if(res.statusCode === 200){
            uni.hideLoading()
            if(res.data.status === 0){
                 var abc =  res.data.data.extendField.replace(/\r\n/g,'<br />')
                 console.log(abc)
                that.data =  abc
                console.log(res.data.data)
            }else{
                uni.showToast({
                    icon:"none",
                    title:"数据加载失败，请稍后重试",
                    duration:2000
                })

                return
            }
        }else{
            uni.hideLoading()
            uni.showToast({
                icon:'none',
                title:'网络连接失败，请稍后重试',
                duration:2000
            })
            return 
        }
    })
}
///api/CompanyManager/SaveTrimAppointment 保存装修公司预约记录
const  renovationPost = (param,that)=>{
    let opts  = {
        url:"/fapi/CompanyManager/SaveTrimAppointment",
        method:'post'
    }
    return request.httpTokenRequest(opts,param)
    
}
///api/CompanyManager/SaveBuildAppointment 保存建筑公司预约记录
const architecturePost = (param,that)=>{
    let opts = {
        url:'/fapi/CompanyManager/SaveBuildAppointment',
        method:'post'
    }
   return request.httpTokenRequest(opts,param)
}
// /api/CompanyManager/SaveBuildCompanyCollectionData  建筑公司 收藏 或者 取消 收藏
const collectionSetData = (param,that)=>{
    let opts = {
        url:"/fapi/CompanyManager/SaveBuildCompanyCollectionData",
        method:'post'
    }
    return request.httpTokenRequest(opts,param)
}
export default {
    designerType,
    designerKType,
    designerCM,
    designPT,
    getDesignData,
    designGZ,
    getServerTxt,
    renovationPost,//装修公司预约
    architecturePost,//建筑公司预约
    collectionSetData,
    designerCMtoken
}