export const metadata = { title: "찾아오시는 길 | PREFAB Structure Lab" };

export default function LocationPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Location
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          찾아오시는 길
        </h1>
      </header>

      <section className="mb-10 overflow-hidden rounded-lg border border-slate-200">
        <iframe
          title="아주대학교 산학협력원 위치"
          src="https://www.google.com/maps?q=아주대학교+산학협력원&output=embed"
          className="h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="mb-3 font-montserrat text-lg font-semibold text-primary">
            주소
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            경기도 수원시 영통구 월드컵로 206<br />
            아주대학교 산학협력원 804호<br />
            (우) 16499
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="mb-3 font-montserrat text-lg font-semibold text-primary">
            연락처
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Tel. 031-219-2499</li>
            <li>Fax. 031-219-2945</li>
            <li>
              <a
                href="mailto:bhcho@ajou.ac.kr"
                className="text-accent hover:underline"
              >
                bhcho@ajou.ac.kr
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
