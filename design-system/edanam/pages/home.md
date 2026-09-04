# Home page overrides — edanam

> Overrides `design-system/edanam/MASTER.md` for the homepage only.
> Brand rules from edanam.com design system take precedence over generated gold CTA.

## Color overrides

| Role | Hex | Notes |
|------|-----|--------|
| CTA / Accent | `#0284C7` → signal (`199 89% 32%`) | Keep professional cyan/blue — not gold |
| Primary | `#0F172A` | Unchanged |
| Background | `#FFFFFF` / `#F8FAFC` | Light enterprise surface |

> **Typography (site override):** Display `Fraunces` · Body/UI `Manrope` (latin-ext for TR). Avoid Inter/Geist defaults.

- **Primary visual:** ERP hierarchy diagram (hub-and-spoke), not decorative beams
- **Chart pattern:** Decomposition / flow hierarchy — CORE ERP dominant, spokes secondary
- **Connectors:** Neutral slate `#94A3B8` (do not compete with nodes)
- **Active state:** Signal blue + legend label “Integrated” (color is not the only cue)
- **Motion:** One-shot path draw + fade/slide-up; respect `prefers-reduced-motion`
- **Anti-pattern:** No infinite decorative beam dominance; beams opacity ≤ 25%

## Metrics (Trust & Authority)

- Smooth **once** reveal on scroll (`MetricStat`)
- No continuous bounce/pulse on numbers
- Pair value + outcome label + industry context

## Audience cards

- Replace empty color blocks with `AudienceViz` (icon + mini bars)
- Hover: shadow/border only — no layout-shifting translate/scale
