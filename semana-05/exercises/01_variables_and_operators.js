console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/*a.Crear dos variables numéricas y utilizar el operador suma para guardar el valor de 
la suma de ambos números en una 3er variable.*/

console.log('-Exercise 1.a:')

var edadJuan, edadPepe;

edadJuan = 20;
edadPepe = 30;

var sumatoriaEdades = edadJuan + edadPepe;
console.log(sumatoriaEdades);

/*b.Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

console.log('-Exercise 1.b:')

var stringA, stringB;

stringA = 'Lautaro';
stringB = 'Acosta';

var cadenaCompleta = stringA + ' ' + stringB;
console.log(cadenaCompleta);

/*c.Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log('-Exercise 1.c:')

var stringX, stringY;

stringX = 'Led';
stringY = 'Zeppelin';

var suma = (stringX + stringY).length;
console.log(suma);