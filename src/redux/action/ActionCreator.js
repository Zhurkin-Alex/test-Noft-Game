import {ADDCASH,ADDAllAC} from './ActionType'

export const addCashAC = (payload)=>{
 return {
    type: ADDCASH,
    payload
  }
}
export const addAllAC = (payload)=>{
    return {
       type: ADDAllAC,
       payload
     }
}