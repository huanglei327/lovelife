<template>
  <div id="app">
    <van-nav-bar v-show="tshow" :title="navtitle" :left-text="left_text" :left-arrow="left_arrow" fixed @click-left="onClickLeft" @click-right="onClickRight" />
    <router-view/>
    <van-tabbar v-model="activea.tabbarActive" @change="tabChange" v-show="bshow">
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.home1 : icon.home">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">发布</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.release1 : icon.release">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">视频</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.video1 : icon.video">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">语音</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.voice1 : icon.voice">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">人脉</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.connections1 : icon.connections">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.my1 : icon.my">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import './assets/css/common.css'
import './assets/css/login.css'
import my from './assets/images/my.png'
import my1 from './assets/images/my1.png'
import home from './assets/images/home.png'
import home1 from './assets/images/home1.png'
import video from './assets/images/video.png'
import video1 from './assets/images/video1.png'
import voice from './assets/images/voice.png'
import voice1 from './assets/images/voice1.png'
import release from './assets/images/release.png'
import release1 from './assets/images/release1.png'
import connections from './assets/images/connections.png'
import connections1 from './assets/images/connections1.png'
import iconright from './assets/images/icon-right.png'

import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      icon: {
        my: my,
        my1: my1,
        home: home,
        home1: home1,
        video: video,
        video1: video1,
        voice: voice,
        voice1: voice1,
        release: release,
        release1: release1,
        connections: connections,
        connections1: connections1
      },
      activeShow: true,
      titleShow: false
    }
  },
  created() {
    this.tabActive()
  },
  mounted() {},
  computed: {
    ...mapGetters([
      'navtitle',
      'left_arrow',
      'left_text',
      'tshow',
      'bshow',
      'tabbarActive'
    ]),
    ...mapState({
      activea: state => state
    })
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1)
    },
    onClickRight: function() {
      console.log('onClickRight-')
    },
    tabActive() {
      const that = this
      let v = that.$route.path
      switch (v) {
        case '/':
          that.active = 0
          break
        case '/ReleaseIndex':
          that.active = 1
          break
        case '/UserIndex':
          that.active = 5
          break
      }
    },
    tabChange(event) {
      let url = ''
      switch (event) {
        case 0:
          url = '/'
          break
        case 1:
          url = '/ReleaseIndex'
          break
        case 2:
          url = '/videoIndex'
          break
        case 3:
          url = '/voiceIndex'
          break
        case 4:
          url = '/friendCircleIndex'
          break
        case 5:
          url = '/UserIndex'
          break
      }
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: url
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(50, 50, 50);
}
.main {
  position: relative;
  margin-bottom: 50px;
  height: calc(100vh - 50px);
  margin-top:0;
  .van-popup {
    background-color: transparent;
  }
  // .van-popup--left {
  //   top: 51.5%;
  // }
}
.van-nav-bar__left{
  min-width: 30px;
}
.van-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.icon-title {
  width: 20px;
}
.pline {
  height: 12px;
  width: 100%;
}
.main2 {
  margin-top: 46px;
  position: relative;
  height: calc(100vh - 46px);
}
.main3 {
  position: relative;
  height: calc(100vh - 46px);
}
.bgf5 {
  background: #f5f5f5;
}
.bgwhite {
  background: white;
}
.van-tabbar-item__icon img {
  height: 20px;
}
.errmsg {
  text-align: right;
}
.font16 {
  font-size: 16px;
}
.tabColor {
  color: #a08755;
}
.color40 {
  color: rgb(40, 40, 40);
}
.color45 {
  color: rgb(45, 45, 45);
}
.color86 {
  color: rgb(86, 86, 86);
}
.color206 {
  color: rgb(206, 168, 96);
}
.color109 {
  color: rgb(109, 109, 109);
}
.color195 {
  color: rgb(195, 195, 195);
}
.tabColorH {
  color: #323232;
}
.textRight {
  text-align: right;
}
.div-btn {
  margin: 0 20px;
}
.div-btn1 {
  margin: 15px;
}
.m-l-5 {
  margin-left: 5px;
}
.m-t-20 {
  margin-top: 20px;
}
.m-t-10 {
  margin-top: 10px;
}
.van-button--large {
  height: 45px;
  line-height: 43px;
}
.icon-arrow {
  background-image: url('./assets/images/icon-left.png');
}
.van-button--login {
  color: #fff;
  background-color: rgb(206, 168, 96);
  border: 1px solid rgb(206, 168, 96);
  letter-spacing: 2px;
}
.van-button--yzm {
  border: 1px solid rgb(195, 195, 195);
  color: rgb(86, 86, 86);
  background: white;
}
.van-button--save {
  color: #fff;
  background-color: #ee5e3f;
  border: 1px solid #ee5e3f;
  letter-spacing: 2px;
}
.van-nav-bar .van-icon {
  color: #656565;
}
.van-nav-bar__arrow {
  font-size: 20px;
}
.van-swipe-cell__right {
  background: rgb(97, 168, 250);
  color: white;
  line-height: 134px;
  width: 65px;
}
</style>
