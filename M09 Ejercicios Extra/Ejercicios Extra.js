/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   array = []
   for (var value in objeto){
      array.push([value,objeto[value]]) ;
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   stringMinus = string.toLowerCase() // string.toLowerCase() --> hace que cualquier letra de un string se vuelva minuscula
   arrayString = stringMinus.split("") // string.split("") --> hace que cualquier string se divida en un array lo que va dentro del parentesis es el factor que usa para dividirlo ("") --> esto hace que sea por cada caracter
   arrayOrganizado = arrayString.sort(); //array.sort() --> organiza los valores de una lista en función del codigo ASCII
   stringOrganizado = arrayOrganizado.join("") // array.join("") --> hace que cualquier array se combine lo que va dentro del parentesis es el factor que usa para dividirlo ("") --> esto hace que sea por cada caracter
   object = {} // un objeto se defien utilizando { dentro van conjuntos de claves - valor}
   for (i=0 ; i < stringOrganizado.length ; i++){
      if(object.hasOwnProperty(stringOrganizado[i])){ //object.hasOwnProperty() mira que dentro de un objeto exista una clave lo que va dentro de () es el parametro que busca.
         object[stringOrganizado[i]] = object[stringOrganizado[i]] + 1 // es una forma de definir una clave valor objeto[x] si no existe crea una nueva clave y = objeto[i] --> luego evalua el valor dentro de la clave. Es medio rari
      } else {
         object[stringOrganizado[i]] = 1
      }
   }
   return object
   

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   arrayMinus = []
   arrayMayus = []
   arrayString = string.split("")
   for (i=0; i < arrayString.length; i++) {
     if(arrayString[i] === arrayString[i].toLowerCase()){
      arrayMinus.push(arrayString[i])
     } else {
      arrayMayus.push(arrayString[i])
     }
   }
   arrayOrganizado = Array.prototype.concat(arrayMayus,arrayMinus) // --> si quiero llamar a una función que impacta a la clase Array tengo que invocarla poniendo Array.prototype.
   string = arrayOrganizado.join("")
   return string
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   arrayString = frase.split(" ");
   arrayArray = []
   for (i=0 ; i < arrayString.length ; i++) {
    arrayArray[i] = arrayString[i].split("").reverse().join("")
   }
  return arrayArray.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numeroString = numero.toString()
   numeroReverso = numeroString.split("").reverse().join("")
   if (numero == numeroReverso) {
      return "Es capicua"
   }
   return "No es capicua"

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   array = string.split("")
   arrayRecortado = []
   for (i=0 ; i < array.length ; i++){
      if(array[i]!="a" && array[i]!="b" && array[i]!="c"){
         arrayRecortado.push(array[i])
      }
   }
   return arrayRecortado.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   array = arrayOfStrings.sort(function(a,b){
      return a.length - b.length;
   });
   
   return array
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   comun = []
   for (i=0; i< array1.length ; i++){
      if (array2.includes(array1[i])){
         comun.push(array1[i])
      }
   }
   return comun
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
