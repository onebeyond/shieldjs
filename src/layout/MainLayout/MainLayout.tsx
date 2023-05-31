import { NavBar } from '@/components/NavBar'
import React from 'react'
import { StyledWrapper } from '@/layout/MainLayout/MainLayout.styles'
import Footer from '@/components/Footer/Footer'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </StyledWrapper>
  )
}
