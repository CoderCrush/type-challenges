const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// type Awaited<T> = T extends Promise<infer V> ? V : T
type AwaitedArray<T> = T extends [infer F, ...infer R] ? [Awaited<F>, ...AwaitedArray<R>] : Awaited<T>
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<AwaitedArray<T>>

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)

export { }