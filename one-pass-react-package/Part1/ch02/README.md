# Part 1. React 기초

## CH02. React 공식문서로 디테일잡기 (초급)

### 01. 공식문서를 보는 이유와 방법

- 이유
  - `라이브러리`는 만든 사람이 있다.
  - 그들이 만든 `목적`과 도구의 `사용법`을 정리해뒀다.
  - 책에서도 거의 `공식문서`의 내용을 담는다.
- 방법
  - MDN / React Document
  - 제각각의 흐름이 있다.
  - 바로 `써보기` vs `이해` 해보기
  - `토픽별`로 훑어보며 `이해`해본다.
  - 연습 / 반복

### 02. 환경 설정

- Visual Studio Code
  - `JavaScript`로 만들어진 IDE
  - IDE를 풍성하게 해주는 `여러기능`들이 있음
- 리액트 프로젝트 생성 - https://ko.reactjs.org/docs/create-a-new-react-app.html
  - Create React App - node.js 설치 필요
  - Next.js
  - Gatsby
  - 기타 툴체인
- Node 설치
  - npm가 자동 설치됨
  - npm이 설치되면 npx도 자동 설치됨
  ```bash
  $ npx create-react-app my-app #my-app 이라는 react 프로젝트 생성
  ```

### 03. JSX

- https://ko.reactjs.org/docs/introducing-jsx.html
  - JavaScript를 확장한 문법
- JSX > React.createElement 간편 표현식

### 04. Props

- https://ko.reactjs.org/docs/components-and-props.html
- cf) extension - react es7 (snippet)
- Props > 컴포넌트에 전달되는 단일 객체
- 순수함수처럼 동작 > Props 자체를 수정해서는 안됨
- 컴포넌트 확장 > 여러 컴포넌트를 모아서
- 컴포넌트 추출 > 여러 곳에서 사용되거나 / 복잡한 경우

### 05. State

- https://ko.reactjs.org/docs/state-and-lifecycle.html
- cf) eslint, indent-rainbow, npm, prettier, rainbow bracket, icon, ...
- 컴포넌트 내의 상태 > 자신의 출력값을 변경
- Class component > State LifeCycle
- Functional component / 훅으로 관리
- 유의사항 > 직접 수정 X / 비동기적일 수 있음

### 06. 컴포넌트 생명주기

> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- constructor > state 초기화 및 메서드 바인딩
- componentDidMount > Dom 노드 초기화 및 데이터 fetch
- componentWillUnmount > 타이머 제거 및 요청 취소 및 구독 해제
- Functional Component > hook으로 대부분 구현 가능

### 07. 이벤트

> https://ko.reactjs.org/docs/events.html

- 합성이벤트(SyntheticEvent) - 브라우저마다 이벤트 동작이 조금씩 다를 수 있음
- on{Event}Capture - 자식보다 부모가 먼저 event 실행이 필요할 때
- 합성 이벤트 > 네이티브 인터페이스와 유사하지만 직접 대응되지 않음
- Bubble / Capture > `Capture > target > Bubble`
- return false > `e.preventDefault()`를 수동으로 명시해주어야 함

### 08. 조건부 렌더링

> https://ko.reactjs.org/docs/conditional-rendering.html

- if > if (condition) { return A; } else { return B; }
- && > condition && A, `falsy 주의`
- 삼항연산자 > condition ? A : B
- 아예 안그리고 싶은 경우 > return null;

### 09. List

> https://ko.reactjs.org/docs/lists-and-keys.html

- map > 배열의 개별 요소를 순회
- default key > 안주면 react는 index를 쓴다(워닝 O)
- 고유성 > 형제 사이에서만 고유하면 됨
- key props > key는 props로 넘어가지 않음

### 10. Form

> https://ko.reactjs.org/docs/forms.html

> https://ko.reactjs.org/docs/uncontrolled-components.html

- Controlled Component > input의 value를 state로 관리
- 다중 입력 > event.target.name
- Uncontrolled Component > form element 자체의 내부 상태 활용
- defaultValue, ref > 기본값 / value 확인

### 11. 복습

- 공식문서를 보는 이유와 방법
  - 공식문서 > 라이브러리 설명서
  - 공식문서 읽기 > 리액트로 시작 후 반복 숙달
- 환결 설정
  - vscode > IDE
  - node, npm, npx > create-react-app
- JSX
  - JSX > React.createElement 간편 표현식
- Props
  - Props > 컴포넌트에 전달되는 단일 객체
  - 순수함수처럼 동작 > Props 자체를 수정해서는 안됨
  - 컴포넌트 합성 > 여러 컴포넌트를 모아서
  - 컴포넌트 추출 > 여러곳에서 사용되거나 / 복잡한 경우
- State
  - 컴포넌트 내의 상태 > 자신의 출력값을 변경
  - Class component > State LifeCycle
  - Functional component > 훅으로 관리
  - 유의사항 > 직접 수정 X / 비동기적일 수 있음
- 컴포넌트 생명주기
  - constructure > state 초기화 및 메서드 바인딩
  - componentDidMount > Dom 노드 초기화 및 데이터 fetch
  - componentWillUnmount > 타이머 제거 및 요청 취소 및 구독 해제
  - Functional Component > hook으로 대부분 구현 가능
- 이벤트
  - 합성 이벤트 > 인터페이스는 같지만 직접 대응되지 않음
  - Bubble / Capture > Capture > target > Bubble
  - return false > e.preventDefault() 해줘야 함
- 조건부 렌더링
  - if > if(condition){return A} else {return B}
  - && > condition && A, falsy 주의
  - 삼항연산자 > condition ? A : B
  - 아예 안그리고 싶은 경우 > return null;
- List
  - map > 배열의 개별 요소를 순회
  - default key > 안주면 react는 index를 쓴다(워닝 O)
  - 고유성 > 형제 사이에서만 고유하면 됨
  - key props > key는 props로 넘어가지 않음
- Form
  - Controlled Component > input의 value를 state로 관리
  - 다중 입력 > event.target.name
  - Uncontrolled Component > form element 자체의 내부 상태 활용
  - defaultValue, ref > 기본값 / value 확인
