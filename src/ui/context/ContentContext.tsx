import { createContext, useContext, useMemo, type ReactNode } from "react";
import { contentBundle } from "../../content";
import { buildSearchIndex, type SearchDocument } from "../../core/search";
import type { ContentBundle } from "../../data/schema/models";

interface ContentContextValue {
  bundle: ContentBundle;
  searchIndex: SearchDocument[];
}

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const value = useMemo<ContentContextValue>(
    () => ({ bundle: contentBundle, searchIndex: buildSearchIndex(contentBundle) }),
    []
  );
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContentBundle(): ContentBundle {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContentBundle phải dùng trong ContentProvider");
  return ctx.bundle;
}

export function useSearchIndex(): SearchDocument[] {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useSearchIndex phải dùng trong ContentProvider");
  return ctx.searchIndex;
}
