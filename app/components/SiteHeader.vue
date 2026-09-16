<script setup lang="ts">
import { ref } from 'vue';
import { categories } from '~/data/categories';

const route = useRoute();
const isActive = (path: string) => route.path === path;

const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);

// Close menu on route change
watch(() => route.path, () => {
  menuOpen.value = false;
});
</script>

<template>
  <header class="site-header">
    <NuxtLink class="brand" to="/" aria-label="FutureNest home">FutureNest</NuxtLink>

    <!-- Desktop nav -->
    <nav class="desktop-nav" aria-label="Primary navigation">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/${category.slug}`"
        :class="{ active: isActive(`/${category.slug}`) }"
      >
        {{ category.title.split(' ')[0] === 'Halloween' ? 'Halloween' : category.title.split(' ')[0] }}
      </NuxtLink>
      <NuxtLink to="/#about">About</NuxtLink>
    </nav>

    <!-- Mobile hamburger -->
    <button
      class="hamburger"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      aria-label="Toggle navigation"
      :aria-expanded="menuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <NuxtLink
          v-for="category in categories"
          :key="category.slug"
          :to="`/${category.slug}`"
          :class="{ active: isActive(`/${category.slug}`) }"
        >
          {{ category.title }}
        </NuxtLink>
        <NuxtLink to="/#about">About</NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-sans);
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  z-index: 100;
}

.brand {
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

/* Desktop nav */
.desktop-nav {
  display: flex;
  flex-wrap: nowrap;
  gap: 28px;
}

.desktop-nav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;
}

.desktop-nav a.active,
.desktop-nav a:hover {
  color: var(--ink);
}

/* Hamburger button */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: 36px;
  height: 36px;
}

.hamburger span {
  display: block;
  height: 1.5px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile nav drawer */
.mobile-nav {
  position: absolute;
  top: calc(100% + 1px);
  left: -24px;
  right: -24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  padding: 8px 24px 20px;
  z-index: 99;
}

.mobile-nav a {
  color: var(--muted);
  text-decoration: none;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-nav a.active,
.mobile-nav a:hover {
  color: var(--ink);
}

/* Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 780px) {
  .desktop-nav {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
