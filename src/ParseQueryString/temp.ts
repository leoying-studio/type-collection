
type MergeParamValue<A extends object, B extends object, K extends keyof A | keyof B> = K extends keyof A ? K extends keyof B ? {} : A[K] :
    K extends keyof B ? B[K] : never;

type MergeParam<Params extends object, Other extends object> = {
    [K in keyof Params | keyof Other]: MergeParamValue<Params, Other, K>
}

type KeyValuePair<T extends string> = T extends `${infer K}=${infer V}` ? {
    [P in K]: V
} : {};

type ParseQueryString<U extends string> = U extends `${infer param}&${infer Rest}` ?
    MergeParam<KeyValuePair<param>, ParseQueryString<Rest>>
    : KeyValuePair<U>;


type a = ParseQueryString<"a=1&b=2&c=3">