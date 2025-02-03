import Search from '@/modules/core/components/search'
import UserList from '@/modules/users/components/userList'

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Search />
      <UserList />
    </div>
  )
}
