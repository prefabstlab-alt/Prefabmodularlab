import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllResearch, getResearchBySlug } from "@/lib/research";

export async function generateStaticParams() {
  return getAllResearch().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getResearchBySlug(params.slug);
  if (!post) return { title: "Research | PREFAB Structure Lab" };
  return { title: `${post.title} | PREFAB Structure Lab` };
}

export default async function ResearchDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getResearchBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-[800px] px-4 py-14 md:py-20">
      <Link
        href="/research"
        className="text-sm text-accent transition hover:underline"
      >
        ← 연구 분야 목록으로
      </Link>

      <header className="mt-6">
        <p className="text-xs tracking-wide text-slate-500">
          {post.date}
          {post.period ? ` · ${post.period}` : ""}
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold leading-tight text-primary md:text-4xl">
          {post.title}
        </h1>
        {post.tags && post.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={post.thumbnail ?? "/images/research/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <article
        className="mt-10 leading-relaxed text-slate-800 [&>h2]:mt-10 [&>h2]:font-montserrat [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-primary [&>h3]:mt-8 [&>h3]:font-montserrat [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-primary [&>p]:mt-4 [&>ul]:mt-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mt-4 [&>ol]:list-decimal [&>ol]:pl-6 [&_li]:mt-1"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
