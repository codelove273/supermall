import request from "./request";


//获取首页数据
export function getHomeBanner() {
    return request({
        url: "/home/multidata"
    });
}
export function getHomeGood(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}
