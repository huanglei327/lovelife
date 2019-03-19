import { getAuthCodeApi, RegisterApi, validateAccessApi } from '@/utils/httpUtils/api.js'
import zyImg from '../../../assets/images/zy.png'
import byImg from '../../../assets/images/by.png'

export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      pwdImg: zyImg,
      status: {
        phoneNo: '',
        password: '',
        authCode: '',
      },
      phone: {
        code: false,
        name: '获取验证码',
        timeOut: ''
      },
    }
  },
  mounted() {
    window.onresize = () => {
      if (this.clientHeight > document.documentElement.clientHeight) {
        document.getElementById("wxlogin").style.display = "none";
      } else {
        document.getElementById("wxlogin").style.display = "block";
      }
    };
  },
  methods: {
    goRegister() {
      const that = this
      if (!that.$checkVal.checkPhone(that.status.phoneNo)) {
        return
      }
      if (!that.$checkVal.checkAuthCode(that.status.authCode)) {
        return
      }
      if (!that.$checkVal.checkValueNull(that.status.password, '请输入密码')) {
        return
      }
      const c = res => {
        if (res.resCode == 1) {
          that.$toast.success('注册成功')
          that.$common.Skip(this, '/PwdSignIn')
        }
        else {
          that.$toast.fail('注册失败,' + res.errorMsg)
        }
      }
      const param = {
        loginAcct: that.status.phoneNo,
        password: that.status.password,
        authCode: that.status.authCode
      }
      RegisterApi(param).then(c)
    },
    checkAccess() {
      const that = this
      //判断手机号
      if (!that.$checkVal.checkPhone(that.status.phoneNo)) {
        return
      }
      if (that.phone.code)
        return
      that.phone.code = true
      const c = res => {
        if (res.dataObj.isRegister === '已注册') {
          that.$toast.fail('已注册,请直接登陆！')
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
            localStorage.setItem("userInfo", JSON.stringify(res.dataObj))
          }
          else {
            that.phone.code = false
            that.$toast.fail(res.errorMsg);
          }
        }
        const param = {
          loginAcct: that.status.phoneNo,
          authCodeType: 0
        }
        getAuthCodeApi(param).then(c)
      }
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