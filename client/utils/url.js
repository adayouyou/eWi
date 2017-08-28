/**
 *  获取URL中的参数,并以json格式返回
 *  默认为当前URL
 */
export function qureyParams (str) {
    var url = str || location.href;
    let params = url && url.split('?')[1],
        results;

    if (!params) { return; }

    params = params.split('&');
    results = {};

    for (let i = 0, len = params.length; i < len; i++) {
        let param = params[i],
            index = param.indexOf('='),
            key,
            value;

        if (~index) {
            key = param.substr(0, index);
            value = param.substr(index + 1);
        } else {
            key = param;
        }

        key && (results[key] = value || '');
    }

    return results;
}