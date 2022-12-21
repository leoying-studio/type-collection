import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Replace<{name: string}, "name", number>, {name: number}>>,
    Expect<Equal<Replace<{id: string, age: number}, "id", number>, {age: number, id: number}>>,
]

type C = Replace<{name: string}, "name", number>