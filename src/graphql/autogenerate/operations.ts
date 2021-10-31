import * as Types from './schemas'

export type InsertUserMutationVariables = Types.Exact<{
    email: Types.Scalars['String']
    password: Types.Scalars['String']
}>

export type InsertUserMutation = {
    __typename?: 'mutation_root'
    insert_usuarios_one?: Types.Maybe<{
        __typename?: 'usuarios'
        id: number
        email: string
        password: string
    }>
}

export type GetYugiohCardQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetYugiohCardQuery = {
    __typename?: 'query_root'
    yugioh_names: Array<{
        __typename?: 'yugioh_names'
        id: number
        name: string
    }>
}
