export const metadata = { title: "연구실 소개 | PREFAB Structure Lab" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Introduce
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          연구실 소개
        </h1>
        <p className="mt-3 text-base italic text-slate-600">
          구조 전문가로서의 책임의식을 가진 고급 엔지니어 양성 / 첨단 공업화
          건축 연구
        </p>
      </header>

      <section className="space-y-5 text-base leading-relaxed text-slate-800">
        <p>
          아주대학교 프리팹 건축구조연구실은 강구조, 모듈러 건축 등의 첨단
          공업화 건축 분야와 다양한 건축자재 관련 기술을 연구하고, 관련 전문가를
          양성하는 국내 최고 수준의 연구 및 교육기관입니다.
        </p>
        <p>
          1992년 이승준 교수님에 의한 창립 이래로 강구조 분야에서 국내 최고
          수준의 다양한 연구를 수행하였으며, 건축구조 관련 전문 엔지니어들을
          다수 배출하였습니다. 2010년 조봉호 교수가 부임 이후, 현재에는 모듈러
          건축, 기후변화 대응 기술, 건축자재, TRIZ/6-Sigma 등 제품개발 방법론,
          융복합 건축구조 연구 등 폭넓은 연구 분야를 다루고 있습니다.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-montserrat text-xl font-semibold text-primary">
          주요 참여 연구단
        </h2>
        <p className="mb-3 text-sm text-slate-600">
          저희 연구실은 국토교통부의 3개 대형 연구단의 주요 일원으로 주도적으로
          참여하고 있습니다.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="border-l-2 border-accent pl-4">
            지진 및 기후변화 대응 소규모·기존 건축물 구조 안전성 향상기술 개발
            연구단
          </li>
          <li className="border-l-2 border-accent pl-4">
            모듈러 건축 중고층화 및 생산성 향상 기술개발 연구단
          </li>
          <li className="border-l-2 border-accent pl-4">
            노후 공동주택의 리모델링에 적합한 설계기술 및 주거성능 향상기술 개발
            연구단
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-montserrat text-xl font-semibold text-primary">
          산학협력
        </h2>
        <p className="text-sm leading-relaxed text-slate-700">
          포스코, 삼성물산, 제일모직, 극동건설, RIST, ㈜유창, ㈜대창스틸, NI스틸
          등 다수의 기업 및 연구기관과 지속적인 연구 교류 및 협력을 수행하고
          있습니다.
        </p>
      </section>

      <section className="mt-12 rounded-lg bg-bg-gray p-8">
        <h2 className="mb-3 font-montserrat text-xl font-semibold text-primary">
          연구 목표
        </h2>
        <p className="text-sm leading-relaxed text-slate-700">
          상식을 존중하고, 배움에는 겸손하고, 일에는 성실하며, 다른 사람을
          배려하고, 항상 안전과 경제성을 염두에 두며 보편·타당성을 중시하되
          창의적인 문제 해결 능력을 갖춘 건설 엔지니어 양성.
        </p>
      </section>
    </main>
  );
}
