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
  - 손쉬운 배포 시스템 **Vercel**
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
        "editor.guides.bracketPairs": "active"
      }
      ```

### Part 2. Next.js 시작하기

#### Ch 01. Next.js 기본 기능

1. Next.js 기본 1(프레임워크 구조)

- commerce example 확인
  ```bash
  $ git clone https://github.com/vercel/commerce
  ```

2. Next.js 기본 2(Data Fetching)

- SSR

  - getServerSideProps

- CSR

  - 기존 react에서 하던 방식 그대로...

- SSG

  - getStaticProps (with getStaticPaths)
  - local에서는 SSR처럼 동작함
  - build하고 실행하면 정적상태로 반환됨

- ISR
  - 특정 주기로 정적인 사이트를 그림
  - getStaticProps with revalidate

3. Next.js 기본 3(Layouts - Pages - Image)

- Pre-rendering -> Hydration
- SSG cs SSR
  - SSG : 빌드 타임에 pre-render
  - SSR : 요청 타임에 pre-render
- Layout
  - pages/\_app.js에서 활용(props -> Component, pageProps)
- Image
  - Next.js가 제공하는 최적화 Image Component
    - Improved Performance
    - Visual Stability(CLS 방지)
    - Faster Page Loads(viewport 진입시 로드 / blur 처리)
    - Asset Flexibility(리사이징)
  - sample
    ```bash
    $ npx create-next-app --example image-component image-app
    ```

4. 정리 1

- Next.js 소개 및 환경 설정
- Next.js 로 만든 사례 둘러보기
- Next.js 프로임워크 구조 살펴보기
- Data Fetching
- Layout / Pages / Image

5. Next.js 기본 4(Routing)

- Next.js의 Router는 file-system 기반
- `pages/` or `src/pages/`

  - 위 둘 다 있으면 `pages/` 의 우선순위가 더 높음

- 절대경로 설정

  ```json
  { "compilerOptions": { "baseUrl": "src" } }
  ```

- slug
  - wildcard처럼 동작
    - pages/category/[slug].js => /category/:slug
    - pages/[username]/info.js => /:username/info
    - pages/cart/[...slug].js => /cart/\*
  - 동일 형식일 경우, 명시적 디렉토리/파일명이 우선
    - ex) /category/info => pages/category/[slug].js가 동작

6. Next.js 기본 5(Shallow Routing)

- Dynamic Routes

  - pages/category/[slug].js

    ```js
    import { useRouter } from 'next/router';

    // ...

    const router = useRouter();
    const { slug } = router.query; // /category/food
    const { slug, from } = router.query; // /category/food?from=event
    ```

- 다중 슬러그

  - pages/[username]/[info].js
    ```js
    const { username, info } = router.query;
    ```

- optional 슬러그

  - pages/cart/[...slug].js : /cart로 접근시 404 error
  - pages/cart/[[.slug]].js : /cart로 접근시 200 ok

- Shallow Routing
  - getServerSideProps / getStaticProps 등을 재실행하지 않고 현재 상태를 유지한 채로 url을 바꾸는 방법
  - URL을 바꾸는 3가지 방식
    - location.replace(url) : state 유지 X (re-render)
    - router.push(url) : state 유지 O / date fetching O
    - router.push(url, as, { shallow: true }) : state 유지 O / date fetching X

7. Next.js 기본 6(API Routes)

- Next.js 가 제공하는 API Routes

  - pages/api/\*

- API Middlewares

  - req.cookie, req.query, ...
  - cors

- Response
  - res.status
  - res.json
  - res.redirect
  - res.send

8. 정리 2
