import {
  dictionariesListApi,
  saveProductApi,
  saveFileApi,
  getLocationValueApi,
  productDetailsApi,
  upProductApi
} from '@/utils/httpUtils/api.js'
import { ImagePreview } from 'vant';
export default {
  data() {
    return {
      imgdisabled: false,
      imglist: [],
      typeShow: false,
      columns: [],
      timeShow: false,
      columnsTime: [
        {
          text: '周一至周五 08:00-20:00',
          index: '1'
        },
        {
          text: '周一至周日 08:00-20:00',
          index: '2'
        }
      ],
      status: {
        id:'',
        proName: '',
        proDesc: '',
        proAddr: '',
        loveDisCounts: '',
        city: '',  //城市
        district: '',   //地区
        proOpenTime: ' ',
        mobile: '',
        proTypeNo: '',
        proTypeName: '',
        dealType: '19000023',
        proPrice: '0',
        filesPath: '',
      },
      query: {},
      isBtn: false
    }
  },
  mounted() {
    this.query = this.$route.query
    if (this.query.type === 'up')
      this.isBtn = true
    this.getMenuList()
  },
  methods: {
    productDetailsLoad() {
      const that = this
      const c = res => {
        that.status = res.dataObj
        let imgArr = that.status.proImgAddr.split(',')
        for(let i = 0 ;i<imgArr.length-1;i++){
          that.imglist.push(imgArr[i])
        }
        //that.imglist = imgArr
        that.status.filesPath = that.status.proImgAddr
        that.status.proTypeName = that.$common.getMenuNameById(that.status.proTypeNo)
      }
      const param = {
        prdId: that.query.prdId
      }
      productDetailsApi(param).then(c)
    },
    clearImg(item) {
      const that = this;
      for (var i = 0; i < that.imglist.length; i++) {
        if (that.imglist[i] == item) that.imglist.splice(i, 1);
      }
      that.status.filesPath = ''
      that.imglist.forEach(item => {
        that.status.filesPath += item + ','
      });
    },
    protypeClick(type) {
      this.status.dealType = type
    },
    savePublish() {
      const that = this
      if (this.checkSaveInput()) {
        const c = res => {
          if (res.resCode == 1) {
            that.$toast.success('添加成功');
            that.$router.go(-1);
          }
        }
        const param = {
          proName: that.status.proName,
          proDesc: that.status.proDesc,
          proAddr: that.status.proAddr,
          proOpenTime: that.status.proOpenTime,
          dealType: that.status.dealType,
          proPrice: that.status.proPrice,
          proTypeNo: that.status.proTypeNo,
          mobile: that.status.mobile,
          filesPath: that.status.filesPath,
          loveDisCounts: that.status.loveDisCounts
        }
        saveProductApi(param).then(c)
      }
    },
    upPublish(){
      const that = this
      if (this.checkSaveInput()) {
        const c = res => {
          if (res.resCode == 1) {
            that.$toast.success('保存成功');
            that.$router.go(-1);
          }
        }
        const param = {
          id:that.status.id,
          proName: that.status.proName,
          proDesc: that.status.proDesc,
          proAddr: that.status.proAddr,
          proOpenTime: that.status.proOpenTime,
          dealType: that.status.dealType,
          proPrice: that.status.proPrice,
          proTypeNo: that.status.proTypeNo,
          mobile: that.status.mobile,
          filesPath: that.status.filesPath,
          loveDisCounts: that.status.loveDisCounts
        }
        upProductApi(param).then(c)
      }
    },
    checkSaveInput() {
      const that = this
      if (that.status.proName === '') {
        that.$toast.fail('请输入标题')
        return false
      }
      else if (that.status.proDesc === '') {
        that.$toast.fail('请输入服务介绍')
        return false
      }
      else if (that.status.filesPath === '') {
        that.$toast.fail('请至少上传一张图片')
        return false
      }
      // else if (that.status.proOpenTime === '') {
      //   that.$toast.fail('请选择时间')
      //   return false
      // }
      // else if (!that.$checkVal.checkRate(that.status.proPrice)) {
      //   //that.$toast.fail('请输入价格')
      //   return false
      // }
      else if (that.status.proAddr === '') {
        that.$toast.fail('请输入地址')
        return false
      }
      // else if (that.$checkVal.checkPhone(that.status.mobile === '')) {
      //   return false
      // }
      else if (that.status.proTypeName === '') {
        that.$toast.fail('请选择分类')
        return false
      }
      return true
    },
    imgPreview(item) {
      const that = this;
      ImagePreview(that.imglist);
    },
    onRead(file) {
      const that = this;
      //数组
      if (Array.isArray(file)) {
      } else {
        const toast1 = that.$toast.loading({
          mask: false,
          message: '上传中...',
          duration: 5000
        });
        // if (file.file.size > 1024 * 100 * 5) {
        //   toast1.clear();
        //   that.$dialog.alert({
        //     message: '请上传小于5MB的图片'
        //   });
        //   return
        // }
        const c = res => {
          if (res.resCode == 1) {
            that.$toast.clear()
            that.$toast.success({
              message: "上传成功",
              duration: 1500
            });
            that.imglist.push(that.$common.applicationUrl() + res.dataObj.imgUrl);
            //that.status.filesPath = res.dataObj.imgUrl+','
            that.status.filesPath = ''
            that.imglist.forEach(item => {
              that.status.filesPath += item + ','
            });
          }
          else {
            that.$toast.fail("上传失败" + res.errorMsg)
          }
        }
        var formData = new FormData();
        formData.append("file", that.dataURLtoBlob(file.content), file.file.name);
        saveFileApi(formData).then(c)
      }
    },
    getMenuList() {
      const that = this
      const c = res => {
        that.menuList = res.dataObj
        let menuArr = []
        res.dataObj.forEach(item => {
          menuArr.push({
            text: item.dicDesc,
            index: item.dicNo
          })
        });
        that.columns = menuArr
        //获取定位
        //that.getLocation()
        that.productDetailsLoad()
      }
      const param = {
        parentDicNo: '19000002'
      }
      dictionariesListApi(param).then(c)
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    onConfirm(value) {
      this.status.proTypeNo = value.index
      this.status.proTypeName = value.text
      this.typeShow = false
    },
    onCancel() {
      this.typeShow = false
    },
    showMenu() {
      this.typeShow = true
    },
    showTime() {
      this.timeShow = true
    },
    onTimeCancel() {
      this.timeShow = false
    },
    onTimeConfirm(value) {
      //this.status.proOpenTime = value.index
      this.status.proOpenTime = value.text
      this.timeShow = false
    },
    getLocation() {
      const that = this
      document.addEventListener('deviceready', () => {
        navigator.geolocation.getCurrentPosition((position) => {
          // alert('纬度: '          + position.coords.latitude          + '\n' +
          // '经度: '         + position.coords.longitude         + '\n' +
          // '海拔: '          + position.coords.altitude          + '\n' +
          // '水平精度: '          + position.coords.accuracy          + '\n' +
          // '垂直精度: ' + position.coords.altitudeAccuracy  + '\n' +
          // '方向: '           + position.coords.heading           + '\n' +
          // '速度: '             + position.coords.speed             + '\n' +
          // '时间戳: '         + position.timestamp                + '\n');
          const c = res => {
            const obj = res.regeocode.addressComponent
            that.status.proAddr = obj.city + ' ' + obj.district
            that.status.city = obj.city
            that.status.district = obj.district
          }
          getLocationValueApi(position.coords.longitude + ',' + position.coords.latitude).then(c)
        }, (error) => {
          that.$toast.fail('获取定位失败,请允许获取定位权限!')
          that.status.proAddr = ''
          //that.getLocation()
        });
      });
    },
  }
}