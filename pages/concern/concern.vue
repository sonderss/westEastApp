<template>
	<view>
		<view class="content" v-show="isEmpty">
			<view style="padding: 14upx 0;" v-for="(item,index) in list" :key="index">
			<checkbox-group @change="checkboxChange($event,index)">			
					<view  class="goods_flex" style="padding:0 34upx">
						<label class="goods_flex">
							<checkbox v-if="flag" :checked="shop_select_all[index]" color="#d81e06" :value="'v'+index" />
							<view class="ximg" :style="{'background':'url('+item.img+') center center/cover no-repeat'}"></view>
						</label>
						<view class="goods_attribute">
							<view class="goods_title">
								<text>{{item.name}}{{item.id}}</text>
								<button v-if="flag" size="mini" type="warn" @tap="cancel_collect(index)">
									<text>
										取消关注
									</text>
								</button>
							</view>
							<view class="goods_address">{{item.adress}}</view>	
							<view class="cancel">
								<text class="goods_price">{{item.dec}}</text>
							</view>
						</view>
						
					</view>									
			</checkbox-group>
			</view>
		</view>
		<view v-show="!isEmpty" class="tip">
			<text>空空如也~</text>
		</view>
		<view class="bottom" v-if="flag">
			<view class="footer">
				<checkbox-group class="all_change"  @change="total_all_checkboxChange($event)" >
					<label class="select_all">
						<checkbox color="#d81e06" :checked="total_all_select" :value="isAll"/>
						<text>全选</text>
					</label>
				</checkbox-group>
				<view class="footer_cancel" @tap="all_cancel">
					取消关注
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// list:[],
				list:[
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					},
					{
						img:'/static/img/goods/detail.jpg',
						id:1,
						name:"店铺名称",
						adress:"广州市番禺区天安科技园",
						dec:'经营范围：家装、电器、五金'
					}
				],
				flag:false,
				shop_select_all:[],
				isAll:'yes',
				is_edit:false
			}
		},
		methods:{
			onNavigationBarButtonTap(e){
				// if(this.list.length){
					// #ifdef APP-PLUS
					let webView = this.$mp.page.$getAppWebview();
					// #endif
					// 修改buttons  
					// index: 按钮索引, style {WebviewTitleNViewButtonStyles }  
					
					if(e.index==0){
						if(!this.is_edit){
							this.is_edit=true
							
							// #ifdef APP-PLUS
							webView.setTitleNViewButtonStyle(0, {
							    text: '完成',  
							});  
							// #endif
							this.flag=true
						}else{
							this.is_edit=false
							
							// #ifdef APP-PLUS
							webView.setTitleNViewButtonStyle(0, {
							    text: '编辑',  
							});  
							// #endif
							this.flag=false
						}
					}
				// }
			},			
			checkboxChange(e,num){
				if(this.shop_select_all[num]==false){
					this.$set(this.shop_select_all,num,true)
				}else{
					this.$set(this.shop_select_all,num,false)
					this.isAll="yes"
				}				
			},
			total_all_checkboxChange(e){
				if(e.detail.value[0]=="yes"){
					for(var i=0;i<this.shop_select_all.length;i++){
						this.$set(this.shop_select_all,i,true)
					}
					this.isAll="no"
				}else{
					for(var i=0;i<this.shop_select_all.length;i++){
						this.$set(this.shop_select_all,i,false)
					}
					this.isAll="yes"
				}
				
			},
			cancel_collect(index){
				uni.showModal({
				    title: '提示',
				    content: '是否取消关注?',
				    success: res=> {
				        if (res.confirm) {
				            this.list.splice(index,1)
				            this.shop_select_all.splice(index,1)
				            if(this.list.length==0){
				            	this.flag=false
				            }
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				})			
			},
			all_cancel(){
				uni.showModal({
				    title: '提示',
				    content: '是否取消关注所选的店铺?',
				    success: res=>{
				        if (res.confirm) {
				            let num=this.list.length;							
				            for(var i=0;i<num;i++){
								if(this.shop_select_all[i]==true){
									this.list.splice(i,1)
									this.shop_select_all.splice(i,1)
									num-=1;
									i--;
								}				            	
				            }
							this.flag=false
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				})
				
			}
		},
		created(){
			for(let i=0;i<this.list.length;i++){
				let _select=true
				if(!this.list[i].checked){
					_select=false
				}
				this.shop_select_all.push(_select)
			}
			// uni.request({
			// 	url:'https://www.wang.com/api',
			// 	success:res=>{
			// 		this.list=res.data.list;
			// 		for(let i=0;i<this.list.length;i++){
			// 			let _select=true
			// 			if(!this.list[i].checked){
			// 				_select=false
			// 			}
			// 			this.shop_select_all.push(_select)
			// 		}
			// 	},
			// 	fail() {
			// 		console.log(123123)
			// 	}
			// })		
		},
		computed:{
			total_all_select(){
				let _true=true
				if(this.shop_select_all.length){
					for(let i=0;i<this.shop_select_all.length;i++){
						if(!this.shop_select_all[i]){
							_true=false;
						}
					}				
					return _true;
				}else{
					return !_true;
				}				
			},
			isEmpty(){
				return this.list.length
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import 'concern.scss'
</style>
