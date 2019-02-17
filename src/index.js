const grpc = require('grpc');

const NoteProto = grpc.load('src/model/notes.proto');
const NoteController = require('./controller/note.controller')

const server = new grpc.Server()

server.addService(NoteProto.NoteService.service, {
  list: NoteController.list,
  insert: NoteController.insert,
  delete: NoteController.delete,
  update: NoteController.update
});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()
