let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0] 
let menorPalavra = array[0]

//maior palavra 
for (let index = 0; index < array.length; index += 1){
  if(array[index].length > maiorPalavra.length){
    maiorPalavra = array[index]
  }
}

console.log(maiorPalavra)

//menor palavra 
for (let index = 0; index < array.length; index += 1){
  if(array[index].length < menorPalavra.length){
    menorPalavra = array[index]
  }
}

console.log(menorPalavra)