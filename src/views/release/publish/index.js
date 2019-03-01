import { dictionariesListApi, saveProductApi, saveFileApi } from '@/utils/httpUtils/api.js'
import { COPYFILE_FICLONE_FORCE } from 'constants';
export default {
  data() {
    return {
      imgdisabled: false,
      imglist: [],
      typeShow:false,
      columns: [],
      status: {
        proName: '',
        proDesc: '',
        proAddr: '上海',
        proOpenTime: new Date(),
        mobile:'18825205670',
        proTypeNo:'19000003',
        proTypeName:'',
        dealType: '19000023',
        proPrice: '',
        mobile: '18825205670',
        filesPath: '',
      }
    }
  },
  mounted(){
    this.getMenuList()
  },
  methods: {
    clearImg(item) {
      const that = this;
      for (var i = 0; i < that.imglist.length; i++) {
        if (that.imglist[i] == item) that.imglist.splice(i, 1);
      }
    },
    protypeClick(type) {
      this.status.dealType = type
    },
    savePublish() {
      const that = this
      if (this.checkSaveInput()) {

        const c = res => {
          if(res.resCode==1){
            that.$toast.success('添加成功');
            
          }
        }
        const param = {
          proName: that.status.proName,
          proDesc: that.status.proDesc,
          proAddr: that.status.proAddr,
          proOpenTime:that.status.proOpenTime,
          dealType: that.status.dealType,
          proPrice: that.status.proPrice,
          proTypeNo:that.status.proTypeNo,
          mobile:that.status.mobile,
          filesPath: that.status.filesPath
        }
        saveProductApi(param).then(c)
      }
    },
    checkSaveInput() {
      const that = this
      if (that.status.proName === '') {
        that.$toast.fail('请输入标题')
        return false
      }
      else if (that.status.proDesc === '') {
        that.$toast.fail('请输入详情')
        return false
      }
      else if (that.status.proPrice === '') {
        that.$toast.fail('请输入价格')
        return false
      }
      else if (that.status.proAddr === '') {
        that.$toast.fail('请选择地址')
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
            console.log(res)
            that.$toast.clear()
            that.$toast.success({
              message: "上传成功",
              duration: 1500
            });
            that.imglist.push(file.content);
            that.status.filesPath = res.dataObj.imgUrl+','
            console.log(that.status)
          }
          else {
            that.$toast.fail("上传失败" + res.errorMsg)
          }
        }
        var formData = new FormData();
        formData.append("file",that.dataURLtoBlob(file.content),file.file.name);
        saveFileApi(formData).then(c)
      }
    },
    getMenuList(){
      const that =this
      const c = res=>{
          console.log(res)
          that.menuList = res.dataObj
          let menuArr = []
          res.dataObj.forEach(item => {
            menuArr.push({
              text: item.dicDesc,
              index:item.dicNo
            })
          });
          that.columns = menuArr
      }
      const param = {
        parentDicNo:'19000002'
      }
      dictionariesListApi(param).then(c)
    },
    dataURLtoBlob (dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type: mime});
    },
    onConfirm(value) {
      this.status.proTypeNo = value.index
      this.status.proTypeName = value.text
      this.typeShow = false
    },
    onCancel() {
      this.typeShow = false
    },
    showMenu(){
      this.typeShow = true
    },
  }
}