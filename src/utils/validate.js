import { Toast } from "vant";

export function dateFormat(dateObj) {
    var year = dateObj.getFullYear();
    var month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    var day = ("0" + dateObj.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
}

export function DateClculate(date) {
    var t = new Date(date);//你已知的时间
    var t_s = t.getTime();//转化为时间戳毫秒数
    t.setTime(t_s - 1000);

    var housr = t.getHours()
    var minutes = t.getMinutes()
    var second = ("0" + (t.getSeconds())).slice(-2);
    var minutes = ("0" + (t.getMinutes())).slice(-2)

    return housr + "-" + minutes + "-" + second;
}

/**
 * obj  操作得data集
 * checkList =[{domId:'item_name',msg:'请填写商品类型',valiType:''}]
 */
export function validateNull(obj, checkList) {
    let errArr = []
    for (let i = 0; i < checkList.length; i++) {
        switch (checkList[i].valiType) {
            case '':
                if (!checkNullA(obj, checkList[i])) {
                    errArr.push(checkList[i])
                }
                break;
            case "radio":
                if (!checkRadio(obj, checkList[i])) {
                    errArr.push(checkList[i])
                }
                break;
            case 'array':
                if (!checkArray(obj, checkList[i])) {
                    errArr.push(checkList[i])
                }
                break;
            case "default":
                obj[checkList[i].domId] = checkList[i].msg
                errArr.push(checkList[i])
                break;
            default:
                break;
        }
    }
    return errArr.length > 0 ? false : true
}

function checkNullA(obj, domObj) {
    if (obj[domObj.domId] === '') {
        obj[domObj.domId + '_err'] = domObj.msg
        return false
    } else {
        obj[domObj.domId + '_err'] = ''
    }
    return true
}
function checkRadio(obj, domObj) {

    if (obj[domObj.domId] === '0') {
        obj[domObj.domId + '_err'] = domObj.msg
        return false
    } else {
        obj[domObj.domId + '_err'] = ''
    }
    return true
}
function checkArray(obj, domObj) {
    if (obj[domObj.domId].length < 1) {
        obj[domObj.domId + '_err'] = domObj.msg
        return false
    } else {
        obj[domObj.domId + '_err'] = ''
    }
    return true
}

export function getUserInfo(value) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (userInfo != null) {
        return userInfo[value]
    }
    else
        return ''
}

export function checkPhone(value, callback) {
    return true
    // if (value === '') {
    //     Toast.fail('请输入手机号');
    //     return false
    // }
    // else {
    //     var reg = /^1[3456789]\d{9}$/;
    //     if (!reg.test(value)) {
    //         Toast.fail('请输入正确的手机号');
    //         return false
    //     }
    //     return true
    // }
}

export function checkAuthCode(value) {
    if (value === '' || value.length !== 6) {
        Toast.fail('验证码有误');
        return false
    }
    return true
}

export function checkValueNull(value, text) {
    if (value === '') {
        Toast.fail(text);
        return false
    }
    return true
}

export function checkRate(value) {
    　　var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/ 
    　　if (!re.test(value)) {
            Toast.fail("请输入正确的数字");
    　　　　return false;
    　　}
    return true
}