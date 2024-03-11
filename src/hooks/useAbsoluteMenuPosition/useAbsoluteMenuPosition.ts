import { useEffect, useRef, useState } from 'react'

interface useViewportPositionProps {
  triggerElement: HTMLElement
  closeCallback: () => void
  alignment?: 'left' | 'right'
  menuWidth?: number
  menuHeigth?: number
  spacingThreshold?: number
  setTriggerWidth?: boolean
}

const getTransformOrigin = (alignment: 'left' | 'right', setTriggerWidth: boolean, showUpwards: boolean) => {
  if (setTriggerWidth) {
    return showUpwards ? 'center bottom' : 'center top'
  }
  return showUpwards ? (alignment === 'right' ? 'bottom right' : 'bottom left') : (alignment === 'right' ? 'top right' : 'top left')
}

export const useAbsoluteMenuPosition = ({
  triggerElement,
  closeCallback,
  alignment = 'left',
  menuWidth = 242,
  menuHeigth = 270,
  spacingThreshold = 5,
  setTriggerWidth = false
}: useViewportPositionProps) => {
  const [menuClientHeight, setMenuClientHeight] = useState(menuHeigth)
  const menuContainerRef = useRef(null)
  const { x, y, width, height, top } = triggerElement?.getBoundingClientRect() || { x: 0, y: 0 }
  const xAxis = alignment === 'right' ? x + width - menuWidth : x
  const yAxis = y + height + spacingThreshold
  let viewportHeight = 0
  if (typeof window !== 'undefined') {
    viewportHeight = window.innerHeight
  } else if (typeof document !== 'undefined') {
    viewportHeight = document.documentElement.clientHeight
  }
  const spaceBelowTrigger = viewportHeight - (top + height)
  const positionStyle = {
    transformOrigin: getTransformOrigin(alignment, setTriggerWidth, false),
    maxWidth: `${setTriggerWidth ? width : menuWidth}px`,
    top: `${yAxis}px`,
    left: `${xAxis}px`,
    bottom: 'auto',
    opacity: 0,
    willChange: 'transform, opacity'
  }
  if (spaceBelowTrigger < menuClientHeight) {
    positionStyle.top = 'auto'
    positionStyle.bottom = `${viewportHeight - y + spacingThreshold}px`
    positionStyle.transformOrigin = getTransformOrigin(alignment, setTriggerWidth, true)
  }
  useEffect(() => {
    const menuContainer = menuContainerRef.current as unknown as HTMLElement
    setMenuClientHeight(menuContainer?.clientHeight || 0)
    const handleResize = () => {
      closeCallback()
    }
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.id !== 'scrollable-menu') {
        closeCallback()
      }
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [closeCallback])
  return {
    positionStyle,
    menuContainerRef
  }
}
