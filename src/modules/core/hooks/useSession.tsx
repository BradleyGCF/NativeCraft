import { Routes } from '@/routes'
import type { Session, SessionStatus } from '@/types'
import Moralis from 'moralis-v1'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { $SessionStatus } from '../enum'
import { useUserStore } from '@/store'
// import { getUserById } from '@/services/users'

function useSession() {
  const { setUser, user } = useUserStore((store) => ({
    setUser: store.setUser,
    user: store.user,
  }))
  const [status, setStatus] = useState<SessionStatus>($SessionStatus.LOADING)
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const currentSession = Moralis.User.current()

      if (!currentSession?.attributes) {
        setStatus($SessionStatus.UNAUTHENTICATED)
        return
      }

      const { id } = currentSession

      const { sessionToken, email, user_type } = currentSession.attributes

      if (!sessionToken) {
        setStatus($SessionStatus.UNAUTHENTICATED)
        return
      }

      setUser({
        id,
        sessionToken,
        email,
        fullName: '',
        username: '',
        role: user_type,
      })

      // getUserById({ id }).then((response) => {
      //   response.data &&
      //     setUser({
      //       id: currentSession.id,
      //       sessionToken,
      //       email: response.data?.email,
      //       fullName: response.data?.fullName,
      //       username: response.data?.username,
      //       type: response.data?.type
      //     })
      // })

      setStatus($SessionStatus.AUTHENTICATED)
    } catch (error) {
      console.error(error)
      setStatus($SessionStatus.UNAUTHENTICATED_ERROR)
    }
    return () => {
      setUser(null)
    }
  }, [setUser])

  const signOut = () => {
    // Limpiar el estado global cuando se cierra la sesión
    Moralis.User.logOut()
    navigate(Routes.logIn)
    setUser(null)
    setStatus($SessionStatus.UNAUTHENTICATED)
  }

  return {
    user,
    status,
    signOut,
  }
}

export default useSession
