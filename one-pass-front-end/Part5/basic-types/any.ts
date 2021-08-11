function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');
any1.toString(); // 자동완성은 지원하지 않지만, type 에러는 발생하지 않음

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a = obj.num; // a: any
  const b = a + 1; // b: any
  return b;
}
const c = leakingAny({ num: 0 }); // c: any
c.indexOf('0');
