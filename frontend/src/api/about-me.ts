import { supabase } from 'constants/global-settings'

import type { AboutMe } from 'types/about-me'

const TABLE_NAME = 'about_me'

export const getAllAboutMe = async (): Promise<AboutMe[]> => {
  const res = await supabase.from(TABLE_NAME).select('*').order('id', { ascending: true })
  return res.data as AboutMe[]
}
