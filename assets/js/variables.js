import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8LjYn4_iEXeISJcvuzfGdwEMMaz4Ifak",
    authDomain: "portafol-df67f.firebaseapp.com",
    projectId: "portafol-df67f",
    storageBucket: "portafol-df67f.appspot.com",
    messagingSenderId: "807294475823",
    appId: "1:807294475823:web:476e8895d0d78f363b30da"
  };
  
  // Inicialización firebase
initializeApp(firebaseConfig)
const auth = getAuth();
const nombre = document.getElementById('usuario')
const email = document.getElementById('email')
const buttonSignOut = document.getElementById('logout')
const gestion = document.getElementById('admin')

function onAuthUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.displayName)
            nombre.innerHTML = user.displayName;
            email.innerHTML = user.email;
        }
        if(user.email == "est.gustavo.leon@unimilitar.edu.co" || user.email =="est.pablo.escobar1@unimilitar.edu.co" || user.email == "est.johns.valencia@unimilitar.edu.co"){
            gestion.style.display = 'block'            
        }else{
            gestion.style.display = 'none'
        }
    })
}

onAuthUser()

function signOutUser() {
    signOut(auth)
        .then(() => {
           console.log('user logout') 
           window.location.href = '/index.html'
        })
        .catch(err => console.log('error signout', err))
}

buttonSignOut.addEventListener('click', e => {
    e.preventDefault()
    signOutUser()
})
