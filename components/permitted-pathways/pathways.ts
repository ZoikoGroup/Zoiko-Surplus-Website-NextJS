import { Heart, Recycle, Repeat, Share2, Truck, type LucideIcon } from "lucide-react";
import { ppImg } from "./shared";

// The five route classes, shared by the selector (02) and the detail rows (03).
export type Pathway = {
  id: string;
  icon: LucideIcon;
  name: string;
  short: string;
  selectorImage: string;
  selectorAlt: string;
  title: string;
  body: string;
  points: string[];
  badge: string;
  image: string;
  alt: string;
};

export const pathways: Pathway[] = [
  {
    id: "pathway-collection",
    icon: Truck,
    name: "Collection",
    short: "Authorized collection & pickup.",
    selectorImage: ppImg("selector-collection.webp"),
    selectorAlt: "Two colleagues reviewing paperwork in a warehouse",
    title: "Authorized collection & pickup.",
    body: "Coordinate lawful collection of qualified goods from the seller's site, through separately contracted carriers — only where a route is permitted and approved.",
    points: ["Seller-scheduled, permitted pickups", "Licensed carriers, separately contracted", "Chain-of-custody from collection"],
    badge: "Where enabled",
    image: ppImg("pathway-collection.webp"),
    alt: "Man on the phone noting details beside parcels and a clothing rail",
  },
  {
    id: "pathway-logistics",
    icon: Share2,
    name: "Logistics",
    short: "Governed transport & handoff.",
    selectorImage: ppImg("selector-logistics.webp"),
    selectorAlt: "Large warehouse floor filled with boxes and yellow totes",
    title: "Governed transport & handoff.",
    body: "Move qualified goods to the next approved party under dangerous-goods and handling rules — Zoiko coordinates, it doesn't operate a fleet.",
    points: ["Hazard-appropriate transport", "Evidenced handoff and receipt", "Partner-executed, not Zoiko-operated"],
    badge: "Partner-executed",
    image: ppImg("pathway-logistics.webp"),
    alt: "Large warehouse floor filled with boxes and yellow totes",
  },
  {
    id: "pathway-redistribution",
    icon: Repeat,
    name: "Redistribution",
    short: "Approved B2B redistribution.",
    selectorImage: ppImg("selector-redistribution.webp"),
    selectorAlt: "Two people shaking hands in front of lorries",
    title: "Approved B2B redistribution.",
    body: "Direct qualified surplus to verified, seller-approved business buyers in a private market — never a public listing.",
    points: ["Seller-authorized audiences only", "Confidential terms and identities", "No public catalog"],
    badge: "Policy-gated",
    image: ppImg("pathway-redistribution.webp"),
    alt: "Business owner at a counter with a point-of-sale tablet",
  },
  {
    id: "pathway-donation",
    icon: Heart,
    name: "Donation",
    short: "Beneficiary & legal donation.",
    selectorImage: ppImg("selector-donation.webp"),
    selectorAlt: "Volunteers packing clothes into a donation box",
    title: "Beneficiary & legal donation.",
    body: "Transfer eligible goods to an approved recipient through a licensed partner, within legal and category rules — no tax, impact or acceptance is implied.",
    points: ["Eligible, approved recipients", "Licensed redistribution partners", "No tax or impact claims"],
    badge: "Where enabled",
    image: ppImg("pathway-donation.webp"),
    alt: "Hand writing on a box labelled donation",
  },
  {
    id: "pathway-other-disposal",
    icon: Recycle,
    name: "Other disposal",
    short: "Recovery, recycling & return.",
    selectorImage: ppImg("selector-other-disposal.webp"),
    selectorAlt: "Worker placing material into a recycling container",
    title: "Recovery, recycling & return.",
    body: "Where resale and donation aren't appropriate, route goods to permitted recovery, recycling or supplier-return — safely and compliantly.",
    points: ["Permitted material recovery", "Supplier return where agreed", "Compliant final disposal as a last resort"],
    badge: "Specialist",
    image: ppImg("pathway-other-disposal.webp"),
    alt: "Person in a reduce, reuse, recycle t-shirt holding a recycling box",
  },
];
