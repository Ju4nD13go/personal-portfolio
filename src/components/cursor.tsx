"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const syncEnabled = () => setEnabled(query.matches);
    syncEnabled();
    query.addEventListener("change", syncEnabled);

    const onMove = (event: MouseEvent) => {
      if (!query.matches) return;
      setVisible(true);
      target.current = { x: event.clientX, y: event.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      query.removeEventListener("change", syncEnabled);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 size-1.5 rounded-full bg-foreground mix-blend-difference transition-opacity duration-300 ease-out will-change-transform"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 size-8 rounded-full border border-foreground/60 mix-blend-difference transition-opacity duration-300 ease-out will-change-transform"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
