<template>
	<i-list :content_list='content_list' :companydetail="companydetail" :businesslist="businesslist" :companyname='companyname'></i-list>
</template>

<script>
	import iList from "components/company-win/companyindex.vue"
	export default {
		onLoad(option){
			console.log()
			let obj={
				companyid:parseInt(option.id)
			}
			if(option.type==0){
				this.axios.GetTrimCompanyIntroduce(obj).then(res=>{
					this.loadData(res,option.type)
				})						
			}else{
				this.axios.GetBuildCompanyIntroduce(obj).then(res=>{
					this.loadData(res,option.type)
				})				
			}
		},
		data(){
			return{
				companyname:{},
				content_list:[
					{
						title:'营业执照',
						list:[],
					},
					{
						title:'资质证书',
						list:[],
					},
					{
						title:'荣誉证书',
						list:[],
					}
				],
				companydetail:[
					{
						sub:'成立时间',
						sub2:''
					},
					{
						sub:'公司规模',
						sub2:''
					},
					{
						sub:'专场风格',
						sub2:''
					},
					{
						sub:'服务区域',
						sub2:''
					},
					{
						sub:'营业时间',
						sub2:''
					},
					{
						sub:'企业介绍',
						sub2:''
					}
				],
				businesslist:[
					{
						sub:'公司名称',
						sub2:'广州市居众装饰设计有限公司'
					},
					{
						sub:'企业类型',
						sub2:'私营股份有限公司'
					},
					{
						sub:'注册地址',
						sub2:'广州市越秀区深南路人民大厦'
					},
					{
						sub:'注册资金',
						sub2:'人民币1540万元'
					},
					{
						sub:'营业期限',
						sub2:'2005-01-01/2025-07-07'
					},
					{
						sub:'成立时间',
						sub2:'2005-01-01'
					},
					{
						sub:'登记机关',
						sub2:'广州市市场监督管理局'
					},
					{
						sub:'经营范围',
						sub2:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
					},{
						sub:'年检时间',
						sub2:'2016-01-07'
					},
					{
						sub:'注册号',
						sub2:'467463515145841'
					},{
						sub:'法定代表',
						sub2:'陈大明'
					}
				]
			}
		},
		methods:{
			loadData(res,id){
				this.companyname={bg:'/static/img/company/bg.png',imgurl:res.data.data.logPic,title:res.data.data.name}
				let index=0
				let ch=res.data.data.companyHonor
				let ci=res.data.data.companyIntrolduce
				let cr=res.data.data.companyRegister
				//遍历荣誉
				for(let i in ch){
					this.content_list[index].list=ch[i]
					index++
				}
				//遍历公司介绍
				if(id==0){
					this.companydetail.forEach((item,x)=>{
						if(x==0){
							item.sub2=ci.establishdate
						}else if(x==1){
							item.sub2=ci.companyScale
						}else if(x==2){
							item.sub2=ci.styleType
						}else if(x==3){
							item.sub2=ci.serverArea
						}else if(x==4){
							item.sub2=ci.businessTime
						}else{
							item.sub2=ci.introduce
						}						
					})
				}else{
					this.companydetail[2].sub='建筑类型'
					this.companydetail[3].sub="服务城市"
					this.companydetail.forEach((item,x)=>{
						if(x==0){
							item.sub2=ci.establishdate
						}else if(x==1){
							item.sub2=ci.companyScale
						}else if(x==2){
							item.sub2=ci.buildType
						}else if(x==3){
							item.sub2=ci.serverCity
						}else if(x==4){
							item.sub2=ci.businessTime
						}else{
							item.sub2=ci.introduce
						}						
					})
				}		
				//遍历公司工商注册
				this.businesslist.forEach((item,x)=>{
					if(x==0){
						item.sub2=cr.companyName
					}else if(x==1){
						item.sub2=cr.companyType
					}else if(x==2){
						item.sub2=cr.registeredAddress
					}else if(x==3){
						item.sub2=cr.registeredCapital
					}else if(x==4){
						item.sub2=cr.businessTerm
					}else if(x==5){
						item.sub2=ci.establishdate
					}else if(x==6){
						item.sub2=cr.registrar
					}else if(x==7){
						item.sub2=cr.businessScope
					}else if(x==8){
						item.sub2=cr.inspectionDate
					}else if(x==9){
						item.sub2=cr.registrarNumber
					}else{
						item.sub2=cr.corporateRepresentative
					}						
				})
			}
		},
		components:{
			iList
		}
	}
</script>

<style scoped lang="scss">
	
</style>
