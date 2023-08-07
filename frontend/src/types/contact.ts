import { Database } from 'lib/schema'

import { SnakeToCamel } from './util'

export type Contact = SnakeToCamel<Database['public']['Tables']['contact']['Row']>

export type InsertContact = SnakeToCamel<Database['public']['Tables']['contact']['Insert']>

export type UpdateContact = SnakeToCamel<Database['public']['Tables']['contact']['Update']>
