import { useState, useEffect } from 'react'

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const navbar = document.querySelector('.navbar-closed')
    if (navbar) {
      const updateHeight = () => {
        const height = navbar.getBoundingClientRect().height
        setHeaderHeight(height)
      }
      
      updateHeight()
      window.addEventListener('resize', updateHeight)
      return () => window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return headerHeight
}