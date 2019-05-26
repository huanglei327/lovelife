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
export function get(apiname) {
    return new Promise((resolve, reject) => {
        axios.get(apiname)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
    })
}
