import Image from "next/image";
import Link from "next/link";
import type { ResearchSummary } from "@/lib/research";

type Props = { post: ResearchSummary };

export default function ResearchCard({ post }: Props) {
  return (
    <Link
      href={`/research/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={post.thumbnail ?? "/images/research/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <time className="text-xs tracking-wide text-slate-500">
          {post.date}
          {post.period ? ` · ${post.period}` : ""}
        </time>
        <h3 className="mt-2 line-clamp-2 font-montserrat text-base font-semibold leading-snug text-primary">
          {post.title}
        </h3>
        {post.tags && post.tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
