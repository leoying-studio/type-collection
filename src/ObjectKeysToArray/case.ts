import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KeysToArray<{a: 1, b: 2, c: 3}>>, ['c', 'b', 'a']>>
]
