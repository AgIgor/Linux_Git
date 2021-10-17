
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
//=================================================================//
let lista_nomes = [ "Helena", "Miguel", "Alice", "Arthur", "Laura", "Heitor", "Manuela",
                    "Bernardo", "Valentina", "Davi", "Sophia", "Théo", "Isabella",
                    "Lorenzo", "Heloísa", "Gabriel", "Luiza", "Pedro", "Júlia", "Benjamin", 
                    "Lorena", "Matheus", "Lívia", "Lucas", "Maria", "Luiza", "Nicolas", "Cecília",
                    "Joaquim", "Eloá", "Samuel", "Giovanna", "Henrique", "Maria", "Clara", "Rafael",
                    "Maria", "Eduarda", "Guilherme", "Mariana", "Enzo", "Lara", "Murilo", "Beatriz",
                    "Benício", "Antonella", "Gustavo", "Maria", "Júlia", "Isaac", "Emanuelly", "João",
                    "Miguel", "Isadora", "Lucca", "Ana", "Clara", "Enzo", "Gabriel", "Melissa", "Pedro",
                    "Henrique", "Ana", "Luiza", "Felipe", "Ana", "Júlia", "João", "Pedro", "Esther",
                    "Pietro", "Lavínia", "Anthony", "Maitê", "Daniel", "Maria", "Cecília", "Bryan",
                    "Maria", "Alice", "Davi", "Lucca", "Sarah", "Leonardo", "Elisa", "Vicente", "Liz",
                    "Eduardo", "Yasmin", "Gael", "Isabelly", "Antônio", "Alícia", "Vitor", "Clara",
                    "Noah", "Isis", "Caio", "Rebeca", "João", "Rafaela", "Emanuel", "Marina", "Cauã",
                    "Ana", "Laura", "João", "Lucas", "Maria", "Helena", "Calebe", "Agatha", "Enrico",
                    "Gabriela", "Vinícius", "Catarina", "Bento",]  
                            
let lista_sobrenomes = ["da Silva","dos Santos","Pereira","Alves","Ferreira","de Oliveira",
                        "Silva","Rodrigues","de Souza","Gomes","Santos","Oliveira","Ribeiro","Martins",
                        "Gonçalves","Soares","Barbosa","Lopes","Vieira","Souza","Fernandes","Lima","Costa",
                        "Batista","Dias","Moreira","de Lima","de Sousa","Nunes","da Costa","de Almeida",
                        "Mendes","Carvalho","Araujo","Cardoso","Teixeira","Marques","do Nascimento",
                        "Almeida","Ramos","Machado","Rocha","Nascimento","de Araujo","da Conceiçao",
                        "Bezerra","Sousa","Borges","de Carvalho","Aparecido","Pinto","Pinheiro",
                        "Monteiro","Andrade","Leite","Correa","Nogueira","Garcia","de Freitas",
                        "Henrique","Tavares","Coelho","Pires","de Paula","Correia","Miranda",
                        "de Jesus","Duarte","Freitas","Barros","de Andrade","Campos","Sántos",
                        "de Melo","da Cruz","Reis","Guimaraes","Moraes","do Carmo","dos Reis",
                        "Viana","de Castro","Silveira","Moura","Brito","Neves","Carneiro","Melo",
                        "Medeiros","Cordeiro","Conceição","Farias","Dantas","Cavalcante","da Rocha",
                        "de Assis","Braga","Cruz","Siqueira"]                            
//=================================================================//
let indexNome = Math.floor((Math.random() * lista_nomes.length) + 1);
let indexSobrenome = Math.floor((Math.random() * lista_sobrenomes.length) + 1);

// console.log(lista_nomes[indexNome],lista_sobrenomes[indexSobrenome]);
let first = lista_nomes[indexNome];
let last = lista_sobrenomes[indexSobrenome];

/* let user_nome = {"first":first, "last": last};
console.log(user_nome); */

let nome = first
let sobrenome = last
let email = `${first}${last}@outlook.com`.toLowerCase().trim()
let password = "12345678"

salvarDados(nome,sobrenome,email);
//=================================================================//
function salvarDados(nome_,sobrenome_,email_){
  let key = firebase.database().ref().child("users").push().key;
  let val = firebase.database.ServerValue.increment(1);

  firebase.database().ref(`users/${first} ${last}`).update({
    name: {"first": nome_,"last": sobrenome_},
    email: email_,
    last_key: key,
    updates: val
  })
}//end salvar dados
//=================================================================//

// //criar
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     console.log(user.uid)
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

//=================================================================//

  // //entrar
  // firebase.auth().signInWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   console.log("Entrou")
  //   salvarDados(user.uid,user.email)
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });

//=================================================================//

  // //sair
  // firebase.auth().signOut().then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

//=================================================================//

  //detectar altereçoes
  var starCountRef = firebase.database().ref('users');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

//=================================================================//



/* 
addStar(uid_,key_)


function addStar(uid, key) {
  const updates = {};
  updates[`posts/${key}/stars/${uid}`] = true;
  updates[`posts/${key}/starCount`] = firebase.database.ServerValue.increment(1);
  firebase.database().ref().update(updates);
} */


setTimeout(function(){location.reload()},5000)






