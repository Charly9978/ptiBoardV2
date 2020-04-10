  
import { vuexfireMutations } from 'vuexfire'

export const state = ()=>({
  alarm: false,
  title: 'Tableau de bord Bip PTI'
})



export const mutations = {
    ...vuexfireMutations,

    setAlarmOn:(state)=>{
      state.alarm = true
    },

    setAlarmOff: (state)=>{
      state.alarm = false
    },

    setTitle(state,title){
      state.title = title
    }


  }