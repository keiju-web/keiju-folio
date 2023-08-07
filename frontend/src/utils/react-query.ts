/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { MESSAGE } from 'constants/message'

import { useToast } from 'hooks/use-toast'
import { useQuery, QueryFunction, QueryKey, UseQueryResult, UseQueryOptions } from 'react-query'
import { useMutation, MutationFunction, UseMutationOptions, UseMutationResult } from 'react-query'

type RequireData<T extends { data: unknown }> = T & {
  data: NonNullable<T['data']>
}

type UseQueryWithSuspenseResult<T> = RequireData<UseQueryResult<T, unknown>>

/**
 * Common useQuery
 */
export const useCommonQuery = <T extends unknown>(
  queryKey: QueryKey,
  fetcher: QueryFunction<T>,
  options?: UseQueryOptions,
): UseQueryWithSuspenseResult<T> => {
  const { openToast } = useToast()
  return useQuery(queryKey, fetcher, {
    ...options,
    onError: (err: unknown) => {
      console.log(err)
      openToast({
        message: MESSAGE.FAILED,
        severity: 'error',
      })
      options?.onError?.(err)
    },
  }) as any
}

/**
 * useQuery with suspense
 * Returned "data" type would be defined
 */
export const useSuspenseQuery = <T extends unknown>(
  queryKey: QueryKey,
  fetcher: QueryFunction<T>,
  options?: UseQueryOptions,
): UseQueryWithSuspenseResult<T> => {
  const { openToast } = useToast()
  return useQuery(queryKey, fetcher, {
    suspense: true,
    onError: (err: unknown) => {
      console.log(err)
      openToast({
        message: MESSAGE.FAILED,
        severity: 'error',
      })
      options?.onError?.(err)
    },
    ...options,
  }) as any
}

/**
 * Common useMutation
 */
export const useCommonMutation = <TData = unknown, TError = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: UseMutationOptions<TData, TError, TVariables>,
): UseMutationResult<TData, TError, TVariables> => {
  const { openToast } = useToast()
  return useMutation(mutationFn, {
    ...options,
    onError: (err, variables, context) => {
      console.log(err)
      openToast({
        message: MESSAGE.FAILED,
        severity: 'error',
      })
      options?.onError?.(err, variables, context)
    },
  })
}
