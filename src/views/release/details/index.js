
import { productDetailsApi } from '@/utils/httpUtils/api.js'
export default {
  data() {
    return {
      prdId:'',
      obj:{}
    }
  },
  mounted() {
     
     this.prdId=this.$route.query.prdId
     this.productDetailsLoad()
  },
  methods: {
    productDetailsLoad() {
      const that = this
      const c = res => {
        that.obj = res.dataObj
        let imgArr = that.obj.proImgAddr.split(',')
        that.obj.proImgAddr = imgArr[0]
      }
      const param = {
        prdId:that.prdId
      }
      productDetailsApi(param).then(c)
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    goEnshrine() {
      this.$toast('点击了收藏');
    },
    goShare() {
      this.$toast('点击了分享');
    },
    download(){
      this.$toast('download');
    },
    upDown(){
      this.$toast('upDown');
    }
  }
}