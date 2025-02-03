import { Person } from '@/modules/core/icons'
import { Card } from '@/modules/core/ui/card'
import { Skeleton } from '@/modules/core/ui/skeleton'
import type { User } from '@/types'

export const CardUserSkeleton = () => {
  return (
    <Card as="li" className="h-96 flex flex-col justify-between relative overflow-hidden p-0">
      <div className="w-full h-full grid place-content-center">
        <Person className="w-40 h-40" />
      </div>
      <div />
      <div className="flex flex-col gap-1 backdrop-blur-[2px] p-4 bg-neutral-200/10 border-t">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-1/2 h-full" />
      </div>
    </Card>
  )
}

export const CardUser = ({ fullName, username, avatar }: Pick<User, 'fullName' | 'username' | 'avatar'>) => {
  return (
    <Card as="li" className="flex flex-col overflow-hidden p-0">
      <picture className="h-64 flex">
        <img src={avatar} alt={username} className="object-cover w-full h-full" />
      </picture>
      <div className="flex flex-col gap-1 backdrop-blur-[2px] p-4 bg-white/80 border-t h-full">
        <h2 className="font-semibold text-lg">{fullName}</h2>
        <span className="text-green-500">{username}</span>
      </div>
    </Card>
  )
}
