# 전유빈 포트폴리오 위키

- [위키 바로가기](https://to2.kr/ehI)
- [git 바로가기](https://github.com/NewBean0312/my-portfolio)
- [포트폴리오 예상 디자인 바로가기](https://newbean0312.wixsite.com/newbean-sportfolio)
- [포트폴리오 바로가기](https://newbean0312.github.io/portfolio/)

---

---

### 레이아웃

#### 1. Main Page

- 상단 프로필
  - 로고
  - 포트폴리오 명
- 중앙 공백
  - 음표가 내리는 애니메이션 추가
- 하단 메뉴 바
  - 건반에 마우스를 hover 시, 음표가 아래에서 위로 올라오면서 사라짐
  - 음표버튼에 마우스를 hover 시, 메뉴명이 아래에서 위로 나타남

---

#### 2. About Page

- 상단 메뉴
  - 마우스를 hover 시, 상단 메뉴바가 어느정도 위에서 아래로 내려옴 (이 때, 버튼 명도 표시됨)
    - 브라우저 너비를 작게 표시할 경우, 버튼은 한 박스에 모이게 함
    - 브라우저 너비가 줄어들수록, box를 하나씩 없어지게 함
  - 총 6개의 버튼 (왼쪽부터)
    - Main Page
    - About Page
    - Career Page
    - Skills Page
    - Project Page
    - Contact Page
- 중앙 자기소개 텍스트
- 하단 사진

---

#### 3. Career Page

- 상단 메뉴
  - About Page와 동일
- 중앙 소제목 표시
- 중앙 건반 박스
  - 흰 건반은 왼쪽에서 오른쪽으로, 검은 건반은 오른쪽에서 왼쪽으로 위에서 아래로 하나씩 나타남

---

#### 4. Skills Page

- 상단 메뉴
  - About Page와 동일
- 중앙 소제목 표시
- 중앙 각 분야별 악보 표시
  - 왼쪽 끝에 0%, 100% 표시
  - 각 Skill들을 음표 표시

---

#### 5. Project Page

- 상단 메뉴
  - About Page와 동일
- 왼쪽 상단 소제목 표시
- 왼쪽 중앙 LP판 박스
  - LP가 오른쪽에서 왼쪽으로 돌아가면서 나타남
- 하단에 화살표 및 중앙 버튼
  - 왼쪽 화살표 active 시, 전 li로 이동
  - 중앙 원 active 시, LP가 제자리 3바퀴 돌아감
  - 오른쪽 화살표 active 시, 다음 li로 이동

---

#### 6. Contact Page

- 상단 메뉴
  - About Page와 동일
  - 왼쪽 상단 소제목 표시
  - 이메일 표시
  - 인스타 표시
  - 깃허브 표시
  - 블로그 표시

---

---

### 유용한 사이트

- [daisyUI](https://daisyui.com/) : Tailwind CSS 사이트
- [React Router](https://reactrouter.com/en/main) : 리액트 Router 사이트
- [Tailwind cheat sheet](https://nerdcave.com/tailwind-cheat-sheet) : Tailwind 치트 시트 사이트
- [Fontawsome](https://fontawesome.com/icons/) : 무료 아이콘 사이트
- [미디어 쿼리 (다크모드)](https://www.daleseo.com/css-prefers-color-scheme/)
- [다크모드 버튼 생성](https://velog.io/@rmaomina/darkmode-toggle-button)
- [눈내리기 css](https://ddamddon.tistory.com/10833)
- [XEIcon](https://xpressengine.github.io/XEIcon/index.html)
- [슬릭](http://kenwheeler.github.io/slick/)

### 시작용 코드

- [시작용 HTML, CSS, JS](https://codepen.io/hjyee/pen/WNyoYQv)
- [리액트 MUI 연습장](https://codepen.io/jangka44/pen/yLpQmOM)

---

---

## step 1. navBar 생성

### navigate로 활용할 navBar 제작

- [@media를 활용한 반응형 box 및 버튼 생성](https://github.com/NewBean0312/my-portfolio/commit/082b7a669ed9473e8d0b92cd60b4a42e00dfa9dc)
- [Top-bar에 hover 시, 늘어나게 설정](https://github.com/NewBean0312/my-portfolio/commit/6d024aadfa2ca9cea88f0e596f7287d078f5e1de)
- [브라우저를 가장 작은 너비로 줄일 경우, 기존 버튼이 사라지고 새로운 버튼 6개가 정렬됨 / 박스가 사라지는 순서 변경 / 파일명 및 클래스명 변경](https://github.com/NewBean0312/my-portfolio/commit/94b20479980584e692f75bc664d8ef298d5c2955)
- [버튼에 hover 시, 글씨가 나타나게 설정](https://github.com/NewBean0312/my-portfolio/commit/afe2d9b132accbed7cc5cc15ae62b96e08ec3b0f)
  - 글짜가 가려지는 현상
- [버튼 텍스트 정렬 및 hover 시, 나타나는 효과 설정](https://github.com/NewBean0312/my-portfolio/commit/f1e78421f704b1f37d8c4e17737ad55c211f87cd)
  - 글씨가 가려지는 현상 수정
- [Navbar 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/a255649b189acd16c070fbafd948643b8f726823)

- [각 건반을 hover 시, 그라데이션 생성](https://github.com/NewBean0312/my-portfolio/blob/0d8ecd13d350d31e96f571d2471ea26ccdd0fbc7/src/NavBar.css)

---

## step 2. MainPage 생성

- [MainPage 기초 완성](https://github.com/NewBean0312/my-portfolio/commit/ff8ce159d51da136954ebce3e8ca1f882ee2d2a7)
- [MainPage 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/fc5a7b7b9b7594f7c1d275b3dcef645a0998afaf)
  - 상단 header 생성
  - 건반 hover 시, 그라데이션 추가
  - 건반 hover 시, 음표가 올라오는 효과 추가
  - 버튼 hover 시, 버튼 명 나타나는 효과 추가
  - 음표가 내리는 효과 추가
- [MainPage 2차 완성](https://github.com/NewBean0312/my-portfolio/commit/b08548d5fdeee4ca88cebe6d0b79aae678f1b8bf)
  - 배포를 위해 파일명을 index.html로 변경
  - 모바일로 접속 시, hover 제거
  - 파비콘 생성 및 적용
  - 아이콘 일부 변경
- [index 3차 완성](https://github.com/NewBean0312/my-portfolio/commit/0d8ecd13d350d31e96f571d2471ea26ccdd0fbc7)
  - 최소너비(모바일) 시, 하이라이트 제거
  - 기타 오류 수정

---

## step 3. AboutPage 생성

- [aboutPage 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/c5615d3ca4c48db6d3e269f0a0556a2653f45b3d)
  - navBar 첨부
  - 글이 가운데 오게끔 정렬
  - 본문은 다른 글꼴을 적용

---

## step 4. CarrerPage 생성

- [CarrerPage 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/9e2f982dfe32c8d9ce560f839ebe73a89c61639d)
  - navBar 첨부
  - 피아노 건반 정렬
- [CarrerPage 2차 완성](https://github.com/NewBean0312/my-portfolio/commit/f5e791b010d7f22df93f3cd83589251c65e97e14)
  - Carrer 박스 반응형으로 설정

---

## step 5. SkillsPage 생성

- [SkillsPage 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/851d11aea97018fe75d12fe759acffd7e085840e)
  - navBar 첨부
  - 피아노 악보 생성
- [SkillsPage 2차 완성](https://github.com/NewBean0312/my-portfolio/commit/deb68f3b19193efe9508ba0a5aa19d37a4d6e6a5)
  - 반응형 설정
  - 아이콘 배치

---

## step 6. ProjectPage 생성

- [ProjectPage 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/d1f3854cd4defa5d8abedfbebf8f9869e7ccdef0)
  - navBar 첨부
  - slick을 적용한 슬라이더 배너 생성
- [ProjectPage 2차 완성](https://github.com/NewBean0312/my-portfolio/commit/586e758e6b32c9884fac257099b57570e3e7955b)
  - 슬라이드 배너 수정
  - 슬라이드 배너에 따른 박스 생성
- [ProjectPage 3차 완성](https://github.com/NewBean0312/my-portfolio/commit/ae12913921b61cb9e7bc5dd7804df9714e6dc240)
  - 반응형 웹으로 수정
  - 재생버튼 생성

## step 7. 마무리

- [포트폴리오 1차 완성](https://newbean0312.github.io/portfolio/)

---

---

## 포트폴리오 수정

- [포트폴리오 v1.1](https://github.com/NewBean0312/portfolio/commit/f56eb05b5de30188cd69c40b3b682351df9b476f)
  - 업데이트 날짜 : 23.04.04
  - 색감 변경
  - 마우스 포인터 사용
  - 건반 디자인 변경
  - 메뉴 아이콘 수정
- [포트폴리오 v1.2](https://github.com/NewBean0312/portfolio/commit/6b46b6e6cab0d48b418de34b3d773b7e1b955cff)
  - 업데이트 날짜 : 2023.05.03
  - 건반 색상 변경
  - 스크롤 버그 수정
  - 마우스 포인터 변경
  - 레이아웃 간견 조절
  - 파일 분류 수정
  - Work 프로젝트 추가
- [포트폴리오 v1.3](https://github.com/NewBean0312/portfolio/commit/0b2e8600f18377828daa1e63d26d166c6d6b8be6)
  - 업데이트 날짜 : 2023.06.14
  - 페이지 UI 변경
  - 메뉴바 UI 변경
  - 미디어 쿼리 수정
  - Work 프로젝트 추가
  - About 페이지 이미지 콘텐츠 추가
- [포트폴리오 v2.0](https://github.com/NewBean0312/portfolio/commit/5dd6c22e9979f50503e5e37a6245e00abfbeef8a)
  - 업데이트 날짜 : 2023.11.17
  - 전체 색상 변경
  - 메인 페이지 건반 애니메이션 추가
  - 마우스 커서 삭제
  - About 페이지 내용 및 UI 변경
  - Carrer 페이지 UI 변경
  - Skills 페이지 애니메이션 추가
  - Project 페이지(구 Work 페이지) UI 변경 및 프로젝트 추가 및 팝업창 생성
  - Contact 페이지(구 Link 페이지) 이메일 폼 생성 및 전송 기능 추가 및 UI 변경
- [포트폴리오 v2.1]()
  - 업데이트 날짜 : 2024.02.28
  - Main 페이지 반응형 버전 링크 오류 수정
  - Project 페이지 프로젝트 추가
  - 브라우저 스크롤 오류 수정
