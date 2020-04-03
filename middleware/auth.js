export default async function ({app, store, error}) {
    const authUser = app.$fireAuth.currentUser
    if(!authUser){
        try {
            const provider = new app.$fireAuthObj.GoogleAuthProvider()
            const result = await app.$fireAuth.signInWithPopup(provider)
            const user = result.user
            const credential = result.credential
            store.commit('auth/SET_CREDENTIAL',credential)
            await store.dispatch('auth/onAuthStateChangedAction',{authUser: user,claims: null})

        } catch (er) {
            error({message:`Vous n'etes pas autorisé à accéder à ce site, ${er}`})
        }
    }
}