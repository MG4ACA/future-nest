<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    /** Displayed while the article has not been published yet. */
    status?: 'coming-soon' | 'published';
    accent?: string;
  }>(),
  { status: 'coming-soon', accent: undefined },
);
</script>

<template>
  <article class="article-card" :style="accent ? { '--tint': accent } : undefined">
    <PlaceholderArt :label="`${title} preview artwork coming soon`" />
    <div class="article-body">
      <span v-if="status === 'coming-soon'" class="status-badge">Coming soon</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--paper-raised);
}

.article-body {
  padding: 22px 24px 26px;
}

.status-badge {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--tint, var(--warm));
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.article-body h3 {
  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 400;
}

.article-body p {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.5;
}
</style>
