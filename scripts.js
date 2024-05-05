const amount = document.getElementById('amount');

// Manipulando o input amount para receber somente números
amount.addEventListener('input', () => {
  const regexHasChar = /\D+/g
  amount.value = amount.value.replace(regexHasChar, "")
})

