<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <mt-button type="default" @click="getList">default</mt-button>
    <button type="button" class="mui-btn">默认</button>
    
    <router-link to="/helloworld1/helloworld3">helloworld3</router-link>
    <router-link to="/helloworld1/helloworld4">helloworld4</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'HelloWorld1',
  data(){
    return {
      msg:"HelloWorld1",
      toastFlag:null
    }
  },
  methods:{
    getList(){
      this.showToast();
      setTimeout(() => {
        this.toastFlag.close();
      }, 1000);
      
    },
    showToast(){
      this.toastFlag = Toast({
          message: '获取数据中',
          duration: -1
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
