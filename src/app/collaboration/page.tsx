import Link from "next/link";

export const metadata = {
  title: "기술협력 문의 | PREFAB Structure Lab",
};

const OPTIONS = [
  {
    href: "/collaboration/rnd",
    kicker: "01",
    title: "R&D 협력",
    body:
      "모듈러 건축물 관련 제품개발, 성능인증, 공장 생산성 향상 컨설팅, 시장 분석 등 산학 공동 연구 전반.",
  },
  {
    href: "/collaboration/licensing",
    kicker: "02",
    title: "기술이전",
    body:
      "관통형 모듈러 건축 접합 기술(AJ Modular System)의 상용화를 위한 기술이전 및 실시권 협의.",
  },
  {
    href: "/collaboration/seminar",
    kicker: "03",
    title: "기술세미나 및 교육",
    body:
      "모듈러 건축·강구조·내진 설계 관련 기술 세미나, 기업 맞춤형 교육 프로그램, 초청 강연.",
  },
];

export default function CollaborationLanding() {
  return (
    <main className="mx-auto max-w-content px-4 py-16 md:py-24">
      <header className="mb-12 md:mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Partnership
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-5xl">
          기술협력 문의
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          아주대학교 프리팹 건축구조연구실은 국내 주요 건설사·연구기관·제조사와
          다양한 형태의 기술 협력을 수행해 왔습니다. 아래 세 가지 협력 채널 중
          관심 있는 분야를 선택해 주세요.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {OPTIONS.map((opt) => (
          <Link
            key={opt.href}
            href={opt.href}
            className="group flex flex-col rounded-lg border border-slate-200 bg-white p-8 transition hover:border-accent hover:shadow-md"
          >
            <div className="font-montserrat text-4xl font-semibold text-accent">
              {opt.kicker}
            </div>
            <h2 className="mt-4 font-montserrat text-xl font-semibold text-primary group-hover:text-accent">
              {opt.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {opt.body}
            </p>
            <span className="mt-6 text-sm font-medium text-accent">
              자세히 보기 →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-bg-gray p-8 md:p-12">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          일반 문의처
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          조봉호 교수 · 아주대학교 건축공학과<br />
          TEL. 031-219-3572 / 010-3801-4912<br />
          EMAIL.{" "}
          <a
            href="mailto:bhcho@ajou.ac.kr"
            className="text-accent hover:underline"
          >
            bhcho@ajou.ac.kr
          </a>
        </p>
      </div>
    </main>
  );
}
