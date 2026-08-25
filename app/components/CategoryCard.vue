<script setup lang="ts">
import type { Category } from '~/data/categories';

defineProps<{ category: Category }>();
</script>

<template>
  <NuxtLink :to="`/${category.slug}`" class="topic-card" :style="{ '--tint': category.accent }">
    <div class="topic-media">
      <img v-if="category.image" :src="category.image" :alt="category.imageAlt" loading="lazy" />
      <PlaceholderArt
        v-else
        :label="`${category.title} artwork coming soon`"
        :glyph="category.number"
      />
    </div>
    <div class="topic-body">
      <span class="topic-number">{{ category.number }}</span>
      <h3>{{ category.title }}</h3>
      <p>{{ category.description }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.topic-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  text-decoration: none;
  color: inherit;
  background: var(--paper-raised);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.topic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(23, 33, 31, 0.12);
}

.topic-media {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.topic-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.topic-body {
  padding: 22px 24px 26px;
}

.topic-number {
  display: block;
  margin-bottom: 14px;
  color: var(--tint, var(--warm));
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
}

.topic-body h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 400;
}

.topic-body p {
  margin-bottom: 0;
  max-width: 32ch;
  color: var(--muted);
  line-height: 1.5;
}
</style>
