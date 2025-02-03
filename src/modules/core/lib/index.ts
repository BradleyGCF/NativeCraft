import { Services } from '@/services'
import type { OrderBy } from '@/types'
import { Moralis } from 'moralis-v1'

export const findInTable = async ({
  field,
  page,
  table,
  value,
  orderBy,
}: { table: string; field: string; value?: string; page: number } & OrderBy) => {
  return await Moralis.Cloud.run(Services.table.find, {
    table,
    key: field,
    value,
    page,
    orderBy,
  })
}
