
export const state = () => ({
    user: {
        uid: null,
        email: null,
        isAdmin: null,
        credential: null
    }

})

export const mutations = {
    DELETE_USER: (state) => {
        state.user.email = null
        state.user.uid = null
        state.user.isAdmin = null 
    },

    SET_USER: (state, authUser) => {
        state.user.email = authUser.email
        state.user.uid = authUser.uid
        state.user.isAdmin = authUser.isAdmin
    },

    SET_CREDENTIAL: (state,credential) => {
        state.user.credential = credential
    },

    DELETE_CREDENTIAL: (state) => {
        state.user.credential = null
    }
}

export const actions = {

    async onAuthStateChangedAction({ commit, state }, { authUser, claims }) {
        if (authUser && !state.user.uid) {
            const { uid, email } = authUser
            const querySnap = await this.$fireStore.collection('users').where('email', '==', email).limit(1).get()
            if (!querySnap.empty) {
                const data = querySnap.docs[0].data()
                const { isAdmin } = data
                commit('SET_USER', { uid, email, isAdmin })
                commit('DELETE_CREDENTIAL')
            } else {
                const credential = state.user.credential
                if(credential){
                    await this.$fireAuth.signInWithCredential(credential)
                    await authUser.delete()
                }else{
                    await this.$fireAuth.signOut()
                }
                throw new Error();
                
            }

        }  else if(!authUser) {
            commit('DELETE_USER')
        }
    }
}
