export type MediaItem = {
  title: string;
  publisher: string;
  date: string;
  type: "news" | "video" | "award" | "press-release";
  url: string;
  summary?: string;
};

export const mediaItems: MediaItem[] = [
  {
    title: "건축학과 학생들, '2023 대학생 스틸 모듈러 건축 설계 공모전' 대거 수상",
    publisher: "아주대학교 공식 뉴스",
    date: "2023-10-19",
    type: "award",
    url: "https://www.ajou.ac.kr/kr/ajou/studentNews.do?mode=view&articleNo=225486",
    summary:
      "조봉호 교수 지도 아주대학교 건축학과 학생들이 '2023 대학생 스틸 모듈러 건축 설계 공모전'에서 대상(국토부 장관상), 최우수상(강구조센터 회장상), 장려상을 대거 수상.",
  },
  {
    title: "2023 대학생 스틸 모듈러 건축 설계 공모전",
    publisher: "콘테스트코리아",
    date: "2023-06-14",
    type: "award",
    url: "https://www.contestkorea.com/sub/view.php?str_no=202306140024",
    summary:
      "국내 유일의 모듈러 전공 대학(원)생 공모전. 전국 59개 대학 130개 팀 참여.",
  },
  {
    title:
      "아주대 조봉호 교수팀, ENVEX 2022서 모듈러 건축 위한 기반 아이템 알린다",
    publisher: "네이트 뉴스",
    date: "2022-05-25",
    type: "news",
    url: "https://news.nate.com/view/20220525n33103",
    summary:
      "AJ 모듈러 건축 시스템 소개. 공장에서 100% 마감 후 현장에서 모듈을 쉽게 조립·해체할 수 있는 기술을 ENVEX 2022 환경박람회에서 공개.",
  },
  {
    title: "Builders vie for leadership in modular construction",
    publisher: "The Korea Times",
    date: "2023-09-26",
    type: "news",
    url: "https://www.koreatimes.co.kr/www/tech/2023/09/419_360101.html",
    summary:
      "국내 모듈러 건축 시장 현황과 주요 건설사 해외 진출 전략을 다룬 기사. (국내 모듈러 산업 동향 참고 자료)",
  },
  {
    title: "Korean researchers develop new modular construction technology",
    publisher: "Tech Xplore",
    date: "2023-12-21",
    type: "news",
    url: "https://techxplore.com/news/2023-12-korean-modular-technology.html",
    summary:
      "국내 모듈러 건축 기술 개발 동향 해외 보도. (국내 산업 동향 참고 자료)",
  },
];

export const RESEARCHGATE_URL =
  "https://www.researchgate.net/profile/Bong-Ho-Cho";
export const SCHOLAR_URL =
  "https://scholar.google.co.kr/citations?hl=ko&user=mE-YTPAAAAAJ";
