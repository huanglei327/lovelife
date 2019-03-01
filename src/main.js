// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import utilt from './utils/util'
import * as validate_ from './utils/validate'//引用文件
import * as common_ from './assets/js/common'



import {
  Button,
  Collapse,
  CollapseItem,
  Cell,
  CellGroup,
  NavBar,
  Icon,
  AddressEdit,
  Field,
  Switch,
  Picker,
  Actionsheet,
  popup,
  Uploader,
  Row,
  Col,
  Toast,
  List,
  Panel,
  Dialog,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Area,
  Popup,
  Search,
  Tab,
  Tabs,
  ImagePreview,
  PullRefresh,
  Rate,
  Badge,
  BadgeGroup,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  DatetimePicker,
  Slider,
  Progress
} from 'vant'

Vue.use(Button).use(Collapse).use(CollapseItem).use(Cell).use(CellGroup).use(
  NavBar).use(Icon).use(AddressEdit).use(Field).use(Switch).use(Picker).use(
    Actionsheet).use(popup).use(Uploader).use(Row).use(Col).use(Toast).use(List)
  .use(Panel).use(Dialog).use(RadioGroup).use(Radio).use(Checkbox).use(CheckboxGroup)
  .use(Area).use(Popup).use(Search).use(Tab).use(Tabs).use(ImagePreview).use(PullRefresh).use(Rate)
  .use(Badge).use(BadgeGroup).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(DatetimePicker)
  .use(Slider).use(Progress)


Vue.config.productionTip = false
Vue.prototype.$checkVal = validate_
Vue.prototype.$common = common_
Vue.prototype.$TiXingStatus = false
Vue.prototype.HOST = '/api'
//Toast.allowMultiple()
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    let userinfo = JSON.parse( localStorage.getItem("userInfo"))
    console.log(userinfo)
    if (userinfo &&  userinfo.Authorization) {  // 通过vuex state获取当前的token是否存在
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
    next();
  }

})
router.afterEach((to, from, next) => {
  // if (to.name === "Index" && from.name !== null) {
  //   to.query.access_token = to.query.remindtype
  //   to.query.remindtype = ""
  // }
  if (to.path === '/') {
    store.commit('getNavList',
      { 'navtitle': to.meta.title, 'left_text': '', 'left_arrow': false, 'bshow': to.meta.bshow, 'tshow': to.meta.tshow })
  }
  else {
    store.commit('getNavList',
      { 'navtitle': to.meta.title, 'left_text': '', 'left_arrow': true, 'bshow': to.meta.bshow, 'tshow': to.meta.tshow })
  }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
