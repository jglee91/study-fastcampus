# Part 3. JavaScript Essentials

## CH 1. Node.js

### 01. 개요 및 설치
- Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
- (Window) nvm-windows 검색 후 다운로드 후 설치
  ``` bash
  $ nvm --version
  ```

### 02. NVM 사용법
``` bash
$ nvm ls  # 설치된 node js 버전 목록 표시
$ nvm install ${version}  # 지정 버전으로 node js 설치
$ nvm use ${version}  # 지정 버전으로 사용 설정
$ node --version
$ nvm uninstall ${version}
$ nvm --help
```

### 03. NPM 개요(1)
- Node Package Manager
- Module 단위의 프로젝트 관리

### 04. NPM 개요(2)
``` bash
$ npm init -y  # 실행 후 package.json 파일이 생성됨
$ npm install parcel-bundler -D  # 개발용 의존성 패키지 설치
$ npm install lodash  # 일반 의존성 패키지 설치

# npm install 실행시 package-lock.json이 생성됨(내부적으로 자동 관리되는 파일)
```

### 05. 개발 서버 실행과 빌드
``` bash
# package.json에 "dev": "parcel index.html" 입력
$ npm run dev

# package.json에 "build": "parcel build index.html" 입력
$ npm run build
```

### 06. 유의적 버전(SemVer)
- Semantic Versioning
- Major.Minor.Patch
  ``` bash
  $ node --version
  $ npm --version

  # ^ : Major 버전 안에서 가장 최신 버전으로 업데이트 가능
  $ npm info lodash
  # 강제 버전으로 re-install
  $ npm install lodash@4.17.20
  # major 버전이 바뀌지 않는 한 업데이트가 일어나지 않음
  $ npm update lodash
  ```

### 07. NPM 프로젝트의 버전관리(.gitignore)
- .cache, dist, node_modules 디렉토리 삭제
- npm install 명령을 통해 node_modules 디렉토리가 생성됨
- .gitignore 생성
  ``` plaintext
  .cache/
  dist/
  node_modules/
  ```
  ``` bash
  $ git status
  $ git add .
  $ git commit -m '${message}'
  $ git log
  $ git remote add origin ${github url}
  $ git push origin master
  # .gitignore에 명시된 디렉토리는 github에 올라가지 않음
  ```

---

## CH 2. JS 시작하기

### 01. 개요(ECMAScript) 및 프로젝트 초기화
- ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
- ES5와 ES6 간 차이가 많이 있음
  - 구버전 브라우저는 ES5까지만 지원하는 경우가 있음
  - cf) Babel

``` bash
$ npm init -y
$ npm i parcel-bundler -D
```

### 02. 데이터 타입 확인
- code convention

### 03. 산술, 할당 연산자
- const, let

### 09. 변수 유효범위
- var, let, const
- var는 함수레벨 / let, const는 블록레벨
- var를 권장하지 않는 이유는 함수레벨로 인해 개발자 의도와 달리 메모리 누수가 발생할 수 있기 때문

### 10. 형 변환
- Truthy(참 같은 값)
  - true, {}, [], 1, 2, 'false', -12, '3.14', ...
- Falsy(거짓 같은 값)
  - false, '', null, undefined, 0, -0, NaN