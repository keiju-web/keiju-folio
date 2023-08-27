/* eslint-disable import/no-relative-parent-imports */
import { getRestMethodUrl } from 'mocks/utils/util'
import { rest } from 'msw'

import PostContact from '../json/contact/PostContact.json'

export const contactHandlers = [
  rest.post(getRestMethodUrl('/contact'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PostContact))
  }),
]
