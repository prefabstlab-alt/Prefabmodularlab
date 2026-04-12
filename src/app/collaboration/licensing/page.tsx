import Link from "next/link";

export const metadata = {
  title: "기술이전 | 기술협력 문의 | PREFAB Structure Lab",
};

const TRACK_RECORD = [
  {
    year: "완료",
    title: "모듈러 건축 전문 제작사 4개사 기술이전 완료",
    body:
      "AJ Modular System의 기술을 국내 모듈러 건축 전문 제작사 4개사에 이전하여 실제 건축 현장에서 본 기술이 상용화되고 있습니다.",
  },
  {
    year: "다수",
    title: "국내 특허 보유",
    body:
      "모듈러 건축물의 결합 장치, 건축용 외장재 고정 장치 등 연구실에서 10여 건의 관련 특허를 보유하고 있습니다.",
  },
];

const OFFER = [
  "기술 실시권 (Exclusive / Non-exclusive) 협의",
  "기술 이전 교육 및 시공 지침 제공",
  "제조사 대상 부재 제작 검토·자문",
  "도입 기업의 성능 검증 실험 지원",
  "기술 이전 후 일정 기간 기술 자문",
];

export default function LicensingPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-16 md:py-24">
      <nav className="mb-8 text-sm">
        <Link href="/collaboration" className="text-accent hover:underline">
          ← 기술협력 문의
        </Link>
      </nav>

      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Technology Licensing
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-5xl">
          기술이전
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          연구실이 보유한{" "}
          <Link
            href="/technology"
            className="font-medium text-accent hover:underline"
          >
            AJ Modular System (관통형 모듈러 건축 접합 기술)
          </Link>
          의 상용화를 위한 기술 이전 및 실시권 협의를 받고 있습니다.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary md:text-2xl">
          주요 기술이전 대상
        </h2>
        <div className="rounded-lg border border-slate-200 bg-bg-gray p-8 md:p-10">
          <div className="font-montserrat text-xs uppercase tracking-widest text-accent">
            Primary Technology
          </div>
          <h3 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-3xl">
            AJ Modular System
          </h3>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            관통형 볼트 · 포스트텐션 · 건식 접합 · 재사용 친화형 모듈러 건축
            접합 시스템
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <li className="flex gap-2">
              <span className="text-accent">✓</span> 각형강관·H형강 기둥 모두 적용
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span> 중간모멘트 골조 수준 내진 성능
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span> 100% 공장 마감 후 현장 조립
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span> 해체·재사용 용이
            </li>
          </ul>
          <Link
            href="/technology"
            className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
          >
            기술 상세 보기 →
          </Link>
        </div>
      </section>

      <section className="mb-16 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary md:text-2xl">
            기술이전 실적
          </h2>
          <div className="space-y-4">
            {TRACK_RECORD.map((rec, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <div className="font-mono text-xs text-accent">{rec.year}</div>
                <h3 className="mt-1 font-montserrat text-base font-semibold text-primary">
                  {rec.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {rec.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-montserrat text-xl font-semibold text-primary md:text-2xl">
            기술이전 제공 범위
          </h2>
          <ul className="space-y-3 rounded-lg border border-slate-200 bg-white p-6">
            {OFFER.map((o, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="font-mono text-accent">0{i + 1}</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-lg border-2 border-primary bg-white p-8 md:p-10">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          기술이전 문의
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
          AJ Modular System 기술이전에 관심이 있으신 기업·기관은 아래
          연락처로 문의해 주세요. 회사 소개, 적용 예정 프로젝트, 희망
          실시권 범위 등을 간단히 기재해 주시면 연구실에서 회신 드리겠습니다.
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
              href="mailto:bhcho@ajou.ac.kr?subject=[AJ Modular System 기술이전 문의] "
              className="text-accent hover:underline"
            >
              bhcho@ajou.ac.kr
            </a>
          </div>
        </div>
        <a
          href="mailto:bhcho@ajou.ac.kr?subject=[AJ Modular System 기술이전 문의] "
          className="mt-6 inline-block bg-primary px-6 py-3 font-montserrat text-sm font-medium tracking-widest text-white transition hover:bg-secondary"
        >
          이메일로 문의하기 →
        </a>
      </section>
    </main>
  );
}
