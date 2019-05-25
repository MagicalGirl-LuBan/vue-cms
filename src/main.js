import Vue from 'vue'
import App from './App.vue'
import router from './router';

// mint-ui
import { Button,Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
// mui
import './lib/mui/css/mui.min.css'

Vue.config.productionTip = false

// mint-ui
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);





new Vue({
  render: h => h(App),
  router
}).$mount('#app')



