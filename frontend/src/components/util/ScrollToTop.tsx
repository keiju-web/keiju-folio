import { FC, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Address issue of scroll position remaining at SPA transition
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
