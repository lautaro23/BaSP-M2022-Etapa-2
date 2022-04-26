window.onload = function() {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones = {
       email:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
       password:/^[A-Za-z0-9\s]+$/
   }

    const campos = {
    email: false,
    password:false
    }

    const validarFormulario = (e)=> {
        switch (e.target.name) {
            case 'email':
                validarCampo(expresiones.email, e.target, 'email')
                break;

            case 'password':
                validarCampo(expresiones.password, e.target, 'password')
                break;
        };
    }
    
    const validarCampo = (expresion,input,campo) =>{
        if(expresion.test(input.value)){
            document.getElementById(`grupo-${campo}`).classList.remove('login_input-incorrecto');
            document.querySelector(`#grupo-${campo} .input_error`).classList.remove('input_error-active');
            campos[campo] = true;
           } else{
               document.getElementById(`grupo-${campo}`).classList.add('login_input-incorrecto');
               document.querySelector(`#grupo-${campo} .input_error`).classList.add('input_error-active');}
               campos[campo] = false;
           }
       }
}