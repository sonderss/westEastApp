import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		changedCity: '广州',
		forcedLogin: true,
		userName: "",
		is_ios: false,
		token: '',
		currentCity: '',
		currentDistrict: '',
		userPoint: {},
		userInfo: {},
		red_info: {},
		shopMoney: 0,
		mywallet: {},
		redDetail: {},
		couponLists: [],
		balanceAll: 0,
		conversion: 0,
		price: 0,
		ddb: 0,
		screen_width: 0,
		screen_height: 0,
		collections: [],
		editAddress: {},
		buy_now_obj: {},
		searchKeys: ['居众装饰有限公司'],
		submitcity: '选择城市',
		sendPost: {
			topic: '加话题，提升被发现概率',
			cricle: '加圈子，获得更多点赞与评论',
			textareaTxt: ''
		}
	},
	
	getters: {
		topic: (state, sendPost) => {
			return state.sendPost.topic
		},
		cricle: (state, cricle) => {
			return state.sendPost.cricle
		},
		textareaTxt: (state, textareaTxt) => {
			return state.sendPost.textareaTxt
		},
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
		getKeys(state, searchKeys) {
			state.searchKeys.push(searchKeys)
		},
		clearHistory(state) {
			state.searchKeys = []
		},
		choose(state, data) {
			state.changedCity = data
		},
		mycity(state, data) {
			state.mycity = data
		},
		choose1(state, data) {
			state.submitcity = data
		},
		community(state, data, data2, data3){
			state.sendPost.textareaTxt = data
			state.sendPost.cricle = data2 || '加圈子，获得更多点赞与评论'
			state.sendPost.topic = data3 || '加话题，提升被发现概率'
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