window.onload = function() {
    var formulario = document.getElementById('formulario');
    var inputs = document.getElementsByClassName('formulario_input');
    var email = document.getElementById('email');
    var password= document.getElementById('password');
    var messageAlert= document.getElementsByClassName('input_error');
    
    function validacionEmail(){
        var regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if(email.value.match(regexEmail)){
            messageAlert[0].classList.remove('input_error');
            messageAlert[0].innerHTML = "Insert a valid e-mail";
        }else{
            messageAlert[0].classList.remove('input_error');
            messageAlert[0].innerHTML = "valid";
        }
    }

    function validacionPassw(){
        var numb=0;
        var chart=0;
        var number = [0,1,2,3,4,5,6,7,8,9];
        if(number.includes(password.value)){
            numb++
        }else{
            chart++
        }
    }

    email.addEventListener('blur',validacionEmail)
    
}