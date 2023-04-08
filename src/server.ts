import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .where('amount', 100)


  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server listening on port 3333')
  })
