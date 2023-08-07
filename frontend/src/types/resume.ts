import { Database } from 'lib/schema'

import { SnakeToCamel } from './util'

export type Resume = SnakeToCamel<Database['public']['Tables']['resume']['Row']>

export type InsertResume = SnakeToCamel<Database['public']['Tables']['resume']['Insert']>

export type UpdateResume = SnakeToCamel<Database['public']['Tables']['resume']['Update']>
