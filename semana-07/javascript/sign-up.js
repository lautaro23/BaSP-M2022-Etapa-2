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
    var errorDiv = document.getElementById('error-div');
    var btnCreate = document.getElementById('create-btn');
    var closeButton = document.getElementById('btn-close')
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
                    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                    "Q","R","S","T","U","V","W","X","Y","Z"];
    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];


    // Add blur event and validations

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
        var nameParagraph = document.createElement('p');
        if(validateName(name.value) === true){
            messageAlert[0].classList.add('message_error');
            messageAlert[0].classList.remove('message_error-active');
            nameParagraph.innerText = 'Name: ' +name.value;
            return nameParagraph;
        }else{
        messageAlert[0].classList.add('message_error-active');
        nameParagraph.innerText = 'Add a valid name';
            return nameParagraph;
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
        var surnameParagraph = document.createElement('p');
        if(validateSurname(surname.value) === true){
            messageAlert[1].classList.add('message_error');
            messageAlert[1].classList.remove('message_error-active');
            surnameParagraph.innerText = 'Surname: ' +surname.value;
            return surnameParagraph;
        }else{
        messageAlert[1].classList.add('message_error-active');
        surnameParagraph.innerText = 'Add a valid surname';
            return surnameParagraph;
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
        
        if(numberOfLetters === 0 && numericChar > 7 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }

    function validateDn (){
        var dniParagraph = document.createElement('p');
        if(validateDni(dni.value) === true){
            messageAlert[2].classList.add('message_error');
            messageAlert[2].classList.remove('message_error-active');
            dniParagraph.innerText = 'dni: ' +dni.value;
            return dniParagraph;
        }else{
        messageAlert[2].classList.add('message_error-active');
        dniParagraph.innerText = 'Add a valid dni';
            return dniParagraph;
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
        var telParagraph = document.createElement('p');
        if(validateTelephone(tel.value) === true){
            messageAlert[4].classList.add('message_error');
            messageAlert[4].classList.remove('message_error-active');
            telParagraph.innerText = 'Telephone: ' +tel.value;
            return telParagraph;
        }else{
        messageAlert[4].classList.add('message_error-active');
        telParagraph.innerText = 'Add a valid tel';
            return telParagraph;
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
        var dateParagraph = document.createElement('p');
        if(validateDate(date.value) === true){
            messageAlert[3].classList.add('message_error');
            messageAlert[3].classList.remove('message_error-active');
            dateParagraph.innerText = 'Date: ' +date.value;
            return dateParagraph;
        }else{
        messageAlert[3].classList.add('message_error-active');
        dateParagraph.innerText = 'Add a valid date';
            return dateParagraph;
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
        var addressParagraph = document.createElement('p');
        if(validateAddress(address.value) === true){
            messageAlert[5].classList.add('message_error');
            messageAlert[5].classList.remove('message_error-active');
            addressParagraph.innerText = 'Address: ' +address.value;
            return addressParagraph;
        }else{
        messageAlert[5].classList.add('message_error-active');
        addressParagraph.innerText = 'Add a valid address';
            return addressParagraph;
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
        var locParagraph = document.createElement('p');
        if(validateLocation(location.value) === true){
            messageAlert[6].classList.add('message_error');
            messageAlert[6].classList.remove('message_error-active');
            locParagraph.innerText = 'Location: ' +loc.value;
            return locParagraph;
        }else{
        messageAlert[6].classList.add('message_error-active');
        locParagraph.innerText = 'Add a valid location';
            return locParagraph;
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
        var cpParagraph = document.createElement('p');
        if(validatePostal(postalCode.value) === true){
            messageAlert[7].classList.add('message_error');
            messageAlert[7].classList.remove('message_error-active');
            cpParagraph.innerText = 'CP: ' +cp.value;
            return cpParagraph;
        }else{
        messageAlert[7].classList.add('message_error-active');
        cpParagraph.innerText = 'Add a valid cp';
            return cpParagraph;
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

    function validateMail (){
        var emailParagraph = document.createElement('p');
        if(validacionEmail(email.value) === true){
            emailParagraph.innerText = 'Email: ' +email.value;
            return emailParagraph;
        }else{
        emailParagraph.innerText = 'Add a valid email';
            return emailParagraph;
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
        var passParagraph = document.createElement('p');
        if(validatePassw(password.value) === true){
            messageAlert[9].classList.add('message_error');
            messageAlert[9].classList.remove('message_error-active');
            passParagraph.innerText = 'Password: ' +password.value;
            return passParagraph;
        }else{
        messageAlert[9].classList.add('message_error-active');
        passParagraph.innerText = 'Add a valid password';
            return passParagraph;
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
        var repeatPassParagraph = document.createElement('p');
        if(validateRepeatPassw(password2.value) === true && password2.value === password.value){
            messageAlert[10].classList.add('message_error');
            messageAlert[10].classList.remove('message_error-active');
            repeatPassParagraph.innerText = 'Password repeat: ' +password2.value;
            return repeatPassParagraph;
        }else{
        messageAlert[10].classList.add('message_error-active');
        repeatPassParagraph.innerText = 'Repeat the same password';
            return repeatPassParagraph;
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

    // Add focus event

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
       
    function signCreate(){
        var nameContainer = validateNam(name.value);
        var surnameContainer = validateSur(surname.value);
        var dniContainer = validateDn(dni.value);
        var dateContainer = validateDat(date.value);
        var telContainer = validateTel(tel.value);
        var addressContainer = validateAd(address.value);
        var locContainer = validateLoc(location.value);
        var cpContainer = validateCp(postalCode.value);
        var emaiContainer = validateMail(email.value)
        var passContainer = validatePass(password.value);
        var repeatPassContainer = validateRepeatPass(password2.value);
        errorDiv.appendChild(nameContainer);
        errorDiv.appendChild(surnameContainer);
        errorDiv.appendChild(dniContainer);
        errorDiv.appendChild(dateContainer);
        errorDiv.appendChild(telContainer);
        errorDiv.appendChild(addressContainer);
        errorDiv.appendChild(locContainer);
        errorDiv.appendChild(cpContainer);
        errorDiv.appendChild(emaiContainer)
        errorDiv.appendChild(passContainer);
        errorDiv.appendChild(repeatPassContainer);
        errorDiv.classList.add('error-div-active');
        closeButton.addEventListener('click',function (e) {
            errorDiv.classList.remove('error-div-active');
            nameContainer.parentNode.removeChild(nameContainer);
            surnameContainer.parentNode.removeChild(surnameContainer);
            dniContainer.parentNode.removeChild(dniContainer);
            dateContainer.parentNode.removeChild(dateContainer);
            telContainer.parentNode.removeChild(telContainer);
            addressContainer.parentNode.removeChild(addressContainer);
            locContainer.parentNode.removeChild(locContainer);
            cpContainer.parentNode.removeChild(cpContainer);
            emaiContainer.parentNode.removeChild(emaiContainer);
            passContainer.parentNode.removeChild(passContainer);
            repeatPassContainer.parentNode.removeChild(repeatPassContainer);
        })
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
    

    btnCreate.addEventListener('click', function(e){
        e.preventDefault();
        signCreate(e);
    })
    
}






