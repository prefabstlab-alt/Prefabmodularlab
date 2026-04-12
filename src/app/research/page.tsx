import {
  RESEARCH_CATEGORIES,
  getResearchByCategory,
} from "@/lib/research";
import ResearchCard from "@/components/ResearchCard";

export const metadata = {
  title: "연구 분야 | PREFAB Structure Lab",
};

export default function ResearchListPage() {
  const grouped = getResearchByCategory();

  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Research
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          연구 분야
        </h1>
        <nav className="mt-6 flex flex-wrap gap-2">
          {RESEARCH_CATEGORIES.map((category) => (
            <a
              key={category}
              href={`#${encodeURIComponent(category)}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 transition hover:border-accent hover:text-accent"
            >
              {category}
            </a>
          ))}
        </nav>
      </header>

      <div className="space-y-16">
        {RESEARCH_CATEGORIES.map((category) => {
          const posts = grouped[category];
          return (
            <section
              key={category}
              id={encodeURIComponent(category)}
              className="scroll-mt-24"
            >
              <div className="mb-6 flex items-baseline justify-between border-b border-slate-200 pb-3">
                <h2 className="font-montserrat text-xl font-semibold text-primary md:text-2xl">
                  {category}
                </h2>
                <span className="text-xs text-slate-500">
                  {posts.length}건
                </span>
              </div>

              {posts.length === 0 ? (
                <p className="rounded border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
                  등록된 연구 글이 아직 없습니다.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((p) => (
                    <ResearchCard key={p.slug} post={p} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
