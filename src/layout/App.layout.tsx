// import { $UserRole } from '@/modules/auth/enum'
import { Footer } from '@/modules/core/components/footer'
import { Header } from '@/modules/core/components/header'
import { ProtectedRoute } from '@/modules/core/context/ProtectedRoute.provider'
import { Container } from '@/modules/core/ui/container'
import { Link } from '@/modules/core/ui/link'
import { Pathnames } from '@/routes'
import type { UserRole } from '@/types'
import { Outlet } from 'react-router-dom'

const Common = () => {
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
export default function AppLayout(
  { rolesAllowed, redirect, validate }: { rolesAllowed?: UserRole[]; redirect?: string; validate?: boolean } = {
    redirect: Pathnames.auth.logIn,
    validate: true,
  }
) {
  if (validate === false) {
    return <Common />
  }

  if (validate && rolesAllowed) {
    return (
      <ProtectedRoute redirect={redirect} rolesAllowed={rolesAllowed}>
        <Common />
      </ProtectedRoute>
    )
  }

  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8 text-center grid place-content-center">
        <div className="flex flex-col gap-2">
          <p>No tiene permisos para acceder a la ruta.</p>
          <Link variant="outline" href={redirect}>
            iniciar sesión
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  )
}
