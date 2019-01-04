export default {
  data(){
    return {
      msg:'用户首页'
    }
  },
  methods:{
    goLogin(){
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/SignIn'
      })
    }
  }
}