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
  $ git init # 왼쪽 하단에 master branch 생성
  $ git config --global core.autocrlf true # Mac에서는 input
  $ git config --global user.name '' # github 가입 ID로 입력
  $ git config --global user.email '' # github 가입 Email로 입력
  $ git config --list
  $ git status
  $ git add .
  $ git commit -m 'Start Project' # comment 입력
  $ git log

  # github으로 이동 후, New Repository
  # 생성 후, github 주소 복사

  $ git remote add origin  # 복사한 github 주소 입력
  $ git push origin master # origin에 master branch로 push

  # 인증단계를 거친 후 github upload가 진행됨
  # 생성했던 Github Repository로 이동 후 upload 잘 됐는지 확인
  ```
- core.autocrlf 옵션
  - Windows 에서는 line ending으로 CR(Carriage Return, \r)과 LF(Line Feed, \n)을 사용
  - Unix 계열에서는 LF만 사용
  - 이는 github merge마다 문제 발생의 소지가 있음
  - core.eol 옵션을 통해 native, crlf, lf 로 설정 가능
    ``` cmd
    $ git config --global core.eol native
    ```
- core.autocrlf에는 아래와 같은 옵션으로 설정 가능
  - false(default) : 파일에 crlf, lf 관계없이 파일 그대로 checkin, checkout
  - true : text file을 obejct DB에 넣기전에 CRLF를 LF로 변경
  - input : LF을 line ending으로 사용
  - *.gitattributes* 파일을 통해서도 설정 가능하다!
  - 하지만.. git client로 egit을 사용하면 *.gitattributes* 를 읽지 못하므로 core.autocrlf 설정을 해주어야 한다! (참고로 egit은 간단하게 Eclise용 git 정도로 이해하면 되겠다)
    ``` txt
    # git 텍스트 파일의 속성 지정
    # Auto detect text files and perform LF normalization
    *         text=auto

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

### 03. 버전 생성과 업로드의 이해
``` cmd
$ git init # master branch 생성
$ git add . # stage로 올림(변경사항 추적중)
$ git commit -m 'comment' # 메세지(-m)와 함께 버전 
$ git remote add origin https://github.com ... # origin이란 별칭으로 원격 저장소 연결
$ git push origin master # origin 별칭의 연격 저장소로 버전 내역 전송
```

### 04. Netlify 지속적인 배포
- https://app.netlify.com
  - create a new site
  - continuous deployment
  - authorize netlify
  - github 페이지에서 install netlify
  - 세팅이 완료되면, public domain이 제공됨

### 05. 수정사항 버전 생성(Commit)
``` cmd
# project 수정...
$ git status
$ git add .
$ git status
$ git commit -m 'comment'
$ git log
```

### 06. 로그인 브랜치(Branch)
- 보통 프로젝트를 혼자서만 하지 않기 때문에 여러 개발자들이 별도로 개발을 하고 나중에 master branch로 병합하는 방식으로 프로젝트를 진행함
  ``` cmd
  $ git branch -a
  $ git branch signin # signin branch가 생성됨
  $ git branch
  $ git checkout signin # signin branch로 변경
  ```
  
### 07. 로그인 페이지 개발(1)
``` cmd
# branch가 starbucks-signin인지 확인
$ git status
$ git add .
$ git status
$ git commit -m '공통 모듈 분리'
```

### 08. 로그인 페이지 개발(2)
