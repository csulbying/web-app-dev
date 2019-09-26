const addBtn = document.getElementById('addBtn')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const output = document.getElementById('output')

addBtn.addEventListener('click', addNumbers)

function addNumbers() {
  const val1 = num1.value
  const val2 = num2.value
  const sum = parseInt(val1, 16) + parseInt(val2, 16)
  output.innerHTML = sum
}
