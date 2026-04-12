export type Stat = {
  label: string;
  value: string;
  suffix?: string;
};

export const labStats: Stat[] = [
  { label: "연구원", value: "8", suffix: "명" },
  { label: "학술 논문·발표", value: "14", suffix: "+편" },
  { label: "연구 프로젝트", value: "26", suffix: "건" },
  { label: "산학 협력 기관", value: "8", suffix: "개사" },
];
