import Vue from 'vue'
import ElementUI from 'element-ui'
// import '../stastic/element-ui2.4.9-index.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

import App from './App.vue'
import Welcome from './pages/welcome.vue'
import ElementLaout from './pages/element-layoutui.vue'
import Select1 from './pages/select-1.vue'
import Select2 from './pages/select-2.vue'
import Home from './pages/home.vue'

const router = new VueRouter({
  /*
    routes: [
      {path: '/',component: Welcome},
      {path: '/home',component: Home},
      {path: '/element',component: ElementLaout},
      {path: '/select1',component: Select1},
      {path: '/select2',component: Select2},
    ]
  */
  // mode:'history',
  routes: [

    {
      path: '/list',
      component: Welcome,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'element',
          name: 'element',
          component: ElementLaout,
        },
        {
          path: 'select1',
          name: 'select1',
          component: Select1,
        },
        {
          path: 'select2',
          name: 'select2',
          component: Select2,
        },
      ]
    },
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
