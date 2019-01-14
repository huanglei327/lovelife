
import zyImg from '../../../assets/images/zy.png'
import byImg from '../../../assets/images/by.png'

export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      pwdImg: zyImg,
      pwdIsTtrue: false   //false 睁眼  true闭眼
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
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$common.Skip(this, '/Register')
    },
    goMsgSignin() {
      this.$common.Skip(this, '/SignIn')
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