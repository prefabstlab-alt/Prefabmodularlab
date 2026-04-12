import Image from "next/image";
import Link from "next/link";
import {
  getFeaturedResearch,
  getLatestNonFeatured,
} from "@/lib/research";
import ResearchCard from "@/components/ResearchCard";
import { labStats } from "@/data/stats";

const MASS_ITEMS = [
  { letter: "M", en: "Modular", kr: "모듈러" },
  { letter: "A", en: "Architecture", kr: "건축" },
  { letter: "S", en: "Steel", kr: "강구조" },
  { letter: "S", en: "Structure", kr: "구조" },
];

export default function HomePage() {
  const featured = getFeaturedResearch();
  const latest = getLatestNonFeatured(4);

  return (
    <main>
      {/* 1. HERO */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/images/hero/hero-lab.jpg"
          alt="PREFAB Structure Lab"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/85" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto flex max-w-content flex-col items-start px-4 text-white">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-slate-200">
              Ajou University
            </p>
            <h1 className="font-montserrat text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              PREFAB<br />STRUCTURE LAB
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              모듈러 건축 · 강구조 · 비구조요소 내진 · 제품개발.<br />
              첨단 공업화 건축 분야를 선도하는 국내 최고 수준의 연구실입니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 font-montserrat text-sm font-medium tracking-wide text-primary transition hover:bg-slate-100"
              >
                연구 분야 살펴보기 →
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 border border-white/70 px-6 py-3 font-montserrat text-sm font-medium tracking-wide text-white transition hover:bg-white hover:text-primary"
              >
                보유 기술 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-y-8 px-4 py-12 md:grid-cols-4 md:gap-y-0 md:py-14">
          {labStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center border-slate-200 text-center md:border-l md:first:border-l-0"
            >
              <div className="font-montserrat text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                {stat.value}
                <span className="ml-0.5 text-xl text-accent md:text-2xl">
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-2 text-xs tracking-wide text-slate-500 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED RESEARCH SPOTLIGHT */}
      {featured ? (
        <section className="mx-auto max-w-content px-4 pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Featured Research
              </p>
              <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-3xl">
                대표 연구 프로젝트
              </h2>
            </div>
          </div>

          <Link
            href={`/research/${featured.slug}`}
            className="group grid overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-lg md:grid-cols-[1.4fr_1fr]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 md:aspect-auto">
              <Image
                src={featured.thumbnail ?? "/images/research/placeholder.svg"}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-slate-500">
                <span className="rounded bg-accent/10 px-2 py-0.5 font-medium text-accent">
                  {featured.category}
                </span>
                {featured.period ? <span>· {featured.period}</span> : null}
              </div>
              <h3 className="font-montserrat text-2xl font-semibold leading-tight text-primary transition group-hover:text-accent md:text-3xl">
                {featured.title}
              </h3>
              {featured.tags && featured.tags.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              ) : null}
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent">
                자세히 보기 →
              </span>
            </div>
          </Link>
        </section>
      ) : null}

      {/* 4. LATEST RESEARCH GRID */}
      <section className="mx-auto max-w-content px-4 pb-20 md:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Latest Research
            </p>
            <h2 className="mt-2 font-montserrat text-2xl font-semibold text-primary md:text-3xl">
              최신 연구
            </h2>
          </div>
          <Link
            href="/research"
            className="shrink-0 self-end whitespace-nowrap text-sm font-medium text-accent transition hover:underline"
          >
            전체 보기 →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((post) => (
            <ResearchCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* 5. MASS SECTION — redesigned */}
      <section className="bg-bg-gray">
        <div className="mx-auto max-w-content px-4 py-20 md:py-28">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Our Focus
            </p>
            <h2 className="mt-3 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
              What we focus on.
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              네 가지 축 — 모듈러 건축의 본질을 구성하는 요소들.
            </p>
          </div>
          <div className="grid gap-0 border-t border-slate-200 md:grid-cols-4">
            {MASS_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center border-b border-slate-200 bg-white py-14 transition hover:bg-accent md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="font-montserrat text-7xl font-bold text-primary transition group-hover:text-white md:text-8xl">
                  {item.letter}
                </div>
                <div className="mt-3 font-montserrat text-sm font-medium uppercase tracking-widest text-accent transition group-hover:text-white">
                  {item.en}
                </div>
                <div className="mt-1 text-xs text-slate-500 transition group-hover:text-white/80">
                  {item.kr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-content px-4 py-20 text-center md:py-24">
          <p className="font-montserrat text-xs tracking-[0.4em] text-slate-400">
            PREFAB-STRUCTURE · AJOU UNIVERSITY
          </p>
          <h2 className="mt-5 font-montserrat text-3xl font-semibold md:text-5xl">
            함께 연구할 파트너를 찾습니다.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            강구조·모듈러 건축 등 첨단 공업화 건축 분야의 연구와 기술이전, 산학
            협력, 기술 세미나까지 — 다양한 형태의 협력을 환영합니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/collaboration"
              className="inline-block bg-white px-8 py-3 font-montserrat text-sm font-medium tracking-widest text-primary transition hover:bg-slate-100"
            >
              기술협력 문의
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/70 px-8 py-3 font-montserrat text-sm font-medium tracking-widest text-white transition hover:bg-white hover:text-primary"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
