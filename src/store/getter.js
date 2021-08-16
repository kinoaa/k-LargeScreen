const getters = {
  token: state => state.user.token,
  userData: state => state.user.userData,
  userType: state => state.user.userType,
  page_right: state => state.moddle.page_right,
  page_middle: state => state.moddle.page_middle,
  page_left: state => state.moddle.page_left,
}
export default getters