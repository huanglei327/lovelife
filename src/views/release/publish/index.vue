<template>
  <div class="main2 bgf5">
    <div class="bgwhite">
      <div class="d-input b-t-f5">
        <input type="text" placeholder="标题  请描述内容" class="van-field__control">
      </div>
      <div class="d-input">
        <textarea placeholder="描述一下发布产品详情" rows="1" class="van-field__control textheight"></textarea>
      </div>
      <div class="img-list">
        <ul class="up-img-ul">
          <li>
            <div>
              <van-uploader :after-read="onRead" accept :disabled="imgdisabled">
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
        <div>
          <van-icon name="location" class="d-icon"/>
        </div>
        <div>
          <span>上海</span>
          <span>嘉定</span>
        </div>
      </div>
    </div>
    <div class="pline"></div>
    <div class="list-content">
      <van-cell-group>
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
      </van-cell-group>
    </div>
      <div class="div-btn1 m-t-20">
        <van-button size="large" type="save">确定发布</van-button>
      </div>
  </div>
</template>
<style lang="less">
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