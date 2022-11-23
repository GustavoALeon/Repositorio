
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 

  const firebaseConfig = {
    apiKey: "AIzaSyB8LjYn4_iEXeISJcvuzfGdwEMMaz4Ifak",
    authDomain: "portafol-df67f.firebaseapp.com",
    projectId: "portafol-df67f",
    storageBucket: "portafol-df67f.appspot.com",
    messagingSenderId: "807294475823",
    appId: "1:807294475823:web:476e8895d0d78f363b30da"
  };
    
  // Inicialización firebase
  initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(); 

function onAuthUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.displayName)
            // var nombreU = user.displayName;
            // console.log(nombreU);
            // document.getElementById('nombreUsuario').innerHTML = nombreU;
        } else {
            console.log('Not user')
        }
    })
}

function signgoogle(){
    signInWithPopup(auth, provider)
    .then((result) => {
        window.location.href = '/index2.html'
        //  onAuthUser();
    }).catch((error) => {
      console.log(error);
    });
}

const googleButton = document.querySelector('#googleButton')

googleButton.addEventListener('click', e => {
    e.preventDefault()
    signgoogle()
})


const formRegister = document.querySelector('.formulario__register')
const formLogin = document.querySelector('.formulario__login')
const errorRegister = document.querySelector('#errorRegister')
const errorLogin = document.querySelector('#errorLogin')

formRegister.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(credential => {
            window.location.href = '/index.html'
        })
        .catch(err => {
            console.log('Error register', err)
            errorRegister.innerHTML = err.code
        })
})

formLogin.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    signInWithEmailAndPassword(auth, data.email, data.password)
        .then(credential => {
           window.location.href = '/index2.html'
        })
        .catch(err => {
            console.log('Error login', err)
            errorLogin.innerHTML = err.code
        })
})



//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
