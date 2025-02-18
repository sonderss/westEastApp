import request from '../request'

//获取货物运输列表
const getGoods = (param) => {
	let opts = {
		url: '/fapi/Transport/GetListData',
		method: 'get'
	}

	return request.httpRequest(opts, param)
}

// /api/Transport/GetDataDateils 获取货物运输详情 
const getGsDetail = (param) => {
	let opts = {
		url: '/fapi/Transport/GetDataDateils',
		method: 'get'
	}
	return request.httpRequest(opts, param)
}

const getDataDateils = (param) => {
	let opts = {
		url: '/fapi/CleanRepair/GetDataDateils',
		method: 'get'
	}
	return request.httpRequest(opts, param)
}

// 获取验收监理详情
const getYSDataDateils = (param) => {
	let opts = {
		url: '/fapi/CheckAccep/GetDataDateils',
		method: 'get'
	}
	return request.httpRequest(opts, param)
}

// 获取清洁维修详情
const getQJDataDateils = (param) => {
	let opts = {
		url: '/fapi/CleanRepair/GetDataDateils',
		method: 'get'
	}
	return request.httpRequest(opts, param)
}

export default {
	getGoods,
	getGsDetail,
	getDataDateils,
	getYSDataDateils,
	getQJDataDateils
}

