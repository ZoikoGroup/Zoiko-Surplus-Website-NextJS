export const siteConfig = {
  name: "Zoiko Surplus",
  description: "Zoiko Surplus - a global surplus commerce and disposition platform.",
  email: "hello@zoikogroup.com",
};

export type NavItem = {
  label: string;
  href: string;
  // Items with a chevron in the design open a menu; the menu contents aren't designed yet.
  menu?: boolean;
};

// Header navigation. Add a page here and it shows up in the header automatically.
export const navItems: NavItem[] = [
  { label: "Solutions", href: "#", menu: true },
  { label: "How It Works", href: "#" },
  { label: "Categories", href: "#", menu: true },
  { label: "Trust & Safety", href: "#" },
  { label: "Resources", href: "#", menu: true },
  { label: "Company", href: "#", menu: true },
];

export const headerCta = { label: "Request Enterprise Demo", href: "#" };

export const utilityLinks = [
  { label: "Help", href: "#" },
  { label: "Accessibility", href: "#" },
];

export type CategoryBadge = "pilot" | "safety" | "overview";

export type CategoryMenuItem = {
  // "\n" marks a line break the mobile design takes in the title.
  title: string;
  badge: CategoryBadge;
  badgeLabel: string;
  description: string;
};

export const categoryMenu = {
  overviewLink: { label: "Category taxonomy overview", href: "#" },
  items: [
    {
      title: "Apparel & Footwear",
      badge: "pilot",
      badgeLabel: "Pilot",
      description: "Potential first controlled seller-private B2B category; market availability gated.",
    },
    {
      title: "Food & Grocery",
      badge: "safety",
      badgeLabel: "Safety-gated",
      description: "Distinct safety, shelf-life and legal activation controls apply.",
    },
    {
      title: "Consumer\nElectronics",
      badge: "overview",
      badgeLabel: "Overview",
      description: "Condition, device status and category-specific requirements.",
    },
    {
      title: "Home & Lifestyle",
      badge: "overview",
      badgeLabel: "Overview",
      description: "Goods and condition-based qualification.",
    },
    {
      title: "Industrial &\nBusiness Goods",
      badge: "overview",
      badgeLabel: "Overview",
      description: "Commercial excess and category-specific restrictions.",
    },
  ] satisfies CategoryMenuItem[],
  all: {
    title: "All Category Overviews",
    description: "Full public taxonomy with approved filters.",
    href: "#",
  },
  note: "A category overview is not a trading permission. Food, perishables and other regulated categories require independent safety authorization and market activation.",
};

export const companyMenu = {
  overviewLink: { label: "Corporate information", href: "#" },
  sectionLabel: "About",
  links: [
    { title: "About Zoiko Surplus", description: "Mission, operating role and global design.", href: "#" },
    { title: "Our Approach", description: "Governed marketplace doctrine and differentiators.", href: "#" },
    { title: "Industries Served", description: "Current and prospective sectors, clearly differentiated.", href: "#" },
    { title: "Contact", description: "General contact with privacy-safe inquiry handling.", href: "#" },
  ],
  card: {
    title: "Zoiko Supply Group Inc.",
    description: "Zoiko Surplus operates within Zoiko Supply Group Inc., a Zoiko Group company.",
    link: { label: "Corporate Information", href: "#" },
  },
};

export const resourcesMenu = {
  overviewLink: { label: "Knowledge Center overview", href: "#" },
  groups: [
    {
      label: "Guides",
      links: [
        { title: "Knowledge Center", description: "Educational hub with named authors and review dates.", href: "#" },
        { title: "Surplus Recovery Guide", description: "Recovery routes and realistic decision variables.", href: "#" },
      ],
    },
    {
      label: "Readiness",
      links: [
        { title: "Seller Readiness Checklist", description: "Nonbinding onboarding prep — not KYB approval.", href: "#" },
        { title: "Buyer Qualification Guide", description: "Verification vs market entitlement, explained.", href: "#" },
      ],
    },
  ],
  card: {
    badge: "Help",
    // The two designs break these lines differently, so each viewport has its own set of lines.
    titleDesktop: ["Questions about access or the model?"],
    titleMobile: ["Questions about access or", "the model?"],
    descriptionDesktop: ["Candid answers on operating model, logistics", "and access — plus a real contact path."],
    descriptionMobile: ["Candid answers on operating model,", "logistics and access — plus a real", "contact path."],
    links: [
      { label: "Frequently Asked Questions", href: "#" },
      { label: "Contact Support", href: "#" },
    ],
  },
};

export const solutionsMenu = {
  groups: [
    {
      title: "Surplus Enterprise",
      href: "#",
      description: "Qualification, governed seller disposition and evidence.",
      links: [
        { title: "Inventory Qualification", description: "Condition, provenance and category requirements.", href: "#" },
        { title: "Disposition Planning", description: "Seller-led, policy-gated commercial routes.", href: "#" },
        { title: "Recovery & Evidence", description: "Traceability and outcome documentation.", href: "#" },
      ],
    },
    {
      title: "Surplus Exchange",
      href: "#",
      description: "Verified participation in seller-controlled markets.",
      links: [
        { title: "Private Marketplaces", description: "Confidential buyer audiences and entitlements.", href: "#" },
        { title: "Offers & Transactions", description: "Governed offers / orders where enabled.", href: "#" },
      ],
    },
    {
      title: "Surplus Network",
      href: "#",
      description: "Coordination of permitted third-party pathways.",
      links: [
        { title: "Permitted Pathways", description: "Lawful collection, logistics, redistribution and donation.", href: "#" },
        { title: "How the model works", description: "Seven governed stages, end to end.", href: "#" },
      ],
    },
  ],
  featured: {
    title: "New to governed surplus?",
    // The two designs break this copy differently.
    descriptionDesktop: ["See how a lot moves from", "qualification to a resolved,", "documented outcome across", "seven stages."],
    descriptionMobile: ["See how a lot moves from", "qualification to a resolved,", "documented outcome across seven", "stages."],
    link: { label: "Explore How It Works", href: "#" },
  },
  bottomLinks: [
    {
      key: "partner",
      title: "Partner Participation",
      descriptionDesktop: ["Partner role, requirements and inquiry."],
      descriptionMobile: ["Partner role, requirements and", "inquiry."],
      href: "#",
    },
    {
      key: "buyer",
      title: "Become a Verified Buyer",
      descriptionDesktop: ["Application route only — not a retail shopping link."],
      descriptionMobile: ["Application route only — not a", "retail shopping link."],
      href: "#",
    },
  ],
} as const;
