
/** eslint disabled */
import { setSession, getSession } from '@/utils/auth'

const state = {
  page_right: getSession('right') || 'right',
  page_middle: getSession('middle') || 'middle',
  page_left: getSession('left') || 'left',
}

const mutations = {
  // 修改页面路由 并记住路由name
  SET_PAGE_TYPE(state, { type, value }) {
    state['page_' + type] = value
    setSession(type, value)
  },
  RESRT_PAGE_TYPE(state) {
    state['page_right'] = 'right'
    state['page_middle'] = 'middle'
    state['page_left'] = 'left'
    setSession('right', 'right')
    setSession('middle', 'middle')
    setSession('left', 'left')
  },
  //  修改局部全屏
  CHANGE_PAGE(state, data) {
    console.log(data);
    state[data.page] = data.name
  },
}
export default {
  namespaced: true,
  state,
  mutations,
}
