window.onload = function() {
    var email = document.getElementById('email');
    var password= document.getElementById('password');
    var messageAlert= document.getElementsByClassName('input_error');
    var buttonLogin = document.getElementsByClassName('login-btn');
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
                    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                    "Q","R","S","T","U","V","W","X","Y","Z"];
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    var newDiv = document.createElement('div');
    var container = document.querySelector('.login-container h2');

    
    function validacionEmail(){
        var regexEmail2 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if(email.value.match(regexEmail2)){
            messageAlert[0].classList.add('input_error');
            messageAlert[0].classList.remove('input_error-active')
            return true;
        }else{
            messageAlert[0].classList.add('input_error-active');
            return false;
        }
    }

    function validatePassword (input) {
        var inputValue = input;
        var numberOfLetters = 0;
        var numericChar = 0;
        var numberOfSymbols = 0;
        for(var i= 0; i < inputValue.length; i++) {
            var inputName = inputValue[i]
            if (letters.indexOf(inputName) != -1) {
                numberOfLetters++;
            }else if (numbers.indexOf(inputName) != -1){
                numericChar++;
            }else if (symbols.indexOf(inputName) != -1) {
                numberOfSymbols++;
            }
        }
        
        if(numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }

    function validatePass (){
        if(validatePassword(password.value) === true){
            messageAlert[1].classList.add('input_error');
            messageAlert[1].classList.remove('input_error-active');
        }else{
        messageAlert[1].classList.add('input_error-active');
        }
    }


    email.addEventListener('blur',validacionEmail);
    password.addEventListener('blur',validatePass);
    
    function correctError(e){
        switch(e.target.name){
            case 'email':
                messageAlert[0].classList.add('input_error');
                messageAlert[0].classList.remove('input_error-active');
            break;
            case 'password':
                messageAlert[1].classList.add('input_error');
                messageAlert[1].classList.remove('input_error-active');
            break;
        }
    }

    email.addEventListener('focus',correctError);
    password.addEventListener('focus',correctError);

    function showValues () {
        if (validacionEmail(email.value) === true && validatePassword(password.value) === true ) {
            newDiv.className ='message-validate';
            newDiv.innerHTML = '<p> Email: ' +email.value+ '</p>' +
            '<p> Password: ' +password.value+ '</p>'
            container.parentNode.appendChild(newDiv);    
        } else if (validacionEmail(email.value) === false && validatePassword(password.value) === true ) {
            newDiv.className = 'message-validate-error';
            newDiv.innerHTML = '<p> Email: Add a valid email</p>' +
            '<p> Password: ' +password.value+ '</p>'
            container.parentNode.appendChild(newDiv);
        } else if (validacionEmail(email.value) === true && validatePassword(password.value) === false ) {
            newDiv.className = 'message-validate-error';
            newDiv.innerHTML = '<p> Email: ' +email.value+ '</p>' +
            '<p> Password: Add a valid password </p>'
            container.parentNode.appendChild(newDiv);
        } else{
            newDiv.className = 'message-validate-error';
            newDiv.innerHTML ='<p> Password: Add a valid info </p>'
            container.parentNode.appendChild(newDiv);
        }
    };

    

    buttonLogin[0].onclick = function (e) {
        showValues();
        e.preventDefault();
    };
    
}