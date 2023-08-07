import { supabase } from 'constants/global-settings'

import { Resume } from 'types/resume'

const TABLE_NAME = 'resume'

export const getAllResume = async (): Promise<Resume[]> => {
  const res = await supabase.from(TABLE_NAME).select('*')
  return res.data as Resume[]
}
