<template>
  <div>
    <van-nav-bar title="标题" fixed left-arrow @click-left="onClickLeft" @click-right="onClickRight">
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
        <img src="../../../assets/images/product details_pic.png">
      </div>
      <div class="d-list">
        <div class="menu-title font16">乐智课</div>
        <div class="d-content">
          <div class="left">工作时间</div>
          <div class="right">周一至周日08:00-20:00</div>
        </div>
        <div class="d-content">
          <div class="left">工作地址</div>
          <div class="right">上海市嘉定区光明路963号
            <br>
            <span class="remark">(距您步行1120米需要12分钟)</span>
          </div>
        </div>
        <div class="d-content">
          <div class="left">联系电话</div>
          <div class="right">18825205555</div>
        </div>
      </div>
      <div class="pline"></div>
      <div class="d-list">
        <div class="menu-title font16">课程介绍</div>
        <div class="d-content">
          <div class="left">课程介绍</div>
          <div
            class="right"
          >对于宝宝的自信心培养和独立性锻炼，情感与亲子依恋，社会性培养，专注性培养，感觉统合训练，运动企划，音乐启蒙，综合认知八大主题，让宝宝早体验和搜索中学习</div>
        </div>
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
  }
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
      .remark {
        font-size: 12px;
        color: rgb(181, 181, 181);
      }
    }
  }
}
</style>
<script src="./index.js"></script>
