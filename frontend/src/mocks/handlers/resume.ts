/* eslint-disable import/no-relative-parent-imports */
import { getRestMethodUrl } from 'mocks/utils/util'
import { rest } from 'msw'

import AllResume from '../json/resume/AllResume.json'

export const resumeHandlers = [
  rest.get(getRestMethodUrl('/resume'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(AllResume))
  }),
]
