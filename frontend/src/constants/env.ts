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
export const ENGLISH_CV = `${PUBLIC_URL}/cv/english-cv.txt`
export const JAPANESE_CV = `${PUBLIC_URL}/cv/japanese-cv.txt`
