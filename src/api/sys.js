import request from '@/utils/request'
/**
 * 登录   1.封装接口请求模块
 * return Promise实例对象
 */
export const login = data => {
  return request({
    url: 'sys/login',
    methods: 'POST',
    data
  })
}
