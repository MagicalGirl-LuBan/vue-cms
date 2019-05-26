<template>
  <div class="newsInfoContainer">
    <div class="title">
      <h3>{{news.title}}</h3>
    </div>
    <div class="subtitle">
      <span>发表时间：{{news.addtime | dateFormat}}</span>
      <span>点击：{{news.click}}次</span>
    </div>

    <hr>

    <div class="content" v-html="news.content">

    </div>

    <comment :newsId="newsId"></comment>
    
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import Comment from '../Comment.vue';
export default {
  name: 'NewsInfo',
  data(){
    return {
      // 获取url传递过来的id
      newsId:this.$route.params.id,
      news:{}
    }
  },
  methods:{
    getNewsInfo(){
      this.$http.get("news/"+this.newsId).then((result) => {
          this.news = result.body;
      },(result)=>{

          Toast("加载失败")
      })
    }
  },
  created(){
    this.getNewsInfo();
  },
  components:{
      "comment":Comment
  }
}
</script>


<style>
.newsInfoContainer{
  padding: 0 4px;
}

.newsInfoContainer .title{
  text-align: center;
  font-size: 14px;
  color: red;
  margin: 15px 0;
}

.newsInfoContainer .subtitle{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #226aff; 
}

.newsInfoContainer .content img{
  width: 100%;
}

</style>
