import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALVMJpFSjHjBh-bsj5i6VI1lGjfJlhczc",
    authDomain: "instagram-clone-9120b.firebaseapp.com",
    projectId: "instagram-clone-9120b",
    storageBucket: "instagram-clone-9120b.appspot.com",
    messagingSenderId: "900023123534",
    appId: "1:900023123534:web:bccaffa4f6353fd7250d1f",
    measurementId: "G-YRVRXHS18D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export { db, auth, storage };