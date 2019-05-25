
import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import HomeContainer from "./components/HomeContainer.vue"
import MemberContainer from "./components/MemberContainer.vue"
import ShopCartContainer from "./components/ShopCartContainer.vue"
import SearchContainer from "./components/SearchContainer.vue"


// 手动安装
Vue.use(Router)
 
export default new Router({
    routes:[
      {
        path:"/",redirect:"/home"
      },
      {
        path:"/home",component:HomeContainer
      },
      {
        path:"/member",component:MemberContainer
      },
      {
        path:"/shopcart",component:ShopCartContainer
      },
      {
        path:"/search",component:SearchContainer
      }
    ],
    linkActiveClass:"mui-active"  //设置高亮样式
  })