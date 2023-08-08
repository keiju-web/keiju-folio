import { supabase } from 'constants/global-settings'

import { ShortMessage } from 'types/short-message'

const TABLE_NAME = 'short_message'

export const getAllShortMessages = async (): Promise<ShortMessage[]> => {
  const res = await supabase.from(TABLE_NAME).select('*').order('id', { ascending: true })
  return res.data as ShortMessage[]
}
