import { SignUpSchema } from '@/modules/auth/schemas'
import { signUp } from '@/modules/auth/services'
import type { SignUp } from '@/modules/auth/types'
import { Button } from '@/modules/core/ui/button'
import { Input } from '@/modules/core/ui/input'
import { Pathnames } from '@/routes'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function SignUpForm() {
  const mutation = useMutation({ mutationFn: signUp })
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      fullName: '',
    } as SignUp,
    validationSchema: SignUpSchema,
    onSubmit: async ({ email, password, fullName }) => {
      const result = await mutation.mutateAsync({
        email,
        password,
        fullName,
      })

      if (result.success) {
        toast.success(result.message)
        navigate(Pathnames.auth.logIn)
      } else toast.error(result.message)
    },
  })

  return (
    <main className="">
      <div className="mb-4 flex gap-1 items-center">
        <span className="text-xl font-semibold text-center">Crear cuenta</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input fullName */}
        <label className="flex flex-col gap-1" htmlFor="fullName">
          <span>Nombre y Apellido</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            name="fullName"
            placeholder="Nombre y Apellido"
            type="text"
            required
          />
          {formik.touched.fullName && <span className="border-primary text-primary">{formik.errors.fullName}</span>}
        </label>
        {/* Input fullName */}

        {/* Input username */}
        <label className="flex flex-col gap-1" htmlFor="email">
          <span>Correo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="email@example.com"
            type="email"
            required
          />
          {formik.touched.email && <span className="border-primary text-primary">{formik.errors.email}</span>}
        </label>
        {/* Input username */}

        {/* Input Password */}
        <label className="flex flex-col gap-1" htmlFor="password">
          <span>Contraseña</span>
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
        {/* Input Password */}
        <div className="flex gap-1">
          <p>¿Ya tienes una cuenta?</p>
          <Link className="underline" to={Pathnames.auth.logIn}>
            Iniciar sesión
          </Link>
        </div>

        <Button loading={mutation.isPending} type="submit" className="w-full">
          Registrarse
        </Button>
      </form>
    </main>
  )
}

export default SignUpForm
