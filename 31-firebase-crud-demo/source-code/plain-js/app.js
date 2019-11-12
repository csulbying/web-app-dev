const input = document.getElementById('myInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('myUL')

input.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    // Enter key
    appendTodo()
  }
})

addBtn.addEventListener('click', appendTodo)

todoList.addEventListener('click', handleTodoClick)

function handleTodoClick(event) {
  const target = event.target
  if (target.tagName === 'LI') {
    event.target.classList.toggle('checked')
  } else if (target.tagName === 'SPAN') {
    const div = target.parentElement
    div.style.display = 'none'
  }
}

function appendTodo() {
  const inputValue = input.value
  if (inputValue === '') {
    alert('Todo cannot be empty')
  } else {
    input.value = ''
    const listItem = appendListItem(inputValue)
    appendCloseToItem(listItem)
  }
}

function appendListItem(todoText) {
  const todoItem = document.createElement('li')
  const todo = document.createTextNode(todoText)
  todoItem.appendChild(todo)
  todoList.appendChild(todoItem)
  return todoItem
}

function appendCloseToItem(listItem) {
  var span = document.createElement('SPAN')
  var txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  listItem.appendChild(span)
}
