import type { SnakeToCamel } from '../util'
import type { Database } from 'lib/schema'

export type ShortMessage = SnakeToCamel<Database['public']['Tables']['short_message']['Row']>

export type InsertShortMessage = SnakeToCamel<
  Database['public']['Tables']['short_message']['Insert']
>

export type UpdateShortMessage = SnakeToCamel<
  Database['public']['Tables']['short_message']['Update']
>
