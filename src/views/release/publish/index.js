export default {
  data() {
    return {
      imgdisabled: false,
      imglist: ['http://b-ssl.duitang.com/uploads/blog/201408/17/20140817001725_2kLSv.jpeg', 'http://b-ssl.duitang.com/uploads/blog/201408/17/20140817001725_2kLSv.jpeg']
    }
  },
  methods: {
    clearImg(item) {
      const that = this;
      for (var i = 0; i < that.imglist.length; i++) {
          if (that.imglist[i] == item) that.imglist.splice(i, 1);
      }
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
        if (file.file.size > 1024 * 100 * 5) {
          toast1.clear();
          that.$dialog.alert({
            message: '请上传小于5MB的图片'
          });
          return
        }
        that.$toast.clear()
            that.$toast.success({
              message: "上传成功",
              duration: 1500
            });
            that.imglist.push(file.content);
        // //对象
        // const callback = res => {
        //   if (res.errcode === 0) {
        //     that.$toast.clear()
        //     that.$toast.success({
        //       message: "上传成功",
        //       duration: 1500
        //     });
        //     that.imglist.push(file.content);
        //   }
        // };
        // const param = {
        //   base64String: file.content
        // };

        // UpImg(param).then(callback);
      }
    }
  }
}