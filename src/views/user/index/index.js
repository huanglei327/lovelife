export default {
  data(){
    return {
      msg:'用户首页',
      userInfo :{}
    }
  },
  created(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (userInfo) {
      this.userInfo = userInfo
    }
  },
  methods:{
    goLogin(){
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/SignIn'
      })
    },
    goPerSional(){
      this.$common.Skip(this, '/Personal')
    },
    GoSignin(){
      this.$common.Skip(this, '/Signin')
    }
  }
}