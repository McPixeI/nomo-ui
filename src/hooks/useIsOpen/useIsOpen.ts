import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export const useIsOpen = (initState:boolean = false): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [isOpen, setIsOpen] = useState<boolean>(initState)
  const toggleIsOpen = useCallback(() => setIsOpen(isOpen => !isOpen), [])

  return [isOpen, toggleIsOpen, setIsOpen]
}
