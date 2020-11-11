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


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // console.log(snapShot)


    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        // console.log(newDocRef)
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
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