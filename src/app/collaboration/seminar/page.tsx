import Link from "next/link";

export const metadata = {
  title: "기술세미나 및 교육 | 기술협력 문의 | PREFAB Structure Lab",
};

const TOPICS = [
  {
    title: "모듈러 건축 시스템 개론",
    body:
      "모듈러 건축의 국내외 동향, 주요 기술, 시장 현황, 정책 환경을 망라한 종합 개요 강의.",
  },
  {
    title: "AJ Modular System 심화",
    body:
      "연구실이 개발한 관통형 모듈러 접합 기술의 원리·실험 데이터·설계 방법론·시공 상세를 다루는 심화 세미나.",
  },
  {
    title: "내진 설계 및 구조 성능 평가",
    body:
      "모듈러 건축물의 내진 설계 기준, 접합부 성능 평가, 중고층 모듈러 구조 시스템 설계에 대한 실무 교육.",
  },
  {
    title: "비구조요소 내진",
    body:
      "천장·이중바닥·비내력 벽체 등 비구조요소의 내진 성능 평가·보강 기술, 관련 국내외 기준 해설.",
  },
  {
    title: "모듈러 내화 설계",
    body:
      "모듈러 건축 내화 설계의 합리화 전략, 성능 기반 내화 설계 사례, 최신 연구 동향 강의.",
  },
  {
    title: "TRIZ / 6-Sigma 기반 제품개발",
    body:
      "혁신적 건축 제품 개발론. 기업 연구개발팀 대상 맞춤형 워크숍 및 사례 기반 교육.",
  },
];

const FORMATS = [
  {
    label: "초청 강연",
    body: "학회·협회·정책 포럼 초청 강연 (1~2시간)",
  },
  {
    label: "기업 맞춤 세미나",
    body: "기업 요청 주제에 맞춘 반일/종일 세미나",
  },
  {
    label: "심화 교육 과정",
    body: "연속 강의 + 실험·설계 실습 (2~5일)",
  },
  {
    label: "현장 방문 컨설팅",
    body: "공장·현장 방문 기술 자문",
  },
];

export default function SeminarPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-16 md:py-24">
      <nav className="mb-8 text-sm">
        <Link href="/collaboration" className="text-accent hover:underline">
          ← 기술협력 문의
        </Link>
      </nav>

      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Seminar &amp; Training
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-5xl">
          기술세미나 및 교육
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          모듈러 건축·강구조·내진 설계 등 연구실의 전문 분야에 대한 기술
          세미나, 기업 맞춤형 교육, 초청 강연을 제공합니다.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary md:text-2xl">
          주요 강의 주제
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-accent"
            >
              <div className="font-montserrat text-xs font-semibold uppercase tracking-widest text-accent">
                Topic {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-montserrat text-lg font-semibold text-primary">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-lg bg-bg-gray p-8 md:p-10">
        <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary md:text-2xl">
          운영 형태
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((f, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <div className="font-montserrat text-sm font-semibold text-accent">
                {f.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border-2 border-primary bg-white p-8 md:p-10">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          세미나·교육 문의
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
          기업·학회·기관에서 세미나 또는 교육을 원하시는 경우 아래 연락처로
          희망 주제·대상·일정·장소 등을 간단히 기재하여 문의해 주세요.
        </p>
        <div className="mt-6 grid gap-2 text-sm">
          <div>
            <span className="inline-block w-16 text-slate-500">담당</span>
            <span className="text-slate-800">조봉호 교수</span>
          </div>
          <div>
            <span className="inline-block w-16 text-slate-500">Tel.</span>
            <span className="text-slate-800">
              031-219-3572 / 010-3801-4912
            </span>
          </div>
          <div>
            <span className="inline-block w-16 text-slate-500">Email</span>
            <a
              href="mailto:bhcho@ajou.ac.kr?subject=[기술세미나·교육 문의] "
              className="text-accent hover:underline"
            >
              bhcho@ajou.ac.kr
            </a>
          </div>
        </div>
        <a
          href="mailto:bhcho@ajou.ac.kr?subject=[기술세미나·교육 문의] "
          className="mt-6 inline-block bg-primary px-6 py-3 font-montserrat text-sm font-medium tracking-widest text-white transition hover:bg-secondary"
        >
          이메일로 문의하기 →
        </a>
      </section>
    </main>
  );
}
