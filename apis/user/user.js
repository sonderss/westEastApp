import request from '../request'
//获取用户信息
const getUserInfo = ()=>{
    let opts = {
        url:'/fapi/UserManage/GetUserInfo',
        method:'get'
    }
    request.httpTokenRequest(opts).then(res=>{
        console.log(res)
       
    })
}

export default {
    getUserInfo
}