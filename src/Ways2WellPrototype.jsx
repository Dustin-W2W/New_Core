import React, { useState, useMemo, useEffect } from "react";
import {
  ShoppingCart,
  Check,
  X,
  ArrowRight,
  Plus,
  Activity,
  Heart,
  Scale,
  Dna,
  FlaskConical,
  Stethoscope,
  Microscope,
  TestTube,
  ShieldCheck,
  Users,
  Compass,
  Crown,
  Zap,
  Leaf,
  Sparkles,
  Truck,
  Pill,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND TOKENS — pulled from www.ways2well.com (live site, May 2026)
// ─────────────────────────────────────────────────────────────────────────────
// bg:        #1a1d29  (page background, deep navy/midnight)
// card:      #0d0f15  (cards within dark sections)
// accent:    #34b4f4  (cyan — CTAs, price, accents)
// text:      #f7f3eb  (warm cream body text)
// heading:   #ffffff  (display headings)
// muted:     rgba(255,255,255,0.6)
// type:      Roboto, headings weight 900-1000, uppercase, +letter-spacing
// buttons:   pill-shaped (rounded-full), cyan fill, uppercase, weight bold

// ─────────────────────────────────────────────────────────────────────────────
// DATA — from Mock_Price_List_for_Tiered_Offering.xlsx
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// LOGO — extracted from www.ways2well.com (icon-logo-white + icon-ways2well-white)
// ─────────────────────────────────────────────────────────────────────────────

const W2W_LOGO_PATH = "m4.11.687 7.946 15.833 4.551-6.652L10.5.687h16l-6.107 9.18 4.551 6.652L32.89.688h3.61l-9.75 19h-3.611L18.5 12.712l-4.639 6.974H10.25L.5.686h3.61Zm16.726 3h-4.672L18.5 7.102l2.336-3.415Zm-5.831 23.435c-.07.357-.105.759-.105 1.204h7.2v-1.8h-4.556a2.53 2.53 0 0 1 .374-.474c.15-.14.319-.273.508-.402a4.96 4.96 0 0 1 .657-.401c.249-.14.528-.288.837-.447.219-.12.443-.258.672-.416.239-.159.458-.337.657-.535.2-.209.363-.447.493-.714.13-.268.194-.576.194-.922 0-.506-.13-.948-.388-1.323-.25-.377-.613-.67-1.09-.878-.479-.218-1.056-.328-1.733-.328-.449 0-.872.05-1.27.15-.37.083-.73.202-1.076.357a4.724 4.724 0 0 0-1.389.906l1.27 1.457c.121-.15.256-.29.403-.416.15-.14.309-.262.478-.372.18-.11.369-.192.568-.253.209-.06.433-.09.672-.09.299 0 .548.05.747.15.199.1.353.233.463.402a.92.92 0 0 1 .164.535.83.83 0 0 1-.164.505c-.11.14-.274.279-.493.416-.21.14-.468.294-.777.462-.309.159-.667.346-1.075.566a6.25 6.25 0 0 0-1.165.803 3.594 3.594 0 0 0-.718.861c-.169.308-.288.64-.358.997Z";

const W2W_WORDMARK_PATH = "M16.296 5.181h2.31l-4.84 11.506h-2.068L9.63 11.495l-2.068 5.192H5.494L.632 5.181h2.31l3.696 9.152 1.628-4.246-1.98-4.884h2.046L9.63 8.789l1.276-3.586h2.046l-1.958 4.884 1.628 4.246 3.674-9.152Zm2.802 8.14c0-.733.206-1.371.616-1.914.426-.557 1.005-.983 1.738-1.276.734-.308 1.584-.462 2.552-.462.514 0 1.034.037 1.562.11.543.073 1.02.19 1.43.352v-.726c0-.807-.242-1.437-.726-1.892-.484-.455-1.18-.682-2.09-.682-.645 0-1.254.117-1.826.352-.572.22-1.18.535-1.826.946L19.714 6.5a9.27 9.27 0 0 1 2.288-1.144 7.947 7.947 0 0 1 2.442-.374c1.54 0 2.75.41 3.63 1.232.895.807 1.342 1.958 1.342 3.454v4.29c0 .279.044.477.132.594.103.117.272.183.506.198v1.936a5.33 5.33 0 0 1-1.034.11c-.513 0-.902-.125-1.166-.374a1.44 1.44 0 0 1-.462-.88l-.066-.66a4.96 4.96 0 0 1-1.914 1.496 5.66 5.66 0 0 1-2.354.528c-.762 0-1.444-.154-2.046-.462a3.652 3.652 0 0 1-1.408-1.298 3.388 3.388 0 0 1-.506-1.826Zm7.326.704c.176-.19.316-.381.418-.572.103-.19.154-.36.154-.506v-1.32a6.263 6.263 0 0 0-1.298-.352 7.047 7.047 0 0 0-1.342-.132c-.88 0-1.598.176-2.156.528-.542.352-.814.836-.814 1.452 0 .337.088.66.264.968.191.308.455.557.792.748.352.19.785.286 1.298.286.528 0 1.034-.103 1.518-.308.484-.205.873-.47 1.166-.792Zm5.916 5.368.638.088c.22.044.396.066.528.066a.91.91 0 0 0 .638-.242c.19-.147.382-.425.572-.836.19-.41.425-1.005.704-1.782L30.69 5.181h2.53l3.52 9.042 3.124-9.042h2.332l-5.214 14.168a3.815 3.815 0 0 1-.704 1.166c-.311.37-.703.662-1.144.858-.455.205-.99.308-1.606.308-.176 0-.36-.015-.55-.044a7.14 7.14 0 0 1-.638-.132v-2.112Zm15.427-2.486a8.14 8.14 0 0 1-2.75-.462 5.981 5.981 0 0 1-2.222-1.43l.902-1.628c.66.587 1.32 1.012 1.98 1.276.636.256 1.316.39 2.002.396.674 0 1.224-.125 1.65-.374.425-.264.638-.645.638-1.144 0-.367-.11-.638-.33-.814-.22-.176-.543-.33-.968-.462a37.281 37.281 0 0 0-1.496-.44c-.822-.25-1.511-.506-2.068-.77-.558-.279-.976-.616-1.254-1.012-.279-.396-.418-.902-.418-1.518 0-.748.19-1.386.572-1.914.381-.528.909-.931 1.584-1.21.689-.279 1.481-.418 2.376-.418a6.53 6.53 0 0 1 2.31.396 4.93 4.93 0 0 1 1.892 1.188l-1.034 1.606c-.514-.47-1.042-.814-1.584-1.034-.528-.22-1.1-.33-1.716-.33-.352 0-.69.044-1.012.132-.323.073-.594.22-.814.44-.206.205-.308.499-.308.88 0 .308.088.557.264.748.176.19.44.352.792.484.352.132.784.279 1.298.44.894.264 1.657.528 2.288.792.63.25 1.114.58 1.452.99.352.396.528.946.528 1.65 0 1.115-.418 1.987-1.254 2.618-.822.616-1.922.924-3.3.924Zm6.142-.22c0-.616.052-1.18.154-1.694.1-.522.279-1.026.528-1.496a5.26 5.26 0 0 1 1.078-1.32c.47-.425 1.064-.829 1.782-1.21.514-.293.998-.55 1.452-.77.455-.235.858-.462 1.21-.682.352-.235.624-.484.814-.748a1.43 1.43 0 0 0 .308-.902c0-.323-.088-.623-.264-.902-.176-.279-.44-.5-.792-.66-.352-.176-.777-.264-1.276-.264-.396 0-.762.052-1.1.154-.317.1-.62.24-.902.418-.26.158-.503.343-.726.55-.22.19-.41.381-.572.572l-1.518-1.738c.147-.176.374-.374.682-.594a8.124 8.124 0 0 1 1.144-.682 7.307 7.307 0 0 1 1.54-.572 6.869 6.869 0 0 1 1.87-.242c.954 0 1.768.161 2.442.484.675.308 1.188.74 1.54 1.298.367.543.55 1.159.55 1.848 0 .543-.11 1.02-.33 1.43a3.974 3.974 0 0 1-.814 1.1 7.187 7.187 0 0 1-1.078.814c-.366.22-.711.418-1.034.594-.572.279-1.07.535-1.496.77-.37.207-.723.442-1.056.704-.293.22-.535.455-.726.704a3.21 3.21 0 0 0-.484.858h7.26v2.178H53.909ZM80.9 5.181h2.31l-4.84 11.506h-2.067l-2.069-5.192-2.068 5.192h-2.068L65.236 5.181h2.31l3.695 9.152 1.629-4.246-1.98-4.884h2.046l1.297 3.586 1.276-3.586h2.046l-1.958 4.884 1.629 4.246L80.9 5.181Zm8.745 11.726c-.894 0-1.708-.154-2.442-.462-.7-.31-1.335-.75-1.87-1.298a6.193 6.193 0 0 1-1.231-1.892 6.27 6.27 0 0 1-.418-2.288c0-1.085.249-2.075.747-2.97a5.73 5.73 0 0 1 2.09-2.178c.895-.557 1.944-.836 3.147-.836 1.202 0 2.236.279 3.102.836a5.66 5.66 0 0 1 2.045 2.156 5.965 5.965 0 0 1 .661 3.762h-9.218c.043.675.227 1.269.55 1.782a3.8 3.8 0 0 0 1.275 1.188c.506.277 1.073.42 1.65.418.646 0 1.255-.161 1.826-.484.587-.323.983-.748 1.188-1.276l2.069.594a4.484 4.484 0 0 1-1.144 1.518 5.8 5.8 0 0 1-1.783 1.056c-.72.255-1.48.381-2.244.374Zm-3.454-6.776h6.953c-.044-.66-.235-1.24-.573-1.738a3.356 3.356 0 0 0-1.253-1.188 3.236 3.236 0 0 0-1.672-.44 3.31 3.31 0 0 0-1.672.44c-.5.279-.91.675-1.233 1.188-.322.499-.505 1.078-.55 1.738ZM97.537.627h2.42v12.738c0 .587.088.96.264 1.122a.94.94 0 0 0 .66.242c.293 0 .564-.03.814-.088a3.42 3.42 0 0 0 .682-.22l.352 1.914a7.135 7.135 0 0 1-1.254.374 6.333 6.333 0 0 1-1.298.154c-.822 0-1.467-.227-1.937-.682-.469-.47-.703-1.115-.703-1.936V.627Zm6.617 0h2.42v12.738c0 .587.088.96.264 1.122a.94.94 0 0 0 .66.242c.293 0 .564-.03.814-.088a3.42 3.42 0 0 0 .682-.22l.352 1.914a7.135 7.135 0 0 1-1.254.374 6.326 6.326 0 0 1-1.298.154c-.822 0-1.467-.227-1.936-.682-.47-.47-.704-1.115-.704-1.936V.627Z";

function W2WLogo({ height = 22, gap = 6, showWordmark = true, markColor = "#ffffff", wordmarkColor = "#ffffff" }) {
  // W mark viewBox is 37x29; wordmark viewBox is 110x22.
  // Match heights, then width follows aspect ratio.
  const markWidth = (37 / 29) * height;
  const wordmarkWidth = (110 / 22) * height;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: `${gap}px` }}>
      <svg viewBox="0 0 37 29" width={markWidth} height={height} fill="none" aria-hidden="true">
        <path d={W2W_LOGO_PATH} fill={markColor} fillRule="evenodd" clipRule="evenodd" />
      </svg>
      {showWordmark && (
        <svg viewBox="0 0 110 22" width={wordmarkWidth} height={height} fill="none" aria-hidden="true">
          <path d={W2W_WORDMARK_PATH} fill={wordmarkColor} />
        </svg>
      )}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA — from Mock_Price_List_for_Tiered_Offering.xlsx
// ─────────────────────────────────────────────────────────────────────────────

const DISCOVER = {
  id: "discover",
  name: "Discover Package",
  subtitle: "Comprehensive Panel + Clinical Consult",
  price: 499,
  duration: "45 min",
  labs: "Comprehensive Panel",
  description:
    "Full-spectrum bloodwork and a 45-minute consult with a Ways2Well clinician. We build the roadmap — you decide what comes next.",
  bullets: [
    "Full lab panel + clinician interpretation",
    "Personalized roadmap, no commitment",
    "Credit toward a membership if you upgrade within 30 days",
  ],
};

const GOAL_PROGRAMS = [
  {
    id: "wl-quickstart",
    name: "Weight Loss Quick Start",
    badge: "New patient only",
    price: 99,
    duration: "20 min",
    labs: "None",
    icon: Scale,
    description: "GLP-1s and related weight-loss support supplements and prescriptions.",
    addOnEligible: true,
  },
  {
    id: "wl-followup",
    name: "Weight Loss Follow-up",
    price: 199,
    duration: "20 min",
    labs: "Weight-loss Panel",
    icon: Scale,
    description: "Continued GLP-1 and weight-loss support with a refreshed weight-loss panel. (Required every six months after the initial Quick Start visit)",
    addOnEligible: true,
  },
  {
    id: "hrt-quickstart",
    name: "Hormone Optimization Quick Start",
    price: 249,
    duration: "20 min",
    labs: "Gender-specific Hormone Panel + 90-day spot check",
    icon: Dna,
    description:
      "Strict hormone replacement support: testosterone, estradiol, progesterone, DHEA and more.",
    addOnEligible: true,
  },
  {
    id: "hrt-followup",
    name: "Hormone Optimization Follow-up",
    price: 199,
    duration: "20 min",
    labs: "Gender-specific Hormone Panel",
    icon: Dna,
    description: "Ongoing hormone optimization with refreshed labs. (Required every six months after the initial Quick Start visit)",
    addOnEligible: true,
  },
  {
    id: "sexual-health",
    name: "Sexual Health",
    price: 199,
    duration: "20 min",
    labs: "None",
    icon: Heart,
    description:
      "Pharmaceutical and peptide options to improve libido, arousal, and resolve ED — for men and women. (Annual visit required for continued treatment)",
    addOnEligible: true,
  },
  {
    id: "skincare",
    name: "Skin Care Consult",
    price: 149,
    duration: "20 min",
    labs: "None",
    icon: Sparkles,
    description: "Peptides like GHK-Cu and clinical skin protocols. (Annual visit required for continued treatment)",
    addOnEligible: false,
  },
  {
    id: "hairloss",
    name: "Hairloss / Thickness",
    price: 149,
    duration: "20 min",
    labs: "None",
    icon: Leaf,
    description: "Evidence-based treatment for hair loss and thinning. (Annual visit required for continued treatment)",
    addOnEligible: false,
  },
  {
    id: "cell-therapy",
    name: "Cell Therapy Consult",
    price: 0,
    free: true,
    duration: "20 min",
    labs: "None",
    icon: Zap,
    description:
      "Learn how regenerative cell therapies can improve recovery, performance, and longevity.",
    addOnEligible: false,
  },
  {
    id: "coach-checkin",
    name: "Health Coach Check-In",
    price: 59,
    duration: "20 min",
    labs: "None",
    icon: Users,
    description:
      "A focused 1:1 with a dedicated health coach to review goals, troubleshoot, and keep momentum.",
    addOnEligible: false,
  },
];

const ADD_ONS = [
  { id: "thyroid", name: "Thyroid Panel", price: 75, labs: "TSH, T4 (Free), T3 (Free)", eligibleFor: ["wl-quickstart", "wl-followup"] },
  { id: "male-stress", name: "Male Stress & Balance", price: 75, labs: "DHEA, Estradiol, Cortisol", eligibleFor: ["wl-quickstart", "wl-followup", "hrt-quickstart", "hrt-followup", "sexual-health", "discover"] },
  { id: "female-stress", name: "Female Stress & Cycle Panel", price: 75, labs: "DHEA, FSH, Cortisol", eligibleFor: ["wl-quickstart", "wl-followup", "hrt-quickstart", "hrt-followup", "sexual-health", "discover"] },
  { id: "vit-min", name: "Vitamin & Mineral Panel", price: 75, labs: "Vitamin D, Ferritin, Iron, TIBC, B12, Folate, Magnesium", eligibleFor: ["wl-quickstart", "wl-followup", "hrt-quickstart", "hrt-followup", "sexual-health", "discover"] },
  { id: "endocrine", name: "Endocrine Panel", price: 75, labs: "IGF-1, PTH, Prolactin", eligibleFor: ["wl-quickstart", "wl-followup", "hrt-quickstart", "hrt-followup", "sexual-health", "discover"] },
  { id: "hormone-spot", name: "Hormone Spot Check for TRT", price: 75, labs: "Total & Free Testosterone, SHBG; F: Progesterone & Estradiol", eligibleFor: ["hrt-quickstart", "hrt-followup", "discover"] },
  { id: "lipo", name: "Lipoproteins Panel", price: 75, labs: "Apolipoprotein B / Lipoprotein A", eligibleFor: ["discover"] },
];

const ADVANCED_TESTS = [
  { id: "ige-allergy", name: "IgE Allergy Explorer", price: 399, duration: "20 min" },
  { id: "igg-food", name: "IgG Food Explorer", price: 399, duration: "20 min" },
  { id: "methyldetox", name: "MethylDetox", price: 499, duration: "20 min" },
  { id: "ige-igg-combo", name: "IgE / IgG Combo", price: 499, duration: "20 min" },
  { id: "microbiome", name: "Microbiome (GI Map)", price: 599, duration: "45 min" },
  { id: "food-sens-std", name: "Standard Food Sensitivity", price: 599, duration: "20 min" },
  { id: "food-sens-adv", name: "Advanced Food Sensitivity", price: 699, duration: "45 min" },
  { id: "total-tox", name: "Total Tox", price: 699, duration: "45 min" },
  { id: "food-sens-prem", name: "Premier Food Sensitivity", price: 899, duration: "45 min" },
  { id: "cancer", name: "Cancer Test", price: 2249, duration: "45 min" },
];

// Pricing updated 2026-05-26 per COO sheet "Membership Pricing Economics 05.20.26 3.xlsx".
// Core and Premium pulled directly from the spreadsheet; Transform interpolated (pending COO sign-off).
// Internal ids ("maintain", "transform", "max") preserved for stable references in BreakdownModal.
const MEMBERSHIPS = [
  {
    id: "maintain",
    name: "Core",
    tagline: "For those in good health, ready to take it to the next level.",
    monthly: 69,
    annual: 690,
    icon: ShieldCheck,
    paygValue: 998,
    paygBreakdown: [
      { label: "2 Comprehensive Panels + Consults", value: 998 },
    ],
    features: [
      { text: "2 × 45-MINUTE CLINICIAN CONSULTS / YEAR" },
      { text: "2 COMPREHENSIVE LAB PANELS / YEAR" },
      { text: "LAB INTERPRETATION + WELL PLAN W/ EACH VISIT", new: true },
      { text: "30% OFF SUPPLEMENTS, SCRIPTS & LAB SERVICES" },
      { text: "24/7 ACCESS TO YOUR PERSONAL AI WELLNESS COMPANION" },
    ],
  },
  {
    id: "transform",
    name: "Transform",
    tagline: "For those ready to make a change and transform their health.",
    monthly: 199,
    annual: 1990,
    icon: Activity,
    popular: true,
    paygValue: 2280,
    paygBreakdown: [
      { label: "2 Comprehensive Panels + Consults", value: 998 },
      { label: "1 Spot-check Panel", value: 75 },
      { label: "12 Monthly Coach Check-Ins", value: 708 },
      { label: "$499 Advanced Test Credit", value: 499 },
    ],
    features: [
      { text: "4 × 45-MINUTE CLINICIAN CONSULTS / YEAR" },
      { text: "2 COMPREHENSIVE LAB PANELS / YEAR" },
      { text: "1 INCLUDED SPOT-CHECK PANEL" },
      { text: "LAB INTERPRETATION + WELL PLAN W/ EACH VISIT", new: true },
      { text: "DEDICATED HEALTH COACH — MONTHLY CHECK-INS", new: true },
      { text: "30% OFF SUPPLEMENTS, SCRIPTS & LAB SERVICES" },
      { text: "24/7 ACCESS TO YOUR PERSONAL AI WELLNESS COMPANION" },
      { text: "$499 CREDIT TOWARD AN ADVANCED STAND-ALONE TEST" },
    ],
  },
  {
    id: "max",
    name: "Premium",
    tagline: "Our most intensive program — uncompromising.",
    monthly: 799,
    annual: 7990,
    icon: Crown,
    paygValue: 11711,
    paygBreakdown: [
      { label: "4 Comprehensive Panels + Consults", value: 1996 },
      { label: "1 Spot-check Panel", value: 75 },
      { label: "26 Bi-Weekly Coach Check-Ins", value: 1534 },
      { label: "All Health Tests + Visits Bundle", value: 4106 },
      { label: "$4,000 Advanced Test Credit", value: 4000 },
    ],
    features: [
      { text: "4 × 45-MINUTE CLINICIAN CONSULTS / YEAR" },
      { text: "4 COMPREHENSIVE LAB PANELS / YEAR" },
      { text: "1 INCLUDED SPOT-CHECK PANEL" },
      { text: "ALL HEALTH TESTS + VISITS BUNDLE INCLUDED", new: true },
      { text: "LAB INTERPRETATION + WELL PLAN W/ EACH VISIT", new: true },
      { text: "DEDICATED HEALTH COACH — BI-WEEKLY CHECK-INS", new: true },
      { text: "30% OFF SUPPLEMENTS, SCRIPTS & LAB SERVICES" },
      { text: "24/7 ACCESS TO YOUR PERSONAL AI WELLNESS COMPANION" },
      { text: "FREE SHIPPING ON ALL ORDERS", new: true },
      { text: "$4,000 CREDIT TOWARD ADVANCED STAND-ALONE TESTS" },
      { text: "PRIORITY CLINICIAN ACCESS — 7 DAYS SCHEDULING", new: true },
    ],
  },
];

const formatPrice = (n) =>
  n === 0 ? "FREE" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

export default function Ways2WellPrototype() {
  const [activeTab, setActiveTab] = useState("membership");
  const [billing, setBilling] = useState("monthly");
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [addOnModalProgramId, setAddOnModalProgramId] = useState(null);
  const [breakdownMembershipId, setBreakdownMembershipId] = useState(null);

  useEffect(() => {
    const lock = drawerOpen || !!addOnModalProgramId || !!breakdownMembershipId;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen, addOnModalProgramId, breakdownMembershipId]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      if (item.type === "membership") {
        return sum + (item.billing === "annual" ? item.annual : item.monthly);
      }
      return sum + (item.price || 0);
    }, 0);
  }, [cart]);

  const inCart = (type, id) => cart.some((c) => c.type === type && c.id === id);

  const addItem = (item) => {
    if (item.type === "membership") {
      setCart((c) => [...c.filter((x) => x.type !== "membership"), item]);
    } else {
      setCart((c) => [...c, item]);
    }
  };

  const removeItem = (type, id) => {
    setCart((c) => c.filter((x) => !(x.type === type && x.id === id)));
  };

  const toggleItem = (item) => {
    if (inCart(item.type, item.id)) {
      removeItem(item.type, item.id);
    } else {
      addItem(item);
      // If this is a program or Discover with eligible add-ons, open the add-on modal
      if (item.type === "program" || item.type === "discover") {
        const hasEligible = ADD_ONS.some((a) => a.eligibleFor.includes(item.id));
        if (hasEligible) {
          setAddOnModalProgramId(item.id);
        }
      }
    }
  };

  return (
    <div className="min-h-screen w-full" style={{
      backgroundColor: "#1a1d29",
      color: "#f7f3eb",
      fontFamily: "'Roboto', system-ui, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
        .display-heading {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.0;
        }
        .display-cyan { color: #34b4f4; }
        .display-white { color: #ffffff; }
        .cream { color: #f7f3eb; }
        .muted { color: rgba(247, 243, 235, 0.6); }
        .pill-cta {
          background: #34b4f4;
          color: #1a1d29;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 9999px;
          padding: 14px 28px;
          font-size: 13px;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .pill-cta:hover { background: #5cc4ff; transform: translateY(-1px); }
        .pill-secondary {
          background: transparent;
          color: #f7f3eb;
          border: 1.5px solid rgba(247, 243, 235, 0.25);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 9999px;
          padding: 12px 24px;
          font-size: 12px;
          transition: all 0.2s;
        }
        .pill-secondary:hover { border-color: #34b4f4; color: #34b4f4; }
        .dark-card {
          background: #0d0f15;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.4s ease-out both; }
      `}</style>

      {/* NAV — matches ways2well.com nav: pill JOIN MEMBERSHIP, uppercase links */}
      <nav className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(26, 29, 41, 0.85)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo — authentic W2W lockup from ways2well.com */}
          <div className="shrink-0">
            <W2WLogo height={22} gap={6} />
          </div>

          <div className="hidden lg:flex items-center gap-6 text-[12px] font-bold uppercase tracking-wider muted">
            <a className="hover:text-white transition cursor-pointer">Bloodwork</a>
            <a className="hover:text-white transition cursor-pointer">Cell Therapy</a>
            <a className="hover:text-white transition cursor-pointer">Peptides</a>
            <a className="hover:text-white transition cursor-pointer">Supplements</a>
            <a className="hover:text-white transition cursor-pointer">Clinics</a>
            <a className="hover:text-white transition cursor-pointer">About</a>
            <a className="hover:text-white transition cursor-pointer">Live Chat</a>
            <a className="hover:text-white transition cursor-pointer">Log In</a>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="relative w-10 h-10 rounded-full grid place-items-center transition"
            style={{ backgroundColor: "#34b4f4" }}
            aria-label="Your selections"
          >
            <ShoppingCart className="w-4 h-4" style={{ color: "#1a1d29" }} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 grid place-items-center min-w-5 h-5 px-1.5 rounded-full text-[10px] font-bold" style={{ background: "#1a1d29", color: "#34b4f4", border: "1.5px solid #34b4f4" }}>
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO — uppercase, weight 900, letter-spaced, mirrors site's hero treatment */}
      <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-14">
        <div className="text-center max-w-4xl mx-auto">
          <div className="muted text-[11px] font-bold uppercase tracking-[0.3em] mb-5">
            Your Journey · Starts Here
          </div>
          <h1 className="display-heading display-white" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
            Personalized Wellness.<br />
            <span style={{ color: "#34b4f4" }}>Your Way.</span>
          </h1>
          <p className="mt-6 cream text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
            Pick a single service, dive into a comprehensive panel, or commit to a membership that evolves with you. Two clear ways to start. One destination — your best self.
          </p>
        </div>

        {/* Two-bucket switcher */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center p-1.5 rounded-full" style={{ backgroundColor: "#0d0f15", border: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              onClick={() => setActiveTab("membership")}
              className="px-6 md:px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition"
              style={
                activeTab === "membership"
                  ? { background: "#34b4f4", color: "#1a1d29" }
                  : { background: "transparent", color: "rgba(247,243,235,0.6)" }
              }
            >
              Membership Bundles
            </button>
            <button
              onClick={() => setActiveTab("alacarte")}
              className="px-6 md:px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition"
              style={
                activeTab === "alacarte"
                  ? { background: "#34b4f4", color: "#1a1d29" }
                  : { background: "transparent", color: "rgba(247,243,235,0.6)" }
              }
            >
              Pay As You Go
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        {activeTab === "alacarte" ? (
          <ALaCarteView inCart={inCart} toggleItem={toggleItem} />
        ) : (
          <MembershipView billing={billing} setBilling={setBilling} inCart={inCart} toggleItem={toggleItem} onShowBreakdown={setBreakdownMembershipId} />
        )}
      </main>

      {/* (Trust stats section removed) */}

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 pb-10 text-xs uppercase tracking-widest" style={{ color: "rgba(247,243,235,0.4)" }}>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div>© 2026 ways<span style={{ color: "#34b4f4" }}>2</span>well — prototype</div>
          <div className="flex gap-6">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Contact</a>
          </div>
        </div>
      </footer>

      {/* DRAWER */}
      <SelectionDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        removeItem={removeItem}
      />

      {/* ADD-ON MODAL */}
      <AddOnModal
        programId={addOnModalProgramId}
        onClose={() => setAddOnModalProgramId(null)}
        inCart={inCart}
        toggleItem={toggleItem}
      />

      {/* BREAKDOWN MODAL */}
      <BreakdownModal
        membershipId={breakdownMembershipId}
        billing={billing}
        onClose={() => setBreakdownMembershipId(null)}
      />

      {/* FLOATING TOTAL BAR */}
      {cart.length > 0 && !drawerOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 fade-up">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-3 pl-5 pr-2 py-2 rounded-full shadow-2xl"
            style={{ backgroundColor: "#34b4f4", color: "#1a1d29", boxShadow: "0 20px 50px -10px rgba(52, 180, 244, 0.5)" }}
          >
            <span className="text-xs font-black uppercase tracking-widest">
              {cart.length} {cart.length === 1 ? "item" : "items"} · {formatPrice(cartTotal)}
              {cart.some((c) => c.type === "membership") && (
                <span style={{ opacity: 0.7 }}> /{cart.find((c) => c.type === "membership").billing === "annual" ? "yr" : "mo"}</span>
              )}
            </span>
            <span className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest flex items-center gap-1.5" style={{ backgroundColor: "#1a1d29", color: "#34b4f4" }}>
              Review <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// À LA CARTE VIEW
// ─────────────────────────────────────────────────────────────────────────────

function ALaCarteView({ inCart, toggleItem }) {
  return (
    <div className="space-y-20">
      {/* DISCOVER — featured, mirrors the ways2well membership card pattern */}
      <section>
        <SectionHeader eyebrow="Most Popular Starting Point" title="The Discover Package" />
        <div className="mt-8 dark-card p-5 sm:p-8 relative overflow-hidden">
          {/* subtle cyan glow corner */}
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(52, 180, 244, 0.18), transparent 70%)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 relative">
            {/* LEFT: pricing block */}
            <div className="sm:col-span-5 min-w-0">
              <div className="mb-4">
                <W2WLogo height={18} gap={5} />
              </div>
              <h3 className="display-heading display-white leading-tight" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                Discover<br />Package
              </h3>
              <div className="mt-5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="display-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#34b4f4" }}>$499</span>
                  <span className="display-white font-black uppercase tracking-widest" style={{ fontSize: "clamp(9px, 0.9vw, 11px)" }}>One-time</span>
                </div>
                <div className="mt-2 muted" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                  Includes lab panel + <span style={{ color: "#34b4f4" }}>45-minute</span> clinician consult
                </div>
              </div>
              <button
                onClick={() =>
                  toggleItem({
                    type: "discover",
                    id: "discover",
                    name: DISCOVER.name,
                    price: DISCOVER.price,
                    meta: DISCOVER.subtitle,
                  })
                }
                className="mt-6 pill-cta"
                style={inCart("discover", "discover") ? { backgroundColor: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1.5px solid #34b4f4" } : {}}
              >
                {inCart("discover", "discover") ? <><Check className="w-4 h-4" /> Added</> : <>Add Discover <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>

            {/* RIGHT: feature checklist */}
            <div className="sm:col-span-7 min-w-0">
              <ul className="space-y-3">
                {[
                  "Full comprehensive blood panel — 70+ biomarkers",
                  "45-minute one-on-one clinician video consultation",
                  "Personalized roadmap, no commitment",
                  "Credit toward a membership if you upgrade within 30 days",
                  "Interactive digital review of your results",
                  "Access to prescriptions, peptides & supplements",
                  "24/7 access to your personal AI wellness companion",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#34b4f4" }} strokeWidth={3} />
                    <span className="font-bold uppercase tracking-wider display-white leading-snug" style={{ letterSpacing: "0.04em", fontSize: "clamp(10px, 1vw, 13px)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GOAL PROGRAMS */}
      <section>
        <SectionHeader eyebrow="Health Goal Programs" title="Focused Programs" description="Single-goal services with optional spot-check labs." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GOAL_PROGRAMS.map((p) => (
            <ProgramCard
              key={p.id}
              program={p}
              selected={inCart("program", p.id)}
              onToggle={() =>
                toggleItem({
                  type: "program",
                  id: p.id,
                  name: p.name,
                  price: p.price,
                  meta: p.labs && p.labs !== "None" ? p.labs : p.duration,
                })
              }
            />
          ))}
        </div>
      </section>

      {/* ADVANCED TESTS */}
      <section>
        <SectionHeader eyebrow="Advanced Diagnostics" title="Stand-Alone Tests" description="Specialty panels for deeper investigation — purchasable on their own." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADVANCED_TESTS.map((t) => (
            <AdvancedTestCard
              key={t.id}
              test={t}
              selected={inCart("advanced", t.id)}
              onToggle={() =>
                toggleItem({ type: "advanced", id: t.id, name: t.name, price: t.price, meta: t.duration })
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MEMBERSHIP VIEW
// ─────────────────────────────────────────────────────────────────────────────

function MembershipView({ billing, setBilling, inCart, toggleItem, onShowBreakdown }) {
  return (
    <div className="space-y-20">
      {/* ─── MEMBERSHIP BUNDLES (now at top) ─── */}
      <section>
        <SectionHeader centered title="Our Memberships" description="Work one-on-one with a clinician to establish your health goals — from improving your health span to addressing focused needs like weight loss, hormone optimization, sexual health, and more. Membership adapts to your specific goals and provides the ongoing care and support — dedicated health coaching, regular labs, and continuous clinical guidance — to make sure you succeed." />

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center p-1.5 rounded-full" style={{ backgroundColor: "#0d0f15", border: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              onClick={() => setBilling("monthly")}
              className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition"
              style={billing === "monthly" ? { background: "#34b4f4", color: "#1a1d29" } : { background: "transparent", color: "rgba(247,243,235,0.6)" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition flex items-center gap-2"
              style={billing === "annual" ? { background: "#34b4f4", color: "#1a1d29" } : { background: "transparent", color: "rgba(247,243,235,0.6)" }}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest" style={{ background: billing === "annual" ? "rgba(26,29,41,0.2)" : "rgba(52,180,244,0.18)", color: billing === "annual" ? "#1a1d29" : "#34b4f4" }}>
                Save 2 Months
              </span>
            </button>
          </div>
        </div>

        {/* Membership cards: always 3 columns side-by-side, stack only on narrow phones */}
        <div className="mt-10 grid grid-cols-3 max-[520px]:grid-cols-1 gap-3 sm:gap-4 items-stretch">
          {MEMBERSHIPS.map((m) => (
            <MembershipCard
              key={m.id}
              membership={m}
              billing={billing}
              selected={inCart("membership", m.id)}
              onShowBreakdown={() => onShowBreakdown(m.id)}
              onToggle={() =>
                toggleItem({
                  type: "membership",
                  id: m.id,
                  name: `${m.name} Membership`,
                  monthly: m.monthly,
                  annual: m.annual,
                  billing: billing,
                  meta: m.tagline,
                })
              }
            />
          ))}
        </div>

      </section>

      {/* ─── NOT SURE WHERE TO START? — Discover Package entry point ─── */}
      <section className="-mt-12">
        <SectionHeader centered title="Not Sure Where to Start?" />
        <div className="mt-8 dark-card p-5 sm:p-8 relative overflow-hidden">
          {/* subtle cyan glow corner */}
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(52, 180, 244, 0.18), transparent 70%)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 relative">
            {/* LEFT: pricing block */}
            <div className="sm:col-span-5 min-w-0">
              <div className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]" style={{ background: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1px solid rgba(52, 180, 244, 0.35)" }}>
                Most Popular Starting Point
              </div>
              <div className="mb-4">
                <W2WLogo height={18} gap={5} />
              </div>
              <h3 className="display-heading display-white leading-tight" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
                Discover<br />Package
              </h3>
              <div className="mt-5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="display-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#34b4f4" }}>$499</span>
                  <span className="display-white font-black uppercase tracking-widest" style={{ fontSize: "clamp(9px, 0.9vw, 11px)" }}>One-time</span>
                </div>
                <div className="mt-2 muted" style={{ fontSize: "clamp(11px, 1vw, 13px)" }}>
                  Includes lab panel + <span style={{ color: "#34b4f4" }}>45-minute</span> clinician consult
                </div>
              </div>
              <button
                onClick={() =>
                  toggleItem({
                    type: "discover",
                    id: "discover",
                    name: DISCOVER.name,
                    price: DISCOVER.price,
                    meta: DISCOVER.subtitle,
                  })
                }
                className="mt-6 pill-cta"
                style={inCart("discover", "discover") ? { backgroundColor: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1.5px solid #34b4f4" } : {}}
              >
                {inCart("discover", "discover") ? <><Check className="w-4 h-4" /> Added</> : <>Add Discover <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>

            {/* RIGHT: feature checklist */}
            <div className="sm:col-span-7 min-w-0">
              <ul className="space-y-3">
                {[
                  "Full comprehensive blood panel — 70+ biomarkers",
                  "45-minute one-on-one clinician video consultation",
                  "Personalized roadmap, no commitment",
                  "Credit toward a membership if you upgrade within 30 days",
                  "Interactive digital review of your results",
                  "Access to prescriptions, peptides & supplements",
                  "24/7 access to your personal AI wellness companion",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#34b4f4" }} strokeWidth={3} />
                    <span className="font-bold uppercase tracking-wider display-white leading-snug" style={{ letterSpacing: "0.04em", fontSize: "clamp(10px, 1vw, 13px)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT SETS MEMBERSHIP APART (centered, full width) ─── */}
      <section>
        <SectionHeader centered eyebrow="Built Around What Members Told Us" title="What Sets Membership Apart" description="Every bundle includes the things our members said they wanted most." />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Differentiator icon={Users} title="Dedicated Health Coach" desc="A real human checking in, every month or more often. The #1 request from our members." />
          <Differentiator icon={Microscope} title="Lab Interpretation Walkthrough" desc="A clinician walks you through every result, then leaves you with a written report you can revisit." />
          <Differentiator icon={Stethoscope} title="Continuity of Care" desc="Your clinician knows your history. Same person, every visit, every panel." />
          <Differentiator icon={Sparkles} title="Savings Without Compromise" desc="Membership pays for itself in included care — and keeps paying you back with member-only discounts on everything else." />
        </div>

        {/* Plus Ongoing Member Discounts — full-width callout */}
        <div className="mt-8 rounded-2xl p-6 sm:p-8" style={{ background: "linear-gradient(135deg, rgba(52, 180, 244, 0.10), rgba(52, 180, 244, 0.03))", border: "1px solid rgba(52, 180, 244, 0.22)" }}>
          <div className="text-center mb-7">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: "#34b4f4" }}>
              Plus Ongoing Member Discounts
            </div>
            <h3 className="display-heading display-white" style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}>
              Save on every order, every time
            </h3>
            <p className="mt-3 cream text-sm leading-relaxed max-w-2xl mx-auto" style={{ opacity: 0.7 }}>
              Members get tiered discounts on everything else they buy from Ways2Well — additional lab tests, prescriptions, peptides, and supplements. The more often you use it, the more it pays off.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <DiscountStat icon={FlaskConical} label="Additional Labs" tiers={["30% off", "30% off", "30% off"]} />
            <DiscountStat icon={Pill} label="Prescriptions" tiers={["30% off", "30% off", "30% off"]} />
            <DiscountStat icon={Sparkles} label="Peptides" tiers={["30% off", "30% off", "30% off"]} />
            <DiscountStat icon={Leaf} label="Supplements" tiers={["30% off", "30% off", "30% off"]} />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            <Truck className="w-4 h-4" style={{ color: "#34b4f4" }} />
            <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: "#34b4f4" }}>
              Premium members: free shipping on all orders
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "w-full text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#34b4f4" }}>{eyebrow}</div>
      )}
      <h2 className="display-heading display-white" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>{title}</h2>
      {description && (
        <p
          className={`mt-4 cream text-sm md:text-base leading-relaxed ${centered ? "mx-auto" : ""}`}
          style={{ opacity: 0.75 }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ProgramCard({ program, selected, onToggle }) {
  const Icon = program.icon || Stethoscope;
  return (
    <div className="dark-card p-6 flex flex-col transition" style={selected ? { borderColor: "#34b4f4" } : {}}>
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 grid place-items-center rounded-lg" style={{ backgroundColor: selected ? "rgba(52, 180, 244, 0.15)" : "rgba(255,255,255,0.04)" }}>
          <Icon className="w-5 h-5" style={{ color: "#34b4f4" }} />
        </div>
        {program.badge && (
          <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(52, 180, 244, 0.12)", color: "#34b4f4", border: "1px solid rgba(52,180,244,0.3)" }}>
            {program.badge}
          </span>
        )}
        {program.free && (
          <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(52, 180, 244, 0.12)", color: "#34b4f4", border: "1px solid rgba(52,180,244,0.3)" }}>
            Free
          </span>
        )}
      </div>
      <h3 className="display-heading display-white text-lg leading-tight">{program.name}</h3>
      <p className="mt-2 text-xs leading-relaxed cream flex-1" style={{ opacity: 0.65 }}>{program.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider muted font-bold">
        <span>⏱ {program.duration}</span>
        {program.labs && program.labs !== "None" && (
          <span>· Labs included</span>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="display-heading" style={{ fontSize: "28px", color: program.free ? "#34b4f4" : "#ffffff" }}>
          {program.free ? "FREE" : `$${program.price}`}
        </div>
        <button
          onClick={onToggle}
          className="rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-widest transition flex items-center gap-1.5"
          style={
            selected
              ? { backgroundColor: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1.5px solid #34b4f4" }
              : { backgroundColor: "#34b4f4", color: "#1a1d29" }
          }
        >
          {selected ? <><Check className="w-3.5 h-3.5" /> Added</> : <><Plus className="w-3.5 h-3.5" /> Add</>}
        </button>
      </div>
    </div>
  );
}

function AddOnCard({ addOn, selected, onToggle }) {
  return (
    <div className="dark-card p-5 transition" style={selected ? { borderColor: "#34b4f4" } : {}}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <TestTube className="w-4 h-4 shrink-0" style={{ color: "#34b4f4" }} />
            <h4 className="font-black uppercase tracking-wider text-xs display-white">{addOn.name}</h4>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed cream" style={{ opacity: 0.6 }}>{addOn.labs}</p>
        </div>
        <div className="display-heading shrink-0" style={{ fontSize: "20px", color: "#ffffff" }}>${addOn.price}</div>
      </div>
      <button
        onClick={onToggle}
        className="mt-4 w-full py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition flex items-center justify-center gap-1.5"
        style={
          selected
            ? { backgroundColor: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1.5px solid #34b4f4" }
            : { backgroundColor: "rgba(255,255,255,0.06)", color: "#f7f3eb", border: "1px solid rgba(255,255,255,0.1)" }
        }
      >
        {selected ? <><Check className="w-3 h-3" /> Added</> : <><Plus className="w-3 h-3" /> Add to selection</>}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ADD-ON MODAL — pops up after adding a program with eligible add-ons
// ─────────────────────────────────────────────────────────────────────────────

function AddOnModal({ programId, onClose, inCart, toggleItem }) {
  const open = !!programId;

  // Resolve the program name for the header
  const program = programId === "discover"
    ? { name: DISCOVER.name }
    : GOAL_PROGRAMS.find((p) => p.id === programId);

  const eligible = programId
    ? ADD_ONS.filter((a) => a.eligibleFor.includes(programId))
    : [];

  // ESC key to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const addedCount = eligible.filter((a) => inCart("addon", a.id)).length;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 fade-up"
        style={{ backgroundColor: "rgba(13, 15, 21, 0.78)", backdropFilter: "blur(6px)" }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="w-full max-w-2xl pointer-events-auto fade-up max-h-[90vh] flex flex-col"
          style={{
            backgroundColor: "#0d0f15",
            border: "1px solid rgba(52, 180, 244, 0.25)",
            borderRadius: "20px",
            boxShadow: "0 30px 80px -10px rgba(52, 180, 244, 0.18), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 flex items-start justify-between gap-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4" style={{ color: "#34b4f4" }} strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "#34b4f4" }}>
                  {program?.name || "Program"} added
                </span>
              </div>
              <h3 className="display-heading display-white leading-tight" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
                Want to add lab panels?
              </h3>
              <p className="mt-2 text-xs sm:text-sm cream leading-relaxed" style={{ opacity: 0.7 }}>
                Optional spot-check panels for your visit. Add what's useful — or skip and continue browsing.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full grid place-items-center transition shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              aria-label="Close"
            >
              <X className="w-4 h-4 cream" />
            </button>
          </div>

          {/* Add-ons list */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            {eligible.length === 0 ? (
              <div className="text-center py-8 text-sm font-bold uppercase tracking-wider muted">
                No add-ons available for this program
              </div>
            ) : (
              <div className="space-y-3">
                {eligible.map((a) => {
                  const selected = inCart("addon", a.id);
                  return (
                    <div
                      key={a.id}
                      className="flex items-start gap-3 p-4 rounded-xl transition"
                      style={selected
                        ? { backgroundColor: "rgba(52, 180, 244, 0.08)", border: "1px solid rgba(52, 180, 244, 0.4)" }
                        : { backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }
                      }
                    >
                      <div className="w-9 h-9 rounded-lg grid place-items-center shrink-0" style={{ backgroundColor: selected ? "rgba(52, 180, 244, 0.18)" : "rgba(255,255,255,0.04)" }}>
                        <TestTube className="w-4 h-4" style={{ color: "#34b4f4" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="font-black uppercase tracking-wider display-white text-xs sm:text-sm">{a.name}</h4>
                          <span className="display-heading shrink-0" style={{ fontSize: "18px", color: "#ffffff" }}>${a.price}</span>
                        </div>
                        <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed cream" style={{ opacity: 0.6 }}>{a.labs}</p>
                      </div>
                      <button
                        onClick={() => toggleItem({ type: "addon", id: a.id, name: a.name, price: a.price, meta: a.labs })}
                        className="shrink-0 self-center w-9 h-9 rounded-full grid place-items-center transition"
                        style={selected
                          ? { backgroundColor: "rgba(52, 180, 244, 0.15)", border: "1.5px solid #34b4f4", color: "#34b4f4" }
                          : { backgroundColor: "#34b4f4", color: "#1a1d29" }
                        }
                        aria-label={selected ? `Remove ${a.name}` : `Add ${a.name}`}
                      >
                        {selected ? <Check className="w-4 h-4" strokeWidth={3} /> : <Plus className="w-4 h-4" strokeWidth={3} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-[11px] font-bold uppercase tracking-wider muted">
              {addedCount === 0 ? "No add-ons selected" : `${addedCount} add-on${addedCount === 1 ? "" : "s"} added`}
            </div>
            <button
              onClick={onClose}
              className="pill-cta justify-center"
              style={{ padding: "12px 24px" }}
            >
              {addedCount > 0 ? "Done" : "Skip & Continue"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AdvancedTestCard({ test, selected, onToggle }) {
  return (
    <div className="dark-card p-5 transition" style={selected ? { borderColor: "#34b4f4" } : {}}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <FlaskConical className="w-4 h-4" style={{ color: "#34b4f4" }} />
            <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: "#34b4f4" }}>Advanced</span>
          </div>
          <h4 className="display-heading display-white text-sm leading-tight">{test.name}</h4>
          <div className="mt-2 text-[10px] uppercase tracking-wider muted font-bold">⏱ {test.duration}</div>
        </div>
        <div className="display-heading shrink-0" style={{ fontSize: "22px", color: "#ffffff" }}>${test.price.toLocaleString()}</div>
      </div>
      <button
        onClick={onToggle}
        className="mt-4 w-full py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition flex items-center justify-center gap-1.5"
        style={
          selected
            ? { backgroundColor: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1.5px solid #34b4f4" }
            : { backgroundColor: "rgba(255,255,255,0.06)", color: "#f7f3eb", border: "1px solid rgba(255,255,255,0.1)" }
        }
      >
        {selected ? <><Check className="w-3 h-3" /> Added</> : <><Plus className="w-3 h-3" /> Add to selection</>}
      </button>
    </div>
  );
}

function MembershipCard({ membership, billing, selected, onToggle, onShowBreakdown }) {
  const Icon = membership.icon;
  const price = billing === "annual" ? membership.annual : membership.monthly;
  const period = billing === "annual" ? "yr" : "mo";

  // Savings math depends on billing mode
  const annualCost = billing === "annual" ? membership.annual : membership.monthly * 12;
  const savings = (membership.paygValue || 0) - annualCost;
  const hasMeaningfulSavings = savings >= 100;
  const savingsLabel = billing === "annual" ? "Save $" + savings.toLocaleString() + "/yr" : "Save $" + savings.toLocaleString() + "/yr";

  return (
    <div className="dark-card p-3 sm:p-5 flex flex-col relative min-w-0" style={
      membership.popular
        ? { borderColor: "#34b4f4", borderWidth: "1.5px", boxShadow: "0 0 0 3px rgba(52, 180, 244, 0.08)" }
        : selected ? { borderColor: "#34b4f4" } : {}
    }>
      {membership.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.15em] whitespace-nowrap" style={{ background: "#34b4f4", color: "#1a1d29" }}>
          Most Popular
        </div>
      )}

      {/* Savings badge — top-right */}
      {membership.paygValue && (
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
          {hasMeaningfulSavings ? (
            <span className="px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap" style={{ background: "#34b4f4", color: "#1a1d29" }}>
              {savingsLabel}
            </span>
          ) : (
            <span className="px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest whitespace-nowrap" style={{ background: "rgba(52, 180, 244, 0.12)", color: "#34b4f4", border: "1px solid rgba(52, 180, 244, 0.3)" }}>
              Annual saves more
            </span>
          )}
          <button
            onClick={onShowBreakdown}
            className="text-[9px] font-bold uppercase tracking-widest underline underline-offset-2 transition"
            style={{ color: "#34b4f4", textDecorationColor: "rgba(52, 180, 244, 0.5)" }}
          >
            See Breakdown
          </button>
        </div>
      )}

      <div className="mb-3 pr-20 sm:pr-24">
        <W2WLogo height={16} showWordmark={false} />
      </div>

      <h3 className="display-heading display-white leading-tight pr-20 sm:pr-24" style={{ fontSize: "clamp(16px, 2.2vw, 26px)" }}>
        {membership.name}<br />Membership
      </h3>

      <p className="mt-2 cream font-medium" style={{ opacity: 0.7, fontSize: "clamp(10px, 1vw, 12px)" }}>{membership.tagline}</p>

      <div className="mt-4 mb-5">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="display-heading" style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#34b4f4" }}>${price}</span>
          <span className="font-black uppercase tracking-widest display-white" style={{ fontSize: "clamp(9px, 0.8vw, 12px)" }}>/{period === "yr" ? "Yr" : "Mo"}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-7 flex-1">
        {membership.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#34b4f4" }} strokeWidth={3} />
            <span className="font-bold uppercase tracking-wider display-white leading-tight" style={{ letterSpacing: "0.04em", fontSize: "clamp(9px, 0.9vw, 11px)" }}>
              {f.text}
              {f.new && (
                <span className="ml-1 text-[7px] px-1 py-0.5 rounded align-middle" style={{ background: "rgba(52, 180, 244, 0.18)", color: "#34b4f4", letterSpacing: "0.1em" }}>
                  New
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onToggle}
        className="w-full rounded-full font-black uppercase tracking-widest transition flex items-center justify-center gap-1.5"
        style={{
          padding: "10px 14px",
          fontSize: "clamp(9px, 0.9vw, 12px)",
          ...(selected
            ? { backgroundColor: "rgba(52, 180, 244, 0.15)", color: "#34b4f4", border: "1.5px solid #34b4f4" }
            : membership.popular
              ? { backgroundColor: "#34b4f4", color: "#1a1d29" }
              : { backgroundColor: "rgba(255,255,255,0.06)", color: "#f7f3eb", border: "1px solid rgba(255,255,255,0.15)" }
          )
        }}
      >
        {selected ? <><Check className="w-3.5 h-3.5" /> Selected</> : <>Join {membership.name} <ArrowRight className="w-3.5 h-3.5" /></>}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BREAKDOWN MODAL — shows full PAYG vs Membership math, billing-aware
// ─────────────────────────────────────────────────────────────────────────────

function BreakdownModal({ membershipId, billing, onClose }) {
  const open = !!membershipId;
  const membership = membershipId ? MEMBERSHIPS.find((m) => m.id === membershipId) : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !membership) return null;

  const paygTotal = membership.paygValue;
  const annualCost = billing === "annual" ? membership.annual : membership.monthly * 12;
  const billingLabel = billing === "annual" ? "Annual" : "Monthly × 12";
  const billingDetail = billing === "annual"
    ? `Paid annually: $${membership.annual.toLocaleString()}`
    : `$${membership.monthly} × 12 months = $${(membership.monthly * 12).toLocaleString()}`;
  const savings = paygTotal - annualCost;
  const annualSavings = paygTotal - membership.annual;
  const positive = savings > 0;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 fade-up"
        style={{ backgroundColor: "rgba(13, 15, 21, 0.78)", backdropFilter: "blur(6px)" }}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="w-full max-w-2xl pointer-events-auto fade-up max-h-[90vh] flex flex-col"
          style={{
            backgroundColor: "#0d0f15",
            border: "1px solid rgba(52, 180, 244, 0.25)",
            borderRadius: "20px",
            boxShadow: "0 30px 80px -10px rgba(52, 180, 244, 0.18), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 flex items-start justify-between gap-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="min-w-0">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: "#34b4f4" }}>
                {membership.name} Membership · {billingLabel} Billing
              </div>
              <h3 className="display-heading display-white leading-tight" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
                Value Breakdown
              </h3>
              <p className="mt-2 text-xs sm:text-sm cream leading-relaxed" style={{ opacity: 0.7 }}>
                What you'd pay if you bought each included service à la carte vs. your membership cost.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full grid place-items-center transition shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              aria-label="Close"
            >
              <X className="w-4 h-4 cream" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {/* PAYG side */}
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 muted">If purchased separately</div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="space-y-2.5">
                  {membership.paygBreakdown.map((b, i) => (
                    <div key={i} className="flex justify-between gap-3 text-xs uppercase tracking-wider font-bold">
                      <span className="cream" style={{ opacity: 0.8 }}>{b.label}</span>
                      <span className="display-white shrink-0">${b.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 flex justify-between items-baseline" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-[11px] font-black uppercase tracking-widest cream">PAYG Total</span>
                  <span className="display-heading" style={{ fontSize: "24px", color: "#ffffff" }}>${paygTotal.toLocaleString()}/yr</span>
                </div>
              </div>
            </div>

            {/* Membership side */}
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#34b4f4" }}>
                With {membership.name} Membership
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(52, 180, 244, 0.06)", border: "1px solid rgba(52, 180, 244, 0.2)" }}>
                <div className="text-[11px] font-bold uppercase tracking-wider muted">{billingDetail}</div>
                <div className="mt-2 flex justify-between items-baseline">
                  <span className="text-[11px] font-black uppercase tracking-widest cream">Annual Cost</span>
                  <span className="display-heading" style={{ fontSize: "24px", color: "#34b4f4" }}>${annualCost.toLocaleString()}/yr</span>
                </div>
              </div>
            </div>

            {/* Savings summary */}
            <div className="rounded-xl p-4 sm:p-5" style={positive
              ? { background: "linear-gradient(135deg, rgba(52, 180, 244, 0.18), rgba(52, 180, 244, 0.06))", border: "1px solid rgba(52, 180, 244, 0.4)" }
              : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }
            }>
              {positive ? (
                <>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "#34b4f4" }}>You Save</div>
                  <div className="mt-1 display-heading" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#34b4f4" }}>
                    ${savings.toLocaleString()}<span className="text-base align-middle ml-1" style={{ color: "#34b4f4", opacity: 0.7 }}>/yr</span>
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider muted">
                    vs. paying à la carte
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] muted">Monthly Billing</div>
                  <div className="mt-2 text-sm cream leading-relaxed">
                    Paying monthly comes out close to à la carte pricing. <strong style={{ color: "#34b4f4" }}>Switch to annual billing</strong> to save ${annualSavings.toLocaleString()}/yr — plus you still get all the membership benefits (dedicated coach, lab interpretation, discounts) that aren't reflected in this raw price comparison.
                  </div>
                </>
              )}
            </div>

            {/* Bonus benefits note */}
            <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.1)" }}>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 muted">Not included in PAYG math</div>
              <ul className="space-y-1.5">
                {[
                  "Lab interpretation + written Well Plan with each visit",
                  "30% off supplements, scripts & lab services",
                  "24/7 access to your personal AI wellness companion",
                  ...(membership.id === "max" ? ["Priority clinician access — 7 days scheduling"] : []),
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] font-bold uppercase tracking-wider cream" style={{ opacity: 0.75 }}>
                    <Check className="w-3 h-3 mt-0.5 shrink-0" style={{ color: "#34b4f4" }} strokeWidth={3} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 flex items-center justify-end" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <button onClick={onClose} className="pill-cta" style={{ padding: "12px 24px" }}>
              Got it <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Differentiator({ icon: Icon, title, desc }) {
  return (
    <div className="dark-card p-6">
      <div className="w-10 h-10 rounded-lg grid place-items-center mb-4" style={{ backgroundColor: "rgba(52, 180, 244, 0.12)", border: "1px solid rgba(52, 180, 244, 0.25)" }}>
        <Icon className="w-5 h-5" style={{ color: "#34b4f4" }} />
      </div>
      <h4 className="display-heading display-white text-base mb-2">{title}</h4>
      <p className="text-xs cream leading-relaxed" style={{ opacity: 0.7 }}>{desc}</p>
    </div>
  );
}

function SavingsTile({ tier, annualSavings, monthlyPrice, blurb, popular }) {
  return (
    <div className="dark-card p-5 sm:p-6 relative" style={popular ? { borderColor: "rgba(52, 180, 244, 0.5)", borderWidth: "1.5px" } : {}}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] muted">{tier} Membership</div>
        <div className="text-[10px] font-bold uppercase tracking-wider muted">From {monthlyPrice}/mo</div>
      </div>
      <div className="flex items-baseline gap-2 flex-wrap mb-2">
        <span className="display-heading" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#34b4f4" }}>{annualSavings}</span>
        <span className="text-xs font-black uppercase tracking-widest display-white">/yr saved</span>
      </div>
      <p className="text-xs cream leading-relaxed" style={{ opacity: 0.7 }}>{blurb}</p>
    </div>
  );
}

function DiscountStat({ icon: Icon, label, tiers }) {
  return (
    <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(13, 15, 21, 0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="w-9 h-9 rounded-lg grid place-items-center mx-auto mb-3" style={{ backgroundColor: "rgba(52, 180, 244, 0.12)" }}>
        <Icon className="w-4 h-4" style={{ color: "#34b4f4" }} />
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest display-white mb-2">{label}</div>
      <div className="space-y-0.5">
        {["Core", "Transform", "Premium"].map((t, i) => (
          <div key={t} className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
            <span className="muted">{t}</span>
            <span style={{ color: "#34b4f4" }}>{tiers[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustStat({ value, label }) {
  return (
    <div>
      <div className="display-heading" style={{ fontSize: "42px", color: "#34b4f4" }}>{value}</div>
      <div className="text-[11px] font-bold uppercase tracking-wider mt-2 cream leading-snug" style={{ opacity: 0.7 }}>{label}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DRAWER
// ─────────────────────────────────────────────────────────────────────────────

function SelectionDrawer({ open, onClose, cart, cartTotal, removeItem }) {
  const membership = cart.find((c) => c.type === "membership");
  const oneTimeItems = cart.filter((c) => c.type !== "membership");
  const oneTimeTotal = oneTimeItems.reduce((s, i) => s + (i.price || 0), 0);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(13, 15, 21, 0.75)", backdropFilter: "blur(4px)" }}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[440px] transition-transform duration-300 flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "#0d0f15", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="display-heading display-white text-xl">Your Selections</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full grid place-items-center transition"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <X className="w-4 h-4 cream" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-10 h-10 mx-auto mb-4" style={{ color: "rgba(247,243,235,0.25)" }} />
              <p className="text-xs font-bold uppercase tracking-widest muted">Nothing selected yet</p>
              <p className="text-[11px] mt-3 muted leading-relaxed max-w-[260px] mx-auto">
                Pick a pay-as-you-go service or choose a membership to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {membership && (
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#34b4f4" }}>Membership</div>
                  <CartLineItem
                    item={membership}
                    onRemove={() => removeItem(membership.type, membership.id)}
                    showPrice={`$${membership.billing === "annual" ? membership.annual : membership.monthly}/${membership.billing === "annual" ? "yr" : "mo"}`}
                  />
                </div>
              )}

              {oneTimeItems.length > 0 && (
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#34b4f4" }}>One-Time Services</div>
                  <div className="space-y-3">
                    {oneTimeItems.map((item, i) => (
                      <CartLineItem
                        key={`${item.type}-${item.id}-${i}`}
                        item={item}
                        onRemove={() => removeItem(item.type, item.id)}
                        showPrice={formatPrice(item.price)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 space-y-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {membership && (
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="muted">Membership ({membership.billing})</span>
                <span className="display-white">${membership.billing === "annual" ? membership.annual : membership.monthly}/{membership.billing === "annual" ? "yr" : "mo"}</span>
              </div>
            )}
            {oneTimeItems.length > 0 && (
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="muted">One-Time Services</span>
                <span className="display-white">{formatPrice(oneTimeTotal)}</span>
              </div>
            )}
            <div className="pt-4 flex justify-between items-baseline" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-xs font-black uppercase tracking-widest cream">Due Today</span>
              <span className="display-heading" style={{ fontSize: "32px", color: "#34b4f4" }}>
                {formatPrice(oneTimeTotal + (membership ? (membership.billing === "annual" ? membership.annual : membership.monthly) : 0))}
              </span>
            </div>
            {membership && oneTimeItems.length > 0 && (
              <p className="text-[10px] uppercase tracking-wider muted font-bold">
                Membership renews {membership.billing === "annual" ? "annually" : "monthly"}. Pay-as-you-go services charged once.
              </p>
            )}
            <button className="w-full pill-cta justify-center" style={{ padding: "16px 24px", fontSize: "13px" }}>
              Continue to Checkout <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] uppercase tracking-wider muted font-bold">
              You'll review everything before paying · No charge yet
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

function CartLineItem({ item, onRemove, showPrice }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-black uppercase tracking-wider display-white leading-tight">{item.name}</div>
        {item.meta && <div className="text-[10px] uppercase tracking-wider muted mt-1.5 truncate font-bold">{item.meta}</div>}
        <div className="text-sm font-black mt-2" style={{ color: "#34b4f4" }}>{showPrice}</div>
      </div>
      <button
        onClick={onRemove}
        className="w-7 h-7 rounded-full grid place-items-center transition shrink-0"
        style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(247,243,235,0.5)" }}
        aria-label={`Remove ${item.name}`}
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
