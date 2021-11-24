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
  const rootElement = document.getElementById('root');
  const element = <h1 className="title">Hello, world!</h1>;
  ReactDOM.render(element, rootElement);
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
  ReactDOM.render(element, rootElement);
  ```
  ```jsx
  const element = (
    <>
      <h1>Hi</h1>
      <h3>Bye</h3>
      <h5>Children</h5>
    </>
  );
  ReactDOM.render(element, rootElement);
  ```

### 05. Element 찍어내기

- React Component로 사용하려면 PascalCase로 사용할 것

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
  ReactDOM.render(element, rootElement);
  ```

### 06. JS와 JSX 섞어쓰기

- js, jsx interpolation
  ```jsx
  const rootElement = document.getElementById('root');
  const Text = ({ text }) => {
    if (text.charAt(0) === text.charAt(0).toUpperCase()) {
      return <h1>{text}</h1>;
    } else {
      return <h3>{text}</h3>;
    }
  };
  const element = (
    <>
      <Text text="Text" />
      <Text text="text" />
    </>
  );
  ReactDOM.render(element, rootElement);
  ```
  ```jsx
  const rootElement = document.getElementById('root');
  function Number({ number, selected }) {
    return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
  }
  const element = (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        <Number number={number} selected={number === 3} />
      ))}
    </>
  );
  ReactDOM.render(element, rootElement);
  ```

### 07. 중간 복습 1

- DOM 다루기 / Element 생성하기 > CodeSandBox, Vanilla js Dom, CDN, React/React-dom
- JSX와 Babel / JSX 다루기 > React.createElement 표현식, JavaScript Compiler, spread 연산자
- 멀티 Element 생성하기 > React.Fragment or <></>
- Element 찍어내기 > 재사용 가능한 Element, Upper case, children 제한 없음
- JS와 JSX 섞어쓰기 > Interpolation

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <div id="root"></div>
      <script type="text/babel">
        const rootElement = document.getElementById('root');

        function Number({ number, selected }) {
          return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
        }

        const element = (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <Number
                className="title"
                key={number}
                number={number}
                selected={number === 3}
              />
            ))}
          </>
        );

        ReactDOM.render(element, rootElement);
      </script>
      <style>
        .title {
          color: red;
        }
      </style>
    </body>
  </html>
  ```

### 08. 리액트의 리랜더링 알아보기 1

- Vanilla JS > 변경으로 인해 Element를 다시 그림

  ```jsx
  const rootElement = document.getElementById('root');
  function random() {
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    const element = `
      <button>${number}</button>
    `;
    rootElement.innerHTML = element;
  }

  // root element도 영향을 받으며, button에 focusing을 하면 1초마다 사라진다
  // (element를 매번 다시 생성하기 때문)
  setInterval(random, 1000);
  ```

- React > 변경된 부분만 다시 그림

  ```jsx
  const rootElement = document.getElementById('root');
  function random() {
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    const element = <button>{number}</button>;
    ReactDOM.render(element, rootElement);
  }

  // root element에 영향을 주지 않는 상태에서 button의 text만 교체된다
  // (button element의 focusing도 계속 유지된 상태)
  setInterval(random, 1000);
  ```

- reflow, repaint에 대해 효과적
  - html 렌더링 과정 관련, [링크](https://velog.io/@young_pallete/Reflow-Repaint%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)

### 09. 리액트의 리랜더링 알아보기 2

- react 공식문서 참조, [링크](https://ko.reactjs.org/docs/reconciliation.html)
- Virtual DOM
- Diffing Algorithm
