import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import router from './router';

// VueResource
Vue.use(VueResource);
Vue.http.options.root="http://localhost:9090"

// mint-ui
import { Button,Header,Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
// mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

// mint-ui
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//时间格式化全局过滤器
import moment from 'moment';
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern);
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')



