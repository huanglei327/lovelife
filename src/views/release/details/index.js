export default {
  data() {
    return {

    }
  }, methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goEnshrine(){
      this.$toast('点击了收藏');
    },
    goShare(){
      this.$toast('点击了分享');
    }
  }
}