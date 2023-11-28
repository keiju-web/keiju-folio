import { supabase } from 'constants/global-settings'

import type { Resume } from 'types/resume'

const TABLE_NAME = 'resume'

export const getAllResume = async (): Promise<Resume[]> => {
  const res = await supabase.from(TABLE_NAME).select('*').order('id', { ascending: true })
  return res.data as Resume[]
}
