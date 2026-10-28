export type FooterLink = {
  // "\n" marks where the desktop layout wraps the label; mobile keeps it on one line.
  label: string;
  href: string;
};

export type FooterSection = { title: string; links: FooterLink[] };

// Pages that don't exist yet point at "#"; swap in the real route when the page is added.
export const footerSections: FooterSection[] = [
  {
    title: "Surplus Enterprise",
    links: [
      { label: "Enterprise Overview", href: "#" },
      { label: "Inventory Qualification", href: "#" },
      { label: "Disposition Planning", href: "#" },
      { label: "Recovery & Evidence", href: "#" },
    ],
  },
  {
    title: "Surplus Exchange",
    links: [
      { label: "Exchange Overview", href: "#" },
      { label: "Private Marketplaces", href: "#" },
      { label: "Offers & Transactions", href: "#" },
      { label: "Buyer Access", href: "#" },
    ],
  },
  {
    title: "Surplus Network",
    links: [
      { label: "Network Overview", href: "#" },
      { label: "Join Partner Network", href: "#" },
      { label: "Logistics Coordination", href: "#" },
      { label: "Recovery Pathways", href: "#" },
    ],
  },
  {
    title: "How It Works",
    links: [
      { label: "How the Platform\nWorks", href: "#" },
      { label: "For Enterprise Sellers", href: "#" },
      { label: "For Verified Buyers", href: "#" },
      { label: "For Partners", href: "#" },
    ],
  },
  {
    title: "Enterprise Sellers",
    links: [
      { label: "Seller Overview", href: "#" },
      { label: "Seller Readiness", href: "#" },
      { label: "Category Eligibility", href: "#" },
      { label: "Request Enterprise\nDemo", href: "#" },
    ],
  },
  {
    title: "Verified Buyers",
    links: [
      { label: "Buyer Overview", href: "#" },
      { label: "Apply as Verified Buyer", href: "#" },
      { label: "Buyer Qualification\nGuide", href: "#" },
      { label: "Access Explained", href: "#" },
    ],
  },
  {
    title: "Product Categories",
    links: [
      { label: "All Categories", href: "#" },
      { label: "Apparel & Footwear", href: "#" },
      { label: "Food & Grocery", href: "#" },
      { label: "Consumer Electronics", href: "#" },
      { label: "Industrial & Business\nGoods", href: "#" },
    ],
  },
  {
    title: "Trust & Safety",
    links: [
      { label: "Trust & Safety\nOverview", href: "#" },
      { label: "Business Verification", href: "#" },
      { label: "Product Safety", href: "#" },
      { label: "Brand Protection", href: "#" },
      { label: "Report an Issue", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Center", href: "#" },
      { label: "Surplus Recovery\nGuide", href: "#" },
      { label: "Seller Readiness\nChecklist", href: "#" },
      { label: "Frequently Asked\nQuestions", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Zoiko Surplus", href: "/about" },
      { label: "Our Approach", href: "#" },
      { label: "Industries Served", href: "#" },
      { label: "Corporate Information", href: "#" },
    ],
  },
  {
    title: "Help & Contact",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Report a Concern", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
  {
    title: "Markets & Policies",
    links: [
      { label: "Where We Operate", href: "#" },
      { label: "Market Availability", href: "#" },
      { label: "Legal Center", href: "#" },
      { label: "Privacy Notice", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export const footerSocials = [
  { name: "LinkedIn", icon: "linkedin", size: 20 },
  { name: "X", icon: "x", size: 18 },
  { name: "YouTube", icon: "youtube", size: 22 },
  { name: "Facebook", icon: "facebook", size: 20 },
  { name: "Instagram", icon: "instagram", size: 20 },
] as const;

export const footerOffices = [
  {
    label: "Global Headquarters",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "United States"],
    // The desktop design shows the address on one line.
    inline: "1401 21st Street, Suite R Sacramento, CA 95811, US",
  },
  {
    label: "European Headquarters",
    lines: ["167–169 Great Portland Street, 5th Floor", "London W1W 5PF", "United Kingdom"],
    inline: "167–169 Great Portland Street, 5th Floor, London W1W 5PF, UK",
  },
] as const;

export const footerLegalLinks: (FooterLink & { button?: boolean })[] = [
  { label: "Privacy Notice", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Cookie Preferences", href: "#", button: true },
  { label: "Accessibility Statement", href: "#" },
  { label: "Security & Trust", href: "#" },
  { label: "Service Status", href: "#" },
  { label: "Legal Center", href: "#" },
  { label: "Contact", href: "#" },
];
