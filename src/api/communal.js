import request from '@/utils/request'

/**
 *
 * @param {object} params {
 *  province:string 省：根据省获取市
 *  city?:string 市 根据省 市 获取区（所）
 * }
 *
 */
export function getRegion(params) {
  return request({
    url: '/v1/enterprises/region',
    method: 'get',
    params
  })
}

/** 获取地址下拉框数据
 * @param {object} params {
 *   topCode:string 上级id
 * }
 */
export function getAddress(params) {
  return request({
    url: '/v1/dropdown/address',
    method: 'get',
    params
  })
}

/** 上传临时文件接口
 * @param {object} data {
 *   file
 *   thumbnai
 * }
 */
export function getUploadUrl(data, thumbnai = false) {
  return request({
    url: `/v1/file/upload/temp?thumbnai=${ thumbnai }`,
    method: 'post',
    data
  })
}

/** 远程搜索 获取企业list
 * @param {object} params {
 *   name:string  用于模糊搜索
 * }
 */
export function queryEnterpriseList(params) {
  return request({
    url: '/v1/dropdown/enterprise',
    method: 'get',
    params
  })
}


/** 追溯概况
 */
export function getSurvey(params) {
  return request({
    url: '/v1/sv',
    method: 'get',
    params
  })
}

/** 追溯概况-修改数据
 */
export function editSurvey(id, value) {
  return request({
    url: '/v1/sv/' + id,
    method: 'put',
    params: {
      value
    }
  })
}
/** 追溯概况-来源可查
 */
 export function getbatch(type,params) {
  return request({
    url: '/v1/sv/trace/' + type,
    method: 'get',
    params
  })
}
/** 追溯概况-地图用
 */
 export function getMapData(type,params) {
  return request({
    url: '/v1/sv/home/map/' + type,
    method: 'get',
    params
  })
}

/** 公共获取表格数据
 */
export function getTableData({ url, params }) {
  return request({ url, method: 'get', params })
}

