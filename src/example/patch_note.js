const client = require('./client')

let new_note = {
    id: '1',
    title: "New patched Note",
    content: "New patched Content"
}

client.update(new_note, (error, note) => {
  if (!error) {
    console.log('successfully fetch List notes')
    console.log(note)
  } else {
    console.error(error)
  }
})