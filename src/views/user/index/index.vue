<template>
  <div class="main bgf5">
    <div class="uhead" v-if="userInfo.Authorization">
      <div class="u-top" @click="goPerSional">
        <img src="../../../assets/images/myhead.png">
      </div>
      <div class="u-title">
        <div class="u-name">上海市嘉定区早教益智远洋中心馆</div>
        <div>
          <div class="u-qd">每日签到>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-row>
        <van-col span="5">
          <div class="u-r-item">
            <img src="../../../assets/images/health.png">
            <div class="item-title">健康</div>
          </div>
        </van-col>
        <van-col span="5">
          <div class="u-r-item">
            <img src="../../../assets/images/dangan.png">
            <div class="item-title">档案</div>
          </div>
        </van-col>
        <van-col span="5">
          <div class="u-r-item">
            <img src="../../../assets/images/renmai.png">
            <div class="item-title">人脉</div>
          </div>
        </van-col>
        <van-col span="5">
          <div class="u-r-item">
            <img src="../../../assets/images/zuji.png">
            <div class="item-title">足迹</div>
          </div>
        </van-col>
        <van-col span="4">
          <div class="u-r-item">
            <img src="../../../assets/images/life.png">
            <div class="item-title">生活</div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="pline"></div>
    <div class="bgwhite">
      <div class="u-menu">
        <div class="left">我的订单</div>
        <div>
          <van-icon name="arrow" class="color109"/>
        </div>
      </div>
      <div class="order-list">
        <van-row>
          <van-col span="6">待付款</van-col>
          <van-col span="6">已付款</van-col>
          <van-col span="6">待评价</van-col>
          <van-col span="6">退款/售后</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

 
<style  lang="less">
.u-menu {
  display: flex;
  padding: 10px 0;
  margin:0 15px;
  border-bottom: 1px solid #f5f5f5;
  .left {
    flex: 1;
    text-align: left;
  }
}
.order-list{
  color: rgb(109, 109, 109);
  .van-col--6{
    padding: 15px 0;
  }
}
.uhead {
  height: 70px;
  padding: 30px 15px;
  display: flex;
  background: rgb(220, 187, 123);
  .u-top {
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
  .u-title {
    text-align: left;
    margin-left: 10px;
    width: 100%;
    div {
      height: 30px;
      line-height: 30px;
      color: white;
    }
    .u-name {
      color: white;
    }
    .u-qd {
      width: 80px;
      background: #cea860;
      border-radius: 5px;
      text-align: center;
      height: 25px;
      font-size: 12px;
      line-height: 25px;
    }
  }
}
.u-r-item {
  padding: 20px 0 5px 0;
  background: white;
  img {
    width: 30px;
  }
  .item-title {
    font-size: 12px;
    color: rgb(109, 109, 109);
    height: 30px;
    line-height: 30px;
  }
}
</style>
<script src="./index.js"></script>
