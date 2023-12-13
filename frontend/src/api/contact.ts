import { supabase } from 'constants/global-settings'

import type { Contact, InsertContact } from 'types/api/contact'

const TABLE_NAME = 'contact'

export const getAllContacts = async (): Promise<Contact[]> => {
  const res = await supabase.from(TABLE_NAME).select('*').order('id', { ascending: true })
  return res.data as Contact[]
}

export const addContacts = async (req: InsertContact[]): Promise<Contact[]> => {
  const res = await supabase.from(TABLE_NAME).insert(req).select()
  return res.data as Contact[]
}
