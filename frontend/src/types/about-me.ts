import { Database } from 'lib/schema'

import { SnakeToCamel } from './util'

export type AboutMe = SnakeToCamel<Database['public']['Tables']['about_me']['Row']>

export type InsertAboutMe = SnakeToCamel<Database['public']['Tables']['about_me']['Insert']>

export type UpdateAboutMe = SnakeToCamel<Database['public']['Tables']['about_me']['Update']>
