import firebase from "firebase/compat/app"
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA_i85itGf4Sc-OkD0NkoRXsnNcLU6u3Hc",
  authDomain: "auth-dev-1780f.firebaseapp.com",
  projectId: "auth-dev-1780f",
  storageBucket: "auth-dev-1780f.appspot.com",
  messagingSenderId: "626455616520",
  appId: "1:626455616520:web:b89c2a0d3e6166103d85bd"

})

export const auth = app.auth()
export default app;