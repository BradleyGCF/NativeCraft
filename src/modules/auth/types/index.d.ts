import type { LogInSchema, SignUpSchema } from '@/modules/auth/schemas'
import type { InferType } from 'yup'

export type LogIn = InferType<typeof LogInSchema>

export type SignUp = InferType<typeof SignUpSchema>
