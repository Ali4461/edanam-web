# Edanam Web App

Next.js 16 · shadcn/ui · Aceternity UI · UI UX Pro Max

## Setup

Disk space was exhausted during the initial `create-next-app` install. Free space, then:

```bash
cd web
npm cache clean --force
npm install
npm run dev
```

Optional — pull more Aceternity components via registry:

```bash
npx shadcn@latest add @aceternity/spotlight
npx shadcn@latest add @aceternity/background-beams
npx shadcn@latest add @aceternity/card-hover-effect
npx shadcn@latest add @aceternity/bento-grid
npx shadcn@latest add @aceternity/text-generate-effect
```

(Core versions of these are already in `src/components/ui/`.)

## Stack

- **UI UX Pro Max** design tokens: navy primary, signal blue CTA, Instrument Serif + Plus Jakarta Sans
- **shadcn/ui**: Button, Card, Input, Label, Select, Textarea, Badge, Separator, NavigationMenu
- **Aceternity**: Spotlight, BackgroundBeams, HoverEffect, BentoGrid, TextGenerateEffect

## Routes

- `/` Home
- `/services/erp-consulting`
- `/services/excel-automation`
- `/services/digital-products`
- `/case-studies`
- `/blog`
- `/contact`
