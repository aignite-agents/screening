import { useState, useEffect } from 'react'

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowSize({
        width: width,
        height: window.innerHeight,
      })

      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
      setIsDesktop(width >= 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
  }
}

export default useResponsive