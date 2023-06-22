import {
  afterEach, beforeEach, describe, expect, it,
} from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';

let server;

beforeEach(() => {
  const port = 8080;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /categories', () => {
  it('Deve retornar uma lista de categorias', async () => {
    const response = await request(app)
      .get('/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body[0]).toHaveProperty('nome');
  });
});

let createdCategoryId;

describe('POST em /admin/categories', () => {
  it('Deve adicionar uma nova categoria', async () => {
    const response = await request(app)
      .post('/admin/categories')
      .send({
        nome: 'ELETRONICOS',
        status: 'ATIVA',
      })
      .expect(201);

    createdCategoryId = response.body._id;
  });

  it('Deve não adicionar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/admin/categories')
      .send({})
      .expect(400);
  });
});

describe('GET em /categories/id', () => {
  it('Deve retornar a categoria equivalente', async () => {
    await request(app)
      .get(`/categories/${createdCategoryId}`)
      .expect(200);
  });
});
