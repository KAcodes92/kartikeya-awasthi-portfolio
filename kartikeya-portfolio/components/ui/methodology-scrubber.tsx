"use client";

import * as React from "react";

export interface MethodStep {
  key: string;
  shortTitle: string;
  title: string;
  desc: string;
}

export interface MethodologyScrubberProps {
  steps: MethodStep[];
}

export function MethodologyScrubber({ steps }: MethodologyScrubberProps) {
  const [active, setActive] = React.useState(0);
  const count = steps.length;
  const current = steps[active];

  const go = (i: number) => setActive(Math.max(0, Math.min(count - 1, i)));

  return (
    <div className="meth-root">
      <div className="meth-headline">
        <span className="mono meth-ghost-num" aria-hidden="true">0{active + 1}</span>
        <div className="meth-headline-body">
          <div className="mono meth-step-label">Step {active + 1} of {count}</div>
          <h3 className="serif meth-step-title">{current.title}</h3>
          <p className="meth-step-desc">{current.desc}</p>
        </div>
      </div>

      <div className="meth-scrub">
        <div className="meth-track" aria-hidden="true">
          <div
            className="meth-track-fill"
            style={{ width: `${(active / Math.max(count - 1, 1)) * 100}%` }}
          />
        </div>
        <div className="meth-tiles">
          {steps.map((step, i) => (
            <button
              key={step.key}
              type="button"
              className={`meth-tile${i === active ? " is-active" : ""}`}
              aria-current={i === active}
              onClick={() => go(i)}
            >
              <span className="mono meth-tile-num">0{i + 1}</span>
              <span className="serif meth-tile-title">{step.shortTitle}</span>
            </button>
          ))}
        </div>
        <div className="meth-nav">
          <button
            type="button"
            className="mono meth-nav-btn"
            disabled={active === 0}
            onClick={() => go(active - 1)}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="mono meth-nav-btn"
            disabled={active === count - 1}
            onClick={() => go(active + 1)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
