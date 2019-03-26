<template>
  <div class="main">
    <div class="h-top">
      <van-row>
        <van-col span="3" class="h-t-content c-84">
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
    <div class="main" id="main">
      <div style="width:100%;height:50px;"></div>
      <div class="h-swiper">
        <van-swipe indicator-color="#e33125" :loop="true" :autoplay="3000" @change="onChange">
          <van-swipe-item v-for="(item,index) in imgList" :key="index">
            <img :src="item.proImgAddr" @click="goDetails(item)" v-lazy="item.proImgAddr">
          </van-swipe-item>
          <div class="van-swipe__indicators" slot="indicator">
            <div
              :class="current === index?'indicator active':'indicator'"
              v-for="(item,index) in imgList"
              :key="index"
            ></div>
          </div>
        </van-swipe>
      </div>
      <div class="h-list">
        <div class="l-content" v-for="(item,index) in bxList" :key="index" @click="goDetails(item)">
          <div class="left">
            <img :src="item.proImgAddr" v-lazy="item.proImgAddr">
          </div>
          <div class="right">
            <div class="r-1">{{item.proName}}</div>
            <!-- <div class="r-2">{{item.proDesc}}</div> -->
            <div class="r-3">{{item.createTime}}</div>
          </div>
        </div>
      </div>
      <div style="height:50px;width:100%;"></div>
      <van-popup v-model="leftShow" position="left" overlay-class="menu-overlay">
        <div :style="{ height: popheight+'px' }"></div>
        <div class="h-menu" :style="{ height:'calc(100vh - '+ menuHeight +'px)' }">
          <div
            :class="item.dicNo === status.dicNo ?'item active':'item'"
            v-for="(item,index) in menuList"
            :key="index"
            @click="goHomeType(item,index)"
          >{{item.dicDesc}}</div>
        </div>
        <div style="height:50px;"></div>
      </van-popup>
      <van-popup v-model="upShow" style="width:100%;" :close-on-click-overlay="false">
        <div class="up-popup">
          <div class="up-title"></div>
          <div class="up-content">
            <div class="u1">版本:{{configObj.version_a}}</div>
            <div class="u1">更新时间:{{configObj.release}}</div>
          </div>
          <div class="up-slider">
            <van-progress :percentage="downList.sliderValue"/>
          </div>
          <div class="up-btn" v-if="downList.downBtn">
            <div id="nextbtn" @click="nextbtn">下次再说</div>
            <div id="downloadA" @click="downloadA">安装</div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>


<style  lang="less">
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
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
}
.h-top {
    height: 50px;
    position: fixed;
    z-index: 99;
    width: 100%;
    background: white;
    padding-top: 10px;
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
      width: 8px;
      height: 8px;
      border-radius: 100%;
      margin-left: 10px;
      border: 2px solid white;
      div {
        width: 12px;
        height: 12px;
        border-radius: 100%;
      }
    }
    .active {
      background: #e33125;
      border: 2px solid #e33125;
    }
  }
}
.h-list {
  margin-top: 10px;
  .l-content {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    .left {
      width: 110px;
      height: 80px;
      margin-left: 10px;
      border:1px solid #f5f5f5;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      img {
        max-width: 100%;
        max-height: 80px;
        vertical-align: middle;
      }
    }
    .right {
      width: 50%;
      margin-left: 10px;
      text-align: left;
      .r-1 {
        color: #2d2d2d;
        font-size: 16px;
        height: 60px;
        line-height: 25px;
      }
      .r-2 {
        color: #9e9e9e;
        height: 55px;
        overflow: hidden;
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
  // height: calc(100vh - 110px);
  overflow-x: hidden;
  .item {
    height: 32px;
    line-height: 32px;
    padding: 8px 0;
    background-color: rgba(255, 255, 255, 0.95);
  }
  .active {
    border-left: 3px solid #a08755;
    color: #a08755;
  }
}
.menu-overlay {
  background-color: rgba(0, 0, 0, 0);
}
.up-popup {
  width: 60%;
  margin: 0 auto;
  background: white;
  text-align: left;
  padding: 0 20px;
  background: url("../../assets/images/upgrade.png") no-repeat;
  background-size: cover;
  .up-title {
    width: 100%;
    height: 160px;
  }
  .up-content {
    div {
      font-size: 12px;
    }
    .u1 {
      height: 20px;
      line-height: 20px;
    }
    .u2 {
      line-height: 20px;
    }
  }
  .up-slider {
    padding: 10px 0 15px 0;
    .van-progress {
      height: 10px;
    }
    .van-progress__pivot {
      right: 10px;
    }
    .van-slider__bar {
      background-color: brown;
    }
    .van-slider--disabled {
      opacity: 0.9;
    }
  }
  .up-btn {
    display: flex;
    width: 100%;
    padding: 10px 0 15px 0;
    div {
      flex: 1;
      border: 1px solid #999;
      text-align: center;
      margin: 0 10px 0 0;
      padding: 3px;
      font-size: 13px;
      border-radius: 2px;
    }
  }
}
</style>
<script src="./index.js"></script>