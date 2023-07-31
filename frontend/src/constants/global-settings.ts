import { createTheme } from '@mui/material/styles'
import { createClient } from '@supabase/supabase-js'
import { QueryClient } from 'react-query'

import { SUPABASE_API_KEY, SUPABASE_PROJECT_URL } from './env'

/** Supabase client */
export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)

/** React Query client */
export const DEFAULT_CACHE_TIME = 1000 * 60 * 5 // 5min
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: DEFAULT_CACHE_TIME,
    },
  },
})

/** MUI Global Theme */
export const muiTheme = createTheme({
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  palette: {
    primary: {
      main: '#778899',
    },
    secondary: {
      main: '#ff8c00',
    },
    text: {
      primary: '#000',
      secondary: '#dcdcdc',
    },
    background: {
      default: '#dcdcdc',
      paper: '#dcdcdc',
    },
    // error: {
    //   main: '#',
    // },
    // warning: {
    //   main: '#',
    // },
    // info: {
    //   main: '#',
    // },
    // success: {
    //   main: '#',
    // },
  },
})
