<template>
  <div class="main2 bgf5">
    <div class="pline"></div>
    <div>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入手机号">
          <van-button slot="button" size="small" type="yzm">获取验证码</van-button>
        </van-field>
        <van-field v-model="value" placeholder="请输入验证码"/>
      </van-cell-group>
    </div>
      <div class="div-btn m-t-20">
      <van-button size="large" type="login">确定</van-button>
    </div>
  </div>
</template>
 

<style lang="less">
.main2 {
  .van-cell__title {
    text-align: left;
  }
  .tou {
    width: 25px;
  }
  .d-yrz {
    background: #f4ddb25e;
    color: #a58444;
    padding: 3px 5px;
    border-radius: 5px;
    margin-left: 10px;
  }
}
</style>
<script src="./index.js"></script>
