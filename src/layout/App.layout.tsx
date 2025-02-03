import { Header } from '@/modules/core/components/header'
import { Footer } from '@/modules/core/components/footer'
import { Outlet } from 'react-router-dom'
import useAuth from '@/modules/auth/hooks/useAuth'
import { Container } from '@/modules/core/ui/container'

export default function AppLayout() {
  // useAuth()

  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
