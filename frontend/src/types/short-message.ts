import { Database } from 'lib/schema'

import { SnakeToCamel } from './util'

export type ShortMessage = SnakeToCamel<Database['public']['Tables']['short_message']['Row']>

export type InsertShortMessage = SnakeToCamel<
  Database['public']['Tables']['short_message']['Insert']
>

export type UpdateShortMessage = SnakeToCamel<
  Database['public']['Tables']['short_message']['Update']
>
