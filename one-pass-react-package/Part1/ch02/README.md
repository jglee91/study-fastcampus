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
