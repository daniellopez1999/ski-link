const app = require('../app.js');
const request = require('supertest');

describe('GET ALL /lessons', () => {
  test('should return lessons with 201 status code', async () => {
    const response = await request(app).get('/lessons').send();
    expect(response.status).toBe(201);
  });
});

describe('GET /lessons from an user', () => {
  test('should return lessons with 201 status code', async () => {
    const response = await request(app).get('/lessons/:test123@gmail.com').send();
    expect(response.status).toBe(200);
  });
});

describe('POST /login', () => {
  test('Should return 200, login successfull', async () => {
    const credentialsObj = {
      email: 'test123@gmail.com',
      password: 'test123'
    };
    const response = (await request(app).post('/login/').send(credentialsObj));
    expect(response.status).toBe(200);
  });
});

describe('POST /register', () => {
  test('should return 403, trying to register an existing user', async () => {
    const credentialsObj = {
      email: 'test123@gmail.com',
      password: 'test123'
    };
    const response = (await request(app).post('/register').send(credentialsObj));
    expect(response.status).toBe(403);
  });
});

describe('POST /reviews', () => {
  test('should return 201, post a review', async () => {
    const credentialsObj = {
      name: "esto es un nombre",
      score: 3,
      comment: "esto es un comentario"
    };
    const response = (await request(app).post('/reviews').send(credentialsObj));
    expect(response.status).toBe(201);
  });
});


describe('GET /reviews from an user', () => {
  test('should return lessons with 201 status code', async () => {
    const response = await request(app).get('/reviews').send();
    expect(response.status).toBe(201);
  });
});