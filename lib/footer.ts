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
      { label: "Enterprise Overview", href: "/enterprise-overview" },
      { label: "Inventory Qualification", href: "#" },
      { label: "Disposition Planning", href: "#" },
      { label: "Recovery & Evidence", href: "#" },
    ],
  },
  {
    title: "Surplus Exchange",
    links: [
      { label: "Exchange Overview", href: "/solution-surplus-exchange" },
      { label: "Private Marketplaces", href: "#" },
      { label: "Offers & Transactions", href: "#" },
      { label: "Buyer Access", href: "/buyer-access" },
    ],
  },
  {
    title: "Surplus Network",
    links: [
      { label: "Network Overview", href: "#" },
      { label: "Join Partner Network", href: "/join-partner-network" },
      { label: "Logistics Coordination", href: "/logistics-coordination" },
      { label: "Recovery Pathways", href: "/permitted-pathways" },
    ],
  },
  {
    title: "How It Works",
    links: [
      { label: "How the Platform\nWorks", href: "/how-the-platform-works" },
      { label: "For Enterprise Sellers", href: "/for-enterprise-sellers" },
      { label: "For Verified Buyers", href: "/for-verified-buyers" },
      { label: "For Partners", href: "/for-partners" },
    ],
  },
  {
    title: "Enterprise Sellers",
    links: [
      { label: "Seller Overview", href: "/seller-overview" },
      { label: "Seller Readiness", href: "/seller-readiness-guide" },
      { label: "Category Eligibility", href: "/category-eligibility" },
      { label: "Request Enterprise\nDemo", href: "/request-enterprise-demo" },
    ],
  },
  {
    title: "Verified Buyers",
    links: [
      { label: "Buyer Overview", href: "#" },
      { label: "Apply as Verified Buyer", href: "#" },
      { label: "Buyer Qualification\nGuide", href: "/buyer-qualification" },
      { label: "Access Explained", href: "/access-explained" },
    ],
  },
  {
    title: "Product Categories",
    links: [
      { label: "All Categories", href: "#" },
      { label: "Apparel & Footwear", href: "/categories-apparel-footwear" },
      { label: "Food & Grocery", href: "#" },
      { label: "Consumer Electronics", href: "/categories-consumer-electronics" },
      { label: "Industrial & Business\nGoods", href: "#" },
    ],
  },
  {
    title: "Trust & Safety",
    links: [
      { label: "Trust & Safety\nOverview", href: "/trust-and-safety" },
      { label: "Business Verification", href: "/business-verification" },
      { label: "Product Safety", href: "/product-safety" },
      { label: "Brand Protection", href: "/brand-protection" },
      { label: "Report an Issue", href: "/report-an-issue" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Surplus Recovery\nGuide", href: "/recovery-guide" },
      { label: "Seller Readiness\nChecklist", href: "#" },
      { label: "Buyer Qualification\nGuide", href: "/buyer-qualification" },
      { label: "Frequently Asked\nQuestions", href: "/frequently-asked-questions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Zoiko Surplus", href: "/about" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Industries Served", href: "/industries-served" },
      { label: "Corporate Information", href: "/company-corporate-information" },
    ],
  },
  {
    title: "Help & Contact",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "Contact Us", href: "/contact" },
      { label: "Report a Concern", href: "/report-a-concern" },
      { label: "Accessibility", href: "#" },
    ],
  },
  {
    title: "Markets & Policies",
    links: [
      { label: "Where We Operate", href: "/where-we-operate" },
      { label: "Market Availability", href: "#" },
      { label: "Legal Center", href: "/legal-center" },
      { label: "Privacy Notice", href: "/privacy-notice" },
      { label: "Terms of Use", href: "/terms-of-use" },
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
  { label: "Privacy Notice", href: "/privacy-notice" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "#" },
  { label: "Cookie Preferences", href: "#", button: true },
  { label: "Accessibility Statement", href: "#" },
  { label: "Security & Trust", href: "/trust-and-safety" },
  { label: "Service Status", href: "#" },
  { label: "Legal Center", href: "/legal-center" },
  { label: "Contact", href: "/contact" },
];
