<template>
	<view>
		<view class="headtop">
			<text class="headtext">我要装修流程</text>
		</view>
		<view class="imageSt">
			<!-- <view class="img_bac"></view> -->
			<image style="width: 674upx;" mode="widthFix" src="../../static/img/myfix/01.png"></image>
		</view>
		<view class="headtop">
			<text class="headtext" style="margin-top: 40upx;">房源资料</text>
		</view>
		<view class="inputSt">
			  <text>房屋地址：</text>
			  <input class="uni-input"  placeholder="请输入装修房屋地址" />
		</view>
		<view class="inputSt">
			  <text>房屋规格：</text>
			  <input class="uni-input"  placeholder="请输入装修房屋规格,如三室两厅" />
		</view>
		<view class="inputSt">
			  <text>装修预算：</text>
			  <input class="uni-input"  placeholder="请输入装修预算" />
		</view>
		<view class="inputSt" v-if="showList">
			  <text>装修贷款：</text>
			  <input class="uni-input"  placeholder="请输入贷款金额" />
		</view>
		<view class="inputSt" v-if="showList">
			  <view class="text1">
				  <text>风格要求：</text>
				  <view style="width: 70%;display: flex;align-items: center;padding: 0 40upx 0 0;">
					    <radio-group @change="radioChange" class="list1">
					                  <label class="list1" v-for="(item, index) in items" :key="item.value">
					                      <view >
					                          <radio color="red" style="transform:scale(0.5);" :value="item.value" :checked="index === current" />
					                      </view>
					                      <view style="padding-right: 20upx;">{{item.name}}</view>
					                  </label>
					    </radio-group>
				  </view>
			  </view>
		</view>
		<view class="inputSt" v-if="showList">
			  <view class="text1">
			  				  <text>材料采购：</text>
			  				  <view style="width: 70%;display: flex;align-items: center;padding: 0 40upx 0 0;">
			  					    <radio-group @change="radioChange1" class="list1">
			  					                  <label class="list1" v-for="(item, index) in items1" :key="item.value">
			  					                      <view >
			  					                          <radio color="red" style="transform:scale(0.5)" :value="item.value" :checked="index === current1" />
			  					                      </view>
			  					                      <view style="padding-right: 20upx;">{{item.name}}</view>
			  					                  </label>
			  					    </radio-group>
			  				  </view>
			  </view>
		</view>
		<view class="inputSt" v-if="showList">
			 <view class="text1">
			 				  <text>预算开支：</text>
			 				  <view style="width: 70%;display: flex;align-items: center;padding: 0 40upx 0 0;">
			 					    <radio-group @change="radioChange3" class="list1">
			 					                  <label class="list1" v-for="(item, index) in items3" :key="item.value">
			 					                      <view >
			 					                          <radio color="red" style="transform:scale(0.5)" :value="item.value" :checked="index === current3" />
			 					                      </view>
			 					                      <view style="padding-right: 20upx;">{{item.name}}</view>
			 					                  </label>
			 					    </radio-group>
			 				  </view>
			 </view>
		</view>
		<view class="inputSt" v-if="showList">
			  <text>综合报价：</text>
			  <view style="width:70%;padding-top: 30upx;padding: 0 35upx 0 0;" class="baojia">
				  <input class="uni-input"   style="padding: 0;width: 20%;background:#F1F1F1" />
				   <button type="default" disabled="true" size="mini" style="line-height: 33px;">点击生成报价</button>
			  </view>
			  
		</view>
		<view class="inputSt" v-if="showList" >
			  <view class="text1">
			  				  <text>银行贷款：</text>
			  				  <view style="width: 70%;display: flex;align-items: center;padding: 0 35upx 0 0;">
			  					    <radio-group @change="radioChange2" class="list1">
			  					                  <label class="list1" v-for="(item, index) in items2" :key="item.value">
			  					                      <view >
			  					                          <radio color="red" style="transform:scale(0.5)" :value="item.value" :checked="index === current2" />
			  					                      </view>
			  					                      <view style="padding-right: 20upx;">{{item.name}}</view>
			  					                  </label>
			  					    </radio-group>
			  				  </view>
			  </view>
		</view>
	
		
		<view class="shou_btn" @tap="isshow" style="border-bottom: 6px solid #F1F1F1; padding:40upx 0;color: #404040;position: relative;">
			<view class="touming" v-if="showList3"></view>
			<text style="font-size: 23upx;">{{showbtn}}</text><text style="padding-left: 10upx;padding-top: 20upx;font-size: 23upx;" class="xiangshang" v-if="showList1" >^</text><text v-if="showList2" class="xiangshang1" style="margin-left: 10upx;padding-top: 10upx;font-size: 23upx;transform: rotate(180deg);">^</text>
		</view>
		<view class="swiper_img" >

			<image src="../../static/img/myfix/05.png"  style="padding-left: 15upx;flex-shrink: 0;width: 139px;height: 74px;"></image>
		   <image  src="../../static/img/myfix/05.png"  style="padding-left: 15upx;flex-shrink: 0;width: 139px;height: 74px;"></image>
		   <image src="../../static/img/myfix/05.png"  style="padding-left: 15upx;flex-shrink: 0;width: 139px;height: 74px;"></image>
		   <image  src="../../static/img/myfix/05.png"  style="padding-right: 15upx;padding-left: 15upx;flex-shrink: 0;width: 139px;height: 74px;"></image>

		</view>
		<view class="lb_check">
			<text>装修公司</text>
			<text>建筑公司</text>
			<text>监理验收</text>
			<text>运输送货</text>
			<text>家居风水</text>
			<text>清洁维修</text>
			<text>设计公司</text>
		</view>
		<view class="list"   style="padding: 0 20upx; margin-bottom: 25upx;">
			   			<image src="../../static/img/myfix/04.png" mode="widthFix" style="height: 400upx;"/>
			   			
			   				<text style="align-self: flex-start;padding-left: 2%;margin-top: 30upx;height: 100upx;width: 200upx;" class="test_1">这是一个房子</text>
			   				<view class="bum_list"  >
			   					<view class="bum_list1"  >
			   						<text >广州省</text>
			   						<text >一室一厅</text>
			   						<text class="">2万</text>
			   						<text style="border: none;padding: 0;" class="test_1">简约风</text>
									<text style="padding-left: 80upx;">速洋网络</text>
			   					</view>
			   					
			   				</view>
			   			
		</view>
		<view class="list"   style="padding: 0 20upx; margin-bottom: 25upx;">
			   			<image src="../../static/img/myfix/04.png" mode="widthFix" style="height: 400upx;"/>
			   			
			   				<text style="align-self: flex-start;padding-left: 2%;margin-top: 30upx;height: 100upx;width: 200upx;" class="test_1">这是一个房子</text>
			   				<view class="bum_list"  >
			   					<view class="bum_list1"  >
			   						<text >广州省</text>
			   						<text>一室一厅</text>
			   						<text class="">2万</text>
			   						<text style="border: none;padding: 0;" class="test_1">简约风</text>
									<text style="padding-left: 80upx;">速洋网络</text>
			   					</view>
			   					
			   				</view>
			   			
		</view>
	    <view class="list"  v-for="(item,index) in testlist" :key='index' style="padding: 0 20upx; margin-bottom: 25upx;">
	   			<image src="../../static/img/myfix/04.png" mode="widthFix" style="height: 400upx;"/>
	   			
	   				<text style="align-self: flex-start;padding-left: 2%;margin-top: 30upx;height: 100upx;width: 200upx;" class="test_1">{{item.desc}}</text>
	   				<view class="bum_list"  >
	   					<view class="bum_list1"  >
	   						<text class="test_1">{{item.area}}</text>
	   						<text  class="test_1">{{item.fangzi}}</text>
	   						<text class="">{{item.price}}万</text>
	   						<text style="border: none;padding: 0;" >{{item.fengge}}</text>
	   					</view>
	   					<view class="bum_list2" style="padding-right: 5%;">
	   						<text style="font-size: 30upx;" class="test_1" >{{item.gongsi}}</text>
	   					</view>
	   				</view>
	   			
	   	</view>
		<UniLoadMore  :status= "status"></UniLoadMore>
		
	</view>

</template>

<script>
	import {UniLoadMore } from '@dcloudio/uni-ui'
	export default{
		components: {UniLoadMore},
		data:function(){
			return{
				showList:false,
				showList1:false,
				showList2:true,
				showList3:true,
				showbtn:'展开',
				status:'more',
				items: [{
				                    value: 'USA',
				                    name: '欧式'
				                },
				                {
				                    value: 'CHN',
				                    name: '美式',
				                    checked: 'true'
				                },
				                {
				                    value: 'BRA',
				                    name: '中式'
				                }
				        ],
				current: 0,
				items1: [{
				                    value: 'USA',
				                    name: '全包'
				                },
				                {
				                    value: 'CHN',
				                    name: '半包',
				                    checked: 'true'
				                },
				                {
				                    value: 'BRA',
				                    name: '自购'
				                }
				        ],
				current1: 0,
				items2: [{
				                    value: 'USA',
				                    name: '需要'
				                },
				                {
				                    value: 'CHN',
				                    name: '不需要',
				                    checked: 'true'
				                },
				        ],
				current2: 0,
				items3: [{
				                    value: 'USA',
				                    name: '一万'
				                },
				                {
				                    value: 'q',
				                    name: '十万',
				                   
				                },
								{
								    value: 't',
								    name: '其他',
								   
								},
				        ],
				current3: 0,
				ic_xuan:'180deg',
				testlist:[]
				
				
			}
		}, 
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			 //console.log(option.title); //打印出上个页面传递的参数。  
			// #ifdef H5
			this.is_h5=true
			
			// #endif
			uni.setNavigationBarTitle({
			    title: option.title,
			});  
			uni.request({
							url:'http://www.baidu.com/api1',
							success : res =>{
								this.testlist =res.data.list
								//console.log(this.testlist)
							}
		    })
			
		},
		onReachBottom: function() {
					//触底的时候请求数据，即为上拉加载更多 
					// 这里是没有向上滑动，只要到底部就触发函数调数据
					if(timer == null){
						clearTimeout(timer)
					}
				 var  timer = setTimeout(()=>{
						this.getMoreNewList()
					},1000)
		},
		onNavigationBarButtonTap (e){
			//console.log(213)
			if(e.index==0){
				uni.navigateTo({
					url: '../search/search',
					animationType: 'slide-in-bottom',
					animationDuration: 250,
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		},
		methods:{
			getMoreNewList(){
							this.status ='loading'
							setTimeout(()=>{
								uni.request({
									url:'http://www.baidu.com/api1',
									success:res=>{
										if(!res.data){
											this.status ='noMore'
											return
										}
										this.testlist = this.testlist.concat(res.data.list)
										this.status ='more'
									}
								})
							},500)
			},
			isshow(){
							this.showList = !this.showList
							if(this.showbtn == '收起'){
								this.showbtn = '展开'
								this.showList1  = false //向上
								this.showList2  = true // 向下
								this.showList3  = true
							}else{
								this.showbtn = '收起'
								this.showList1  = true //向上
								this.showList2  = false // 向下
								this.showList3  = false
							}
			},
			ischecked(){
				this.xuanzhong = !this.xuanzhong
			},
			ischecked1(){  
				this.xuanzhong1 = !this.xuanzhong1
			},
			ischecked2(){
				this.xuanzhong2 = !this.xuanzhong2
			},
			radioChange: function(evt) {
			            for (let i = 0; i < this.items.length; i++) {
			                if (this.items[i].value === evt.target.value) {
			                    this.current = i;
			                    break;
			                }
			            }
			},
			radioChange1: function(evt) {
			            for (let i = 0; i < this.items1.length; i++) {
			                if (this.items1[i].value === evt.target.value) {
			                    this.current1 = i;
			                    break;
			                }
			            }
			},
			radioChange2: function(evt) {
			            for (let i = 0; i < this.items2.length; i++) {
			                if (this.items2[i].value === evt.target.value) {
			                    this.current2 = i;
			                    break;
			                }
			            }
			},
			radioChange3: function(evt) {
			            for (let i = 0; i < this.items3.length; i++) {
			                if (this.items3[i].value === evt.target.value) {
			                    this.current3 = i;
			                    break;
			                }
			            }
			},
		
		}
	}
	
</script>

<style scoped>
	.imageSt{
	  width: 100%;
	  height:414upx;
	  display: flex;
	  justify-content: center;
	 }
	.headtop{
		width: 100%;
		height: 80upx;
		display: flex;
		font-size: 30upx;
		justify-content: flex-start;
		align-items: center;
	}
	.headtext{
		border-left: 7upx solid #f00;
		padding-left: 10upx;
		margin-left: 20upx;
		font-size: 35upx;
	}
	.inputSt{
		width:100%;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
	
	}
	.inputSt input{
		border:5upx solid #F1F1F1;
		border-radius: 8upx;
		width: 70%;
		height: 33px;
		background: #F1F1F1;
		font-size: 30upx;
		padding: 0 0 0 30upx;
		font-size: 15px;
	}
	.inputSt_check{
		display:flex;
		align-items: center;
	}
	.inputSt_check radio{
		padding-left: 20upx;
	}
	.check_radi radio{
		padding-top: 10upx;
	}
	.teshu{
		margin-top: 10upx;
		
	}
	.baojia{
		display: flex;
		
	}
	.baojia button{
		margin-left:15upx;
		padding: 0 10upx;
		font-size: 20upx;
	}
	.shou_btn{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50upx;
		font-size: 30upx;
	}
	.swiper_img{
		height: 200upx;
		margin-top: 20upx;
		display: flex;
		overflow: auto;
		align-items: center;
	}
	.swiper_img image{
		width: 400upx;
		height: 150upx;
	}
	.swiper_img::-webkit-scrollbar {
			display:none
		}
	.lb_check{
		display: flex;
		
		flex-wrap: wrap;
	}	
	.lb_check text{
		width: 120upx;
		height: 50upx;
		font-size: 30upx;
		line-height: 50upx;
		margin-left: 25upx;
		text-align: center;
	}
	.lb_check text:hover{
		color: #FF0000;
		background: pink;
		border-radius: 15upx 15upx;
	}
	.list{
			box-sizing: border-box;
			height: 320upx;
			display: flex;
			align-items: center;
			flex-direction: column;
			font-size: 30upx;
			margin-top: 30upx;
			padding: 0 22upx;
		}
		.list image{
			width: 100%;
			
		}
	.bum_list{
		width: 100%;
		height: 40upx;
		display: flex;
		justify-content: space-between;
		color: #59000f;
	}
	.bum_list1{
		display: flex;
		align-items: center;
		font-size: 30upx;
		line-height: 30upx;
	}
	.bum_list1 text{
		
		padding: 0 15upx;
	}
	.bum_list2{
		line-height: 30upx;
	}
	.imageSt{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.inputSt_check{
		transform:scale(0.7);
		width: 70%;
		display: flex;
	}
	.check_radi {
		transform:scale(0.7)
	}
	.text1{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.list1{
		display: flex;
		color: #272727;
		font-size: 12pt;
	}
	.list2{
		display: flex;
		flex-wrap: wrap;
		color: #272727;
		font-size: 12pt;
	}
	.xiangshang{
			animation: dong 1s infinite;
		}
		.xiangshang1{
			animation: dong1 1s infinite;
		}
		/* // 定义一个动画 */
		@keyframes dong { 
		       0% {             
		           transform: translate(0px, 0px);            
		        }            
		        50% {                
		           transform: translate(0px, -10upx);            
		        }            
		        100% {                
		           transform: translate(0px, 0px);
		        }
		}
		@keyframes dong1 {
		       0% {             
		           transform: translate(0px, 0px) rotate(180deg);
				  
		        }            
		        50% {                
		           transform: translate(0px, 10upx) rotate(180deg);  
					
		        }            
		        100% {                
		           transform: translate(0px, 0px) rotate(180deg);
		        }
		}
	.touming{
			height: 80upx;
			width: 100%;
			opacity: 0.3;
			position: absolute;
			background: #fff;
			top: -50upx;
			z-index: 999;
	}
	.test_1{
			width: 150upx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			
	}
</style>
