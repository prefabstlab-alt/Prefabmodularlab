import { mediaItems, SCHOLAR_URL, RESEARCHGATE_URL } from "@/data/media";

export const metadata = {
  title: "언론 및 미디어 | PREFAB Structure Lab",
};

const TYPE_LABEL: Record<string, string> = {
  news: "언론 보도",
  video: "영상",
  award: "수상/행사",
  "press-release": "보도자료",
};

const TYPE_BADGE_CLASS: Record<string, string> = {
  news: "bg-slate-100 text-slate-700",
  video: "bg-red-50 text-red-700",
  award: "bg-amber-50 text-amber-700",
  "press-release": "bg-blue-50 text-blue-700",
};

export default function MediaPage() {
  const sorted = [...mediaItems].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Press & Media
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          언론 및 미디어
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          프리팹 건축구조연구실과 조봉호 교수의 언론 보도, 수상 실적, 외부 미디어
          자료를 모아두었습니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 transition hover:border-accent hover:text-accent"
          >
            Google Scholar →
          </a>
          <a
            href={RESEARCHGATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-4 py-1.5 text-slate-700 transition hover:border-accent hover:text-accent"
          >
            ResearchGate →
          </a>
        </div>
      </header>

      <ul className="space-y-4">
        {sorted.map((item, i) => (
          <li
            key={i}
            className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-accent hover:shadow-sm"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span
                  className={`rounded px-2 py-0.5 font-medium ${
                    TYPE_BADGE_CLASS[item.type] ?? "bg-slate-100 text-slate-700"
                  }`}
                >
                  {TYPE_LABEL[item.type] ?? item.type}
                </span>
                <span>{item.date}</span>
                <span>·</span>
                <span>{item.publisher}</span>
              </div>
              <h3 className="font-montserrat text-base font-semibold leading-snug text-primary transition group-hover:text-accent md:text-lg">
                {item.title}
              </h3>
              {item.summary ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.summary}
                </p>
              ) : null}
              <span className="mt-3 inline-block text-xs text-accent">
                원문 보기 →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-12 rounded-lg bg-bg-gray p-6 text-sm leading-relaxed text-slate-600">
        YouTube 영상이나 추가 언론 보도 자료는 지속적으로 보강할 예정입니다. 제보나
        추가 자료가 있다면 연구실로 연락해 주세요.
      </footer>
    </main>
  );
}
