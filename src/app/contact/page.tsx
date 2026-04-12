export const metadata = { title: "Contact | PREFAB Structure Lab" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Contact
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          Contact
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Department of Architecture / Structural Engineering Lab
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <h2 className="mb-4 font-montserrat text-xl font-semibold text-primary">
            연구실 주소
          </h2>
          <address className="not-italic text-sm leading-relaxed text-slate-700">
            경기도 수원시 영통구 월드컵로 206<br />
            아주대학교 산학협력원 804호<br />
            (우) 16499
          </address>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-8">
          <h2 className="mb-4 font-montserrat text-xl font-semibold text-primary">
            연락처
          </h2>
          <dl className="grid gap-y-3 text-sm sm:grid-cols-[60px_1fr]">
            <dt className="text-slate-500">Tel.</dt>
            <dd className="text-slate-700">031-219-2499</dd>
            <dt className="text-slate-500">Fax.</dt>
            <dd className="text-slate-700">031-219-2945</dd>
            <dt className="text-slate-500">Email</dt>
            <dd>
              <a
                href="mailto:bhcho@ajou.ac.kr"
                className="text-accent hover:underline"
              >
                bhcho@ajou.ac.kr
              </a>
            </dd>
          </dl>
        </div>
      </section>
    </main>
  );
}
