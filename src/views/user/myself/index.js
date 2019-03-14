export default {
  data(){
    return {
      msg:'用户首页',
      obj:{
        userId:'',
        phoneNo:'',
        userName:'',
        sex:"1",
        birthday:'',
      },
      timeShow:false,
      minHour: 10,
      maxHour: 20,
      currentDate: new Date(),
      beginMinDate: new Date(1900, 10, 1),
      beginMaxDate:new Date(),
    }
  },
  methods:{
    showTime(){
      this.timeShow = !this.timeShow
    },
    onconfirm(value){
      const that =this
      that.obj.birthday = that.$common.dateToStr(value,'date')
      this.timeShow = !this.timeShow
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    goLogin(){
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/SignIn'
      })
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      //this.$common.Skip(this, '/Register')
    },
  }
}