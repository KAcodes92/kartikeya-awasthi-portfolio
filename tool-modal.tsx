"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import type { CoverflowSlide } from "@/components/ui/coverflow-carousel";

export interface ToolModalProps {
  slide: (CoverflowSlide & { categories?: string[] }) | null;
  index?: number;
  total?: number;
  onClose: () => void;
}

export function ToolModal({ slide, index, total, onClose }: ToolModalProps) {
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const lastFocused = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!slide) return;
    lastFocused.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 20);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      lastFocused.current?.focus?.();
    };
  }, [slide, onClose]);

  if (typeof document === "undefined" || !slide) return null;

  return createPortal(
    <div
      className="tool-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={slide.title ?? "Tool case study"}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="tool-modal">
        <button
          type="button"
          ref={closeRef}
          className="tool-modal-close"
          data-cursor="Close"
          onClick={onClose}
          aria-label="Close case study"
        >
          &times;
        </button>

        <div className="tool-modal-meta mono">
          {typeof index === "number" && typeof total === "number" && (
            <span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          )}
          {slide.idx && <span>Exhibit {slide.idx}</span>}
        </div>

        <div className="tool-modal-grid">
          <div className="tool-modal-visual">
            {slide.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={slide.image} alt={slide.imageAlt ?? slide.title ?? ""} className="tool-modal-image" />
            ) : (
              <div className="tool-modal-visual-placeholder">
                {slide.title && <span>{slide.title}</span>}
              </div>
            )}
          </div>

          <div className="tool-modal-body">
            {slide.categories && slide.categories.length > 0 && (
              <div className="tool-modal-pills">
                {slide.categories.map((c) => (
                  <span key={c} className="tool-modal-pill mono">{c}</span>
                ))}
              </div>
            )}
            {slide.tag && <div className="tool-modal-tag mono">{slide.tag}</div>}
            {slide.title && <h3 className="tool-modal-title serif">{slide.title}</h3>}
            {slide.desc && <p className="tool-modal-desc">{slide.desc}</p>}

            <div className="tool-modal-actions">
              {slide.url ? (
                <a
                  className="btn-primary"
                  href={slide.url}
                  target="_blank"
                  rel="noopener"
                  data-cursor="Explore"
                >
                  Launch live tool &#8599;
                </a>
              ) : (
                <span className="tool-modal-concept mono">
                  Concept in development &middot; Portfolio demonstration
                </span>
              )}
              <button type="button" className="btn-secondary" onClick={onClose}>
                Back to portfolio
              </button>
            </div>

            <p className="tool-modal-disclaimer">
              Brands shown are fictitious portfolio demonstrations, built to test funnel mechanics and
              buyer psychology. They are not client deployments.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
