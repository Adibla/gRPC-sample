const client = require('./client')

let new_note = {
  title: "New Note",
  content: "New Note content"
}

client.insert(new_note, (error, note) => {
  if (!error) {
    console.log('successfully fetch List notes')
    console.log(note)
  } else {
    console.error(error)
  }
})