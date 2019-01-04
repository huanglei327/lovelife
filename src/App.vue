<template>
  <div id="app">
    <van-nav-bar
      v-show="tshow"
      :title="navtitle"
      :left-text="left_text"
      :left-arrow="left_arrow"
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view/>
    <van-tabbar v-model="active" @change="tabChange" v-show="bshow">
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
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.connections1 : icon.connections"
        >
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props" :class="props.active ? 'tabColor' : 'tabColorh'">我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.my1 : icon.my">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import "./assets/css/common.css";
import my from "./assets/images/my.png";
import my1 from "./assets/images/my1.png";
import home from "./assets/images/home.png";
import home1 from "./assets/images/home1.png";
import video from "./assets/images/video.png";
import video1 from "./assets/images/video1.png";
import voice from "./assets/images/voice.png";
import voice1 from "./assets/images/voice1.png";
import release from "./assets/images/release.png";
import release1 from "./assets/images/release1.png";
import connections from "./assets/images/connections.png";
import connections1 from "./assets/images/connections1.png";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      active: 0,
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
    };
  },
  created() {
    this.tabActive();
  },
  mounted() {},
  computed: {
    ...mapGetters(["navtitle", "left_arrow", "left_text", "tshow", "bshow"])
  },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1);
    },
    onClickRight: function() {
      console.log("onClickRight-");
    },
    tabActive() {
      const that = this;
      let v = that.$route.path;

      switch (v) {
        case "/":
          that.active = 0;
          break;
        case "/ReleaseIndex":
          that.active = 1;
          break;
        case "/UserIndex":
          that.active = 5;
          break;
      }
    },
    tabChange(event) {
      let url = "";
      switch (event) {
        case 0:
          url = "/";
          break;
        case 1:
          url = "/ReleaseIndex";
          break;
        case 5:
          url = "/UserIndex";
          break;
      }
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: url
      });
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(50, 50, 50);
}
.main {
  position: relative;
  margin-bottom: 50px;
  margin-top: 10px;
  height: calc(100vh - 56px);
  .van-popup {
    background-color: transparent;
  }
  .van-popup--left {
    top: 51.5%;
  }
}
.main2 {
  margin-top: 46px;
  position: relative;
  height: calc(100vh - 46px);
}
.van-tabbar-item__icon img {
  height: 20px;
}
.tabColor {
  color: #a08755;
}
.color40 {
  color: rgb(40, 40, 40);
}
.color206 {
  color: rgb(206, 168, 96);
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
.van-button--login {
  color: #fff;
  background-color: rgb(206, 168, 96);
  border: 1px solid rgb(206, 168, 96);
  letter-spacing: 2px;
}
.van-nav-bar .van-icon {
  color: rgb(40, 40, 40);
}
</style>
