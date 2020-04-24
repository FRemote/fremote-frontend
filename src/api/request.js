import request from '@/utils/fhack'

export function getListRequest() {
  return request({
    url: '/requests?currPage=1&pageSize=10',
    method: 'get'
  })
}