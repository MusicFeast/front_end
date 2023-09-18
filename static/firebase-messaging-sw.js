    importScripts(
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyDI0UGucwhq5P0zq67KE-kcIefgXtPqOYk","authDomain":"musicfeast.firebaseapp.com","projectId":"musicfeast","storageBucket":"musicfeast.appspot.com","messagingSenderId":"926982198772","appId":"1:926982198772:web:cea625a99339a27be715a1","measurementId":"G-TJ9WHS6TGE"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    