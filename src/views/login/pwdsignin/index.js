
import zyImg from '../../../assets/images/zy.png'
import byImg from '../../../assets/images/by.png'


import {  LoginApi } from '@/utils/httpUtils/api.js'

export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      pwdImg: zyImg,
      pwdIsTtrue: false,   //false 睁眼  true闭眼
      redirect:'',
      status: {
        phoneNo: '',
        password: ''
      }
    }
  },
  mounted() {
    window.onresize = () => {
      if (this.clientHeight > document.documentElement.clientHeight) {
        document.getElementById("wxlogin").style.display = "none";
      } else {
        document.getElementById("wxlogin").style.display = "block";
      }
    }
    this.redirect = this.$route.query.redirect
  },
  methods: {
    delInput(){
      this.status.phoneNo = ''
   },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$common.Skip(this, '/Register')
    },
    goMsgSignin() {
      this.$common.Skip(this, '/SignIn')
    },
    pwdSignin(){
      const that  = this
      if (!that.$checkVal.checkPhone(that.status.phoneNo)) {
        return
      }
      if (!that.$checkVal.checkValueNull(that.status.password,'请输入密码')) {
        return
      }
      const c = res=>{
        if(res.resCode == 1){
          localStorage.setItem("userInfo",JSON.stringify(res.dataObj))
          // if(that.redirect!==''){
          //   this.$common.Skip(this, that.redirect)
          // }
          // else
          //   this.$common.Skip(this, '/')
          that.$common.skipIsHome(this,that.redirect)
        }
        else{
          that.$toast.fail('登陆失败,'+res.errorMsg)
        }
      }
      const param = {
        loginAcct: that.status.phoneNo,
        authCode: '',
        password: that.status.password //用户登陆
      }
      LoginApi(param).then(c)
    },
    setPwdType() {
      const that = this
      that.pwdIsTtrue = !that.pwdIsTtrue
      var inputPwd = document.getElementById("inputPwd");
      //false 睁眼  true闭眼
      if (that.pwdIsTtrue) {
        that.pwdImg = byImg
        inputPwd.type = 'text'
      }
      else {
        that.pwdImg = zyImg
        inputPwd.type = 'password'
      }
    }
  }
}