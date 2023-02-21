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
    - work Page
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
  
#### 5. work Page
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

### 시작용 코드
- [시작용 HTML, CSS, JS](https://codepen.io/hjyee/pen/WNyoYQv)
- [리액트 MUI 연습장](https://codepen.io/jangka44/pen/yLpQmOM)

---
---
## step 1. NavBar 생성
### navigate로 활용할 NavBar 제작
- [@media를 활용한 반응형 box 및 버튼 생성](https://github.com/NewBean0312/my-portfolio/commit/082b7a669ed9473e8d0b92cd60b4a42e00dfa9dc)

- [NavBar에 hover 시, 늘어나게 설정](https://github.com/NewBean0312/my-portfolio/commit/6d024aadfa2ca9cea88f0e596f7287d078f5e1de)
