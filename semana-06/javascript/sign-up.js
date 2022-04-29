window.onload = function() {

    var formulario = document.getElementById('formulario');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var dni = document.getElementById('dni');
    var tel = document.getElementById('tel');
    var address = document.getElementById('address');
    var location = document.getElementById('loc');
    var postalCode = document.getElementById('cp');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var messageAlert= document.getElementsByClassName('message_error');
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
                    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                    "Q","R","S","T","U","V","W","X","Y","Z"];
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];

    function validacionEmail(){
        var regexEmail2 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if(email.value.match(regexEmail2)){
            messageAlert[8].classList.add('message_error');
            messageAlert[8].classList.remove('message_error-active')
            return true;
        }else{
            messageAlert[8].classList.add('message_error-active');
            return false;
        }
    }

    email.addEventListener('blur',validacionEmail);

    function correctError(e){
        switch(e.target.name){
            case 'name':
                messageAlert[0].classList.add('message_error');
                messageAlert[0].classList.remove('message_error-active');
            break;
            case 'surname':
                messageAlert[1].classList.add('message_error');
                messageAlert[1].classList.remove('message_error-active');
            break;
            case 'dni':
                messageAlert[2].classList.add('message_error');
                messageAlert[2].classList.remove('message_error-active');
            break;
            case 'date':
                messageAlert[3].classList.add('message_error');
                messageAlert[3].classList.remove('message_error-active');
            break;
            case 'tel':
                messageAlert[4].classList.add('message_error');
                messageAlert[4].classList.remove('message_error-active');
            break;
            case 'address':
                messageAlert[5].classList.add('message_error');
                messageAlert[5].classList.remove('message_error-active');
            break;
            case 'loc':
                messageAlert[6].classList.add('message_error');
                messageAlert[6].classList.remove('message_error-active');
            break;
            case 'cp':
                messageAlert[7].classList.add('message_error');
                messageAlert[7].classList.remove('message_error-active');
            break;
            case 'email':
                messageAlert[8].classList.add('message_error');
                messageAlert[8].classList.remove('message_error-active');
            break;
            case 'password':
                messageAlert[9].classList.add('message_error');
                messageAlert[9].classList.remove('message_error-active');
            break;
            case 'password2':
                messageAlert[10].classList.add('message_error');
                messageAlert[10].classList.remove('message_error-active');
            break;
        }
    }
       
    name.addEventListener('focus',correctError);
    surname.addEventListener('focus',correctError);
    dni.addEventListener('focus',correctError);
    date.addEventListener('focus',correctError);
    tel.addEventListener('focus',correctError);
    address.addEventListener('focus',correctError);
    location.addEventListener('focus',correctError);
    postalCode.addEventListener('focus',correctError);
    email.addEventListener('focus',correctError);
    password.addEventListener('focus',correctError);
    password2.addEventListener('focus',correctError);
    
}

