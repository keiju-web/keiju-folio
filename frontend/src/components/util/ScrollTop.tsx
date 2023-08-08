import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Address issue of scroll position remaining at SPA transition
 */
const ScrollTop: FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollTop
