<template>
  <div id="app">
    <!-- <van-nav-bar
      :title="navtitle"
      :left-text="left_text"
      :left-arrow="left_arrow"
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    <router-view/>
    <van-tabbar v-model="active">
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
      }
    };
  },
  created() {},
  mounted: function() {},
  computed: { ...mapGetters(["navtitle", "left_arrow", "left_text"]) },
  methods: {
    onClickLeft: function() {
      this.$router.go(-1);
    },
    onClickRight: function() {
      console.log("onClickRight-");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.van-tabbar-item__icon img{
  height: 20px;
}
.tabColor {
  color: #a08755;
}
.tabColorH {
  color: #323232;
}
</style>
