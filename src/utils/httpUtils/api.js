

import { get, post, post2 } from '@/utils/httpUtils/fetch.js'


// 注册：
//    获取短信验证码：http://172.17.209.7:9991/getAuthCode?loginAcct=13528780057&authCodeType=1
//    提交：http://172.17.209.7:9991/register?loginAcct=13528780057&authCode=110669
// 登陆：http://172.17.209.7:9991/login?loginAcct=13528780057&authCode=831368&password=123456
// 字典：
//    列表：http://172.17.209.7:9991/sysDic/list?parentDicNo=19000002
//    详情：http://172.17.209.7:9991/sysDic/detail?keyId=2
// 产品：
//    发布：http://172.17.209.7:9991/prdInfo/issue/
//    列表：http://172.17.209.7:9991/prdInfo/list?loginAcct=13528780057&offset=0&limit=3
//    详情：http://172.17.209.7:9991/prdInfo/detail?loginAcct=13528780057&prdId=7
//    图片：http://172.17.209.7:9991/123.jpg



const host = ''
//获取验证码
export function getAuthCodeApi(param) {
  const apiName = '/memberInfo/getAuthCode'
  return post(apiName, param)
}

//验证码注册
export function RegisterApi(param) {
  const apiName = '/memberInfo/register'
  return post(apiName, param)
}

//使用验证码登陆
export function LoginApi(param) {
  const apiName = '/memberInfo/login'
  return post(apiName, param)
}

//验证是否注册
export function validateAccessApi(param) {
  const apiName = '/memberInfo/validate'
  return post(apiName, param)
}

//字典详情
export function dictionariesApi(param) {
  const apiName = '/sysDic/detail'
  return post(apiName, param)
}

//字典list
export function dictionariesListApi(param) {
  const apiName = '/sysDic/list'
  return post(apiName, param)
}

//个人产品列表
export function productListApi(param) {
  const apiName = '/prdInfo/mylist'
  return post(apiName, param)
}


//首页接口
export function honeMainApi(param) {
  const apiName = '/memberInfo/main'
  return post(apiName, param)
}

//首页产品列表
export function productHomeListApi(param) {
  const apiName = '/prdInfo/list'
  return post(apiName, param)
}

//产品详情
export function productDetailsApi(param) {
  const apiName = '/prdInfo/detail'
  return post(apiName, param)
}

//产品发布
export function saveProductApi(param) {
  const apiName = '/prdInfo/issue'
  return post(apiName, param)
}

//图片上传
export function saveFileApi(param) {
  const apiName = '/prdInfo/upload'
  return post2(apiName, param)
}

//退出
export function ExitApi(param) {
  const apiName = '/memberInfo/logout'
  return post(apiName, param)
}

export function getLocationValueApi(param) {
  //const apiName = 'https://restapi.amap.com/v3/geocode/regeo?output=json&location=114.119903,22.61149&key=ef011dd089124f523b3f61d76d7efde2&radius=1000&extensions=base'
  const apiName = 'https://restapi.amap.com/v3/geocode/regeo?output=json&location='+param+'&key=ef011dd089124f523b3f61d76d7efde2&radius=1000&extensions=base'
  return get(apiName)
}

export function getConfigApi() {
  const apiName = 'http://dsunyun.com/www/chcp.json'
  return get(apiName)
}