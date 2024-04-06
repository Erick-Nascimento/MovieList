import { useEffect } from 'react'

export const useClickOutsideListener = (elementRef, openerRef, setState) => {
  const closeOpenMenu = (e) => {
    const targetNode = e.target
    if (openerRef?.current?.contains(targetNode)) {
      return
    }
    if (elementRef.current && !elementRef.current.contains(targetNode)) {
      setState(false)
    }
  }

  useEffect(() => {
    if (typeof document === 'undefined') return
    const handleMouseDown = (e) => {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        closeOpenMenu(e)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef])
}
