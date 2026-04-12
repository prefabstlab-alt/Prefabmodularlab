import {
  GOOGLE_SCHOLAR_URL,
  PROFESSOR_NAME_KR,
  publications,
  type Publication,
} from "@/data/publications";

export const metadata = {
  title: "학술논문 및 발표 | PREFAB Structure Lab",
};

function PublicationRow({ pub }: { pub: Publication }) {
  const body = (
    <div>
      <h3 className="font-montserrat text-base font-semibold leading-snug text-primary">
        {pub.title}
      </h3>
      <p className="mt-1 text-sm text-slate-600">{pub.authors}</p>
      <p className="mt-0.5 text-sm text-slate-500">
        <span className="italic">{pub.venue}</span>
        <span className="mx-1">·</span>
        <span>{pub.year}</span>
      </p>
    </div>
  );
  return (
    <li className="border-b border-slate-200 py-5 last:border-b-0">
      {pub.url ? (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block transition hover:text-accent"
        >
          {body}
          <span className="mt-1 inline-block text-xs text-accent opacity-0 transition group-hover:opacity-100">
            원문 보기 →
          </span>
        </a>
      ) : (
        body
      )}
    </li>
  );
}

export default function PublicationsPage() {
  const journals = publications
    .filter((p) => p.type === "journal")
    .sort((a, b) => b.year - a.year);
  const conferences = publications
    .filter((p) => p.type === "conference")
    .sort((a, b) => b.year - a.year);

  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Publications
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          학술논문 및 발표
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {PROFESSOR_NAME_KR} 교수 연구실의 주요 학술 성과입니다. 전체 논문 목록과
          인용 지표는{" "}
          <a
            href={GOOGLE_SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2 hover:opacity-80"
          >
            Google Scholar 프로필
          </a>
          에서 확인하실 수 있습니다.
        </p>
      </header>

      <section className="mb-14">
        <h2 className="mb-4 border-b border-slate-200 pb-3 font-montserrat text-xl font-semibold text-primary md:text-2xl">
          저널 논문 ({journals.length})
        </h2>
        <ul>
          {journals.map((p, i) => (
            <PublicationRow key={`${p.year}-${i}`} pub={p} />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 border-b border-slate-200 pb-3 font-montserrat text-xl font-semibold text-primary md:text-2xl">
          학술 발표 ({conferences.length})
        </h2>
        <ul>
          {conferences.map((p, i) => (
            <PublicationRow key={`${p.year}-${i}`} pub={p} />
          ))}
        </ul>
      </section>

      <footer className="mt-14 rounded-lg bg-bg-gray p-6 text-sm text-slate-600">
        본 목록은 WebSearch 및 공개 DB 결과에서 확인된 주요 논문을 수동으로 정리한
        것이며, 전수 목록은 아닙니다. 누락된 논문이나 수정 사항이 있다면 Google
        Scholar 프로필 또는 연구실 담당자를 통해 보완할 수 있습니다.
      </footer>
    </main>
  );
}
