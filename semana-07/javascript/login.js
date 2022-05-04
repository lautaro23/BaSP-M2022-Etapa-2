window.onload = function() {
    var email = document.getElementById('email');
    var password= document.getElementById('password');
    var messageAlert= document.getElementsByClassName('input_error');
    var buttonLogin = document.getElementById('login-btn');
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
                    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                    "Q","R","S","T","U","V","W","X","Y","Z"];
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    var errorDiv = document.getElementById('error-div-log');
    var closeButton = document.getElementById('btn-close-log');
    var container = document.querySelector('.login-container h2');


    function validateEmail(){
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
        
        if(numberOfLetters >= 4 && numericChar > 2 && numberOfSymbols === 0) {
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


    email.addEventListener('blur',validateEmail);
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
        if (validateEmail(email.value) === true && validatePassword(password.value) === true ) {
            var emailP = document.createElement('p');
            var passwordP = document.createElement('p');
            emailP.innerText = 'Email : '+email.value;
            passwordP.innerText = 'Password: '+password.value; 
            errorDiv.appendChild(emailP);
            errorDiv.appendChild(passwordP);
            errorDiv.classList.add('error-log-active');
            fetch ('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+email.value+'&password='+password.value)
            .then(function(data){
                return data.json()
            })
            .then(function(dataJson){
                alert('The request was succesful ' +JSON.stringify(dataJson));
            })
            .catch(function(error){
                alert('The request was not succesful '+ error);
            })     
        } else if (validateEmail(email.value) === false && validatePassword(password.value) === true ) {
            var emailP = document.createElement('p');
            var passwordP = document.createElement('p');
            emailP.innerText = 'Email : add a valid email';
            passwordP.innerText = 'Password: '+password.value; 
            errorDiv.appendChild(emailP);
            errorDiv.appendChild(passwordP);
            errorDiv.classList.add('error-div-active'); 
        } else if (validateEmail(email.value) === true && validatePassword(password.value) === false ) {
            var emailP = document.createElement('p');
            var passwordP = document.createElement('p');
            emailP.innerText = 'Email : '+email.value;
            passwordP.innerText = 'Password: add a valid password' 
            errorDiv.appendChild(emailP);
            errorDiv.appendChild(passwordP);
            errorDiv.classList.add('error-div-active'); 
        } else{
            var emailP = document.createElement('p');
            var passwordP = document.createElement('p');
            emailP.innerText = 'Email : add a valid email';
            passwordP.innerText = 'Password: add a valid password'; 
            errorDiv.appendChild(emailP);
            errorDiv.appendChild(passwordP);
            errorDiv.classList.add('error-div-active'); 
        }
        closeButton.addEventListener('click',function (e) {
            errorDiv.classList.remove('error-div-active');
            emailP.parentNode.removeChild(emailP);
            passwordP.parentNode.removeChild(passwordP);

        })
        
    };
    
    buttonLogin.addEventListener('click',function(e){
        e.preventDefault();
        showValues(e);
    })
    
}