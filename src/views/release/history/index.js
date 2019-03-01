
import { productListApi } from '@/utils/httpUtils/api.js'
export default {
  data(){
    return {
        historyList:[
          {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          },
          {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          }, {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          },
          {
            img:'',
            title:'乐智课',
            type:'到店',
            address:'普新路',
            distance:'1.1KM'
          }
        ]
    }
  },
  mounted(){
    this.getProductList()
  },
  methods:{
    goDetails(item){
      this.$common.Skip(this,'/Details')
    },
    getProductList(){
      const that = this
      const c = res =>{
        console.log(res)
      }
      const param = {
        loginAcct:'18825205670',
        offset:1,
        limit:20
      }
      productListApi(param).then(c)
    }
  }
}