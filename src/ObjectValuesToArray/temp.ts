type ToFun<U> = U extends any ? () => U : never; // (() => 'a') | (() => 'b')

type U2I<U> = (U extends any ? (u: U) => any : never) extends (i: infer I) => any ? I : never; // (() => "a") & (() => "b")

type Intersection<U> = U2I<ToFun<U>>; // (() => "a") & (() => "b")

type LastOfUnion<U> = Intersection<U> extends () => infer R ? R : never; // 解析出 b

type ObjectIterator<T extends Record<string, unknown>, K extends keyof T | never, U extends unknown[] = []> = T[LastOfUnion<K>] extends never ? U : 
ObjectIterator<T, Exclude<K, LastOfUnion<K>>, [...U, T[(LastOfUnion<K>)]>;

type ObjectValuesToArray<T extends Record<string, unknown>> = ObjectIterator<T, keyof T>;
