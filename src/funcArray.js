/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
   if (a > b){
       return a;
   } else {
       return b;
   }
}

/*Encuentra la palabra más larga*/

export function findLongestWord(array){
    if(array.length === 0){//o if(!array.length) la exclamación significa que el valor es 0
        return undefined;
    }
    let longestWord = "";
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){
        longestWord = array[i];
        }
    }
    return longestWord;
/*
Other option
export function findLongestWord(array){
    let longestWord;
    for(let i = 0; i<array.length;i++){
        if(array[i].length > (longestWord?.length || 0)) //omite el if array.length return undefined con el ||; y con el ? se utiliza por no inicializar la variable
            longestWord = array[i];
    }
    return longestWord;
}

Op 2 *** no pasa el último requisito
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].length < array[j].length) {
                return array[j];
            } else {
                return array[i];
            }
        }
    }

*/
}

/*Calcula la suma*/ 

export function sumArray(array){
    let suma = 0;
    for(let i = 0; i <array.length; i++){
        suma += array[i];
    }
    return suma;
}

/*Calcula la media aritmética*/

//Array de números

export function averageNumbers(array){
    if(!array.length){
        return undefined;
    }
    return sumArray(array)/array.length;
/*   
Other option
    let suma = 0;
    if(array.length === 0){
        return undefined;
    }
    for(let i = 0; i <array.length; i++){
        suma += array[i];
    }
    let media = suma/array.length;
    return media; 

Option 
El if tiene otra manera de escribirse: estructura ternaria
    return !array.length ? undefined : sumArray(array)/array.length;

*/
}

//Array de strings

export function averageWordLength(array){
    let palabras = "";
    if(array.length === 0){
        return undefined;
    }
    for(let i = 0; i < array.length; i++){
        palabras += array[i];
    }
    let media = palabras.length/array.length;
    return media; 
}

/*Recibe un array de palabras como parámetro*/

export function uniquifyArray(array){
    //Option-1
    let noDuplicate = [];
    if(array.length === 0){
        return undefined;
    }
    for(let i=0; i<array.length; i++){
        if(noDuplicate.indexOf(array[i])){
            noDuplicate.push(array[i])
        }
    }
    return noDuplicate;

    /* 
    Option-2 
    Object set

    Option-3
    .includes

    Option-4
    .some
    */
}

/*Busca elementos*/ 

export function doesWordExist(array){
   let palabras = [];
   let bPalabra= "";
   if(!array.length){
       return false;
    }
    for(let i = 0; i < array.length; i++){
        if (palabras[i]===bPalabra){
            return true;
        } else{
            return false;
        }
    }
/*
Other option
    palabra[i].include(bPalabra)
*/
}

/*Cuenta repeticiones*/

export function howManyTimes(){
    
}
export function greatestProduct(){}





