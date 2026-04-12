import Link from "next/link";
import { getLatestResearch } from "@/lib/research";
import ResearchCard from "@/components/ResearchCard";

const MASS_ITEMS = [
  { letter: "M", en: "Modular", kr: "모듈러" },
  { letter: "A", en: "Architecture", kr: "건축" },
  { letter: "S", en: "Steel", kr: "강구조" },
  { letter: "S", en: "Structure", kr: "구조" },
];

export default function HomePage() {
  const latest = getLatestResearch(6);

  return (
    <main>
      {/* 1. Research blog card grid — above the fold */}
      <section className="mx-auto max-w-content px-4 pb-14 pt-12 md:pb-20 md:pt-16">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Research Blog
            </p>
            <h1 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-4xl">
              연구 분야
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              아주대학교 프리팹 건축구조연구실의 최신 연구 주제와 진행 현황을
              확인하세요.
            </p>
          </div>
          <Link
            href="/research"
            className="shrink-0 self-end whitespace-nowrap text-sm font-medium text-accent transition hover:underline"
          >
            전체 보기 →
          </Link>
        </header>

        {latest.length === 0 ? (
          <p className="rounded border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            등록된 연구 글이 아직 없습니다.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <ResearchCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* 2. Notice (placeholder for now) */}
      <section className="bg-bg-gray">
        <div className="mx-auto max-w-content px-4 py-12">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="font-montserrat text-xl font-semibold text-primary">
              NOTICE
            </h2>
            <Link
              href="/notice"
              className="text-sm text-accent transition hover:underline"
            >
              전체 공지 →
            </Link>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-xs tracking-wide text-slate-500">2025-04-12</p>
            <p className="mt-1.5 text-base text-slate-800">
              공지사항이 곧 게시됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MASS section */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Our Focus
          </p>
          <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-3xl">
            What is <span className="text-accent">MASS</span>?
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MASS_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-6 text-center transition hover:border-accent hover:shadow-sm"
            >
              <div className="font-montserrat text-6xl font-bold text-primary">
                {item.letter}
              </div>
              <div className="mt-2 text-sm font-medium text-accent">
                {item.en}
              </div>
              <div className="text-xs text-slate-500">{item.kr}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dark CTA banner */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-content px-4 py-16 text-center">
          <p className="font-montserrat text-xs tracking-[0.3em] text-slate-400">
            PREFAB-STRUCTURE / AJOU UNIVERSITY
          </p>
          <h2 className="mt-4 font-montserrat text-3xl font-semibold md:text-4xl">
            프리팹 건축구조연구실
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            강구조·모듈러 건축 등 첨단 공업화 건축 분야의 연구와 전문가 양성을
            이어가고 있습니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-white px-8 py-3 font-montserrat text-sm tracking-widest transition hover:bg-white hover:text-primary"
          >
            CONTACT
          </Link>
        </div>
      </section>
    </main>
  );
}
