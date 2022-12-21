
type MyAwaited<T> = T extends null | undefined ? T : T extends object & {
    then(onFul: infer F): any
} ? F extends (value: infer V, ...args: any) => any ? MyAwaited<V> : never : T;