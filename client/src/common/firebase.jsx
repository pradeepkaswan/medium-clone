import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAolZAlLlnidnZJW2hEMYTl1Lg1ylDJaEI',
  authDomain: 'medium-clone-3b553.firebaseapp.com',
  projectId: 'medium-clone-3b553',
  storageBucket: 'medium-clone-3b553.appspot.com',
  messagingSenderId: '497634932436',
  appId: '1:497634932436:web:b2fd89b990a95b40e22d41',
}

const app = initializeApp(firebaseConfig)

// google auth

const googleProvider = new GoogleAuthProvider()

const auth = getAuth()

export const continueWithGoogle = async () => {
  let user = null

  await signInWithPopup(auth, googleProvider)
    .then((result) => {
      user = result.user
    })
    .catch((error) => {
      console.log(error)
    })

  return user
}
