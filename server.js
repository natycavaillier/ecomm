import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';
import app from './src/app.js';

const file = fs.readFileSync('./swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
