  
import { vuexfireMutations } from 'vuexfire'

export const state = ()=>({
  alarm: false
})



export const mutations = {
    ...vuexfireMutations,

    setAlarmOn:(state)=>{
      state.alarm = true
    },

    setAlarmOff: (state)=>{
      state.alarm = false
    }


  }