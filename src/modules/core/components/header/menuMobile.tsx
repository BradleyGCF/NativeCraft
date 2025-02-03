import { Popover, PopoverContent, PopoverTrigger } from '@/modules/core/ui/popover'
import { Pathnames } from '@/routes'
import { useSession } from '@/store'
import { LuMenu } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { $SessionStatus } from '../../enum'
import { Logout } from '../../icons'
import { cn } from '../../utils'
import { Avatar } from '../avatar'
import { NavLinks } from './links'
export const MenuMobile = () => {
  const { session, signOut, status } = useSession()

  return (
    <Popover>
      <PopoverTrigger className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700">
        <LuMenu className="size-4" />
      </PopoverTrigger>
      <PopoverContent className="w-60 flex flex-col bg-white text-black">
        <div className="flex flex-col gap-y-4">
          {status === $SessionStatus.AUTHENTICATED && session && (
            <Link to={Pathnames.user.profile} className="flex justify-center font-semibold">
              <Avatar src={session?.avatar} alt={session?.email || 'U'} />
            </Link>
          )}

          {NavLinks.map((link) => (
            <Link
              key={link.label}
              className={cn(
                'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500',
                location.pathname.includes(link.href) ? 'text-blue-600 sm:py-6 dark:text-blue-500' : ''
              )}
              to={link.href}
            >
              {link.label}
            </Link>
          ))}

          {status === $SessionStatus.UNAUTHENTICATED ? (
            <Link to={Pathnames.auth.logIn} className="flex justify-center font-semibold">
              Iniciar sesión
            </Link>
          ) : (
            <button
              onClick={signOut}
              type="button"
              className="flex items-center justify-center gap-2 text-white bg-red-400 hover:bg-white border border-white hover:text-red-400 hover:border-red-400 duration-200 w-full py-1 px-3 rounded text-center"
            >
              <span>Cerrar sesión</span>
              <Logout />
            </button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
