import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		changedCity:'广州',
		forcedLogin: true,
		userName: "",
		is_ios: false,
		token: '',
		currentCity:'',
		currentDistrict:'',
		userPoint: {},
		userInfo: {},
		red_info: {},
		shopMoney:0,
		mywallet:{},
		redDetail:{},
		couponLists:[],
		balanceAll:0,
		conversion:0,
		price:0,
		ddb:0,
		screen_width:0,
		screen_height:0,
		collections:[],
		editAddress:{},
		buy_now_obj:{},
		searchKeys:['居众装饰有限公司'],
		submitcity:'选择城市'
	},

	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
		},
		logout(state) {
			state.userName = "";
		},
		save(state, obj) {
			for (let i in obj) {
				state[i] = obj[i]
			}
		},
		clear(state, name) {
			state[name] = ''
			console.log('clear')
		},
		getKeys(state,searchKeys){
			state.searchKeys.push(searchKeys)
		},
		clearHistory(state){
			state.searchKeys = []
		},
		choose(state,data){
			state.changedCity=data
		},
		mycity(state,data){
			state.mycity=data
		},
		choose1(state,data){
			state.submitcity = data
		}
	},

	actions: {
		save(context, obj) {
			context.commit('save', obj)
			// console.log(obj)
		},
		clear(context, name) {
			context.commit('clear', name)
		}
	}
})

export default store
