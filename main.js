import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import util from './common/util.js'
import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue'
import axios from './apis/fixcompony/fixcompony.js'
import * as Db from './config/db.js'
import check from './common/checkLogin'

// import router from './components/uni-app-router/useRouter'
// axios.defaults.headers.common['X-Token'] = store.getters.token;
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
		// console.log(res)
	},
	success: function (res) {
		if(!util.is_empty(res.address)){
			// console.log(res)
			store.dispatch("save",{'currentCity': res.address.city})
			store.dispatch("save",{'fixCity': res.address.city})
			store.dispatch("save",{'currentDistrict': res.address.district})
		}
		store.dispatch("save",{'userPoint': {"longitude":res.longitude,"latitude":res.latitude}})	
	},
	fail: function(res){
		//store.dispatch("save",{'userPoint': {"longitude":"113","latitude":"22"}})
		// help.save('userPoint',{"longitude":"1","latitude":"1"})
		store.dispatch("save",{'currentDistrict': '番禺区'})
	}
});

Vue.prototype.$store = store
Vue.prototype.now = Date.now || function () {
	return new Date().getTime();
};
Vue.prototype.isArray = Array.isArray || function (obj) {
	return obj instanceof Array
};
Vue.prototype.is_empty = util.is_empty
Vue.prototype.help = util.help
Vue.prototype.time=util.beforeTime
Vue.prototype.axios=axios
Vue.prototype.$db = Db;
Vue.prototype.$v = check
Vue.config.productionTip = false
Vue.component('chunLei-modal',chunLeiModal);
 
App.mpType = 'app'

const app = new Vue({
	store,
	// router,
    ...App
})
app.$mount()
