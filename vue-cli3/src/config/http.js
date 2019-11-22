import axios from 'axios'
import router from '@/router'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
//默认配置

// 添加请求拦截器
axios.interceptors.request.use( request => {
    // 在发送请求之前做些什么
    return request;
  },  error =>  {
    // 对请求错误做些什么
    return Promise.reject(error);}
);

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
  }, error => {
    // 对响应错误做点什么
		switch(error.response.status){
			//token失效之类的
			case 401: 
				break;
			//服务器错误
			case 500: 
				break;
			//网络断开了
			case 504:
				break;
			
		}
    return Promise.reject(error);
	}
);

export default axios;


