/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    window.addEventListener("batterystatus", this.onBatteryStatus, false);
    this.hotUp()
    document.getElementById("cameraTakePicture").addEventListener("click", this.cameraTakePicture);
    document.getElementById("getPosition").addEventListener("click", this.getPosition);
    document.getElementById("watchPosition").addEventListener("click", this.watchPosition);
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
  onBatteryStatus: function () {
    //alert('123123')
  },
  cameraTakePicture: function () {
    //alert('111111111')
    document.getElementById("list").innerHTML = 'cameraTakePictur111111111111111111e'
    navigator.camera.getPicture(function (imageData) {
      document.getElementById("list").innerHTML = 'onSuccess'
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function () {
      {
        document.getElementById("list").innerHTML = 'onFail'
        alert('Failed because: ' + message);
      }
    }, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });
  },
  watchPosition: function () {
    document.getElementById("list").innerHTML = 'watchPosition'
    var options = {
      maximumAge: 3600000,
      timeout: 3000,
      enableHighAccuracy: true,
    }

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

    function onSuccess(position) {

      alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');
    };

    function onError(error) {
      alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

  },
  getPosition: function () {
    document.getElementById("list").innerHTML = 'getPosition'
    var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
    }

    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {

      alert('Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n');
    };

    function onError(error) {
      alert('code:  ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
  },
  downloadFile: function (fileEntry, url) {
    alert('downloadFile')
    // var ft = new FileTransfer();
    // var fileURL = fileEntry.toURL();
    // //监听下载进度
    // ft.onprogress = function (e) {
    //     console.info(e);
    //     if (e.lengthComputable) {
    //         console.log('当前进度：' + e.loaded / e.total);
    //     }
    // }
    // ft.download(url, fileURL, function (entry) {
    //    alert('下载成功');
    //     console.info(entry);
    //     alert('文件位置：' + entry.toURL());
    // }, function (err) {
    //   alert("下载失败！");
    //   alert(JSON.stringify(err));
    // }, null, // or, pass false
    // {
    //     //headers: {
    //     //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //     //}
    // });
  },
  hotUp: function () {
    // document.addEventListener('deviceready', () => {
    //   let chcp = window.chcp;
    //   alert(1)
    //   // 检测更新
    //   chcp.fetchUpdate((error, data) => {
    //     if (error) {
    //       alert(JSON.stringify(error))
    //       if (error && error.code == chcp.error.APPLICATION_BUILD_VERSION_TOO_LOW) {
    //         var isTrue = window.confirm('有新的包，是否更新')
    //         if (isTrue) {

    //           //this.downloadFile            
    //           var fileTransfer = new FileTransfer();
    //           alert('点击了下载')
    //           fileTransfer.onprogress = function (e) {
    //             //alert(JSON.stringify(e));
    //             if (e.lengthComputable) {
    //               //alert('当前进度：' + e.loaded / e.total);
    //               document.getElementById("list").innerHTML = JSON.stringify(e)
    //             }
    //           }
    //           var uri = encodeURI("http://dsunyun.com/www/app-debug.apk");
    //           //var fileURL = 'cdvfile://localhost/persistent/path/to/downloads/'
    //           var fileURL = cordova.file.externalApplicationStorageDirectory + 'app-debug.apk'
    //           fileTransfer.download(
    //             uri,
    //             fileURL,
    //             function (entry) {
    //               alert("download complete: " + entry.toURL());
    //               cordova.plugins.fileOpener2.open(
    //                 entry.toURL(), // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
    //                 'application/vnd.android.package-archive',
    //                 {
    //                   error: function (e) {
    //                     alert(entry.toURL())
    //                     alert('Error status: ' + e.status + ' - Error message: ' + e.message);
    //                   },
    //                   success: function () {
    //                     alert('file opened successfully');
    //                   }
    //                 }
    //               );
    //             },
    //             function (error) {
    //               alert(5)
    //               alert("download error source " + error.source);
    //               alert("download error target " + error.target);
    //               alert("download error code" + error.code);
    //             },
    //             false,
    //             {
    //               // headers: {
    //               //   "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    //               // }
    //             }
    //           );
    //         } else {
    //           alert('您点击了取消')
    //         }
    //       }
    //     }
    //     // 服务器版本信息
    //     // console.log('--更新的版本信息--', data.config);
    //     // 版本信息
    //     chcp.getVersionInfo((err, data) => {
    //       console.log('服务器应用时间版本: ' + data.readyToInstallWebVersion);

    //       console.log('当前应用时间版本： ' + data.currentWebVersion);

    //       console.log('当前应用version name: ' + data.appVersion);

    //     });

    //   });
    // });
  }
};

app.initialize();