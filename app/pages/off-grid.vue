<script setup lang="ts">
import { getCategory } from '~/data/categories';

const category = getCategory('off-grid')!;

useSeoMeta({
  title: `${category.title} | FutureNest`,
  description: category.description,
});

const upcomingArticles = [
  {
    title: 'Off-grid Gadgets Worth Comparing',
    description: 'A practical comparison of power, water, and lighting tools for going off-grid.',
  },
  {
    title: 'Solar Setups for a Small Home',
    description: 'What to weigh before choosing a first solar or battery setup.',
  },
  {
    title: 'The Off-grid Home Checklist',
    description: 'The essentials to plan for before a longer stay away from the grid.',
  },
];
</script>

<template>
  <div class="page-shell">
    <SiteHeader />

    <section
      class="category-hero"
      :style="{ '--tint': category.accent }"
      aria-labelledby="category-title"
    >
      <p class="eyebrow">Category {{ category.number }}</p>
      <h1 id="category-title">{{ category.title }}</h1>
      <p class="category-copy">{{ category.description }}</p>
    </section>

    <section class="articles-section" aria-labelledby="articles-title">
      <div class="section-heading">
        <p class="eyebrow">In progress</p>
        <h2 id="articles-title">What we're building next.</h2>
      </div>
      <p class="disclosure">
        These articles are still in research. We publish product recommendations only after
        verifying claims, pricing, and availability.
      </p>
      <div class="article-grid">
        <ArticleCard
          v-for="article in upcomingArticles"
          :key="article.title"
          :title="article.title"
          :description="article.description"
          :accent="category.accent"
        />
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.category-hero {
  max-width: 720px;
  padding: 110px 0 80px;
}

h1 {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.category-copy {
  max-width: 480px;
  color: var(--muted);
  font-size: 1.15rem;
  line-height: 1.5;
}

.articles-section {
  padding-top: 60px;
  padding-bottom: 120px;
  border-top: 1px solid var(--line);
}

.disclosure {
  max-width: 620px;
  margin: -20px 0 40px;
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  line-height: 1.5;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
</style>
