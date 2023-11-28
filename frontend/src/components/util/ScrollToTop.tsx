import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

import type { FC } from 'react'

/**
 * Address issue of scroll position remaining at SPA transition
 * FYI. https://v5.reactrouter.com/web/guides/scroll-restoration
 * FYI. https://stackoverflow.com/questions/69240281/react-scroll-to-top-not-working-new-solutions-needed
 */

export const SCROLL_TO_TOP_ID = 'main-container'

const ScrollToTop: FC = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // window.scrollTo(0, 0)
    document.getElementById(SCROLL_TO_TOP_ID)?.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
