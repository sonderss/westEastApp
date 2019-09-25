import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import util from './common/util.js'
import './data/mock.js' //这个mock.js是示例，可以有很多模拟的数据接口
try {
    const res = uni.getSystemInfoSync();
	store.dispatch("save",{'is_ios': res.platform=='ios'?'1':'0'})
	store.dispatch("save",{'screen_width': res.windowWidth})
	store.dispatch("save",{'screen_height': res.windowHeight})
	
} catch (e) {
}

uni.getLocation({
	type: 'gcj02',
	geocode: true,
	complete: function(res){
		console.log(res)
	},
	success: function (res) {
		console.log(res)
		// console.log('当前位置的经度：' + res.longitude);
		// console.log('当前位置的纬度：' + res.latitude);
		
		if(!util.is_empty(res.address)){
			// console.log(res.address.city)
			store.dispatch("save",{'currentCity': res.address.city})
			store.dispatch("save",{'currentDistrict': res.address.district})
		}
		store.dispatch("save",{'userPoint': {"longitude":res.longitude,"latitude":res.latitude}})
		// help.save('userPoint',{"longitude":res.longitude,"latitude":res.latitude})
	},
	fail: function(res){
		// store.dispatch("save",{'userPoint': {"longitude":"1","latitude":"1"}})
		// help.save('userPoint',{"longitude":"1","latitude":"1"})
	}
});

Vue.prototype.$store = store
Vue.prototype.now = Date.now || function () {
	return new Date().getTime();
};
Vue.prototype.isArray = Array.isArray || function (obj) {
	return obj instanceof Array;
};
Vue.prototype.is_empty = util.is_empty
Vue.prototype.help = util.help

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
