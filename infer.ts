import type { User } from "types";
import type { Expect, Equal } from "tests";

type Unpromisify<T> = T extends Promise<infer E> ? E : T

type InferTests = [
  Expect<Equal<Unpromisify<Promise<User>>, User>>,
  Expect<Equal<Awaited<Promise<User>>, User>>
]

export type { InferTests }
