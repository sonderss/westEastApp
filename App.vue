<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	/* @import "./common/font-awesome-4.7.0/css/font-awesome.css"; */
	html,body,#app{
	  height: 100%;
	  background:#FFFFFF;
	}	
</style>
