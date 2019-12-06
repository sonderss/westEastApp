<template>
<view>
      <works :isShow='1' :datalist="datalist"></works>
</view>
</template>

<script>
import works from '../../components/designer/designer'
import mapi from '../../apis/https/myApi'
export default {
    components:{works},
    onLoad(option){
        console.log(option.type)
        this.id = option.id
        this.pageType = option.type
    },
    data(){
        return{
           datalist:[],
           id:'',
           pageType:''
        }
    },
    mounted(){
        if(this.pageType === 'zhuangxiu'){
            let param = {
                companyid:this.id,
                designerid:0,
                pageindex:1,
                pagesize:20
            }
            mapi.getTrimCasePageList(param,this)
        }else{
            let param = {
                companyid:this.id,
                designerid:0,
                pageindex:1,
                pagesize:20
            }
            mapi.getArchitectureWorks(param,this)
        }
       
    }
}
</script>

<style lang="scss" scoped>
    
</style>