// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});

// router.beforeEach(( to, from, next ) => {
//   if (to.name != 'auth') {//判断当前是否是新建的auth路由空白页面
//     let _token = sessionStorage.getItem('wechataccess_token');
//     if (!_token) {//如果没有token,则让它授权
//       //保存当前路由地址，授权后还会跳到此地址
//       sessionStorage.setItem('beforeUrl', to.fullPath);
//       //授权请求,并跳转http://m.water.ui-tech.cn/auth路由页面
//       window.location.href = ''
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
