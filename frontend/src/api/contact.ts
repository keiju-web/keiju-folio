import { supabase } from 'constants/global-settings'

import { Contact, InsertContact } from 'types/contact'

const TABLE_NAME = 'contact'

export const getAllContacts = async (): Promise<Contact[]> => {
  const res = await supabase.from(TABLE_NAME).select('*')
  return res.data as Contact[]
}

export const addContacts = async (req: InsertContact[]): Promise<Contact[]> => {
  const res = await supabase.from(TABLE_NAME).insert(req).select()
  return res.data as Contact[]
}
