<script>
	export default {
		// created:function(){
		// 	// #ifdef APP-PLUS
		// 			plus.navigator.closeSplashscreen();
		// 	// #endif
			

		// },
		onLaunch: function() {
			// #ifdef APP-PLUS
				plus.screen.lockOrientation('portrait-primary');
			// #endif
			
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

	uni-checkbox .uni-checkbox-input {
        border-radius: 50% !important;
		color: #ffffff !important;
		transform:scale(0.7);
		-webkit-transform:scale(0.7);
		-moz-transform:scale(0.7);
		-ms-transform:scale(0.7);
		-o-transform:scale(0.7);
    }
    
    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
        color: #fff;
        border-color: #C17B7D;
        background:#C17B7D
    }
    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:after{
        font-size: 18upx;
	}

</style>
