import { Hero } from '@/components/Hero'
import { Technologies } from '@/components/Technologies'
import { MainLayout } from '@/layout/MainLayout/MainLayout'
import { Tutorial } from '@/components/Tutorial/Tutorial'

export const Home = () => {
  return (
          <MainLayout>
            <Hero />
            <Technologies/>
            <Tutorial/>
          </MainLayout>
  )
}
