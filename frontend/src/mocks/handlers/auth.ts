/* eslint-disable import/no-relative-parent-imports */
import { getAuthMethodUrl } from 'mocks/utils/util'
import { rest } from 'msw'

import Auth from '../json/auth/Auth.json'

export const authHandlers = [
  rest.post(getAuthMethodUrl('/token'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Auth))
  }),

  rest.post(getAuthMethodUrl('/logout'), (req, res, ctx) => {
    return res(ctx.status(204))
  }),
]
