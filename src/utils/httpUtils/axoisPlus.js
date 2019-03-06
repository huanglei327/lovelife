/**
* 
* http配置
*/

import axios from 'axios'
// axios 配置
axios.defaults.timeout = 1000 * 60;
axios.defaults.withCredentials = false
import { Toast } from 'vant';

axios.defaults.baseURL = `http://120.77.251.176:3080/`
//axios.defaults.baseURL = `http://172.17.222.84:3080/`
//axios.defaults.baseURL = '/api/'
//axios.defaults.baseURL = ''
// http request 拦截器
axios.interceptors.request.use(
  config => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (config.method === 'post') {
      Toast.loading({
        mask: true,
        message: '加载中...'
      });
      if (userInfo && config.url.indexOf('memberInfo/login') <= -1) {
        config.headers.Authorization = userInfo.Authorization
        config.headers.slls_login_user = userInfo.slls_login_user
        //config.headers.
        // config.headers["Content-Type"]='application/json; charset=utf-8'
        if (config.url.indexOf('upload') > -1) {
          config.headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': userInfo.Authorization,
            'slls_login_user': userInfo.slls_login_user
          }
        }
      }
      else {
        config.headers.Authorization = ''
        config.headers.slls_login_user = ''
      }
    }
    return config;
  },
  err => {

    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    Toast.clear()
    return response;
  },
  err => {
    //Indicator.close();
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          Toast.fail({
            message: '请求错误(400)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 401:
          Toast.fail({
            message: '未授权，请登录(401)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 403:
          Toast.fail({
            message: '拒绝访问(403)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 404:
          Toast.fail({
            message: `请求地址出错 ${err.response.config.url}`,
            position: 'bottom',
            duration: 5000
          });
          break

        case 408:
          Toast.fail({
            message: '请求超时(408)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 500:
          Toast.fail({
            message: '服务器内部错误(500)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 501:
          Toast.fail({
            message: '服务未实现(501)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 502:
          Toast.fail({
            message: '网关错误(502)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 503:
          Toast.fail({
            message: '服务不可用(503)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 504:
          Toast.fail({
            message: '网关超时(504)',
            position: 'bottom',
            duration: 5000
          });
          break

        case 505:
          Toast.fail({
            message: 'HTTP版本不受支持(505)',
            position: 'bottom',
            duration: 5000
          });
          break

        default:
      }
    }

    return Promise.reject(err)
  });

export default axios;