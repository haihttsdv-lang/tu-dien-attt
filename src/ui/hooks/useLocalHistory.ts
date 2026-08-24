/**
 * FR-Q10: lich su tra cuu gan day va muc danh dau ca nhan. Luu cuc bo tren
 * thiet bi (localStorage) — khong dong bo, khong gui di dau (phu hop cong
 * cu tra cuu ca nhan chi co tang tham chieu).
 */
import { useCallback, useEffect, useState } from "react";

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage khong kha dung (che do rieng tu, het dung luong...) — bo qua im lang
  }
}

const RECENT_KEY = "bkattt:recent-searches";
const BOOKMARKS_KEY = "bkattt:bookmarks";
const MAX_RECENT = 15;

export function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>(() => readJson(RECENT_KEY, []));

  const addRecent = useCallback((query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setRecent((prev) => {
      const next = [trimmed, ...prev.filter((q) => q !== trimmed)].slice(0, MAX_RECENT);
      writeJson(RECENT_KEY, next);
      return next;
    });
  }, []);

  const clearRecent = useCallback(() => {
    setRecent([]);
    writeJson(RECENT_KEY, []);
  }, []);

  return { recent, addRecent, clearRecent };
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => readJson(BOOKMARKS_KEY, []));

  useEffect(() => {
    writeJson(BOOKMARKS_KEY, bookmarks);
  }, [bookmarks]);

  const toggleBookmark = useCallback((href: string) => {
    setBookmarks((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [href, ...prev]
    );
  }, []);

  const isBookmarked = useCallback((href: string) => bookmarks.includes(href), [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked };
}
