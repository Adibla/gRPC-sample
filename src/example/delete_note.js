const client = require('../client')

client.delete({id: '1'}, (error, note) => {
  if (!error) {
    console.log('SUCCESFULLY DELETE NODE => ', note)
  } else {
    console.error(error)
  }
})