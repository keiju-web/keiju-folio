import { Database } from 'lib/schema'

export type AboutMe = Database['public']['Tables']['about_me']['Row']

export type InsertAboutMe = Database['public']['Tables']['about_me']['Insert']

export type UpdateAboutMe = Database['public']['Tables']['about_me']['Update']
