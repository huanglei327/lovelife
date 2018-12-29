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
  SwipeItem 
} from 'vant'

Vue.use(Button).use(Collapse).use(CollapseItem).use(Cell).use(CellGroup).use(
  NavBar).use(Icon).use(AddressEdit).use(Field).use(Switch).use(Picker).use(
    Actionsheet).use(popup).use(Uploader).use(Row).use(Col).use(Toast).use(List)
  .use(Panel).use(Dialog).use(RadioGroup).use(Radio).use(Checkbox).use(CheckboxGroup)
  .use(Area).use(Popup).use(Search).use(Tab).use(Tabs).use(ImagePreview).use(PullRefresh).use(Rate)
  .use(Badge).use(BadgeGroup).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)


Vue.config.productionTip = false
Vue.prototype.$checkVal = validate_
Vue.prototype.$common = common_
Vue.prototype.$TiXingStatus = false
//Toast.allowMultiple()
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {
  if (to.name === "Index" && from.name !== null) {
    to.query.access_token = to.query.remindtype
    to.query.remindtype = ""
  }
  if (to.path === '/') {
    store.commit('getNavList', { 'navtitle': to.meta.title, 'left_text': '', 'left_arrow': false })
  }
  else {
    store.commit('getNavList', { 'navtitle': to.meta.title, 'left_text': '返回', 'left_arrow': true })
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
