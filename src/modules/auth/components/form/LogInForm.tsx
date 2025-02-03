import { LogInSchema } from '@/modules/auth/schemas'
import { logIn } from '@/modules/auth/services'
import type { LogIn } from '@/modules/auth/types'
import { $SessionStatus } from '@/modules/core/enum'
import { Button } from '@/modules/core/ui/button'
import { Input } from '@/modules/core/ui/input'
import { Pathnames } from '@/routes'
import { useSession } from '@/store'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function LogInForm() {
  const logInMutation = useMutation({ mutationFn: logIn })
  const navigate = useNavigate()
  const { setSessionStatus, setSessionToken, setSession } = useSession()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    } as LogIn,
    validationSchema: LogInSchema,
    onSubmit: async ({ email, password, rememberMe }) => {
      const result = await logInMutation.mutateAsync({
        email,
        password,
      })

      if (result?.success && result.data) {
        setSessionToken(result.data?.sessionToken, { rememberMe })
        setSession(result.data)
        setSessionStatus($SessionStatus.AUTHENTICATED)
        navigate(Pathnames.home, { replace: true })
      }
      if (!result?.success) toast.error(result.message)
    },
  })

  return (
    <main>
      <div className="mb-4 flex gap-1 items-center">
        <span className="text-xl font-semibold text-center">Iniciar sesión</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input Email */}
        <label className="flex flex-col gap-1" htmlFor="email">
          <span>Correo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="email@gmail.com"
            type="email"
            required
          />
          {formik.touched.email && <span className="border-primary text-primary">{formik.errors.email}</span>}
        </label>
        {/* Input Email */}

        {/* Input Password */}
        <label className="flex flex-col gap-1" htmlFor="password">
          <span>Password</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
            placeholder="****************"
            type="password"
            required
          />
          {formik.touched.password && <span className="border-primary text-primary">{formik.errors.password}</span>}
        </label>

        <div className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            name="rememberMe"
            className="cursor-pointer"
            onChange={formik.handleChange}
            checked={formik.values.rememberMe}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="remember" className="text-xs text-white sm:text-neutral-800">
            <span className="text-xs font-bold text-white sm:text-neutral-800">Recuérdate</span>
          </label>
        </div>
        {/* Input Password */}
        <div className="flex gap-1">
          <p>¿No tienes una cuenta?</p>
          <Link className="underline" to={Pathnames.auth.signUp}>
            Crear cuenta
          </Link>
        </div>

        <Button loading={logInMutation.isPending} type="submit" className="w-full">
          Ingresar
        </Button>
      </form>
    </main>
  )
}
