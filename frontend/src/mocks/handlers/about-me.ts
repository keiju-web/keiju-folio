/* eslint-disable import/no-relative-parent-imports */
import { getRestMethodUrl } from 'mocks/utils/util'
import { rest } from 'msw'

import AllAboutMe from '../json/about-me/AllAboutMe.json'

export const aboutMeHandlers = [
  rest.get(getRestMethodUrl('/about_me'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(AllAboutMe))
  }),
]
