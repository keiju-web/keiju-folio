import { authHandlers } from './handlers/auth'
import { otherHandlers } from './handlers/others'

export const handlers = [...otherHandlers, ...authHandlers]
