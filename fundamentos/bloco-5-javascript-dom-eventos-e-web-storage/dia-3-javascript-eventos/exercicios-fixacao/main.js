const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

//
//
//////////////////////////////RESOLVER O EXERCICIO////////////////////////////
//
//

// Requisito 2

function adicionaClasse(event) {
  event.target.className = "tech";
  resetClass(event);
}

function resetClass(event) {
  if (event.target !== firstLi) {
    firstLi.classList.remove("tech");
  }
  if (event.target !== secondLi) {
    secondLi.classList.remove("tech");
  }
  if (event.target !== thirdLi) {
    thirdLi.classList.remove("tech");
  }
}

firstLi.addEventListener("click", adicionaClasse);
secondLi.addEventListener("click", adicionaClasse);
thirdLi.addEventListener("click", adicionaClasse);

//////////////////////////////////////////////////////////////////////////////////////

// Requisito 3

function mudaTexto(event) {
  let element = document.querySelector(".tech");
  let getText = event.target.value;
  element.innerText = getText;
}

input.addEventListener("keyup", mudaTexto);

//////////////////////////////////////////////////////////////////////////////////////

// Requisito 4

function redirecionar(event) {
  window.open("https://isagomachado.github.io/","_blank")
  console.log("funciona")
}

myWebpage.addEventListener("dblclick", redirecionar);

//////////////////////////////////////////////////////////////////////////////////////

// Requisito 5

function mudaCor(event) {
  event.target.style.color = "red"
}

function voltaCor(event) {
  event.target.style.color = "white"
}

myWebpage.addEventListener("mouseover", mudaCor);
myWebpage.addEventListener("mouseleave", voltaCor )