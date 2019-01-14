<template>
  <div class="main2">
    <div class="t-1 color40"></div>
    <div class="t-2">
      <div>&nbsp;&nbsp;+86&nbsp;请输入您的手机号</div>
      <div class="t-2-i">
        <input type="text" class="van-field__control">
      </div>
    </div>
    <div class="t-2">
      <van-row>
        <van-col span="12">&nbsp;&nbsp;请输入短信验证码</van-col>
        <van-col span="12" class="textRight">
          <div class="t-yz">获取验证码</div>
        </van-col>
      </van-row>
      <div class="t-2-i">
        <input type="text" class="van-field__control">
      </div>
    </div>
    <div class="t-2">
      <div>&nbsp;&nbsp;+86&nbsp;请设置密码</div>
      <div class="t-2-i">
        <input type="text" class="van-field__control">
      </div>
    </div>
    <div class="div-btn">
      <van-button size="large" type="login">登陆</van-button>
    </div>
    <div class="t-bz">
      用户注册代表同意
      <span class="color206">《花桥爱生活隐私政策》</span>
    </div>
    <div class="t-wx-login" id="wxlogin">
      <div>
        <img src="../../../assets/images/wechat.png" class="wximg"/>
          <div>微信</div>
      </div>
    </div>
  </div>
</template>

 
 
<style lang="less">.main2 {
  position: relative;
  .van-nav-bar__text {
    color: rgb(40, 40, 40);
  }
  .t-wx-login {
    position: absolute;
    bottom: 45px;
    width: 100%;
    height: 60px;
    .wximg {
      height: 40px;
    }
  }
  .t-1 {
    height: 30px;
    width: 100%;
    line-height: 30px;
    font-size: 22px;
    color: rgb(40, 40, 40);
  }
  .t-2 {
    margin: 0 20px 20px 20px;
    text-align: left;
    color: rgb(40, 40, 40);
    .t-flex {
      display: flex;
      .flex-1 {
        flex: 1;
      }
      .flex-img img {
        width: 25px;
        height: 20px;
        margin-top: 5px;
      }
    }

    .t-2-i {
      border-bottom: 1px solid #f5f5f5;
      input {
        margin-left: 5px;
      }
    }
    .t-2-a {
      text-align: right;
      padding: 10px 0;
    }
    .t-2-f {
      display: flex;
    }
    .t-yz {
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      border: 1px solid rgb(195, 195, 195);
      padding: 0 8px;
      width: 60px;
      color: rgb(195, 195, 195);
      border-radius: 5px;
      right: 20px;
      position: absolute;
    }
    div {
      height: 30px;
      line-height: 30px;
    }
  }
  .t-bz {
    margin: 20px;
    text-align: left;
    font-size: 12px;
  }
}
@media (max-height: 480px) {
  .main2 {
    .t-1 {
      display: none;
    }
    .t-wx-login {
      bottom: 30px;
    }
  }
}
</style>
<script src="./index.js"></script>