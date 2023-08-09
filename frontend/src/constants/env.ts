/** Supabse settings */
export const SUPABASE_PROJECT_URL = process.env.REACT_APP_SUPABSE_URL as string
export const SUPABASE_API_KEY = process.env.REACT_APP_SUPABSE_API_KEY as string

/** public folder */
const PUBLIC_URL = process.env.PUBLIC_URL
export const LOADING_IMG_SRC = `${PUBLIC_URL}/images/loading.svg`
export const PACMAN_IMG_SRC = `${PUBLIC_URL}/images/pacman.svg`
export const PROFILE_IMG_SRC = `${PUBLIC_URL}/images/profile-pic.png`
export const CONTACT_US_IMG_SRC = `${PUBLIC_URL}/images/contact-us.gif`
export const ABOUT_ME_IMG_SRC = `${PUBLIC_URL}/images/about-me.gif`
export const DOP_IMG_SRC = `${PUBLIC_URL}/images/DOP.png`
export const DVA_IMG_SRC = `${PUBLIC_URL}/images/DVA.png`
export const CV_EN = `${PUBLIC_URL}/cv/cv_en.zip`
export const CV_JP = `${PUBLIC_URL}/cv/cv_jp.zip`

/** External URL */
export const REPOSITORY_URL = process.env.REACT_APP_REPOSITORY_URL as string
