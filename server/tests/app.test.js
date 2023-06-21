const request = require('supertest');
const { app, closeServer } = require('../app');
const { connectToDb } = require('../db');

describe('User API', () => {
  beforeAll(() => {
    connectToDb();
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Test User',
        email: 'testuser@gmail.com'
        // other user properties you wish to set for the test...
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test User');
    // other assertions...
  });

  it('should get a user by username', async () => {
    const res = await request(app)
      .get('/user/TestUser');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Test User');
    // other assertions...
  });

  // Similar tests for 'patch', 'delete' and 'get' users
});
