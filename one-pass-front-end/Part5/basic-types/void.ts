// return type이 void로 추론됨
function returnVoid(message: string) {
  console.log(message);
  return;
}

const r = returnVoid('리턴이 없다.'); // r: void
// const rt: undefined = returnVoid('리턴이 없다.'); // error!

function returnVoid2(message: string): void {
  return undefined;
}
