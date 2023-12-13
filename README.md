# Study Fast-campus

## Next.js 완전 정복 : 확장성 높은 커머스 서비스 구축하기

### Part 1. 오리엔테이션

#### Ch 01. 오리엔테이션
- (Do) Next.js
- (Do) 웹서비스를 만드는 방법
- (Do) 프론트엔드 개발자에게 도움이 될 꿀팁
- (Don't) React에 대한 기초 지식

#### Ch 02. Next.js 소개
1. Next.js 소개 및 도구 - 환경설정
- Next.js 란?
  - 규모가 있는 서비스 구조 설계
  - 개발환경 / 코드 분할 / 파일 기반 구조
  - SEO
  - FE에 필요한 간단한 API 구성
  - 손쉬운 배포 시스템 __Vercel__
- 환경설정
  - node
  - yarn
  - vscode
- sample
  ```bash
  $ npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"
  $ cd nextjs-blog
  $ npm run dev
  ```

2. Next.js 로 만드는 사례 둘러보기(showcase - examples)
- Wappalyzer
- https://nextjs.org/showcase
- https://nextjs.org/examples
- vscode extension
  - ES7+ React/Redux/React-Native snippets
  - ESLint
  - Prettier
  - [Deprecated] Bracket Pair Colorizer 2
    - vscode default feature로 변경
      ```json
      // settings.json
      {
        "editor.bracketPairColorization.enabled": true,
        "editor.guides.bracketPairs":"active"
      }
      ```
