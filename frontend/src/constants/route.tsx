import { PathRouteProps } from 'react-router-dom'

import Components from 'components/Components'
import Error from 'components/error/Error'
import AboutMe from 'pages/AboutMe'
import Contact from 'pages/Contact'
import Home from 'pages/Home'
import Projects from 'pages/Projects'
import Resume from 'pages/Resume'

type Route = Required<Pick<PathRouteProps, 'path' | 'element'>> & { name?: string }

/**
 * Paging settings
 * If not having name, not be shown on Sidebar.
 **/
export const ROUTES: Route[] = [
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
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
  },
]
