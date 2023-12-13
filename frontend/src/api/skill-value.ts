import { supabase } from 'constants/global-settings'

import type { SkillValue } from 'types/api/skil-value'

const TABLE_NAME = 'skill_value'

export const getAllSkillValues = async (): Promise<SkillValue[]> => {
  const res = await supabase.from(TABLE_NAME).select('*').order('id', { ascending: true })
  return res.data as SkillValue[]
}
