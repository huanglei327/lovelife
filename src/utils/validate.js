
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
    var minutes= t.getMinutes()
    var second = ("0" + (t.getSeconds())).slice(-2);
    var minutes = ("0" + (t.getMinutes())).slice(-2)
    
    return housr + "-" + minutes + "-" + second; 
}

/**
 * obj  操作得data集
 * checkList =[{domId:'item_name',msg:'请填写商品类型',valiType:''}]
 */
export function validateNull(obj, checkList) {
    console.log(obj)
    let errArr = []
    for (let i = 0; i < checkList.length; i++) {
        switch (checkList[i].valiType) {
            case '':
                if (!checkNull(obj, checkList[i])) {
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

function checkNull(obj, domObj) {
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