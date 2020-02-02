export default function cookieToObject(cookie) {
    return cookie.split(/[;] */).reduce(function (result, pairStr) {
        const arr = pairStr.split('=');
        if (arr.length === 2) {
            result[arr[0]] = arr[1];
        }
        return result;
    }, {});
}
