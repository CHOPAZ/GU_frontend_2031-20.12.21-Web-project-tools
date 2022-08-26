const result = document.getElementById("datecalc__result")

export const printError = (textErr) => {
  result.innerText = textErr
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
}