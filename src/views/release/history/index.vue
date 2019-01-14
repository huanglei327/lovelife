<template>
  <div class="main2 bgf5">
    <div class="m-list">
      <div class="m-content" v-for="(item,index) in historyList" :key="index" @click="goDetails(item)">
        <div class="m-left">
          <img src="../../../assets/sucai/release_history_pic.png">
        </div>
        <div class="m-right">
          <div class="r-1 color45">{{item.title}}</div>
          <div class="r-2"><img src="../../../assets/images/release_history_select.png"><span class="m-l-5">{{item.type}}</span></div>
          <div class="r-3">
            <span>免费预约</span>
          </div>
          <div class="r-4">
            <div class="r-4-1">商户</div>
            <div class="r-4-2">{{item.address}}</div>
            <div class="r-4-3">{{item.distance}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 

<style lang="less">
.m-content {
  display: flex;
  background: white;
  margin-bottom: 10px;
  .m-left {
    padding: 15px;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .m-right {
    padding:15px 15px 15px 0;
    width: 100%;
    text-align: left;
    .r-1 {
      height: 25px;
    }
    .r-2 {
      color: rgb(86, 86, 86);
      font-size: 10px;
      height: 25px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      img{
        height:15px;
      }
    }
    .r-3 {
      height: 25px;
      line-height: 20px;
       font-size: 10px;
      border-bottom: 1px solid #f5f5f5;
      span {
        background: #f4ddb25e;
        color: #a58444;
        padding: 3px 5px;
        border-radius: 5px;
      }     
    }
    .r-4 {
      display: flex;
      height: 20px;
      color: #565656;
      font-size: 12px;
      line-height: 20px;
      margin-top: 5px;
      .r-4-1 {
        background: #cea860;
        color: white;
        border-radius: 10px;
        font-size: 12px;
        width: 35px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        margin-right: 5px;
      }
      .r-4-2{
        flex: 1;
      }
      .r-4-3{
        
      }
    }
  }
}
</style>
<script src="./index.js"></script>
