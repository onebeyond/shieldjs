import { Hero } from '@/components/Hero'
import { Technologies } from '@/components/Technologies'
import { MainLayout } from '@/layout/MainLayout/MainLayout'

export const Home = () => {
  return (
          <MainLayout>
            <Hero />
            <Technologies/>
          </MainLayout>
  )
}
