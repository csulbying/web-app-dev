const sendButton = document.getElementById('sendButton')
const input = document.getElementById('message')

const outputList = document.getElementById('output-list')

const db = firebase.firestore()

sendButton.addEventListener('click', addData)

function addData() {
  db.collection('messages')
    .add({
      text: input.value,
      timestamp: Date.now(),
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function(error) {
      console.error('Error adding document: ', error)
    })
}

db.collection('messages').onSnapshot(docs => {
  outputList.innerHTML = ''
  docs.forEach(doc => showData(doc.data()))
})

function showData(data) {
  const todoItem = document.createElement('li')
  const todo = document.createTextNode(data.text)
  todoItem.appendChild(todo)
  outputList.appendChild(todoItem)
}
