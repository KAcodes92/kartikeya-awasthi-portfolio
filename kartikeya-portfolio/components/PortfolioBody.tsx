// @ts-nocheck
// This component intentionally renders ported static markup + vanilla DOM
// scripting (GSAP scroll reveals, coverflow carousel) rather than idiomatic
// React state. Type-checking is disabled here; all interactive logic is
// scoped to this single file and safe to refactor into React state later.
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { PracticeGrid, type PracticeItem } from "@/components/ui/practice-grid";
import { MethodologyScrubber, type MethodStep } from "@/components/ui/methodology-scrubber";

const PRACTICE_ITEMS: PracticeItem[] = [
  {
    key: "ai-native",
    idx: "2.1",
    title: "AI-Native Marketing Systems",
    teaser: "Building the AI Marketing function from scratch.",
    desc: "Building the AI Marketing function from scratch: agents, workflow automation, and AI-driven enrichment embedded across content, campaigns, and operations.",
    tags: ["AI Agents", "Workflow Automation", "Prompt Engineering"],
  },
  {
    key: "gtm-strategy",
    idx: "2.2",
    title: "GTM Strategy & Positioning",
    teaser: "Market signal mapping and vertical positioning.",
    desc: "Market signal mapping, TAM/SAM definition, vertical positioning across BFSI, Insurance, Healthcare and staffing.",
    tags: ["TAM/SAM", "Segmentation", "Vertical GTM"],
  },
  {
    key: "demand-gen",
    idx: "2.3",
    title: "Demand Generation & ABM",
    teaser: "Multi-channel architecture, scoring, attribution.",
    desc: "Multi-channel campaign architecture, lead scoring, and pipeline attribution, run at enterprise scale.",
    tags: ["ABM 2.0", "Lead Scoring", "Sales Enablement"],
  },
  {
    key: "content-search",
    idx: "2.4",
    title: "Content & Search Strategy",
    teaser: "Persona-driven content, extended into AI-search.",
    desc: "Persona-driven content architecture, extended into AI-search visibility as buyer discovery shifts from search engines to answer engines.",
    tags: ["SEO / AEO / GEO", "Editorial Strategy", "Persona Mapping"],
  },
  {
    key: "martech",
    idx: "2.5",
    title: "MarTech & Analytics",
    teaser: "HubSpot, Salesforce, ZoomInfo, owned end-to-end.",
    desc: "HubSpot, Salesforce/Pardot, ZoomInfo, and Apollo, owned end-to-end, including a $68K/yr contract audit and renegotiation.",
    tags: ["HubSpot", "Salesforce", "ROI Reporting"],
  },
  {
    key: "team-leadership",
    idx: "2.6",
    title: "Team & Stakeholder Leadership",
    teaser: "Built and led teams of 15+, reporting into VP Marketing.",
    desc: "Built and led teams of 15+, reporting into VP Marketing, partnering cross-functionally with sales, product, engineering.",
    tags: ["Team Building", "Exec Comms", "Cross-functional"],
  },
];

const METHOD_STEPS: MethodStep[] = [
  {
    key: "signal-fit",
    shortTitle: "Market Signal → GTM Fit",
    title: "Market Signal → GTM Fit Mapping",
    desc: "Identifying white-space before committing to a motion. Signal is triangulated across search demand, competitive gaps, and account-level intent before a single campaign is briefed.",
  },
  {
    key: "segmentation",
    shortTitle: "Segmentation Architecture",
    title: "Enterprise Segmentation Architecture",
    desc: "Prioritizing accounts by revenue, pain-fit, and engagement trajectory, so spend concentrates on the accounts most likely to convert and expand.",
  },
  {
    key: "content-tool",
    shortTitle: "AI-Led Content & Tool Design",
    title: "AI-Led Content & Tool Design",
    desc: "Turning a buyer question into an interactive, self-qualifying asset, rather than a static page the buyer has to interpret alone.",
  },
  {
    key: "demand-engine",
    shortTitle: "Demand Engine Design",
    title: "Demand Engine Design",
    desc: "Offer architecture, sequencing logic, and escalation to sales-qualified, built so every stage has a clear next action for the buyer.",
  },
  {
    key: "pipeline-modeling",
    shortTitle: "Pipeline Modeling & Attribution",
    title: "Pipeline Modeling & Attribution",
    desc: "Conservative / base / upside scenarios, transparent and benchmark-backed, so forecasts hold up under scrutiny from finance and sales leadership.",
  },
];

const TOOL_SLIDES: CoverflowSlide[] = [
  {
    key: "claims-ai",
    url: "https://claims-ai-healthcaretool.vercel.app/",
    tag: "Healthcare · Payer Ops · MOFU",
    idx: "3.1",
    title: "Claims AI Accelerator",
    desc: "ROI calculator for VP/Director Claims Ops, COO and CMO. Models denial-overturn rate and claims-leakage dollars recovered against the visitor's own claim volume.",
    image: "/tool-claims-ai.png",
    imageAlt: "Claims AI Accelerator interface",
  },
  {
    key: "legacy-mod",
    url: "https://legacy-mod-savings-estimator.vercel.app/",
    tag: "BFSI · Insurance · Healthcare · MOFU-BOFU",
    idx: "3.2",
    title: "Legacy Modernization Savings Estimator",
    desc: "Multi-variant business-case builder for CIO/CTO and Heads of Digital Transformation.",
    image: "/tool-legacy-modernization.png",
    imageAlt: "Legacy Modernization Savings Estimator interface",
  },
  {
    key: "ai-governance",
    url: "https://ai-governance-assessment-tool.vercel.app/",
    tag: "Regulated Sectors · TOFU-MOFU",
    idx: "3.3",
    title: "AI Governance Assessment",
    desc: "Quiz-based diagnostic scoring regulatory exposure for Compliance and Risk leaders.",
    image: "/tool-ai-governance.png",
    imageAlt: "AI Governance Assessment interface",
  },
  {
    key: "underwriting-ai",
    url: "https://underwriting-ai-roi-calculator.vercel.app/",
    tag: "Insurance · Underwriting · MOFU",
    idx: "3.4",
    title: "Underwriting AI ROI Calculator",
    desc: "Quantifies cycle-time reduction and loss-ratio improvement in dollar terms.",
    image: "/tool-underwriting-ai.png",
    imageAlt: "Underwriting AI ROI Calculator interface",
  },
  {
    key: "cloud-migration",
    url: "https://cloud-migration-infrastructure-tco.vercel.app/",
    tag: "Cross-Industry · Infrastructure · MOFU",
    idx: "3.5",
    title: "Cloud Migration & Infrastructure TCO Calculator",
    desc: "On-prem/legacy hosting cost vs. cloud TCO, with migration payback in months.",
    image: "/tool-cloud-migration.png",
    imageAlt: "Cloud Migration & Infrastructure TCO Calculator interface",
  },
  {
    key: "shadow-ai-risk",
    tag: "Cybersecurity · CISO / CDO · TOFU",
    idx: "3.6",
    title: "Shadow AI & Data Exposure Risk Assessment",
    desc: "Discovers the dollarized risk from ungoverned AI tool usage across your organization.",
    image: "/tool-shadow-ai-risk.png",
    imageAlt: "Shadow AI & Data Exposure Risk Assessment interface",
  },
  {
    key: "it-spend-benchmark",
    tag: "FinOps · CFO / CIO · TOFU–MOFU",
    idx: "3.7",
    title: "IT Spend Benchmarking Tool",
    desc: "Compares IT spend as a % of revenue against industry peers and sizes the cost-optimization gap.",
    image: "/tool-it-spend-benchmark.png",
    imageAlt: "IT Spend Benchmarking Tool interface",
  },
  {
    key: "devops-maturity",
    tag: "Platform Eng / SRE · VP Eng · MOFU",
    idx: "3.8",
    title: "DevOps Maturity & Downtime Cost Calculator",
    desc: "Scores deployment frequency and MTTR, then converts them into an annual cost of unplanned downtime.",
    image: "/tool-devops-maturity.png",
    imageAlt: "DevOps Maturity & Downtime Cost Calculator interface",
  },
  {
    key: "data-silo-cost",
    tag: "Data & Analytics · CDO / VP Analytics · MOFU",
    idx: "3.9",
    title: "Data Silo Cost Calculator",
    desc: "Calculates the hidden cost of fragmented data vs. a unified data platform.",
    image: "/tool-data-silo-cost.png",
    imageAlt: "Data Silo Cost Calculator interface",
  },
  {
    key: "saas-consolidation",
    tag: "IT Procurement · CIO · MOFU",
    idx: "3.10",
    title: "SaaS Stack Consolidation Savings Calculator",
    desc: "Identifies redundant and overlapping SaaS licenses and quantifies recoverable spend.",
    image: "/tool-saas-consolidation.png",
    imageAlt: "SaaS Stack Consolidation Savings Calculator interface",
  },
];

const BODY_HTML = `

<div class="doc-bar">
  <div class="wrap">
    <span>Kartikeya Awasthi · GTM Strategy &amp; Demand Generation. Strategy Brief, 2026</span>
    <span>Prepared for Enterprise Marketing &amp; Revenue Leadership</span>
  </div>
</div>

<nav>
  <div class="wrap">
    <div class="logo"><span class="logo-name">Kartikeya Awasthi</span><span class="logo-tag">/ K.A. 2026</span></div>
    <div class="nav-links">
      <a href="#summary">Summary</a>
      <a href="#capabilities">Capabilities</a>
      <a href="#tools">Tools</a>
      <a href="#methodology">Methodology</a>
      <a href="#record">Record</a>
    </div>
    <a href="#engage" class="nav-cta">Initiate Engagement</a>
  </div>
</nav>

<div class="rail">
  <a href="#summary" class="active" title="Summary"></a>
  <a href="#capabilities" title="Capabilities"></a>
  <a href="#tools" title="Tools"></a>
  <a href="#methodology" title="Methodology"></a>
  <a href="#record" title="Record"></a>
  <a href="#engage" title="Engage"></a>
</div>

<section class="hero" style="border-top:none;">
  <div class="wrap">
    <div class="eyebrow">Marketing Strategy, Demand Generation and AI-Led Marketing. Open to Senior Director / VP Engagements</div>
    <h1 class="hero-title">Marketing strategy, engineered with AI at the core.</h1>
    <p class="hero-sub">I build the strategy, the demand engine, and the AI systems that run it: content, campaigns, tooling, and pipeline, for enterprise teams across BFSI, Insurance, and Healthcare.</p>
    <div class="hero-actions">
      <a href="#tools" class="btn-primary">Review the Tool Portfolio</a>
      <a href="#record" class="btn-secondary">Professional Record</a>
    </div>
    <div class="credentials-strip">
      <div class="cred-item"><b>12+ Yrs</b> GTM &amp; Marketing Leadership</div>
      <div class="cred-item"><b>MBA</b> Marketing, NMIMS Mumbai</div>
      <div class="cred-item"><b>B.Tech</b> Mechanical and Automation, GGSIPU Delhi</div>
      <div class="cred-item"><b>CII National Gold &amp; Silver</b>: AI / Industry 4.0</div>
    </div>
  </div>
</section>

<section class="exec-summary" id="summary" style="border-top:none;">
  <div class="wrap">
    <div class="section-eyebrow">Exhibit 1.0 · Executive Summary</div>
    <div class="exec-grid">
      <div>
        <p class="exec-lede">A marketing strategist who treats AI as core infrastructure, not an add-on. It shows up across content, demand generation, tooling, and operations, not only in revenue reporting.</p>
        <p class="exec-body">Currently building the AI Marketing function at Pyramid Consulting from the ground up across a three-brand enterprise portfolio (Pyramid, Celsior Technologies, Genspark), spanning AI-assisted content operations, workflow automation, and demand-tool development. Prior mandates span TAM/SAM definition and 15-person team leadership (FCI CCM), 0-to-1 marketing builds (WalkingTree/Qritrim), and multimillion-dollar RFP strategy for BFSI and Healthcare clients (EY).</p>
      </div>
      <div class="highlight-list">
        <div class="hl-item reveal"><div class="hl-num">14</div><div class="hl-text">AI-led demand tools designed across BFSI, Insurance, Healthcare and cross-industry IT</div></div>
        <div class="hl-item reveal"><div class="hl-num">15</div><div class="hl-text">Marketing team members led as Global Strategy &amp; Marketing Head, FCI CCM</div></div>
        <div class="hl-item reveal"><div class="hl-num">+70%</div><div class="hl-text">Inbound growth built from a zero-person marketing function, Qritrim Inc.</div></div>
        <div class="hl-item reveal"><div class="hl-num">12</div><div class="hl-text">Years building marketing functions across BFSI, Insurance, Healthcare and IT services</div></div>
      </div>
    </div>
  </div>
</section>

<div class="sectors">
  <div class="wrap">
    <span class="sectors-label">Sector Experience</span>
    <div class="sectors-list">
      <span>BFSI</span><span>Insurance</span><span>Healthcare</span><span>IT &amp; Managed Services</span><span>Staffing</span><span>Consumer</span>
    </div>
  </div>
</div>

<div class="stats-bar">
  <div class="stat-cell reveal"><div class="stat-num" data-count="3851">0</div><div class="stat-label">Enterprise accounts reached, Q2 2026</div></div>
  <div class="stat-cell reveal"><div class="stat-num">24%</div><div class="stat-label">Of reached accounts at $1B+ revenue</div></div>
  <div class="stat-cell reveal"><div class="stat-num">4.5%</div><div class="stat-label">Reply rate, vs. 3.4% 2026 benchmark</div></div>
  <div class="stat-cell reveal"><div class="stat-num">$7.1M</div><div class="stat-label">Base-case influenced pipeline</div><div class="stat-caveat">Modelled, not booked revenue</div></div>
</div>

<section id="capabilities" class="cinematic-section">
  <div class="grain-overlay"></div>
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 2.0 · Areas of Practice</div><h2>Strategy, execution, and the AI layer connecting them</h2></div>
      <p class="section-note">Six practice areas, each backed by portfolio evidence and career record. Click a tile to open the brief.</p>
    </div>
    <div class="reveal" id="practiceMount"></div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 2.0 · Areas of Practice</span></div>
  </div>
</section>

<section id="tools">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 3.0 · AI-Led Lead Generation Tool Portfolio</div><h2>Fourteen demand tools, designed to prove the strategy, not just illustrate it</h2></div>
      <p class="section-note">A self-directed body of work applying tool-based demand generation across regulated verticals. Brands shown are fictitious portfolio demonstrations, built to test funnel mechanics and buyer psychology. They are not client deployments.</p>
    </div>

    <div class="coverflow-wrap reveal" id="coverflowMount"></div>

    <div style="margin-top:52px;padding-top:32px;border-top:1px solid var(--line);">
      <div class="section-eyebrow" style="margin-bottom:18px;">3.11 · Additional Tool Concepts in Development</div>
      <div class="cap-grid" style="border:none;background:transparent;gap:0;grid-template-columns:1fr 1fr;">
        <div style="padding:10px 24px 10px 0;border-bottom:1px solid var(--line);font-size:13.5px;"><b>Service Desk Automation ROI Calculator</b><br><span style="color:var(--graphite);font-size:12.5px;">Managed Services / ITSM · VP IT Ops · MOFU–BOFU</span></div>
        <div style="padding:10px 0 10px 24px;border-bottom:1px solid var(--line);font-size:13.5px;"><b>GenAI Adoption Readiness Assessment</b><br><span style="color:var(--graphite);font-size:12.5px;">Data &amp; AI Strategy · Chief AI Officer · TOFU</span></div>
        <div style="padding:10px 24px 10px 0;font-size:13.5px;"><b>Business Continuity / Downtime Exposure Assessment</b><br><span style="color:var(--graphite);font-size:12.5px;">Infrastructure Resilience · CIO / CISO · TOFU–MOFU</span></div>
      </div>
    </div>

    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 3.0 · Tool Portfolio</span></div>
  </div>
</section>

<section id="methodology" class="cinematic-section cinematic-section--methodology">
  <div class="grain-overlay"></div>
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 4.0 · Methodology</div><h2>Strategic depth, disclosed at the level of thinking</h2></div>
      <p class="section-note">Five frameworks applied consistently across engagements. Scrub through the sequence below.</p>
    </div>
    <div class="reveal" id="methodologyMount"></div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 4.0 · Methodology</span></div>
  </div>
</section>

<section id="record">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 5.0 · Professional Record</div><h2>Escalating scope, from RFP rigor to AI-native GTM</h2></div>
      <p class="section-note">Eleven years, six organizations, one throughline: building the system behind the number.</p>
    </div>
    <table class="record-table">
      <tbody>
        <tr class="reveal">
          <td class="rt-period">Dec 2025–Present</td>
          <td><div class="rt-role rt-current">Associate Director, Marketing</div><div class="rt-co">Pyramid Consulting Inc. (Pyramid · Celsior Technologies · Genspark)</div></td>
          <td class="rt-desc">Building the AI Marketing function from the ground up; owns GTM strategy across a multi-brand enterprise portfolio. Q2 mandate: 3,851 accounts reached, ~$7.1M influenced pipeline.</td>
        </tr>
        <tr class="reveal">
          <td class="rt-period">Aug 2024–Dec 2025</td>
          <td><div class="rt-role">Senior Manager, Marketing</div><div class="rt-co">Compunnel</div></td>
          <td class="rt-desc">Owned full-funnel digital strategy: SEO, content, social, email, and paid, and scaled HubSpot-driven programs against pipeline goals.</td>
        </tr>
        <tr class="reveal">
          <td class="rt-period">Jul 2023–Aug 2024</td>
          <td><div class="rt-role">Senior Manager, Marketing</div><div class="rt-co">WalkingTree Technologies</div></td>
          <td class="rt-desc">Built the marketing engine from scratch for portfolio startup Qritrim Inc.: 70% growth in inbound inquiries within a year, and CII National Gold and Silver recognition.</td>
        </tr>
        <tr class="reveal">
          <td class="rt-period">Jan 2021–Jul 2023</td>
          <td><div class="rt-role">Global Strategy &amp; Marketing Head</div><div class="rt-co">FCI CCM</div></td>
          <td class="rt-desc">Defined TAM/SAM, led a team of 15, drove +30% MQLs in six months and +50% database growth in one year via ZoomInfo-led acquisition.</td>
        </tr>
        <tr class="reveal">
          <td class="rt-period">2016–2021</td>
          <td><div class="rt-role">Marketing &amp; Presales Roles</div><div class="rt-co">Coforge · Kent RO Systems · EY · TC Global</div></td>
          <td class="rt-desc">Built RFP/RFI content for multimillion-dollar bids at EY across BFSI &amp; Healthcare; persona-driven content and global demand gen elsewhere.</td>
        </tr>
        <tr class="reveal">
          <td class="rt-period">Nov 2014–Sep 2016</td>
          <td><div class="rt-role">Associate Software Engineer</div><div class="rt-co">Accenture</div></td>
          <td class="rt-desc">SAP-SD implementation across supply chain transformation, the technical foundation under the marketing career that followed.</td>
        </tr>
      </tbody>
    </table>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 5.0 · Professional Record</span></div>
  </div>
</section>

<section id="credentials">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 6.0 · Credentials &amp; Recognition</div><h2>Education and formal recognition</h2></div>
    </div>
    <div class="cred-grid">
      <div class="cred-card reveal"><div class="cc-label">Education</div><div class="cc-title">MBA, Marketing Management</div><div class="cc-sub">NMIMS Mumbai</div></div>
      <div class="cred-card reveal"><div class="cc-label">Education</div><div class="cc-title">B.Tech, Mechanical &amp; Automation Engineering</div><div class="cc-sub">GGSIPU Delhi</div></div>
      <div class="cred-card reveal"><div class="cc-label">Recognition</div><div class="cc-title">CII National Gold &amp; Silver</div><div class="cc-sub">AI-driven Industry 4.0 Solutions, Qritrim Inc.</div></div>
    </div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 6.0 · Credentials</span></div>
  </div>
</section>

<section class="engage" id="engage" style="border-top:none;">
  <div class="wrap">
    <div class="section-eyebrow">Exhibit 7.0 · Engagement</div>
    <h2>The machine your GTM function needs, architected and operated.</h2>
    <div class="engage-grid">
      <p class="engage-note">Open to Senior Director, VP Marketing, and GTM Consulting mandates across BFSI, Insurance, Healthcare, and enterprise IT services. Based in Delhi NCR, India. Engaged with teams globally.</p>
      <div class="engage-contact">
        <div class="ec-row"><span class="ec-label">Email</span><a class="ec-value" href="mailto:awasthikartikeya92@gmail.com">awasthikartikeya92@gmail.com</a></div>
        <div class="ec-row"><span class="ec-label">LinkedIn</span><a class="ec-value" href="https://www.linkedin.com/in/kartikeya-awasthi-0ba97640/">/in/kartikeya-awasthi</a></div>
        <div class="ec-row"><span class="ec-label">Location</span><span class="ec-value">Delhi NCR, India</span></div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <span>© 2026 Kartikeya Awasthi</span>
    <span>Strategy Brief. Confidential to Recipient</span>
    <span>Delhi NCR, India</span>
  </div>
</footer>

`;

export default function PortfolioBody() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coverflowMount, setCoverflowMount] = useState<HTMLElement | null>(null);
  const [practiceMount, setPracticeMount] = useState<HTMLElement | null>(null);
  const [methodologyMount, setMethodologyMount] = useState<HTMLElement | null>(null);

  // BODY_HTML is injected via dangerouslySetInnerHTML on the next render past
  // this ref attaching, so the mount nodes only exist once that effect runs.
  useEffect(() => {
    setCoverflowMount(containerRef.current?.querySelector("#coverflowMount") ?? null);
    setPracticeMount(containerRef.current?.querySelector("#practiceMount") ?? null);
    setMethodologyMount(containerRef.current?.querySelector("#methodologyMount") ?? null);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let pollTimer: ReturnType<typeof setInterval> | null = null;

    function init() {
      const w = window as any;
      if (!w.gsap || !w.ScrollTrigger) return false;
      const gsap = w.gsap;
      const ScrollTrigger = w.ScrollTrigger;


  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.reveal').forEach(el=>{
    gsap.to(el,{opacity:1,y:0,duration:0.5,ease:'power1.out',scrollTrigger:{trigger:el,start:'top 92%'}});
  });
  const counter = document.querySelector('[data-count]');
  if(counter){
    let obj={val:0};
    const target = parseInt(counter.dataset.count,10);
    ScrollTrigger.create({trigger:counter,start:'top 90%',once:true,onEnter:()=>{
      gsap.to(obj,{val:target,duration:1.4,ease:'power1.out',onUpdate:()=>{counter.textContent=Math.floor(obj.val).toLocaleString();}});
    }});
  }
  const railLinks = document.querySelectorAll('.rail a');
  const sections = ['summary','capabilities','tools','methodology','record','engage'].map(id=>document.getElementById(id));
  sections.forEach((sec,i)=>{
    if(!sec) return;
    ScrollTrigger.create({
      trigger:sec, start:'top 50%', end:'bottom 50%',
      onEnter:()=>setActive(i), onEnterBack:()=>setActive(i)
    });
  });
  function setActive(i){ railLinks.forEach((l,idx)=>l.classList.toggle('active', idx===i)); }

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(mq.matches){document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none';});}


      return true;
    }

    if (!init()) {
      pollTimer = setInterval(() => {
        if (cancelled) return;
        if (init() && pollTimer) {
          clearInterval(pollTimer);
        }
      }, 60);
    }

    return () => {
      cancelled = true;
      if (pollTimer) clearInterval(pollTimer);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: BODY_HTML }}
      />
      {coverflowMount && createPortal(<CoverflowCarousel slides={TOOL_SLIDES} />, coverflowMount)}
      {practiceMount && createPortal(<PracticeGrid items={PRACTICE_ITEMS} />, practiceMount)}
      {methodologyMount && createPortal(<MethodologyScrubber steps={METHOD_STEPS} />, methodologyMount)}
    </>
  );
}
