
import ins from './insight'
const fn = {
    // 添加事件
    addEvent(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    // 移除事件
    removeEvent(element, type, handler) {
        if (element.addEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    /**
     * 
     * @param {设置页面标题} title 
     */
    setTitle(title) {
        if (title) {
            title = title.length > 10 ? title.substring(0, 10) + '...' : title;
            //利用iframe的onload事件刷新页面
            document.title = title;
            var iframe = document.createElement('iframe');

            iframe.style.visibility = 'hidden';
            iframe.style.width = '1px';
            iframe.style.height = '1px';
            iframe.onload = function () {
                setTimeout(function () {
                    document.body.removeChild(iframe);
                }, 0);
            };
            document.body.appendChild(iframe);
        }
    },

    //pushWindow模式无法共享此变量,每次进入都是一个新的对象
    refreshKeyList: [],

    /**
     * 获取当页面back时  是否需要调用刷新数据的方法,应当与setBackToRefresh配套使用
     * @param {页面初始化时设置key} loaKeyName 
     * @param {页面初始化时设置value} loaValue 
     * @param {back到目标页面后调用的刷新方法} refreshFun 
     */
    getBackToRefresh(loaKeyName, refreshFun) {
        let initValue = Date.parse(new Date());
        localStorage.setItem(loaKeyName, initValue);
        insight.on('page.resume', (data) => {
            let v = localStorage.getItem(loaKeyName);
            if (v && v != initValue) {
                localStorage.removeItem(loaKeyName);
                (refreshFun && typeof (refreshFun) === 'function') && refreshFun();
            }
        });
    },


    setBackToRefresh(loaKeyName) {
        let now = Date.parse(new Date());
        localStorage.setItem(loaKeyName, now);
    },

    //正确显示一个图片
    showCorrectImage(path) {
        const APIHOSTNAME = 'https://devoes.belle.net.cn:8983/moes/';
        var RESOURCES_URL_PREFIX1 = "/file/resource?transferName=", RESOURCES_URL_PREFIX2 = "group", imgsrc = '';

        if (path.indexOf(RESOURCES_URL_PREFIX1) > -1 || path.indexOf(RESOURCES_URL_PREFIX2) > -1) {
            var apiname = APIHOSTNAME + "/mobile_oes/resource?transferName=";

            //本地服务器地址
            imgsrc = apiname + decodeURI(path.substr(path.indexOf('=') + 1));
        } else {
            var BucketDomain = "http://7xryso.com1.z0.glb.clouddn.com";

            //云平台地址
            imgsrc = BucketDomain + "/" + path;
        }

        return imgsrc;
    },

    timeFormat(time, fmt) {
        var o = {
            "M+": time.getMonth() + 1, //月份   
            "d+": time.getDate(), //日   
            "h+": time.getHours(), //小时   
            "m+": time.getMinutes(), //分   
            "s+": time.getSeconds(), //秒   
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度   
            "S": time.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },

    errorMsg(error) {
        if (error && error.code !== 5)
            insight.ui.showToast(error.msg, 2, '2000').catch(function (error) { })
    }
}
window.fn = fn
window.ins = ins
export default fn