import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { LoadSessionProvider } from './modules/core/context/Session.provider'
import { AppRouter } from './routes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadSessionProvider>
        <AppRouter />
        <Toaster position="bottom-right" />
      </LoadSessionProvider>
    </QueryClientProvider>
  )
}
