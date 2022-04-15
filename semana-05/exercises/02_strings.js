console.log('--EXERCISE 2: STRING');

/*a.Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('-Exercise 2.a:');

var string;

string = 'microondas';

console.log(string.toUpperCase());

/*b.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');

var stringC, stringE ;

stringC = 'computadora';
stringE = stringC.substring(0,5);

console.log(stringE);

/*c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring)*/

console.log('-Exercise 2.c:');

var stringF, stringG ;

stringF = 'lavarropas'
stringG = stringF.substring(7,10);

console.log(stringG);

/*d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 2.d:')

var stringH , stringI , stringJ;

stringH = 'termotanque'
stringI = stringH.substring(0,1).toUpperCase();
stringJ = stringH.substring(1).toLowerCase();

var sumatoriaString = stringI + stringJ;
console.log(sumatoriaString);


/*e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 2.c:');

var stringK, stringEspacio;

stringK = 'perros gatos';
stringEspacio = stringK.indexOf(' ');

console.log(stringEspacio); 

/*f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra 
de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 2.e:')

var stringL;

stringL = 'mochila bolso';
stringMochi = stringL.substring(0,1).toUpperCase();
stringMochila = stringL.substring(1,8).toLowerCase();
stringBolso = stringL.substring(8,9).toUpperCase();
stringBolsito = stringL.substring(9).toLowerCase();

var sumaMochiBolso = stringMochi + stringMochila + stringBolso + stringBolsito;
console.log(sumaMochiBolso);