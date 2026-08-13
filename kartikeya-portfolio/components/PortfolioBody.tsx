// @ts-nocheck
// This component intentionally renders ported static markup + vanilla DOM
// scripting (GSAP scroll reveals, coverflow carousel) rather than idiomatic
// React state. Type-checking is disabled here; all interactive logic is
// scoped to this single file and safe to refactor into React state later.
"use client";

import { useEffect, useRef } from "react";

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
      <a href="#engagements">Engagements</a>
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
  <a href="#engagements" title="Engagements"></a>
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

<section id="capabilities">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 2.0 · Areas of Practice</div><h2>Strategy, execution, and the AI layer connecting them</h2></div>
      <p class="section-note">Six practice areas, each backed by portfolio evidence and career record.</p>
    </div>
    <div class="cap-grid">
      <div class="cap-card reveal"><div class="cap-num">2.1</div><h3>AI-Native Marketing Systems</h3><p>Building the AI Marketing function from scratch: agents, workflow automation, and AI-driven enrichment embedded across content, campaigns, and operations.</p><div class="cap-tags"><span>AI Agents</span><span>Workflow Automation</span><span>Prompt Engineering</span></div></div>
      <div class="cap-card reveal"><div class="cap-num">2.2</div><h3>GTM Strategy &amp; Positioning</h3><p>Market signal mapping, TAM/SAM definition, vertical positioning across BFSI, Insurance, Healthcare and staffing.</p><div class="cap-tags"><span>TAM/SAM</span><span>Segmentation</span><span>Vertical GTM</span></div></div>
      <div class="cap-card reveal"><div class="cap-num">2.3</div><h3>Demand Generation &amp; ABM</h3><p>Multi-channel campaign architecture, lead scoring, and pipeline attribution, run at enterprise scale.</p><div class="cap-tags"><span>ABM 2.0</span><span>Lead Scoring</span><span>Sales Enablement</span></div></div>
      <div class="cap-card reveal"><div class="cap-num">2.4</div><h3>Content &amp; Search Strategy</h3><p>Persona-driven content architecture, extended into AI-search visibility as buyer discovery shifts from search engines to answer engines.</p><div class="cap-tags"><span>SEO / AEO / GEO</span><span>Editorial Strategy</span><span>Persona Mapping</span></div></div>
      <div class="cap-card reveal"><div class="cap-num">2.5</div><h3>MarTech &amp; Analytics</h3><p>HubSpot, Salesforce/Pardot, ZoomInfo, and Apollo, owned end-to-end, including a $68K/yr contract audit and renegotiation.</p><div class="cap-tags"><span>HubSpot</span><span>Salesforce</span><span>ROI Reporting</span></div></div>
      <div class="cap-card reveal"><div class="cap-num">2.6</div><h3>Team &amp; Stakeholder Leadership</h3><p>Built and led teams of 15+, reporting into VP Marketing, partnering cross-functionally with sales, product, engineering.</p><div class="cap-tags"><span>Team Building</span><span>Exec Comms</span><span>Cross-functional</span></div></div>
    </div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 2.0 · Areas of Practice</span></div>
  </div>
</section>

<section id="engagements">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 3.0 · Selected Engagements</div><h2>Five engagements, from BFSI demand motions to platform GTM builds</h2></div>
      <p class="section-note">Five representative engagements. Confidential details abstracted per client agreement.</p>
    </div>
    <div class="port-list">
      <div class="port-item reveal">
        <div class="port-idx">3.1</div>
        <div><div class="port-tag">Interactive Tool · Consideration Stage</div><h3>Modernization ROI Calculator</h3><p>Interactive tool qualifying legacy-modernization prospects by estimated cost/time savings, designed against the 2026 benchmark that ROI calculators convert 28–42% on landing pages, vs. 4–8% for static PDFs.</p><span class="placeholder-tag">Actual completion / lead data: pending</span></div>
        <div class="port-meta"><div class="port-metric">28–42%</div><div class="port-metric-label">Industry benchmark conversion range for this tool type</div></div>
      </div>
      <div class="port-item reveal">
        <div class="port-idx">3.2</div>
        <div><div class="port-tag">Interactive Tool · Awareness → Engagement</div><h3>AI Governance Assessment</h3><p>Diagnostic assessment scoring AI readiness and governance maturity for BFSI/Insurance compliance leaders. Built against the "governed intelligence" narrative surfaced in Q2 market signal analysis.</p><span class="placeholder-tag">Actual completion / lead data: pending</span></div>
        <div class="port-meta"><div class="port-metric">22–38%</div><div class="port-metric-label">Industry benchmark for diagnostic/scorecard tools</div></div>
      </div>
      <div class="port-item reveal">
        <div class="port-idx">3.3</div>
        <div><div class="port-tag">GTM Motion · Q2 2026</div><h3>Enterprise BFSI Demand Motion</h3><p>Fourteen campaigns across six offer themes reaching 1,891 BFSI accounts. Beat the 2026 cold-outreach benchmark, with top-engaged accounts concentrated at $5B+ revenue.</p></div>
        <div class="port-meta"><div class="port-metric">4.9%</div><div class="port-metric-label">Reply rate vs. 1.5–3.5% BFSI norm</div></div>
      </div>
      <div class="port-item reveal">
        <div class="port-idx">3.4</div>
        <div><div class="port-tag">GTM Narrative &amp; Architecture</div><h3>Synthetix: 13-Module GTM Build</h3><p>Full go-to-market narrative and product architecture for an AI-led legacy modernization platform, positioned across BFSI, Insurance, and Healthcare for sales and pre-sales enablement.</p></div>
        <div class="port-meta"><div class="port-metric">13</div><div class="port-metric-label">GTM modules, 3 verticals</div></div>
      </div>
      <div class="port-item reveal">
        <div class="port-idx">3.5</div>
        <div><div class="port-tag">0 → 1 Build</div><h3>Qritrim Inc.: Marketing Engine From Scratch</h3><p>Built the marketing function from zero at a portfolio startup. Work later recognized with CII National Gold &amp; Silver for AI-driven Industry 4.0 solutions.</p></div>
        <div class="port-meta"><div class="port-metric">+70%</div><div class="port-metric-label">Inbound inquiry growth, year one</div></div>
      </div>
    </div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 3.0 · Selected Engagements</span></div>
  </div>
</section>

<section id="tools">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 4.0 · AI-Led Lead Generation Tool Portfolio</div><h2>Fourteen demand tools, designed to prove the strategy, not just illustrate it</h2></div>
      <p class="section-note">A self-directed body of work applying tool-based demand generation across regulated verticals. Brands shown are fictitious portfolio demonstrations, built to test funnel mechanics and buyer psychology. They are not client deployments.</p>
    </div>

    <div class="coverflow-wrap reveal">
      <div class="coverflow-track" id="coverflowTrack">
        <div class="cf-card" data-index="0" data-url="https://claims-ai-healthcaretool.vercel.app/"
             data-tag="Healthcare · Payer Ops · MOFU" data-title="Claims AI Accelerator" data-idx="4.1"
             data-desc="ROI calculator for VP/Director Claims Ops, COO and CMO. Models denial-overturn rate and claims-leakage dollars recovered against the visitor's own claim volume."
             data-img="/tool-claims-ai.png">
          <div class="cf-card-face has-image">
            <img src="/tool-claims-ai.png" alt="Claims AI Accelerator interface" class="cf-image">
          </div>
        </div>
        <div class="cf-card" data-index="1" data-url="https://legacy-mod-savings-estimator.vercel.app/"
             data-tag="BFSI · Insurance · Healthcare · MOFU-BOFU" data-title="Legacy Modernization Savings Estimator" data-idx="4.2"
             data-desc="Multi-variant business-case builder for CIO/CTO and Heads of Digital Transformation. Every assumption is editable, delivery cost and upkeep savings split out as a defensible line-item case.">
          <div class="cf-card-face">
            <div class="cf-tag">BFSI · Insurance · Healthcare · MOFU-BOFU</div>
            <div class="cf-idx">4.2</div>
            <h3>Legacy Modernization Savings Estimator</h3>
            <p>Multi-variant business-case builder for CIO/CTO and Heads of Digital Transformation.</p>
          </div>
        </div>
        <div class="cf-card" data-index="2" data-url="https://ai-governance-assessment-tool.vercel.app/"
             data-tag="Regulated Sectors · TOFU-MOFU" data-title="AI Governance Assessment" data-idx="4.3"
             data-desc="Quiz-based diagnostic for Chief Compliance Officers, CROs, General Counsel and CISOs. Returns a dollarized regulatory-exposure number scored against SEC, FINRA and HIPAA citations.">
          <div class="cf-card-face">
            <div class="cf-tag">Regulated Sectors · TOFU-MOFU</div>
            <div class="cf-idx">4.3</div>
            <h3>AI Governance Assessment</h3>
            <p>Quiz-based diagnostic scoring regulatory exposure for Compliance and Risk leaders.</p>
          </div>
        </div>
        <div class="cf-card" data-index="3" data-url="https://underwriting-ai-roi-calculator.vercel.app/"
             data-tag="Insurance · Underwriting · MOFU" data-title="Underwriting AI ROI Calculator" data-idx="4.4"
             data-desc="For Chief Underwriting Officers and VP Underwriting. Quantifies cycle-time reduction and loss-ratio improvement in dollar terms.">
          <div class="cf-card-face">
            <div class="cf-tag">Insurance · Underwriting · MOFU</div>
            <div class="cf-idx">4.4</div>
            <h3>Underwriting AI ROI Calculator</h3>
            <p>Quantifies cycle-time reduction and loss-ratio improvement in dollar terms.</p>
          </div>
        </div>
        <div class="cf-card" data-index="4" data-url="https://cloud-migration-infrastructure-tco.vercel.app/"
             data-tag="Cross-Industry · Infrastructure · MOFU" data-title="Cloud Migration &amp; Infrastructure TCO Calculator" data-idx="4.5"
             data-desc="For CIOs, VPs of Infrastructure and Heads of Cloud. On-prem/legacy hosting cost vs. cloud TCO, with migration payback period in months.">
          <div class="cf-card-face">
            <div class="cf-tag">Cross-Industry · Infrastructure · MOFU</div>
            <div class="cf-idx">4.5</div>
            <h3>Cloud Migration &amp; Infrastructure TCO Calculator</h3>
            <p>On-prem/legacy hosting cost vs. cloud TCO, with migration payback in months.</p>
          </div>
        </div>
      </div>

      <div class="cf-controls">
        <button type="button" class="cf-btn" id="cfPrev" aria-label="Previous tool">&larr;</button>
        <div class="cf-detail">
          <div class="cf-detail-tag" id="cfTag">Healthcare · Payer Ops · MOFU</div>
          <h3 class="cf-detail-title" id="cfTitle">Claims AI Accelerator</h3>
          <p class="cf-detail-desc" id="cfDesc">ROI calculator for VP/Director Claims Ops, COO and CMO. Models denial-overturn rate and claims-leakage dollars recovered against the visitor's own claim volume.</p>
          <a class="cf-detail-link" id="cfLink" href="https://claims-ai-healthcaretool.vercel.app/" target="_blank" rel="noopener">Launch tool &#8599;</a>
        </div>
        <button type="button" class="cf-btn" id="cfNext" aria-label="Next tool">&rarr;</button>
      </div>
    </div>

    <div style="margin-top:52px;padding-top:32px;border-top:1px solid var(--line);">
      <div class="section-eyebrow" style="margin-bottom:18px;">4.6 · Additional Tool Concepts in Development</div>
      <div class="cap-grid" style="border:none;background:transparent;gap:0;grid-template-columns:1fr 1fr;">
        <div style="padding:10px 24px 10px 0;border-bottom:1px solid var(--line);font-size:13.5px;"><b>Shadow AI &amp; Data Exposure Risk Assessment</b><br><span style="color:var(--graphite);font-size:12.5px;">Cybersecurity · CISO / CDO · TOFU</span></div>
        <div style="padding:10px 0 10px 24px;border-bottom:1px solid var(--line);font-size:13.5px;"><b>IT Spend Benchmarking Tool</b><br><span style="color:var(--graphite);font-size:12.5px;">FinOps · CFO / CIO · TOFU–MOFU</span></div>
        <div style="padding:10px 24px 10px 0;border-bottom:1px solid var(--line);font-size:13.5px;"><b>DevOps Maturity &amp; Downtime Cost Calculator</b><br><span style="color:var(--graphite);font-size:12.5px;">Platform Eng / SRE · VP Eng · MOFU</span></div>
        <div style="padding:10px 0 10px 24px;border-bottom:1px solid var(--line);font-size:13.5px;"><b>Data Silo Cost Calculator</b><br><span style="color:var(--graphite);font-size:12.5px;">Data &amp; Analytics · CDO / VP Analytics · MOFU</span></div>
        <div style="padding:10px 24px 10px 0;border-bottom:1px solid var(--line);font-size:13.5px;"><b>SaaS Stack Consolidation Savings Calculator</b><br><span style="color:var(--graphite);font-size:12.5px;">IT Procurement · CIO · MOFU</span></div>
        <div style="padding:10px 0 10px 24px;border-bottom:1px solid var(--line);font-size:13.5px;"><b>Service Desk Automation ROI Calculator</b><br><span style="color:var(--graphite);font-size:12.5px;">Managed Services / ITSM · VP IT Ops · MOFU–BOFU</span></div>
        <div style="padding:10px 24px 10px 0;font-size:13.5px;"><b>GenAI Adoption Readiness Assessment</b><br><span style="color:var(--graphite);font-size:12.5px;">Data &amp; AI Strategy · Chief AI Officer · TOFU</span></div>
        <div style="padding:10px 0 10px 24px;font-size:13.5px;"><b>Business Continuity / Downtime Exposure Assessment</b><br><span style="color:var(--graphite);font-size:12.5px;">Infrastructure Resilience · CIO / CISO · TOFU–MOFU</span></div>
      </div>
    </div>

    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 4.0 · Tool Portfolio</span></div>
  </div>
</section>

<section id="methodology">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 5.0 · Methodology</div><h2>Strategic depth, disclosed at the level of thinking</h2></div>
      <p class="section-note">Five frameworks applied consistently across engagements, shown to demonstrate rigor rather than serve as a replicable playbook.</p>
    </div>
    <div class="gtm-modules">
      <div class="gtm-mod reveal"><div class="gtm-mod-num">5.1</div><div><div class="gtm-mod-title">Market Signal → GTM Fit Mapping</div><div class="gtm-mod-sub">Identifying white-space before committing to a motion</div></div></div>
      <div class="gtm-mod reveal"><div class="gtm-mod-num">5.2</div><div><div class="gtm-mod-title">Enterprise Segmentation Architecture</div><div class="gtm-mod-sub">Prioritizing accounts by revenue, pain-fit, and engagement trajectory</div></div></div>
      <div class="gtm-mod reveal"><div class="gtm-mod-num">5.3</div><div><div class="gtm-mod-title">AI-Led Content &amp; Tool Design</div><div class="gtm-mod-sub">Turning a buyer question into an interactive, self-qualifying asset</div></div></div>
      <div class="gtm-mod reveal"><div class="gtm-mod-num">5.4</div><div><div class="gtm-mod-title">Demand Engine Design</div><div class="gtm-mod-sub">Offer architecture, sequencing logic, escalation to sales-qualified</div></div></div>
      <div class="gtm-mod reveal"><div class="gtm-mod-num">5.5</div><div><div class="gtm-mod-title">Pipeline Modeling &amp; Attribution</div><div class="gtm-mod-sub">Conservative / base / upside scenarios, transparent and benchmark-backed</div></div></div>
    </div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 5.0 · Methodology</span></div>
  </div>
</section>

<section id="record">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 6.0 · Professional Record</div><h2>Escalating scope, from RFP rigor to AI-native GTM</h2></div>
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
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 6.0 · Professional Record</span></div>
  </div>
</section>

<section id="credentials">
  <div class="wrap">
    <div class="section-head">
      <div><div class="section-eyebrow">Exhibit 7.0 · Credentials &amp; Recognition</div><h2>Education and formal recognition</h2></div>
    </div>
    <div class="cred-grid">
      <div class="cred-card reveal"><div class="cc-label">Education</div><div class="cc-title">MBA, Marketing Management</div><div class="cc-sub">NMIMS Mumbai</div></div>
      <div class="cred-card reveal"><div class="cc-label">Education</div><div class="cc-title">B.Tech, Mechanical &amp; Automation Engineering</div><div class="cc-sub">GGSIPU Delhi</div></div>
      <div class="cred-card reveal"><div class="cc-label">Recognition</div><div class="cc-title">CII National Gold &amp; Silver</div><div class="cc-sub">AI-driven Industry 4.0 Solutions, Qritrim Inc.</div></div>
    </div>
    <div class="doc-footer"><span>Kartikeya Awasthi · GTM &amp; Demand Generation</span><span>Exhibit 7.0 · Credentials</span></div>
  </div>
</section>

<section class="engage" id="engage" style="border-top:none;">
  <div class="wrap">
    <div class="section-eyebrow">Exhibit 8.0 · Engagement</div>
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
  const sections = ['summary','capabilities','engagements','tools','methodology','record','engage'].map(id=>document.getElementById(id));
  sections.forEach((sec,i)=>{
    if(!sec) return;
    ScrollTrigger.create({
      trigger:sec, start:'top 50%', end:'bottom 50%',
      onEnter:()=>setActive(i), onEnterBack:()=>setActive(i)
    });
  });
  function setActive(i){ railLinks.forEach((l,idx)=>l.classList.toggle('active', idx===i)); }

  // Coverflow carousel
  (function(){
    const track = document.getElementById('coverflowTrack');
    if(!track) return;
    const cards = Array.from(track.querySelectorAll('.cf-card'));
    const tagEl = document.getElementById('cfTag');
    const titleEl = document.getElementById('cfTitle');
    const descEl = document.getElementById('cfDesc');
    const linkEl = document.getElementById('cfLink');
    let active = 0;

    function layout(){
      const n = cards.length;
      const isMobile = window.innerWidth < 700;
      const spacing = isMobile ? 110 : 260;
      const depth = isMobile ? 110 : 220;
      cards.forEach((card, i)=>{
        let offset = i - active;
        if(offset > n/2) offset -= n;
        if(offset < -n/2) offset += n;
        const abs = Math.abs(offset);
        let x = offset * spacing;
        let z = -abs * depth;
        let rotateY = offset * -34;
        let scale = abs === 0 ? 1 : 0.8;
        let opacity = abs > 2 ? 0 : 1;
        card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.zIndex = 100 - abs;
        card.style.opacity = opacity;
        card.style.pointerEvents = abs === 0 ? 'auto' : 'none';
      });
      const c = cards[active];
      tagEl.textContent = c.dataset.tag;
      titleEl.innerHTML = c.dataset.title;
      descEl.textContent = c.dataset.desc;
      linkEl.href = c.dataset.url;
    }

    document.getElementById('cfPrev').addEventListener('click', ()=>{
      active = (active - 1 + cards.length) % cards.length; layout();
    });
    document.getElementById('cfNext').addEventListener('click', ()=>{
      active = (active + 1) % cards.length; layout();
    });
    cards.forEach((card, i)=>{
      card.addEventListener('click', ()=>{
        if(i !== active){ active = i; layout(); }
        else { window.open(card.dataset.url, '_blank'); }
      });
    });

    // drag support
    let startX = 0, dragging = false;
    track.addEventListener('pointerdown', e=>{ dragging = true; startX = e.clientX; track.classList.add('dragging'); });
    window.addEventListener('pointerup', e=>{
      if(!dragging) return;
      dragging = false; track.classList.remove('dragging');
      const dx = e.clientX - startX;
      if(dx > 40){ active = (active - 1 + cards.length) % cards.length; layout(); }
      else if(dx < -40){ active = (active + 1) % cards.length; layout(); }
    });
    window.addEventListener('resize', layout);

    layout();
    ScrollTrigger.create({trigger:track, start:'top 90%', once:true, onEnter:()=>{
      gsap.to(track,{opacity:1,duration:.5});
    }});
  })();

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
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
