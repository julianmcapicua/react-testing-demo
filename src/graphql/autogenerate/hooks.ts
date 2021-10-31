import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const InsertUserDocument = gql`
    mutation InsertUser($email: String!, $password: String!) {
        insert_usuarios_one(object: { email: $email, password: $password }) {
            id
            email
            password
        }
    }
`
export type InsertUserMutationFn = Apollo.MutationFunction<
    Types.InsertUserMutation,
    Types.InsertUserMutationVariables
>

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useInsertUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        Types.InsertUserMutation,
        Types.InsertUserMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<
        Types.InsertUserMutation,
        Types.InsertUserMutationVariables
    >(InsertUserDocument, options)
}
export type InsertUserMutationHookResult = ReturnType<
    typeof useInsertUserMutation
>
export type InsertUserMutationResult =
    Apollo.MutationResult<Types.InsertUserMutation>
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<
    Types.InsertUserMutation,
    Types.InsertUserMutationVariables
>
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
