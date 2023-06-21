import app from './src/app.js';

const port = 8080;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
