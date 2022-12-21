
type MergeParamValue<A extends object, B extends object, K extends keyof A | keyof B> = K extends keyof A ? K extends keyof B ? {} : A[K] :
    K extends keyof B ? B[K] : never;

type MergeParam<Params extends object, Other extends object> = {
    [K in keyof (Params & Other)]: MergeParamValue<Params, Other, K>
}

type KeyValuePair<T extends string> = T extends `${infer K}=${infer V}` ? {
    [P in K]: V
} : {};

type ParseQueryString<U extends string> = U extends `${infer param}&${infer Rest}` ?
    MergeParam<KeyValuePair<param>, ParseQueryString<Rest>>
    : KeyValuePair<U>;


// type a = ParseQueryString<"b=2&c=3&d=4&e=5">

/**
 *  过程推断分析
 */

// 1. MergeParam<{b: 2}, ?>

// 2. 拿着剩下的c=3&d=4&e=5继续, MergeParam<{c: 3}, ?>

// 3. 继续d=4&e=5, MergeParam<{d:4}, ?>

// 4. 只剩下了最后一个，这个时候命中KeyValuePair, 也就是{e: 5}


/**
 *   由于上面的步骤下面开始合并， 第3步为MergeParam<{d:4}, {e: 5}> 得到{d: 4, e: 5}
 *   第2步再把第3步的结果放进去 MergeParam<{c: 3}, {d: 4, e: 5}> 得到 {c: 3, d: 4, e: 5}
 *   第1步再把第二步解析好的对象放进去，MergeParam<{b: 2}, {c: 3, d: 4, e: 5}>  最终输出 {b:2, c: 3, d: 4, e: 5}
 */


// 以下是自己手动实现的精简版本

type KeyValueMaping<T extends string> = T extends `${infer K}=${infer V}` ? {
    [P in K]: V
} : {};

type Reduce<X extends object, Y extends object> = {
    [K in keyof (X & Y)]: (X & Y)[K]
}

type URLQueryString<URL extends string> = URL extends `${infer Query}&${infer Rest}` ?
 Reduce<KeyValueMaping<Query>, URLQueryString<Rest>> : KeyValueMaping<URL>;

 type URL = URLQueryString<"a=1&b=2&c=3">