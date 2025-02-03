import { appId, moralisApiKey, serverUrl } from '@/config/env'
import MainAppRoutes from '@/routes/routes'
import Moralis from 'moralis'
import { useEffect } from 'react'
import { MoralisProvider } from 'react-moralis'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'sonner'

export default function App() {
  useEffect(() => {
    if (!Moralis.Core.isStarted) {
      Moralis.start({
        apiKey: moralisApiKey,
      })
    }
  }, [])

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Router>
        <MainAppRoutes />
      </Router>
      <Toaster position="bottom-right" />
    </MoralisProvider>
  )
}
