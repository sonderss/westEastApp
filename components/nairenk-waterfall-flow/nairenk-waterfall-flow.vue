<template>
	<view class="flow-box" :style="'height: ' + (loadingTop+30) + 'px'">
		<view class="item"
			v-for="(item, index) in newList" :key="item.id"
			:class="left[index] == 1 ? 'left' : ''"
			:style="{top:top[index]+'px',height:item.height+'px'}"
			:data-index="index"
			 @click="choose">
			<view class="pic" >  <!-- :style="{background:!item.show?'url(/static/img/timg.gif) no-repeat 10px 10px center 20%':''}" -->
				<image :class="{image:true,lazy:!item.show}" :data-index="index"  :src="item.show?item.image:''"  style="width: 100%; display: block;" :style="{height:item.height+'px'}"></image>
			</view>
			<view class="contents">
				<text class="title">{{item.title}}</text>
				<view class="lazy_txzt">
					<text>￥{{item.price}}</text>
					<text style="font-size: 20upx;" class="shop">{{item.address}}</text>
				</view>
			</view>
		</view>
		<view class="loading" v-show="loading" :style="{top:list.length==0? 0+'px' : loadingTop +'px'}" >
			<image src="/static/nairenk-waterfall-flow/loading.gif" style="width: 80upx; height: 80upx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 数据列表
			list: {
				type: Array,
				default() {
					return []
				}
			},
			isReload:{
				type: Boolean,
				default: false
			},
			// 加载动画
			loading: {
				type: Boolean,
				default: false
			},
			Sheight:{
				type: Number
			}
		},
		data() {
			return {
				mark: 0,
				newList: [],
				boxHeight: [],
				top: [], 
				left: [],
				loadingTop: 0
			}
		},
		watch: {
			// 数据
			list: function (newVal, oldVal) {
				this.mark = oldVal.length;
				if (newVal != oldVal && this.list.length!==0) {
					this.newList = this.list;	
					// console.log("执行了list")
					this.$nextTick(()=>{
						// setTimeout(() => {
							this.waterFall();
						// }, 120)
					})
				}
			}
		},
		created() {
			// console.log("5474")
		},
		methods: {
			//懒加载
			lazylode(){				
				uni.createSelectorQuery().in(this).selectAll('.lazy').boundingClientRect((images) => {
					images.forEach((image, index) => {
						if (image.top <= this.Sheight-150) {
							let num=parseInt(image.dataset.index)
							this.newList[num].show = true;
						}
						
					})
					// console.log("执行了懒加载")
					this.$emit("update:list",this.list)
				}).exec()		
			},
			// 瀑布流定位
			waterFall() {
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.flow-box .item').boundingClientRect(res => {
					let len = this.newList.length;
					let height = 0;
					for (let i = this.mark; i < len; i++) {
						height = res[i].height;						
						if (i < 2) {
							this.$set(this.newList[i], 'top', 0);
							this.$set(this.newList[i], 'left', i);
							this.boxHeight.push(height);
							this.top.push(0);
							this.left.push(i);
						} else {
							let minHeight = this.boxHeight[0];
							let index = 0;
							if (minHeight > this.boxHeight[1]) {
								minHeight = this.boxHeight[1];
								index = 1;
							}
							this.boxHeight[index] = minHeight + height +10;
							this.top.push(minHeight + 10);
							this.left.push(index);
							this.$set(this.newList[i], 'top', minHeight + 10);
							this.$set(this.newList[i], 'left', index);
							this.loadingTop = this.boxHeight[index];
						}
					}
					//定位之后就执行懒加载
					this.$nextTick(()=>{
						this.lazylode()		
					})	
				}).exec();	
				//防止数据还没加载完再次执行触底刷新
				this.$emit("update:isReload",true)			
			},
			// 选中
			choose(e) {
				let index = e.currentTarget.dataset.index;
				this.$emit('click', this.newList[index]);
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.flow-box {
		position: relative;
		color: #1a1a1a;
		// padding-bottom: var(--window-bottom);
		background: #f4f4f4;
		// box-sizing: border-box;
		// margin-top:20upx;
		border-top: 10upx solid #f4f4f4;
		// background-clip: padding-box;
		padding: 20upx;
	}
	.flow-box .item {		
		position: absolute;
		left: 22upx;
		width: 340upx;
		// border: 1upx solid #f4f4f4;
		background: #fff;
		border-radius: 6px;
		overflow: hidden;
		// box-shadow:10upx 20upx 20upx 20upx #f4f4f4;
	}
	.flow-box .left {
		left: 388upx;
	}
	.flow-box .pic {
		background: #dedede;
	}
	.flow-box .contents {
		position: absolute;
		left:0;
		bottom:0;
		width: 100%;
		height: 103upx;
		background:#ffffff;	
	}
	.flow-box .contents>text {
		font-size: 26upx;
		margin-left: 10upx;
	}
	.lazy_txzt{
		display: flex;
		justify-content: space-between;
		align-items:center;
		>text{
			display: block;
		}
		>text:nth-child(1){
			color:red;
			font-size:27upx;
			margin-left: 10upx;
		}
		>text:nth-child(2){
			font-size: 15upx;
			margin-right: 8upx;
		}	
	}
	.flow-box .user {
		display: flex;
		width: 220upx;
		overflow: hidden;
		font-size: 26upx;
		color: #666;
	}
	.loading {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
