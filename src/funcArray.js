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
    let longestWord = "";
    if(array.length === 0){
        return undefined;
    }
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){
        longestWord = array[i];
        }
    }
    return longestWord;
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
    let suma = 0;
    if(array.length === 0){
        return undefined;
    }
    for(let i = 0; i <array.length; i++){
        suma += array[i];
    }
    let media = suma/array.length;
    return media; 
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
    set objeto

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
   if(array.length === 0){
       return false;
    }
    for(let i = 0; i < array.length; i++){
        if (palabras[i]===bPalabra){
            return true;
        } else{
            return false;
        }
    }
}

/*Cuenta repeticiones*/

export function howManyTimes(){
    
}
export function greatestProduct(){}





