<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/news/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.createtime | dateFormat }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
      

    </ul>

    
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'NewsList',
  data(){
    return {
      newsList:[]
    }
  },
  methods:{
    getNewsList(){
      this.$http.get("news/list").then((result) => {
          this.newsList = result.body;
      },(result)=>{

          Toast("加载失败")
      })
    }
  },
  created(){
    this.getNewsList();
  }
}
</script>


<style scoped>
.mui-media-body h3{
  font-size: 14px;
}
.mui-ellipsis{
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}

</style>
