# 전유빈 위키
- [위키 바로가기](https://to2.kr/ehI)
- [git 바로가기](https://github.com/NewBean0312/my-portfolio)
- [포트폴리오 예상 디자인 바로가기](https://newbean0312.wixsite.com/newbean-sportfolio)
---
---
### 레이아웃
#### 1. Main Page
- 상단 프로필
  - 로고
  - 포트폴리오 명
  - 노래 재생 및 일시정지 버튼
  - 다크모드
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

### 시작용 코드
- [시작용 HTML, CSS, JS](https://codepen.io/hjyee/pen/WNyoYQv)
- [리액트 MUI 연습장](https://codepen.io/jangka44/pen/yLpQmOM)

---
---
## step 1. Navbar 생성
### navigate로 활용할 Navbar 제작
- [@media를 활용한 반응형 box 및 버튼 생성](https://github.com/NewBean0312/my-portfolio/commit/082b7a669ed9473e8d0b92cd60b4a42e00dfa9dc)
- [Top-bar에 hover 시, 늘어나게 설정](https://github.com/NewBean0312/my-portfolio/commit/6d024aadfa2ca9cea88f0e596f7287d078f5e1de)
- [브라우저를 가장 작은 너비로 줄일 경우, 기존 버튼이 사라지고 새로운 버튼 6개가 정렬됨 / 박스가 사라지는 순서 변경 / 파일명 및 클래스명 변경](https://github.com/NewBean0312/my-portfolio/commit/94b20479980584e692f75bc664d8ef298d5c2955)
- [버튼에 hover 시, 글씨가 나타나게 설정](https://github.com/NewBean0312/my-portfolio/commit/afe2d9b132accbed7cc5cc15ae62b96e08ec3b0f)
  - 글짜가 가려지는 현상 
- [버튼 텍스트 정렬 및 hover 시, 나타나는 효과 설정](https://github.com/NewBean0312/my-portfolio/commit/f1e78421f704b1f37d8c4e17737ad55c211f87cd)
  - 글씨가 가려지는 현상 수정
- [Navbar 1차 완성](https://github.com/NewBean0312/my-portfolio/commit/a255649b189acd16c070fbafd948643b8f726823)

## step 2. MainPage 생성
### MainPage 제작
- [MainPage 기초 완성](https://github.com/NewBean0312/my-portfolio/commit/ff8ce159d51da136954ebce3e8ca1f882ee2d2a7)
- [MainPage 1차 완성]()
  - 상단 header 생성
  - 건반 hover 시, 그라데이션 추가
  - 건반 hover 시, 음표가 올라오는 효과 추가
  - 버튼 hover 시, 버튼 명 나타나는 효과 추가
  - 음표가 내리는 효과 추가