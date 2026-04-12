import Image from "next/image";
import Link from "next/link";
import {
  GOOGLE_SCHOLAR_URL,
  PROFESSOR_NAME_EN,
  PROFESSOR_NAME_KR,
} from "@/data/publications";

export const metadata = { title: "교수진 | PREFAB Structure Lab" };

export default function ProfessorPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Professor
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          교수진
        </h1>
      </header>

      <article className="grid gap-8 md:grid-cols-[240px_1fr]">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 md:w-60">
          <Image
            src="/images/professor/cho-bongho.jpg"
            alt={`${PROFESSOR_NAME_KR} 교수`}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-montserrat text-2xl font-semibold text-primary">
            {PROFESSOR_NAME_KR}
            <span className="ml-2 text-base font-normal text-slate-500">
              ({PROFESSOR_NAME_EN})
            </span>
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            아주대학교 건축공학과 교수
          </p>

          <dl className="mt-6 grid gap-y-2 text-sm sm:grid-cols-[90px_1fr]">
            <dt className="text-slate-500">소속</dt>
            <dd className="text-slate-800">
              아주대학교 건축학과 건축공학전공
            </dd>

            <dt className="text-slate-500">연구실</dt>
            <dd className="text-slate-800">
              아주대학교 산학협력원 804호
            </dd>

            <dt className="text-slate-500">전화</dt>
            <dd className="text-slate-800">031-219-2499</dd>

            <dt className="text-slate-500">이메일</dt>
            <dd>
              <a
                href="mailto:bhcho@ajou.ac.kr"
                className="text-accent hover:underline"
              >
                bhcho@ajou.ac.kr
              </a>
            </dd>

            <dt className="text-slate-500">연구 분야</dt>
            <dd className="text-slate-800">
              모듈러 건축, 강구조, 건축자재, TRIZ/6-Sigma, 내진공학
            </dd>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={GOOGLE_SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 transition hover:border-accent hover:text-accent"
            >
              Google Scholar →
            </a>
            <Link
              href="/publications"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-700 transition hover:border-accent hover:text-accent"
            >
              학술 논문 목록
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
