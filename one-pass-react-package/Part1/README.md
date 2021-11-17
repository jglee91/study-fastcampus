# Part 1. React 기초

## CH01. React 맛보기

### 01. 강사 및 강의소개

- Toss증권 개발자
- `React` vs `Angular` vs `Vue` vs `Svelte`
- https://insights.stackoverflow.com/survey/2021
- React는 라이브러리 > 자유도↑
- Google appstore > [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=ko)
- Virtual DOM / JSX / Flux / Functional Programming...

### 02. DOM 다루기 Element 생성하기

- Document Object Model
- Vanilla JavaScript
- CodeSandBox
  ```js
  const rootElement = document.getElementById('root');
  const element = React.createElement('h1', { children: 'Hello, world!' });
  ReactDOM.render(element, rootElement);
  ```

### 03. JSX와 Babel, JSX 다루기

- JSX : JavaScript의 `확장 문법`
- Babel : JavaScript Compiler
  ```jsx
  const element = <h1 className="title">Hello, world!</h1>;
  ```
