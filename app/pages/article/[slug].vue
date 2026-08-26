<script setup lang="ts">
import { computed } from 'vue';
import { getArticle } from '~/data/articles';
import { getCategory } from '~/data/categories';

const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ''));
const article = computed(() => getArticle(slug.value));

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  });
}

const category = computed(() => getCategory(article.value!.categorySlug));
const accent = computed(() => category.value?.accent ?? '#4f6d5a');

useSeoMeta(() => ({
  title: `${article.value?.title ?? 'Article'} | FutureNest`,
  description: article.value?.summary ?? 'FutureNest article.',
}));
</script>

<template>
  <div class="page-shell">
    <SiteHeader />

    <section class="article-hero" :style="{ '--tint': accent }" aria-labelledby="article-title">
      <p class="eyebrow">{{ category?.title ?? 'FutureNest' }}</p>
      <h1 id="article-title">{{ article?.title }}</h1>
      <p class="article-summary">{{ article?.summary }}</p>
      <div class="article-meta">
        <span class="status-chip">
          {{ article?.status === 'coming-soon' ? 'Coming soon' : 'Published' }}
        </span>
        <span v-if="article?.readTime" class="read-time">{{ article.readTime }}</span>
        <span v-if="article?.lastUpdated" class="updated">Updated {{ article.lastUpdated }}</span>
      </div>
    </section>

    <section class="body-section" aria-labelledby="body-title">
      <div class="section-heading">
        <p class="eyebrow">Structure</p>
        <h2 id="body-title">Article route is now live.</h2>
      </div>
      <p class="body-copy">
        This page is intentionally lightweight while validation is in progress. It provides a stable
        URL for Pinterest and a reusable layout for long-form content.
      </p>
      <p class="body-copy">
        Next, each article can be expanded with tested recommendations, diagrams, and updated
        pricing.
      </p>
    </section>

    <section
      v-if="article?.productIdeas?.length"
      class="products-section"
      aria-labelledby="products-title"
    >
      <div class="section-heading">
        <p class="eyebrow">Placeholder products</p>
        <h2 id="products-title">Reusable card slots for recommendations.</h2>
      </div>
      <div class="product-grid">
        <ProductCard
          v-for="product in article.productIdeas"
          :key="product.id"
          :title="product.title"
          :category="product.category"
          :price-range="product.priceRange"
          :merchant-status="product.merchantStatus"
          :description="product.description"
          :cta-label="product.ctaLabel"
          :href="product.href"
          :enabled="product.enabled"
          :accent="accent"
        />
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.article-hero {
  max-width: 760px;
  padding: 120px 0 88px;
}

h1 {
  margin-bottom: 24px;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  line-height: 0.94;
  letter-spacing: -0.03em;
}

.article-summary {
  max-width: 620px;
  margin-bottom: 24px;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.55;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.status-chip {
  padding: 6px 10px;
  border: 1px solid var(--line);
  color: color-mix(in srgb, var(--tint, var(--warm)) 76%, var(--ink));
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.read-time,
.updated {
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 0.76rem;
}

.body-section {
  padding-top: 62px;
  padding-bottom: 78px;
  border-top: 1px solid var(--line);
}

.body-copy {
  max-width: 700px;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.65;
}

.products-section {
  padding-top: 54px;
  padding-bottom: 120px;
  border-top: 1px solid var(--line);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
