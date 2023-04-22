import { login } from '@/api/sys'
// import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * 登录 2.登录请求的动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(data => {
          console.log(data.data.data.token)
          // this.commit('user/setToken', )
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
