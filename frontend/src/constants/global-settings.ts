import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { createClient } from '@supabase/supabase-js'
import { QueryClient } from 'react-query'

import { SUPABASE_API_KEY, SUPABASE_PROJECT_URL } from './env'

import type { Theme } from '@mui/material/styles'

/** Supabase client */
export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)

/** React Query client */
export const DEFAULT_CACHE_TIME = 1000 * 60 * 10 // 10 min
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: DEFAULT_CACHE_TIME,
    },
  },
})

/** MUI Global Theme */
export const muiTheme: Theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      body1: {
        fontSize: '20px',
      },
      body2: {
        fontSize: '16px',
      },
    },
    palette: {
      primary: {
        main: '#778899',
      },
      secondary: {
        main: '#ff8c00',
        light: '#f8f8ff',
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
  }),
)
