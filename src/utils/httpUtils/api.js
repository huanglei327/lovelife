

import { get, post } from '@/utils/httpUtils/fetch.js'


// 注册流程：
// 1、获取验证码
// http://172.17.209.7:9991/getAuthCode?mobile=13528780057&authCodeType=0
// 2、使用验证码注册
// http://172.17.209.7:9991/register?mobile=13528780057&authCode=110669

// 登陆流程：
// 1、获取验证码
// http://172.17.209.7:9991/getAuthCode?mobile=13528780057&authCodeType=1
// 2、使用验证码登陆
// http://172.17.209.7:9991/login?mobile=13528780057&authCode=831368



//获取验证码
export function getAuthCodeApi(param) {
  const apiName = '/getAuthCode'
  return post(apiName, param)
}

//验证码注册
export function RegisterApi(param) {
  const apiName = '/register'
  return post(apiName, param)
}

export function LoginApi(param){
  const apiName = '/login'
  return post(apiName, param)
}