import axios from 'axios'

const request = function (config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000/api/w6",
        timeout: 10000
    });
    //创建拦截器
    instance.interceptors.response.use(
        res => {
            return res
        }
    )
    // 组件返回
    return instance(config)

}

export default request


//通过axios特性 返回值为pormise使用返回的数据
// export function request(config) {
//     //创建axios实例
//     const instance = axios.create({
//       baseURL: "http://152.136.185.210:8000/api/w6",
//       timeout: 50000,
//     });



// 3.axios拦截器
//   //use 使用请求拦截
//   instance1.interceptors.request.use(
//     (config) => {
//       console.log(config);
//       return config; // 拦截完请求配置后 必须返回配置 不然无法发送完整发送请求
//     },
//     (err) => {
//       console.log(err);
//     }
//   );      //如果在组件中声明拦截，需要在返回该实例前拦截，在返回实例后拦截不到数据
//响应拦截
//     instance1.interceptors.response.use(
//       res => {
//         console.log(res);
//         return res; //同样需要返回数据 不然使用时无法获取数据
//       },
//       err => {
//         console.log(err);
//       }
//     );
//     // 2.通过 instance1实例发送网络请求并返回
//     return instance1(config);
//   }
