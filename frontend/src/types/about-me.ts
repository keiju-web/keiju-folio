import type { SnakeToCamel } from './util'
import type { Database } from 'lib/schema'

export type AboutMe = SnakeToCamel<Database['public']['Tables']['about_me']['Row']>

export type InsertAboutMe = SnakeToCamel<Database['public']['Tables']['about_me']['Insert']>

export type UpdateAboutMe = SnakeToCamel<Database['public']['Tables']['about_me']['Update']>
