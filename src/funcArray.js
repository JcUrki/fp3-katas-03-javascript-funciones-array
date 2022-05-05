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
Op-1
    export function findLongestWord(array){
        let longestWord;
        for(let i = 0; i<array.length;i++){
            if(array[i].length > (longestWord?.length || 0)){ //omite el if array.length return undefined con el ||; y con el ? se utiliza por no inicializar la variable
                longestWord = array[i];
            }
        }
        return longestWord;
    }

Op-2 *** no pasa el último requisito
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
    let sum = 0;
    for(let i = 0; i <array.length; i++){
        sum += array[i];
    }
    return sum;
}

/*Calcula la media aritmética*/

//Array de números

export function averageNumbers(array){
    if(!array.length){
        return undefined;
    }
    return sumArray(array)/array.length;
/*   
Op-1
    let suma = 0;
    if(array.length === 0){
        return undefined;
    }
    for(let i = 0; i <array.length; i++){
        suma += array[i];
    }
    let media = suma/array.length;
    return media; 

Op-2
    ***El if tiene otra manera de escribirse: Estructura ternaria
        return !array.length ? undefined : sumArray(array)/array.length;

*/
}

//Array de strings

export function averageWordLength(array){
    let words = "";
    if(array.length === 0){
        return undefined;
    }
    for(let i = 0; i < array.length; i++){
        words += array[i];
    }
    let media = words.length/array.length;
    return media; 
}

/*Recibe un array de palabras como parámetro*/

export function uniquifyArray(array){
    let noDuplicate = [];
    if(!array.length ){
        return undefined;
    } 
    for(let i=0; i<array.length; i++){
        if(noDuplicate.indexOf(array[i])===-1){//El ===-1 da el return unifyArray
            noDuplicate.push(array[i]);
        }
    }
    return noDuplicate;
    /* Others
    Op-1        Object set

    Op-2        .includes
        for(let i = 0; i < array.length; i++) {
            const words= array[i];
            if (!noDuplicate.includes(array[i])) {
                noDuplicate.push(words);
            }
        }
        
    Op-4        .some

    Op-5
        if(!array.length ){
            return undefined;
        }else { 
            let resultado = array.reduce((palabraSinRepetir, currentValue) =>{
        if(!palabraSinRepetir.find(d => d == currentValue)) {
            palabraSinRepetir.push(currentValue);
        } 
        return palabraSinRepetir;
    }, [])

    return resultado
    */
}

/*Busca elementos*/ 

export function doesWordExist(array, sWord){
   let words= false;
   for(let i= 0; i<array.length; i++){
       if (array[i]=== sWord){
           words= true;
       }
   }
   return words;
    
/*
Other option
    array[i].include(bPalabra)
*/
}

/*Cuenta repeticiones*/

export function howManyTimes(array, word){
    if(!array.length ){
        return undefined;
    } 
    let nRepeat= 0;
    for(let i= 0; i < array.length; i++){
        if(array[i] == word){
            nRepeat++
        }
    }
    return nRepeat;
    /*
    Op      .forEach ^ .includes
        export function howManyTimes(array, search){
            if(!array.length) {
            return undefined;
            } else {
                let count= 0; array.forEach(element => {
                    if(element.includes(search)){
                        count ++;
                    }
                });
                return countr; 
            }
        }

    Op      .filter 
    */
}
/*Producto mayor de cuatro números adyacentes*/
export function greatestProduct(array){
    if(array[i].length===1){
        return 1;
    };
    let matrix= [];
    let max = 0, result;
    
    for(let i= 0; i < array.length; i++){
        for (let j= 0; j < array.length; jç++){
             //Hori
            if((j++) >=0){
                result= array[i][j]*array[i][j++]; 
                if(nax< result){
                    max= result;
                }   
            }
            //Vert
            if((j++) >=0){
                result= array[i][j]*array[i++][j++]; 
                if(nax< result){
                    max= result;
                }
            }
            //Dia
            if ((i++) >= 0 && (j++) >= 0){ 
                result= array[i][j]*array[i][j++]; 
                if (max < result){ 
                max = result; 
                }
            } 
        }
        
        }
    return matrix;
}





