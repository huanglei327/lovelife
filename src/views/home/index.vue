<template>
  <div class="main m-t-10" id="main">
    <div class="h-top">
      <van-row>
        <van-col span="3" class="h-t-content c-84" >
          <div class="h-t-img" @click="leftShow = true">
            <img src="../../assets/images/classification.png">
          </div>
          <div @click="leftShow = true">分类</div>
        </van-col>
        <van-col span="15" class="h-t-content">
          <div class="h-t-s">
            <div class="title">
              <img src="../../assets/images/search.png"> 花桥爱生活、特惠中
            </div>
          </div>
        </van-col>
        <van-col span="3" class="h-t-content c-84">
          <div class="h-t-img">
            <img src="../../assets/images/signin.png">
          </div>
          <div>签到</div>
        </van-col>
        <van-col span="3" class="h-t-content c-84">
          <div class="h-t-img">
            <img src="../../assets/images/scan.png">
          </div>
          <div>扫一扫</div>
        </van-col>
      </van-row>
    </div>
    <div class="h-swiper">
      <van-swipe indicator-color="#e33125" :loop="false" @change="onChange">
        <van-swipe-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.name">
        </van-swipe-item>
        <!-- <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div> -->
        <div class="van-swipe__indicators" slot="indicator">
          <div class="indicator" v-for="(item,index) in imgList" :key="index">
            <div :class="current===index?'active':''"></div>
            <!-- <i  :class=" current===index?'van-swipe__indicator van-swipe__indicator--active':'van-swipe__indicator'" >
            </i>-->
          </div>
        </div>
      </van-swipe>
    </div>
    <div class="h-list">
      <div class="l-content" v-for="(item,index) in bxList" :key="index">
        <div class="left">
          <img :src="item.img">
        </div>
        <div class="right">
          <div class="r-1">{{item.title}}</div>
          <div class="r-2">{{item.remark}}</div>
          <div class="r-3">{{item.time}}</div>
        </div>
      </div>
    </div>
    <div style="height:50px;width:100%;"></div>
    <van-popup v-model="leftShow" position="left" overlay-class="menu-overlay">
      <div :style="{ height: popheight+'px' }"></div>
      <div class="h-menu">
        <div  :class="index===0 ?'item active':'item'" v-for="(item,index) in menuList" :key="index">
          {{item.name}}
        </div>
      </div>
      <div style="height:50px;"></div>
    </van-popup>
  </div>
</template>


<style lang="less">
.h-t-content {
  font-size: 12px;
  .h-t-img {
    height: 27px;
    img {
      width: 23px;
      height: 23px;
    }
  }
  .h-t-s {
    width: 100%;
    height: 46px;
    line-height: 43px;
    background: #ededed;
    color: #848484;
    border-radius: 5px;
    align-items: center;
    display: flex;
    .title {
      align-items: center;
      display: flex;
      margin: 0 auto;
    }
    img {
      width: 23px;
      height: 23px;
    }
  }
}
.h-swiper {
  margin-top: 8px;
  width: 100%;
  img {
    height: 180px;
    width: 100%;
  }
  .van-swipe__indicators {
    left: 80%;
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      margin-left: 10px;
      background: white;
      div {
        width: 12px;
        height: 12px;
        border-radius: 100%;
      }
      .active {
        background: #e33125;
      }
    }
  }
}
.h-list {
  margin-top: 10px;
  .l-content {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    .left {
      width: 65%;
      height: 110px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 110px;
      }
    }
    .right {
      margin-left: 10px;
      text-align: left;
      .r-1 {
        color: #2d2d2d;
        font-size: 16px;
        height: 35px;
        line-height: 35px;
      }
      .r-2 {
        color: #9e9e9e;
        height: 55px;
      }
      .r-3 {
        color: #9e9e9e;
        height: 20px;
        line-height: 20px;
      }
    }
  }
}
.h-menu {
  width: 100px;
  height: calc(100vh - 110px);
  overflow-x: hidden;
  .item{
    height: 32px;
    line-height: 32px;
    padding: 8px 0;
    background-color: rgba(255,255,255,0.95);
  }
  .active{
    border-left: 3px solid #a08755;
    color: #a08755;
  }
}
.menu-overlay{
  background-color: rgba(0, 0, 0, 0);
}
</style>
<script src="./index.js"></script>