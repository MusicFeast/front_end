import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Chat testnet
// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: "AIzaSyAogyHNNPfawxx22Iphb2cf9Yjtu7fzSgQ",
// authDomain: "nearp2p-ff014.firebaseapp.com",
// databaseURL: "https://nearp2p-ff014-default-rtdb.firebaseio.com",
// projectId: "nearp2p-ff014",
// storageBucket: "nearp2p-ff014.appspot.com",
// messagingSenderId: "321404603196",
// appId: "1:321404603196:web:3645c05b9d1adfe61fac39"
// };


// Chat Mainnet
const firebaseConfig = {
  apiKey: "AIzaSyDI0UGucwhq5P0zq67KE-kcIefgXtPqOYk",
  authDomain: "musicfeast.firebaseapp.com",
  projectId: "musicfeast",
  storageBucket: "musicfeast.appspot.com",
  messagingSenderId: "926982198772",
  appId: "1:926982198772:web:cea625a99339a27be715a1",
  measurementId: "G-TJ9WHS6TGE"
};

firebase.initializeApp(firebaseConfig)

export const fireDb = firebase.firestore();