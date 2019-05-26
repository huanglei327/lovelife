import axios from './axoisPlus'
import qs from 'qs'

export function post(apiname, parameters) {
    return new Promise((resolve, reject) => {
        axios.post(apiname, qs.stringify(parameters))
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
    })
}

//用于上传图片
export function post2(apiname, parameters) {
  return new Promise((resolve, reject) => {
      axios.post(apiname, parameters)
          .then(res => {
              resolve(res.data);
          }).catch(err => {
              reject(err)
          })
  })
}

export function getByNoUrl(parameters){
    return new Promise((resolve, reject) => {
        axios.get(apiname)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
    })
}


export function get(apiname) {
    return new Promise((resolve, reject) => {
        axios.get(apiname)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
