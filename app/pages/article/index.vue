<script setup lang="ts">
import { getArticles } from '~/data/articles';

const articles = getArticles();

useSeoMeta({
  title: 'Articles | FutureNest',
  description: 'Research-backed articles and in-progress guides from FutureNest.',
});
</script>

<template>
  <div class="page-shell">
    <SiteHeader />

    <section class="article-index-hero" aria-labelledby="article-index-title">
      <p class="eyebrow">FutureNest Library</p>
      <h1 id="article-index-title">Articles and field notes.</h1>
      <p class="hero-copy">
        Practical guides in progress for off-grid, smart home, tiny homes, and seasonal experiments.
      </p>
    </section>

    <section class="article-index-grid-wrap" aria-labelledby="article-grid-title">
      <div class="section-heading">
        <p class="eyebrow">All entries</p>
        <h2 id="article-grid-title">Browse by topic.</h2>
      </div>
      <div class="article-grid">
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :title="article.title"
          :description="article.summary"
          :status="article.status"
          :to="`/article/${article.slug}`"
          :read-time="article.readTime"
        />
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.article-index-hero {
  max-width: 760px;
  padding: 120px 0 100px;
}

h1 {
  margin-bottom: 24px;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.hero-copy {
  max-width: 560px;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.5;
}

.article-index-grid-wrap {
  padding-top: 60px;
  padding-bottom: 120px;
  border-top: 1px solid var(--line);
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
