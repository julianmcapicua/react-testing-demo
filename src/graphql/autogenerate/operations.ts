import * as Types from './schemas'

export type GetYugiohCardQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetYugiohCardQuery = {
    __typename?: 'query_root'
    yugioh_names: Array<{
        __typename?: 'yugioh_names'
        id: number
        name: string
    }>
}
