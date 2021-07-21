# Part 2. Git을 활용한 버전관리

## CH 1. 버전관리

### 01. 개요(Git, GitHub)
- 버전관리의 필요성
  - 기존 프로젝트에 대해 지속적인 수정사항 발생
  - 다른 개발자와의 협업
- git 설치

### 02. 스타벅스 예제 GitHub 업로드(Push)
- vs code 에서 기본 단축키 : crtl + `
  ``` cmd
  $ git init // 왼쪽 하단에 master branch 생성
  $ git config --global core.autocrlf true // Mac에서는 input
  $ git config --global user.name '' // github 가입 ID로 입력
  $ git config --global user.email '' // github 가입 Email로 입력
  $ git config --list
  $ git status
  $ git add .
  $ git commit -m 'Start Project' // comment 입력
  $ git log

  // github으로 이동 후, New Repository
  // 생성 후, github 주소 복사

  $ git remote add origin  // 복사한 github 주소 입력
  $ git push origin master // origin에 master branch로 push

  // 인증단계를 거친 후 github upload가 진행됨
  // 생성했던 Github Repository로 이동 후 upload 잘 됐는지 확인
  ```
- core.autocrlf 옵션
- Windows 에서는 line ending(carriage return)으로 CR(\r)과 LF(\n)을 사용
- Unix 계열에서는 LF만 사용
- 이는 github merge마다 문제 발생의 소지가 있음
- core.eol 옵션을 통해 native, crlf, lf 로 설정 가능
  ``` cmd
  $ git config --global core.eol native
  ```
- core.autocrlf에는 아래와 같은 옵션으로 설정 간으
  - false(default) : 파일에 crlf, lf 관계없이 파일 그대로 checkin, checkout
  - true : text file을 obejct DB에 넣기전에 CRLF를 LF로 변경
  - input : LF을 line ending으로 사용
  - *.gitattributes* 파일을 통해서도 설정 가능하다!
  - 하지만.. git client로 egit을 사용하면 *.gitattributes* 를 읽지 못하므로 core.autocrlf 설정을 해주어야 한다! (참고로 egit은 간단하게 Eclise용 git 정도로 이해하면 되겠다)
    ``` txt
    // git 텍스트 파일의 속성 지정
    # Auto detect text files and perform LF normalization
    *         text = auto

    *.cs      text diff=csharp
    *.java    text diff=java
    *.html    text diff=html
    *.css     text
    *.js      text
    *.sql     text

    *.csproj  text merge=union
    *.sln     text merge=union eol=crlf

    *.docx    diff=astextplain
    *.DOCX    diff=astextplain

    # absolute paths are ok, as are globs
    /**/postinst* text eol-lf

    # paths that don't start with / are treated relative to the .gitattributes folder
    relative/path/*.txt text eol-lf
    ```
