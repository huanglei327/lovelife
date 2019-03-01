
import bj from '../../assets/images/bj.jpg'
import bj1 from '../../assets/images/bj1.jpg'
import bj2 from '../../assets/images/bj2.jpg'
import bj3 from '../../assets/images/bj3.jpg'

import { dictionariesListApi } from '@/utils/httpUtils/api.js'

export default {
  data() {
    return {
      msg: '224324',
      popheight: 60,
      active: 0,
      leftShow: false,
      upShow: false,
      downList: {
        sliderValue: 50,
        size: 0,
        downBtn: true
      },
      templist: "",
      menuList: [
        {
          name: '最新新闻'
        },
        {
          name: '餐厅娱乐'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
        {
          name: '轻松购物'
        },
      ],
      imgList: [
        {
          id: 1,
          name: bj
        },
        {
          id: 2,
          name: bj1
        },
        {
          id: 3,
          name: bj2
        },
        {
          id: 4,
          name: bj3
        },
      ],
      current: 0,
      bxList: [
        {
          id: 1,
          img: bj,
          title: '涉水险',
          remark: '全国范围故障车辆免费救援。学的险种配搭',
          time: '2018-12-05 12:02:12'
        },
        {
          id: 1,
          img: bj1,
          title: '涉水险',
          remark: '全国范围故障车辆免费救援。学的险种配搭',
          time: '2018-12-05 12:02:12'
        },
        {
          id: 1,
          img: bj2,
          title: '涉水险',
          remark: '全国范围故障车辆免费救援。学的险种配搭',
          time: '2018-12-05 12:02:12'
        }
      ]
    }
  },
  created(){
    
  },
  mounted() {
    const that = this
    that.init()
    window.onscroll = function () {
      console.log(that.getScrollTop())
      that.popheight = 60 - that.getScrollTop()
    }
    setTimeout(() => {
      this.judgeDown()
    }, 3000);
  },
  methods: {
    init(){
      this.getMenuList()
    },
    getMenuList(){
      const that =this
      const c = res=>{
          console.log(res)
          that.menuList= res.dataObj
      }
      const param = {
        parentDicNo:'19000002'
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
    judgeDown() {
      const that = this
      document.addEventListener('deviceready', () => {
        let chcp = window.chcp;
        // 检测更新
        chcp.fetchUpdate((error, data) => {
          if (error) {
            alert(JSON.stringify(error))
            if (error && error.code == chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW) {
              that.upShow = true
              // var isTrue = window.confirm('有新的包，是否更新')
              // if (isTrue) {
              //   that.downloadA()
              // } else {
              //   that.upShow = false
              // }
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