import { NavBar } from '@/components/NavBar'
import React from 'react'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
    <NavBar />
      <main>{children}</main>
    </>
  )
}
