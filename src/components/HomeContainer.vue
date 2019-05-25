<template>
  <div>
    <!-- banner -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>


    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu1.png">
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu2.png">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
               <img src="../images/menu3.png">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>
       
    </ul> 
    
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'HomeContainer',
  data(){
    return {
       bannerList:[]
    }
  },
  methods:{
    getBanner(){
      this.$http.get("http://localhost:9090/banner/list").then((result) => {
          this.bannerList = result.body;
      },(result)=>{

          Toast("加载失败")
      })
    }
  },
  created(){
    this.getBanner();
  }
}
</script>


<style scoped>
.mint-swipe{
  height: 200px;
}

img{
  width: 100%;
  height: 100%;
}

.mui-grid-view.mui-grid-9{
  background-color: white;
  border: none;
}

.mui-grid-view.mui-grid-9 img{
  width: 60px;
  height: 60px;
}

.mui-col-sm-3{
  width: 33.333%
}
</style>
