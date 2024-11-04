const request = require('supertest');
const app = require('./server');

let server;

// Inicia el servidor antes de las pruebas
beforeAll(done => {
    server = app.listen(3000, done);
});

// Cierra el servidor después de las pruebas
afterAll(done => {
    server.close(done);
});

// Prueba para la ruta GET '/'
test('GET /', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, world!' });
});

// Prueba para una ruta inexistente
test('GET /nonexistent', async () => {
    const response = await request(server).get('/nonexistent');
    expect(response.statusCode).toBe(404);
});

// Prueba para la ruta POST '/'
test('POST /', async () => {
    const response = await request(server).post('/');
    expect(response.statusCode).toBe(404); // Asumiendo que no hay una ruta POST definida
});