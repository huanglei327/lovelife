<template>
  <div class="main2 bgwhite">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="search-content">
      <div class="main-title">
        <div class="left">历史搜索</div>
        <div class="right">
          <div class="u-name"  @click="delSearch"> 清除<van-icon class="u-icon" name="arrow"/></div>
           
        </div>
      </div>
      <div>
        <div v-if="searchList.length>0" class="se-list">
          <div v-for="(item,index) in searchList" :key="index" @click="goSeachList(item)">
            {{item}}
          </div>
        </div>
        <div v-else class="se-list">
          暂无搜索记录
        </div>
      </div>
    </div>
  </div>
</template>

 
<style scoped lang="less">

.main-title {
  display: flex;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  .left{
    width: 80%;
    text-align: left;
  }
  .right {
    flex: 1;
    .u-icon {
      height: 20px;
      font-size: 14px;
      vertical-align: middle;
      padding-top:3px;
    }
  }
}
.s-search {
  width: 100%;
}
.search-content {
  width: 100%;
  background: white;
  .se-list {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    div {
      padding: 4px 6px;
      padding: 8rpx 12rpx;
      background: #f5f5f5;
      margin-right: 10px;
      margin-top: 10px;
      border-radius: 2px;
    }
  }
}
</style>
<script src="./index.js"></script>
