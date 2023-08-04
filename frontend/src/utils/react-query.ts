/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { DEFAULT_CACHE_TIME } from 'constants/global-settings'

import { useQuery, QueryFunction, QueryKey, UseQueryResult } from 'react-query'

type RequireData<T extends { data: unknown }> = T & {
  data: NonNullable<T['data']>
}

type UseQueryWithSuspenseResult<T> = RequireData<UseQueryResult<T, unknown>>

/**
 * useQuery with suspense
 * Returned "data" type would be defined
 */
export const useSuspenseQuery = <T extends unknown>(
  queryKey: QueryKey,
  fetcher: QueryFunction<T>,
  option: {
    cacheTime?: number
    onError?: (e: unknown) => void
  },
): UseQueryWithSuspenseResult<T> => {
  return useQuery(queryKey, fetcher, {
    suspense: true,
    cacheTime: option.cacheTime ?? DEFAULT_CACHE_TIME,
    ...option,
  }) as any
}
