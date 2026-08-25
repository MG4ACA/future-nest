<script setup lang="ts">
import { categories } from '~/data/categories';

const route = useRoute();
const isActive = (path: string) => route.path === path;
</script>

<template>
  <header class="site-header">
    <NuxtLink class="brand" to="/" aria-label="FutureNest home">FutureNest</NuxtLink>
    <nav aria-label="Primary navigation">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/${category.slug}`"
        :class="{ active: isActive(`/${category.slug}`) }"
      >
        {{ category.title.split(' ')[0] === 'Halloween' ? 'Halloween' : category.title }}
      </NuxtLink>
      <NuxtLink to="/#about">About</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-sans);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

.brand {
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

nav a {
  color: var(--muted);
  text-decoration: none;
}

nav a.active,
nav a:hover {
  color: var(--ink);
}
</style>
