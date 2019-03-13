<template>
  <div>
    <van-nav-bar title="发布详情" fixed left-arrow @click-left="onClickLeft" >
      <template slot="right">
        <div class="right-list">
          <div @click="goEnshrine">
            <img src="../../../assets/images/release-collection1.png">
          </div>
          <div @click="goShare">
            <img src="../../../assets/images/release-share.png">
          </div>
        </div>
      </template>
    </van-nav-bar>

    <div class="main2 bgf5">
      <div class="head-img">
        <img :src="obj.proImgAddr">
      </div>
      <div class="d-list">
        <div class="menu-title font16">{{obj.proName}}</div>
        <!-- <div class="d-content">
          <div class="left">工作时间</div>
          <div class="right">{{obj.proOpenTime}}</div>
        </div> -->
        <div class="d-content">
          <div class="left">工作地址</div>
          <div class="right">{{obj.proAddr}}
            <br>
            <!-- <span class="remark">(距您步行1120米需要12分钟)</span> -->
          </div>
        </div>
        <div class="d-content">
          <div class="left">联系电话</div>
          <div class="right"> {{obj.mobile}}</div>
        </div>
      </div>
      <div class="pline"></div>
      <div class="d-list">
        <div class="menu-title font16">最新优惠</div>
        <div class="d-content">
          <div class="left">最新优惠</div>
          <div
            class="right"
          >{{obj.loveDisCounts}}</div>
        </div>
      </div>
      <div class="d-list">
        <div class="menu-title font16">服务介绍</div>
        <div class="d-content">
          <div class="left">服务介绍</div>
          <div
            class="right"
          >{{obj.proDesc}}</div>
        </div>
      </div>
      
      <div class="d-advertising">
        <img src="../../../assets/images/advertising.jpg" @mouseenter="download" @mouseleave="upDown"/>
      </div>
    </div>
  </div>
</template>
 

<style lang="less">
.right-list {
  display: flex;
  height: 42px;
  div {
    margin: 0 10px;
  }
  img {
    width: 20px;
  }
}
.head-img {
  background: white;
  img {
    width: 100%;
    height: 260px;
  }
}
.d-advertising{
  img{
    width:100%;
  }
  // background: url(../../../assets/images/advertising.jpg) no-repeat;
  // background-size: cover;    
}
.d-list {
  text-align: left;
  padding: 0 15px;
  background: white;
  .menu-title {
    border-bottom: 1px solid #f5f5f5;
    padding: 17px 0;
  }
  .d-content {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: 15px 0;
    .left {
      color: rgb(181, 181, 181);
      width: 70px;
    }
    .right {
      color: rgb(101, 101, 101);
      flex: 1;
      line-height: 22px;
      .remark {
        font-size: 12px;
        color: rgb(181, 181, 181);
      }
    }
  }
}
</style>
<script src="./index.js"></script>
