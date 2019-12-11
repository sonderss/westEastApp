<template>
<view>
	<view class="main_view" @tap="change_image">
		  <view class="left_view">
			   <!-- <view class="img_view" :style="[{'background-image':'url('+ image +')' }]" > -->
			    <view  class="img_view">
				  <image mode="widthFix" style="width:100%;height:100%"  src='http://192.168.1.140:5005/file/fapi/pic/ico/yh_05.png'/>
			   </view>
			   <text class="text_">点击修改头像</text>
		  </view>
		  <view class="right_view">
			   <view class="right_jian">
				   <image style="width:100%;height:100%" src="../../static/img/confirmation/addArrow.png" />
			   </view>
		  </view>
	</view>
	<view class="nick_view">
			<text class="nick_name">昵称</text>
			<input type="text" placeholder="蓝嘟嘟"/>
	</view>
	<view class="nick_view">
			<text class="nick_name">签名</text>
			<input type="text" placeholder="家是唯一的避风港"/>
	</view>
</view>
	</view>
</view>
</template>

<script>
	import uapi from "../../apis/user/user"
	// import { mapGetters, mapState  } from 'vuex';
	export default{
		data(){
			return{
				image:'',
				userMsg1:{}
			}
		},
		onLoad(){
			uni.showLoading({
				title:"加载中"
			})
		},
		// computed:{  
		// 	...mapState(["userMsg"])
        // },
		mounted() {
			// uapi.getUserInfo(this)
			uni.hideLoading()
			// uni.getStorage({
			// 	key: 'userInfo',
			// 	success:  (res)=> {
			// 		console.log(res.data);
			// 		this.userMsg1 = res.data
			// 	}
			// });

			//获取全局用户状态
			// if(this.userMsg1.head_pic.indexOf("http") === -1){
			// 		 this.image = "http://192.168.1.140:5005" + this.userMsg1.head_pic
			// 		 // that.test.backgroundImage = 'url(http://192.168.1.140:5005' + res.data.data.head_pic +')'
			// 		 console.log(this.image)
			// 	}else{
			// 		this.image =this.userMsg1.head_pic
			// 		 // that.test.backgroundImage = 'url('+ res.data.data.head_pic +')'
			// }
			// this.image = "http://192.168.1.140:5005"+ this.userMsg.head_pic
		},
		methods:{
			change_image(){
				// console.log(123)
				uni.chooseImage({
				    count: 1, //默认9
				    // sourceType: ['album'], //从相册选择
				    success:  (res)=> {
						console.log(JSON.stringify(res.tempFilePaths));
						var imc = JSON.stringify(res.tempFilePaths)
						imc = JSON.parse(imc)
						this.image = imc[0]
						// this.test.backgroundImage = 'url('+ imc[0]+')'
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
 @import 'index.scss'
</style>
