/** Category metadata shared by the homepage grid and each category landing page. */
export interface Category {
  slug: string;
  title: string;
  number: string;
  description: string;
  accent: string;
  /** Path under /public. Omitted when no verified photography exists yet. */
  image?: string;
  imageAlt?: string;
}

export const categories: Category[] = [
  {
    slug: 'off-grid',
    title: 'Off-Grid Living',
    number: '01',
    description: 'Resilient energy, water, and shelter systems for living with less.',
    accent: '#4f6d5a',
  },
  {
    slug: 'smart-home',
    title: 'Smart Home',
    number: '02',
    description: 'Quiet technology and considered upgrades for everyday spaces.',
    accent: '#3f5770',
  },
  {
    slug: 'tiny-homes',
    title: 'Tiny Homes',
    number: '03',
    description: 'Small-footprint layouts and ideas that make compact living feel spacious.',
    accent: '#7a6a4f',
  },
  {
    slug: 'halloween',
    title: 'Halloween Home Decor & DIY',
    number: '04',
    description: 'Warm, modern styling ideas for a home that feels alive this season.',
    accent: '#c05621',
    image: '/images/halloween/porch-ideas.jpeg',
    imageAlt: 'Modern Halloween porch styled with pumpkins, dried branches, and warm lanterns',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
