import { rest } from 'msw'

const LOCAL_URL = 'http://localhost:3000'

export const otherHandlers = [
  rest.get(`${LOCAL_URL}/manifest.json`, (req, res, ctx) => {
    return res(ctx.status(304))
  }),
  rest.get(`${LOCAL_URL}/favicon.ico`, (req, res, ctx) => {
    return res(ctx.status(304))
  }),
  rest.get(`${LOCAL_URL}/logo192.png`, (req, res, ctx) => {
    return res(ctx.status(304))
  }),
  rest.get(`${LOCAL_URL}/logo512.png`, (req, res, ctx) => {
    return res(ctx.status(304))
  }),
]
