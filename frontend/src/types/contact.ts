import type { SnakeToCamel } from './util'
import type { Database } from 'lib/schema'

export type Contact = SnakeToCamel<Database['public']['Tables']['contact']['Row']>

export type InsertContact = SnakeToCamel<Database['public']['Tables']['contact']['Insert']>

export type UpdateContact = SnakeToCamel<Database['public']['Tables']['contact']['Update']>
