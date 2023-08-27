/* eslint-disable import/no-relative-parent-imports */
import { getRestMethodUrl } from 'mocks/utils/util'
import { rest } from 'msw'

import AllSkillValues from '../json/skill-value/AllSkillValues.json'

export const skillValueHandlers = [
  rest.get(getRestMethodUrl('/skill_value'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(AllSkillValues))
  }),
]
