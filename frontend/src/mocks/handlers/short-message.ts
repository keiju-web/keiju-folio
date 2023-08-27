/* eslint-disable import/no-relative-parent-imports */
import { getRestMethodUrl } from 'mocks/utils/util'
import { rest } from 'msw'

import AllShortMessages from '../json/short-message/AllShortMessages.json'

export const shortMessageHandlers = [
  rest.get(getRestMethodUrl('/short_message'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(AllShortMessages))
  }),
]
