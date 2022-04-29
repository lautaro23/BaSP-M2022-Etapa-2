window.onload = function() {

    var formulario = document.getElementById('formulario');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var dni = document.getElementById('dni');
    var tel = document.getElementById('tel');
    var address = document.getElementById('address');
    var location = document.getElementById('loc');
    var date = document.getElementById('date');
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

    function validateName (input) {
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
        
        if(numberOfLetters > 2 && numericChar === 0 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }

    function validateNam (){
        if(validateName(name.value) === true){
            messageAlert[0].classList.add('message_error');
            messageAlert[0].classList.remove('message_error-active');
        }else{
        messageAlert[0].classList.add('message_error-active');
        }
    }

    function validateSurname (input) {
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
        
        if(numberOfLetters > 2 && numericChar === 0 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }
    
    function validateSur (){
        if(validateSurname(surname.value) === true){
            messageAlert[1].classList.add('message_error');
            messageAlert[1].classList.remove('message_error-active');
        }else{
        messageAlert[1].classList.add('message_error-active');
        }
    }

    function validateDni (input) {
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
        
        if(numberOfLetters === 0 && numericChar > 8 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }

    function validateDn (){
        if(validateDni(dni.value) === true){
            messageAlert[2].classList.add('message_error');
            messageAlert[2].classList.remove('message_error-active');
        }else{
        messageAlert[2].classList.add('message_error-active');
        }
    }
     
    function validateTelephone (input) {
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
        
        if(numberOfLetters === 0 && numericChar > 9 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }

    function validateTel (){
        if(validateTelephone(tel.value) === true){
            messageAlert[4].classList.add('message_error');
            messageAlert[4].classList.remove('message_error-active');
        }else{
        messageAlert[4].classList.add('message_error-active');
        }
    }

    function validateDate (){
        var year = Number(date.value.split('-')[0]);
        var month= Number(date.value.split('-')[1]);
        var day = Number(date.value.split('-')[2]);
        if (year < 1920 || year > 2004){
            return false
        } else if (month > 12 || month < 1){
            return false
        } else if (day > 31 || day < 1){
            return false
        }else {
            return true
        }
    }

    function validateDat (){
        if(validateDate(date.value) === true){
            messageAlert[3].classList.add('message_error');
            messageAlert[3].classList.remove('message_error-active');
        }else{
        messageAlert[3].classList.add('message_error-active');
        }
    } 

    function validateAddress (input) {
        var space = [' '];
        var spaceNumber = 0;
        var inputValue = input;
        var numberOfLetters = 0;
        var numericChar = 0;
        var numberOfSymbols = 0;
        for(var i= 0; i < inputValue.length; i++) {
            // var inputName = inputValue[i]
            if (letters.indexOf(inputValue[i]) != -1) {
                numberOfLetters++;
            }else if (numbers.indexOf(inputValue[i]) != -1){
                numericChar++;
            }else if (symbols.indexOf(inputValue[i]) != -1) {
                numberOfSymbols++;
            }else if (space.includes(inputValue[i])) {
                spaceNumber++;
            }
        }
        
        if(numberOfLetters > 4 && numericChar > 1 && numberOfSymbols === 0 && spaceNumber === 1) {
                return true;
        } else {
            return false
        }    
    }

    function validateAd (){
        if(validateAddress(address.value) === true){
            messageAlert[5].classList.add('message_error');
            messageAlert[5].classList.remove('message_error-active');
        }else{
        messageAlert[5].classList.add('message_error-active');
        }
    }

    function validateLocation (input) {
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
        
        if(numberOfLetters > 2 && numericChar === 0  && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }  
    }

    function validateLoc (){
        if(validateLocation(location.value) === true){
            messageAlert[6].classList.add('message_error');
            messageAlert[6].classList.remove('message_error-active');
        }else{
        messageAlert[6].classList.add('message_error-active');
        }
    }

    function validatePostal (input) {
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
        
        if(numberOfLetters === 0 && numericChar > 3  && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }  
    }

    function validateCp (){
        if(validatePostal(postalCode.value) === true){
            messageAlert[7].classList.add('message_error');
            messageAlert[7].classList.remove('message_error-active');
        }else{
        messageAlert[7].classList.add('message_error-active');
        }
    }

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

    function validatePassw (input) {
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
        
        if(numberOfLetters > 4  && numericChar > 2  && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }  
    }

    function validatePass (){
        if(validatePassw(password.value) === true){
            messageAlert[9].classList.add('message_error');
            messageAlert[9].classList.remove('message_error-active');
        }else{
        messageAlert[9].classList.add('message_error-active');
        }
    }

    function validateRepeatPassw (input) {
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
        
        if(numberOfLetters > 4  && numericChar > 2  && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }  
    }

    function validateRepeatPass (){
        if(validateRepeatPassw(password2.value) === true && password2.value === password.value){
            messageAlert[10].classList.add('message_error');
            messageAlert[10].classList.remove('message_error-active');
        }else{
        messageAlert[10].classList.add('message_error-active');
        }
    }

    name.addEventListener('blur',validateNam);
    surname.addEventListener('blur',validateSur);
    dni.addEventListener('blur',validateDn);
    date.addEventListener('blur',validateDat);
    tel.addEventListener('blur',validateTel);
    address.addEventListener('blur',validateAd);
    location.addEventListener('blur',validateLoc);
    postalCode.addEventListener('blur',validateCp);
    email.addEventListener('blur',validacionEmail);
    password.addEventListener('blur',validatePass);
    password2.addEventListener('blur',validateRepeatPass);

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

