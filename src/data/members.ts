export type Member = {
  id: number;
  name: string;
  nameEn: string;
  degree: "석사과정" | "박사과정" | "학부인턴";
  field: string;
  email: string;
  photo: string;
};

export const members: Member[] = [
  {
    id: 1,
    name: "김세현",
    nameEn: "KIM SE HYUN",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "tpgus1838@ajou.ac.kr",
    photo: "/images/members/kim-sehyun.jpg",
  },
  {
    id: 2,
    name: "최웅일",
    nameEn: "CHOI WOONG IL",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "woilc@ajou.ac.kr",
    photo: "/images/members/choi-woongil.jpg",
  },
  {
    id: 3,
    name: "곽정석",
    nameEn: "KWAK JEONG SEOK",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "JS000307@ajou.ac.kr",
    photo: "/images/members/kwak-jeongseok.jpg",
  },
  {
    id: 4,
    name: "김슬아",
    nameEn: "KIM SEUL AH",
    degree: "석사과정",
    field: "모듈러 건축",
    email: "hoyanqfiji@ajou.ac.kr",
    photo: "/images/members/kim-seula.jpg",
  },
  {
    id: 5,
    name: "백지민",
    nameEn: "BAEK JI MIN",
    degree: "학부인턴",
    field: "모듈러 건축",
    email: "bjm008@ajou.ac.kr",
    photo: "/images/members/baek-jimin.jpg",
  },
  {
    id: 6,
    name: "김민기",
    nameEn: "KIM MIN GI",
    degree: "학부인턴",
    field: "모듈러 건축",
    email: "mingi020901@ajou.ac.kr",
    photo: "/images/members/kim-mingi.jpg",
  },
  {
    id: 7,
    name: "박희원",
    nameEn: "PARK HEE WON",
    degree: "학부인턴",
    field: "모듈러 건축",
    email: "hhwon27@ajou.ac.kr",
    photo: "/images/members/park-heewon.jpg",
  },
];
