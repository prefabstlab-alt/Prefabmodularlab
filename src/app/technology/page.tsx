import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "보유 기술 소개 — AJ Modular System | PREFAB Structure Lab",
};

const BACKGROUND_POINTS = [
  {
    title: "현장 용접·볼트 접합의 한계",
    body:
      "기존 모듈러 건축은 현장 용접 또는 볼트 접합에 의존해 공기 단축·마감 품질 편차·해체 재사용 불가 등의 문제를 안고 있었습니다.",
  },
  {
    title: "모듈 접합부 내진 성능 부족",
    body:
      "특히 중고층 모듈러에서는 모듈 간 접합부의 내진 성능 확보가 핵심 과제이며, 관련 연구 자체가 미비한 상황이었습니다.",
  },
  {
    title: "마감과의 간섭 · 작업공간 확보 문제",
    body:
      "볼트 접합 방식은 내·외장재 설치 이후 접근이 어려워 공장에서의 완전 마감이 사실상 불가능했습니다.",
  },
];

const SYSTEM_ADVANTAGES = [
  {
    n: "01",
    title: "100% 공장 마감 후 현장 조립",
    body:
      "접합 방향이 모듈의 상·하부이므로 내·외장재가 완전히 설치된 상태에서 현장 조립이 가능합니다. 공기 단축과 품질 향상을 동시에 달성.",
  },
  {
    n: "02",
    title: "중간모멘트 골조 수준의 내진 성능",
    body:
      "구조 성능 실험을 통해 층간변위각 2%에서 소성 모멘트의 80% 이상을 유지하는 중간모멘트 골조 수준의 내진 성능을 입증. 중고층 건축물 적용 시 지진 하중 33% 절감 가능.",
  },
  {
    n: "03",
    title: "각형강관·H형강 모두 적용",
    body:
      "기둥 단면 형상에 관계없이 적용 가능하여 다양한 모듈러 건축 프로젝트에 유연하게 대응할 수 있습니다.",
  },
  {
    n: "04",
    title: "해체 용이 및 즉시 재사용",
    body:
      "포스트텐션 방식이므로 해체가 용이하며, 실험을 통해 조립·해체 과정에서 하부 기둥의 프리로드가 초기값으로 거의 복원됨을 확인. 재사용 친환경 건축에 부합.",
  },
  {
    n: "05",
    title: "8모듈 집중 접합부 대응",
    body:
      "상하 4모듈씩 총 8개 모듈이 만나는 내부 접합부도 단일 커넥터로 처리 가능. 보-기둥 접합부의 단면 손실에 의한 구조 성능 저하도 방지.",
  },
  {
    n: "06",
    title: "기성 공구 · 부자재 활용",
    body:
      "전용 설비 없이도 토크 렌치·임팩트 렌치 등 기성 공구로 시공이 가능하며, 강봉·너트·커넥터는 국내 철물 제조업체에서 주문 제작 가능.",
  },
];

const EXPERIMENT_RESULTS = [
  {
    code: "EX-SB",
    label: "각형강관 기둥 시스템",
    spec: "□-200×100×12 (SRT275) 기둥 + □-200×100×4.5 보",
    result:
      "EX-SB-160PT, EX-SB-200PT 두 실험체 모두 층간변위각 2%에서 소성 모멘트 0.8Mp 이상 유지. 중간모멘트 골조 성능 입증.",
  },
  {
    code: "EX-DB",
    label: "H형강 기둥 시스템",
    spec: "H-200×200×8×12 (SHN275) 기둥 + H-200×100×5.5×8 바닥보",
    result:
      "EX-DB-175PT, EX-DB-260PT 두 실험체 모두 모멘트 골조 수준의 성능 확인. gap-opening 1mm 미만 유지.",
  },
  {
    code: "AJ-TW",
    label: "AJ 커넥터 축력 도입 실험",
    spec: "3.08m / 1.58m 강봉, 토크렌치·임팩트렌치",
    result:
      "상부 모듈 조립·해체 시 하부 기둥 프리로드는 초기값 대비 7~8% 감소 후 해체 시 거의 완전히 복원. 재사용 시 성능 유지 검증.",
  },
];

const CONNECTOR_SPECS = [
  { size: "M16", tensile: "223.3", shear: "54.5" },
  { size: "M18", tensile: "282.6", shear: "77.0" },
  { size: "M20", tensile: "348.9", shear: "104.8" },
  { size: "M22", tensile: "391.8", shear: "121.4" },
  { size: "M24", tensile: "502.4", shear: "145.5" },
  { size: "M27", tensile: "654.9", shear: "215.6" },
  { size: "M30", tensile: "827.6", shear: "304.5" },
];

const RELATED = [
  {
    slug: "cable-connection-seismic",
    label: "관통형 케이블 접합 방식 모듈러 건축물 내진 성능 평가 및 해석 모델 개발",
  },
  {
    slug: "highrise-steel-core",
    label: "중고층 모듈러 건축 프리팹 철골코어 시스템 개발",
  },
  {
    slug: "weldless-connection",
    label: "모듈러 건축물 무용접 접합 시스템 성능 평가",
  },
  {
    slug: "quick-connector-seismic",
    label: "퀵 커넥터를 적용한 모듈러 건축물 접합부 내진 성능 평가",
  },
];

export default function TechnologyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Our Technology
            </p>
            <h1 className="mt-4 font-montserrat text-4xl font-bold leading-[1.1] md:text-6xl">
              AJ Modular<br />
              <span className="text-accent">System</span>
            </h1>
            <p className="mt-5 font-montserrat text-lg text-slate-200 md:text-xl">
              관통형 볼트 · 포스트텐션 기반<br />
              아주대학교 프리팹건축구조연구실의 대표 특허 기술
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              공장에서 100% 마감된 모듈을 현장에서 수직 관통 접합 방식으로
              조립하는 건식 접합 시스템입니다. 중간모멘트 골조 수준의 내진
              성능을 확보하여 중고층 · 대공간 모듈러 건축까지 적용 범위를
              확장합니다.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white/5 md:aspect-auto md:min-h-[340px]">
            <Image
              src="/images/technology/aj-connector-diagram.png"
              alt="AJ Connector 단면도"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="mx-auto max-w-content px-4 py-16 md:py-24">
        <header className="mb-10 md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Background
          </p>
          <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-4xl">
            기술 배경
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            모듈러 건축은 품질 관리·건설 인력 부족·탄소 배출 저감 등 여러
            사회적 이슈에 대응할 수 있는 건축 방식으로 주목받고 있지만,
            아래 기술적 한계가 시장 확대의 걸림돌로 작용해왔습니다.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {BACKGROUND_POINTS.map((pt, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-6 md:p-8"
            >
              <div className="font-montserrat text-3xl font-bold text-slate-200">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-montserrat text-lg font-semibold text-primary">
                {pt.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {pt.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM OVERVIEW */}
      <section className="bg-bg-gray">
        <div className="mx-auto max-w-content px-4 py-16 md:py-24">
          <header className="mb-10 md:mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              System Overview
            </p>
            <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-4xl">
              AJ Modular System 구성
            </h2>
          </header>

          <div className="mb-10 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/technology/aj-system-overview.png"
                alt="AJ Modular System 전체 구성"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain p-6"
              />
            </div>
          </div>

          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="font-montserrat text-xs uppercase tracking-widest text-accent">
                수직 접합
              </div>
              <h3 className="mt-2 font-montserrat text-lg font-semibold text-primary">
                관통형 볼트 + AJ 커넥터
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                기둥 내부를 관통하는 강봉(Rod bar)과 상·하단 나사부를 가진 AJ
                커넥터를 통해 포스트텐션을 도입, 모듈 간 수직 접합부를
                완성합니다. 강봉 하부에는 운송 시 낙하 방지를 위한 너트가
                선설치됩니다.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="font-montserrat text-xs uppercase tracking-widest text-accent">
                수평 접합
              </div>
              <h3 className="mt-2 font-montserrat text-lg font-semibold text-primary">
                연결 플레이트 + 가이드 핀
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                인접 모듈 사이에는 커넥트 플레이트 및 커버 플레이트를 통해
                수평 하중을 전달합니다. 가이드 핀은 적층 시 모듈 유닛을 계획된
                위치에 정확히 안착시키며 전단 저항 기능도 수행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES GRID */}
      <section className="mx-auto max-w-content px-4 py-16 md:py-24">
        <header className="mb-10 md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Key Advantages
          </p>
          <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-4xl">
            핵심 장점
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SYSTEM_ADVANTAGES.map((adv) => (
            <div
              key={adv.n}
              className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-accent hover:shadow-sm md:p-7"
            >
              <div className="font-montserrat text-3xl font-semibold text-accent">
                {adv.n}
              </div>
              <h3 className="mt-3 font-montserrat text-lg font-semibold text-primary">
                {adv.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {adv.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FABRICATION */}
      <section className="bg-bg-gray">
        <div className="mx-auto max-w-content px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="relative order-2 aspect-[3/4] w-full overflow-hidden rounded-lg border border-slate-200 bg-white md:order-1">
              <Image
                src="/images/technology/aj-fabrication.png"
                alt="AJ 커넥터 제작 및 모듈 적층 예시"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain p-6"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Fabrication
              </p>
              <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-4xl">
                부재 설계 및 제작
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                AJ 커넥터는 나사부·와셔부·전단 저항부·상·하단부로 구성되며,
                F10T 강종으로 주문 제작됩니다. 강봉 및 커플러는 국내 고장력
                볼트 제조 업체에서 S45C·F10T 등급으로 제작 가능합니다.
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary text-left">
                      <th className="py-2 font-montserrat font-semibold text-primary">
                        규격
                      </th>
                      <th className="py-2 font-montserrat font-semibold text-primary">
                        허용 인장력 (kN)
                      </th>
                      <th className="py-2 font-montserrat font-semibold text-primary">
                        허용 전단력 (kN)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CONNECTOR_SPECS.map((spec) => (
                      <tr
                        key={spec.size}
                        className="border-b border-slate-200 text-slate-700"
                      >
                        <td className="py-2 font-medium">{spec.size}</td>
                        <td className="py-2">{spec.tensile}</td>
                        <td className="py-2">{spec.shear}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-slate-500">
                  강도: F10T 기준 · 상세 설계값은 연구실 기술 자료 참조
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURAL EXPERIMENTS */}
      <section className="mx-auto max-w-content px-4 py-16 md:py-24">
        <header className="mb-10 md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Structural Validation
          </p>
          <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-4xl">
            구조 성능 실험
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            각형강관 기둥 시스템·H형강 기둥 시스템·AJ 커넥터 축력 도입 실험의
            3단계 실험을 통해 기술의 구조 성능과 시공성·재사용성을
            종합적으로 검증했습니다.
          </p>
        </header>

        <div className="mb-10 overflow-hidden rounded-lg border border-slate-200">
          <div className="relative aspect-[16/9] w-full bg-bg-gray">
            <Image
              src="/images/technology/aj-experiment.png"
              alt="AJ 시스템 구조 성능 실험"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-6"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {EXPERIMENT_RESULTS.map((exp) => (
            <div
              key={exp.code}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="mb-3 inline-block rounded bg-accent/10 px-2 py-0.5 font-mono text-xs font-semibold text-accent">
                {exp.code}
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-primary">
                {exp.label}
              </h3>
              <p className="mt-2 text-xs text-slate-500">{exp.spec}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {exp.result}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          ※ 실험은 KDS 14 31 60 강구조 내진 설계 기준의 가력 절차(층간변위각 0.375% → 8% 단계 반복 가력)에 따라 진행되었습니다.
        </p>
      </section>

      {/* CONSTRUCTION PHOTO */}
      <section className="bg-primary">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white/5">
            <Image
              src="/images/technology/aj-construction.png"
              alt="AJ Modular System 실제 시공 현장"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Real Application
            </p>
            <h2 className="mt-2 font-montserrat text-2xl font-semibold md:text-3xl">
              실제 적용 현장
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              AJ Modular System은 기린산업 당진 공장 등에서 2층 모듈 실대
              조립·해체 테스트를 완료하였으며, 실제 모듈러 건축 현장에
              적용되어 공기 단축과 품질 향상 효과를 검증받았습니다.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED RESEARCH */}
      <section className="mx-auto max-w-content px-4 py-16 md:py-24">
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Related Research
          </p>
          <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-3xl">
            관련 연구 성과
          </h2>
        </header>
        <ul className="space-y-3">
          {RELATED.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/research/${r.slug}`}
                className="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-5 transition hover:border-accent"
              >
                <span className="font-medium text-primary group-hover:text-accent">
                  {r.label}
                </span>
                <span className="shrink-0 text-accent">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-content px-4 py-16 text-center md:py-24">
          <h2 className="font-montserrat text-2xl font-semibold md:text-4xl">
            AJ Modular System 기술이전 · 공동연구
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            관통형 모듈러 접합기술의 상용화, 공동 적용, 성능 인증 컨설팅 등
            다양한 형태의 기술 협력을 환영합니다. 연구실과 연락처는
            아래로 문의해 주세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/collaboration/licensing"
              className="bg-white px-6 py-3 font-montserrat text-sm font-medium tracking-widest text-primary transition hover:bg-slate-100"
            >
              기술이전 문의
            </Link>
            <Link
              href="/collaboration/rnd"
              className="border border-white/70 px-6 py-3 font-montserrat text-sm font-medium tracking-widest text-white transition hover:bg-white hover:text-primary"
            >
              R&amp;D 협력 문의
            </Link>
          </div>
          <p className="mt-8 text-xs tracking-wide text-slate-400">
            조봉호 교수 · TEL. 031-219-3572 / 010-3801-4912 ·{" "}
            <a
              href="mailto:bhcho@ajou.ac.kr"
              className="underline underline-offset-2 hover:text-white"
            >
              bhcho@ajou.ac.kr
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
