class isLogin {
	constructor(prevPage) {
		// #ifdef H5
		this.methodName = prevPage.myobj.methods
		this.options = prevPage.myobj.options
		this.type = prevPage.myobj.type
		this.url = prevPage.myobj.url
		this.prevPage = prevPage
		// #endif
		// #ifndef H5
		this.methodName = prevPage.$vm.myobj.methods
		this.options = prevPage.$vm.myobj.options
		this.type = prevPage.$vm.myobj.type
		this.url = prevPage.$vm.myobj.url
		this.prevPage = prevPage
		// #endif
	}
}
//prevPage.myobj.methods,prevPage.myobj.options,prevPage.myobj.url,prevPage.myobj.type

isLogin.prototype.eachOptions = function() {
	//当前页按钮，不进行页面跳转
	// console.log(prevPage)
	if (this.type == 0) {
		// let pages = getCurrentPages();
		// let nowPage = pages[pages.length - 1];
		// let prevPage = pages[pages.length - 2];
		this.methodName()
		// uni.redirectTo({
		// 	// #ifdef H5
		// 	url: '/' + prevPage.route + '?' + prevPage.myobj.url
		// 	// #endif
		// 	// #ifndef H5
		// 	url: '/' + prevPage.$vm.route + '?' + prevPage.$vm.myobj.url
		// 	// #endif
		// })
		uni.navigateBack({
			delta: 1
		});
		return
	}
	//当类型为1时需要跳转页面  option是页面后缀参数  url是路径
	if (this.type == 1) {
		// let pages = getCurrentPages();
		// let nowPage = pages[pages.length - 1];
		// let prevPage = pages[pages.length - 2];
		this.methodName()
		console.log(prevPage)
		// #ifdef H5
		var arr = Object.keys(prevPage.myobj.options)
		// #endif
		// #ifndef H5
		var arr = Object.keys(prevPage.$vm.myobj.options)
		// #endif
		if (arr.length == 0) {
			
			uni.redirectTo({
				// #ifdef H5
				url: this.prevPage.myobj.url
				// #endif
				// #ifndef H5
				url: this.prevPage.$vm.myobj.url
				// #endif
			})
			return
			
		}
		uni.redirectTo({
			// #ifdef H5
			url: this.prevPage.myobj.url + '?' + this.prevPage.myobj.options
			// #endif
			// #ifndef H5
			url: this.prevPage.$vm.myobj.url + '?' + this.prevPage.$vm.myobj.options
			// #endif
		})
	}
	// 未登录跳转不传方法
	if (this.type === 2) {
		// let pages = getCurrentPages();
		// let nowPage = pages[pages.length - 1];
		// let prevPage = pages[pages.length - 2];
		uni.redirectTo({
			// #ifdef H5
			url: this.prevPage.myobj.url + '?' + this.prevPage.myobj.options
			// #endif
			// #ifndef H5
			url: this.prevPage.$vm.myobj.url + '?' + this.prevPage.$vm.myobj.options 
			// #endif
		})
	}
}

export {
	isLogin
}
