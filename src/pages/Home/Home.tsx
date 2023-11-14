import { Hero } from '@/components/Hero'
import { ReadMore } from '@/components/ReadMore'
import { Technologies } from '@/components/Technologies'
import { MainLayout } from '@/layout/MainLayout/MainLayout'
import { Tutorial } from '@/components/Tutorial/Tutorial'

export const Home = () => {
  return (
          <MainLayout>
            <Hero />
            <Technologies/>
            <Tutorial/>
            <ReadMore />
          </MainLayout>
  )
}
