import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)

// GET, POST, PUT, PATCH, DELETE

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server listening on port 3333')
  })
