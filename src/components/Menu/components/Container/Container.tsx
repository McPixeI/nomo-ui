import type { ReactNode } from 'react'
import React, { useCallback, useRef, useState } from 'react'

import clsx from 'clsx'
import { createPortal } from 'react-dom'

import { MenuProvider, useMenuContext } from '@components/Menu/Menu.context'
import { useAbsoluteMenuPosition, useOutsideClickHandler } from '@hooks'

type Alignment = 'left' | 'right' | undefined
interface ContentProps {
  children: ReactNode
  alignment?: Alignment
}
interface ContainerProps {
  children: ReactNode | ReactNode[]
}
interface ScrollContentProps {
  children: ReactNode | ReactNode[]
}
interface MenuButtonProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
}

export const Content = ({ children, alignment = 'right' }: ContentProps) => {
  const { isOpen, buttonContainerRef, setIsOpen } = useMenuContext()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeDropdown = useCallback(() => setIsOpen(false), [])
  const buttonContainer = (buttonContainerRef.current || null) as unknown as HTMLElement
  const { menuContainerRef, positionStyle } = useAbsoluteMenuPosition({
    triggerElement: buttonContainer,
    alignment,
    closeCallback: closeDropdown
  })
  const classes = clsx(
    'absolute flex flex-col border border-greyLight rounded-lg min-w-[242px] bg-white z-10 max-h-[270px] transform-all animate-showMenu'
  )

  useOutsideClickHandler(menuContainerRef, closeDropdown)

  return isOpen
    ? createPortal(
      <div ref={menuContainerRef} style={positionStyle} className={classes}>
        {children}
      </div>,
      document.body
    )
    : null
}

export const ScrollContent = ({ children }: ScrollContentProps) => {
  return (
    <div id="scrollable-menu" className="overflow-scroll px-4">
      {children}
    </div>
  )
}

export const MenuButton = <T extends React.ElementType = 'button'>({
  as,
  ...props
}: MenuButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof MenuButtonProps<T>>) => {
  const { isOpen, setIsOpen } = useMenuContext()
  const Component = as || 'button'
  return (
    <Component
      onClick={e => {
        if (!props.disabled) {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }
      }}
      {...props}
    />
  )
}

export const Container = ({ children }: ContainerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonContainerRef = useRef(null)

  return (
    <MenuProvider value={{ isOpen, setIsOpen, buttonContainerRef }}>
      <div className="relative" ref={buttonContainerRef}>
        {children}
      </div>
    </MenuProvider>
  )
}
