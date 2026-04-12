"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  {
    label: "Home",
    children: [
      { label: "연구실 소개", href: "/about" },
      { label: "찾아오시는 길", href: "/location" },
      { label: "교수진", href: "/professor" },
      { label: "연구원", href: "/members" },
    ],
  },
  {
    label: "Research & Performance",
    children: [
      { label: "연구 분야", href: "/research" },
      { label: "주요 연구 성과", href: "/projects" },
      { label: "연구실 학위논문", href: "/thesis" },
      { label: "학술논문 및 발표", href: "/publications" },
      { label: "특허 및 기타", href: "/patents" },
    ],
  },
  { label: "보유 기술", href: "/technology" },
  {
    label: "기술협력 문의",
    children: [
      { label: "R&D 협력", href: "/collaboration/rnd" },
      { label: "기술이전", href: "/collaboration/licensing" },
      { label: "기술세미나 및 교육", href: "/collaboration/seminar" },
    ],
  },
  {
    label: "Board",
    children: [
      { label: "공지사항", href: "/notice" },
      { label: "언론 및 미디어", href: "/media" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4">
        <Link
          href="/"
          className="font-montserrat text-base font-bold tracking-wider text-primary sm:text-lg"
        >
          PREFAB STRUCTURE LAB
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            if (item.children) {
              const active = item.children.some((c) =>
                isActive(pathname, c.href),
              );
              return (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={`flex items-center gap-1 py-2 font-montserrat text-sm tracking-wide transition ${
                      active
                        ? "text-accent"
                        : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span aria-hidden className="text-xs">
                      ▾
                    </span>
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-focus-within:visible group-hover:opacity-100 group-focus-within:opacity-100">
                    <ul className="min-w-[180px] rounded-md border border-slate-200 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block whitespace-nowrap px-4 py-2 text-sm transition hover:bg-slate-50 ${
                              isActive(pathname, child.href)
                                ? "text-accent"
                                : "text-slate-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href!}
                className={`py-2 font-montserrat text-sm tracking-wide transition ${
                  isActive(pathname, item.href!)
                    ? "text-accent"
                    : "text-slate-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 text-slate-700 md:hidden"
          aria-label="menu"
          aria-expanded={open}
        >
          <span aria-hidden className="text-xl leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <ul className="mx-auto max-w-content px-4 py-3 text-sm">
            {NAV.flatMap((item) =>
              item.children
                ? [
                    <li
                      key={`${item.label}-header`}
                      className="px-2 py-2 font-montserrat text-xs uppercase tracking-widest text-slate-400"
                    >
                      {item.label}
                    </li>,
                    ...item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded px-3 py-2 text-slate-700 hover:bg-slate-50"
                        >
                          {child.label}
                        </Link>
                      </li>
                    )),
                  ]
                : [
                    <li key={item.label}>
                      <Link
                        href={item.href!}
                        onClick={() => setOpen(false)}
                        className="block rounded px-3 py-2 text-slate-700 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    </li>,
                  ],
            )}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
