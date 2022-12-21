
type MergeParamValue<A extends object, B extends object, K extends keyof A | keyof B> = K extends keyof A ? K extends keyof B ? {} : A[K] :
    K extends keyof B ? B[K] : never;

type MergeParam<Params extends object, Other extends object> = {
    [K in keyof Params | keyof Other]: MergeParamValue<Params, Other, K>
}

type ParseParam<Param extends string> = Param extends `${infer Key}=${infer Value}` ? {
    [K in Key]: Value
} : {}

type ParseQueryString<U extends string> = U extends `${infer param}&${infer Rest}` ?
    MergeParam<ParseParam<param>, ParseQueryString<Rest>>
    : ParseParam<U>;