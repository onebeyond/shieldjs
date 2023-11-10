import { NavBar } from '@/components/NavBar'
import React from 'react'
import { Main, MainWrapper } from '@/layout/MainLayout/MainLayout.styles'
import Footer from '@/components/Footer/Footer'

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainWrapper>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </MainWrapper>
  )
}
