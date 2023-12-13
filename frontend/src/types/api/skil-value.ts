import type { SnakeToCamel } from '../util'
import type { Database } from 'lib/schema'

export type SkillValue = SnakeToCamel<Database['public']['Tables']['skill_value']['Row']>

export type InsertSkillValue = SnakeToCamel<Database['public']['Tables']['skill_value']['Insert']>

export type UpdateSkillValue = SnakeToCamel<Database['public']['Tables']['skill_value']['Update']>
