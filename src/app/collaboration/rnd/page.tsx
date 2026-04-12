import Link from "next/link";

export const metadata = {
  title: "R&D 협력 | 기술협력 문의 | PREFAB Structure Lab",
};

const AREAS = [
  {
    title: "모듈러 건축 제품개발",
    body:
      "신규 모듈러 접합 시스템, 부재 설계, 시스템 최적화, 시공 상세 개발 등 모듈러 건축 분야의 새로운 제품·기술 개발을 지원합니다.",
  },
  {
    title: "성능 인증 컨설팅",
    body:
      "내화·내진·차음·기밀 등 모듈러 건축 성능 시험 설계, 실험 수행, 결과 해석, 인증 기관 대응까지 전 과정의 기술 컨설팅을 제공합니다.",
  },
  {
    title: "공장 생산성 향상",
    body:
      "모듈러 건축 공장의 생산 프로세스 분석, 라인 최적화, 품질 관리 체계 구축, 생산 관리 소프트웨어 개발 등 제조 경쟁력 확보를 위한 연구를 수행합니다.",
  },
  {
    title: "시장 분석 및 전략 수립",
    body:
      "국내외 모듈러 건축 시장 동향 조사, 수요 예측, 정책 분석, 경쟁 제품 분석 등 전략 의사결정을 위한 분석 보고서를 제공합니다. (2024년 국내 시장조사 등 실적 다수)",
  },
  {
    title: "기타 모듈러 기술 협력",
    body:
      "강구조·비구조요소 내진·건축자재·리모델링·TRIZ/6-Sigma 기반 제품 개발 방법론 등 연구실의 폭넓은 연구 분야에서 맞춤형 협력이 가능합니다.",
  },
];

const PARTNERS = [
  "포스코",
  "삼성물산",
  "제일모직",
  "극동건설",
  "RIST",
  "㈜유창",
  "㈜대창스틸",
  "NI스틸",
];

export default function RndPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-16 md:py-24">
      <nav className="mb-8 text-sm">
        <Link href="/collaboration" className="text-accent hover:underline">
          ← 기술협력 문의
        </Link>
      </nav>

      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          R&amp;D Collaboration
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-5xl">
          R&amp;D 협력
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          모듈러 건축물 관련 제품 개발부터 성능 인증, 공장 생산성 향상, 시장
          분석까지 — 연구실은 산업계·연구기관과 함께 다양한 형태의 공동 연구를
          수행하고 있습니다.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary md:text-2xl">
          협력 가능 분야
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {AREAS.map((a, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-6 md:p-7"
            >
              <div className="font-montserrat text-xs font-semibold uppercase tracking-widest text-accent">
                Area {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-montserrat text-lg font-semibold text-primary">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-lg bg-bg-gray p-8 md:p-10">
        <h2 className="mb-4 font-montserrat text-lg font-semibold text-primary">
          주요 산학 협력 실적
        </h2>
        <p className="mb-5 text-sm text-slate-600">
          연구실은 아래 기업·기관과 지속적으로 공동 연구를 수행해 왔습니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-lg border-2 border-primary bg-white p-8 md:p-10">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          문의 방법
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
          R&amp;D 협력 문의는 아래 연락처로 이메일 또는 전화 부탁드립니다.
          협력 분야·예상 규모·일정을 간단히 기재해 주시면 연구실에서 회신
          드리겠습니다.
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
              href="mailto:bhcho@ajou.ac.kr?subject=[R%26D 협력 문의] "
              className="text-accent hover:underline"
            >
              bhcho@ajou.ac.kr
            </a>
          </div>
        </div>
        <a
          href="mailto:bhcho@ajou.ac.kr?subject=[R%26D 협력 문의] "
          className="mt-6 inline-block bg-primary px-6 py-3 font-montserrat text-sm font-medium tracking-widest text-white transition hover:bg-secondary"
        >
          이메일로 문의하기 →
        </a>
      </section>
    </main>
  );
}
