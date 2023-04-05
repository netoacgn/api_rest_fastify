import fastify from 'fastify'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', () => {
  return 'Hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server listening on port 3333')
  })
