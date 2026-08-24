import { useState } from "react";
import { Link } from "react-router-dom";
import type { ContentBundle, SourceRef } from "../../data/schema/models";
import { copyWithWarning } from "../lib/exportText";

interface Props {
  sources: SourceRef[];
  bundle: ContentBundle;
  bodyForCopy?: string;
}

/** FR-T06 ("Xem văn bản gốc" trên mọi trích dẫn) + FR-T05 (sao chép kèm cảnh báo). */
export function SourceCitationList({ sources, bundle, bodyForCopy }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="source-citation-list">
      <span className="source-citation-label">Nguồn:</span>
      <ul>
        {sources.map((ref, i) => {
          if (ref.type === "legal_document") {
            const doc = bundle.legalDocuments.find((d) => d.id === ref.refId);
            if (!doc) return null;
            return (
              <li key={i}>
                <Link to={`/van-ban/${doc.id}`}>
                  {doc.docNumber}
                  {ref.articleRef ? ` — ${ref.articleRef}` : ""}
                </Link>
                {doc.officialUrl && (
                  <a
                    className="original-link"
                    href={doc.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem văn bản gốc ↗
                  </a>
                )}
              </li>
            );
          }
          const fw = bundle.frameworks.find((f) => f.id === ref.refId);
          if (!fw) return null;
          return (
            <li key={i}>
              {fw.name} ({fw.version})
              {ref.clauseRef ? ` — ${ref.clauseRef}` : ""}
              {fw.officialUrl && (
                <a
                  className="original-link"
                  href={fw.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Xem văn bản gốc ↗
                </a>
              )}
            </li>
          );
        })}
      </ul>
      {bodyForCopy && (
        <button
          type="button"
          className="btn-secondary"
          onClick={async () => {
            const first = sources[0];
            const label =
              first?.type === "legal_document"
                ? bundle.legalDocuments.find((d) => d.id === first.refId)?.docNumber ?? first.refId
                : bundle.frameworks.find((f) => f.id === first?.refId)?.name ?? first?.refId ?? "";
            const doc =
              first?.type === "legal_document"
                ? bundle.legalDocuments.find((d) => d.id === first.refId)
                : undefined;
            const ok = await copyWithWarning(bodyForCopy, {
              sourceLabel: label,
              documentStatus: doc?.status
            });
            setCopied(ok);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? "Đã sao chép ✓" : "Sao chép kèm nguồn"}
        </button>
      )}
    </div>
  );
}
