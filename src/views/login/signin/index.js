import { getAuthCodeApi, LoginApi, validateAccessApi } from '@/utils/httpUtils/api.js'
export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      phone: {
        code: false,
        name: '获取验证码',
        timeOut: ''
      },
      status: {
        phoneNo: '',
        code: ''
      },
      authObj:{

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
    goPwdSignin() {
      this.$common.Skip(this, '/PwdSignIn')
    },
    goLogin() {
      const that = this
      //验证
      if (!that.$checkVal.checkPhone(that.status.phoneNo)) {
        return
      }
      if(!that.$checkVal.checkAuthCode(that.status.code))
      {
        return
      }

      const c = res => {
        if(res.resCode == 1){
          localStorage.setItem("userInfo",JSON.stringify(res.dataObj))
          this.$common.Skip(this, '/')
        }
        else{
          that.$toast.fail('登陆失败,'+res.errorMsg)
        }
      }
      const param = {
        loginAcct: that.status.phoneNo,
        authCode: that.status.code,
        password: '' //用户登陆
      }
      LoginApi(param).then(c)
    },
    checkAccess() {
      const that = this
      //判断手机号
      if (!that.$checkVal.checkPhone(that.status.phoneNo)) {
        return
      }
      //判断是否在验证码阶段
      if (that.phone.code){
        return
      }
      that.phone.code = true
      const c = res => {
        if (res.dataObj === '未注册') {
          that.$toast.fail('请先注册')
          that.phone.code = false
        }
        else {
          that.getPhoneCode()
        }
      }
      const param = {
        loginAcct: that.status.phoneNo
      }
      validateAccessApi(param).then(c)
    },
    getPhoneCode() {
      const that = this
      if (that.phone.code) {
        const c = res => {
          if (res.resCode == 1) {
            let codeNum = 60
            that.timeOut = setInterval(() => {
              codeNum--
              that.phone.name = '重新获取(' + codeNum + 's)'
              if (codeNum === 0) {
                clearInterval(that.timeOut);
                that.phone.code = false
                that.phone.name = '获取验证码'
              }
            }, 1000);
            //that.authObj = res.dataObj
            localStorage.setItem("userInfo",JSON.stringify(res.dataObj))
          }
          else {
            that.phone.code = false
            that.$toast.fail(res.errorMsg);
          }
        }
        const param = {
          loginAcct: that.status.phoneNo,
          authCodeType: 1
        }
        getAuthCodeApi(param).then(c)
      }
    }
  }
}