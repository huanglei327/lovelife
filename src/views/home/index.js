
import bj from '../../assets/images/bj.jpg'
import bj1 from '../../assets/images/bj1.jpg'
import bj2 from '../../assets/images/bj2.jpg'
import bj3 from '../../assets/images/bj3.jpg'

import {
  dictionariesListApi,
  productHomeListApi,
  getLocationValueApi,
  honeMainApi,
  getConfigApi,
  LoginApi
} from '@/utils/httpUtils/api.js'


export default {
  data() {
    return {
      msg: '224324',
      popheight: 60,
      menuHeight: 110,
      active: 0,
      leftShow: false,
      upShow: false,
      downList: {
        sliderValue: 0,
        size: 0,
        downBtn: true
      },
      status: {
        offset: 1,
        limit: 20,
        dicNo: ''
      },
      versions:{
        version:'',
        time:''
      },
      configObj:{},
      templist: "",
      menuList: [],
      imgList: [
        // {
        //   id: 1,
        //   name: bj
        // },
        // {
        //   id: 2,
        //   name: bj1
        // },
        // {
        //   id: 3,
        //   name: bj2
        // },
        // {
        //   id: 4,
        //   name: bj3
        // },
      ],
      current: 0,
      bxList: [
        // {
        //   id: 1,
        //   img: bj,
        //   title: '涉水险',
        //   remark: '全国范围故障车辆免费救援。学的险种配搭',
        //   time: '2018-12-05 12:02:12'
        // },
        // {
        //   id: 1,
        //   img: bj1,
        //   title: '涉水险',
        //   remark: '全国范围故障车辆免费救援。学的险种配搭',
        //   time: '2018-12-05 12:02:12'
        // },
        // {
        //   id: 1,
        //   img: bj2,
        //   title: '涉水险',
        //   remark: '全国范围故障车辆免费救援。学的险种配搭',
        //   time: '2018-12-05 12:02:12'
        // }
      ]
    }
  },
  created() {

  },
  mounted() {
    const that = this
    that.init()
    window.onscroll = function () {
      // that.popheight = 60 - that.getScrollTop()
      // that.menuHeight = 110 - (60 - that.popheight)
    }
    setTimeout(() => {
      //this.judgeDown()
      this.getLocation()
      this.getConfigApi()
    }, 3000);
  },
  methods: {
    init() {
      this.getMenuList()
      this.productHomeList()
    },
    pwdSignin(){
      const c = res=>{
        if(res.resCode == 1)
          localStorage.setItem("userInfo",JSON.stringify(res.dataObj))
      }
      const param = {
        loginAcct: '88888888888',
        authCode: '',
        password: 'sz19@pig)!' //用户登陆
      }
      LoginApi(param).then(c)
    },
    getConfigApi() {
      const that =this
      document.addEventListener('deviceready', () => {
        const c = res => {
          let confirmObj = res
          that.configObj = res 
          chcp.getVersionInfo((err, data) => {
            //如果版本号不一样直接下载更新
            if (confirmObj.version_a !== data.appVersion) {
              that.upShow = true
            }
            else {
              //如果不相等 说明当前网页版本有更新
              if (confirmObj.release !== data.currentWebVersion) {
                var options = {
                  "auto-download": true,
                  "auto-install": true,
                  'config-file': confirmObj.content_url + '/chcp.json'
                };
                let chcp = window.chcp;
                chcp.configure(options, function (error) {
                  if (error) {
                  } else {
                    chcp.fetchUpdate((error, data) => {
                      if (error) {
                        //alert('no update')
                      }
                      else {
                        //alert("update is")
                      }
                    });
                  }
                });
              }
            }
          });
        }
        getConfigApi().then(c)
      });
    },
    goHistory(item) {
      this.$router.push({
        path: '/history',
        query: {
          proTypeNo: item.dicNo
        }
      })
    },
    goDetails(item) {
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/Details',
        query: {
          prdId: item.id
        }
      })
    },
    goHomeType(item) {
      this.status.dicNo = item.dicNo
      this.leftShow = false
      this.productHomeList()
    },
    productHomeList() {
      const that = this
      const c = res => {
        if (that.status.offset == 1) {
          that.imgList = []
          that.bxList = []
        }
        //轮播图
        res.dataObj.paramCarousel.forEach(item => {
          let imgArr = item.proImgAddr.split(',')
          item.proImgAddr = imgArr[0]
          that.imgList.push(item)
        });
        //广告产品
        res.dataObj.paramTop.forEach(item => {
          let imgArr = item.proImgAddr.split(',')
          item.proImgAddr = imgArr[0]
          that.bxList.push(item)
        });
        console.log(that.bxList)
      }
      const param = {
        offset: that.status.offset,
        limit: that.status.limit,
        dicNo: that.status.dicNo
      }

      honeMainApi(param).then(c)
    },
    getMenuList() {
      const that = this
      const c = res => {
        console.log(res)
        that.menuList = res.dataObj
        localStorage.setItem("menuList",JSON.stringify(res.dataObj))
      }
      const param = {
        parentDicNo: '19000002'
      }
      dictionariesListApi(param).then(c)
    },
    onChange(index) {
      this.current = index;
    },
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    getLocation() {
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

        }, (error) => {
          // alert('code: '    + error.code    + '\n' +
          // 'message: ' + error.message + '\n');
        });
      });
    },
    judgeDown() {
      const that = this
      document.addEventListener('deviceready', () => {
        let chcp = window.chcp;
        // 检测更新
        chcp.fetchUpdate((error, data) => {
          if (error) {
            //alert(JSON.stringify(error))
            if (error && error.code == chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW) {
              that.upShow = true
            }
          }
          // 服务器版本信息
          // console.log('--更新的版本信息--', data.config);
          // 版本信息
          chcp.getVersionInfo((err, data) => {
            // alert('服务器应用时间版本: ' + data.readyToInstallWebVersion);

            // alert('当前应用时间版本： ' + data.currentWebVersion);

            // alert('当前应用version name: ' + data.appVersion);

          });

        });
      });
    },
    downloadA() {
      const that = this
      that.downList.downBtn = false
      alert('downloadA')
      var fileTransfer = new FileTransfer();
      fileTransfer.onprogress = function (e) {
        if (e.lengthComputable) {
          that.downList.sliderValue = parseInt(e.loaded / e.total * 100)
          that.downList.size = Math.floor(e.total)
          that.templist = JSON.stringify(e)
        }
      }
      var uri = encodeURI("http://dsunyun.com/www/app-debug.apk");
      var fileURL = cordova.file.externalApplicationStorageDirectory + 'app-debug.apk'
      fileTransfer.download(
        uri,
        fileURL,
        function (entry) {
          cordova.plugins.fileOpener2.open(
            entry.toURL(),
            'application/vnd.android.package-archive',
            {
              error: function (e) {
                alert(entry.toURL())
                alert('Error status: ' + e.status + ' - Error message: ' + e.message);
              },
              success: function () {
                alert('file opened successfully');
              }
            }
          );
        },
        function (error) {
        },
        false,
        {
          // headers: {
          //   "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
          // }
        }
      );
    },
    nextbtn() {
      this.upShow = false
    }
  }
}