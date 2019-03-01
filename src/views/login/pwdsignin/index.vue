<template>
  <div class="main2">
    <van-nav-bar
      title="密码登陆"
      left-text
      right-text="注册"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="t-1 color40">
      <img src="../../../assets/images/huaqiao.png">
      <div>花桥爱生活</div>
    </div>
    <div class="t-2">
      <div class="t-flex">
        <div class="flex-1">&nbsp;&nbsp;+86&nbsp;请输入您的手机号</div>
        <div class="flex-img">
          <img src="../../../assets/images/del.png">
        </div>
      </div>
      <div class="t-2-i">
        <div>
          <input type="text" v-model="status.phoneNo" class="van-field__control">
        </div>
      </div>
    </div>
    <div class="t-2">
      <div class="t-flex">
        <div class="flex-1">&nbsp;&nbsp;请输入密码</div>
        <div class="flex-img" @click="setPwdType">
          <img :src="pwdImg">
        </div>
      </div>
      <div class="t-2-i">
        <div>
          <input type="password" v-model="status.password" id="inputPwd" class="van-field__control">
        </div>
        <div></div>
      </div>
      <div class="t-2-a" @click="goMsgSignin">使用短信验证码登陆</div>
    </div>

    <div class="div-btn">
      <van-button size="large" @click="pwdSignin" type="login">登陆</van-button>
    </div>
    <div class="t-wx-login" id="wxlogin">
      <div>
        <div>遇到问题？</div>
      </div>
    </div>
  </div>
</template>

 
 
<style lang="less">
.main2 {
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
    height: 100px;
    width: 100%;
    line-height: 20px;
    font-size: 14px;
    color: rgb(40, 40, 40);
    padding: 20px 0;
    img {
      width: 60px;
      height: 60px;
    }
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
      height: 100px;
      padding: 10px 0;
    }
    .t-2 {
      margin: 0 20px 10px 20px;
      .t-2-a {
        text-align: right;
        padding: 5px 0;
      }
    }
    .t-wx-login {
      bottom: 5px;
    }
  }
}
@media (max-height: 568px) {
  .main2 {
    .t-wx-login {
      bottom: 10px;
    }
  }
}
</style>
<script src="./index.js"></script>