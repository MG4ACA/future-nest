export type ArticleStatus = 'coming-soon' | 'published';

export type MerchantStatus = 'unverified' | 'shortlisted' | 'verified';

export interface ProductPlaceholder {
  id: string;
  title: string;
  category: string;
  priceRange: string;
  merchantStatus: MerchantStatus;
  description?: string;
  ctaLabel?: string;
  href?: string;
  enabled?: boolean;
}

export interface Article {
  slug: string;
  categorySlug: string;
  title: string;
  summary: string;
  status: ArticleStatus;
  readTime?: string;
  lastUpdated?: string;
  /** Long-form paragraphs rendered on the article page. Omitted while an article is coming-soon. */
  body?: string[];
  productIdeas?: ProductPlaceholder[];
}

const articles: Article[] = [
  {
    slug: 'off-grid-gadgets-worth-comparing',
    categorySlug: 'off-grid',
    title: 'Off-grid Gadgets Worth Comparing',
    summary:
      'A practical comparison framework for power, water, and lighting tools before you buy anything.',
    status: 'published',
    readTime: '8 min read',
    lastUpdated: '2026-08-26',
    body: [
      "Most off-grid gear pages compare price, not the numbers that decide whether a tool actually works for your setup. Before you buy anything, you need three figures: real output under load, cycle life, and how the product behaves in the specific climate and use case you have — not the manufacturer's best-case spec sheet.",
      'Portable power stations are rated in watt-hours, but usable capacity drops with age, temperature, and inverter efficiency. Ask for the depth-of-discharge figure and the warranty cycle count, not just the headline capacity number. A 500Wh unit rated for 500 cycles at 80% capacity will outlast a 600Wh unit rated for 300 cycles.',
      'Gravity water filtration kits live or die on cartridge lifespan and whether replacements are actually stocked where you live. A filter rated for 1,500 gallons sounds generous until you check the flow rate drops off well before that number in real use.',
      'Rechargeable area lighting is the easiest category to get right: prioritize a stated lumen-output curve over time, not just a peak-brightness number, and check the IP rating if the light will ever sit outside.',
      "We're building comparison tables for each category as we verify real specs and current pricing. Product links go live only after we've confirmed availability and an affiliate relationship exists — nothing here is a paid placement yet.",
    ],
    productIdeas: [
      {
        id: 'portable-power-station',
        title: 'Portable Power Station (Mid-capacity)',
        category: 'Energy storage',
        priceRange: '$300 - $900',
        merchantStatus: 'shortlisted',
        description:
          'Compare battery chemistry, cycle life, and real output before selecting a unit.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'water-filtration-kit',
        title: 'Gravity Water Filtration Kit',
        category: 'Water systems',
        priceRange: '$80 - $250',
        merchantStatus: 'unverified',
        description: 'Shortlist based on filter lifespan and replacement cartridge availability.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'rechargeable-area-light',
        title: 'Rechargeable Area Light',
        category: 'Lighting',
        priceRange: '$25 - $120',
        merchantStatus: 'verified',
        description: 'Prioritize runtime curves, lumen consistency, and weather resistance.',
        ctaLabel: 'See tested options',
        enabled: false,
      },
    ],
  },
  {
    slug: 'solar-setups-for-a-small-home',
    categorySlug: 'off-grid',
    title: 'Solar Setups for a Small Home',
    summary:
      'A starter guide to sizing panels, batteries, and inverter capacity for everyday needs.',
    status: 'coming-soon',
    readTime: '7 min read',
  },
  {
    slug: 'off-grid-home-checklist',
    categorySlug: 'off-grid',
    title: 'The Off-grid Home Checklist',
    summary: 'A decision checklist for shelter, power, water, communications, and backup plans.',
    status: 'coming-soon',
    readTime: '6 min read',
  },
  {
    slug: 'tiny-home-technologies-that-make-small-spaces-work',
    categorySlug: 'tiny-homes',
    title: '12 Tiny-Home Technologies That Make Small Spaces Work',
    summary:
      'The systems and fittings that let a small footprint function like a full-size home, not a compromise.',
    status: 'published',
    readTime: '9 min read',
    lastUpdated: '2026-09-15',
    body: [
      'A tiny home stops feeling small when the systems inside it are chosen for the footprint, not shrunk down from a full-size house. The layouts that work best combine a handful of dual-purpose fittings with a few pieces of technology that quietly do the job of two or three appliances.',
      'Start with climate: a single mini-split heat pump sized correctly for the square footage will out-perform a window unit and a space heater combined, and it does it on a fraction of the power draw, which matters if any part of the home runs on stored or solar power.',
      'In the kitchen, an induction cooktop paired with compact ventilation frees up the counter and cabinet space a gas range and hood would take, and it runs safely in a space where clearance is tight. Combination washer-dryer units solve the same problem for the utility side of the home.',
      'Storage technology matters as much as appliances: hydraulic lift beds, stair-integrated drawers, and fold-flat furniture are the difference between a home that feels cramped and one that feels considered. The best tiny-home builds treat storage as a system to design, not a gap to fill afterward.',
      "We're verifying pricing and real-world durability on each category below before linking to specific products. Merchant links go live only once we've confirmed availability and an affiliate relationship exists.",
    ],
    productIdeas: [
      {
        id: 'mini-split-heat-pump',
        title: 'Compact Mini-Split Heat Pump',
        category: 'Climate control',
        priceRange: '$600 - $1,800',
        merchantStatus: 'unverified',
        description:
          'Size against square footage and insulation, not just the marketed room count.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'induction-cooktop',
        title: 'Two-Burner Induction Cooktop',
        category: 'Kitchen',
        priceRange: '$120 - $350',
        merchantStatus: 'shortlisted',
        description: 'Compare wattage draw and pan compatibility before committing to a model.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'hydraulic-lift-bed',
        title: 'Hydraulic Lift-Storage Bed Frame',
        category: 'Storage furniture',
        priceRange: '$400 - $1,200',
        merchantStatus: 'unverified',
        description:
          'Check lift capacity and mattress-thickness limits against your actual mattress.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'quiet-smart-home-upgrades-worth-trying',
    categorySlug: 'smart-home',
    title: '7 Quiet Smart-Home Upgrades Worth Trying',
    summary:
      'Small, considered automation that lowers a bill or removes a chore without adding a new app to babysit.',
    status: 'published',
    readTime: '7 min read',
    lastUpdated: '2026-09-15',
    body: [
      'The smart-home upgrades worth having are the ones you stop thinking about within a week. That usually means a small number of well-chosen devices working on a stable local network, not a shelf of gadgets that all want their own app.',
      'A smart thermostat with real occupancy sensing pays for itself through the heating and cooling bill alone, and the payback is measurable within a season rather than a guess. Look for local scheduling that still works if the internet connection drops.',
      'Energy-monitoring smart plugs on a handful of high-draw devices (the kettle, the dryer, an older fridge) turn a vague utility bill into a number you can act on. This is the cheapest upgrade on the list and the one with the clearest evidence.',
      'A video doorbell with local storage avoids the recurring subscription fee that most cloud-only models require, and it solves the actual problem most people buy one for: knowing who is at the door without a subscription.',
      "We're testing each category for reliability and total cost of ownership, including subscription fees, before recommending specific models here.",
    ],
    productIdeas: [
      {
        id: 'smart-thermostat',
        title: 'Occupancy-Sensing Smart Thermostat',
        category: 'Climate control',
        priceRange: '$130 - $280',
        merchantStatus: 'shortlisted',
        description: 'Confirm local scheduling works without an internet connection before buying.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'energy-monitoring-plug',
        title: 'Energy-Monitoring Smart Plug (3-pack)',
        category: 'Energy monitoring',
        priceRange: '$35 - $70',
        merchantStatus: 'verified',
        description: 'Best entry point \u2014 low cost, immediate and measurable bill feedback.',
        ctaLabel: 'See tested options',
        enabled: false,
      },
      {
        id: 'video-doorbell-local-storage',
        title: 'Video Doorbell (Local Storage)',
        category: 'Home security',
        priceRange: '$100 - $220',
        merchantStatus: 'unverified',
        description:
          'Check subscription requirements carefully \u2014 many advertised prices exclude storage fees.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
  {
    slug: 'smart-pet-tech-worth-the-money',
    categorySlug: 'pet-wellness',
    title: 'Smart Pet Tech Worth the Money',
    summary:
      'A grounded look at GPS trackers, automatic feeders, and air purifiers before you add a pet subscription.',
    status: 'published',
    readTime: '7 min read',
    lastUpdated: '2026-09-15',
    body: [
      'Pet tech has the same problem as human smart-home gadgets: a lot of it is a subscription wrapped around a sensor. The products worth having are the ones that solve a real daily problem \u2014 knowing where a pet is, feeding on schedule when you cannot be home, or keeping shed fur and dander from building up in the air \u2014 without locking the core feature behind a monthly fee.',
      'GPS trackers vary enormously in real-world range and battery life once you leave a suburban yard for open trail or rural land. Check the actual reported battery life under continuous live-tracking, not the standby figure, and confirm whether the safe-zone alert works without a paid tier.',
      'Automatic feeders solve a genuine problem for multi-pet households and irregular schedules, but portion accuracy drifts over time on cheaper units. Look for a mechanism that has a published accuracy tolerance and a hopper that will not jam with the specific food texture you feed.',
      'Air purifiers marketed specifically for pet homes mostly differ from general models in filter media tuned for dander and odour rather than raw airflow. The filter replacement cost over a year often matters more than the unit price, so total cost of ownership is the number to compare.',
      "We're verifying real battery life, portion accuracy, and filter costs across each category before linking to specific products. Nothing below is a paid placement \u2014 merchant links go live only once availability and an affiliate relationship are confirmed.",
    ],
    productIdeas: [
      {
        id: 'gps-pet-tracker',
        title: 'GPS Pet Tracker (No Subscription Required)',
        category: 'Safety & tracking',
        priceRange: '$40 - $100',
        merchantStatus: 'unverified',
        description:
          'Confirm real-world tracking range and safe-zone alerts work without a paid tier.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
      {
        id: 'automatic-pet-feeder',
        title: 'Automatic Pet Feeder (Portion-Accurate)',
        category: 'Feeding',
        priceRange: '$60 - $180',
        merchantStatus: 'shortlisted',
        description: 'Compare portion accuracy tolerance and hopper jam rate before buying.',
        ctaLabel: 'Price check',
        enabled: false,
      },
      {
        id: 'pet-air-purifier',
        title: 'Pet-Specific Air Purifier',
        category: 'Air quality',
        priceRange: '$120 - $350',
        merchantStatus: 'unverified',
        description: 'Weigh filter replacement cost per year alongside the upfront unit price.',
        ctaLabel: 'Merchant pending',
        enabled: false,
      },
    ],
  },
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.categorySlug === categorySlug);
}
