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

### 10. 이벤트 핸들러 써보기 1

- [Vanilla JS](https://www.w3schools.com/js/js_events.asp)
  - addEventListener
  - on{event}
- React.js

  - on{Event}

  ```jsx
  const rootElement = document.getElementById('root');

  const handleClick = () => alert('pressed');
  const element = (
    <button onClick={handleClick} onMouseOut={() => alert('bye')}>
      Press
    </button>
  );
  ReactDOM.render(element, rootElement);
  ```

### 11. 이벤트 핸들러 써보기 2

- 예제

  - 간단한 검색창 만들어보기
  - input / button
  - onChange / onClick + Global variable

  ```jsx
  const rootElement = document.getElementById('root');

  const state = {
    keyword: '',
    typing: false,
    result: '',
  };

  const App = () => {
    function handleChange(event) {
      setState({
        typing: true,
        keyword: event.target.value,
      });
    }

    function handleClick() {
      setState({
        typing: false,
        result: `We find results of ${state.keyword}`,
      });
    }

    return (
      <>
        <input onChange={handleChange} />
        <button onClick={handleClick}>search</button>
        <p>{state.typing ? `Looking for ${state.keyword}...` : state.result}</p>
      </>
    );
  };

  function setState(newState) {
    Object.assign(state, newState);
    render();
  }

  function render() {
    ReactDOM.render(<App />, rootElement);
  }

  render();
  ```

### 12. 중간 복습 2

- 리액트의 리랜더링 알아보기

  - Vanilla JS > 변경으로 인해 Element를 다시 그림
  - React > 변경된 부분만 다시 그림

- 리액트의 리랜더링 알아보기 2

  - 리액트의 element > 불변 객체
  - 변경 사항 반영 > 리액트에게 일임
  - 리액트의 비교 > Reconciliation
  - Virtual DOM > 비교시 활용

- 이벤트 핸들러 써보기

  - Vanilla JS > on{event} / addEventListener
  - 리액트 > on{Event}

- 이벤트 핸들러 써보기 2
  - Object.assign > 객체 내용 복사
  - 전역 변수 변경 > ReactDOM.render

### 13. 컴포넌트 상태 다루기

- DOM : 논리 트리
- 컴포넌트 : 엘리먼트의 집합
- 엘리먼트 : 요소
- 참고 - https://ko.reactjs.org/docs/rendering-elements.html

  ```jsx
  const rootElement = document.getElementById('root');

  const App = () => {
    const [keyword, setKeyword] = React.useState('');
    const [result, setResult] = React.useState('');
    const [typing, setTyping] = React.useState(false);

    function handleChange(event) {
      setKeyword(event.target.value);
      setTyping(true);
    }

    function handleClick() {
      setTyping(false);
      setResult(`We find results of ${result}`);
    }

    return (
      <>
        <input onChange={handleChange} />
        <button onClick={handleClick}>search</button>
        <p>{typing ? `Looking for ${keyword}...` : result}</p>
      </>
    );
  };

  ReactDOM.render(<App />, rootElement);
  ```

- 컴포넌트 > 엘리먼트의 집합
- useState > 상태값을 관리해주는 훅

### 14. 컴포넌트 사이드이펙트 다루기

- 리액트에서의 사이드이펙트 > `부수 효과`

  ```jsx
  // 아래 소스에서 keyword 초기 state값 조회가 오래 걸린다면?
  // 함수를 param으로 넘겨서 lazy initializing 처리를 할 수 있다!
  const App = () => {
    const [keyword, setKeyword] = React.useState(
      // localStorage.getItem('keyword')
      () => {
        console.log('initialize');
        return localStorage.getItem('keyword');
      }
    );
    const [result, setResult] = React.useState('');
    const [typing, setTyping] = React.useState(false);

    // 해당 부분은 사용자 UI 입력에 따라 매번 호출된다!
    console.log('render');

    React.useEffect(() => {
      // 두 번째 파라미터에 빈 배열을 입력하면 해당 컴포넌트 렌더시, 최초 한번만 실행된다!
      console.log('effect');
      localStorage.setItem('keyword', keyword);
    }, []);

    /*
    React.useEffect(() => {
      // 두 번째 파라미터에 변경값을 배열로 입력하면, 해당 값이 변경될 때 마다 아래 내용이 실행된다!
      console.log('effect');
      localStorage.setItem('keyword', keyword);
    }, [keyword, typing]);
    */

    function handleChange(event) {
      setKeyword(event.target.value);
      setTyping(true);
    }

    function handleClick() {
      setTyping(false);
      setResult(`We find results of ${result}`);
    }

    return (
      <>
        <input onChange={handleChange} />
        <button onClick={handleClick}>search</button>
        <p>{typing ? `Looking for ${keyword}...` : result}</p>
      </>
    );
  };
  ```

- 사이드 이펙트 > 부수 효과
- useState > lazy initialize
- useEffect > dependency array

### 15. 커스텀 훅 만들기

- 커스텀 훅 > use{Name}

  ```jsx
  React.useEffect(() => {
    // keyword가 변경될 때에도 result가 localStorage에 저장되는 현상 발생!
    localStorage.setItem('keyword', keyword);
    localStorage.setItem('result', result);
  }, [keyword, result]);

  /* -------------------------------------------------- */

  function useLocalStorage(itemName, value = '') {
    const [state, setState] = React.useState(() => {
      return localStorage.getItem(itemName) || value;
    });

    React.useEffect(() => {
      localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
  }

  const App = () => {
    const [keyword, setKeyword] = useLocalStorage('keyword');
    const [result, setResult] = useLocalStorage('result');
    const [typing, setTyping] = useLocalStorage('typing', false);

    // ...
  };
  ```

- 반복 > 함수로
- 훅들이 반복 > custom hook

### 16. Hook Flow 이해하기 1

- 훅의 호출 타이밍
- 간단 예제로 살펴보기

  ```jsx
  const rootElement = document.getElementById('root');

  const App = () => {
    console.log('App render start');

    const [show, setShow] = React.useState(() => {
      console.log('App useState');
      return false;
    });

    // side effect의 실행 시점은 각 component들의 render가 끝난 후이다.
    React.useEffect(() => {
      // dependency가 없으면, App component가 re-rendering 될 때마다 실행
      console.log('App useEffect, no deps');
    });
    React.useEffect(() => {
      // 빈 dependency라면, 최초 한번만 실행
      console.log('App useEffect, empty deps');
    }, []);
    React.useEffect(() => {
      // dependency의 값이 변경될 때마다 실행
      console.log('App useEffect, [show]');
    }, [show]);

    function handleClick() {
      setShow((prev) => !prev);
    }

    return (
      <>
        <button onClick={handleClick}>Search</button>
        {
          show ? (
            <input />
            <p></p>
          ) : null
        }
      </>
    );
  };

  ReactDom.render(<App />, rootElement);
  console.log('App render end');
  ```

- hook flow > hook들의 호출 타이밍
- useState > setState시 prev값이 주입됨

### 17. Hook Flow 이해하기 2

- useEffect > render가 끝난 뒤
- update시 > useEffect clean up / useEffect
- dependency array > 전달받은 값의 변화 있는 경우에만

  ```jsx
  const rootElement = document.getElementById('root');

  const Child = () => {
    console.log('Child render start');

    const [text, setText] = useState(() => {
      console.log('Child useState');
      return '';
    });

    // 호출 순서 : parent 렌더 > child 렌더 > child side-effect > parent side-effect
    React.useEffect(() => {
      console.log('Child useEffect, no deps');

      return () => {
        console.log('Child useEffect [Cleanup], no deps');
      };
    });
    React.useEffect(() => {
      console.log('Child useEffect, empty deps');

      return () => {
        console.log('Child useEffect [Cleanup], empty deps');
      };
    }, []);
    React.useEffect(() => {
      console.log('Child useEffect, [text]');

      return () => {
        console.log('Child useEffect [Cleanup], [text]');
      };
    }, [text]);

    function handleChange(event) {
      setText(event.target.value);
    }

    const element = (
      <>
        <input onChange={handleChange} />
        <p>{text}</p>
      </>
    );

    console.log('Child render end');
    return element;
  };

  const App = () => {
    // ...

    return (
      <>
        <button onClick={handleClick}>Search</button>
        {show ? <Child /> : null}
      </>
    );
  };

  ReactDom.render(<App />, rootElement);
  ```

### 18. 중간 복습 3

- 컴포넌트 상태 다루기
  - 컴포넌트 > 엘리먼트의 집합
  - useState > 상태값을 관리해주는 hook
- 컴포넌트 사이드 이펙트 다루기
  - 사이드 이펙트 > 부수 효과
  - useState > lazy initialize
  - useEffect > dependency array
- 커스텀 훅 만들기
  - 반복 > 함수로
  - 훅들이 반복 > custom Hook으로
- hook flow 이해하기
  - hook flow > hook들의 호출 타이밍
  - useState > setState시 prev값이 주입된다
- hook flow 이해하기2
  - useEffect > render가 끝난 뒤
  - update시 > useEffect clean up / useEffect
  - dependency array > 전달받은 값의 변화 있는 경우에만

### 19. 리액트 Element에 스타일 입히기

- className > 문자열
- style > 객체, camelCase, className보다 먼저 적용

### 20. Ref로 DOM 다루기

- ex) input element가 있고 화면이 뜨자마자 `focus`를 주고 싶다면?
  - [Vanilla JS] ?.focus();
- Vanilla JS > document.get~ / document.query~
- React > useRef / ref

### 21. Form 다루기 1

- 기본 Form - label, input, submit
- onSubmit > event.preventDefault()
- event.target.elements > console.dir(element)

### 22. Form 다루기 2

- `uncontrolled` vs `controlled`
- validation > onChange
- controlled > input의 value를 직접 관리
