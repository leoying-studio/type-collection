type Key =  string | number | symbol

type Replace<O, K extends Key, F = Record<string, any>> = Omit<O, K> & F;

type TupleToObject<T extends Key[] = []> = {
    [P in T[number]]: P
}

type FirstOfArray<T extends []> = T['length'] extends 0 ? never : T[0];


export {
    Replace,
    TupleToObject,
    FirstOfArray
}