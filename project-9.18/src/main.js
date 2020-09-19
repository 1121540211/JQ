import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//手动配置element-ui
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false

//引入组件
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu
} from 'element-ui';

Vue.use(Container).use(Header).use(Aside).use(Main).use(Footer).use(MenuItem).use(Menu).use(MenuItemGroup).use(Submenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
