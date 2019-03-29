import firebaseApp from '../config/firebase-config'

export const createUserandSignUp = user => {

    const email = user.email
    const password  = user.password
    delete user.password

    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => {
            firebaseApp.database().ref('User').push(user)
        }
    ).catch(function(error) {
            console.log(error.code, ': ', error.message)

    });
}

export const userSignIn = (email, password, callback) => {
   return firebaseApp.auth().signInWithEmailAndPassword(email, password).then(
       callback
    ).catch(function(error) {
        console.log(error.code, ': ', error.message)
    });
}

