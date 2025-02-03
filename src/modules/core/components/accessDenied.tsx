import { Pathnames } from '@/routes'
import { Card } from '../ui/card'
import { Link } from '../ui/link'

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <Card className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">403</h1>
        <h2 className="text-2xl font-semibold mb-2">Permiso denegado</h2>
        <p className="text-gray-600 mb-6">No tienes permiso para acceder a este recurso.</p>
        <Link href={Pathnames.home} variant="default">
          Volver al inicio
        </Link>
      </Card>
    </div>
  )
}

export default AccessDenied
