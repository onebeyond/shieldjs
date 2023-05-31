import { NavBar } from '@/components/NavBar'
import React from 'react'
import { MainWrapper } from '@/layout/MainLayout/MainLayout.styles'
import Footer from '@/components/Footer/Footer'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </MainWrapper>
  )
}
