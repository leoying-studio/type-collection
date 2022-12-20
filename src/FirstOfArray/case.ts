import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstOfArray<[3, 2, 1]>, 3>>,
  Expect<Equal<FirstOfArray<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<FirstOfArray<[]>, never>>,
  Expect<Equal<FirstOfArray<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  FirstOfArray<'notArray'>,
  // @ts-expect-error
  FirstOfArray<{ 0: 'arrayLike' }>,
]