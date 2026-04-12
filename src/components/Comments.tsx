"use client";
import Giscus from "@giscus/react";

type Props = {
  term: string;
};

export default function Comments({ term }: Props) {
  return (
    <div className="mt-14 border-t border-slate-200 pt-10">
      <h2 className="mb-4 font-montserrat text-lg font-semibold text-primary">
        댓글
      </h2>
      <Giscus
        id="comments"
        repo="prefabstlab-alt/Prefabmodularlab"
        repoId="R_kgDOSAREig"
        category="General"
        categoryId="DIC_kwDOSAREis4C6qUw"
        mapping="specific"
        term={term}
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
