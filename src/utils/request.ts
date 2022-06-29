import axios from 'axios'
import { ElMessageBox, ElMessage} from 'element-plus'


const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(
  config =>{
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  resopse => {
    const res = resopse.data;

    if(res.code !== 200) {
      ElMessage({
        message: res.message || 'Error Message',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error Message'));

    }else {
      return res;
    }
  },
  error => {
    console.log('error', error);
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  }
)

export default service;