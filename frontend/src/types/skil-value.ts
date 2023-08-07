import { Database } from 'lib/schema'

import { SnakeToCamel } from './util'

export type SkillValue = SnakeToCamel<Database['public']['Tables']['skill_value']['Row']>

export type InsertSkillValue = SnakeToCamel<Database['public']['Tables']['skill_value']['Insert']>

export type UpdateSkillValue = SnakeToCamel<Database['public']['Tables']['skill_value']['Update']>
