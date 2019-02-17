const uuidv1 = require('uuid');

const notes = [
  { id: '1', title: 'Note 1', content: 'Content 1'},
  { id: '2', title: 'Note 2', content: 'Content 2'}
]

module.exports = {
  list: (_, callback) => {
    callback(null, notes);
  },

  insert: (call, callback) => {
    let note = call.request
    note.id = uuidv1()
    notes.push(note)
    callback(null, note)
  },

  delete: (call, callback) => {
    let existingNoteIndex = notes.findIndex((n) => n.id == call.request.id)
    if (existingNoteIndex != -1) {
      let existingNote = notes.filter(note => note.id === call.request.id)[0]
      notes.splice(existingNoteIndex, 1);
      callback(null, existingNote)
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      })
    }
  },

  update: (call, callback) => {
    let existingNoteIndex = notes.findIndex((n) => n.id == call.request.id)
    if (existingNoteIndex != -1) {
      notes[existingNoteIndex].title = call.request.title;
      notes[existingNoteIndex].content = call.request.content

      callback(null, notes[existingNoteIndex])
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      })
    }
  }
}