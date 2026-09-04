"use client";

import * as React from "react";

export interface ToolFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  visibleCount: number;
  totalCount: number;
}

export function ToolFilter({
  categories,
  selected,
  onSelect,
  visibleCount,
  totalCount,
}: ToolFilterProps) {
  return (
    <div className="tool-filter" role="group" aria-label="Filter tool portfolio by sector">
      <div className="tool-filter-chips">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            data-cursor="Filter"
            className="tool-filter-chip"
            data-active={category === selected}
            aria-pressed={category === selected}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="tool-filter-count mono" aria-live="polite">
        {visibleCount === totalCount
          ? `${totalCount} demand tools`
          : `${visibleCount} of ${totalCount} tools`}
      </div>
    </div>
  );
}
