function error(message: string): never {
  throw new Error(message);
}

function fail() {
  // return type: never
  return error('failed');
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = 'hello';
if (typeof a !== 'string') {
  const b = a; // b: never
}

declare const c: string | number;
if (typeof c !== 'string') {
  const d = c; // d: number
}

// 조건부 타입
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
type ObjectIndexable = Indexable<{}>; // ObjectIndexable: never
// const e: Indexable<{}> = ''; // error!
