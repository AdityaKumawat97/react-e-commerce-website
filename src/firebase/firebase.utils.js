import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAfHq_LAVL4gIH8mguL0Dragp1aWFQpWlg",
    authDomain: "ecom-db-f8713.firebaseapp.com",
    databaseURL: "https://ecom-db-f8713.firebaseio.com",
    projectId: "ecom-db-f8713",
    storageBucket: "ecom-db-f8713.appspot.com",
    messagingSenderId: "39362193920",
    appId: "1:39362193920:web:31d9128b6ebb77dc5d86e5",
    measurementId: "G-E4NJ30JCLD"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
}

firebase.initializeApp(config)


export const auth = firebase.auth()
export const firestore = firebase.firestore()

//google authentication

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase