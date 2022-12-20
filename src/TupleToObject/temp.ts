type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}


// 错误实例
// keyof 一个数组得到的是一串数组的索引
// [p in keyof T]: number