import { ErrorMessage } from '@/modules/core/components/error'
import { PaginationComponent as Pagination } from '@/modules/core/components/pagination'
import { $QueryKey } from '@/modules/core/enum'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getAllUsers } from '../services'
import { CardUser, CardUserSkeleton } from './card'

function UserList() {
  const { search } = useLocation()
  const query = Object.fromEntries(new URLSearchParams(search))
  const {
    data: users,
    error,
    isFetching,
    isError,
  } = useQuery({
    queryKey: [$QueryKey.users, query.page],
    queryFn: () => getAllUsers({ q: query.q, page: Number(query.page) }),
    placeholderData: keepPreviousData, // Keep previous data if the queryFn is still fetching
  })

  if (isError) return <ErrorMessage message={error.message} />

  return (
    <>
      <ul className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-5">
        {isFetching && Array.from({ length: 8 }).map((_, i) => <CardUserSkeleton key={i.toString()} />)}
        {!isFetching &&
          users?.data?.map((user) => (
            <CardUser
              key={user.id}
              fullName={user.fullName}
              username={user.username}
              avatar="https://plus.unsplash.com/premium_photo-1720885652263-17b2be207129?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          ))}
      </ul>
      <Pagination />
    </>
  )
}

export default UserList
