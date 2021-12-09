const title = document.getElementById("header-container")
title.style.backgroundColor = "#2fc18c"

const ladoEsq = document.getElementsByClassName("teste")
ladoEsq[0].style.backgroundColor = "#fb75fb"

const testeEsq = document.querySelector(".emergency-tasks h3")
testeEsq.style.backgroundColor = "#fb75fb"

const ladoDirCima = document.querySelector(".no-emergency-tasks h3")
ladoDirCima.style.backgroundColor = "black"

const testeDir = document.querySelectorAll(".no-emergency-tasks h3")
testeDir[1].style.backgroundColor = "black"


// let fundoDir = document.querySelectorAll(".tudo-direita")
// fundoDir[0].style.backgroundColor = "#ff9f84"
// fundoDir[1].style.backgroundColor = "#ff9f84"

// let fundoEsq = document.querySelectorAll(".tudo-esquerda")
// fundoEsq[0].style.backgroundColor = "#f9db5e"
// fundoEsq[1].style.backgroundColor = "#f9db5e"

const fundoDireita = document.querySelectorAll(".tudo-direita")
fundoDireita[0].style.backgroundColor = "#ff9f84"

const fundoEsquerda = document.querySelectorAll(".tudo-esquerda")
fundoEsquerda[0].style.backgroundColor =  "#f9db5e"

let rodape = document.getElementById("footer-container")
rodape.style.backgroundColor = "#003533"