"use client";

import * as React from "react";

export function CustomCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [label, setLabel] = React.useState<string | null>(null);

  React.useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      const ease = reduced ? 1 : 0.24;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const cursorTarget = target?.closest<HTMLElement>("[data-cursor]");
      if (cursorTarget) {
        setExpanded(true);
        setLabel(cursorTarget.dataset.cursor ?? null);
        return;
      }
      const interactive = target?.closest("a, button");
      setExpanded(Boolean(interactive));
      setLabel(null);
    };
    window.addEventListener("mouseover", onOver, { passive: true });

    const onLeaveWindow = () => setExpanded(false);
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.classList.remove("cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="custom-cursor"
      data-expanded={expanded}
      data-labelled={Boolean(label)}
      aria-hidden="true"
    >
      {label && <span className="custom-cursor-label mono">{label}</span>}
    </div>
  );
}
