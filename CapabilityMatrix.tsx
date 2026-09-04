"use client";

import * as React from "react";

export interface Capability {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface CapabilityMatrixProps {
  capabilities: Capability[];
}

export function CapabilityMatrix({ capabilities }: CapabilityMatrixProps) {
  const [selected, setSelected] = React.useState(0);
  const active = capabilities[selected];

  return (
    <div className="cm-root">
      <div className="cm-detail" aria-live="polite">
        <div className="cm-detail-num mono">{active.num}</div>
        <h3 className="cm-detail-title serif">{active.title}</h3>
        <p className="cm-detail-desc">{active.desc}</p>
        <div className="cm-detail-tags">
          {active.tags.map((tag, i) => (
            <span
              key={tag}
              className="cm-detail-tag mono"
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="cm-nodes" role="tablist" aria-label="Areas of practice">
        {capabilities.map((cap, i) => (
          <div className="cm-node-wrap" key={cap.num}>
            <button
              type="button"
              role="tab"
              aria-selected={i === selected}
              data-cursor="Select"
              className="cm-node"
              data-active={i === selected}
              onClick={() => setSelected(i)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className="cm-node-num mono">{cap.num}</span>
              <span className="cm-node-title">{cap.title}</span>
              <span className="cm-node-arrow mono" aria-hidden="true">&rarr;</span>
            </button>

            {/* Mobile-only inline expansion (accordion). Desktop hides this
                via CSS and relies on the persistent detail panel above. */}
            <div className="cm-node-inline" data-open={i === selected}>
              <p>{cap.desc}</p>
              <div className="cm-detail-tags">
                {cap.tags.map((tag) => (
                  <span key={tag} className="cm-detail-tag mono">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
