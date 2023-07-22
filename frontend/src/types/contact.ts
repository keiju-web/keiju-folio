import { Database } from 'lib/schema'

export type Contact = Database['public']['Tables']['contact']['Row']

export type InsertContact = Database['public']['Tables']['contact']['Insert']

export type UpdateContact = Database['public']['Tables']['contact']['Update']
