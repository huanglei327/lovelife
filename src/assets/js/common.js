
//time1开始时间，time2结束时间
export function count_time(time1, time2) {
    time1 = Date.parse(new Date(time1));
    time2 = Date.parse(new Date(time2));
    return Math.abs(parseInt((time2 - time1) / 1000 / 3600 / 24));
}

export function DateClculate(time) {
    var myData=new Date(); //获取当前时间
    var endTime = new Date(time) //设定倒计时结束时间
    var lefttime=(endTime.getTime()-myData.getTime())/(24*60*60*1000); //结束时间-当前时间=剩下时间（毫秒数）把得到的数字转化成毫秒数(得到差的毫秒数/一天的毫秒数=天数)
    //一天=24小时 1小时=60分钟 1分钟=60秒 1秒=1000毫秒
    lefttime=Math.ceil(lefttime) //对得到的毫秒数进行四舍五入

    var leftHMS=parseInt((endTime.getTime()-myData.getTime())/1000); //得到剩余的毫秒数
    var ds=parseInt(leftHMS/(24*60*60)); //换算成天
    var xs=parseInt(leftHMS/(60*60)%24); //得到小时 取模24小时
    var fz=parseInt(leftHMS/60%60); //得到分钟
    var mz=parseInt(leftHMS%60); //得到秒数

    //打印出倒计时天数
    return ds + '天' + xs + '小时' + fz + '分钟' + mz + '秒';
}

//传 时分秒 计算出时间
export function DateClculateA(times) {
    var datalist = times.split(':');
    var ddd = new Date();

    return ddd.getTime() + parseInt(datalist[0]) * 60 * 60 * 1000 + parseInt(datalist[1]) * 60 * 1000 + parseInt(datalist[2]) * 1000
}
//传日期格式 日期减   time 毫秒 1000
export function DateClculateB(time, number) {
    var myDate = new Date(time);
    return myDate.getTime() - number
}

function DateClculateBySends(hms) {
    var datalist = hms.split(':');
    var myDate = new Date();

    myDate.setHours(datalist[0])
    myDate.setMinutes(datalist[1])
    myDate.setSeconds(datalist[2])
    myDate.getTime() - 1000
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    var s = myDate.getSeconds();
    return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
}

function GetCurrnteTimeByValue(hms) {
    var datalist = hms.split(':');
    var myDate = new Date();

    myDate.setHours(datalist[0])
    myDate.setMinutes(datalist[1])
    myDate.setSeconds(datalist[2])

    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    var s = myDate.getSeconds();
    return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
}

export function getWeekByDate(date) {
    var day = new Date(Date.parse(date));   //需要正则转换的则 此处为 ： var day = new Date(Date.parse(date.replace(/-/g, '/')));  
    var today = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    return today[day.getDay()];
}

//date计算的日期  dayNumber计算的数量
export function getDateCalculate(date, dayNumber) {
    date = date ? new Date(date) : new Date();
    var ms = dayNumber * (1000 * 60 * 60 * 24)
    var newdays = new Date(date.getTime() + ms);
    var y = newdays.getFullYear();
    var m = newdays.getMonth() + 1;
    var d = newdays.getDate();
    var value = y + '-' + p(m) + '-' + p(d)
    return value
}

//获取当前日期  yyyy-MM-dd
export function getCurrentTime(sms) {

    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    var s = myDate.getSeconds();
    if (sms)
        return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);

    return year + '-' + p(month) + "-" + p(date);
}


//获取当前日期  yyyy-MM-dd
export function dateToStr(myDate, type) {
    //获取当前年
    var year = myDate.getFullYear()
    //获取当前月
    var month = myDate.getMonth() + 1
    //获取当前日
    var date = myDate.getDate()
    var h = myDate.getHours()       //获取当前小时数(0-23)
    var m = myDate.getMinutes()     //获取当前分钟数(0-59)
    var s = myDate.getSeconds()
    if (type == 'datetime')
        return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s)
    else if (type === 'time')
        return p(h) + ":" + p(m)
    else
        return year + '-' + p(month) + "-" + p(date);
}
export function MathRand(digit) {
    var Num = ""
    for (var i = 0; i < digit; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    return Num
}
export function ckdate(starttime, endtime) {
    var start = new Date(starttime.replace("-", "/").replace("-", "/"))
    var end = new Date(endtime.replace("-", "/").replace("-", "/"))
    if (end < start) {
        return false
    }
    else {
        return true
    }
}

export function getUserInfo(key) {
    var userinfo = JSON.parse(localStorage.getItem("userInfo"))
    if (userinfo != null) {
        return userinfo[key]
    }
}

export function getMyDateByStr(str, type) {
    var oDate = new Date(str)
    oYear = oDate.getFullYear()
    oMonth = oDate.getMonth() + 1
    oDay = oDate.getDate()
    oHour = oDate.getHours()
    oMin = oDate.getMinutes()
    oSen = oDate.getSeconds()

    if (type == 'datetime')
        oTime = oYear + '-' + p(oMonth) + '-' + p(oDay) + ' ' + p(oHour) + ':' + p(oMin) + ':' + p(oSen)
    else if (type === 'time')
        oTime = p(oMin) + ':' + p(oSen)
    else
        oTime = oYear + '-' + p(oMonth) + '-' + p(oDay)
    return oTime;
}

export function statusById(index) {
    const status = {
        '10': '提案中',
        '20': '评审中',
        '90': '结案'
    }
    return status[index]
}

//补0操作

function p(s) {
    return s < 10 ? '0' + s : s;
}