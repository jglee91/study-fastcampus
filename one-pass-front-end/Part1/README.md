# 한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.
> https://heropy.blog

<br />

# Part 1. HTML/CSS/JS로 만드는 스타벅스 웹사이트

## CH 1. 개요

### 04. 웹 표준과 브라우저
- Cross Browsing

### 05. 웹에서 사용하는 이미지
- bitmap
  - jpg(jpeg): 손실압축, 압축률↑, 24bit
  - png: 비손실압축, 비교적 용량↑, alpha channel 지원, 8/24bit
  - gif: 비손실압축, 여러장의 이미지 저장(움짤, 애니메이션), 8bit
  - webp: jpg, png, fig 모두 대체, 구글이 개발, 완벽한 손실/비손실압축, 애니메이션지원, alpha channel 지원
    - 최신 format으로 browser 하위호환성 체크 필요

- vector
  - svg: html, xml 기반의 vector graphic을 표현, 해상도의 영향에서 자유로움, css/js로 제어 가능

### 07. 오픈 소스 라이선스
- Free License
  - Apache License
  - MIS License
  - BSD License
  - Beerware

---

## CH 2. VS Code

### 03. 한글화
- vs code > activity bar > extensions
  - korean 검색 후 'korean language pack...' 설치

### 04. 정리된 코드 만들기(Beautify)
- vs code > activity bar > extensions
  - beautify 검색 후 설치
  - 기능 기여도 tab에서 명령의 첫번째 복사
  - ctrl + shift + p 에서 '바로 가기 키' 열기 선택
  - 복사한 텍스트 붙여넣은 후 'Beautify Selection'에 단축키 지정
  - 단축키 사용하여 정상 적용되는지 확인

### 05. 태그 이름을 한번에 변경(Auto Rename Tage)
- vs code > activity bar > etensions
  - auto 검색 후 'auto rename tag' 설치
  - 열림 tag 변경시 닫힘 tag 자동 변경

---

## CH 3. 무작정 시작하기

### 01. Doctype(DTD)
- HTML1
- HTML2
- HTML3
- HTML4
- XHTML
  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML ...">
  ```
- HTML5 (표준)
  ``` html
  <!DOCTYPE html>
  ```

---

## CH 4. 웹에서 시작하기

### 01. Codepen.io 소개

### 02. 브라우저 스타일 초기화
- https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.css

### 03. Emmet
- html tag 요소 자동완성 기능

---

## CH 5. HTML 개요

### 03. 빈 태그
- HTML 1/2/3/4/5
  - <태그>
- XHTML/HTML5
  - <태그 />
- 되도록이면 '엄격하게' 작성

### 04. 글자와 상자
- 요소가 화면에 출력되는 특성
  - inline 요소
    - 좌 > 우 수평으로 쌓임
    - width, height 지정 불가
    - 위/아래 여백은 사용 불가(margin left/right, padding left/right X)
    - inline 요소 내부에 block 요소를 넣으면 inline 속성이 무시됨
  - block 요소
    - 위 > 아래 수직으로 쌓임
    - width, height 지정 가능
    - 위/아래/좌/우 여백 모두 사용가능
    - block 요소 내부에 inline, block 모두 사용가능

---

## CH 6. HTML 핵심 정리

### 02. 핵심 요소 출력 연습
- html-core-tags

### 04. 전역 속성
- title
- style
- id, class (selector)
- data
  ``` html
  <div data-fruit-name="apple">사과</div>
  <div data-fruit-name="banana">바나나</div>
  ```
  ``` js
  const els = document.querySelectorAll('div');
  els.forEach(el => {
    console.log(el.dataset.fruitName);
  });
  ```

---

## CH 7. CSS 개요

### 03. 선택자_기본
- 전체 선택자
  - *
- 태그 선택자
  - div, li, ...
- 클래스 선택자
  - .class123
- 아이디 선택자
  - #id123

### 04. 선택자_복합
- 일치 선택자
  - span.orange
- 자식 선택자
  - ul > .orange
- 하위(후손) 선택자
  - div .orange
- 인접 형제 선택자
  - .orange + li
- 일반 형제 선택자
  - .orange ~ li

### 05. 선택자_가상 클래스 (1)
- :hover
- :active
- :focus
- tabindex 속성을 통해 focus 요소로 만들수 있음
  - -1이 아닌 다른값을 넣는 것은 논리적 흐름을 방해하므로 권장하지 않음

### 06. 선택자_가상 클래스 (2)
- first child
  - .fruits span:first-child
- last child
  - .fruits h3:last-child
- nth child
  - .fruits *:nth-child(2n + 1)
- not
  - .fruits *:not(span)

### 07. 선택자_가상 요소
- ::before, ::after
  - content 속성과 함께 사용

### 08. 속성 선택자
- [disabled]
- [type], [type="password"]

### 10. 선택자 우선순위
- inline style 방식은 되도록 지양
- !important는 되도록 쓰지말자 (정말 필요할때만 쓰자)

---

## CH 8. CSS 속성

### 01. 개요
- 박스 모델
- 글꼴, 문자
- 배경
- 배치
- 플렉스(정렬)
- 전환
- 변환
- 띄움
- 애니메이션
- 그리드
- 다단
- 필터: blur, grayscale, reverse

### 02. 너비(width, height)
- width, height
- max-width, max-height
- min-width, min-height

### 03. CSS 단위
- px
- %
- em, rem: font-size 기준
- vw, vh: viewport 기준

### 04. 외부 여백(margin)
- 단축속성
- top, right, bottom, left 순서

### 05. 내부 여백(padding)
- 단축속성
- top, right, bottom, left 순서

### 06. 테두리 선(border)과 색상 표현
- border: 선-두께(border-width) 선-종류(border-style) 선-색상(border-color);

### 07. 모서리 둥글게(border-radius)
- border-radius
- 왼쪽 상단부터 시계방향 순서

### 08. 크기 계산(box-sizing)
- 요소의 크기 계산 기준을 지정
- content-box (default)
- border-box

### 09. 넘침 제어(overflow)
- overflow-x, overflow-y
  - visible (default)
  - hidden
  - auto

### 10. 출력 특성(display)
- block
- inline
- inline-block
- flex: 1차원 layout
- grid: 2차원 layout
- none
- table, table-row, table-cell, ...

### 11. 투명도
- opacity - 0 ~ 1

### 12. 글꼴
- font-style
- font-weight: 400(default), 100 ~ 900
- font-size: 16px(default)
- line-height: 1(default), (px, %) // line-height 내의 요소는 가운데 정렬되려는 특성이 있음
- font-family: 글꼴1, "글꼴2", ... 글꼴계열;

### 13. 문자
- color: rgb(0,0,0)(default)
- text-align: left(default)
- text-decoration: none, underline, line-through
- text-indent: 0(default)

### 14. 배경
- background-color: transparent(default)
- background-image: none(default), url(" path ")
- background-repeat: repeat(default)
- background-position
  - top, bottom, left, right, center
  - px, em, rem, ...
- background-size: auto(default)
- background-attachment: scroll(default) // fixed - parallax 구현에 사용

### 15. 배치 (1)
- position
  - static(default, 기준없음), relative(자기자신 기준), absolute(부모 기준), fixed(뷰포트 기준)
  - top, bottom, left, right, z-index
  - absolute, fixed일 경우, 해당 요소는 자동으로 display 속성이 block 으로 변경됨

### 16. 배치 (2)
- 요소 쌓임 순서(stack order)
  1. 요소에 position 속성 값 기준(static 제외)
  2. z-index 속성의 숫자 값
  3. html 다음 구조

### 17. 배치 (3)
- z-index 값은 1부터 늘려가면서 사용(999999 처럼 높여서 쓰지말자)
- position이 absolute, fixed가 적용된 요소는 display block 속성이 자동세팅됨

### 18. 플렉스(정렬) Container (1)
- 플렉스: 1차원 레이아웃
- flex container
  - display
  - flex-flow, flex-direction, flex-wrap
  - justify-content
  - align-content
  - align-items
- flex items
  - order
  - flex, flex-grow, flex-shrink, flex-basis
  - align-self
  
### 19. 플렉스(정렬) Container (2)
- flex-direction
  - 정렬 순서
  - row(default), column, row-revers, column-reverse
- flex-wrap
  - 줄바꿈 처리
  - nowrap(default), wrap
- justify-content
  - 주 축의 정렬 방법
  - flex-start(default), flex-end, center
- align-content
  - 교차 축의 여러 줄 정렬 방법
  - stretch(default), flex-start, flex-end, center
- align-items
  - 교차 축의 한 줄 정렬 방법
  - stretch(default), flex-start, flex-end, center

### 20. 플렉스(정렬) items
- order
  - flex item의 순서
  - 0(default), 숫자
- flex-grow
  - flex item의 증가 너비 비율
  - 0(default), 숫자
- flex-shrink
  - flex item의 감소 너비 비율
  - 1(default), 숫자
- flex-basis
  - flex item의 공간 배분 전 기본 너비
  - auto(default), 단위(px, em, rem, ...)

### 21. 전환
- transition
  - 요소의 전환효과를 지정하는 단축 속성
  - transition-property, transition-duration(필수), transition-timing-function, transition-delay
- transition-property
  - 전환 효과를 사용할 속성 이름을 지정
  - all(default), 속성이름(width, background-color, ...)
- transition-duration
  - 전환 효과의 지속시간을 지정
  - 0s, 지속시간(초 단위)
- transition-timing-function
  - 전환 효과의 타이밍 함수를 지정
  - ease(default), linear, ease-in, ease-out, ease-in-out
  - easing function
- transition-delay
  - 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
  - 0s(default), 시간

### 22. 변환 (1)
- transform
  - 요소의 변환 효과
  - 원근법 이동 크기 회전 기울임;
- 2D 변환 함수
  - translate(x, y)
  - translateX(x)
  - translateY(y)
  - scale(x, y)
  - rotate(degree)
  - skewX(x)
  - skewY(y)
- 3D 변환 함수
  - rotateX(x)
  - rotateY(y)
  - perspective(n) // 원근법 함수는 제일 앞에 작성해야 함

### 23. 변환 (2)
- perspective
  - 하위 요소를 관찰하는 원근 거리를 지정
    |속성/함수|적용 대상|기준점 설정|
    |---|---|---|
    |perspective: 600px;|관찰 대상의 부모|perspective-origin|
    |transform: perspective(600px)|관찰 대상|transform-origin|
- backface-visibility
  - 3D 변환으로 회전된 요소의 뒷면 숨김 여부
  - visible(default), hidden

### 24. Overwatch 캐릭터 선택 예제 (1)

### 25. Overwatch 캐릭터 선택 예제 (2)

---

## CH 9. JS 선행

### 01. 개요
- 표기법
  - dash-case(kebab-case)
  - snake_case
  - camelCase
  - PascalCase
- zero-based numbering
- 주석(comment)

### 02. 데이터 종류
- String, Number, Boolean, Undefined, Null, Object, Array, ...

### 03. 변수, 예약어
- 변수: var, let, const
- 예약어: let, const, this, if, break, ...

### 04. 함수
- function, return, parameters, arguments
- 기명함수, 익명함수
- method(객체 데이터)

### 05. 조건문
- if, else

### 06. DOM API (1)
- Document Object Model
- Aplication Programming Interface

### 07. DOM API (2)
- 유사 배열

### 08. 메소드 체이닝

### 09. 질의응답

---

## CH 10. 스타벅스 예제
> https://github.com/ParkYoungWoong/starbucks-vanilla-app

### 01. 시작하기 - 프로젝트 시작, 스타일 초기화, 파비콘
- favicon.icon
- favicon.png

### 02. 시작하기 - 오픈그래프와 트위터 카드
- Open Graph protocol
  - 웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정
  - meta 태그를 활용하여 지정
    ``` xml
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Starbucks" />
    ...
    ```
- Twitter Cards
  - 웹페이지가 트위터로 공유될 때 ...
    ``` xml
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:site" content="Starbucks" />
    ...
    ```

### 03. 시작하기 - Google Fonts
- 브라우저별로 기본 font가 다름
- https://fonts.google.com/
- font 사용시 license를 꼭 확인할 것!!

### 04. 시작하기 - Google Material Icons

### 05. 헤더와 드롭다운 메뉴 - 로고
- 로고, 서브메뉴, 메인메뉴
- inline 속성 element의 baseline

### 06. 헤더와 드롭다운 메뉴 - 서브 메뉴
- URL hash
  - css id 선택자를 이용해 페이지 내 특정 위치로 이동 가능
  - \# 기호

### 07. 헤더와 드롭다운 메뉴 - 검색

### 08. 헤더와 드롭다운 메뉴 - 메인 메뉴 (1)

### 09. 헤더와 드롭다운 메뉴 - 메인 메뉴 (2)
- ul 태그가 중첩되어 있으므로 자식 선택자(>) 사용

### 10. 헤더와 드롭다운 메뉴 - BEM
- BEM(Block Element Modifier)
  - HTML 클래스 속성의 작명법
  - 요소__일부분
  - 요소--상태

### 11. 헤더와 드롭다운 메뉴 - 전역 배지(GSAP) (1)
- lodash js lib
### 12. 헤더와 드롭다운 메뉴 - 전역 배지(GSAP) (2)
- throttle
- gsap js lib

### 13. 순차적 애니메이션 - 전역 버튼 스타일 (1)

### 14. 순차적 애니메이션 - 전역 버튼 스타일 (2)


### 15. 순차적 애니메이션 - 순차적으로 요소 보이기

### 16. 요소 슬라이드 - 공지사항

### 17. 요소 슬라이드 - 수직 슬라이드(Swiper)
- swiper js lib
- css, js 필요
  ``` html
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        ...
      </div>
    </div>
  </div>
  ```

### 18. 요소 슬라이드 - 요소 가운데 배치
- css calc
- 화면 확대/축소와 관계없이 가운데 정렬
  - left 50% 스타일 적용 후, margin-left 값을 부모 너비의 50%만큼 -로 처리(right 스타일을 썼다면 margin-right)

### 19. 요소 슬라이드 - 프로모션 이미지 슬라이드(1)
- swiper pagination
- swiper navigation

### 20. 요소 슬라이드 - 프로모션 이미지 슬라이드(2)

### 21. 요소 슬라이드 - 슬라이드 영역 토글


### 22. 유튜브 영상 배경 - 리워즈

### 23. 유튜브 영상 배경 - Youtube iframe API (1)
  ``` html
  <div class="container">
    <div class="item"></div>
  </div>
  ```
  ``` css
  .container {
    width: 100px;
    background-color: royalblue;
  }
  /*
    이렇게 지정하면 상대적인 값으로 인해
    container element가 16:9 비율로 설정된다
    (일반적인 영상화면 비율)
  */
  .container .item {
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }
  ```

### 24. 유튜브 영상 배경 - Youtube iframe API (2)
- youtube iframe api

### 25. 유튜브 영상 배경 - 반복 애니메이션
- gsap easing

### 26. 고정 이미지 배경
- css parallax
  - background-attachment: fixed;

### 27. 3D 애니메이션

### 28. 스크롤 위치 계산 애니메이션 (1)
- scrollMagic js lib

### 29. 스크롤 위치 계산 애니메이션 (2)

### 30. 다중 요소 슬라이드

### 31. 푸터
- html entities
  - &copy;, &lt;, &gt;, ...
- img 요소가 display:block, margin:0 auto 인 경우, width 속성이 없어도 가운데 정렬이 가능
  - browser가 img너비를 계산해서 알고있기 때문

### 32. 페이지 상단으로 이동 (ScrollTo)
