type Expect<T extends true> = T;
type ExpectTrue<T extends true> = T;
type ExpectFalse<T extends false> = T;
type IsTrue<T extends true> = T;
type IsFalse<T extends false> = T;

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

type IsAny<T> = 0 extends 1 & T ? true : false;
type NotAny<T> = true extends IsAny<T> ? false : true;

type Debug<T> = { [K in keyof T]: T[K] };
type MergeInsertions<T> = T extends object
  ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>;

type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false;
type ExpectValidArgs<
  FUNC extends (...args: any[]) => any,
  ARGS extends any[]
> = ARGS extends Parameters<FUNC> ? true : false;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type {
  Expect,
  ExpectTrue,
  ExpectFalse,
  IsTrue,
  IsFalse,
  Equal,
  NotEqual,
  IsAny,
  NotAny,
  MergeInsertions,
  Alike,
  ExpectExtends,
  ExpectValidArgs,
  UnionToIntersection,
  Debug,
};
