const addBtn = document.getElementById('addBtn')
const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const output = document.getElementById('output')

addBtn.addEventListener('click', addNumbers)

function addNumbers() {
  const num1String = num1Input.value
  const num1Value = parseInt(num1String, 10)

  const num2String = num2Input.value
  const num2Value = parseInt(num2String, 10)

  const sum = num1Value + num2Value

  output.innerHTML = sum
}
