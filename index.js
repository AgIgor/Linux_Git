
  firebase.initializeApp({
    apiKey: "AIzaSyAYGQq-JV81hYECP73faMCwzgk_Ay0Am-Y",
    authDomain: "databasefirebasefirestore.firebaseapp.com",
    databaseURL: "https://databasefirebasefirestore-default-rtdb.firebaseio.com",
    projectId: "databasefirebasefirestore",
    storageBucket: "databasefirebasefirestore.appspot.com",
    messagingSenderId: "407141110375",
    appId: "1:407141110375:web:1b1ecc00c85aabd2713ac2",
    measurementId: "G-Y2QDD0H8NF"
  });


// let db = firebase.database()
// let users = db.ref("users")
// let igor = db.ref("users/igor")


let userId = "001"
let name = "Igor"
let sobrenome = "Angeli"
let email = "agigor@outlook.com"

let key = firebase.database().ref().child("users").push().key;



  firebase.database().ref('users/' + name).set({
    name: {first: name,
            last: sobrenome},
    email: email,
    id: key
  })


