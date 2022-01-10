// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function linkInutil(event) {
  event.preventDefault()
}
function travaLetra(event) {
  let teste = INPUT_TEXT.value
  if (event.key !== a){
    event.preventDefault()
  }
}

HREF_LINK.addEventListener('click', linkInutil)
INPUT_CHECKBOX.addEventListener('click', linkInutil)
INPUT_TEXT.addEventListener('keypress', travaLetra)