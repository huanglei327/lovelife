export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
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
    goPwdSignin(){
      this.$common.Skip(this, '/PwdSignIn')
    }
  }
}