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

### 04. 멀티 Element 생성하기

- Fragment : 부모로써 감싸는 역할
  ```jsx
  const rootElement = document.getElementById('root');
  const element = (
    <React.Fragment
      className="box"
      children = {[
        React.createElement('h1', null, 'Hi'),
        React.createElement('h3', null, 'Bye'),
        React.createElement('h5', null, 'Children'),
      }]
    />
  );
  ```
  ```jsx
  const element = (
    <>
      <h1>Hi</h1>
      <h3>Bye</h3>
      <h5>Children</h5>
    </>
  );
  ```

### 05. Element 찍어내기

- React Component로 사용하려면 Pascal case로 사용할 것

  ```jsx
  const rootElement = document.getElementById('root');
  const Paint = ({ title, description, children }) => (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {children}
    </>
  );

  const element = (
    <>
      <Paint title="Good" description="good">
        <span>Hi</span>
      </Paint>
      <Paint title="Bad" description="bad" />
      <Paint title="So so" description="so so" />
    </>
  );
  ```
