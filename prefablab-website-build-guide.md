# PREFAB Structure Lab 웹사이트 재구축 가이드
> **Claude Code 바이브코딩용 작업 지시서**  
> 원본 사이트: https://www.prefabmodularlab.com  
> 목표: Wix → Next.js + Vercel 전환

---

## 0. 사전 준비 (시작 전 필수)

### 0-1. 필요한 계정 만들기
- [ ] **GitHub** 계정: https://github.com (코드 저장소)
- [ ] **Vercel** 계정: https://vercel.com (웹사이트 배포, GitHub 계정으로 가입 가능)

### 0-2. 내 PC에 설치할 것
- [ ] **Node.js** (v18 이상): https://nodejs.org
- [ ] **VS Code**: https://code.visualstudio.com
- [ ] **Claude Code**: VS Code 터미널에서 `npm install -g @anthropic-ai/claude-code`
- [ ] **Git**: https://git-scm.com

### 0-3. Wix에서 사진 파일 미리 다운받기
Wix 관리자 페이지 > 미디어 라이브러리에서 아래 이미지들을 PC에 저장:
- 메인 배너 사진 (연구실 외경/내경)
- 연구원 프로필 사진 7장 (김세현, 최웅일, 곽정석, 김슬아, 백지민, 김민기, 박희원)
- 교수진 프로필 사진
- 연구활동 사진 갤러리 (슬라이더용 사진들)
- 연구 분야 블로그 글 썸네일 이미지들

---

## 1. 프로젝트 생성 명령어

Claude Code 실행 후 아래를 그대로 붙여넣기:

```
Next.js와 Tailwind CSS로 대학 연구실 웹사이트를 만들어줘.
프로젝트 이름은 prefablab-website야.
한국어/영문 혼용 사이트이고, 아래 폴더 구조로 만들어줘:

prefablab-website/
├── public/
│   └── images/          ← 사진 파일 여기에 넣을 예정
├── src/
│   ├── app/
│   │   ├── page.tsx              ← 메인 홈
│   │   ├── about/page.tsx        ← 연구실 소개
│   │   ├── location/page.tsx     ← 찾아오시는 길
│   │   ├── professor/page.tsx    ← 교수진
│   │   ├── members/page.tsx      ← 연구원
│   │   ├── research/
│   │   │   ├── page.tsx          ← 연구 분야 목록
│   │   │   └── [slug]/page.tsx   ← 연구 분야 상세
│   │   ├── projects/page.tsx     ← 참여 연구
│   │   ├── thesis/page.tsx       ← 학위논문
│   │   ├── publications/page.tsx ← 학술논문
│   │   ├── patents/page.tsx      ← 특허
│   │   ├── notice/page.tsx       ← 공지사항
│   │   ├── curriculum/page.tsx   ← 교육과정
│   │   └── contact/page.tsx      ← Contact
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── HeroSlider.tsx
│   └── data/                     ← 콘텐츠 데이터 파일들
│       ├── members.ts
│       ├── research.ts
│       ├── publications.ts
│       └── notices.ts
└── content/
    └── research/                 ← 연구 블로그 Markdown 파일들
        ├── modular-market-2024.md
        └── ...
```

---

## 2. 사이트 전체 구조 및 메뉴

### 네비게이션 구조
```
PREFAB STRUCTURE LAB  (로고/홈 링크)
│
├── Home (드롭다운)
│   ├── 연구실 소개        /about
│   ├── 찾아오시는 길      /location
│   ├── 교수진            /professor
│   └── 연구원            /members
│
├── Research & Performance (드롭다운)
│   ├── 연구 분야         /research
│   ├── 참여 연구         /projects
│   ├── 연구실 학위논문   /thesis
│   ├── 학술논문 및 발표  /publications
│   └── 특허 및 기타      /patents
│
├── Board (드롭다운)
│   └── 공지사항          /notice
│
├── Curriculum            /curriculum
└── Contact               /contact
```

---

## 3. 페이지별 상세 내용

### 3-1. 메인 홈 (/)

**레이아웃 요소:**
1. 상단: 사진 슬라이더 (연구실 활동 사진 8~10장)
2. 공지사항 박스 (최신 공지 1건 표시)
3. 연구 분야 소개 섹션 (MASS 약자 표시)
   - M = Modular (모듈러)
   - A = Architecture (건축)
   - S = Steel (강구조)
   - S = Structure (구조)
4. 하단 배너: "PREFAB-STRUCTURE / AJOU UNIVERSITY" + Contact 링크

**Claude Code 지시 예시:**
```
메인 홈 페이지에 다음을 구현해줘:
- 상단에 이미지 슬라이더 (public/images/gallery/ 폴더 이미지 자동 로테이션, 3초마다 전환)
- 그 아래 최신 공지사항 1건을 카드로 표시
- MASS 섹션: M/A/S/S 각 글자를 크게 표시하고 옆에 영문/한글 설명
- 하단 CTA 섹션: 어두운 배경에 흰 글씨로 연구실명과 Contact 버튼
```

---

### 3-2. 연구실 소개 (/about)

**콘텐츠:**
```
제목: INTRODUCE
부제: 구조 전문가로서의 책임의식을 가진 고급 엔지니어 양성 / 첨단 공업화 건축 연구

본문:
아주대학교 프리팹 건축구조연구실은 강구조, 모듈러 건축 등의 첨단 공업화 건축 분야와 
다양한 건축자재관련 기술을 연구하고, 관련 전문가를 양성하는 국내 최고 수준의 연구 및 
교육기관입니다.

1992년 이승준 교수님에 의한 창립 이래로 강구조 분야에서 국내 최고 수준의 다양한 연구를 
수행하였으며, 건축구조 관련 전문 엔지니어들을 다수 배출하였습니다. 2010년 조봉호 교수가 
부임 이후, 현재에는 모듈러 건축, 기후변화 대응 기술, 건축자재, TRIZ/6-Sigma등 제품개발 
방법론, 융복합 건축구조 연구 등 폭넓은 연구 분야를 다루고 있습니다.

저희 연구실은 국토교통부의 3개 대형 연구단의 주요 일원으로 주도적으로 참여하고 있습니다:
- 지진 및 기후변화 대응 소규모·기존건축물 구조안전성 향상기술 개발 연구단
- 모듈러 건축 중고층화 및 생산성 향상 기술개발 연구단
- 노후 공동주택의 리모델링에 적합한 설계기술 및 주거성능 향상기술 개발 연구단

산학협력: 포스코, 삼성물산, 제일모직, 극동건설, RIST, ㈜유창, ㈜대창스틸, NI스틸 등

연구 목표:
상식을 존중하고, 배움에는 겸손하고, 일에는 성실하며, 다른 사람을 배려하고, 
항상 안전과 경제성을 염두에 두며 보편·타당성을 중시하되 창의적인 문제해결능력을 
갖춘 건설엔지니어 양성
```

**이미지 배치:** 연구실 사진 + 모듈러 주택 사진 갤러리 (3장)
- 모듈러주택 kits2
- 해외수출용 모듈러
- 제2남극기지 극한지용 모듈러

---

### 3-3. 찾아오시는 길 (/location)

**콘텐츠:**
```
주소: 경기도 수원시 영통구 월드컵로 206 아주대학교 산학협력원 804호
우편번호: 16499
전화: 031-219-2499
팩스: 031-219-2945
```

**구현 방법:**
```
찾아오시는 길 페이지에 카카오맵 또는 Google Maps를 iframe으로 삽입하고,
주소/전화/팩스 정보를 아이콘과 함께 표시해줘.
지도 검색어: "아주대학교 산학협력원"
```

---

### 3-4. 교수진 (/professor)

**콘텐츠:**
```
이름: 조봉호 (Bong-ho Cho)
직위: 아주대학교 건축공학과 교수
소속: 아주대학교 건축공학전공
연구실: 아주대학교 산학협력원 804호
전화: 031-219-2499
이메일: bhcho@ajou.ac.kr
연구 분야: 모듈러 건축, 강구조, 건축자재, TRIZ/6-Sigma, 내진공학
```

---

### 3-5. 연구원 (/members)

**현재 연구원 데이터 (src/data/members.ts에 저장):**

```typescript
// 이 데이터를 members.ts 파일에 저장해줘
export const members = [
  {
    id: 1,
    name: "김세현",
    nameEn: "KIM SE HYUN",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "tpgus1838@ajou.ac.kr",
    photo: "/images/members/kim-sehyun.jpg",
    cvUrl: "/김세현cv"
  },
  {
    id: 2,
    name: "최웅일",
    nameEn: "CHOI WOONG IL",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "woilc@ajou.ac.kr",
    photo: "/images/members/choi-woongil.jpg",
    cvUrl: "/최웅일cv"
  },
  {
    id: 3,
    name: "곽정석",
    nameEn: "KWAK JEONG SEOK",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "JS000307@ajou.ac.kr",
    photo: "/images/members/kwak-jeongseok.jpg",
    cvUrl: "/곽정석cv"
  },
  {
    id: 4,
    name: "김슬아",
    nameEn: "KIM SEUL AH",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "hoyanqfiji@ajou.ac.kr",
    photo: "/images/members/kim-seula.jpg",
    cvUrl: "/김슬아cv"
  },
  {
    id: 5,
    name: "백지민",
    nameEn: "BAEK JI MIN",
    degree: "학부인턴",
    field: "모듈러 건축",
    email: "bjm008@ajou.ac.kr",
    photo: "/images/members/baek-jimin.jpg",
    cvUrl: "/백지민cv"
  },
  {
    id: 6,
    name: "김민기",
    nameEn: "KIM MIN GI",
    degree: "학부인턴",
    field: "모듈러 건축",
    email: "mingi020901@ajou.ac.kr",
    photo: "/images/members/kim-mingi.jpg",
    cvUrl: "/김민기cv"
  },
  {
    id: 7,
    name: "박희원",
    nameEn: "PARK HEE WON",
    degree: "학부인턴",
    field: "모듈러 건축",
    email: "hhwon27@ajou.ac.kr",
    photo: "/images/members/park-heewon.jpg",
    cvUrl: "/박희원cv"
  }
]
```

**페이지 레이아웃 지시:**
```
연구원 페이지를 만들어줘:
- 각 연구원을 카드 형식으로 표시 (사진 240x320px + 이름(한/영) + 학위과정 + 이메일)
- 석사과정 / 학부인턴 섹션을 구분해서 표시
- 이력사항 링크 버튼 포함
- 반응형 그리드: 모바일 1열, 태블릿 2열, PC 3열
```

---

### 3-6. 연구 분야 (/research) - 블로그 형식

**기존 연구 게시물 목록 (Markdown 파일로 변환 필요):**

```
1. 모듈러 건축 시장조사(2024년)
   - 파일명: modular-market-2024.md
   - 날짜: 2025-04-15
   - 태그: 시장조사, 모듈러건축

2. 이중보 복합구조를 활용한 순경간 12m 규모 대공간 모듈러 건축 시스템 설계 기술 개발
   - 파일명: double-beam-12m-modular.md
   - 날짜: 2024-02-06
   - 기간: 2023.03~2024.01

3. 중고층 모듈러 건축 프리팹 철골코어 시스템 개발
   - 파일명: highrise-steel-core.md
   - 날짜: 2024-02-06
   - 기간: 2023.03~현재

4. 모듈러 내화설계 합리화 전략 수립
   - 파일명: fire-resistance-design.md
   - 날짜: 2024-02-06
   - 기간: 2023.03~2023.12
```

**새 블로그 글 추가 방법 (나중에 Claude Code에게):**
```
content/research/ 폴더에 새 .md 파일을 만들어줘.
파일 상단에 아래 형식으로 메타데이터를 넣어줘:

---
title: "연구 제목"
date: "2025-04-12"
thumbnail: "/images/research/파일명.png"
tags: ["모듈러건축", "강구조"]
period: "2024.01~현재"
---

본문 내용...
```

---

### 3-7. 교육과정 (/curriculum)

**강의 목록:**
```typescript
export const courses = [
  {
    nameKr: "건축구조설계특론",
    nameEn: "Building Structure and Analysis",
    description: "일반 건물구조와 고층 건물구조의 형태, 구조해석 및 설계를 다루며 건축구조물의 강도와 거동에 관하여 기초, 하부구조 및 상부구조를 포함한 전체 설계 개념에 중점을 둔다."
  },
  {
    nameKr: "구조공학특론",
    nameEn: "Structural Mechanics",
    description: "구조해석과 설계에 관한 최근의 관심 주제를 다루며 최신 해석 방법과 설계 개념을 포함한다."
  },
  {
    nameKr: "구조안정론",
    nameEn: "Stability of Structure",
    description: "보, 기둥, 골조의 안정성 문제, 안정문제에 대한 기하학적 해석, 그리고 선형, 비선형의 안정을 다룬다."
  },
  {
    nameKr: "구조해석특론",
    nameEn: "Advanced Structural Analysis",
    description: "보, 기둥, 골조의 안정성 문제, 안정문제에 대한 기하학적 해석, 그리고 선형, 비선형의 안정을 다룬다."
  },
  {
    nameKr: "동력학특론",
    nameEn: "Dynamics of Structures",
    description: "건축물의 동적모델, 운동방정식의 의미, 단자유도계와 다자유도계, 감쇠의 의미, 자유진동과 강제진동, 응답스펙트럼, 시간이력해석, 내진설계를 포함한 주제들을 배우고 구조물이 설계나 해석에서 활용되는 바를 익히게 된다."
  },
  {
    nameKr: "소성이론과설계",
    nameEn: "Plasticity Theory and Design",
    description: "비탄성영역에서의 구조거동, 붕괴하중의 예측 및 소성해석법에 따른 구조 설계를 다룬다."
  },
  {
    nameKr: "철골구조론",
    nameEn: "Steel Structures",
    description: "비탄성영역에서의 구조거동, 붕괴하중의 예측 및 소성해석법에 따른 구조 설계를 다룬다."
  },
  {
    nameKr: "철근콘크리트특론",
    nameEn: "Reinforced Concrete Structures",
    description: "설계기준이 제시하는 설계방법의 한계 인식, 구조물의 안전을 보장하기 위한 상세설계, 그리고 구조물 거동의 신빙성 있는 예측을 위하여 메카니즘에 근거한 여러 가지 접근법을 배우게 된다."
  },
  {
    nameKr: "P.S콘크리트",
    nameEn: "Pre-stressed Concrete Structures",
    description: "P.S Concrete의 원리, 해석 및 설계를 다룬다."
  },
  {
    nameKr: "프리캐스트콘크리트",
    nameEn: "Precast Concrete",
    description: "프리캐스트 콘크리트의 설계, 몰드 계획, 생산프로세스, 운송, 설치, 접합 상세 등 전 프로세스를 다룬다."
  },
  {
    nameKr: "건축 내진공학",
    nameEn: "Aseismic design of structures",
    description: "건축물의 내진설계 기준과 내진설계 철학, 내진역량 설계법 등을 다루고, 철근콘크리트 구조와 강구조 및 prefabricated structures의 내진설계 방법을 익힌다."
  },
  {
    nameKr: "혁신적 건축제품 개발론",
    nameEn: "Innovative design method of architectural products",
    description: "Six sigma, Triz 등 기업체에서 요구하는 혁신적 제품개발론을 이용한 건축시스템 및 건축제품 개발 방법론을 다룬다."
  }
]
```

**졸업 요건:**
```
과정    전공1                      전공2
석사    철골구조론, 구조안정론 중 택1   철근콘크리트특론, 동역학특론 중 택1
```

---

### 3-8. Contact (/contact)

**콘텐츠:**
```
Department of Architecture _ structural engineering lab
프리팹건축구조연구실

주소: 경기도 수원시 영통구 월드컵로 206
      아주대학교 산학협력원 804호 (우) 16499
전화: 031-219-2499
팩스: 031-219-2945
이메일: bhcho@ajou.ac.kr
웹사이트: https://www.prefabmodularlab.com
```

---

## 4. 디자인 가이드

### 색상
```css
/* 현재 Wix 사이트 분위기를 유지하되 더 깔끔하게 */
--color-primary: #1a1a2e;      /* 진한 네이비 (헤더/강조) */
--color-secondary: #16213e;    /* 어두운 블루 */
--color-accent: #0f3460;       /* 포인트 블루 */
--color-text: #333333;         /* 본문 텍스트 */
--color-bg: #ffffff;           /* 배경 흰색 */
--color-bg-gray: #f5f5f5;      /* 섹션 배경 */
```

### 폰트
```
영문: 'Montserrat' (헤딩), 'Inter' (본문) - Google Fonts
한글: 'Noto Sans KR' - Google Fonts
```

### 레이아웃 원칙
- 최대 너비: 1200px (중앙 정렬)
- 모바일 우선 반응형
- 헤더: sticky (스크롤해도 상단 고정)

---

## 5. 단계별 작업 순서

### Phase 1: 기본 뼈대 (1~2일)
```
Claude Code에게 순서대로 요청:
1. "Next.js 프로젝트 생성하고 Tailwind CSS 설정해줘"
2. "Navbar 컴포넌트 만들어줘 - 위 메뉴 구조 참고"
3. "Footer 컴포넌트 만들어줘 - 연구실 주소/연락처 포함"
4. "메인 홈 페이지 레이아웃 만들어줘"
```

### Phase 2: 정적 페이지 (2~3일)
```
5. "연구실 소개 페이지 만들어줘"
6. "교수진 페이지 만들어줘"
7. "연구원 페이지 만들어줘 - members.ts 데이터 사용"
8. "교육과정 페이지 만들어줘 - courses 데이터 사용"
9. "Contact 페이지 만들어줘"
```

### Phase 3: 동적 콘텐츠 (2~3일)
```
10. "연구 분야 페이지 만들어줘 - Markdown 파일 읽어서 목록 표시"
11. "연구 분야 상세 페이지 만들어줘"
12. "공지사항 페이지 만들어줘"
```

### Phase 4: 마무리 및 배포 (1일)
```
13. "모바일 반응형 확인하고 수정해줘"
14. "SEO 메타태그 추가해줘 (한국어 연구실 사이트)"
15. "GitHub에 올리고 Vercel로 배포하는 방법 알려줘"
```

---

## 6. GitHub & Vercel 배포 방법

### 6-1. GitHub에 올리기
```bash
# 터미널에서 순서대로 실행
git init
git add .
git commit -m "첫 번째 커밋: 연구실 웹사이트 초기 버전"
git branch -M main
git remote add origin https://github.com/내아이디/prefablab-website.git
git push -u origin main
```

### 6-2. Vercel 배포
1. https://vercel.com 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택 (prefablab-website)
4. "Deploy" 클릭 → 자동 배포 완료!
5. 이후 `git push` 할 때마다 자동으로 사이트 업데이트됨

### 6-3. 도메인 연결 (prefabmodularlab.com)
1. Vercel 프로젝트 > Settings > Domains
2. "prefabmodularlab.com" 입력
3. Vercel이 안내하는 DNS 설정을 도메인 등록 업체에서 변경
4. (Wix에서 도메인을 구매한 경우 Wix 도메인 설정에서 변경)

---

## 7. 나중에 블로그 글 추가하는 방법

### 새 연구 게시물 추가 (Claude Code에게)
```
content/research/ 폴더에 새 Markdown 파일을 만들어줘.
제목: [연구 제목]
날짜: 2025-04-12
내용: [연구 내용]
```

### 연구원 업데이트 (Claude Code에게)
```
src/data/members.ts 파일에 새 연구원을 추가해줘:
이름: [이름]
영문명: [영문명]
학위과정: [석사과정/박사과정/학부인턴]
이메일: [이메일]
사진: [파일명]
```

---

## 8. 참고 사항

### 현재 Wix에서 없어지는 기능
- Wix 내장 댓글 기능 (필요시 Giscus 등 무료 댓글 시스템으로 대체 가능)
- Wix 로그인/회원 기능 (연구실 사이트에는 불필요)

### 비용 비교
| 항목 | Wix 유료 | Vercel + Next.js |
|------|----------|-----------------|
| 호스팅 | 월 ~$17+ | **무료** |
| 도메인 | 포함 또는 별도 | 연간 ~$15 (별도 구매) |
| 총 연간 비용 | ~$200+ | **~$15** |

### 도움이 필요할 때
- Claude Code에게 오류 메시지를 그대로 붙여넣으면 해결해줌
- "이 오류가 났어: [오류 내용]" 형식으로 질문

---

*이 파일을 Claude Code가 있는 폴더에 저장하고,  
작업 시작할 때 Claude Code에게 "이 파일 읽고 작업 시작해줘"라고 하면 됩니다.*
