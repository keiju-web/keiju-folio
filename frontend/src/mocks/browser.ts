import { setupWorker } from 'msw'

import { handlers } from './handlers'

import type { SetupWorker } from 'msw'

export const worker: SetupWorker = setupWorker(...handlers)
