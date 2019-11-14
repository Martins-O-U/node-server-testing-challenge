const request = require('supertest')
const server = require('./server')

describe('server', () => {
  describe('[GET] / endpoint', () => {

    test('should return 200 OK', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)
    })


    test('with supertest syntax', () => {
      return request(server).get('/')
        .expect(200)
        .expect({ message: 'This is the default zone' })
        .expect('Content-Length', "38")
        .expect('Content-Type', /json/)
    })


    it ("should return 200 http status code on successful get", () => {
      return request(server).get("/api/friends").expect(200);
    })

  })
})

