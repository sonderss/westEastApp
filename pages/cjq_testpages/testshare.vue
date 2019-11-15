<template>
    <view>
        测试分享
      <share :isShow="isShow"  :sharelist='sharelist'></share>
    </view>
</template>

<script>
import share from '../../components/share/share'
export default {
    components:{share},
    data(){
        return{
            isShow:false,
            sharelist:{}
        }
    },
    onNavigationBarButtonTap (e){
       this.isShow = true
     
        // imageUrl封面图片  path打开时路径   title封面标题
        this.sharelist = {
            imageUrl:'https://i.loli.net/2019/10/30/u56AvEaC9U3xMSO.png',
            title:'广州佳宇设计',
            path:'pages/index/index'
        }
        setTimeout(()=>{
            this.isShow = false
        },100)
    },
}
</script>

<style lang="scss" scoped>
    
</style>