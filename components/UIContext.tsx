"use client"
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useMemo } from 'react';

// Define the context type
type NavbarContextType = [boolean, Dispatch<SetStateAction<boolean>>];

// Create the context
const NavbarContext = createContext<NavbarContextType | null>(null);

// Create the provider
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const navbarState = useState<boolean>(false); // [navbarOpen, setNavbarOpen]
  console.log('modal probs closed here')
  const value = useMemo(() => navbarState, [navbarState]);
  
  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
};

// Create the custom hook
export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
