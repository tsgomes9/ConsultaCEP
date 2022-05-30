const cep = document.querySelector('#cep')
const botao = document.querySelector('#consulta')

function showData(data) {
  document.querySelector('#logradouro').value = data.logradouro
  document.querySelector('#bairro').value = data.bairro
  document.querySelector('#localidade').value = data.localidade
  document.querySelector('#uf').value = data.uf
}

botao.addEventListener('click', () => {
  let search = cep.value.replace('-', '')

  const options = {
    method: 'GET',
    mode: 'cors', //usando servidor externo
    cache: 'default'
  }

  const url = `https://viacep.com.br/ws/${search}/json`

  fetch(url, options)
    .then(r => r.json())
    .then(data => showData(data))
    .catch(e => console.log(e))
})

//document.querySelector('#logradouro').value =
