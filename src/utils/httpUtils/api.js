

import { get, post } from '@/utils/httpUtils/fetch.js'



//查询未参与的决策的信息
export function GetNotDecisionMakingApi(param) {
    const apiName = '/m_decisionMaking/query_notDecisionMaking '
    return post(apiName, param)
}

//查询参与的决策的信息
export function GetDecisionMakingListApi(param) {
    const apiName = '/m_decisionMaking/query_inDecisionMaking'
    return post(apiName, param)
}

//参与提案
export function parDecisionMakingApi(param) {
    const apiName = '/m_decisionMaking/participationDecisionMaking'
    return post(apiName, param)
}

//查询决策明细
export function GetdecisionMakingByIdApi(param) {
    const apiName = '/m_decisionMaking/query_decisionMakingById'
    return post(apiName, param)
}

//查询提案明细
export function getResolutionInfoApi(param) {
    const apiName = '/m_resolutionDtl/query_resolutionDtl'
    return post(apiName, param)
}

//查询提案列表
export function getResolutionApi(param) {
    const apiName = '/m_resolution/query_resolution'
    return post(apiName, param)
}


//查询评审信息
export function getPSInfoApi(param) {
    const apiName = '/m_resolution/query_assessor'
    return post(apiName, param)
}

export function getLDTInfoApi(param){
  const apiName='/m_weightiness/query_weightiness'
  return post(apiName,param)
}