
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

let lastId = null 
let dados = []

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

recuperaID()



// fetch(`https://esp8266-b2bbf-default-rtdb.firebaseio.com/${path}.json`,
//   {method: 'PATCH', body: valor })
//   .then((response) => response.json())
//   .then((json) => console.log(json))


  //=================================================================//

// let indexNome = Math.floor((Math.random() * lista_nomes.length));
// let indexSobrenome = Math.floor((Math.random() * lista_sobrenomes.length));

// console.log(indexNome,indexSobrenome);
// let first = lista_nomes[indexNome];
// let last = lista_sobrenomes[indexSobrenome];

// let user_nome = {"first":first, "last": last};
// console.log(user_nome);

function recuperaID(){
  firebase.database().ref("lastId").once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
    let newID = childSnapshot.val()
    lastId = newID + 1
    });
  }).then(()=>{
    if(lastId == null)lastId = 1
    sorteiaNomes()
    console.log('Last Id',lastId)
  })
}//end recupera ID
//=================================================================//
function sorteiaNomes(){

  let indexNome = Math.floor((Math.random() * lista_nomes.length));
  let first = lista_nomes[indexNome];
  let indexSobrenome = Math.floor((Math.random() * lista_sobrenomes.length));
  let last = lista_sobrenomes[indexSobrenome];
  // console.log(indexNome,indexSobrenome);
  // console.log(first,last)
  dados = [first,last]
  salvarFirebase()

}//end sorteia nomes
//=================================================================//
function salvarFirebase(){

  let key = firebase.database().ref().child("users").push().key;
  let val = firebase.database.ServerValue.increment(1);

  let path = getDados('path')

  console.log(path)
  console.log(getDados('nome_first'),getDados('nome_last'))
  console.log(getDados('email'))

  if(true){
    firebase.database().ref(path).update({
      name: {"first": getDados('nome_first'),"last": getDados('nome_last')},
      email: getDados('email'),
      last_key: key,
      updates: val,
      id : lastId
    })

    .then(() => {
      console.log("User salvo!");
      incrementId();
    })
    .catch((error) => {
      console.error("Error: ", error);
    });    
  }

}//end salva firebase
//=================================================================//
function getDados(modo){

  // console.log(dados)

  let first = dados[0].toLowerCase().trim()//CONVERTE TEXTO EM CAIXA BAIXA E REMOVE ESPAÇOS
  let last = dados[1].toLowerCase().trim()

  while(first.includes(' ') || last.includes(' ')){
    first = first.toLowerCase().trim().replace(' ','_')
    last = last.toLowerCase().trim().replace(' ','_')
  }//enquanto houver espaços ele troca por _

  let user_name = `${first}_${last}`
  let email =  `${first}_${last}@outlook.com` 
  let path = 'users/'+user_name


  if(modo == 'path'){
    return path;
  }
  if(modo == 'user_name'){
    return user_name
  }
  if(modo == 'nome_first'){
    return first
  }
  if(modo == 'nome_last'){
    return last
  }
  if(modo == 'email'){
    return email
  }

}//end get dados
//=================================================================//

function incrementId(){
  firebase.database().ref('lastId/id').transaction(function(valorAtual) {        
    return valorAtual += 1
  }).then(() => {
    console.log("Fim");
    //location.reload()
  })  
}//end incrementa id
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

 /*  //detectar altereçoes
  var starCountRef = firebase.database().ref('users');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    let list = data

    console.log(list);
  }); */

//=================================================================//



/* 
addStar(uid_,key_)


function addStar(uid, key) {
  const updates = {};
  updates[`posts/${key}/stars/${uid}`] = true;
  updates[`posts/${key}/starCount`] = firebase.database.ServerValue.increment(1);
  firebase.database().ref().update(updates);
} */


// setTimeout(function(){location.reload()},5000)






