/**
 *  联合类型转换成元组
 */
type ToFun<U> = U extends any ? () => U : never; // (() => 'a') | (() => 'b')

type U2I<U> = (U extends any ? (u: U) => any : never) extends (i: infer I) => any ? I : never; // (() => "a") & (() => "b")

type Intersection<U> = U2I<ToFun<U>>; // (() => "a") & (() => "b")

type LastOfUnion<U> = Intersection<U> extends () => infer R ? R : never; // 解析出 b

type iterate<U, T extends unknown[] = []> = LastOfUnion<U> extends never ? T : iterate<Exclude<U, LastOfUnion<U>>, [...T, LastOfUnion<U>]>

type KeysToArray<T extends object> = iterate<keyof T>;
