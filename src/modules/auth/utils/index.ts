import { $ResponseStatus } from '@/modules/core/enum'
import type { AxiosResponse } from 'axios'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function captureServerError(response: AxiosResponse<any, any>) {
  if (response?.data?.result?.status === $ResponseStatus.ERROR) {
    return [response.data.result.status as string, response.data.result.errorDetails.message as string]
  }
  return [null, null]
}
