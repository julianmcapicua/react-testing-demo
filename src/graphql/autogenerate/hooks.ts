import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const GetYugiohCardDocument = gql`
    query GetYugiohCard {
        yugioh_names {
            id
            name
        }
    }
`

/**
 * __useGetYugiohCardQuery__
 *
 * To run a query within a React component, call `useGetYugiohCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetYugiohCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetYugiohCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetYugiohCardQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Types.GetYugiohCardQuery,
        Types.GetYugiohCardQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        Types.GetYugiohCardQuery,
        Types.GetYugiohCardQueryVariables
    >(GetYugiohCardDocument, options)
}
export function useGetYugiohCardLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Types.GetYugiohCardQuery,
        Types.GetYugiohCardQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        Types.GetYugiohCardQuery,
        Types.GetYugiohCardQueryVariables
    >(GetYugiohCardDocument, options)
}
export type GetYugiohCardQueryHookResult = ReturnType<
    typeof useGetYugiohCardQuery
>
export type GetYugiohCardLazyQueryHookResult = ReturnType<
    typeof useGetYugiohCardLazyQuery
>
export type GetYugiohCardQueryResult = Apollo.QueryResult<
    Types.GetYugiohCardQuery,
    Types.GetYugiohCardQueryVariables
>
export function refetchGetYugiohCardQuery(
    variables?: Types.GetYugiohCardQueryVariables
) {
    return { query: GetYugiohCardDocument, variables: variables }
}
