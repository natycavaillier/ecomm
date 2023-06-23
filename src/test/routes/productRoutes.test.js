import {
  afterAll, beforeAll, describe, expect, it,
} from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';

let server;

beforeAll(() => {
  const port = 8081;
  server = app.listen(port);
});

afterAll(() => {
  server.close();
});

describe('GET em /products', () => {
  it('Deve retornar uma lista de produtos', async () => {
    const response = await request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body[0]).toHaveProperty('nome');
  });
});

let createdProductId;

describe('POST em /admin/products', () => {
  it('Deve adicionar um novo produto', async () => {
    const response = await request(app)
      .post('/admin/products')
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 3523,
        estoque: 20,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(201);

    createdProductId = response.body._id;
  });

  it('Deve não adicionar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/admin/products')
      .send({})
      .expect(400);
  });

  it('Deve não adicionar nada ao passar o nome com menos de 3 caracteres', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: 'No',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 3523,
        estoque: 20,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });

  it('Deve não adicionar nada ao passar o nome que inicie com numeros', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: '123Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 3523,
        estoque: 20,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });

  it('Deve não adicionar nada ao passar o slug com caracteres diferentes de letras maiúsculas ou minúsculas, números e hífens', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: '_notebook-samsung',
        preco: 3523,
        estoque: 20,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });

  it('Deve não adicionar nada ao passar o preço como 0', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 0,
        estoque: 20,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });

  it('Deve não adicionar nada ao passar o estoque como 0', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 3523,
        estoque: 0,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });

  it('Deve não adicionar nada ao passar o estoque como maior que 10000', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 11000,
        estoque: 0,
        categoria: {
          _id: '6479fb86a3c8f60968d29b48',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });

  it('Deve não adicionar nada ao passar um id inválido para a categoria', async () => {
    await request(app)
      .post('/admin/products')
      .send({
        nome: 'Notebook Samsung',
        descricao: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        preco: 11000,
        estoque: 0,
        categoria: {
          _id: '123',
          nome: 'INFORMATICA',
          status: 'ATIVA',
        },
      })
      .expect(400);
  });
});

describe('GET em /products/id', () => {
  it('Deve retornar o produto equivalente', async () => {
    await request(app)
      .get(`/products/${createdProductId}`)
      .expect(200);
  });
});

describe('PUT em /admin/products/id', () => {
  it('Deve alterar o campo nome', async () => {
    await request(app)
      .put(`/admin/products/${createdProductId}`)
      .send({ nome: 'Notebook da Samsung' })
      .expect(200);
  });
});

describe('DELETE em /admin/products/id', () => {
  it('Deletar o recurso adicionado', async () => {
    await request(app)
      .delete(`/admin/products/${createdProductId}`)
      .expect(200);
  });
});
