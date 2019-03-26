<template>
  <div class="main">
    <div class="r-list">
      <div class="left" @click="goPublish">
        <div>
          <img src="../../../assets/images/release_history.png">
        </div>
        <div class="title">发布信息</div>
      </div>
      <div class="right" @click="goHistory">
        <div>
          <img src="../../../assets/images/release-information.png">
        </div>
        <div class="title" >发布历史</div>
      </div>
    </div>
  </div>
</template>

 
<style scoped lang="less">
.r-list {
  position: absolute;
  bottom: 52px;
  position: absolute;
  bottom: 52px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  .left,.right {
    width: 50%;
    .title{
      margin-top:10px;
    }
    img {
      height: 44px;
    }
  }
}
</style>
<script src="./index.js"></script>
