const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
var Anchors = document.getElementsByTagName("a");

for (var i = 0; i < Anchors.length ; i++) {
    Anchors[i].addEventListener("click", 
        function (event) {
            event.preventDefault();
                window.location = this.href;
        }, 
        false);
}
