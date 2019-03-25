
import { productDetailsApi } from '@/utils/httpUtils/api.js'
import { ImagePreview } from 'vant';
export default {
  data() {
    return {
      prdId:'',
      obj:{},
      imgNum:0,
      imgList:[]
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
        that.obj.proImgAddr = that.obj.proImgAddr.substring(0,that.obj.proImgAddr.length-1)
        let imgArr = that.obj.proImgAddr.split(',')
        that.obj.proImgAddr = imgArr[0]
        that.imgNum = imgArr.length
        that.imgList = imgArr
      }
      const param = {
        prdId:that.prdId
      }
      productDetailsApi(param).then(c)
    },
    imgPreview() {
      const that = this;
      ImagePreview(that.imgList);
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