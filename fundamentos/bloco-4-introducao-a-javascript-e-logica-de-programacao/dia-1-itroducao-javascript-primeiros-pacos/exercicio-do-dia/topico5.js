const anguloA = 60
const anguloB = 41
const anguloC = 60

let somaDosAngulos = anguloA + anguloB + anguloC
let validacao

if (somaDosAngulos >= 180){
    validacao = true
} else if (anguloA < 0 || anguloB < 0 || anguloC < 0){
    validacao = "Opção invalida"
}else {
    validacao = false 
}

console.log(validacao)