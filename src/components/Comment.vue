<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <textarea maxlength="120"></textarea>
    
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="comment-list">
      <div class="comment-item" v-for="(item,i) in commentsList" :key="item.id">
        <div class="comment-title">
            第{{i+1}}楼 &nbsp; 用户：{{item.username}} &nbsp;&nbsp;发表时间：{{item.createtime | dateFormat}}
        </div>
        <div class="comment-body">
            {{item.comment}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>

export default {
  name: 'comment',
  data(){
    return {
      currentPage:1,
      commentsList:[]
    }
  },
  methods:{
    getComments(){
      this.$http.get("comment/list/"+this.newsId+"?currentPage="+this.currentPage).then((result) => {
          this.commentsList = this.commentsList.concat(result.body.list);
      },(result)=>{

          Toast("加载失败")
      })
    },
    getMore(){
        this.currentPage ++;
        this.getComments();
    }
  },
  created(){
    this.getComments();
  },
  props:["newsId"]
}
</script>


<style scoped>
textarea{
  font-size: 14px;
  height: 85px;
  margin: 0;
}

.comment-list{
  font-size: 13px;
}
.comment-list .comment-item .comment-title{
  background-color: #ccc;
  line-height: 30px;
}

.comment-list .comment-item .comment-body{
  line-height: 30px;
  text-indent: 2em;
}
</style>
