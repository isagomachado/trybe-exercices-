const fator = (number) => {
    
  if (number > 1) {
   return number * fator(number - 1)
  } 
  
  return number
  
};

console.log(fator(5));