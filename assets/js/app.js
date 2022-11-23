function registrar() {
	var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

	firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .then((user) => {
            console.log('Usuario registrado!');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;           
            console.log(errorMessage);
        });
}