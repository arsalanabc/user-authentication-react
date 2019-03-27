import firebase from 'firebase'
import firebaseApp from '../config/firebase-config'

export const createUserWithEmailAndPassword = (email, password) => {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.log(email)
        console.log(password)
        var errorCode = error.code;
        var errorMessage = error.message;


        console.log(error.message)

    });
}

