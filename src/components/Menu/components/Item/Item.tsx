import type { ComponentProps, ReactNode } from 'react'

import { NomoIcon } from '@components/NomoIcon'
import clsx from 'clsx'

interface Props {
  iconName?: ComponentProps<typeof NomoIcon>['name']
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: ReactNode | string
  selected?: boolean
  disabled?: boolean
}

export const Item = ({
  iconName,
  onClick,
  children,
  selected = false,
  disabled = false,
}: Props) => {
  const buttonClasses = clsx(
    'relative w-full h-[52px] min-h-[52px] flex items-center text-black hover:text-greyDarker',
    {
      'after:content-[""] after:block after:w-[4px] after:h-[100%] after:bg-black after:left-[-16px] after:bottom-0 after:top-0 after:absolute':
        !!selected
    },
    {
      'text-gray-400 hover:text-gray-400 cursor-not-allowed': disabled
    }
  )

  return (
    <button type="button" onClick={onClick} className={buttonClasses} disabled={disabled}>
      {iconName && <NomoIcon name={iconName} className="text-xl mr-2.5" />}
      <span className="h-full border-b border-greyLight flex items-center justify-start flex-1 text-button-s uppercase">
        {children}
      </span>
    </button>
  )
}
