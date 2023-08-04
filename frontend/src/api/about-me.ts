import { supabase } from 'constants/global-settings'

import { AboutMe } from 'types/about-me'

const TABLE_NAME = 'about_me'

export const getAllAboutMe = async (): Promise<AboutMe[]> => {
  const res = await supabase.from(TABLE_NAME).select('*')
  return res.data as AboutMe[]
}
