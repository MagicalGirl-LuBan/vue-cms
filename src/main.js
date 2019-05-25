import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import router from './router';

Vue.use(VueResource);
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





new Vue({
  render: h => h(App),
  router
}).$mount('#app')



