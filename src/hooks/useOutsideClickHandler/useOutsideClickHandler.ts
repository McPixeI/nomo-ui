import React from 'react'

export const useOutsideClickHandler = <T extends HTMLElement>(ref: React.RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void, excludedElements: string[] = []) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const excluded = excludedElements.map((id) => document.getElementById(id))
      const excludedContainsTarget = excluded.some((element) => element?.contains(event.target as Node))
      if (!ref.current || ref.current.contains(event.target as Node) || excludedContainsTarget) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler])
}
