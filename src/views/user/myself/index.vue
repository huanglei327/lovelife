<template>
  <div class="main2 bgf5">
    <van-nav-bar
      title="个人信息"
      right-text="保存"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="bgwhite my-top">
      <div class="my-img">
        <img src="../../../assets/images/myself.png">
      </div>
      <div>点击修改头像</div>
    </div>
    <div class="pline"></div>
    <div class="input-list">
      <van-cell-group>
        <van-field v-model="obj.userId" label="用户ID"/>
        <van-field v-model="obj.phoneNo" label="手机号码/账号"/>
        <van-field v-model="obj.userName" label="昵称"/>
        <div class="van-cell van-field">
          <div class="van-cell__title">
            <span>性别</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <van-radio-group v-model="obj.sex" >
                <van-radio name="1" checked-color="#dcbb7b">男</van-radio>
                <van-radio name="2" checked-color="#dcbb7b">女</van-radio>
              </van-radio-group>
            </div>
          </div>
        </div>
        <div class="van-cell van-hairline van-field van-cell--required">
          <div class="van-cell__title">
            <span>出生日期</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body" @click="showTime">
              <input
                type="text"
                disabled
                v-model="obj.birthday"
                placeholder="请选择开始时间"
                class="van-field__control"
              >
            </div>
          </div>
        </div>
      </van-cell-group>
    </div>
     <van-popup
        v-model="timeShow"
        position="bottom"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="beginMinDate"
          :max-date="beginMaxDate"
          @confirm="onconfirm"
          @cancel="showTime"
          :formatter="formatter"
        />
      </van-popup>
  </div>
</template>
 

<style lang="less">
.main2 {
  .van-nav-bar__text {
    color: rgb(40, 40, 40);
  }
  .my-top {
    padding: 20px 0;
    color: rgb(181, 181, 181);
    .my-img {
      background: white;
      padding-bottom: 5px;
    }
  }
  .input-list{
    .van-cell__title{
      text-align: left;
    }
    .van-field .van-cell__title{
      max-width: 120px;
    }
    .van-radio-group{
      display: flex;
      .van-radio{
        margin-right: 20px;
      }
    }
  }
}
</style>
<script src="./index.js"></script>
