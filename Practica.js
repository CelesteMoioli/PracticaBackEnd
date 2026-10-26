// Ejercicio 01 / Funciones y Arrays 

// 1) Crear una funcion que reciba dos parametros y retorne un valor. 

const resta = (a,b) => {return a - b}

// 2) Crear una funcion que se llame calcularAreaCuadrado que reciba un parametro que sea el lado del cuadrado,
// calcule el area y la retorne. 

const calcularAreaCuadrado = (lado) => {return lado * lado}

// 3) Crear una funcion por declaracion, puede hacer lo que quieras. 

function Cantar (shakirasong){ return shakirasong }

// 4) Crear una funcion lambda por expresion que se llame autosuma,
// recibe un parametro que es un array de numeros y retorna la suma del total de los numeros
// (utilizar foreach para recorrer el array) 

const autosuma = function (arrayNums) {
    let suma = 0;
    arrayNums.forEach((num) => {
        suma += num;
    })
    return suma;
};

// 5) Crear una funcion flecha (arrow function) que reciba un nombre, el año de nacimiento,
// y retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años” 

const anios = (nombre, anioNacimiento) => {
    const anioActual = 2026;
    const edad = anioActual - anioNacimiento;
    return `Hola ${nombre} este año tenes o cumplis ${edad}`
}

// 6) Crear una funcion lambda que se llame inscribirAlumno, que reciba un array de alumnos y un nombre,
// que agregue al alumno en la ultima posicion del array. 

const inscribirAlumno = function (arrayAlumnos, nombre){
    arrayAlumnos.push(nombre);
    return arrayAlumnos;
}

// 7) Crear una funcion que se llame buscador, que reciba un array con nombres de alumnos
// y un nombre a buscar, y diga si encuentra el nombre en la lista. 

const buscador = function (arrayNomAlumns, nombre) {
   if (arrayAlumns.find(nombre)){
    return console.log(nombre)
}
}

// Ejercicio 02 / Callbacks 

// 1) Definir una funcion que se llame Calculadora, que reciba un array de numeros, y una callback. 
// A) Pasarle por argumento una funcion arrow que realice la suma de los elementos del array. 
// B) Pasarle por argumento una funcion arrow que realice la resta de los elementos del array.
// C) Pasarle por argumento una funcion arrow que realice la multiplicacion de los elementos. 

const nuevoArray = [1,2,3,4,5,6];

const calculadora = (arrayNumeros, callback) => {
    return callback(arrayNumeros);
};

const sumaArray = (array) => {
    let suma = 0;
    array.forEach ((numeros) => {
        suma += numeros;
    })
    return suma;
}

const restaArray = (array) => {
    let resta = 0;
    array.forEach ((numeros) => {
        resta -= numeros;
    })
    return resta;
}

const multiplicarArray = (array) => {
    let multiplicar = 1;
    array.forEach ((numeros) => {
        multiplicar *= numeros;
    })
    return multiplicar;
}

console.log(calculadora(nuevoArray, sumaArray));
console.log(calculadora(nuevoArray, restaArray));
console.log(calculadora(nuevoArray, multiplicarArray));


// 2) Definir una funcion llamada agregarSiEstaEntreCeroYDiez, que reciba un numero, y un array, la funcion debe validar si el numero es mayor o igual a cero y menor o igual a 10, en caso favorable, debe agregarlo en la primera posicion del array, caso contrario debe arrojar un error informando que el numero es mayor o menor a lo establecido. Debe retornar el array con el resultado. 

// 3) Definir una funcion similar a la del punto 2, pero que en vez de un numero reciba un array con numeros y valide si cada uno de los elementos cumple con la condicion de estar entre cero y diez, debe retornar un array con los numeros que cumplan la funcion. 

// 4) Momento de creatividad! / Definir una funcion que reciba tres parametros, algo, y dos callbacks, que internamente las ejecute y realice algun procedimiento. 

// 5) Realizar una funcion que se llame validarIngreso, que reciba una edad, y una callback. Esta funcion debe validar por medio de un operador ternario si puede ingresar o no (la condicion es que sea mayor a 18 años). El resultado del operador ternario se debe pasar como argumento a la ejecucion de la callback. (Podes elegir que hacer con la funcion callback que le vas a pasar por argumento a la funcion validarIngreso)

