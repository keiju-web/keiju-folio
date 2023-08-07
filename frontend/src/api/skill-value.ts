import { supabase } from 'constants/global-settings'

import { SkillValue } from 'types/skil-value'

const TABLE_NAME = 'skill_value'

export const getAllSkillValues = async (): Promise<SkillValue[]> => {
  const res = await supabase.from(TABLE_NAME).select('*')
  return res.data as SkillValue[]
}
