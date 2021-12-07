# Part 1. React 기초

## CH03. React 공식문서로 디테일잡기 (고급)

### 01. Hooks 1

> https://ko.reactjs.org/docs/hooks-intro.html
>
> > Class의 `단점`을 보완하면서 라이프사이클 등과 관련된 함수를 `재사용` 가능토록 함

> https://ko.reactjs.org/docs/hooks-overview.html

> https://ko.reactjs.org/docs/hooks-state.html

- Hooks 등장 > Class의 단점 보완 / 재사용성 강화
- Hook 사용 규칙 > 최상위 / 함수형 컴포넌트 / custom Hook
- Class의 state > 훅을 먼저 배웠기에 고민 할 필요 X

### 02. Hooks 2

> https://ko.reactjs.org/docs/hooks-effects.html

- Effect가 업데이트 시마다 실행되는 이유?
  - class 메서드가 관련없는 로직들은 모아놓고, 관련이 있는 로직들은 여러개의 메서드로 나누어 놓는 경우가 있었다.
  - componentDidMount / componentDidUpdate / componentWillUnmount
  - 이에 대한 해결책으로 표현을 `하나로 합치고`, 버그를 `방지`하기 위해...
- useEffect > 데이터 fetch / 구독 / Dom 수정
- clean up > 구독과 구독해지를 한 공간에서
- dependency array > 필요한 변경시에만 effect 실행
