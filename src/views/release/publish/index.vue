<template>
  <div class="main2 bgf5">
    <div class="bgwhite">
      <div class="d-input b-t-f5">
        <input type="text" placeholder="标题" v-model="status.proName" maxlength="8" class="van-field__control">
      </div>
      <div class="d-input">
        <textarea placeholder="服务介绍" maxlength="100" v-model="status.proDesc" rows="1" class="van-field__control textheight"></textarea>
        
      </div>
      <div class="img-list">
        <ul class="up-img-ul">
          <li>
            <div>
              <van-uploader :after-read="onRead" accept multiple :disabled="imgdisabled">
                <img src="../../../assets/images/release-add.png" class="img-item">
              </van-uploader>
            </div>
          </li>
          <li v-for="(item,index) in imglist" :key="index">
            <div class="imgX" @click="clearImg(item)">
              <!-- <van-icon name="clear" @click="clearImg(item)"/> -->
              <img src="../../../assets/images/release_delete.png" class="img-icon">
            </div>
            <img :src="item" @click="imgPreview(item)" class="img-item">
          </li>
        </ul>
      </div>
      <div class="d-localtion">
        <!-- <div>
          <van-icon name="location" class="d-icon"/>
        </div> -->
        <div>
          <span>{{status.city}}</span>
          <span>{{status.district}}</span>
        </div>
      </div>
    </div>
    <div class="pline"></div>
    <div class="list-content">
      <div class="list-input">
         <!-- <van-row>
          <van-col span="8">时间</van-col>
          <van-col span="14">
            <div @click="showTime">
              <input
              type="text"
              disabled
              v-model="status.proOpenTime"
              placeholder="请选择时间"
              class="van-field__control"
            >
            </div>
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row> -->
        <!-- <van-row>
          <van-col span="8">价格</van-col>
          <van-col span="14">
            <input
              type="number"
              v-model="status.proPrice"
              placeholder="请输入价格"
              class="van-field__control"
            >
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row> -->
         <van-row>
          <van-col span="8">分类</van-col>
          <van-col span="14" >
            <div @click="showMenu">
            <input
              type="text"
               v-model="status.proTypeName"
              disabled
              placeholder="请选择分类"
              class="van-field__control"
            >
            </div>
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="8">最新优惠</van-col>
          <van-col span="14">
            <input
              type="text"
              v-model="status.loveDiscounts"
              placeholder="请输入最新优惠"
              class="van-field__control"
            >
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="8">地址</van-col>
          <van-col span="14">
            <input
              type="text"
              v-model="status.proAddr"
              placeholder="请输入地址"
              class="van-field__control"
            >
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row>
          <van-row>
          <van-col span="8">电话</van-col>
          <van-col span="14">
            <input
              type="text"
              v-model="status.mobile"
              placeholder="请输入电话"
              class="van-field__control"
            >
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row>
       
         <van-row>
          <van-col span="8">交易方式</van-col>
          <van-col span="14">
                <div v-if="status.dealType === '19000026'">
                  <img src="../../../assets/images/release-pay.png" class="btn-type" @click="protypeClick('19000026')">
                  <img src="../../../assets/images/release-self.png" class="btn-type" @click="protypeClick('19000023')">
                </div>
                <div v-else>
                  <img src="../../../assets/images/release-pay1.png" class="btn-type" @click="protypeClick('19000026')">
                  <img src="../../../assets/images/release-self1.png" class="btn-type" @click="protypeClick('19000023')">
              </div>
          </van-col>
          <van-col span="2">
            <van-icon name="arrow" class="m-t-2" size="16px"/>
          </van-col>
        </van-row>
      </div>
      <!-- <van-cell-group>
        <van-cell is-link>
          <template slot="title">
            <span class="custom-text">价格</span>
          </template>
        </van-cell>
        <van-cell is-link>
          <template slot="title">
            <span class="custom-text">分类</span>
          </template>
        </van-cell>
        <van-cell class="by">
          <template slot="title">
            <span class="custom-text">交易方式</span>
          </template>
          <template>
            <img src="../../../assets/images/release-pay.png" class="btn-type">
            <img src="../../../assets/images/release-self.png" class="btn-type">
          </template>
        </van-cell>
      </van-cell-group> -->
    </div>
    <div class="div-btn1 m-t-20">
      <van-button size="large" type="save" @click="savePublish">确定发布</van-button>
    </div>
    <van-popup v-model="typeShow" position="bottom">
      <van-picker
        show-toolbar
        title="分类"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup v-model="timeShow" position="bottom">
      <van-picker
        show-toolbar
        title="时间"
        :columns="columnsTime"
        @cancel="onTimeCancel"
        @confirm="onTimeConfirm"
      />
    </van-popup>
  </div>
</template>
<style lang="less">
.list-input{
  background: white;
  padding: 0 15px;
  .van-row{
    padding:10px 0;
    line-height: 24px;
    border-bottom: 1px solid #f5f5f5;
  }
   .m-t-2{
    margin: 5px;
   }
}
.list-content {
  text-align: left;
  .custom-text {
    color: rgb(177, 177, 177);
  }
  .btn-type {
    width: 75px;
    margin-right: 5px;
  }
  .by {
    .van-cell__title {
      flex: 0.4;
    }
  }
}
.d-input {
  padding: 15px;
  .textheight {
    height: 100px;
  }
}
.b-t-f5 {
  border-bottom: 1px solid #f5f5f5;
}
.d-localtion {
  clear: both;
  text-align: left;
  padding: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;

  .d-icon {
    font-size: 20px;
  }
}
.imgX {
  position: absolute;
  right: left;
  /* line-height: 30px; */
  height: 25px;
  background: white;
  width: 25px;
  border-radius: 50%;
  left: 0;
  top: 0;
}
.up-img-ul {
  padding-left: 10px;
}
.colored {
  color: red;
}
.up-img-ul li {
  position: relative;
  float: left;
  // border: 1px solid #f5f5f5;
  margin: 5px;
  height: 80px;
  width: 80px;
  padding: 5px;
  text-align: center;
  .img-item {
    height: 80px;
    width: 80px;
  }
  .img-icon {
    height: 25px;
  }
}
</style>
<script src="./index.js"></script>