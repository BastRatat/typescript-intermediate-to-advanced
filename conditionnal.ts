import type { User } from "types";
import type { ExpectTrue } from "tests";

type IsString<T> = T extends string ? true : false

type IsUserNameString = IsString<User['name']>

type ConditionalTests = [
  ExpectTrue<IsUserNameString>
]

export type { ConditionalTests }

// TO SUM-UP
// - use the extends keyword to check
// - TypeScript conditions are done using a ternary expression
// - useful to return a type given two possible types
