import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDW_ceB5qjLJS9Nl8XZzNUi-LwzJoDq-Zg",
    authDomain: "gitjamming.firebaseapp.com",
    databaseURL: "https://gitjamming.firebaseio.com",
    projectId: "gitjamming",
    storageBucket: "gitjamming.appspot.com",
    messagingSenderId: "749029395026"
};

export default firebase.initializeApp(config);