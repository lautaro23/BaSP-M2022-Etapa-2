console.log('--EXERCISE 6: FUNCTIONS')

/*a.Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador..*/

console.log('-Exercise 6.a:');

function suma(y,x){
    sumatoria = y + x;
    return sumatoria;
}
console.log(suma(20,30));

/*b.A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('-Exercise 6.b:');

function sumaB(y,x){
    if (typeof y === 'number' && typeof x === 'number'){
        var sumatoria = y + x;
        return sumatoria ;
    } else {
        alert('uno de los parametros tiene un error');
        return NaN;
    }   
}

console.log(sumaB('error',2));

/*c.Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log('-Exercise 6.c:');

function validateInteger(z){
    if (Number.isInteger(z)) {
        return true;
      }
      return false;
    }

console.log(validateInteger(4.1));

/*d.A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('-Exercise 6.d:');

function sumaD(y,x){
    if (typeof y === 'number' && typeof x === 'number'){
        if (Number.isInteger(y) && Number.isInteger(x)){
            var sumatoria = y + x;
            return sumatoria ;  
        }
        else{
            alert('uno de los numero no es entero')
            if (!Number.isInteger(y)){
                return Math.round(y);
            }
            if (!Number.isInteger(x)){
                return Math.round(x);
            }
        }
    } else {
        alert('uno de los parametros tiene un error');
        return NaN;
    }   
}

console.log(sumaD(4.5,6));

/*e.Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de la función suma probando que todo siga funcionando igual.*/

console.log('-Exercise 6.e:');

function sumaE(y,x){
    if (typeof y === 'number' && typeof x === 'number'){
        if (validacion(y,x)){
            var sumatoria = y + x;
            return sumatoria ;  
        }
        else{
            alert('uno de los numero no es entero')
            if (!Number.isInteger(y)){
                return Math.round(y);
            }
            if (!Number.isInteger(x)){
                return Math.round(x);
            }
        }
    } else {
        alert('uno de los parametros tiene un error');
        return NaN;
    }   
}

function validacion(y,x){
    if (Number.isInteger(y) && Number.isInteger(x)){
        return true;
    }
    else {
        return false;
    } 
}

console.log(sumaE(4.5,6));