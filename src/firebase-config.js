import firebase from "firebase/app"
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCV9k_NxmqvPzdXPVK0S3ct3H6f5HBTU4g",
    authDomain: "fir-1-cc935.firebaseapp.com",
    databaseURL: "https://fir-1-cc935.firebaseio.com",
    projectId: "fir-1-cc935",
    storageBucket: "fir-1-cc935.appspot.com",
    messagingSenderId: "427472136142",
    appId: "1:427472136142:web:6f3b26a30037ac8b"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
 
export {
    storage, firebase as default
}

