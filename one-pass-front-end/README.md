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

<br />

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

<br />

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

<br />

## CH 4. 웹에서 시작하기

### 01. Codepen.io 소개

### 02. 브라우저 스타일 초기화
  - https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.css

### 03. Emmet
  - html tag 요소 자동완성 기능

<br />

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

<br />

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