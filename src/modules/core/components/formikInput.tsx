import { Textarea } from '@/modules/core/ui/textarea'
// import type { SelectOptions } from '@/modules/auth/types'
// import type { SelectProps } from '@radix-ui/react-select'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { Input } from '../ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface FormTextInputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  icon?: React.ReactNode
}

interface FormTextareaInputElementProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
  icon?: React.ReactNode
}

export const TextInput = ({
  label,
  error,
  onBlur,
  value,
  onChange,
  name,
  children,
  icon,
  ...props
}: FormTextInputElementProps) => {
  if (icon)
    return (
      <label className="flex flex-col gap-0.5">
        {label && <span className="inline-block font-semibold">{label}</span>}
        {!label && children}
        <div className="flex gap-2 items-center border border-primary-purple rounded-md px-3 py-2">
          {icon}
          <input {...props} className="focus:outline-none" onChange={onChange} value={value} onBlur={onBlur} name={name} />
        </div>
        {error && <span className="text-primary">{error}</span>}
      </label>
    )
  return (
    <label className="flex flex-col gap-0.5" htmlFor={name}>
      {label && <span className="inline-block font-semibold">{label}</span>}
      {!label && children}
      <Input {...props} onChange={onChange} value={value} onBlur={onBlur} name={name} />
      {error && <span className="text-primary">{error}</span>}
    </label>
  )
}

export const TextareaInput = ({
  label,
  error,
  onBlur,
  value,
  onChange,
  name,
  children,
  icon,
  ...props
}: FormTextareaInputElementProps) => {
  if (icon)
    return (
      <label className="flex flex-col gap-0.5" htmlFor={name}>
        {label && <span className="inline-block font-semibold">{label}</span>}
        {!label && children}
        <div className="flex gap-2 items-center border border-primary-purple rounded-md px-3 py-2">
          {icon}
          <Textarea {...props} className="focus:outline-none" onChange={onChange} value={value} onBlur={onBlur} name={name} />
        </div>
        {error && <span className="text-primary">{error}</span>}
      </label>
    )
  return (
    <label className="flex flex-col gap-0.5" htmlFor={name}>
      {label && <span className="inline-block font-semibold">{label}</span>}
      {!label && children}
      <Textarea {...props} onChange={onChange} value={value} onBlur={onBlur} name={name} />
      {error && <span className="text-primary">{error}</span>}
    </label>
  )
}

// interface SelectInputProps extends SelectProps {
//   error?: string
//   label?: string
//   children?: React.ReactNode
//   placeholder?: string
//   id?: string
//   data: {
//     options: SelectOptions[]
//   }
// }

// export const SelectInput = ({ error, children, data, placeholder, ...props }: SelectInputProps) => {
//   return (
//     <Select {...props}>
//       <SelectTrigger>
//         <SelectValue placeholder={placeholder || 'Selecciona una opción'} />
//       </SelectTrigger>
//       <SelectContent>
//         {data.options.map(({ label, value }) => (
//           <SelectItem key={value} value={value}>
//             {label}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   )
// }
