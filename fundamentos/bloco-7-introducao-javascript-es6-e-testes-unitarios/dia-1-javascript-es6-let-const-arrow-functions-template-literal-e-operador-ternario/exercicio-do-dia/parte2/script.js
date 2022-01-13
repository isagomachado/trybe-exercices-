const fator = (number) => (number > 1) ? number * fator(number - 1) :  number;
    
 

console.log(fator(3));