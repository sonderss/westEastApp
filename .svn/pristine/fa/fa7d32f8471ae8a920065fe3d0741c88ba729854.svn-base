<template>
	<view>
		<view style="padding: 0upx 0upx;">
			<view class="filter-content" v-for="(item, index) in menuList" :key="index" v-if="menuIndex == index">
				<view>
					<view class="filter-content-detail">
						<text v-for="(detailItem,idx) in selectDetailList" :key="idx"  
						:class="{'filter-content-detail-item-default':index==0||index==2?true:false,'filter-content-detail-item-default-two':index==1?true:false,'ftSelected':index==1&&detailItem.isSelected?true:false}" 
						:style="{'background-color':detailItem.isSelected?'#FFF1F1':themeColor,'color':detailItem.isSelected?'#B8696B':'#3B3B3B'}"
						 @tap="sortTap(idx,selectDetailList,item.key)">
							{{detailItem.title}}
						</text>
					</view>				
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				selectArr: [],
				result: {},
				menuIndex: 0,
				selectDetailList: [],
				selectDetailList2: [],
				independenceObj: {},
				selectedKey: '',
				selectedKey2: '',
				cacheSelectedObj: {},
				defaultSelectedTitleObj: {}
			};
		},
		props: {
			themeColor: {
				type: String,
				default () {
					return '#D1372C'
				}
			},
			menuList: {
				type: Array,
				default () {
					return []
				}
			},
			independence: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			selectedTitleObj() {
				let obj = {}
				for (let i = 0; i < this.menuList.length; i++) {
					let item = this.menuList[i];
					obj[item.key] = item.title;
				}
				// console.log(obj)
				return obj;
			},
			defaultSelectedObj() { // 保存初始状态
				return this.getSelectedObj()
			},
			selectedObj: {
				get() {
					return this.getSelectedObj()
				},
				set(newObj) {
					return newObj;
				}

			}
		},
		methods: {
			getSelectedObj() {
				let obj = {}
				for (let i = 0; i < this.menuList.length; i++) {
					let item = this.menuList[i];
					if (!this.independence && item.defaultSelectedIndex != null && item.defaultSelectedIndex.toString().length > 0) { // 处理并列菜单默认值						
						obj[item.key] = item.detailList[item.defaultSelectedIndex].value;
						// this.selectedTitleObj[item.key] = item.detailList[item.defaultSelectedIndex].title;
						this.defaultSelectedTitleObj[item.key] = item.detailList[item.defaultSelectedIndex].title;
						item.detailList[0].isSelected = false;
						item.detailList[item.defaultSelectedIndex].isSelected = true;
					} else {
						if (item.isMutiple) {
							obj[item.key] = [];
						} else {
							obj[item.key] = '';
						}
					}
				}
				// console.log(obj)
				this.result = obj;
				return obj;
			},
			menuTabClick(index) {
				this.menuIndex = index;
				this.selectDetailList = this.menuList[index].detailList;
				this.selectedKey = this.menuList[index].key;
				
				// #ifdef H5
				this.selectedObj = this.selectedObj;
				this.$forceUpdate();
				// #endif
			},
			itemTap(index, list, isMutiple, key) {		
				this.selectedObj[key] = list[index].value;
				this.result = this.selectedObj;
				this.selectedTitleObj[key] = list[index].title;
				for (let i = 0; i < list.length; i++) {
					if (index == i) {
						list[i].isSelected = true;
					} else {
						list[i].isSelected = false;
					}
				}				
				// #ifdef H5
				this.$forceUpdate();
				// #endif
			},
			sortTap(index, list, key) {
				this.selectedObj[key] = list[index].value;
				this.result = this.selectedObj;
				this.selectedTitleObj[key] = list[index].title;
				for (let i = 0; i < list.length; i++) {
					if (index == i) {
						list[i].isSelected = true;
					} else {
						list[i].isSelected = false;
					}
				}
				this.$set(this.result,"city",this.$store.state.changedCity)
				let obj = {
					'result': this.result,
					'titles': this.selectedTitleObj,
					'isReset': false
				}
				this.$emit("confirm", obj);
			},
			sureClick() {
				this.$set(this.result,"city",this.$store.state.changedCity)
				let obj = {
					'result': this.result,
					'titles': this.selectedTitleObj,
					'isReset': false
				}
				this.$emit("confirm", obj);
			}
		}
	}
</script>

<style scoped lang="scss">
	.seltitle{
		font-size:26upx;
		margin:10upx 30upx
	}
	// .filter-content-title {
	// 	border-bottom: #EEEEEE 1px solid;
	// 	padding: 10upx 15upx;
	// 	font-size: 13upx;
	// 	color: #999999;
	// }

	.filter-content-detail {
		width: 750upx;
		margin:20upx 0upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start
	}
	.filter-content-detail-item-default {
		color: #666666;
		width: 148upx;
		margin: 10upx 19upx;
		padding: 10upx 0;
		text-align: center;
		border-radius: 6upx;
		display: inline-block;
		font-size: 26upx;
	}
	.filter-content-detail-item-default-two{
		width: 100%;
		font-size: 26upx;
		background: #ffffff !important;
		padding: 20upx 50upx;
	}
	.ftSelected:after{
		content: '✓';
		font-size: 26upx;
		float: right;
	}
	.filter-content-footer {
		display: flex;
		// justify-content: space-between;
		width: 100%;
		height: 80upx;
		// margin-top: 10upx;
		margin:50upx 0upx;
		>view:nth-child(1){
			flex:3;
			background: #ECECEC;
			line-height: 80upx;
			text-align: center;
			border-radius: 10px;
			margin:0 10upx;
			font-size: 30upx;
			color: #3E3E3E;
		}
		>view:nth-child(2){
			flex: 5;
			background: #C17B7D;
			line-height: 80upx;
			text-align: center;
			border-radius: 10px;
			margin:0 24upx;
			color: #ffffff;
			font-size: 30upx;
		}
	}

	.filter-content-footer-item {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24upx;
	}

	.filter-content-list {

		padding: 5upx 15upx;
	}

	.filter-content-list-item-default {
		color: #666666;
		width: 100%;
		padding: 10upx 0upx;
	}

	.filter-content-list-item-default text {
		width: 90%;
		font-size: 14upx;
		display: inline-block;
	}

	.filter-content-list-item-active {
		color: #D1372C;
		width: 100%;
		padding: 10upx 0upx;
	}

	.filter-content-list-item-active text {
		font-size: 14upx;
		width: 90%;
		display: inline-block;
	}

	.filter-content-list-item-active:after {
		content: '✓';
	}
</style>
