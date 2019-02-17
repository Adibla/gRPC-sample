const client = require('./client')

client.list({}, (error, notes) => {
  if (!error) {
    console.log('SUCCESFULLY LIST NOTES => ', JSON.stringify(notes, null, 2));
  } else {
    console.error(error)
  }
})