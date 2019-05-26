<template>
  <div class="main2 bgwhite">
    <div class="h-swiper"></div>
    <div class="h-list" v-if="isShow">
      <van-list id="templista" v-model="loading" :finished="finished" :finished-text="finishedText" :offset="300" @load="onLoad">
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
      </van-list>
    </div>
    <div v-else>
      暂无搜索的产品
    </div>
  </div>
</template>

 
<style scoped lang="less">

.h-list {
  margin-top: 10px;
  .l-content {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    padding-top:5px;
    .left {
      width: 110px;
      height: 70px;
      margin-left: 10px;
      border: 1px solid #f5f5f5;
      // display: table-cell;
      // text-align: center;
      // vertical-align: middle;
      border-radius: 3px;
      img {
        max-width: 100%;
        max-height: 70px;
        border-radius: 3px;
        vertical-align: middle;
      }
    }
    .right {
      // width: 50%;
      margin-left: 10px;
      text-align: left;
      flex: 1;
      padding-right: 10px;
      .r-1 {
        color: #2d2d2d;
        font-size: 14px;
        height: 46px;
        line-height: 23px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
        padding-top: 5px;
      }
    }
  }
} 
</style>
<script src="./index.js"></script>
