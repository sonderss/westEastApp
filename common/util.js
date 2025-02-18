let help = (function () {
	var $ = function () {};
	$.log = function (type, info) {
		if (!info) {
			//console.log(JSON.stringify(type));
		} else {
			//console.log(type + JSON.stringify(info));
		}
	};

	$.load = function (name, type) {
		// return !type ? JSON.parse(uni.getStorageSync(name)) : uni.getStorageSync(name);
		return uni.getStorageSync(name);
	}

	$.save = function (name, value, type) {
		type=true
		!type ? (
			uni.setStorage({
				key: name,
				data: JSON.stringify(value),
				success: function () {
					console.log('success');
				}
			})
		) : (
			uni.setStorage({
				key: name,
				data: value,
				success: function () {
					console.log('success');
				}
			})
		)
	}

	$.remove = function (name) {
		uni.removeStorage({
			key: name,
			success: function (res) {
				// console.log('success');
			}
		});
	}

	// 确认框
	$.confirm = function (message, callback, title, buttons) {

		buttons = buttons || ['确认', '取消'];
		title = title || '提示';

		var call = [];

		if (typeof callback == 'function') {
			call.push(callback);
			call.push('');
		} else {
			call = callback;
		}
		
		uni.showModal({
		    title: title,
		    content: message,
			cancelText:buttons[1],
			confirmText:buttons[0],
		    success: function (res) {
		        if (res.confirm) {
					callback()
		        } else if (res.cancel) {
		        }
		    }
		});
	}

	$.toast = function (text) {
		uni.showToast({
			title: text,
			duration: 2000
		});
	}

	return $;

})();

let strtodate = function(time) {
	return new Date(parseInt(time) * 1000).toLocaleString('chinese', {
		hour12: false
	}).replace(/年|月/g, "-").replace(/日/g, " ").replace(/上午|下午| GMT /g, "").replace(/\//g, "-");
}


let beforeTime = function(time) {
	time = time.replace(/-/g, "/", time);
	var timestamp1 = Date.now(); //1554291380422
	var timestamp2 = new Date(time).getTime(); //1554291380422  
	var cha = parseInt((timestamp1 - timestamp2) / 1000); //相差的秒数
	var beforeTime = '刚刚';
	if (cha < 30) {
		beforeTime = '刚刚';
	} else if (cha < 3600) {
		beforeTime = parseInt(cha / (60)) + '分钟前';
	} else if (cha < 3600 * 24) {
		beforeTime = parseInt(cha / (3600)) + '小时前';
	} else if (cha < 3600 * 24 * 30) {
		beforeTime = parseInt(cha / (3600 * 24)) + '天前';
	} else if (cha < 3600 * 24 * 30 * 365) {
		beforeTime = parseInt(cha / (3600 * 12 * 30)) + '月前';
	} else if (cha < 3600 * 12 * 30 * 365 * 10) {
		beforeTime = parseInt(cha / (3600 * 12 * 30 * 365)) + '年前';
	}
	return beforeTime;
}

/*
 判断变量是否为空
 * */
let is_empty = function(value) {
	if (typeof (value) == "undefined") return true;
	if (typeof (value) == "string" && (value == "" || value == "undefined" || value == "0")) return true;
	if (typeof (value) == "object" && value == null) return true;
	if (typeof (value) == "object" && (JSON.stringify(value) == "{}" || JSON.stringify(value) == "[]")) return true;
	if (typeof (value) == "boolean" && !value) return true;
	return false;
}

// 手机号码判断
let is_phone = function isPhoneNumber(tel) {
    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(tel);
}

let getToken = function isToken(){
	try {
		const value = uni.getStorageSync('expire');
		if (value) {
			 
			 var nowTime = Math.floor(new Date().getTime()/1000);
			if( value*1 <= nowTime){
					return false
			}else{
				return true
			}
			
		}else{
			return false
		}
	} catch (e) {
		return false
	}
	
	// uni.getStorageSync({
	// 	key: 'token',
	// 	success:  (res)=> {
	// 		 uni.getStorage({
	// 			 key:'expire',
	// 			 success:(res)=>{
	// 				var nowTime = Math.floor(new Date().getTime()/1000);
	// 				if( res.data*1 <= nowTime){
	// 					 return false
	// 				}else{
	// 					return true
	// 				}
	// 			 },
	// 			 fail:()=>{
	// 				return false
	// 			 }
	// 		 })
	// 	},
	// 	fail:()=>{
	// 		return false
	// 	}
	// });
}

// 代付款订单倒计时
const countDown = function timeStamp(times) {
	var timestamp = Date.parse(new Date());
	timestamp = timestamp / 1000;
	var letime = times - timestamp;
	var time = parseInt(letime);
	if (parseInt(letime) > 60) {
		var second = parseInt(letime) % 60;
		var min = parseInt(letime / 60);
		time = min + "分" + second + "秒";
		if (min > 60) {
			min = parseInt(letime / 60) % 60;
			var hour = parseInt(parseInt(letime / 60) / 60);
			time = hour + "时" + min + "分" + second + "秒";
			if (hour >= 24) {
				hour = parseInt(parseInt(letime / 60) / 60) % 24;
				var day = parseInt(parseInt(parseInt(letime / 60) / 60) / 24);
				time = day + "天" + hour + "时" + min + "分" + second + "秒";
			}
		}
	}
	return time;
}
//邮箱验证
const isEmail = function(value){
	let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	if(reg.test(value)){
		return true
	}else{
		return false
	}
}
export default {is_empty,beforeTime,strtodate,help,is_phone,countDown,isEmail,getToken}