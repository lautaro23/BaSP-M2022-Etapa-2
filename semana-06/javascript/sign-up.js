window.onload = function() {

    var formulario = document.getElementById('formulario');
    var name = document.getElementById('name');
    var username = document.getElementById('username');
    var dni = document.getElementById('dni');
    var tel = document.getElementById('tel');
    var address = document.getElementById('address');
    var location = document.getElementById('loc');
    var postalCode = document.getElementById('cp');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');

    var expresiones = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    }

    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        var nameValue = name.value.trim()
        var usernameValue = username.value.trim()
        var dniValue = dni.value.trim()
        var telValue = tel.value.trim()
        var addressValue = address.value.trim()
        var locationValue = location.value.trim()
        var postalCodeValue = postalCode.value.trim()
        var emailValue = email.value.trim()
        var passwordValue = password.value.trim()
        var password2Value = password2.value.trim()
    }    
    
}

