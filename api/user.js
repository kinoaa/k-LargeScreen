import request from '@/utils/request'

export function login(data) {
  return request({ url: '/v1/users/login', method: 'post', data })
}

export function whoami() {
  return request({ url: '/v1/users/me', method: 'get' })
}

export function logout() {
  return request({ url: '/v1/users/logout', method: 'post' })
}

/*修改用户密码
*"newPassword": "string",
  "password": "string",
  "userType": "ENT"
* */
export function restPassword(params) {
  return request({ url: '/v1/users/password', method: 'put', data: params })
}


export function dynamicShareList(params) {
  return request({ url: '/v1/users/menu/control', method: 'get', params })
}
