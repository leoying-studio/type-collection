import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    
]

type User = Replace<{name: string}, "name", {name: number}>