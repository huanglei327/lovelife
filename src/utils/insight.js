// 局部帮助类
const helper = {
    errorMsg(error) {
        if (error && error.code !== 5)
            insight.ui.showToast(error.msg, 2, '2000').catch(function (error) { })
    }
}

const ins = {}

// app缓存操作
ins.storage = {
    // 设置 新增
    setItem(key, value, cb) {
        const fn = data => {
            if (typeof cb === 'function')
                cb.call(null, data)
        }
        insight.storage.set(key, value).then(data).catch(err => { helper.errorMsg(err) })
    },
    // 获取
    getItem(key, cb) {
        const fn = function (data) {
            if (typeof cb === 'function')
                cb.call(null, data)
            return data
        }
        insight.storage.get(key).then(data).catch(err => { helper.errorMsg(err) })
    },
    // 删除
    removeItem(key, cb) {
        const fn = function (data) {
            if (typeof cb === 'function')
                cb.call(null, data)
        }
        insight.storage.del(key).then(data).catch(err => { helper.errorMsg(err) })
    }
}

// app设备功能
ins.device = {
    // 获取经纬度
    getLocation(type = 1, autoClose = 'true', cb) {
        const fn = function (data) {
            if (data) {
                if (typeof cb === 'function')
                    cb.call(null)
                return data
            }
        }
        insight.device.getLocation(type, autoClose, '', '').then(fn).catch(err => { helper.errorMsg(err) })
    }
}

// app设备功能
ins.open = {
    // 获取用户信息
    getUserInfo() {
        const fn = function (data) {
            if (data) {
                if (typeof cb === 'function')
                    cb.call(null)
                return data
            }
        }
        insight.open.getUserInfo().then(fn).catch(err => { helper.errorMsg(err) })
    }
}
export default ins