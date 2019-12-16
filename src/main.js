// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import utilt from './utils/util'
import * as validate_ from './utils/validate'//引用文件
import * as common_ from './assets/js/common'
import Navigation from 'vue-navigation'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.config.productionTip = false
Vue.prototype.$checkVal = validate_
Vue.prototype.$common = common_
Vue.prototype.$TiXingStatus = false
Vue.prototype.HOST = '/api'
//Toast.allowMultiple()
router.beforeEach((to, from, next) => {
  var scrollTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;

  let temp = false;
  let tempObj = {};
  let scroMap = JSON.parse(sessionStorage.getItem("scroMap"))
  if (scroMap && scroMap.length > 0) {
    scroMap.forEach(item => {
      if (item.path === from.path) {
        item.scrollTop = scrollTop;
        temp = true;
        tempObj = item;
      }
    });
  }
  else {
    scroMap = []
  }
  if (!temp) {
    if (!from.meta.keepAlive){
      scrollTop = 0
    }
    tempObj = {
      path: from.path,
      scrollTop: scrollTop
    };
    scroMap.push(tempObj);
  }
  sessionStorage.setItem("scroMap", JSON.stringify(scroMap));

  let userinfo = JSON.parse(localStorage.getItem("userInfo"))
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (userinfo && userinfo.Authorization && userinfo.slls_login_user !== '88888888888') {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/PwdSignIn',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    //恶心操作  存入一个临时用户
    if (!userinfo) {
      let tempUser = { "Authorization": "8794505d-c32a-4961-99ed-2e0805141064", "slls_login_user": "88888888888" }
      localStorage.setItem("userInfo", JSON.stringify(tempUser))
    }
    next();
  }

})
router.afterEach((to, from, next) => {
  if (typeof (to.meta.tabbarActive) !== 'undefined') {
    store.commit('getTabbarActive', to.meta.tabbarActive)
  }
  if (to.path === '/' || to.path === '/Index') {
    store.commit('getNavList',
      { 'navtitle': to.meta.title, 'left_text': '', 'left_arrow': false, 'bshow': to.meta.bshow, 'tshow': to.meta.tshow })
  }
  else {
    //window.scrollTo(0, 0);
    store.commit('getNavList',
      { 'navtitle': to.meta.title, 'left_text': '', 'left_arrow': true, 'bshow': to.meta.bshow, 'tshow': to.meta.tshow })
  }
  
   //window.scrollTo(0,0);
})
/* eslint-disable no-new */
Vue.use(Navigation, { router, store })
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
