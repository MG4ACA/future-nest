<script setup lang="ts">
import { getCategory } from '~/data/categories';

const category = getCategory('halloween')!;

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
      <img
        v-if="category.image"
        :src="category.image"
        :alt="category.imageAlt"
        class="category-image"
      />
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.category-hero {
  max-width: 720px;
  padding: 110px 0 140px;
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
  margin-bottom: 40px;
}

.category-image {
  width: 100%;
  max-width: 640px;
  height: auto;
  border: 1px solid var(--line);
}
</style>
