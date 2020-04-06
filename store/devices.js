import { firestoreAction } from 'vuexfire'

export const state= ()=>({
    all:[]
})

export const getters = {
    getDevices(state){
        return state.all
    },

    getDeviceById(state,id){
        return state.all.find(device => device.id == id)
    }
}

export const actions = {
    bindDevices: firestoreAction(async function({ bindFirestoreRef }) {
      return await bindFirestoreRef('all', this.$fireStore.collection('Devices'))
    }),

    unbindDevices: firestoreAction(({ unbindFirestoreRef }) => {
        unbindFirestoreRef('all')
      }),
  }
