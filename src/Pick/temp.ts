type MyPick<T extends Record<string | number | symbol, any>, K extends keyof T> = {
    [P in K]: T[P]
}



/**
 *  js 实现
 */

function MyPick(obj: Record<string, any>, keys: string[]) {
    const newObj:Record<string, any> = {};
    // 通过keys来遍历得到
    keys.forEach(function(key, index) {
        newObj[key] = obj[key];
    })

    return newObj;
}