/* eslint-disable import/no-relative-parent-imports */
import { getMethodUrl } from 'mocks/utils/constant'
import { rest } from 'msw'

import Auth from '../json/auth/Auth.json'

export const authHandlers = [
  rest.post(getMethodUrl('/auth/v1/token'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Auth))
  }),

  rest.post(getMethodUrl('/auth/v1/logout'), (req, res, ctx) => {
    return res(ctx.status(204))
  }),
]
