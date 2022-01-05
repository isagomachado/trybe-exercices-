window.onload = function() {
  const getSelect = document.querySelector("#select-state")
  const BrazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceara', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
  // let criaOptions
  
  criaOption()
  
  function criaOption() {
       for (let index = 0; index < BrazilianStates.length; index += 1){
      let state = BrazilianStates[index];
      let criaOptions = document.createElement('option');
      criaOptions.innerText = state
      criaOptions.value = state
      getSelect.appendChild(criaOptions)
    }
  }







}