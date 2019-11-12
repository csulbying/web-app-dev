const form = document.getElementById('leave-message')
const input = document.getElementById('message')

form.addEventListener('submit', e => {
  // Prevent the default form redirect
  e.preventDefault()
  // Write a new message to the database collection "guestbook"

  addData()
  // clear message input field
  input.value = ''
  // Return false to avoid redirect
  return false
})

function addData() {
  firebase
    .firestore()
    .collection('guestbook')
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
