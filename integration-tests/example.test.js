const request = require('supertest');
const app = require('../app'); // Pastikan app Anda sesuai dengan aplikasi Express atau yang Anda gunakan

describe('Integration Test Example', () => {
  it('should respond with Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
