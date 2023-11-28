import type { SnakeToCamel } from './util'
import type { Database } from 'lib/schema'

export type Resume = SnakeToCamel<Database['public']['Tables']['resume']['Row']>

export type InsertResume = SnakeToCamel<Database['public']['Tables']['resume']['Insert']>

export type UpdateResume = SnakeToCamel<Database['public']['Tables']['resume']['Update']>
