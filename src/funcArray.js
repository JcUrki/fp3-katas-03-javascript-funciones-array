/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
   if (a > b){
       return a;
   } else {
       return b;
   }
}

/*
Op-1
    let mayor= Math.max(a, b);
    return mayor;
*/

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

Op-3    .forEach
    findLongestWord(arrayWords){
        if(arrayWords.length === 0) {
            return undefined;
        } else {
        let longestWord="";
            arrayWords.forEach(word => {
                if(word.length > longestWord.length) {
                    longestWord= word
                }
            });
        
        return longestWord;
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

/*
Op-1    .reduce()
    let sum= array.reduce(
        (previousValue, currrentValue) => previousValue+ currrentValue, 0)
*/
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
    /*
    Op  Más corto
     for(let i = 0; i < array.length; i++){
        words += array[i];
    }
    return words.length/array.length;

    Op  .map()
        let Words = array.map(x => x.length)
        let media= averageNumbers(Words);
        return Words;
    */ 
}

/*Recibe un array de palabras como parámetro*/

export function uniquifyArray(array){
    let noDuplicate = [];
    if(!array.length){
        return undefined;
    } 
    for(let i=0; i<array.length; i++){
        if(noDuplicate.indexOf(array[i])===-1){//El ===-1/ <0 da el return unifyArray
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
            let resultado = array.reduce((noDuplicate, currentValue) =>{
        if(!noDuplicate.find(d => d == currentValue)) {
            noDuplicate.push(currentValue);
        } 
        return noDuplicate;
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
    Op  .includes()
        if(array.includes(sWord))
        return true;
        return false;

        or
        if(!array.length){
            return false;
        }
        return array.includes(sWord);

    Op  Más simplificado
        let words = array.includes(sWord);
        return words;
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
            if(!array.length) {
            return undefined;
            } else {
                let count= 0; array.forEach(element => {
                    if(element.includes(word)){
                        count ++;
                    }
                });
                return count; 
            }
    
    Op  
        let nRepeat = [];
        let idx = array.indexOf(word);
        while (idx != -1) {
            nRepeat.push(idx);
            idx = array.indexOf(word, idx + 1);
        }
        return nRepeat.length;

    Op      .filter 
    */
}
/*Producto mayor de cuatro números adyacentes*/
export function greatestProduct(array){
    let max = 0;
    //i = x && j = y
    for (let i = 0; i<array.length-3; i++){ //Omite los ultimos 3, ya que estos últimos no pueden agruparse en grupos de 4
        // Calcula horizontal
        for (let j = 0; j<array[i].length; j++){ 
            if(array[i][j]*array[i+1][j]*array[i+2][j]*array[i+3][j] > max){
                max = array[i][j]*array[i+1][j]*array[i+2][j]*array[i+3][j];
            }; //Grupos de 4
        }   
    }
    for (let i = 0; i<array.length; i++){ 
        // Calcula vertical
        for (let j =0; j<array[i].length-3; j++){
            if(array[i][j]*array[i][j+1]*array[i][j+2]*array[i][j+3] > max){
                max = array[i][j]*array[i][j+1]*array[i][j+2]*array[i][j+3];
            };
        }
    }
    for (let i = 0; i<array.length-3; i++){ 
        // Calcula diagonal de izquierda-superior a derecha-inferior
        for (let j =0; j<array[i].length-3; j++){ 
            if(array[i][j]*array[i+1][j+1]*array[i+2][j+2]*array[i+3][j+3] > max){
                max = array[i][j]*array[i+1][j+1]*array[i+2][j+2]*array[i+3][j+3];
            };
        }  
    } 
    for (let i = 3; i<array.length-3; i++){ 
        // Calcula diagonal derecha-superior a izquierda-inferior
        for (let j =0; j<array[i].length-3; j++){
            if(array[i][j]*array[i-1][j-1]*array[i-2][j-2]*array[i-3][j-3] > max){
                max = array[i][j]*array[i-1][j-1]*array[i-2][j-2]*array[i-3][j-3];
            };
        } 
    }   
    return max;    
}




/* Hay un pequeño error en el test con respecto al calculo de la diagonal ya que el resultado más alto de las 4 adyacentes debe dar igual a 70600674. Una buena forma de calcular las diagonales sería con la estructura a continuación
    for (let i =0; i<array.length-3; i++){ 
            // Calcula diagonal de izquierda-superior a derecha-inferior
            for (let j =3; j<array[i].length; j++){ 
                if( array[i][j]*array[i+1][j-1]*array[i+2][j-2]*array[i+3][j-3] > max){
                    max =  array[i][j]*array[i+1][j-1]*array[i+2][j-2]*array[i+3][j-3]
                };
        }
        }
        let reverse= array.map(x => x.reverse())
        for (let i =0; i<reverse.length-3; i++){ 
            // Calcula diagonal de izquierda-superior a derecha-inferior
            for (let j =3; j<reverse[i].length; j++){ 
                if( reverse[i][j]*reverse[i+1][j-1]*reverse[i+2][j-2]*reverse[i+3][j-3] > max){
                    max =  reverse[i][j]*reverse[i+1][j-1]*reverse[i+2][j-2]*reverse[i+3][j-3]
                };
        }
    */