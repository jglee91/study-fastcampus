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