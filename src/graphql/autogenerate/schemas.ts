export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: Maybe<Scalars['Int']>
    _gt?: Maybe<Scalars['Int']>
    _gte?: Maybe<Scalars['Int']>
    _in?: Maybe<Array<Scalars['Int']>>
    _is_null?: Maybe<Scalars['Boolean']>
    _lt?: Maybe<Scalars['Int']>
    _lte?: Maybe<Scalars['Int']>
    _neq?: Maybe<Scalars['Int']>
    _nin?: Maybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: Maybe<Scalars['String']>
    _gt?: Maybe<Scalars['String']>
    _gte?: Maybe<Scalars['String']>
    /** does the column match the given case-insensitive pattern */
    _ilike?: Maybe<Scalars['String']>
    _in?: Maybe<Array<Scalars['String']>>
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: Maybe<Scalars['String']>
    _is_null?: Maybe<Scalars['Boolean']>
    /** does the column match the given pattern */
    _like?: Maybe<Scalars['String']>
    _lt?: Maybe<Scalars['String']>
    _lte?: Maybe<Scalars['String']>
    _neq?: Maybe<Scalars['String']>
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: Maybe<Scalars['String']>
    _nin?: Maybe<Array<Scalars['String']>>
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: Maybe<Scalars['String']>
    /** does the column NOT match the given pattern */
    _nlike?: Maybe<Scalars['String']>
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: Maybe<Scalars['String']>
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: Maybe<Scalars['String']>
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: Maybe<Scalars['String']>
    /** does the column match the given SQL regular expression */
    _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "listas" */
export type Listas = {
    __typename?: 'listas'
    id: Scalars['Int']
    list: Scalars['String']
}

/** aggregated selection of "listas" */
export type Listas_Aggregate = {
    __typename?: 'listas_aggregate'
    aggregate?: Maybe<Listas_Aggregate_Fields>
    nodes: Array<Listas>
}

/** aggregate fields of "listas" */
export type Listas_Aggregate_Fields = {
    __typename?: 'listas_aggregate_fields'
    avg?: Maybe<Listas_Avg_Fields>
    count: Scalars['Int']
    max?: Maybe<Listas_Max_Fields>
    min?: Maybe<Listas_Min_Fields>
    stddev?: Maybe<Listas_Stddev_Fields>
    stddev_pop?: Maybe<Listas_Stddev_Pop_Fields>
    stddev_samp?: Maybe<Listas_Stddev_Samp_Fields>
    sum?: Maybe<Listas_Sum_Fields>
    var_pop?: Maybe<Listas_Var_Pop_Fields>
    var_samp?: Maybe<Listas_Var_Samp_Fields>
    variance?: Maybe<Listas_Variance_Fields>
}

/** aggregate fields of "listas" */
export type Listas_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Listas_Select_Column>>
    distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Listas_Avg_Fields = {
    __typename?: 'listas_avg_fields'
    id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "listas". All fields are combined with a logical 'AND'. */
export type Listas_Bool_Exp = {
    _and?: Maybe<Array<Listas_Bool_Exp>>
    _not?: Maybe<Listas_Bool_Exp>
    _or?: Maybe<Array<Listas_Bool_Exp>>
    id?: Maybe<Int_Comparison_Exp>
    list?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "listas" */
export enum Listas_Constraint {
    /** unique or primary key constraint */
    ListasIdKey = 'listas_id_key',
    /** unique or primary key constraint */
    ListasPkey = 'listas_pkey',
}

/** input type for incrementing numeric columns in table "listas" */
export type Listas_Inc_Input = {
    id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "listas" */
export type Listas_Insert_Input = {
    id?: Maybe<Scalars['Int']>
    list?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Listas_Max_Fields = {
    __typename?: 'listas_max_fields'
    id?: Maybe<Scalars['Int']>
    list?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Listas_Min_Fields = {
    __typename?: 'listas_min_fields'
    id?: Maybe<Scalars['Int']>
    list?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "listas" */
export type Listas_Mutation_Response = {
    __typename?: 'listas_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Listas>
}

/** on conflict condition type for table "listas" */
export type Listas_On_Conflict = {
    constraint: Listas_Constraint
    update_columns?: Array<Listas_Update_Column>
    where?: Maybe<Listas_Bool_Exp>
}

/** Ordering options when selecting data from "listas". */
export type Listas_Order_By = {
    id?: Maybe<Order_By>
    list?: Maybe<Order_By>
}

/** primary key columns input for table: listas */
export type Listas_Pk_Columns_Input = {
    id: Scalars['Int']
}

/** select columns of table "listas" */
export enum Listas_Select_Column {
    /** column name */
    Id = 'id',
    /** column name */
    List = 'list',
}

/** input type for updating data in table "listas" */
export type Listas_Set_Input = {
    id?: Maybe<Scalars['Int']>
    list?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Listas_Stddev_Fields = {
    __typename?: 'listas_stddev_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Listas_Stddev_Pop_Fields = {
    __typename?: 'listas_stddev_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Listas_Stddev_Samp_Fields = {
    __typename?: 'listas_stddev_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Listas_Sum_Fields = {
    __typename?: 'listas_sum_fields'
    id?: Maybe<Scalars['Int']>
}

/** update columns of table "listas" */
export enum Listas_Update_Column {
    /** column name */
    Id = 'id',
    /** column name */
    List = 'list',
}

/** aggregate var_pop on columns */
export type Listas_Var_Pop_Fields = {
    __typename?: 'listas_var_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Listas_Var_Samp_Fields = {
    __typename?: 'listas_var_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Listas_Variance_Fields = {
    __typename?: 'listas_variance_fields'
    id?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root'
    /** delete data from the table: "listas" */
    delete_listas?: Maybe<Listas_Mutation_Response>
    /** delete single row from the table: "listas" */
    delete_listas_by_pk?: Maybe<Listas>
    /** delete data from the table: "usuarios" */
    delete_usuarios?: Maybe<Usuarios_Mutation_Response>
    /** delete single row from the table: "usuarios" */
    delete_usuarios_by_pk?: Maybe<Usuarios>
    /** delete data from the table: "yugioh_names" */
    delete_yugioh_names?: Maybe<Yugioh_Names_Mutation_Response>
    /** delete single row from the table: "yugioh_names" */
    delete_yugioh_names_by_pk?: Maybe<Yugioh_Names>
    /** insert data into the table: "listas" */
    insert_listas?: Maybe<Listas_Mutation_Response>
    /** insert a single row into the table: "listas" */
    insert_listas_one?: Maybe<Listas>
    /** insert data into the table: "usuarios" */
    insert_usuarios?: Maybe<Usuarios_Mutation_Response>
    /** insert a single row into the table: "usuarios" */
    insert_usuarios_one?: Maybe<Usuarios>
    /** insert data into the table: "yugioh_names" */
    insert_yugioh_names?: Maybe<Yugioh_Names_Mutation_Response>
    /** insert a single row into the table: "yugioh_names" */
    insert_yugioh_names_one?: Maybe<Yugioh_Names>
    /** update data of the table: "listas" */
    update_listas?: Maybe<Listas_Mutation_Response>
    /** update single row of the table: "listas" */
    update_listas_by_pk?: Maybe<Listas>
    /** update data of the table: "usuarios" */
    update_usuarios?: Maybe<Usuarios_Mutation_Response>
    /** update single row of the table: "usuarios" */
    update_usuarios_by_pk?: Maybe<Usuarios>
    /** update data of the table: "yugioh_names" */
    update_yugioh_names?: Maybe<Yugioh_Names_Mutation_Response>
    /** update single row of the table: "yugioh_names" */
    update_yugioh_names_by_pk?: Maybe<Yugioh_Names>
}

/** mutation root */
export type Mutation_RootDelete_ListasArgs = {
    where: Listas_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Listas_By_PkArgs = {
    id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_UsuariosArgs = {
    where: Usuarios_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Usuarios_By_PkArgs = {
    id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_Yugioh_NamesArgs = {
    where: Yugioh_Names_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Yugioh_Names_By_PkArgs = {
    id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_ListasArgs = {
    objects: Array<Listas_Insert_Input>
    on_conflict?: Maybe<Listas_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Listas_OneArgs = {
    object: Listas_Insert_Input
    on_conflict?: Maybe<Listas_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsuariosArgs = {
    objects: Array<Usuarios_Insert_Input>
    on_conflict?: Maybe<Usuarios_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Usuarios_OneArgs = {
    object: Usuarios_Insert_Input
    on_conflict?: Maybe<Usuarios_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Yugioh_NamesArgs = {
    objects: Array<Yugioh_Names_Insert_Input>
    on_conflict?: Maybe<Yugioh_Names_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Yugioh_Names_OneArgs = {
    object: Yugioh_Names_Insert_Input
    on_conflict?: Maybe<Yugioh_Names_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_ListasArgs = {
    _inc?: Maybe<Listas_Inc_Input>
    _set?: Maybe<Listas_Set_Input>
    where: Listas_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Listas_By_PkArgs = {
    _inc?: Maybe<Listas_Inc_Input>
    _set?: Maybe<Listas_Set_Input>
    pk_columns: Listas_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsuariosArgs = {
    _inc?: Maybe<Usuarios_Inc_Input>
    _set?: Maybe<Usuarios_Set_Input>
    where: Usuarios_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Usuarios_By_PkArgs = {
    _inc?: Maybe<Usuarios_Inc_Input>
    _set?: Maybe<Usuarios_Set_Input>
    pk_columns: Usuarios_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Yugioh_NamesArgs = {
    _inc?: Maybe<Yugioh_Names_Inc_Input>
    _set?: Maybe<Yugioh_Names_Set_Input>
    where: Yugioh_Names_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Yugioh_Names_By_PkArgs = {
    _inc?: Maybe<Yugioh_Names_Inc_Input>
    _set?: Maybe<Yugioh_Names_Set_Input>
    pk_columns: Yugioh_Names_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = 'asc',
    /** in ascending order, nulls first */
    AscNullsFirst = 'asc_nulls_first',
    /** in ascending order, nulls last */
    AscNullsLast = 'asc_nulls_last',
    /** in descending order, nulls first */
    Desc = 'desc',
    /** in descending order, nulls first */
    DescNullsFirst = 'desc_nulls_first',
    /** in descending order, nulls last */
    DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
    __typename?: 'query_root'
    /** fetch data from the table: "listas" */
    listas: Array<Listas>
    /** fetch aggregated fields from the table: "listas" */
    listas_aggregate: Listas_Aggregate
    /** fetch data from the table: "listas" using primary key columns */
    listas_by_pk?: Maybe<Listas>
    /** fetch data from the table: "usuarios" */
    usuarios: Array<Usuarios>
    /** fetch aggregated fields from the table: "usuarios" */
    usuarios_aggregate: Usuarios_Aggregate
    /** fetch data from the table: "usuarios" using primary key columns */
    usuarios_by_pk?: Maybe<Usuarios>
    /** fetch data from the table: "yugioh_names" */
    yugioh_names: Array<Yugioh_Names>
    /** fetch aggregated fields from the table: "yugioh_names" */
    yugioh_names_aggregate: Yugioh_Names_Aggregate
    /** fetch data from the table: "yugioh_names" using primary key columns */
    yugioh_names_by_pk?: Maybe<Yugioh_Names>
}

export type Query_RootListasArgs = {
    distinct_on?: Maybe<Array<Listas_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Listas_Order_By>>
    where?: Maybe<Listas_Bool_Exp>
}

export type Query_RootListas_AggregateArgs = {
    distinct_on?: Maybe<Array<Listas_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Listas_Order_By>>
    where?: Maybe<Listas_Bool_Exp>
}

export type Query_RootListas_By_PkArgs = {
    id: Scalars['Int']
}

export type Query_RootUsuariosArgs = {
    distinct_on?: Maybe<Array<Usuarios_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Usuarios_Order_By>>
    where?: Maybe<Usuarios_Bool_Exp>
}

export type Query_RootUsuarios_AggregateArgs = {
    distinct_on?: Maybe<Array<Usuarios_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Usuarios_Order_By>>
    where?: Maybe<Usuarios_Bool_Exp>
}

export type Query_RootUsuarios_By_PkArgs = {
    id: Scalars['Int']
}

export type Query_RootYugioh_NamesArgs = {
    distinct_on?: Maybe<Array<Yugioh_Names_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Yugioh_Names_Order_By>>
    where?: Maybe<Yugioh_Names_Bool_Exp>
}

export type Query_RootYugioh_Names_AggregateArgs = {
    distinct_on?: Maybe<Array<Yugioh_Names_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Yugioh_Names_Order_By>>
    where?: Maybe<Yugioh_Names_Bool_Exp>
}

export type Query_RootYugioh_Names_By_PkArgs = {
    id: Scalars['Int']
}

export type Subscription_Root = {
    __typename?: 'subscription_root'
    /** fetch data from the table: "listas" */
    listas: Array<Listas>
    /** fetch aggregated fields from the table: "listas" */
    listas_aggregate: Listas_Aggregate
    /** fetch data from the table: "listas" using primary key columns */
    listas_by_pk?: Maybe<Listas>
    /** fetch data from the table: "usuarios" */
    usuarios: Array<Usuarios>
    /** fetch aggregated fields from the table: "usuarios" */
    usuarios_aggregate: Usuarios_Aggregate
    /** fetch data from the table: "usuarios" using primary key columns */
    usuarios_by_pk?: Maybe<Usuarios>
    /** fetch data from the table: "yugioh_names" */
    yugioh_names: Array<Yugioh_Names>
    /** fetch aggregated fields from the table: "yugioh_names" */
    yugioh_names_aggregate: Yugioh_Names_Aggregate
    /** fetch data from the table: "yugioh_names" using primary key columns */
    yugioh_names_by_pk?: Maybe<Yugioh_Names>
}

export type Subscription_RootListasArgs = {
    distinct_on?: Maybe<Array<Listas_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Listas_Order_By>>
    where?: Maybe<Listas_Bool_Exp>
}

export type Subscription_RootListas_AggregateArgs = {
    distinct_on?: Maybe<Array<Listas_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Listas_Order_By>>
    where?: Maybe<Listas_Bool_Exp>
}

export type Subscription_RootListas_By_PkArgs = {
    id: Scalars['Int']
}

export type Subscription_RootUsuariosArgs = {
    distinct_on?: Maybe<Array<Usuarios_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Usuarios_Order_By>>
    where?: Maybe<Usuarios_Bool_Exp>
}

export type Subscription_RootUsuarios_AggregateArgs = {
    distinct_on?: Maybe<Array<Usuarios_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Usuarios_Order_By>>
    where?: Maybe<Usuarios_Bool_Exp>
}

export type Subscription_RootUsuarios_By_PkArgs = {
    id: Scalars['Int']
}

export type Subscription_RootYugioh_NamesArgs = {
    distinct_on?: Maybe<Array<Yugioh_Names_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Yugioh_Names_Order_By>>
    where?: Maybe<Yugioh_Names_Bool_Exp>
}

export type Subscription_RootYugioh_Names_AggregateArgs = {
    distinct_on?: Maybe<Array<Yugioh_Names_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Yugioh_Names_Order_By>>
    where?: Maybe<Yugioh_Names_Bool_Exp>
}

export type Subscription_RootYugioh_Names_By_PkArgs = {
    id: Scalars['Int']
}

/** columns and relationships of "usuarios" */
export type Usuarios = {
    __typename?: 'usuarios'
    email: Scalars['String']
    id: Scalars['Int']
    password: Scalars['String']
}

/** aggregated selection of "usuarios" */
export type Usuarios_Aggregate = {
    __typename?: 'usuarios_aggregate'
    aggregate?: Maybe<Usuarios_Aggregate_Fields>
    nodes: Array<Usuarios>
}

/** aggregate fields of "usuarios" */
export type Usuarios_Aggregate_Fields = {
    __typename?: 'usuarios_aggregate_fields'
    avg?: Maybe<Usuarios_Avg_Fields>
    count: Scalars['Int']
    max?: Maybe<Usuarios_Max_Fields>
    min?: Maybe<Usuarios_Min_Fields>
    stddev?: Maybe<Usuarios_Stddev_Fields>
    stddev_pop?: Maybe<Usuarios_Stddev_Pop_Fields>
    stddev_samp?: Maybe<Usuarios_Stddev_Samp_Fields>
    sum?: Maybe<Usuarios_Sum_Fields>
    var_pop?: Maybe<Usuarios_Var_Pop_Fields>
    var_samp?: Maybe<Usuarios_Var_Samp_Fields>
    variance?: Maybe<Usuarios_Variance_Fields>
}

/** aggregate fields of "usuarios" */
export type Usuarios_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Usuarios_Select_Column>>
    distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Usuarios_Avg_Fields = {
    __typename?: 'usuarios_avg_fields'
    id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "usuarios". All fields are combined with a logical 'AND'. */
export type Usuarios_Bool_Exp = {
    _and?: Maybe<Array<Usuarios_Bool_Exp>>
    _not?: Maybe<Usuarios_Bool_Exp>
    _or?: Maybe<Array<Usuarios_Bool_Exp>>
    email?: Maybe<String_Comparison_Exp>
    id?: Maybe<Int_Comparison_Exp>
    password?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "usuarios" */
export enum Usuarios_Constraint {
    /** unique or primary key constraint */
    UsuariosPkey = 'usuarios_pkey',
}

/** input type for incrementing numeric columns in table "usuarios" */
export type Usuarios_Inc_Input = {
    id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "usuarios" */
export type Usuarios_Insert_Input = {
    email?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['Int']>
    password?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Usuarios_Max_Fields = {
    __typename?: 'usuarios_max_fields'
    email?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['Int']>
    password?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Usuarios_Min_Fields = {
    __typename?: 'usuarios_min_fields'
    email?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['Int']>
    password?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "usuarios" */
export type Usuarios_Mutation_Response = {
    __typename?: 'usuarios_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Usuarios>
}

/** on conflict condition type for table "usuarios" */
export type Usuarios_On_Conflict = {
    constraint: Usuarios_Constraint
    update_columns?: Array<Usuarios_Update_Column>
    where?: Maybe<Usuarios_Bool_Exp>
}

/** Ordering options when selecting data from "usuarios". */
export type Usuarios_Order_By = {
    email?: Maybe<Order_By>
    id?: Maybe<Order_By>
    password?: Maybe<Order_By>
}

/** primary key columns input for table: usuarios */
export type Usuarios_Pk_Columns_Input = {
    id: Scalars['Int']
}

/** select columns of table "usuarios" */
export enum Usuarios_Select_Column {
    /** column name */
    Email = 'email',
    /** column name */
    Id = 'id',
    /** column name */
    Password = 'password',
}

/** input type for updating data in table "usuarios" */
export type Usuarios_Set_Input = {
    email?: Maybe<Scalars['String']>
    id?: Maybe<Scalars['Int']>
    password?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Usuarios_Stddev_Fields = {
    __typename?: 'usuarios_stddev_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Usuarios_Stddev_Pop_Fields = {
    __typename?: 'usuarios_stddev_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Usuarios_Stddev_Samp_Fields = {
    __typename?: 'usuarios_stddev_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Usuarios_Sum_Fields = {
    __typename?: 'usuarios_sum_fields'
    id?: Maybe<Scalars['Int']>
}

/** update columns of table "usuarios" */
export enum Usuarios_Update_Column {
    /** column name */
    Email = 'email',
    /** column name */
    Id = 'id',
    /** column name */
    Password = 'password',
}

/** aggregate var_pop on columns */
export type Usuarios_Var_Pop_Fields = {
    __typename?: 'usuarios_var_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Usuarios_Var_Samp_Fields = {
    __typename?: 'usuarios_var_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Usuarios_Variance_Fields = {
    __typename?: 'usuarios_variance_fields'
    id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "yugioh_names" */
export type Yugioh_Names = {
    __typename?: 'yugioh_names'
    id: Scalars['Int']
    name: Scalars['String']
}

/** aggregated selection of "yugioh_names" */
export type Yugioh_Names_Aggregate = {
    __typename?: 'yugioh_names_aggregate'
    aggregate?: Maybe<Yugioh_Names_Aggregate_Fields>
    nodes: Array<Yugioh_Names>
}

/** aggregate fields of "yugioh_names" */
export type Yugioh_Names_Aggregate_Fields = {
    __typename?: 'yugioh_names_aggregate_fields'
    avg?: Maybe<Yugioh_Names_Avg_Fields>
    count: Scalars['Int']
    max?: Maybe<Yugioh_Names_Max_Fields>
    min?: Maybe<Yugioh_Names_Min_Fields>
    stddev?: Maybe<Yugioh_Names_Stddev_Fields>
    stddev_pop?: Maybe<Yugioh_Names_Stddev_Pop_Fields>
    stddev_samp?: Maybe<Yugioh_Names_Stddev_Samp_Fields>
    sum?: Maybe<Yugioh_Names_Sum_Fields>
    var_pop?: Maybe<Yugioh_Names_Var_Pop_Fields>
    var_samp?: Maybe<Yugioh_Names_Var_Samp_Fields>
    variance?: Maybe<Yugioh_Names_Variance_Fields>
}

/** aggregate fields of "yugioh_names" */
export type Yugioh_Names_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Yugioh_Names_Select_Column>>
    distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Yugioh_Names_Avg_Fields = {
    __typename?: 'yugioh_names_avg_fields'
    id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "yugioh_names". All fields are combined with a logical 'AND'. */
export type Yugioh_Names_Bool_Exp = {
    _and?: Maybe<Array<Yugioh_Names_Bool_Exp>>
    _not?: Maybe<Yugioh_Names_Bool_Exp>
    _or?: Maybe<Array<Yugioh_Names_Bool_Exp>>
    id?: Maybe<Int_Comparison_Exp>
    name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "yugioh_names" */
export enum Yugioh_Names_Constraint {
    /** unique or primary key constraint */
    YugiohNamesNameKey = 'yugioh_names_name_key',
    /** unique or primary key constraint */
    YugiohNamesPkey = 'yugioh_names_pkey',
}

/** input type for incrementing numeric columns in table "yugioh_names" */
export type Yugioh_Names_Inc_Input = {
    id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "yugioh_names" */
export type Yugioh_Names_Insert_Input = {
    id?: Maybe<Scalars['Int']>
    name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Yugioh_Names_Max_Fields = {
    __typename?: 'yugioh_names_max_fields'
    id?: Maybe<Scalars['Int']>
    name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Yugioh_Names_Min_Fields = {
    __typename?: 'yugioh_names_min_fields'
    id?: Maybe<Scalars['Int']>
    name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "yugioh_names" */
export type Yugioh_Names_Mutation_Response = {
    __typename?: 'yugioh_names_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Yugioh_Names>
}

/** on conflict condition type for table "yugioh_names" */
export type Yugioh_Names_On_Conflict = {
    constraint: Yugioh_Names_Constraint
    update_columns?: Array<Yugioh_Names_Update_Column>
    where?: Maybe<Yugioh_Names_Bool_Exp>
}

/** Ordering options when selecting data from "yugioh_names". */
export type Yugioh_Names_Order_By = {
    id?: Maybe<Order_By>
    name?: Maybe<Order_By>
}

/** primary key columns input for table: yugioh_names */
export type Yugioh_Names_Pk_Columns_Input = {
    id: Scalars['Int']
}

/** select columns of table "yugioh_names" */
export enum Yugioh_Names_Select_Column {
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
}

/** input type for updating data in table "yugioh_names" */
export type Yugioh_Names_Set_Input = {
    id?: Maybe<Scalars['Int']>
    name?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Yugioh_Names_Stddev_Fields = {
    __typename?: 'yugioh_names_stddev_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Yugioh_Names_Stddev_Pop_Fields = {
    __typename?: 'yugioh_names_stddev_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Yugioh_Names_Stddev_Samp_Fields = {
    __typename?: 'yugioh_names_stddev_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Yugioh_Names_Sum_Fields = {
    __typename?: 'yugioh_names_sum_fields'
    id?: Maybe<Scalars['Int']>
}

/** update columns of table "yugioh_names" */
export enum Yugioh_Names_Update_Column {
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
}

/** aggregate var_pop on columns */
export type Yugioh_Names_Var_Pop_Fields = {
    __typename?: 'yugioh_names_var_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Yugioh_Names_Var_Samp_Fields = {
    __typename?: 'yugioh_names_var_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Yugioh_Names_Variance_Fields = {
    __typename?: 'yugioh_names_variance_fields'
    id?: Maybe<Scalars['Float']>
}
