import { Error } from 'components'
// eslint-disable-next-line no-restricted-imports
import Components from 'components/Components'
import AboutMe from 'pages/about-me/AboutMe'
import Contact from 'pages/contact/Contact'
import Home from 'pages/home/Home'
import Projects from 'pages/projects/Projects'
import Resume from 'pages/resume/Resume'

import type { BoxProps } from '@mui/material'
import type { PathRouteProps } from 'react-router-dom'

type RouteName = 'Home' | 'About Me' | 'Resume' | 'Projects' | 'Contact'

export type Route = Readonly<
  Required<Pick<PathRouteProps, 'path' | 'element'>> & {
    name?: RouteName
    isComingSoon?: boolean
    bgColor?: BoxProps['bgcolor']
  }
>

/**
 * Page settings
 * If not having name, not be shown on Sidebar.
 **/
export const ROUTES: readonly Route[] = [
  {
    path: '/*',
    element: <Error />,
  },
  {
    path: '/com',
    element: <Components />,
  },
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/about-me',
    name: 'About Me',
    bgColor: '#ffebcd',
    element: <AboutMe />,
  },
  {
    path: '/resume',
    name: 'Resume',
    element: <Resume />,
  },
  {
    path: '/projects',
    name: 'Projects',
    element: <Projects />,
    isComingSoon: true,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
  },
] as const

/**
 * Generated paths
 * ex. {Contact: '/contact'}
 */
export const ROUTE_PATH: Record<RouteName, string> = ROUTES.reduce((acc, route) => {
  if (route.name) {
    return { ...acc, [route.name]: route.path }
  }
  return acc
}, {} as Record<RouteName, string>)
