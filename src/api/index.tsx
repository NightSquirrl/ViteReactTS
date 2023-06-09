import axios, { Axios, AxiosInstance, CancelTokenSource } from "axios";


// 创建一个 CancelToken.source 对象
const cancelSource = axios.CancelToken.source();

/**
 * @description:  请求拦截器
 * @return {*}
 */
axios.interceptors.request.use(config => {
    // 在发送请求前做些什么
    return config;
}, err => {
    // 在请求错误的时候的逻辑处理
    return Promise.reject(err)
});
/**
 * @description: axios实例的相关配置
 * @return {*}
 */
interface MyAxiosInstance extends AxiosInstance {
    cancelToken?: CancelTokenSource;
    cancel?: Function;
}

let https: MyAxiosInstance = axios.create({
    baseURL: '', //请求的域名（基本地址）
    timeout: 2000, //请求的超时时长，单位毫秒，默认。
    url: '/data.json', //请求路径
    method: 'get', //请求方法
    headers: {
        token: ''
    }, //设置请求头
    params: {

    },//将请求参数拼接到url上
    data: {

    }, //将请求参数放置到请求体里
    cancelToken: new axios.CancelToken(cancel => {
        // 将 cancel 函数保存在实例变量中
        https.cancel = cancel;
    }),
});



export default https;
