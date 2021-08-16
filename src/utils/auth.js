// import Cookies from 'js-cookie'

const TokenKey = 'User-Token'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

/**
 *
 * @param {*} name  获取存储内容的name
 * shcc-api // 获取沪冷链系统的的tonken
 */
export function getSession(name) {
  try {
    return JSON.parse(sessionStorage.getItem(name))
  } catch (error) {
    console.error(error);
    return ''
  }
}

export function setSession(name,value) {
  sessionStorage.setItem(name, JSON.stringify(value))
}
