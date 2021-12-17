const principalBox = document.querySelector("#Principal")
const interestBox = document.querySelector("#Interest")
const timesBox = document.querySelector("#Times")
const yearsBox = document.querySelector("#Years")
const compInterestSpan = document.querySelector("#compInterest")

function computeCompoundInterest(){
  const principal = principalBox.value
  const interest = interestBox.value
  const times = timesBox.value
  const years = yearsBox.value
  const rateToDecimal = interest / 100
  const compInterest = principal * (Math.pow(1+(rateToDecimal/times),(times * years)))
  compInterestSpan.textContent = compInterest
}

principalBox.addEventListener('input', computeCompoundInterest)
interestBox.addEventListener('input', computeCompoundInterest)
timesBox.addEventListener('input', computeCompoundInterest)
yearsBox.addEventListener('input', computeCompoundInterest)