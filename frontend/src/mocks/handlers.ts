import { DefaultBodyType, MockedRequest, RestHandler } from 'msw'

import { aboutMeHandlers } from './handlers/about-me'
import { authHandlers } from './handlers/auth'
import { contactHandlers } from './handlers/contact'
import { resumeHandlers } from './handlers/resume'
import { shortMessageHandlers } from './handlers/short-message'
import { skillValueHandlers } from './handlers/skill-value'

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  ...authHandlers,
  ...shortMessageHandlers,
  ...aboutMeHandlers,
  ...resumeHandlers,
  ...skillValueHandlers,
  ...contactHandlers,
]
