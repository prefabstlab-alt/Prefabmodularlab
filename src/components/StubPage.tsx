export default function StubPage({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-content px-4 py-24 text-center">
      <h1 className="font-montserrat text-3xl font-semibold text-primary md:text-4xl">
        {title}
      </h1>
      <p className="mt-6 text-slate-500">준비 중입니다. 곧 공개 예정이에요.</p>
    </main>
  );
}
