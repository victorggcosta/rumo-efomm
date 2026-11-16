import { useEffect, useRef } from "react";

type BackEntry = {
  priority: number;
  close: () => void;
};

const stack: BackEntry[] = [];

export function registerAndroidBack(priority: number, close: () => void): () => void {
  const entry = { priority, close };
  stack.push(entry);
  return () => {
    const index = stack.indexOf(entry);
    if (index >= 0) stack.splice(index, 1);
  };
}

export function consumeAndroidBack(): boolean {
  const top = stack.reduce<BackEntry | null>((best, entry) => {
    if (!best || entry.priority >= best.priority) return entry;
    return best;
  }, null);
  if (!top) return false;
  top.close();
  return true;
}

export function useAndroidBack(active: boolean, close: () => void, priority: number) {
  const closeRef = useRef(close);
  closeRef.current = close;
  useEffect(() => {
    if (!active) return;
    return registerAndroidBack(priority, () => closeRef.current());
  }, [active, priority]);
}
