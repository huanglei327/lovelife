<template>
  <div class="main2 bgf5">
     <div class="pline"></div>
    <van-cell-group>
      <van-cell title="修改登陆密码" is-link @click="goUpPwd"/>
      <van-cell title="修改/绑定手机号码" is-link value="123123131" @click="goAuthentication" />
    </van-cell-group>
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
}
</style>
<script src="./index.js"></script>
