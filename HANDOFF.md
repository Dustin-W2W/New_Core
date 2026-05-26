# Ways2Well "New Core" Prototype — Handoff

**Last updated:** May 22, 2026
**Owner:** Dustin Humphreys
**Repo:** https://github.com/Dustin-W2W/New_Core
**Local path:** `C:\Users\DustinHumphreys\code\new_core`
**Live site:** (Netlify URL — fill in once deployed)

---

## 1. Background — Why this prototype exists

Ways2Well's current flagship offering is the **Ways2Well Membership** (annual bloodwork subscription, $49.99/mo). It's selling well, but customer survey data (see PS01_Analysis_v1.xlsx in the original project) surfaced consistent feedback:

- **#1 patient request (36%):** A dedicated health coach with regular check-ins
- **Top free-text theme:** Better lab interpretation — patients want a clinician to walk them through results
- **55% of patients** said personalized labs are the most valuable part of the experience
- **46% preferred a Transform-style premium tier** over the current single-tier structure

The marketing team produced an alternative concept (see YourW2W_JourneyStartsHere.pdf) with two entry points: a $99 Clinical Consult or a $399 Comprehensive Panel + Consult. Dustin had concerns about the $99 entry — low revenue, drain on clinician time.

**Dustin's direction for this prototype:**
Restructure the offering into two clear buckets:
1. **Pay As You Go** (renamed from "À La Carte") — including a "Discover Package" that combines a Comprehensive Panel + Clinical Consult, intended to help patients decide which membership tier fits.
2. **Memberships** — tiered, with the survey-driven differentiators (dedicated coach, lab interpretation) built in.

Design language pulled from [ways2well.com](https://ways2well.com): deep navy `#1a1d29`, cyan accent `#34b4f4`, warm cream text `#f7f3eb`, Roboto Black 900 uppercase headings with letter-spacing. The W2W logo SVG paths were extracted directly from the live site's SVG sprite.

---

## 2. Current Product Structure

### Pay As You Go (one-time purchases)

**Discover Package — $499**
The featured entry point. Includes:
- Full comprehensive blood panel (70+ biomarkers)
- 45-minute one-on-one clinician video consultation
- Personalized roadmap, no commitment
- Credit toward a membership if you upgrade within 30 days
- Interactive digital review of results
- Access to prescriptions, peptides & supplements
- 24/7 access to personal AI wellness companion

**Focused Programs**
| Program | Price | Duration | Notes |
|---|---|---|---|
| Weight Loss Quick Start | $99 | 20 min | New patient only |
| Weight Loss Follow-up | $199 | 20 min | (Required every six months after the initial Quick Start visit) |
| Hormone Optimization Quick Start | $249 | 20 min | Includes 90-day spot check |
| Hormone Optimization Follow-up | $199 | 20 min | (Required every six months after the initial Quick Start visit) |
| Sexual Health | $199 | 20 min | (Annual visit required for continued treatment) |
| Skin Care Consult | $149 | 20 min | (Annual visit required for continued treatment) |
| Hairloss / Thickness | $149 | 20 min | (Annual visit required for continued treatment) |
| Cell Therapy Consult | FREE | 20 min | Lead-gen consult |
| Health Coach Check-In | $59 | 20 min | Non-clinical coaching session |

**Spot-Check Add-Ons** (eligibility-gated; appear in modal after adding an eligible program)
All $75 each:
- Thyroid Panel (WL only)
- Male Stress & Balance / Female Stress & Cycle Panel / Vitamin & Mineral / Endocrine (WL, HRT, Sexual Health, Discover)
- Hormone Spot Check for TRT (HRT, Discover)
- Lipoproteins Panel (Discover)

**Advanced Stand-Alone Tests** — $399 to $2,249
IgE Allergy Explorer, IgG Food Explorer, MethylDetox, IgE/IgG Combo, Microbiome (GI Map), Food Sensitivity (Std/Advanced/Premier), Total Tox, Cancer Test.

### Memberships (tiered)

| Tier | Monthly | Annual | PAYG Value | Annual Savings |
|---|---|---|---|---|
| **Core** | $69 | $690 | $998 | $308/yr |
| **Transform** (Most Popular) | $199 | $1,990 | $2,280 | $290/yr |
| **Premium** | $799 | $7,990 | $11,711 | $3,721/yr |

> **Updated May 26, 2026** per COO sheet `Membership Pricing Economics 05.20.26 3.xlsx`. Core and Premium pulled directly from the cost-built model (39% and 34% target gross margins). Transform was **interpolated** in the middle (4 labs / 4 consults / 2 spot checks / monthly coach / $499 advanced credit) — needs COO sign-off. Supplement/Rx/Peptide/Lab discount is now a flat **30% across all tiers** (was tiered 10/15/20%). "Max" tier was renamed to **Premium** to match COO terminology. **Open item:** the COO sheet also mentions a "Maintenance Tier" for existing patients only — not yet priced or scoped, so it's omitted from the prototype.

(Annual = monthly × 10, i.e. "2 months free")

#### Tier feature lists (current state)

**Core ($99/mo):**
- 2 × 45-minute clinician consults / year
- 2 comprehensive lab panels / year
- 1 included spot-check panel
- Lab Interpretation + Well Plan w/ each visit
- Dedicated Health Coach — Quarterly Check-in
- 10% off supplements, scripts & lab services
- 24/7 access to personal AI wellness companion

**Transform ($199/mo):**
- 4 × 45-minute clinician consults / year
- 3 comprehensive lab panels / year
- 2 included spot-check panels
- Lab Interpretation + Well Plan w/ each visit
- Dedicated Health Coach — Monthly Check-ins
- 15% off supplements, scripts & lab services
- 24/7 access to personal AI wellness companion
- $399 credit toward an Advanced stand-alone test

**Max ($449/mo):**
- 6 × 45-minute clinician consults / year
- 4 comprehensive lab panels / year
- 2 included spot-check panels
- Lab Interpretation + Well Plan w/ each visit
- Dedicated Health Coach — Bi-weekly Check-ins
- 20% off supplements, scripts & lab services
- 24/7 access to personal AI wellness companion
- Free shipping on all orders
- $2,500 credit toward Advanced stand-alone tests
- Priority Clinician Access — 7 days scheduling

---

## 3. Key Design & UX Decisions

- **Two clear buckets:** Pay As You Go and Memberships as the top-level tabs in the hero. This was Dustin's directional call.
- **Discover Package as entry point:** Featured first in Pay As You Go as the recommended starting point — directly addresses the marketing PDF's "what's my path?" framing.
- **Survey-driven membership differentiators woven in:** Dedicated Health Coach and Lab Interpretation + Well Plan are now baseline benefits on every tier (with cadence scaling: quarterly → monthly → bi-weekly).
- **Eligibility-aware spot-check modal:** When a user adds a goal program with eligible add-ons, a modal pops up offering only the relevant spot-check panels. Programs without eligible add-ons (Skincare, Hairloss, Cell Therapy, Coach Check-in) don't trigger the modal.
- **Savings story:** Each membership card shows a "Save $X/yr" badge in the top-right corner with a "See Breakdown" hyperlink that opens a modal with full PAYG-vs-membership math. The math is billing-mode-aware (monthly vs annual produce different savings figures).
- **Discount structure:** "Plus Ongoing Member Discounts" callout (under "What Sets Membership Apart") shows tiered % off on Additional Labs / Prescriptions / Peptides / Supplements (10/15/20%), plus Max-only free shipping.
- **Brand match:** Pulled from live ways2well.com — cyan `#34b4f4`, navy `#1a1d29`, cream `#f7f3eb`, Roboto Black 900 uppercase with letter-spacing. W2W logo SVG paths extracted from the live site's SVG sprite (see `W2W_LOGO_PATH` and `W2W_WORDMARK_PATH` constants).

---

## 4. Technical Setup

### Stack
- **React 18** + **Vite 6** + **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) + **lucide-react** icons
- All prototype logic in a single file: `src/Ways2WellPrototype.jsx` (~1,500 lines, data + components)
- Build is ~63KB gzipped JS + ~5KB gzipped CSS — very lean

### Local development
```bash
cd C:\Users\DustinHumphreys\code\new_core
npm install     # if not already done
npm run dev     # serves at http://localhost:5173
npm run build   # produces dist/
```

### Deployment
- **GitHub:** https://github.com/Dustin-W2W/New_Core (main branch)
- **Netlify:** Connected to GitHub repo; auto-deploys on every push to main
- **`netlify.toml`** at repo root configures build: `npm run build` → `dist/`
- **Update loop:** Edit `src/Ways2WellPrototype.jsx` → `git add -A && git commit -m "..." && git push` → Netlify rebuilds in ~1 min

### Project layout
```
new_core/
├── README.md                       # Project overview
├── HANDOFF.md                      # This file
├── src/
│   ├── Ways2WellPrototype.jsx      # The entire prototype (edit this)
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind import + body resets
├── public/favicon.svg              # W2W brand favicon
├── index.html                      # HTML shell
├── vite.config.js                  # Vite + Tailwind plugin
├── netlify.toml                    # Netlify build config
└── package.json
```

---

## 5. Where Things Live in `Ways2WellPrototype.jsx`

(Approximate locations — line numbers shift as edits land.)

| What | Where |
|---|---|
| Brand color tokens (comment block) | Top of file, after imports |
| W2W logo SVG paths | `W2W_LOGO_PATH`, `W2W_WORDMARK_PATH` constants |
| `<W2WLogo>` component | After the constants |
| Discover Package data | `DISCOVER` constant |
| Pay As You Go programs | `GOAL_PROGRAMS` array |
| Spot-check add-ons + eligibility | `ADD_ONS` array (each has `eligibleFor: [...]`) |
| Advanced tests | `ADVANCED_TESTS` array |
| Membership tier data (incl. paygValue + breakdown) | `MEMBERSHIPS` array |
| Main app component | `Ways2WellPrototype` (default export) |
| Pay As You Go view | `ALaCarteView` |
| Membership view | `MembershipView` |
| Membership card with savings badge | `MembershipCard` |
| Cart side drawer | `SelectionDrawer` |
| Add-on modal (eligibility-gated) | `AddOnModal` |
| Savings breakdown modal | `BreakdownModal` |
| Differentiator tile (Coach / Lab Interp / Continuity / Savings) | `Differentiator` |
| Discount tier stat block | `DiscountStat` |

---

## 6. Known Open Items / Things to Decide

- **"7 days scheduling" copy on Max** is slightly ambiguous — could mean *available 7 days a week* OR *appointment within 7 days*. Worth nailing down before going to customers.
- **`SavingsTile` and `TrustStat` components** are defined but unused — leftover from an earlier section design. Could be removed in cleanup pass.
- **Internal IDs** like `wl-quickstart`, `hrt-quickstart` weren't renamed when the display names changed to "Quick Start" — they're internal only, but slightly confusing. Could rename if we're doing housekeeping.
- **Footer wordmark** still uses styled text ("© 2026 ways2well") rather than the SVG wordmark — intentional, but worth noting.
- **No real checkout** — the "Continue to Checkout" CTA in the drawer doesn't go anywhere. This is a prototype only.
- **Cart state is in-memory only** — refresh resets everything. Fine for prototype but worth flagging when demoing.

---

## 7. Useful Context Files (Original Project)

If a future Claude session needs to re-derive any decisions, these were the source materials:

- **PS01_Analysis_v1.xlsx** — Customer survey results (~549 responses). Insights sheet has key takeaways; Summary_Future_Offering shows tier preference; Summary_Free_Text has thematic clusters.
- **Mock_Price_List_for_Tiered_Offering.xlsx** — The à-la-carte pricing and bundle structure Dustin handed off.
- **YourW2W_JourneyStartsHere.pdf** — Marketing team's alternative concept (the one Dustin had concerns about).

These were uploaded to the original Claude project but aren't in the git repo (they're business-confidential and don't need to ship with the code).

---

## 8. Working With This Prototype

### Iterating with Claude Code (recommended)

From the repo folder, run `claude` to start a Claude Code session. Then you can say things like:

- "Change Core monthly to $89 and update the PAYG value math accordingly"
- "Add a new bullet to Transform: 'Quarterly progress review'"
- "Move the savings badge to the bottom-right instead of top-right"

Claude Code will edit `src/Ways2WellPrototype.jsx`, run a build to verify, and commit + push when you confirm. Netlify rebuilds automatically.

### Iterating in claude.ai / desktop app

Same as before — describe the change, get back an updated `Ways2WellPrototype.jsx`, manually replace the file in your local repo, then `git add` / `commit` / `push`.

### Best practices

- Keep changes small and incremental — easier to review and revert
- When changing prices, **always update the `paygValue` and `paygBreakdown` in the membership** if any of the constituent prices change (e.g. Coach Check-In going $49→$59 required updating all three tiers' breakdowns)
- The `hasMeaningfulSavings >= 100` threshold in `MembershipCard` determines whether the savings badge shows as a solid pill (savings) or outline pill ("Annual saves more") — be aware when adjusting prices that this threshold may flip
- Roboto fonts are loaded from Google Fonts via `@import` in the `<style>` block — don't remove that import

---

## 9. Contacts

- **Dustin Humphreys** — Owner / Product
- (Add others as needed)
