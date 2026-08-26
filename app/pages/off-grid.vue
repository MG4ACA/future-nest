<script setup lang="ts">
import { getArticlesByCategory } from '~/data/articles';
import { getCategory } from '~/data/categories';

const category = getCategory('off-grid')!;
const articles = getArticlesByCategory(category.slug);

const productPlaceholders =
  articles.find((article) => article.slug === 'off-grid-gadgets-worth-comparing')?.productIdeas ??
  [];

useSeoMeta({
  title: `${category.title} | FutureNest`,
  description: category.description,
});
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
          v-for="article in articles"
          :key="article.slug"
          :title="article.title"
          :description="article.summary"
          :status="article.status"
          :to="`/article/${article.slug}`"
          :read-time="article.readTime"
          :accent="category.accent"
        />
      </div>
    </section>

    <section class="products-section" aria-labelledby="products-title">
      <div class="section-heading">
        <p class="eyebrow">Product module</p>
        <h2 id="products-title">Reusable product-card placeholders.</h2>
      </div>
      <div class="product-grid">
        <ProductCard
          v-for="product in productPlaceholders"
          :key="product.id"
          :title="product.title"
          :category="product.category"
          :price-range="product.priceRange"
          :merchant-status="product.merchantStatus"
          :description="product.description"
          :cta-label="product.ctaLabel"
          :href="product.href"
          :enabled="product.enabled"
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
  padding-bottom: 80px;
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

.products-section {
  padding-top: 50px;
  padding-bottom: 120px;
  border-top: 1px solid var(--line);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .article-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
