"use client";

import * as React from "react";

export interface PracticeItem {
  key: string;
  idx: string;
  title: string;
  teaser: string;
  desc: string;
  tags: string[];
}

export interface PracticeGridProps {
  items: PracticeItem[];
}

export function PracticeGrid({ items }: PracticeGridProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [explored, setExplored] = React.useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
    setExplored((current) => {
      if (current.has(index)) return current;
      const next = new Set(current);
      next.add(index);
      return next;
    });
  };

  const open = openIndex !== null ? items[openIndex] : null;

  return (
    <div className="prac-root">
      <div className="prac-progress" aria-hidden="true">
        <span className="mono prac-progress-label">{explored.size} of {items.length} opened</span>
        <div className="prac-progress-dots">
          {items.map((item, i) => (
            <span key={item.key} className={`prac-dot${explored.has(i) ? " is-explored" : ""}`} />
          ))}
        </div>
      </div>

      <div className="prac-grid">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <button
              key={item.key}
              type="button"
              className={`prac-tile${isOpen ? " is-open" : ""}`}
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              <span className="prac-tile-glow" aria-hidden="true" />
              <span className="prac-tile-top">
                <span className="mono prac-tile-idx">{item.idx}</span>
                <span className="mono prac-tile-mark" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </span>
              <span className="prac-tile-bottom">
                <span className="serif prac-tile-title">{item.title}</span>
                <span className="prac-tile-teaser">{item.teaser}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className={`prac-detail${open ? " is-visible" : ""}`} role="region" aria-live="polite">
        {open && (
          <>
            <div className="mono prac-detail-idx">{open.idx} &middot; Detail</div>
            <div className="prac-detail-body">
              <p className="prac-detail-desc">{open.desc}</p>
              <div className="prac-detail-tags">
                {open.tags.map((tag) => (
                  <span key={tag} className="mono prac-detail-tag">{tag}</span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
