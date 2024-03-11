import { createContext, Dispatch, MutableRefObject, SetStateAction, useContext } from 'react';

interface MenuContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
  buttonContainerRef: MutableRefObject<null>
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

export const MenuProvider = MenuContext.Provider

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error(
      'Menu child components must be used within an Menu'
    )
  }
  return context
}
