import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { members, type Member } from "@/data/members";

const MEMBER_PLACEHOLDER = "/images/members/placeholder.svg";

function resolveMemberPhoto(photo: string): string {
  const absolute = path.join(process.cwd(), "public", photo);
  return fs.existsSync(absolute) ? photo : MEMBER_PLACEHOLDER;
}

export const metadata = { title: "연구원 | PREFAB Structure Lab" };

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-sm">
      <div className="relative aspect-[3/4] w-full bg-slate-100">
        <Image
          src={resolveMemberPhoto(member.photo)}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-montserrat text-base font-semibold text-primary">
          {member.name}
        </h3>
        <p className="text-xs tracking-wider text-slate-500">{member.nameEn}</p>
        <p className="mt-3 text-sm text-slate-700">{member.field}</p>
        <a
          href={`mailto:${member.email}`}
          className="mt-1 block break-all text-xs text-accent hover:underline"
        >
          {member.email}
        </a>
      </div>
    </article>
  );
}

export default function MembersPage() {
  const masters = members.filter((m) => m.degree === "석사과정");
  const interns = members.filter((m) => m.degree === "학부인턴");

  return (
    <main className="mx-auto max-w-content px-4 py-14 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Members
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-semibold text-primary md:text-4xl">
          연구원
        </h1>
      </header>

      {masters.length > 0 ? (
        <section className="mb-14">
          <h2 className="mb-5 border-b border-slate-200 pb-3 font-montserrat text-xl font-semibold text-primary">
            석사과정 ({masters.length})
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {masters.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </section>
      ) : null}

      {interns.length > 0 ? (
        <section>
          <h2 className="mb-5 border-b border-slate-200 pb-3 font-montserrat text-xl font-semibold text-primary">
            학부인턴 ({interns.length})
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interns.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </section>
      ) : null}

      <p className="mt-12 rounded-lg bg-bg-gray p-4 text-xs text-slate-500">
        연구원 사진은 추후 업로드될 예정이며, 현재는 placeholder로 표시됩니다.
      </p>
    </main>
  );
}
