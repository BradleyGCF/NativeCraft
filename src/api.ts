import { appId, moralisApiKey, serverUrl } from '@/config/env'
// import { $CookieKey, getCookie } from '@/modules/core/hooks/useCookies'
import axios from 'axios'
import { $CookieKey } from './modules/core/enum'
import { getCookie } from './modules/core/hooks/useCookies'

const baseURL = `${serverUrl}/functions`

const api = axios.create({
  baseURL,
})

const rawApi = axios.create({
  baseURL,
})

rawApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Basic ${btoa('adminBackend:o16*2E9qeRBx')}`
  config.headers['X-Parse-Application-Id'] = appId
  config.headers['X-Parse-REST-API-Key'] = moralisApiKey
  return config
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Basic ${btoa('adminBackend:o16*2E9qeRBx')}`
  config.headers['X-Parse-Application-Id'] = appId
  config.headers['X-Parse-REST-API-Key'] = moralisApiKey
  config.headers['X-Parse-Session-Token'] = getCookie({ key: $CookieKey.SESSION_TOKEN })
  return config
})

export { api, rawApi }
