import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuarios');

  response.json([
    "Felipe",
    "Rodrigo",
    "Trova",
    "Opaaa"
  ]);
})

app.listen(3333);