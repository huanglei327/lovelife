<template>
  <div class="main bg9ae5f8">
     
      <div class="d-advertising">
        <img src="../../../assets/images/bgreamrk.jpg" />
    </div>
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
.ggremark{
  padding: 20px 10px;
  text-align: left;
  h3{
    margin: 10px;
  }
  div{
    padding-top: 2px;
  }
}
.d-advertising{
  position: absolute;
  bottom: 150px;
  img{
    width:100%;
  }
  // background: url(../../../assets/images/advertising.jpg) no-repeat;
  // background-size: cover;    
}
.r-list {
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
