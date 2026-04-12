export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "thesis";
  language: "ko" | "en";
  url?: string;
};

export const GOOGLE_SCHOLAR_URL =
  "https://scholar.google.co.kr/citations?hl=ko&user=mE-YTPAAAAAJ";

export const PROFESSOR_NAME_EN = "Bong-ho Cho";
export const PROFESSOR_NAME_KR = "조봉호";

export const publications: Publication[] = [
  {
    title:
      "Seismic Performance Evaluation of Raised Access Floor Systems Using the Shaking-Table Test",
    authors: "Cho, B.-H. et al.",
    venue: "International Journal of Steel Structures (Springer)",
    year: 2024,
    type: "journal",
    language: "en",
    url: "https://link.springer.com/article/10.1007/s13296-024-00917-5",
  },
  {
    title:
      "Robot S/W를 활용한 3시간 내화 적용 모듈러 건축물의 성능기반 내화설계",
    authors: "조봉호 외",
    venue: "한국강구조학회 논문집",
    year: 2023,
    type: "journal",
    language: "ko",
  },
  {
    title:
      "Structural Performance of a New Blind-Bolted Frame Modular Beam-Column Connection under Lateral Loading",
    authors: "Cho, B.-H. et al.",
    venue: "Applied Sciences (MDPI), Vol. 9, No. 9, 1929",
    year: 2019,
    type: "journal",
    language: "en",
    url: "https://www.mdpi.com/2076-3417/9/9/1929",
  },
  {
    title: "Integrated Management Software for Factory Production of Modular Buildings",
    authors: "Cho, B.-H. et al.",
    venue: "International Journal of Steel Structures",
    year: 2019,
    type: "journal",
    language: "en",
    url: "https://www.researchgate.net/publication/332916403",
  },
  {
    title:
      "Systematic Approach for the Design of Modular Military Housing Units Using Six-Sigma",
    authors: "Cho, B.-H. et al.",
    venue: "International Journal of Steel Structures",
    year: 2018,
    type: "journal",
    language: "en",
    url: "https://www.researchgate.net/publication/323161465",
  },
  {
    title:
      "Development of an Efficient Steel Beam Section for Modular Construction Based on Six-Sigma",
    authors: "Ha, T., Cho, B.-H. et al.",
    venue: "Advances in Materials Science and Engineering (Wiley)",
    year: 2016,
    type: "journal",
    language: "en",
    url: "https://onlinelibrary.wiley.com/doi/10.1155/2016/9687078",
  },
  {
    title:
      "Cyclic Loading Tests on Framed Stud Walls with Strap Braces and Steel Sheathing",
    authors: "Cho, B.-H. et al.",
    venue: "Journal of Structural Engineering (ASCE), Vol. 141, No. 7",
    year: 2015,
    type: "journal",
    language: "en",
    url: "https://ascelibrary.org/doi/10.1061/%28ASCE%29ST.1943-541X.0001133",
  },
  {
    title: "Structural Design of High-Rise Modular Building Systems",
    authors: "Cho, B.-H. et al.",
    venue: "International Journal of Steel Structures",
    year: 2015,
    type: "journal",
    language: "en",
    url: "https://www.researchgate.net/publication/285972467",
  },
  {
    title:
      "An experimental study on fire resistance of medical modular block",
    authors: "Cho, B.H. et al.",
    venue: "Steel and Composite Structures, Vol. 15, No. 1, pp. 103-130",
    year: 2013,
    type: "journal",
    language: "en",
  },
  {
    title: "Behavior of framed modular building system with double skin steel panels",
    authors: "Cho, B.-H. et al.",
    venue: "Journal of Constructional Steel Research",
    year: 2012,
    type: "journal",
    language: "en",
    url: "https://www.researchgate.net/publication/251510358",
  },
  {
    title: "모듈러 건축 시스템의 기술개발 동향 및 적용 사례",
    authors: "조봉호, 김홍진, 고광호",
    venue: "대한건축학회 학술발표대회 논문집",
    year: 2017,
    type: "conference",
    language: "ko",
  },
  {
    title: "모듈러 구조물의 사용성 향상을 위한 보 연결방안의 실험적 연구",
    authors: "조봉호 외",
    venue: "대한건축학회 학술발표대회 논문집 (구조계)",
    year: 2007,
    type: "conference",
    language: "ko",
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE01029619",
  },
  {
    title: "모듈러 학교 건축물의 구조 시스템",
    authors: "조봉호 외",
    venue: "대한건축학회 학술발표대회 논문집 (구조계)",
    year: 2006,
    type: "conference",
    language: "ko",
  },
  {
    title: "식스-시그마를 이용한 군 독신자 숙소용 모듈러 건축 시스템 개발",
    authors: "조봉호 외",
    venue: "대한건축학회 학술발표대회 논문집",
    year: 2015,
    type: "conference",
    language: "ko",
  },
];
