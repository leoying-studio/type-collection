import { Equal } from "@type-challenges/utils";

type Includes<T extends unknown[], K> = T extends [infer R, ...infer Rest] ? Equal<R, K> extends true ? true : Includes<Rest, K> :false;


/**
 *  使用js 来模拟实现
 *  采用递归，每次都使用rest 剩下的作为下一次的list
 */

// function includes<T = any>(arr: T[], key: any) {

//     function restElement(list: T[], key: any) {
//         if (list.length === 0) {
//             return false;
//         }

//         const [first, ...rest] = list;
//         if (first === key) {
//             return true;
//         } else {
//             // 进行递归
//            return restElement(rest, key);
//         }

//     }


//    return restElement(arr, key)
// }

export {Includes}



