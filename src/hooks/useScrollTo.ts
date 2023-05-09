import { useEffect } from 'react'

export const useScrollTo = (x: number, y: number) => {
  useEffect(() => {
    window.scrollTo(x, y)
  }, [x, y])
}
