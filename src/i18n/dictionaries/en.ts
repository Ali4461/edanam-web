export const en = {
  meta: {
    titleDefault: "Edanam — ERP Consulting, Excel Automation & Digital Products",
    titleTemplate: "%s — Edanam",
    description:
      "Edanam helps manufacturing companies, ERP managers, and SMEs with ERP consulting, Excel automation, and digital products.",
  },
  nav: {
    home: "Home",
    services: "Services",
    caseStudies: "Case Studies",
    blog: "Blog",
    contact: "Contact",
    bookCall: "Book a discovery call",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: "Edanam home",
    primaryAria: "Primary",
    servicesItems: [
      {
        href: "/services/erp-consulting",
        title: "ERP Consulting",
        description: "Selection, implementation, recovery",
      },
      {
        href: "/services/excel-automation",
        title: "Excel Automation",
        description: "Reporting, models, workflows",
      },
      {
        href: "/services/digital-products",
        title: "Digital Products",
        description: "Tools that scale your ops",
      },
    ],
  },
  language: {
    label: "Language",
    en: "EN",
    tr: "TR",
  },
  footer: {
    blurb: "ERP consulting, Excel automation, and digital products for manufacturing and SMEs.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    rights: "© 2026 Edanam. All rights reserved.",
  },
  common: {
    explore: "Explore",
    skipToContent: "Skip to content",
  },
  diagram: {
    caption:
      "Hierarchy diagram: Core ERP at the center, connected to Finance GL/AP, Supply MRP, Plant MES, People HR/WMS, and Customer CRM. Active integrations marked on Supply, Plant, and People.",
    integrated: "Integrated",
    adjacent: "Adjacent",
    nodes: {
      finance: { domain: "Finance", system: "GL / AP" },
      supply: { domain: "Supply", system: "MRP" },
      core: { domain: "Core", system: "ERP" },
      plant: { domain: "Plant", system: "MES" },
      people: { domain: "People", system: "HR / WMS" },
      customer: { domain: "Customer", system: "CRM" },
    },
  },
  home: {
    positioning: "Transforming operational knowledge into digital systems.",
    chips: ["Manufacturing", "ERP", "Automation", "MES"],
    headline: "Systems, spreadsheets, and products that run the plant—not the other way around.",
    subhead:
      "ERP consulting, Excel automation, and digital products for manufacturing companies, ERP managers, and growing SMEs.",
    ctaPrimary: "Schedule a discovery call",
    ctaSecondary: "See case studies",
    trustedBy: "Trusted by operations leaders across manufacturing & distribution",
    trustedAria: "Trusted by",
    servicesEyebrow: "Services",
    servicesTitle: "Three ways we create operational clarity.",
    servicesLead:
      "From enterprise platforms to the spreadsheets that still run the business—and the products that replace them when ready.",
    services: [
      {
        title: "ERP Consulting",
        description:
          "Vendor-neutral selection, implementation leadership, and post go-live recovery for manufacturing ERP.",
        link: "/services/erp-consulting",
      },
      {
        title: "Excel Automation",
        description:
          "Close the gap between ERP and reality—automated reports, planning models, and controlled workbooks.",
        link: "/services/excel-automation",
      },
      {
        title: "Digital Products",
        description:
          "Purpose-built tools for inventory, planning, and ops—when spreadsheets and ERP alone are not enough.",
        link: "/services/digital-products",
      },
    ],
    audienceTitle: "Built for the people who own the system of record.",
    audienceLead:
      "When programs stall, the cost is inventory blind spots, delayed shipments, and teams that stop trusting the numbers.",
    audiences: [
      {
        title: "Manufacturing companies",
        description:
          "BOM accuracy, shop-floor integration, and planning that matches how you actually produce.",
        variant: "manufacturing" as const,
      },
      {
        title: "ERP managers",
        description:
          "Vendor-neutral roadmaps, clean cutovers, and governance that keeps scope honest after go-live.",
        variant: "erp" as const,
      },
      {
        title: "Growing SMEs",
        description:
          "Right-sized platforms and automation—no overbuy, no under-spec—so finance, ops, and sales share one truth.",
        variant: "sme" as const,
      },
    ],
    casesEyebrow: "Case Studies",
    casesTitle: "Outcomes you can take to the board.",
    casesLink: "View all case studies",
    metrics: [
      {
        value: "38%",
        label: "Faster month-end close",
        detail: "Precision components · 420 employees",
      },
      {
        value: "22%",
        label: "Inventory carrying cost down",
        detail: "Food & beverage · multi-site",
      },
      {
        value: "14 wks",
        label: "Go-live from frozen scope",
        detail: "Discrete assembly · greenfield ERP",
      },
    ],
    blogEyebrow: "Blog",
    blogTitle: "Thinking before tooling.",
    blogLink: "Read the blog",
    posts: [
      {
        title: "Why most manufacturing RFPs select the wrong ERP",
        description:
          "Demo theater vs. process fit—and the three questions that change the shortlist.",
        meta: "Brief · 8 min",
      },
      {
        title: "A cutover checklist your plant will survive",
        description:
          "Parallel run criteria, freeze windows, and the go/no-go board that actually works.",
        meta: "Playbook · 12 min",
      },
      {
        title: "When Excel should stay—and when it must go",
        description: "A practical framework for automating without breaking the finance close.",
        meta: "Automation · 6 min",
      },
    ],
    ctaTitle: "Start with a 45-minute discovery call.",
    ctaLead:
      "Tell us where the system is failing the business. We’ll return a clear read on fit, risk, and the first 90 days.",
    ctaButton: "Go to contact",
    ctaBadge: "45 min",
  },
  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Book a 45-minute discovery call with Edanam for ERP consulting, Excel automation, or digital products.",
    eyebrow: "Contact",
    title: "Start with a 45-minute discovery call.",
    lead: "Tell us where the system is failing the business. We’ll return a clear read on fit, risk, and the first 90 days.",
    bullets: [
      "No vendor pitch—architecture first",
      "Manufacturing & SME specialists",
      "Written summary within 48 hours",
    ],
    emailLabel: "Email",
    form: {
      fullName: "Full name",
      fullNamePlaceholder: "Alex Rivera",
      workEmail: "Work email",
      workEmailPlaceholder: "alex@company.com",
      company: "Company",
      companyPlaceholder: "Acme Manufacturing",
      interest: "Interest",
      interestPlaceholder: "Select interest",
      interests: {
        erp: "ERP Consulting",
        excel: "Excel Automation",
        digital: "Digital Products",
        unsure: "Not sure yet",
      },
      message: "What should we discuss?",
      messagePlaceholder: "Brief context on your systems and goals…",
      submit: "Request discovery call",
      success: "Thanks—we’ll be in touch within one business day.",
      consent: "By submitting, you agree to be contacted about Edanam services.",
    },
  },
  caseStudies: {
    metaTitle: "Case Studies",
    metaDescription:
      "Client outcomes in ERP, Excel automation, and digital products for manufacturing and SMEs.",
    eyebrow: "Case Studies",
    title: "Outcomes you can take to the board.",
    lead: "Selected engagements across ERP programs, spreadsheet automation, and digital products.",
    cta: "Start a similar engagement",
    items: [
      {
        tag: "ERP Consulting",
        title: "Helix Components — 38% faster month-end close",
        body: "Precision manufacturer, 420 employees. We led selection and cutover for a greenfield ERP—freeze criteria, parallel run, and finance ownership from day one.",
        stats: [
          { label: "Result", value: "38% faster close" },
          { label: "Timeline", value: "14-week go-live" },
        ],
      },
      {
        tag: "Excel Automation",
        title: "Meridian Foods — inventory pack in under 2 hours",
        body: "Multi-site packager. Replaced a fragile 40-tab workbook with Power Query pipelines and a governed model—same KPIs, no weekend rebuilds.",
        stats: [
          { label: "Result", value: "22% lower carrying cost" },
          { label: "Ops time", value: "−12 hrs / week" },
        ],
      },
      {
        tag: "Digital Products",
        title: "NordForge — shop-floor schedule workbench",
        body: "Built a constraint-aware scheduling surface on top of ERP orders. Planners stopped exporting to Excel for the daily freeze.",
        stats: [
          { label: "Result", value: "+9% OTD in 90 days" },
          { label: "Adoption", value: "100% planner use" },
        ],
      },
    ],
  },
  blog: {
    metaTitle: "Blog",
    metaDescription:
      "Briefs and playbooks on ERP, Excel automation, and digital operations for manufacturing leaders.",
    eyebrow: "Blog",
    title: "Thinking before tooling.",
    lead: "Short briefs for ERP managers, plant leaders, and SME operators who own the system of record.",
    footerPrompt: "Want the full briefing pack?",
    footerLink: "Contact us",
    posts: [
      {
        meta: "ERP · 8 min",
        title: "Why most manufacturing RFPs select the wrong ERP",
        description:
          "Demo theater vs. process fit—and the three questions that change the shortlist.",
      },
      {
        meta: "Playbook · 12 min",
        title: "A cutover checklist your plant will survive",
        description:
          "Parallel run criteria, freeze windows, and the go/no-go board that actually works.",
      },
      {
        meta: "Excel · 6 min",
        title: "When Excel should stay—and when it must go",
        description: "A practical framework for automating without breaking the finance close.",
      },
      {
        meta: "Products · 7 min",
        title: "Governing ERP after go-live without a PMO army",
        description:
          "Lightweight cadences for SMEs that keep enhancements tied to throughput and margin.",
      },
    ],
  },
  services: {
    label: "Services",
    erp: {
      metaTitle: "ERP Consulting",
      metaDescription:
        "Vendor-neutral ERP selection, implementation leadership, and recovery for manufacturing and SMEs.",
      title: "ERP consulting with board-ready rigor.",
      lead: "We help manufacturing companies and ERP managers select, implement, and govern systems operators will actually use.",
      deliverTitle: "What we deliver",
      deliverables: [
        {
          title: "ERP selection & RFP",
          body: "vendor-neutral scoring, demo scripts rooted in your use cases, and a TCO model finance trusts.",
        },
        {
          title: "Implementation leadership",
          body: "program management between your SI and your plant, protecting scope and go-live readiness.",
        },
        {
          title: "Optimization & recovery",
          body: "root-cause analysis and a 90-day value plan when a live ERP underperforms.",
        },
      ],
      methodTitle: "Our method",
      method: [
        {
          n: "01",
          title: "Diagnose operating reality",
          body: "Process mapping and data quality before licenses are chosen.",
        },
        {
          n: "02",
          title: "Design target architecture",
          body: "Module scope, integrations, and a decision log the board can follow.",
        },
        {
          n: "03",
          title: "Controlled cutover",
          body: "Phased rollout and hypercare that protects throughput.",
        },
        {
          n: "04",
          title: "Govern for value",
          body: "KPI ownership and a backlog tied to P&L—not feature wishlists.",
        },
      ],
      bestFit: "Best fit",
      fitItems: [
        "Discrete & process manufacturers",
        "Multi-site SMEs modernizing ERP",
        "ERP managers mid-implementation",
      ],
      cta: "Discuss your ERP program",
      alsoSee: "Also see",
      and: "and",
    },
    excel: {
      metaTitle: "Excel Automation",
      metaDescription:
        "Automated reporting, planning models, and controlled Excel workflows for manufacturing and finance teams.",
      title: "Excel automation that finance and ops both trust.",
      lead: "We harden the spreadsheets that still run the business—then automate the paths that should never have been manual.",
      cards: [
        {
          title: "Reporting packs",
          body: "Month-end, inventory, and OTIF packs that pull from ERP exports—versioned, documented, and owned.",
        },
        {
          title: "Planning models",
          body: "Demand, capacity, and cost models with guardrails—so scenarios stay auditable under pressure.",
        },
        {
          title: "Workflow automation",
          body: "Power Query, Office Scripts, and controlled macros that remove copy-paste from critical paths.",
        },
      ],
      whenTitle: "When Excel is the right layer",
      whenBody:
        "Not every process needs a new module. We stabilize the workbook layer that bridges ERP gaps—then define the exit criteria for when a digital product or ERP enhancement should take over.",
      cta: "Automate a critical workbook",
    },
    digital: {
      metaTitle: "Digital Products",
      metaDescription:
        "Purpose-built digital products for inventory, planning, and operations when ERP and Excel are not enough.",
      title: "Digital products for the gaps ERP leaves open.",
      lead: "Lightweight tools designed around how your plant actually works—integrated where it matters, simple where it should be.",
      items: [
        {
          title: "Inventory visibility",
          body: "Real-time views across sites and WIP that operators will use—without waiting for a full WMS program.",
        },
        {
          title: "Planning workbenches",
          body: "Constraint-aware planning surfaces that sit on top of ERP master data and replace fragile spreadsheet loops.",
        },
        {
          title: "Ops dashboards",
          body: "Throughput, scrap, and schedule adherence—designed for the daily stand-up, not the board pack alone.",
        },
        {
          title: "Integration glue",
          body: "APIs and sync jobs between ERP, MES, and the tools your teams already live in.",
        },
      ],
      bandTitle: "Build only what the P&L needs.",
      bandBody:
        "We scope MVPs against a measurable KPI, ship in weeks—not quarters—and retire Excel paths with a controlled cutover.",
      cta: "Scope a product",
    },
  },
};
