

export default {
  data(){
    return {
      msg:'123123'
    }
  },
  methods:{
    goHistory(){
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/history',
        query:{
          searchType:'personal'
        }
      })
    },
    goPublish(){
      this.$common.Skip(this,'/Publish')
    }
  }
}