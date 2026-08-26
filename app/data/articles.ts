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
