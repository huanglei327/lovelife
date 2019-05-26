import {
  productHomeListApi,
} from '@/utils/httpUtils/api.js'
export default {
  data() {
    return {
      loading: false,
      finished: false,
      finishedText: '',
      status: {
        offset: 1,
        limit: 20,
        dicNo: '',
        dicName: ''
      },
      bxList: [],
      isShow: true,
      query: {}
    }
  },
  mounted() {
    this.searchList = JSON.parse(localStorage.getItem("SearchList"))
    this.query = this.$route.query
    this.status.dicName = this.query.searchValue
    this.onLoad()
  },
  methods: {

    onLoad() {
      const that = this
      that.loading = true
      // 异步更新数据
      setTimeout(() => {
        console.log('------------')
        that.productHomeList()
      }, 500);
    },
    productHomeList() {
      const that = this
      const c = res => {
        if (res.resCode == 1 && res.dataObj && res.dataObj.prdList) {
          if (that.status.offset == 1) {
            that.bxList = []
          }
          //普通广告位
          if (res.dataObj.prdList) {
            res.dataObj.prdList.list.forEach(item => {
              let imgArr = item.proImgAddr.split(',')
              item.proImgAddr = imgArr[0]
              that.bxList.push(item)
            });
            that.loading = false
            if (parseInt(that.status.offset * that.status.limit) >= res.dataObj.prdList.total) {
              that.finished = true
              //that.finishedText = '没有更多了'
            }
            else
              that.finished = false
            that.status.offset += 1
          }
          else {
            that.finished = true
            that.loading = false
          }
        }
        else {
          that.finished = true
          that.loading = false
          that.isShow = false
        }
      }
      const param = {
        offset: that.status.offset,
        limit: that.status.limit,
        proTypeNo: that.status.dicNo,
        prdName: that.status.dicName
      }

      productHomeListApi(param).then(c)
    },
    goDetails(item) {
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/Details',
        query: {
          prdId: item.id
        }
      })
    },
  }
}