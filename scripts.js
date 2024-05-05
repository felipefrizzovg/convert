// Cotação de moedas do dia
const USD = 5.07
const EUR = 5.46
const GBP = 6.36

// Obtendo os elementos
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipulando o input amount para receber somente números
amount.addEventListener('input', () => {
  const regexHasChar = /\D+/g
  amount.value = amount.value.replace(regexHasChar, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (e) => {
  e.preventDefault();

  switch(currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break;
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    // Verifica se o resultado não é um número
    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter")
    }

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace('R$', "")

    // Exibe o resultado total
    result.textContent = `${total} reais`

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error){
    // Remove a classe do footer ocultando ele da tela
    footer.classList.remove("show-result")

    console.log(error)
    alert("Algo deu errado com sua solicitação. Tente novamente mais tarde")
  }
}

// formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$00,00)
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })
}