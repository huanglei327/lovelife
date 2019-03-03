
import { productListApi,productHomeListApi } from '@/utils/httpUtils/api.js'
export default {
  data(){
    return {
        historyList:[],
        status:{
          offset:1,
          limit:20
        },
        query:{
          searchType:''
        }
    }
  },
  mounted(){
    //个人发布历史查询
    this.query =  this.$route.query
    if(this.query.searchType === 'personal'){
      this.getProductList()
    }
    else{
      //首页查询
      this.productHomeList()
    }
  },
  methods:{
    goDetails(item){
      //this.$common.Skip(this,'/Details')
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/Details',
        query:{
          prdId:item.id
        }
      })
    },
    productHomeList(){
      const that = this
      const c = res =>{
        console.log(res)
       // that.historyList = res.dataObj.list
        if(that.status.offset==1){
          that.historyList = []
        }
        res.dataObj.prdList.list.forEach(item => {
            let imgArr =   item.proImgAddr.split(',')
            item.proImgAddr = imgArr[0]
            that.historyList.push(item)
        });
      }
      const param = {
        proTypeNo:that.query.proTypeNo,
        offset:that.status.offset,
        limit:that.status.limit
      }
      productHomeListApi(param).then(c)
    },
    getProductList(){
      const that = this
      const c = res =>{
        console.log(res)
       // that.historyList = res.dataObj.list
        if(that.status.offset==1){
          that.historyList = []
        }
        res.dataObj.list.forEach(item => {
            let imgArr =   item.proImgAddr.split(',')
            item.proImgAddr = imgArr[0]
            that.historyList.push(item)
        });
      }
      const param = {
        loginAcct:'18825205670',
        offset:that.status.offset,
        limit:that.status.limit
      }
      productListApi(param).then(c)
    }
  }
}