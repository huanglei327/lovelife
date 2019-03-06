<template>
  <div class="main2 bgf5">
    <van-cell-group>
      <van-cell title="个人信息" is-link value="内容" @click="goMySelf">
       <img :src="tou"  class="tou"/>
      </van-cell>
      <van-cell title="身份验证" is-link >
         <template>
              <div>刘试试  <span class="d-yrz">已认证</span></div>
          </template>
      </van-cell>
      <van-cell title="账户安全" is-link  @click="goSafety"/>
      <van-cell title="积分中心" is-link />
      <!-- <van-cell title="清空缓存" is-link  @click="clearLocal"/> -->
    </van-cell-group>
    <!-- <div class="btn-tc" @click="btnExit">
       退出
    </div> -->
  </div>
</template>


<style lang="less">
.main2 {
  .van-cell__title{
    text-align: left;
  }
  .tou{
    width: 25px;
  }
  .d-yrz{
      background: #f4ddb25e;
        color: #a58444;
        padding: 3px 5px;
        border-radius: 5px;
        margin-left: 10px;
  }
  .btn-tc{
    margin-top: 20px;
    background: white;
    padding: 13px;
    color: red;
  }
}
</style>
<script src="./index.js"></script>
